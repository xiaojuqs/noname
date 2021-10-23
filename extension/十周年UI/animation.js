'use strict';
decadeParts.import(function(lib, game, ui, get, ai, _status){
	decadeUI.AnimationPlayer = (function(){
		function AnimationPlayer (pathPrefix, parentNode, elementId) {
			if (!window.spine) return console.error('spine 未定义.');
			
			var canvas = document.createElement('canvas');
			canvas.className = 'animation-player';
			if (elementId != void 0) canvas.id = elementId;
			if (parentNode != void 0) parentNode.appendChild(canvas); 
			
			var config = { alpha: true };
			var gl = canvas.getContext('gl', config) || canvas.getContext('experimental-webgl', config);
			if (gl) {
				this.spine = {
					shader: spine.webgl.Shader.newTwoColoredTextured(gl),
					batcher: new spine.webgl.PolygonBatcher(gl),
					skeletonRenderer: new spine.webgl.SkeletonRenderer(gl),
					shapes: new spine.webgl.ShapeRenderer(gl),
					assetManager: new spine.webgl.AssetManager(gl),
					assets: {},
					animations: [],
				}
			} else {
				this.spine = {
					assets: {},
				};
				console.error('当前设备不支持 WebGL.');
			}
			
			this.gl = gl;
			this.canvas = canvas;
			this.$canvas = canvas;
			this.pathPrefix = pathPrefix;
			this.frameTime = void 0;
			this.running = false;
			this.sizeUpdated = false;
			this.adaptiveDPR = false;
			this.canvas.width = canvas.clientWidth;
			this.canvas.height = canvas.clientHeight;
			
			this.check = function () {
				if (!this.gl) {
					function empty(){};
					var key;
					for (key in this.__proto__) {
						if (typeof this.__proto__[key] == 'function') {
							this.__proto__[key] = empty;
						}
					}
					
					for (key in this) {
						if (typeof this[key] == 'function' && key != 'check') {
							this[key] = empty;
						}
					}
					
				}
			};
			
			this.check();
		};
		
		AnimationPlayer.prototype.createTextureRegion = function (image, name) {
			var page = new spine.TextureAtlasPage();
			page.name = name;
			page.uWrap = spine.TextureWrap.ClampToEdge;
			page.vWrap = spine.TextureWrap.ClampToEdge;
			page.texture = this.spine.assetManager.textureLoader(image);
			page.texture.setWraps(page.uWrap, page.vWrap);
			page.width = page.texture.getImage().width;
			page.height = page.texture.getImage().height;
			
			
			
			var region = new spine.TextureAtlasRegion();
			region.page = page;
			region.rotate = false;
			region.width = page.width;
			region.height = page.height;
			region.x = 0;
			region.y = 0;
			region.u = region.x / page.width;
			region.v = region.y / page.height;
			if (region.rotate) {
				region.u2 = (region.x + region.height) / page.width;
				region.v2 = (region.y + region.width) / page.height;
			}
			else {
				region.u2 = (region.x + region.width) / page.width;
				region.v2 = (region.y + region.height) / page.height;
			}
			
			region.originalWidth = page.width;
			region.originalHeight = page.height;
			region.index = -1;
			region.texture = page.texture;
			region.renderObject = region;
			
			return region;
		};
		
		AnimationPlayer.prototype.loadSpine = function (filename, skelType, onload, onerror) {
			var thisAnim = this;
			var counter = {
				name: filename,
				filename: filename,
				onsuccess: onload,
				onfailed: onerror,
				loads: 0,
				errors: 0,
				loadMax: 3,
			};
			
			counter.onload = function(){
				counter.loads++;
				if (counter.loads + counter.errors == counter.loadMax) {
					if (counter.errors > 0) {
						console.error('spine: 加载 [' + counter.filename + '] 失败.');
						if (counter.onfailed !== void 0) {
							counter.onfailed();
						}
					} else {
						thisAnim.spine.assets[counter.filename] = { name: counter.filename, skelType: skelType };
						if (counter.onsuccess !== void 0) {
							counter.onsuccess();
						}
					}
				}
			};
			
			counter.onloadText = function(path, data){
				var reader =  new spine.TextureAtlasReader(data);
				var increment = 0;
				var imageName = null;
				
				while (true) {
					var line = reader.readLine();
					if (line == null) break;
					line = line.trim();
					
					if (line.length == 0) {
						imageName = null;
					} else if (!imageName) {
						imageName = line;
						counter.loadMax += increment;
						thisAnim.spine.assetManager.loadTexture(thisAnim.pathPrefix + imageName,
							counter.onload, counter.onrror);
						increment++;
					} else {
						continue;
					}
				}
				
				counter.onload();
			}
			
			counter.onerror = function(){
				counter.errors++;
				if (counter.loads + counter.errors == counter.loadMax) {
					console.error('spine: 加载 [' + counter.filename + '] 失败.');
					if (counter.onfailed !== void 0) {
						counter.onfailed();
					}
				}
			};
			
			if (skelType != void 0 && skelType.toLowerCase() == 'json') {
				skelType = 'json';
				thisAnim.spine.assetManager.loadText(thisAnim.pathPrefix + filename + '.json',
					counter.onload, counter.onrror);
			} else {
				skelType = 'skel';
				thisAnim.spine.assetManager.loadBinary(thisAnim.pathPrefix + filename + '.skel',
					counter.onload, counter.onrror);
			}
			
			thisAnim.spine.assetManager.loadText(thisAnim.pathPrefix + filename + '.atlas',
				counter.onloadText, counter.onrror);

			
		};
		
		AnimationPlayer.prototype.prepSpine = function (filename, autoLoad) {
			var thisAnim = this;
			
			if (!thisAnim.spine.assets[filename]) {
				if (autoLoad) {
					thisAnim.loadSpine(filename, 'skel', function(){
						thisAnim.prepSpine(filename);
					});
					return 'loading';
				}
				console.error('spine: 未找到[' + filename + ']动画资源.');
				return null;
			}
			
			var asset = thisAnim.spine.assets[filename];
			var assetManager = thisAnim.spine.assetManager;
			var skelRawData = asset.skelRawData;
			if (!skelRawData) {
				var atlas = new spine.TextureAtlas(assetManager.get(thisAnim.pathPrefix + filename + '.atlas'),
					function(path){
						return assetManager.get(thisAnim.pathPrefix + path);
					}
				);
				
				var atlasLoader = new spine.AtlasAttachmentLoader(atlas);
				if (asset.skelType.toLowerCase() == 'json') {
					skelRawData = new spine.SkeletonJson(atlasLoader);
				} else {
					skelRawData = new spine.SkeletonBinary(atlasLoader);
				}
				
				thisAnim.spine.assets[filename].skelRawData = skelRawData;
				thisAnim.spine.assets[filename].ready = true;
			}
			
			var skeletonData = skelRawData.readSkeletonData(assetManager.get(thisAnim.pathPrefix + filename + '.' + asset.skelType));
			var skeleton = new spine.Skeleton(skeletonData);
			skeleton.setSkinByName('default');
			skeleton.setToSetupPose();
			skeleton.updateWorldTransform();
			
			var bounds = {
				offset: new spine.Vector2(),
				size: new spine.Vector2(),
			};
			
			skeleton.getBounds(bounds.offset, bounds.size, []);
			var animationStateData = new spine.AnimationStateData(skeleton.data);
			var animationState = new spine.AnimationState(animationStateData);
			
			animationState.addListener({
				complete:function(track){
					if (animation.loopCount > 0) animation.loopCount--;
					if (!track.loop) {
						animation.completed = true;
					} else if (animation.loopCount == 0) {
						track.loop = false;
					}
					
					if (animation.complete) animation.complete();
				}
			});
			
			var animations = thisAnim.spine.animations;
			var animation = {
				id: animations.length,								// id
				name: filename,										// 名称(文件路径)
				action: skeletonData.animations[0].name,			// 动作
				defaultAction: skeletonData.animations[0].name,		// 默认动作
				skeleton: skeleton,									// 骨骼
				skeletonData: skeletonData,							// 骨骼数据
				state: animationState,								// 状态
				bounds: bounds,										// 实际大小
				position: undefined,								// 播放位置
				premultipliedAlpha: false,							// 预乘Alpha
				loop: false, 		 								// 是否循环
				loopCount: -1,		 								// 循环次数，只有loop为true时生效
				speed: 1,			 								// 播放速度
				filpX: undefined,		 							// boolean 水平镜像
				filpY: undefined,		 							// boolean 垂直翻转
				opacity: undefined,									// 0~1     不透明度
				callback: undefined, 								// 每帧绘制前回调
				complete: undefined, 								// 每次播放完成后回调
				completed: true,									// 是否播放结束
				mvp: new spine.webgl.Matrix4(),
				rawResetData: {
					filpX: skeleton.flipX,
					filpY: skeleton.filpY,
					opacity: skeleton.color.a,
				},
				reset: function() {
					this.action = this.defaultAction = this.skeletonData.animations[0].name;
					this.position = undefined;
					this.premultipliedAlpha = false;
					this.loop = false;
					this.loopCount = -1;
					this.speed = 1;
					this.flipX = this.skeleton.flipX = this.rawResetData.flipX;
					this.flipY = this.skeleton.flipY = this.rawResetData.flipY;
					this.opacity = this.skeleton.color.a = this.rawResetData.opacity;
					this.callback = undefined;
					this.complete = undefined;
					this.completed = true;
				},
			};
			
			animation.mvp.ortho2d(0, 0, thisAnim.canvas.width, thisAnim.canvas.height);
			animations.push(animation);
			
			return animation;
		};
		
		AnimationPlayer.prototype.playSpine = function (animation, position){
			if (!decadeUI.config.gameAnimationEffect) return;
			
			switch (typeof animation) {
				case 'string':
					var t = {
						name: animation,	 //	string 动画名称
						action: undefined,	 // string 播放动作
						loop: false, 		 // boolean 是否循环
						loopCount: -1,		 // number 循环次数，只有loop为true时生效
						speed: 1,			 // number 播放速度
						filpX: undefined,	 // boolean 水平镜像
						filpY: undefined,	 // boolean 垂直翻转
						opacity: undefined,	 // 0~1		不透明度
						callback: undefined, // function() 每帧回调
						complete: undefined, // function() 每次播放完成后回调
					};
					
					animation = t;
					break;
					
				case 'number':
					// 待实现
					break;
						
			}
			
			var assets = this.spine.assets;
			if (!assets[animation.name]) {
				return console.error('spine: 未加载资源[' + animation.name + ']');
			}

			var animations = this.spine.animations;
			var foundAnimation;

			for (var i = 0; i < animations.length; i++) {
				if (animations[i].name == animation.name && animations[i].completed) {
					foundAnimation = animations[i++];
					// 调整Z轴
					while (i < animations.length) {
						animations[i - 1] = animations[i++];
					}
					
					animations[animations.length - 1] = foundAnimation;
					break;
				}
			}
			
			if (!foundAnimation) foundAnimation = this.prepSpine(animation.name);
			foundAnimation.reset();
			if (animation.action) foundAnimation.action = animation.action;
			if (animation.loop)	foundAnimation.loop = animation.loop;
			if (animation.loopCount) foundAnimation.loopCount = animation.loopCount;
			if (animation.speed)	foundAnimation.speed = animation.speed;
			if (animation.callback)	foundAnimation.callback = animation.callback;
			if (animation.complete)	foundAnimation.complete = animation.complete;
			if (animation.flipX) foundAnimation.skeleton.flipX = animation.flipX;
			if (animation.flipY) foundAnimation.skeleton.flipY = animation.flipY;
			if (animation.opacity) foundAnimation.skeleton.color.a = animation.opacity;
			
			return this.playSpineAnimation(foundAnimation, position);
		};
		
		AnimationPlayer.prototype.loopSpine = function (animation, position) {
			if (typeof animation == 'string') {
				animation = {
					name: animation,
					loop: true,
				}
			} else {
				animation.loop = true;
			}
			
			return this.playSpine(animation, position);
		};
		
		AnimationPlayer.prototype.stopSpine = function (id) {
			var animations = this.spine.animations;
			for (var i = 0; i < animations.length; i++) {
				if (animations[i].id == id) {
					if (!animations[i].completed) {
						animations[i].state.setEmptyAnimation(0);
					}
					return true;
				}
			}
			
			return false;
		};
		
		AnimationPlayer.prototype.stopSpineAll = function () {
			var animations = this.spine.animations;
			for (var i = 0; i < animations.length; i++) {
				if (!animations[i].completed) {
					animations[i].state.setEmptyAnimation(0);
				}
			}
		};
		
		AnimationPlayer.prototype.playSpineAnimation = function (animation, position) {
			var index = this.spine.animations.indexOf(animation);
			if (index == -1) return console.error('spine: animation not found');
			
			var x, y, width, height, scale, angle, parent, follow;
			if (position != void 0) {
				x = position.x;
				y = position.y;
				height = position.height;
				width = position.width;
				scale = position.scale;
				angle = position.angle;
				parent = position.parent;
				follow = position.parent;
			}
			
			position = {
				x: x,
				y: y,
				height: height,
				width: width,
				scale: scale,
				angle: angle,
				parent: parent,
				follow: follow,
			}
			
			animation.completed = false;
			animation.position = position;
			animation.state.setAnimation(0, animation.action ? animation.action : animation.defaultAction,
				animation.loop);
			
			// var track = animation.state.getCurrent(0);
			// track.timeScale = -1;
			// track.trackTime = track.animationEnd;
			
			if (this.requestId == void 0) {
				this.running = true;
				this.canvas.style.visibility = 'visible';
				this.requestId = requestAnimationFrame(this.render.bind(this));
			}
			
			return animation;
		};
		
		AnimationPlayer.prototype.getSpineAnimation = function (filename) {
			if (!this.spine.assets[filename]) {
				console.error('spine: 未找到"' + filename + '"的动画资源.');
				return null;
			}
			
			var animations = this.spine.animations;
			var animation;
			
			for (var i = 0; i < animations.length; i++) {
				animation = animations[i];
				if (animation.name == filename && animation.completed) break;
				animation = null;
			}
			
			return animation != null ? animation : this.prepSpine(filename);
		};
		
		AnimationPlayer.prototype.getSpineActions = function (filename) {
			var animation = this.getSpineAnimation(filename);
			if (!animation) return null;
			var actions = animation.skeletonData.animations;
			var result = new Array(actions.length);
			for (var i = 0; i < actions.length; i++) result[i] = { name: actions[i].name, duration: actions[i].duration };
			return result;
		};
		
		AnimationPlayer.prototype.getSpineBounds = function (filename) {
			if (!this.sizeUpdated) {
				var dpr = this.adaptiveDPR ? (Math.max(window.devicePixelRatio * game.documentZoom, 1)) : 1;
				canvas.elementHeight = canvas.clientHeight;
				canvas.elementWidth = canvas.clientWidth;
				canvas.height = canvas.elementHeight * dpr;
				canvas.width = canvas.elementWidth * dpr;
			}
			return this.getSpineAnimation(filename).bounds;
		};
		
		AnimationPlayer.prototype.resizeSkeleton = function (skeleton) {
			var x,
				y,
				width,
				height,
				ox,
				oy,
				dx,
				dy,
				canvas = this.canvas,
				position = skeleton.position;
			
			var scale = position.scale;
			var angle = position.angle;
			var size = { width: canvas.width, height: canvas.height };
			var isElement = position.parent instanceof HTMLElement;
			var dpr = this.adaptiveDPR ? (Math.max(window.devicePixelRatio * game.documentZoom, 1)) : 1;
			
			if (isElement && (position.follow || !position.init)) {
				var rect = position.parent.getBoundingClientRect();
				ox = rect.left * dpr;
				oy = (document.body.offsetHeight - rect.top) * dpr;
				
				dx = ox + rect.width  / 2 * dpr;
				dy = oy - rect.height / 2 * dpr;
				size.width = rect.width * dpr;
				size.height = rect.height * dpr;
			}
			
			if (position.x != void 0) {
				var tx;
				if (Array.isArray(position.x)) {
					tx = position.x[0] * dpr + position.x[1] * size.width;
				} else {
					tx = position.x * dpr;
				}
				
				if (x == void 0) {
					x = tx;
				} else {
					x += tx;
				}
			}
			
			if (position.y != void 0) {
				var ty;
				if (Array.isArray(position.y)) {
					ty = position.y[0] * dpr + position.y[1] * size.height;
				} else {
					ty = position.y * dpr;
				}
				
				if (y == void 0) {
					y = ty;
				} else {
					y += ty;
				}
			}
			
			
			if (isElement && (position.follow || !position.init)) {
				if (position.x == void 0) {
					x = dx;
				} else {
					x += ox;
				}
				
				if (position.y == void 0) {
					y = dy;
				} else {
					y += oy;
				}
				
				if (!position.follow) {
					position.x = x;
					position.y = y;
					position.parent = null;
				}
				
				position.init = true;
			}
			
			
			skeleton.mvp.ortho2d(0, 0, canvas.width, canvas.height);
			
			if (x != void 0 && y == void 0) {
				skeleton.mvp.translate(x, 0, 0);
				skeleton.mvp.setY(0);
			} else if (x == void 0 && y != void 0) {
				skeleton.mvp.translate(0, y, 0);
				skeleton.mvp.setX(0);
			} else if (x != void 0 && y != void 0) {
				skeleton.mvp.translate(x, y, 0);
			} else {
				skeleton.mvp.setPos2D(0, 0);
			}
			
			if (scale && scale != 1) {
				scale *= dpr;
				skeleton.mvp.scale(scale, scale, 0);
			}
			
			if (angle) {
				skeleton.mvp.rotate(angle, 0, 0, 1);
			}
		};
		
		AnimationPlayer.prototype.render = function () {
			var completed = true,
				now = performance.now() / 1000,
				canvas = this.canvas,
				animations = this.spine.animations;
				
			var delta = now - (this.frameTime == void 0 ? now : this.frameTime);
			this.frameTime = now;
			for (var i = 0; i < animations.length; i++) {
				if (!animations[i].completed) {
					completed = false;
					break;
				}
			}
			
			var dpr = this.adaptiveDPR ? (Math.max(window.devicePixelRatio * game.documentZoom, 1)) : 1;
			if (!this.sizeUpdated) {
				this.sizeUpdated = true;
				canvas.elementHeight = canvas.clientHeight;
				canvas.elementWidth = canvas.clientWidth;
				canvas.height = canvas.elementHeight * dpr;
				canvas.width = canvas.elementWidth * dpr;
			} else {
				if (canvas.height == 0) {
					canvas.elementHeight = canvas.clientHeight;
					canvas.height = canvas.elementHeight * dpr;
				}
				
				if (canvas.width == 0) {
					canvas.elementWidth = canvas.clientWidth;
					canvas.width = canvas.elementWidth * dpr;
				}
			}
			
			this.gl.viewport(0, 0, canvas.width, canvas.height);
			this.gl.clearColor(0, 0, 0, 0);
			this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			
			if (completed) {
				this.frameTime = void 0;
				this.requestId = void 0;
				this.running = false;
				this.canvas.style.visibility = 'hidden';
				return;
			}
			
			var state, skeleton, bounds, premultipliedAlpha, speed,
				shader = this.spine.shader,
				batcher = this.spine.batcher,
				skeletonRenderer = this.spine.skeletonRenderer;
			
			shader.bind();
			
			for (var i = 0; i < animations.length; i++) {
				if (animations[i].completed) continue; 
				if (animations[i].callback) animations[i].callback(delta);
				
				this.resizeSkeleton(animations[i]);
				state = animations[i].state;
				skeleton = animations[i].skeleton;
				bounds = animations[i].bounds;
				premultipliedAlpha = animations[i].premultipliedAlpha;
				speed = animations[i].speed;
				
				state.update(delta * speed);
				state.apply(skeleton);
				skeleton.updateWorldTransform();
				
				shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
				shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, animations[i].mvp.values);
				
				batcher.begin(shader);
				skeletonRenderer.premultipliedAlpha = premultipliedAlpha;
				skeletonRenderer.draw(batcher, skeleton);
				batcher.end();
				
			}
			
			shader.unbind();
			this.requestId = requestAnimationFrame(this.render.bind(this));
		};
		
		return AnimationPlayer;
	})();
	
	decadeUI.AnimationPlayerPool = (function(){
		function AnimationPlayerPool(size, pathPrefix, thisName){
			if (!window.spine) return console.error('spine 未定义.');
			
			this.name = thisName;
			this.pathPrefix = pathPrefix;
			this.animations = new Array(size ? size : 1);
			for (var i = 0; i < this.animations.length; i++) this.animations[i] = new decadeUI.AnimationPlayer(pathPrefix);
			
		};
		
		AnimationPlayerPool.prototype.loadSpine = function(filename, skelType, onload, onerror) {
			var thisAnim = this;
			thisAnim.animations[0].loadSpine(filename, skelType, function(){
				var ap;
				var aps = thisAnim.animations;
				
				for (var i = 1; i < aps.length; i++) {
					ap = aps[i];
					if (window.requestIdleCallback) {
						requestIdleCallback(ap.prepSpine.bind(ap, this.name, true), { timeout: 200 });
					} else {
						setTimeout(function(ap, name){
							ap.prepSpine(name, true);
						}, 50, ap, this.name);
					}
				}
				
				if (onload) onload();
			}, onerror);
		};
		
		AnimationPlayerPool.prototype.playSpineTo = function(element, animation, position) {
			var animations = this.animations;
			if (element._ap && element._ap.canvas.parentNode == element) {
				element._ap.playSpine(animation, position);
				return;
			}
			
			for (var i = 0; i < animations.length; i++) {
				if (!animations[i].running) {
					if (animations[i].canvas.parentNode != element) {
						element._ap = animations[i];
						element.appendChild(animations[i].canvas);
					}
					animations[i].playSpine(animation, position);
					return;
				}
			}
			
			console.error('spine:' + (this.name != null ? this.name : '' + '可用动画播放组件不足'));
			
		};
		
		return AnimationPlayerPool;
	})();
	
	decadeUI.animation = (function(){
		var animation = new decadeUI.AnimationPlayer(decadeUIPath + 'assets/animation/', document.body, 'decadeUI-canvas');
		decadeUI.bodySensor.addListener(function(){ animation.sizeUpdated = false; }, true);
		
		animation.cap = new decadeUI.AnimationPlayerPool(4, animation.pathPrefix, 'decadeUI.animation');
		
		var fileList = [
			{ name: 'effect_youxikaishi' },
			{ name: 'effect_baguazhen' },
			{ name: 'effect_baiyinshizi' },
			{ name: 'effect_cixiongshuanggujian' },
			{ name: 'effect_fangtianhuaji' },
			{ name: 'effect_guanshifu' },
			{ name: 'effect_gudingdao' },
			{ name: 'effect_hanbingjian' },
			{ name: 'effect_qilingong' },
			{ name: 'effect_qinggangjian' },
			{ name: 'effect_qinglongyanyuedao' },
			{ name: 'effect_renwangdun' },
			{ name: 'effect_shoujidonghua' },
			{ name: 'effect_tengjiafangyu' },
			{ name: 'effect_tengjiaranshao' },
			{ name: 'effect_zhangbashemao' },
			{ name: 'effect_zhiliao' },
			{ name: 'effect_zhugeliannu' },
			{ name: 'effect_zhuqueyushan' },
			{ name: 'effect_jinhe' },
			{ name: 'effect_numa' },
			{ name: 'effect_nvzhuang' },
			{ name: 'effect_wufengjian' },
			{ name: 'effect_yajiaoqiang' },
			{ name: 'effect_yinfengjia' },
			{ name: 'effect_zheji' },
			{ name: 'effect_jisha1' },
			{ name: 'effect_zhenwang' },
			{ name: 'effect_lebusishu' },
			{ name: 'effect_bingliangcunduan' },
			{ name: 'effect_nanmanruqin'},
			{ name: 'effect_taoyuanjieyi'},
			{ name: 'effect_shandian' },
			{ name: 'effect_wanjianqifa_full'},
			{ name: 'effect_xianding', fileType: 'json' },
			{ name: 'effect_caochuanjiejian', follow: true },
			{ name: 'effect_guohechaiqiao', follow: true },
			{ name: 'effect_leisha', follow: true },
			{ name: 'effect_heisha', follow: true },
			{ name: 'effect_huosha' , follow: true },
			{ name: 'effect_hongsha', follow: true },
			{ name: 'effect_huogong', follow: true },
			{ name: 'effect_panding', follow: true },
			{ name: 'effect_shan', follow: true },
			{ name: 'effect_tao', follow: true },
			{ name: 'effect_tiesuolianhuan', follow: true },
			{ name: 'effect_jiu', follow: true },
			{ name: 'effect_shunshouqianyang', follow: true },
			{ name: 'effect_shushangkaihua', follow: true },
			{ name: 'effect_wanjianqifa', follow: true},
			{ name: 'effect_wuzhongshengyou', follow: true },
			{ name: 'effect_wuxiekeji', follow: true },
			{ name: 'effect_wugufengdeng', follow: true },
			{ name: 'effect_yuanjiaojingong', follow: true },
			{ name: 'effect_zhijizhibi', follow: true },
			{ name: 'effect_zhulutianxia', follow: true },
		];
		
		var fileNameList = fileList.concat();
		
		var read = function() {
			if (fileNameList.length) {
				var file = fileNameList.shift();
				if (file.follow) {
					animation.cap.loadSpine(file.name, file.fileType, function(){
						read();
					});
				} else {
					animation.loadSpine(file.name, file.fileType, function(){
						read();
						animation.prepSpine(this.name);
					});
				}
			}
		};read();read();
		
		var skillAnimation = (function(){
			var defines = {
				skill:{
					bagua_skill: { skill: 'bagua_skill', name: 'effect_baguazhen', scale: 0.6 },
					baiyin_skill: { skill: 'baiyin_skill', name: 'effect_baiyinshizi', scale: 0.5 },
					bazhen_bagua: { skill: 'bazhen_bagua', name: 'effect_baguazhen', scale: 0.6 },
					cixiong_skill: { skill: 'cixiong_skill', name: 'effect_cixiongshuanggujian', scale: 0.5 },
					fangtian_skill: { skill: 'fangtian_skill', name: 'effect_fangtianhuaji', scale: 0.7 },
					guanshi_skill: { skill: 'guanshi_skill', name: 'effect_guanshifu', scale: 0.7 },
					guding_skill: { skill: 'guding_skill', name: 'effect_gudingdao', scale: 0.6, x: [0, 0.4], y: [0, -0.75] },
					hanbing_skill: { skill: 'hanbing_skill', name: 'effect_hanbingjian', scale: 0.5 },
					linglong_bagua: { skill: 'linglong_bagua', name: 'effect_baguazhen', scale: 0.5 },
					qilin_skill: { skill: 'qilin_skill', name: 'effect_qilingong', scale: 0.5 },
					qinggang_skill: { skill: 'qinggang_skill', name: 'effect_qinggangjian', scale: 0.7 },
					qinglong_skill: { skill: 'qinglong_skill', name: 'effect_qinglongyanyuedao', scale: 0.6 },
					renwang_skill: { skill: 'renwang_skill', name: 'effect_renwangdun', scale: 0.5 },
					tengjia1: { skill: 'tengjia1', name: 'effect_tengjiafangyu', scale: 0.6 },
					tengjia2: { skill: 'tengjia2', name: 'effect_tengjiaranshao', scale: 0.6 },
					tengjia3: { skill: 'tengjia3', name: 'effect_tengjiafangyu', scale: 0.6 },
					zhangba_skill: { skill: 'zhangba_skill', name: 'effect_zhangbashemao', scale: 0.7 },
					zhuge_skill: { skill: 'zhuge_skill', name: 'effect_zhugeliannu', scale: 0.5 },
					zhuque_skill: { skill: 'zhuque_skill', name: 'effect_zhuqueyushan', scale: 0.6 },
					jinhe_lose: { skill: 'jinhe_lose', name: 'effect_jinhe',scale: 0.4 },
					numa: { skill: 'numa', name: 'effect_numa', scale: 0.4 },
					nvzhuang: { skill: 'nvzhuang', name: 'effect_nvzhuang', scale: 0.5 },
					wufengjian_skill: { skill: 'wufengjian_skill', name: 'effect_wufengjian', scale: 0.4 },
					yajiaoqiang_skill: { skill: 'yajiaoqiang_skill', name: 'effect_yajiaoqiang', scale: 0.5 },
					yinfengjia_skill: { skill: 'yinfengjia_skill', name: 'effect_yinfengjia', scale: 0.5 },
					zheji: { skill: 'zheji', name: 'effect_zheji', scale: 0.35 },
					lebu: { skill: 'lebu', name: 'effect_lebusishu', scale: 0.7 },
					bingliang: { skill: 'bingliang', name: 'effect_bingliangcunduan', scale: 0.7 },
					shandian: { skill: 'shandian', name: 'effect_shandian', scale: 0.7 },
				},
				card: {
					nanman: { card: 'nanman', name: 'effect_nanmanruqin', scale: 0.6, y: [0, 0.4] },
					wanjian: { card: 'wanjian', name: 'effect_wanjianqifa_full', scale: 1.5},
					taoyuan: { card: 'taoyuan', name: 'effect_taoyuanjieyi'},
				}
			}
			
			var cardAnimate = function(card){
				var anim = defines.card[card.name];
				if (!anim) return console.error('cardAnimate:' + card.name);
				animation.playSpine(anim.name, { x: anim.x, y: anim.y, scale: anim.scale });
			};
			
			for (var key in defines.card) {
				lib.animate.card[defines.card[key].card] = cardAnimate;
			}
			
			var skillAnimate = function (name) {
				var anim = defines.skill[name];
				if (!anim) return console.error('skillAnimate:' + name);
				animation.playSpine(anim.name, { x: anim.x, y: anim.y, scale: anim.scale, parent:this });
			};
			
			for (var key in defines.skill) {
				lib.animate.skill[defines.skill[key].skill] = skillAnimate;
			}
			
			var trigger = {
				card:{
					nvzhuang:{
						onEquip:function(){
							if (player.sex == 'male' && player.countCards('he', function(cardx){ return cardx != card; })) {
								lib.animate.skill['nvzhuang'].call(player, 'nvzhuang');
								player.chooseToDiscard(true, function(card) {
									return card != _status.event.card;
								}, 'he').set('card', card);
							}
						},
						onLose:function(){
							if (player.sex != 'male') return;
							var next = game.createEvent('nvzhuang_lose');
							event.next.remove(next);
							var evt = event.getParent();
							if (evt.getlx === false) evt = evt.getParent();
							evt.after.push(next);
							next.player = player;
							next.setContent(function() {
								if (player.countCards('he')) {
									lib.animate.skill['nvzhuang'].call(player, 'nvzhuang');
									player.chooseToDiscard(true, 'he');
								}
							});
						}
					},
					zheji:{
						onEquip:function(){
							lib.animate.skill['zheji'].call(player, 'zheji');
						}
					},
					numa:{
						onEquip:function(){
							lib.animate.skill['numa'].call(player, 'numa');
						}
					},
					lebu:{
						effect:function(){
							if (result.bool == false){
								lib.animate.skill['lebu'].call(player, 'lebu');
								player.skip('phaseUse');
							}
						}
					},
					bingliang:{
						effect:function(){
							if (result.bool == false) {
								if (get.is.changban()) {
									player.addTempSkill('bingliang_changban');
								} else {
									lib.animate.skill['bingliang'].call(player, 'bingliang');
									player.skip('phaseDraw');
								}
							}
						}
					},
					shandian:{
						effect:function(){
							if (result.bool == false) {
								lib.animate.skill['shandian'].call(player, 'shandian');
								player.damage(3, 'thunder', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						}
					},
				},
			};
			
			
			for (var j in trigger.card) {
				if (lib.card[j]) {
					for (var k in trigger.card[j]) {
						lib.card[j][k] = trigger.card[j][k];
					}
				}
			}
		})();
		
		return animation;
	})();
	
	decadeUI.backgroundAnimation = (function(){
		var animation = new decadeUI.AnimationPlayer(decadeUIPath + 'assets/dynamic/', document.body, 'decadeUI-canvas-background');
		animation._resizeSkeleton = animation.resizeSkeleton;
		decadeUI.bodySensor.addListener(function(){ animation.sizeUpdated = false; }, true);
		
		animation.resizeSkeleton = function (skeleton) {
			if (skeleton.asset == void 0) {
				var name = skeleton.name.split('_');
				var skin = name.splice(name.length - 1, 1)[0];
				skeleton.asset = assets[name.join('_')];
				if (skeleton.asset) skeleton.asset = skeleton.asset[skin];
			}
			
			var asset = skeleton.asset;
			if (asset) {
				var canvas = this.canvas;
				
				var x = asset.x;
				var y = asset.y;
				var w = asset.width;
				var h = asset.height;
				var size = skeleton.bounds.size;
				var sx, sy, scale;
				
				if (x != void 0 && Array.isArray(x)) {
					x = x[0] + x[1] * canvas.elementWidth;
				}
				
				if (y != void 0 && Array.isArray(y)) {
					y = y[0] + y[1] * canvas.elementHeight;
				}
				
				if (w != void 0) {
					if (Array.isArray(w)) {
						sx = (w[0] + w[1] * canvas.elementWidth) / size.x;
					} else {
						sx = w / size.x;
					}
				}
				
				if (h != void 0) {
					if (Array.isArray(h)) {
						sy = (h[0] + h[1] * canvas.elementHeight) / size.y;
					} else {
						sy = h / size.y;
					}
				}
				
				if (sx != void 0 && sy == void 0) {
					scale = sx;
				} else if (sx == void 0 && sy != void 0) {
					scale = sy;
				} else if (sx != void 0 && sy != void 0) {
					scale = sy;
				}
				
				skeleton.position = { x: x, y: y, scale: scale };
			} 
			
			this._resizeSkeleton(skeleton);
		};
		
		
		animation.definedAssets  = {
			skin_xiaosha: {
				default: {
					name: 'skin_xiaosha_default',
					x: [ 0, 0.7],
					y: [ 0, 0.3],
					height: [0, 0.2],
				},
			},
			skin_daqiao: {
				战场绝版: {
					name: 'skin_daqiao_ZhanChang',
					x: [ 0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				清萧清丽: {
					name: 'skin_daqiao_QingXiaoQingLi',
					x: [ 0, 0.5],
					y: [0, 0.33],
					height: [0, 0.8],
				}
			},
			skin_caojie: {
				战场绝版: {
					name: 'skin_caojie_ZhanChang',
					x: [ 0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_baosanniang: {
				舞剑铸缘: {
					name: 'skin_baosanniang_WuJianZhuYuan',
					action: 'DaiJi',
					y: [75, 0.3],
					height: [0, 0.8],
				},
				漫花剑俏: {
					name: 'skin_baosanniang_ManHuaJianQiao',
					// x: [0, 0.7],
					y: [50, 0.3],
					height: [0, 0.8],
				},
			},
			skin_caiwenji: {
				才颜双绝: {
					name: 'skin_caiwenji_CaiYanShuangJue',
					y: [-80, 0.5],
					height: [0, 0.8],
				},
			},
			skin_daqiaoxiaoqiao: {
				战场绝版: {
					name: 'skin_daqiaoxiaoqiao_ZhanChang',
					//x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				}
			},
			skin_diaochan: {
				玉婵仙子: {
					name: 'skin_diaochan_YuChanXianZi',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_dongbai: {
				娇俏伶俐: {
					name: 'skin_dongbai_JiaoQiaoLingLi',
					x: [0, 0.5],
					y: [0, 0.33],
					height: [0, 0.96],
				},
			},
			skin_fanyufeng: {
				斟酒入情: {
					name: 'skin_fanyufeng_ZhenJiuRuQing',
					x: [0, 0.5],
					y: [0, 0.28],
					height: [0, 1],
				},
			},
			skin_fuhuanghou: {
				万福千灯: {
					name: 'skin_fuhuanghou_WanFuQianDeng',
					//x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_guozhao: {
				雍容尊雅: {
					name: 'skin_guozhao_YongRongZunYa',
					x: [0, 0.5],
					y: [0, 0.33],
					height: [0, 0.7],
				},
			},
			skin_hetaihou: {
				鸩毒除患: {
					name: 'skin_hetaihou_ZhenDuChuHuan',
					y: [0, 0.33],
					height: [0, 0.65],
				},
				蛇蝎为心:{
					name: 'skin_hetaihou_SheXieWeiXin',
					action: 'DaiJi',
					y: [5, 0.33],
					height: [0, 0.76],
				},
			},
			skin_huaman: {
				经典形象: {
					name: 'skin_huaman_default',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				花俏蛮娇: {
					name: 'skin_huaman_HuaQiaoManJiao',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				}
			},
			skin_lukang: {
				毁堰破晋: {
					name: 'skin_lukang_HuiYanPoJin',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_luxun: {
				谋定天下: {
					name: 'skin_luxun_MouDingTianXia',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_luxunlvmeng: {
				清雨踏春: {
					name: 'skin_luxunlvmeng_QingYuTaChun',
					// x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_mayunlu: {
				战场绝版:{
					name: 'skin_mayunlu_ZhanChang',
					x: [ 0, 0.6],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_sundengzhoufei: {
				鹊星夕情: {
					name: 'skin_sundengzhoufei_QueXingXiQing',
					// x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_sunluban: {
				宵靥谜君: {
					name: 'skin_sunluban_XiaoYeMiJun',
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_sunluyu: {
				娇俏伶俐: {
					name: 'skin_sunluyu_JiaoQiaoLingLi',
					y: [0, 0.3],
					height: [0, 0.9],
				},
			},
			skin_shuxiangxiang: {
				花好月圆: {
					name: 'skin_shuxiangxiang_HuaHaoYueYuan',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_wangyi: {
				绝色异彩: {
					name: 'skin_wangyi_JueSeYiCai',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				战场绝版: {
					name: 'skin_wangyi_ZhanChang',
					x: [0, 0.7],
					y: [75, 0.35],
					height: [0, 0.8],
				},
			},
			skin_wolongzhuge: {
				隆中陇亩: {
					name: 'skin_wolongzhuge_LongZhongLongMu',
					// x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_wuxian: {
				锦运福绵: {
					name: 'skin_wuxian_JinYunFuMian',
					// x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_xiahoushi: {
				端华夏莲: {
					name: 'skin_xiahoushi_DuanHuaXiaLian',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				战场绝版: {
					name: 'skin_xiahoushi_ZhanChang',
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_xiaoqiao: {
				花好月圆: {
					name: 'skin_xiaoqiao_HuaHaoYueYuan',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_xinxianying: {
				英装素果: {
					name: 'skin_xinxianying_YingZhuangSuGuo',
					//x: [0, 0.7],
					y: [75, 0.26],
					//height: [0, 0.8],
				},
			},
			skin_xushi: {
				拈花思君: {
					name: 'skin_xushi_NianHuaSiJun',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				为夫弑敌: {
					name: 'skin_xushi_WeiFuShiDi',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_zhangchangpu: {
				钟桂香蒲: {
					name: 'skin_zhangchangpu_ZhongGuiXiangPu',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_zhangchunhua: {
				花好月圆: {
					name: 'skin_zhangchunhua_HuaHaoYueYuan',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				战场绝版: {
					name: 'skin_zhangchunhua_ZhanChang',
					//x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			skin_zhangqiying: {
				岁稔年丰: {
					name: 'skin_zhangqiying_SuiRenNianFeng',
					y: [0, 0.33],
					height: [0, 0.8],
				},
				逐鹿天下: {
					name: 'skin_zhangqiying_ZhuLuTianXia',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 1],
				},
			},
			skin_zhangxingcai: {
				凯旋星花: {
					name: 'skin_zhangxingcai_KaiXuanXingHua',
					x: [0, 0.45],
					y: [0, 0.33],
					height: [0, 0.8],
				},
			},
			skin_zhenji: {
				才颜双绝: {
					name: 'skin_zhenji_CaiYanShuangJue',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				洛神御水: {
					name: 'skin_zhenji_LuoShenYuShui',
					x: [0, 0.6],
					y: [75, 0.3],
					//height: [0, 0.8],
				},
			},
			skin_zhoufei: {
				晴空暖鸢: {
					name: 'skin_zhoufei_QingKongNuanYuan',
					x: [0, 0.5],
					y: [0, 0.33],
					height: [0, 0.8],
				},
			},
			skin_zhugeguo: {
				兰荷艾莲: {
					name: 'skin_zhugeguo_AiHeAiLian',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
				英装素果: {
					name: 'skin_zhugeguo_YingZhuangSuGuo',
					//x: [0, 0.7],
					y: [75, 0.3],
					//height: [0, 0.8],
				},
			},
			skin_zhugeliang: {
				空城退敌: {
					name: 'skin_zhugeliang_KongChengTuiDi',
					x: [0, 0.7],
					y: [75, 0.3],
					height: [0, 0.8],
				},
			},
			
			
		};
		
		animation.play = function (name, skin) {
			var definedAssets = this.definedAssets;
			if (definedAssets[name] == void 0 || definedAssets[name][skin] == void 0) return console.log('没有预定义[asset:' + name + ', skin:' + skin + ']的资源。');
			
			
			if (this.current && this.current.name == name) return;
			var asset = definedAssets[name][skin];
			var skinAnim = {
				name: asset.name,
				action: asset.action,
				loop: true
			};
			
			this.stopSpineAll();
			if (!this.spine.assets[asset.name]) {
				var _this = this;
				_this.loadSpine(asset.name, 'skel', function(){
					if (_this.current && _this.current.name == skinAnim.name) return;
					_this.current = _this.playSpine(skinAnim);
					if (_this.current) _this.current.asset = asset;
				});
			} else {
				this.current = this.playSpine(skinAnim);
				if (this.current) this.current.asset = asset;
			}
		};
		
		animation.check();
		var background = decadeUI.config.dynamicBackground
		if (background != void 0 && background != 'off') {
			var name = background.split('_');
			var skin = name.splice(name.length - 1, 1)[0];
			animation.play(name.join('_'), skin);
		}
		
		return animation;
	})();

	window.dcdAnim = decadeUI.animation;
	window.dcdBackAnim = decadeUI.backgroundAnimation;
	window.game = game;
	window.get = get;
	window.ui = ui;
	window._status = _status;
});


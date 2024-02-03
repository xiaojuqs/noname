game.import("extension",function(lib,game,ui,get,ai,_status){
return {name:"无名补丁",content:function(config,pack){
window.nmimport = function(func) {
            func(lib, game, ui, get, ai, _status);
        };   
if (lib.config.extensions && lib.config.extensions.contains('十周年UI') && lib.config['extension_十周年UI_enable']) {      
console.time('无名补丁'); 
//手气卡音效及进度条等修改
if(config.xinddraw){
lib.arenaReady.push(function(){
lib.element.content.gameDraw = function () {
                            "step 0";
                            if (_status.brawl && _status.brawl.noGameDraw)
                                return event.goto(4);      
                            var end = player;
                            var gainNum = num;
                            do {
                                if (typeof num == 'function')
                                    gainNum = num(player);
                                
                                if (player.getTopCards)
                                    player.directgain(player.getTopCards(gainNum));
                                else
                                    player.directgain(get.cards(gainNum));
                                
                                player.$draw(gainNum);
                                if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online'))
                                    player.doubleDraw();
                                
                                player._start_cards = player.getCards('h');
                                player = player.next;
                            } while (player != end);
                            event.changeCard = get.config('change_card');
                            if (_status.connectMode || (lib.config.mode == 'doudizhu' && _status.mode == 'online') || lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'doudizhu') {
                                event.changeCard = 'disabled';
                            }              
                            "step 1";
                            if (event.changeCard != 'disabled' && !_status.auto) {  
                            nmjindutiao1=ui.create.div('.nmjindutiao1',ui.arena);	
nmjindutiaox1=ui.create.div('.nmjindutiaox1',ui.arena);
nmjindutiaox1.addEventListener("webkitAnimationEnd",
 function() {      
ui.click.cancel();
})
   event.numk=parseInt(Math.random()*(5001)+5000); 
           event.numt="114514";   
           event.nump="3";
   var  score1= parseInt(Math.random()*4+4);	
 var   score2=parseInt(Math.random()*10);
          event.score=ui.create.div('.nmcardscore',ui.arena);
          event.scorex1=ui.create.div('.nmscore1',event.score);
          event.scorex1.setBackgroundImage('extension/无名补丁/handscore/'+score1+'.png');
          event.scorex2=ui.create.div('.nmscore2',event.score);
          event.scorex2.setBackgroundImage('extension/无名补丁/handscore/'+score2+'.png');                  
              var str="本场还可更换"+event.numt+"次手牌(免费次数还剩"+event.nump+"次)" ;                                      
                                event.dialog = dui.showHandTip(str);                     
                                event.dialog.strokeText();
                                ui.create.confirm('oc');
                                event.custom.replace.confirm = function (bool) {
                                    _status.event.bool = bool;
                             
                                    game.resume();
                                };
                            } else {
                                event.goto(4);
                            }
                            "step 2";
                            if (event.changeCard == 'once') {
                                event.changeCard = 'disabled';
                            } else if (event.changeCard == 'twice') {
                                event.changeCard = 'once';
                            } else if (event.changeCard == 'disabled') {
                                event.bool = false;
                                return;
                            }
                            _status.imchoosing = true;
                            event.switchToAuto = function () {
                                _status.event.bool = false;
                                game.resume();
                            };
                            game.pause();
                            "step 3";
                            _status.imchoosing = false;
                            if (event.bool) {
                                if (game.changeCoin) {
                                    game.changeCoin(-3);
                                }
                                var hs = game.me.getCards('h');
                                game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
                                for (var i = 0; i < hs.length; i++) {
                                    hs[i].discard(false);
                                }
                                game.playAudio('../extension/无名补丁/audio/huan.mp3');
                                event.numk--;
                                event.numt--;
                                event.nump--;
                                game.me.directgain(get.cards(hs.length));
  var score1= parseInt(Math.random()*4+4);	
 var   score2=parseInt(Math.random()*10);   
          event.scorex1.setBackgroundImage('extension/无名补丁/handscore/'+score1+'.png');
          event.scorex2.setBackgroundImage('extension/无名补丁/handscore/'+score2+'.png');    
                             if(event.numt>0){
                             var str;
                      if(event.nump>0) str= "本场还可更换"+event.numt+"次手牌(免费次数还剩"+event.nump+"次)";
                      else {str= "本场还可更换"+event.numt+"次手牌(每次消耗一张手气卡，当前还有"+event.numk+"张)";
       ui.confirm.firstChild.classList.add("huan2"); 
                      }
                            event.dialog.remove();
                            event.dialog = dui.showHandTip(str);
                            event.dialog.strokeText();   
                                event.goto(2);}
                                else {
                                if (event.dialog) event.dialog.close();
                               if(nmjindutiao1)nmjindutiao1.remove();
   if(nmjindutiaox1)nmjindutiaox1.remove();               if(event.score)event.score.remove();          
                                if (ui.confirm) ui.confirm.close();
                                game.me._start_cards = game.me.getCards('h');
                                event.goto(4);
                            }
                            } else {
                                if (event.dialog) event.dialog.close();
                               if(nmjindutiao1)nmjindutiao1.remove();
   if(nmjindutiaox1)nmjindutiaox1.remove();                if(event.score)event.score.remove();         
                                if (ui.confirm) ui.confirm.close();
                                game.me._start_cards = game.me.getCards('h');
                                event.goto(4);
                            }
                            "step 4";
                            setTimeout(decadeUI.effect.gameStart, 51);
                        };
                        });}
//选将美化
if(config.xindchoose){//选将的将框
lib.groupnature={//这里修改控制武将边框的代码。shen的后缀是shen（本体里神的nature是thunder，和晋一样，这里修改后不用再改本体了。给扩展武将加边框，请在下面按格式填写你喜欢的属性，然后在mark.css里按例子填写边框样式图片的调用。
    shen:'shen',//素材放到无名补丁/group文件夹里
    wei:'water',
    shu:'soil',
    wu:'wood',
    qun:'metal',
    key:'key',
    jin:'thunder',
    ye:'ye',
    qun_shu:'qun_shu',
    qun_wei:'qun_wei',
    qun_wu:'qun_wu',
    shu_qun:'shu_qun',
    shu_wei:'shu_wei',
    shu_wu:'shu_wu',
    wei_qun:'wei_qun',
    wei_shu:'wei_shu',
    wei_wu:'wei_wu',
    wu_qun:'wu_qun',
    wu_shu:'wu_shu',
    wu_wei:'wu_wei',
};
};
if(config.xindsingle){
 lib.element.content.chooseButton=function(){//修改选项框函数，包括单行选将框和欢乐模式选将框靠左
			"step 0"
	if(typeof event.dialog=='number'){
						event.dialog=get.idDialog(event.dialog);
					}
					if(event.createDialog&&!event.dialog){
						if(Array.isArray(event.createDialog)){
							event.createDialog.add('hidden');
							event.dialog=ui.create.dialog.apply(this,event.createDialog);
						}
						event.closeDialog=true;
					}
					if(event.dialog==undefined) event.dialog=ui.dialog;

					if(event.isMine()||event.dialogdisplay){
						event.dialog.style.display='';
						event.dialog.open();
		if(_status.event.parent.name=="chooseCharacter")event.dialog.classList.add("singlex");if(_status.mode=="huanle"&&_status.event.parent.step=='6')event.dialog.classList.add("huanle")	
	if((_status.mode=="huanle"&&_status.event.parent.step=='7')||(get.mode()=="identity" && _status.mode=="normal"&&_status.event.parent.step=='2'))event.dialog.classList.add("group")			
					}
					game.check();
					if(event.isMine()){
						if(event.hsskill&&!event.forced&&_status.prehidden_skills.contains(event.hsskill)){
							ui.click.cancel();
							return;
						}
						game.pause();
					}
					else if(event.isOnline()){
						event.send();
						delete event.callback;
					}
					else{
						event.result='ai';
					}
					if(event.onfree){
						lib.init.onfree();
					}
					"step 1"
					if(event.result=='ai'){
						if(event.processAI){
							event.result=event.processAI();
						}
						else{
							game.check();
							if(ai.basic.chooseButton(event.ai)||forced) ui.click.ok();
							else ui.click.cancel();
						}
					}
					if(event.closeDialog){
						event.dialog.close();
					}
					if(event.callback){
						event.callback(event.player,event.result);
					}
					event.resume();
				};}
				//样式
                if (lib.config.extension_无名补丁_xindchoose == 'shousha') {
		        lib.init.css(lib.assetURL + 'extension/无名补丁', 'style');
		        };
		        if (lib.config.extension_无名补丁_xindchoose == 'shizhounian') {
		        lib.init.css(lib.assetURL + 'extension/无名补丁', 'style2');
	            };
	            if (lib.config.extension_无名补丁_xindmenu == 'shousha') {
	            lib.init.js(lib.assetURL + 'extension/无名补丁', 'menu');
		        lib.init.css(lib.assetURL + 'extension/无名补丁', 'menu');
		        };
		        if (lib.config.extension_无名补丁_xindmenu == 'shizhounian') {
		        lib.init.js(lib.assetURL + 'extension/无名补丁', 'menu');
		        lib.init.css(lib.assetURL + 'extension/无名补丁', 'menu2');
	            };
console.timeEnd('无名补丁');}                       
},precontent:function(){
},
config:{  
    分割线01:{
        "name":"<img style=width:240px src="+lib.assetURL+"extension/无名补丁/image/line.png>",
        "intro":"",
        "init":true,
        "clear":true,	   
    },	
    xindmenu:{
		name: '菜单美化及音效',
		init: 'shousha',
		item: {
            shizhounian: '十周年',
            shousha: '手杀',
            off: '关闭',
              },
        intro: "菜单美化和音效，关闭可提升流畅度",
	},   
    xindchoose:{
		name: '选将美化',
		init: 'shousha',
		item: {
            shizhounian: '十周年',
            shousha: '手杀',
            off: '关闭',
              },
        intro: "选将框美化，提供势力框和背景框，以及单行选将。若不需要单行选将，请自行去style里注释",
	},
	xindsingle:{
    name: '单行选将',
    init: true,
    intro: "选将时，变为单行",
},
    xinddraw:{
		name: '手气卡美化',
		init: true,
        intro: "为手气卡刷新添加音效并修改无限次数为7次，添加进度条手牌分。",
	},
	分割线02:{
        "name":"<img style=width:240px src="+lib.assetURL+"extension/无名补丁/image/line.png>",
        "intro":"",
        "init":true,
        "clear":true,	   
    },
},help:{},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        translate:{
        },
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"<b><font color=\"#FF6020\">蒸版无名补丁修改自用",
    diskURL:"",
    forumURL:"",
    version:"1.56",
},files:{"character":[],"card":[],"skill":[]}}})

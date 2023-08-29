'use strict';
decadeModule.import(function (lib, game, ui, get, ai, _status) {
	/*
	十周年UI动皮使用说明：
	- 首先打开动态皮肤的开关，直接替换原有武将皮肤显示；
	- 目前不支持动态皮肤的切换功能；
	- 动态皮肤参数表在线文档链接：https://docs.qq.com/sheet/DS2Vaa0ZGWkdMdnZa；可以在群在线文档提供你设置好的参数
	- 所有相关的文件请放到	十周年UI/assets/dynamic目录下；
	- 关于格式请参考下面示例：
		武将名:{
			皮肤名:{
				name: "xxx",	//	必★填	骨骼名称，一般是yyy.skel，注意xxx不带后缀名.skel；
				action: "xxx",	//	可删掉	播放动作，xxx 一般是 DaiJi，目前手杀的骨骼文件需要填；
				x: [10, 0.5],	//	可删掉	[10, 0.5]相当于 left: calc(10px + 50%)，不填默认为[0, 0.5]；
				y: [10, 0.5],	//	可删掉	[10, 0.5]相当于 bottom: calc(10px + 50%)，不填默认为[0, 0.5]；
				scale: 0.5,		//	可删掉	缩放大小，不填默认为1；
				angle: 0,		//	可删掉	旋转角度，不填默认为0；
				speed: 1,		//	可删掉	播放速度，不填默认为1；
				hideSlots: ['隐藏的部件'],	// 隐藏不需要的部件，想知道具体部件名称请使用SpineAltasSplit工具查看
				clipSlots: ['裁剪的部件'],	// 剪掉超出头的部件，仅针对露头动皮，其他勿用
				background: "xxx.jpg",	//	可删掉	背景图片，注意后面要写后缀名，如.jpg .png等
			}
		},
	- 为了方便得到动皮的显示位置信息，请在游戏选将后，用控制台或调试助手小齿轮执行以下代码(没用到的属性请删掉以免报错):
		game.me.stopDynamic();
		game.me.playDynamic({
			name: 'xxxxxxxxx',		// 勿删
			action: undefined,
			speed: 1,
			loop: true,				// 勿删
			x: [0, 0.5],
			y: [0, 0.5],
			scale: 0.5,
			angle: 0,
			hideSlots: ['隐藏的部件'],	// 隐藏不需要的部件，想知道具体部件名称请使用SpineAltasSplit工具查看
			clipSlots: ['裁剪的部件'],	// 剪掉超出头的部件，仅针对露头动皮，其他勿用
		});
		// 这里可以改成  }, true);  设置右将动皮
	*/

	decadeUI.dynamicSkin = {
		baosanniang: {//鲍三娘
      虎年七夕:{
        name: '鲍三娘/虎年七夕/XingXiang',
        x: [0,0.46],
        y: [0,0.36],
        scale: 0.42,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '鲍三娘/虎年七夕/BeiJing',
          scale: 0.3,
          x: [0, 0.69],
          y: [0, 0.5]
        },
      },
      漫花剑俏: {
        name: '鲍三娘/漫花剑俏/daiji2',
        x: [0, 0.3],
        y: [0, 0.48],
        scale: 0.9,
        angle: -30,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '鲍三娘/漫花剑俏/chuchang',
          scale: 0.8,
          action: 'play',
        },
        gongji: {
          name: '鲍三娘/漫花剑俏/chuchang',
          scale: 0.95,
          action: 'play',
        },
        beijing: {
          name: '鲍三娘/漫花剑俏/beijing',
          x: [0, 0.29],
          y: [0, 0.48],
          scale: 0.4,
        },
      },
      嫣然一笑:{
        name: '鲍三娘/嫣然一笑/XingXiang',
        x: [0,-0.46],
        y: [0,0.16],
        scale: 0.45,
        angle: 10,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '鲍三娘/嫣然一笑/BeiJing',
          x: [0, 0.5],
          y: [0, 0.47],
          scale: 0.3,
        },
      },
    },
    caochun: {//曹纯
      虎啸龙渊: {
        name: '曹纯/虎啸龙渊/daiji2',
        teshu: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.45],
        scale: 1.14,
        angle: -10,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '曹纯/虎啸龙渊/chuchang',
          action: 'play',
          scale: 0.8,
        },
        gongji: {
          name: '曹纯/虎啸龙渊/chuchang2',
          action: ['gongji', 'jineng'],
          scale: 0.8,
        },
        audio: {
          skill: '曹纯/虎啸龙渊/audio',
        },
        beijing: {
          name: '曹纯/虎啸龙渊/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '曹纯/虎啸龙渊/shouji2',
          scale: 0.7,
          speed: 0.8,
          delay: 0.3,
          effect: {
            name: '曹纯/虎啸龙渊/shouji',
            scale: 0.65,
            speed: 0.6,
            delay: 0.4,
          },
        },
        special: {
          变身: {
            hp: 2,
            name: 'caochun/虎啸龙渊2',
          },
          condition: {
            lowhp: {
              transform: ['变身'],
              recover: true,
            },
          },
        },
      },
      虎啸龙渊2: {
        name: '曹纯/虎啸龙渊2/daiji2',
        teshu: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.35],
        scale: 1.14,
        angle: 10,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '曹纯/虎啸龙渊2/chuchang',
          action: 'play',
          scale: 0.9,
        },
        gongji: {
          name: '曹纯/虎啸龙渊2/chuchang2',
          action: ['gongji', 'jineng'],
          scale: 0.8,
        },
        audio: {
          skill: '曹纯/虎啸龙渊2/audio',
        },
        beijing: {
          name: '曹纯/虎啸龙渊2/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '曹纯/虎啸龙渊2/shouji2',
          scale: 0.6,
          speed: 0.6,
          delay: 0.3,
          effect: {
            name: '曹纯/虎啸龙渊2/shouji',
            scale: 0.6,
            speed: 0.8,
            delay: 0.4,
          },
        },
      },
      长坂败备:{
        name: '曹纯/长坂败备/XingXiang',
        x: [0,1.1],
        y: [0,-0.17],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '曹纯/长坂败备/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    caojinyu: {//曹金玉
      瓷语青花: {
        name: '曹金玉/瓷语青花/daiji2',
        teshu: 'play2',
        shan: 'play3',
        x: [0, 0.35],
        y: [0, 0.3],
        scale: 1.2,
        angle: 10,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '曹金玉/瓷语青花/chuchang',
          action: 'play',
          scale: 0.8,
        },
        gongji: {
          name: '曹金玉/瓷语青花/chuchang2',
          action: ['gongji', 'jineng'],
          scale: 0.8,
        },
        beijing: {
          name: '曹金玉/瓷语青花/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
          angle: 20,
        },
        zhishixian: {
          name: '曹金玉/瓷语青花/shouji2',
          scale: 0.5,
          speed: 0.8,
          delay: 0.3,
          effect: {
            name: '曹金玉/瓷语青花/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.2,
          },
        },
      },
    },
    daqiao: {//大乔
      花好月圆: {//出场错误
        name: '大乔/花好月圆/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.8,
        angle: 10,
        //speed: 1,
        shizhounian: true,
        // chuchang: {
        //   name: '大乔/花好月圆/chuchang',
        //   scale: 1,
        //   action: 'play',
        // },
        // gongji: {
        //   name: '大乔/花好月圆/chuchang',
        //   scale: 1.2,
        //   action: 'play',
        // },
        beijing: {
          name: '大乔/花好月圆/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
      },
      绝世之姿:{
        name: '大乔/绝世之姿/XingXiang',
        x: [0,0.44],
        y: [0,0.23],
        scale: 0.5,
        angle: 12,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '大乔/绝世之姿/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
      diaochan: {//貂蝉
        花好月圆: {
          name: '貂蝉/花好月圆/daiji2',
          x: [0, 0.64],
          y: [0, 0.53],
          scale: 0.94,
          angle: 10,
                  //speed: 1,
                  shizhounian: true,
                  chuchang: {
            name: '貂蝉/花好月圆/chuchang',
            scale: 0.9,
            action: 'play',
          },
          gongji: {
            name: '貂蝉/花好月圆/chuchang',
            scale: 1.1,
            action: 'play',
          },
          beijing: {
            name: '貂蝉/花好月圆/beijing',
            x: [0, 0.5],
            y: [0, 0.5],
            scale: 0.4,
          },
        },
        绝世倾城:{
          name: '貂蝉/绝世倾城/XingXiang',
          x: [0,0.42],
          y: [0,0.16],
          scale: 0.52,
          angle: -15,
                  //speed: 1,
          //action: 'DaiJi',
          beijing: {
            name: '貂蝉/绝世倾城/BeiJing',
            scale: 0.3,
            x: [0, 0.4],
            y: [0, 0.5]
          },
        },
        文和乱武: {
          name: '貂蝉/文和乱武/daiji2',
          x: [0, 0.4],
          y: [0, 0.57],
          scale: 0.8,
          angle: -20,
                  //speed: 1,
                  shizhounian: true,
                  chuchang: {
            name: '貂蝉/文和乱武/chuchang',
            scale: 0.9,
            action: 'play',
          },
          gongji: {
            name: '貂蝉/文和乱武/chuchang',
            scale: 1.1,
            action: 'play',
          },
          beijing: {
            name: '貂蝉/文和乱武/beijing',
            x: [0, 1.11],
            y: [0, 0.5],
            scale: 0.4,
          },
        },
        驭魂千机:{
          name: '貂蝉/驭魂千机/XingXiang',
          x: [0,0.54],
          y: [0,0.23],
          scale: 0.6,
          angle: 15,
                  //speed: 1,
          //action: 'DaiJi',
          beijing: {
            name: '貂蝉/驭魂千机/BeiJing',
            scale: 0.3,
            x: [0, 0.4],
            y: [0, 0.5]
          },
        },
      },
      dongbai: {//董白
        娇巧伶俐: {
          name: '董白/娇巧伶俐/daiji2',
          x: [0, 0.34],
          y: [0, 0.56],
          scale: 0.88,
          angle: -20,
                  //speed: 1,
                  shizhounian: true,
                  chuchang: {
            name: '董白/娇巧伶俐/chuchang',
            scale: 0.7,
            action: 'play',
          },
          gongji: {
            name: '董白/娇巧伶俐/chuchang',
            scale: 0.9,
            action: 'play',
          },
          beijing: {
            name: '董白/娇巧伶俐/beijing',
            x: [0, 0.5],
            y: [0, 0.5],
            scale: 0.4,
          },
        },
        猪年春节:{
          name: '董白/猪年春节/XingXiang',
          x: [0,0.67],
          y: [0,0.47],
          scale: 0.48,
          angle: 0,
                  //speed: 1,
          //action: 'DaiJi',
          beijing: {
            name: '董白/猪年春节/BeiJing',
            scale: 0.3,
            x: [0, 0.4],
            y: [0, 0.5]
          },
        },
          },
              huaman: {//花鬘
                花俏蛮娇: {
                  name: '花鬘/花俏蛮娇/daiji2',
                  x: [0, 0.43],
                  y: [0, 0.41],
                  scale: 1.04,
                  angle: 0,
                          //speed: 1,
                          shizhounian: true,
                          chuchang: {
                    name: '花鬘/花俏蛮娇/chuchang',
                    scale: 0.8,
                    action: 'play',
                  },
                  gongji: {
                    name: '花鬘/花俏蛮娇/chuchang',
                    scale: 1,
                    action: 'play',
                  },
                  beijing: {
                    name: '花鬘/花俏蛮娇/beijing',
                    x: [0, -0.57],
                    y: [0, 0.5],
                    scale: 0.4,
                  },
                },
                  },
                  liru: {//李儒
                    烈火焚城: {
                      name: '李儒/烈火焚城/daiji2',
                      x: [0, 0.42],
                      y: [0, 0.51],
                      scale: 0.72,
                      angle: 0,
                              //speed: 1,
                              shizhounian: true,
                              chuchang: {
                        name: '李儒/烈火焚城/chuchang',
                        scale: 0.7,
                        action: 'play',
                      },
                      gongji: {
                        name: '李儒/烈火焚城/chuchang',
                        scale: 0.9,
                        action: 'play',
                      },
                      beijing: {
                        name: '李儒/烈火焚城/beijing',
                        x: [0, 0.5],
                        y: [0, 0.5],
                        scale: 0.4,
                      },
                    },
                    鸩杀少帝:{
                      name: '李儒/鸩杀少帝/XingXiang',
                      x: [0,0.2],
                      y: [0,0.17],
                      scale: 0.5,
                      angle: 10,
                              //speed: 1,
                      //action: 'DaiJi',
                      beijing: {
                        name: '李儒/鸩杀少帝/BeiJing',
                        scale: 0.3,
                        x: [0, 1.7],
                        y: [0, 0.5]
                      },
                    },
                      },
                      liuzan: {//留赞
                        抗音而歌:{
                          name: '留赞/抗音而歌/XingXiang',
                          x: [0,0.45],
                          y: [0,-0.2],
                          scale: 0.68,
                          angle: -5,
                                  //speed: 1,
                          //action: 'DaiJi',
                          beijing: {
                            name: '留赞/抗音而歌/BeiJing',
                            scale: 0.3,
                            x: [0, 0.4],
                            y: [0, 0.5]
                          },
                        },
                        灵魂歌王:{
                          name: '留赞/灵魂歌王/XingXiang',
                          x: [0,-0.43],
                          y: [0,-0.06],
                          scale: 0.54,
                          angle: 15,
                                  //speed: 1,
                          //action: 'DaiJi',
                          beijing: {
                            name: '留赞/灵魂歌王/BeiJing',
                            scale: 0.3,
                            x: [0, 0.4],
                            y: [0, 0.5]
                          },
                        },
                          },
                          lvlingqi: {//吕玲绮
                            炽焱流金: {
                              name: '吕玲绮/炽焱流金/daiji2',
                              x: [0, 0.45],
                              y: [0, 0.45],
                              scale: 0.95,
                              angle: 0,
                                      //speed: 1,
                                      shizhounian: true,
                                      chuchang: {
                                name: '吕玲绮/炽焱流金/chuchang',
                                scale: 1,
                                action: 'play',
                              },
                              gongji: {
                                name: '吕玲绮/炽焱流金/chuchang',
                                scale: 1.2,
                                action: 'play',
                              },
                              beijing: {
                                name: '吕玲绮/炽焱流金/beijing',
                                x: [0, 0.5],
                                y: [0, 0.5],
                                scale: 0.3,
                              },
                            },
                            战场绝版: {
                              name: '吕玲绮/战场绝版/daiji2',
                              teshu: {
                                name: '吕玲绮/战场绝版/chuchang2',
                                action: ['jineng'],
                                scale: 0.9,
                              },
                              shan: 'play3',
                              play2: 'play2',
                              x: [0, 0.26],
                              y: [0, 0.41],
                              scale: 1.2,
                              angle: 10,
                                      //speed: 1,
                                      shizhounian: true,
                                      chuchang: {
                                name: '吕玲绮/战场绝版/chuchang',
                                action: 'play',
                                scale: 1.1,
                              },
                              gongji: {
                                name: '吕玲绮/战场绝版/chuchang2',
                                action: ['gongji'],
                                scale: 0.9,
                              },
                              beijing: {
                                name: '吕玲绮/战场绝版/beijing',
                                x: [0, 0.3],
                                y: [0, 0.5],
                                scale: 0.4,
                              },
                              zhishixian: {
                                name: '吕玲绮/战场绝版/shouji2',
                                scale: 0.5,
                                speed: 0.6,
                                delay: 0.4,
                                effect: {
                                  name: '吕玲绮/战场绝版/shouji',
                                  scale: 0.5,
                                  speed: 0.6,
                                  delay: 0.25,
                                },
                              },
                            },
                              },
    shen_ganning: { // 神甘宁
      万人辟易:{
        name: '神甘宁/万人辟易/XingXiang',
        x: [0,0.17],
        y: [0,0.23],
        scale: 0.44,
        angle: 15,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '神甘宁/万人辟易/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    shen_guojia: { // 神郭嘉
      倚星折月:{
        name: '神郭嘉/倚星折月/XingXiang',
        x: [0,-0.31],
        y: [0,0.34],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '神郭嘉/倚星折月/BeiJing',
          scale: 0.3,
          x: [0, 0.5],
          y: [0, 0.5]
        },
        audio: {
          skill: '神郭嘉/倚星折月/audio',
          card: '神郭嘉/倚星折月/audio',
        },
        special: {
          觉醒: {
            name: 'shen_guojia/倚星折月2',
          },
          play: {
            name: '神郭嘉/倚星折月2/XingXiang-1',
            action: 'TeShu',
            x: [0, 0.5],
            y: [0, 0.5],
            scale: 0.6,
            audio: '神郭嘉/倚星折月2/audio/victory',
            delay: 1,
          },
          condition: {
            juexingji: {
              transform: "觉醒",
              effect: 'shaohui',
              play: 'play',
            },
          },
        },
      },
      倚星折月2:{
        name: '神郭嘉/倚星折月2/XingXiang-1',
        x: [0,-0.31],
        y: [0,0.34],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        audio: {
          skill: '神郭嘉/倚星折月2/audio',
          card: '神郭嘉/倚星折月2/audio',
        },
        beijing: {
          name: '神郭嘉/倚星折月2/BeiJing-1',
          scale: 0.3,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    shen_zhaoyun: {//神赵云
			神龙佑主: {
				name: '神赵云/神龙佑主/daiji2',
				x: [0, 0.4],
				y: [0, 0.52],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神赵云/神龙佑主/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '神赵云/神龙佑主/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '神赵云/神龙佑主/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			战龙在野:{
				name: '神赵云/战龙在野/XingXiang',
				x: [0,0.5],
				y: [0,0.2],
				scale: 0.76,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神赵云/战龙在野/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        shen_zhouyu: {//神周瑜
			红莲业火: {
				name: '神周瑜/红莲业火/daiji2',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神周瑜/红莲业火/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '神周瑜/红莲业火/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '神周瑜/红莲业火/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			陵光引灵:{
				name: '神周瑜/陵光引灵/XingXiang',
				x: [0,0.34],
				y: [0,-0.18],
				scale: 0.76,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神周瑜/陵光引灵/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			焰腾麒麟:{
				name: '神周瑜/焰腾麒麟/XingXiang',
				x: [0,-0.3],
				y: [0,0.44],
				scale: 0.6,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神周瑜/焰腾麒麟/BeiJing',
					scale: 0.25,
					x: [0, 0.75],
					y: [0, 0.5]
				},
			},
    },
    sunluyu: {//孙鲁育
			娇巧伶俐: {
				name: '孙鲁育/娇巧伶俐/daiji2',
				x: [0, 0.4],
				y: [0, 0.41],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁育/娇巧伶俐/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '孙鲁育/娇巧伶俐/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '孙鲁育/娇巧伶俐/beijing',
					x: [0, 1.2],
					y: [0, 0.39],
					scale: 0.4,
				},
			},
			牛年端午:{
				name: '孙鲁育/牛年端午/XingXiang',
				x: [0,0.02],
				y: [0,0.3],
				scale: 0.38,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙鲁育/牛年端午/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			沅茝香兰: {
				name: '孙鲁育/沅茝香兰/daiji2',
				x: [0, 0.38],
				y: [0, 0.36],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁育/沅茝香兰/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '孙鲁育/沅茝香兰/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '孙鲁育/沅茝香兰/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			猪年春节:{
				name: '孙鲁育/猪年春节/XingXiang',
				x: [0,0.26],
				y: [0,0.28],
				scale: 0.46,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙鲁育/猪年春节/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
    },
    sunru: {//孙茹
			花容月貌:{
				name: '孙茹/花容月貌/XingXiang',
				x: [0,0.58],
				y: [0,0.13],
				scale: 0.55,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙茹/花容月貌/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			烟水悠悠:{
				name: '孙茹/烟水悠悠/XingXiang',
				x: [0,0.3],
				y: [0,-0.32],
				scale: 0.76,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙茹/烟水悠悠/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			鱼游濠水:{
				name: '孙茹/鱼游濠水/XingXiang',
				x: [0,0.78],
				y: [0,0.08],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙茹/鱼游濠水/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			月兔琼香: {
				name: '孙茹/月兔琼香/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.25],
				y: [0, 0.3],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙茹/月兔琼香/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '孙茹/月兔琼香/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '孙茹/月兔琼香/beijing',
					x: [0, 0.8],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '孙茹/月兔琼香/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '孙茹/月兔琼香/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
    },
    wangyuanji: {//王元姬
			鼠年冬至:{
				name: '王元姬/鼠年冬至/XingXiang',
				x: [0,0.22],
				y: [0,0.58],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王元姬/鼠年冬至/Beijing',
					scale: 0.3,
					x: [0, 0.1],
					y: [0, 0.5]
				},
			},
    },
    xizhicai: { // 戏志才
      举棋若定:{
        name: '戏志才/举棋若定/XingXiang',
        x: [0,0.5],
        y: [0,0.33],
        scale: 0.5,
        angle: -28,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '戏志才/举棋若定/BeiJing',
          scale: 0.3,
          angle: -28,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    xushi: {//徐氏
      巾帼花武: {
  name: '徐氏/巾帼花武/daiji2',
  teshu: 'play2',
  shan: 'play3',
  x: [0, 0.4],
  y: [0, 0.34],
  scale: 1.12,
  angle: 10,
          //speed: 1,
          shizhounian: true,
          chuchang: {
    name: '徐氏/巾帼花武/chuchang',
    action: 'play',
    scale: 0.65,
  },
  gongji: {
    name: '徐氏/巾帼花武/chuchang2',
    action: ['gongji', 'jineng'],
    scale: 0.85,
  },
  beijing: {
    name: '徐氏/巾帼花武/beijing',
    x: [0, 0.2],
    y: [0, 0.5],
    scale: 0.3,
  },
  zhishixian: {
    name: '徐氏/巾帼花武/shouji2',
    scale: 0.3,
    speed: 0.6,
    delay: 0.2,
    effect: {
      name: '徐氏/巾帼花武/shouji',
      scale: 0.5,
      speed: 0.6,
      delay: 0.3,
    },
  },
},
拈花思君: {
  name: '徐氏/拈花思君/daiji2',
  x: [0, 0.42],
  y: [0, 0.52],
  scale: 0.9,
  angle: -10,
          //speed: 1,
          shizhounian: true,
          chuchang: {
    name: '徐氏/拈花思君/chuchang',
    scale: 0.9,
    action: 'play',
  },
  gongji: {
    name: '徐氏/拈花思君/chuchang',
    scale: 1.1,
    action: 'play',
  },
  beijing: {
    name: '徐氏/拈花思君/beijing',
    x: [0, 0.1],
    y: [0, 0.5],
    scale: 0.3,
  },
},
琪花瑶草:{
  name: '徐氏/琪花瑶草/XingXiang',
  x: [0,0.76],
  y: [0,0.22],
  scale: 0.5,
  angle: 0,
          //speed: 1,
  //action: 'DaiJi',
  beijing: {
    name: '徐氏/琪花瑶草/BeiJing',
    scale: 0.3,
    x: [0, 0.4],
    y: [0, 0.5]
  },
},
为夫弑敌: {
  name: '徐氏/为夫弑敌/daiji2',
  x: [0, 0.27],
  y: [0, 0.52],
  scale: 0.85,
  angle: -10,
          //speed: 1,
          shizhounian: true,
          chuchang: {
    name: '徐氏/为夫弑敌/chuchang',
    scale: 0.9,
    action: 'play',
  },
  gongji: {
    name: '徐氏/为夫弑敌/chuchang',
    scale: 1.1,
    action: 'play',
  },
  beijing: {
    name: '徐氏/为夫弑敌/beijing',
    x: [0, 0.5],
    y: [0, 0.5],
    scale: 0.3,
  },
},
  },
    xushao: { // 许劭
      评世雕龙: {
        name: '许劭/评世雕龙/daiji2',
        teshu: {
          name: '许劭/评世雕龙/chuchang2',
          action: ['jineng'],
          scale: 0.7,
          whitelist: ['pingjian', 'pingjian_use', 'shenpingjian', 'shenpingjian_use', 'shipingjian', 'shipingjian_use'],
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.4],
        y: [0, 0.4],
        scale: 0.9,
        angle: -5,
        //speed: 1,
        background: '许劭/评世雕龙/static_bg.png',
        shizhounian: true,
        chuchang: {
          name: '许劭/评世雕龙/chuchang',
          action: 'play',
          scale: 0.5,
        },
        gongji: {
          name: '许劭/评世雕龙/chuchang2',
          action: ['gongji'],
          scale: 0.7,
        },
        beijing: {
          name: '许劭/评世雕龙/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '许劭/评世雕龙/shouji2',
          scale: 0.5,
          speed: 0.6,
          delay: 0.2,
          effect: {
            name: '许劭/评世雕龙/shouji',
            scale: 0.4,
            speed: 0.8,
            delay: 0.3,
          },
        },
      },
      声名鹊起: {
        name: '许劭/声名鹊起/daiji2',
        teshu: {
          name: '许劭/声名鹊起/chuchang',
          scale: 1,
          action: 'play',
          whitelist: ['pingjian', 'pingjian_use', 'shenpingjian', 'shenpingjian_use', 'shipingjian', 'shipingjian_use'],
        },
        x: [0, 0.42],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '许劭/声名鹊起/chuchang',
          scale: 1,
          action: 'play',
        },
        gongji: {
          name: '许劭/声名鹊起/chuchang',
          scale: 1,
          action: 'play',
        },
        beijing: {
          name: '许劭/声名鹊起/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    zhangchunhua: {//张春华
			绰约多姿: {
				name: '张春华/绰约多姿/daiji2',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.88,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张春华/绰约多姿/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '张春华/绰约多姿/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '张春华/绰约多姿/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			宣穆夜袭:{
				name: '张春华/宣穆夜袭/XingXiang',
				x: [0,0.23],
				y: [0,0.18],
				scale: 0.54,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张春华/宣穆夜袭/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
    },
    zhangqiying: {//张琪瑛
			岁稔年丰: {
				name: '张琪瑛/岁稔年丰/daiji2',
				x: [0, 0.5],
				y: [0, 0.35],
				scale: 1.15,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张琪瑛/岁稔年丰/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '张琪瑛/岁稔年丰/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '张琪瑛/岁稔年丰/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			逐鹿天下: {
				name: '张琪瑛/逐鹿天下/daiji2',
				x: [0, 0.36],
				y: [0, 0.5],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张琪瑛/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张琪瑛/逐鹿天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张琪瑛/逐鹿天下/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
    },
    zhangxingcai: {//张星彩
			父志耀星: {
				name: '张星彩/父志耀星/daiji2',
				x: [0, 0.4],
				y: [0, 0.47],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/父志耀星/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张星彩/父志耀星/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张星彩/父志耀星/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			临军对阵:{
				name: '张星彩/临军对阵/XingXiang',
				x: [0,0.92],
				y: [0,0.3],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张星彩/临军对阵/BeiJing',
					scale: 0.3,
					x: [0, -0.55],
					y: [0, 0.4]
				},
			},
			星春侯福: {
				name: '张星彩/星春侯福/daiji2',
				x: [0, 0.45],
				y: [0, 0.45],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/星春侯福/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '张星彩/星春侯福/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '张星彩/星春侯福/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			猪年中秋:{
				name: '张星彩/猪年中秋/XingXiang',
				x: [0,0.55],
				y: [0,0.4],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张星彩/猪年中秋/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
    },
    zhangxuan: {//张嫙
			双姝绰约: {
				name: '张嫙/双姝绰约/daiji2',
				teshu: {
					name: '张嫙/双姝绰约/chuchang2',
					action: ['jineng'],
					scale: 0.8,
				},
				shan: 'play3',
        play2: 'play2',
				x: [0, 0.42],
				y: [0, 0.31],
				scale: 1.21,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张嫙/双姝绰约/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '张嫙/双姝绰约/chuchang2',
					action: ['gongji'],
					scale: 0.8,
				},
				beijing: {
					name: '张嫙/双姝绰约/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '张嫙/双姝绰约/shouji2',
					scale: 0.5,
					speed: 1.2,
					delay: 0.3,
					effect: {
						name: '张嫙/双姝绰约/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},
    },
    zhaoxiang: {//赵襄
			芳芷飒敌: {
				name: '赵襄/芳芷飒敌/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.98,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵襄/芳芷飒敌/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '赵襄/芳芷飒敌/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '赵襄/芳芷飒敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
    },
    zhouyi: {//周夷
			剑舞浏漓: {
				name: '周夷/剑舞浏漓/daiji2',
				x: [0, 0.16],
				y: [0, 0.49],
				scale: 0.92,
				angle: -22,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周夷/剑舞浏漓/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '周夷/剑舞浏漓/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '周夷/剑舞浏漓/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
    },
    zuoci: {//左慈
			役使鬼神:{
				name: '左慈/役使鬼神/XingXiang',
				x: [0,0.98],
				y: [0,0.03],
				scale: 0.78,
				angle: 20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '左慈/役使鬼神/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
    },
	};

	var extend = {//共用
    //鲍三娘
    re_baosanniang: decadeUI.dynamicSkin.baosanniang,
    xin_baosanniang: decadeUI.dynamicSkin.baosanniang,

    //大乔
    re_daqiao: decadeUI.dynamicSkin.daqiao,
    sb_daqiao: decadeUI.dynamicSkin.daqiao,

    //貂蝉
    re_diaochan: decadeUI.dynamicSkin.diaochan,
    sp_diaochan: decadeUI.dynamicSkin.diaochan,
    sb_diaochan: decadeUI.dynamicSkin.diaochan,

    //董白
    re_dongbai: decadeUI.dynamicSkin.dongbai,

    //留赞
    re_liuzan: decadeUI.dynamicSkin.liuzan,

    //李儒
    re_liru: decadeUI.dynamicSkin.liru,
    dc_liru: decadeUI.dynamicSkin.liru,
    xin_liru: decadeUI.dynamicSkin.liru,

    //孙鲁育
    re_sunluyu: decadeUI.dynamicSkin.sunluyu,

    //孙茹
    dc_sunru: decadeUI.dynamicSkin.sunru,

    //王元姬
    jin_wangyuanji: decadeUI.dynamicSkin.wangyuanji,

    // 许劭
    shenxushao: decadeUI.dynamicSkin.xushao,
    shixushao: decadeUI.dynamicSkin.xushao,

    //张春华
    re_zhangchunhua: decadeUI.dynamicSkin.zhangchunhua,

    //张琪瑛
    old_zhangqiying:decadeUI.dynamicSkin.zhangqiying,

    //赵襄
    decade_zhaoxiang:decadeUI.dynamicSkin.zhaoxiang,
    old_zhaoxiang:decadeUI.dynamicSkin.zhaoxiang,

    //左慈
    re_zuoci: decadeUI.dynamicSkin.zuoci,

	};
	decadeUI.get.extend(decadeUI.dynamicSkin, extend);

});

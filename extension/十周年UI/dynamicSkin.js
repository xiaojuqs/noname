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
    baosanniang: { //鲍三娘
      虎年七夕: {
        name: '鲍三娘/虎年七夕/XingXiang',
        x: [0, 0.46],
        y: [0, 0.36],
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
        x: [0, 0.4],
        y: [0, 0.6],
        scale: 0.6,
        angle: 0,
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
      兔娇春浓: {
        name: '鲍三娘/兔娇春浓/daiji2',
        teshu: {
          name: '鲍三娘/兔娇春浓/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.4],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '鲍三娘/兔娇春浓/chuchang',
          action: 'play',
          scale: 0.7,
        },
        gongji: {
          name: '鲍三娘/兔娇春浓/chuchang2',
          action: ['gongji'],
          scale: 0.8,
        },
        beijing: {
          name: '鲍三娘/兔娇春浓/beijing',
          x: [0, 0.29],
          y: [0, 0.5],
          scale: 0.4,
        },
        zhishixian: {
          name: '鲍三娘/兔娇春浓/shouji2',
          scale: 0.5,
          speed: 0.8,
          delay: 0.4,
          effect: {
            name: '鲍三娘/兔娇春浓/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.25,
          },
        },
      },
      嫣然一笑: {
        name: '鲍三娘/嫣然一笑/XingXiang',
        x: [0, -0.3],
        y: [0, 0.2],
        scale: 0.45,
        angle: 0,
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
    caocao: { //曹操
      雄吞天下: {
        name: '曹操/雄吞天下/XingXiang',
        x: [0, 0.3],
        y: [0, 0.25],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '曹操/雄吞天下/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
      逐鹿天下: {
        name: '曹操/逐鹿天下/XingXiang',
        x: [0, 0.5],
        y: [0, 0.15],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '曹操/逐鹿天下/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    caochun: { //曹纯
      虎啸龙渊: {
        name: '曹纯/虎啸龙渊/daiji2',
        teshu: {
          name: '曹纯/虎啸龙渊/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
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
          action: ['gongji'],
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
        teshu: {
          name: '曹纯/虎啸龙渊2/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
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
          action: ['gongji'],
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
      长坂败备: {
        name: '曹纯/长坂败备/XingXiang',
        x: [0, 1.1],
        y: [0, -0.17],
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
    caohua: { //曹华
      彩蝶恋花: {
        name: '曹华/彩蝶恋花/daiji2',
        teshu: {
          name: '曹华/彩蝶恋花/chuchang2',
          action: ['jineng'],
          scale: 0.6,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.45],
        y: [0, 0.55],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '曹华/彩蝶恋花/chuchang',
          action: 'play',
          scale: 0.75,
        },
        gongji: {
          name: '曹华/彩蝶恋花/chuchang2',
          action: ['gongji'],
          scale: 0.6,
        },
        beijing: {
          name: '曹华/彩蝶恋花/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '曹华/彩蝶恋花/shouji2',
          scale: 0.5,
          speed: 0.6,
          delay: 0.3,
          effect: {
            name: '曹华/彩蝶恋花/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.4,
          },
        },
      },
    },
    caojinyu: { //曹金玉
      瓷语青花: {
        name: '曹金玉/瓷语青花/daiji2',
        teshu: {
          name: '曹金玉/瓷语青花/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.45],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '曹金玉/瓷语青花/chuchang',
          action: 'play',
          scale: 0.8,
        },
        gongji: {
          name: '曹金玉/瓷语青花/chuchang2',
          action: ['gongji'],
          scale: 0.8,
        },
        beijing: {
          name: '曹金玉/瓷语青花/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
          angle: 0,
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
      瑞雪纷华: {
        name: '曹金玉/瑞雪纷华/daiji2',
        x: [0, 0.4],
        y: [0, 0.43],
        scale: 1,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '曹金玉/瑞雪纷华/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '曹金玉/瑞雪纷华/chuchang',
          scale: 0.85,
          action: 'play',
        },
        beijing: {
          name: '曹金玉/瑞雪纷华/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    caoshuang: { //曹爽
      受诏专权: {
        name: '曹爽/受诏专权/xingxiang',
        version: "4.0",
        json: true,
        shizhounian: true,
        x: [0, 0.67],
        y: [0, 0.45],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        chuchang: {
          name: '曹爽/受诏专权/jineng01',
          version: "4.0",
          json: true,
          scale: 0.8,
          action: 'play',
        },
        gongji: {
          name: '曹爽/受诏专权/jineng01',
          version: "4.0",
          json: true,
          scale: 0.8,
          action: 'play',
        },
        beijing: {
          name: '曹爽/受诏专权/beijing',
          version: "4.0",
          json: true,
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
        zhishixian: {
          name: '曹爽/受诏专权/jineng02',
          version: "4.0",
          json: true,
          scale: 0.6,
          speed: 0.6,
          delay: 0.4,
        },
      },
    },
    caoxiancaohua: { //曹宪曹华
      娇媚芙蓉: {
        name: '曹宪曹华/娇媚芙蓉/xingxiang',
        version: "4.0",
        //json: true,
        x: [0, 1.0],
        y: [0, 0.5],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        beijing: {
          name: '曹宪曹华/娇媚芙蓉/beijing',
          version: "4.0",
          json: true,
          scale: 0.5,
          x: [0, 0.3],
          y: [0, 0.5]
        },
      },
    },
    daqiao: { //大乔
      花好月圆: { //出场错误
        name: '大乔/花好月圆/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.8,
        angle: 10,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '大乔/花好月圆/ChuChang',
          version: "4.0",
          scale: 0.8,
          action: 'play',
        },
        gongji: {
          name: '大乔/花好月圆/ChuChang',
          version: "4.0",
          scale: 1,
          action: 'play',
        },
        beijing: {
          name: '大乔/花好月圆/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
        special: {
          击杀: {},
          jisha: {
            name: '大乔/花好月圆/JiSha',
            x: [0, 0.54],
            version: "4.0",
            scale: 0.9,
            speed: 1,
            delay: 2,
          },
          condition: {
            jisha: {
              transform: "击杀",
              play: 'jisha',
            },
          },
        },
      },
      绝世之姿: {
        name: '大乔/绝世之姿/XingXiang',
        x: [0, 0.44],
        y: [0, 0.23],
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
      衣垂绿川: {
        name: '大乔/衣垂绿川/XingXiang',
        x: [0, 1],
        y: [0, 0.25],
        scale: 0.45,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '大乔/衣垂绿川/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    diaochan: { //貂蝉
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
      绝世倾城: {
        name: '貂蝉/绝世倾城/XingXiang',
        x: [0, 0.42],
        y: [0, 0.16],
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
      驭魂千机: {
        name: '貂蝉/驭魂千机/XingXiang',
        x: [0, 0.54],
        y: [0, 0.23],
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
    dongbai: { //董白
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
      猪年春节: {
        name: '董白/猪年春节/XingXiang',
        x: [0, 0.67],
        y: [0, 0.47],
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
    dongzhuo: { //董卓
      文和乱武: {
        name: '董卓/文和乱武/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '董卓/文和乱武/chuchang',
          scale: 0.8,
          action: 'play',
        },
        gongji: {
          name: '董卓/文和乱武/chuchang',
          scale: 1,
          action: 'play',
        },
        beijing: {
          name: '董卓/文和乱武/beijing',
          x: [0, 0.2],
          y: [0, 0.32],
          scale: 0.4,
        },
      },
    },
    duyu: { //杜预
      龙吟破竹: {
        name: '杜预/龙吟破竹/XingXiang',
        x: [0, 0.7],
        y: [0, 0.35],
        scale: 0.42,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '杜预/龙吟破竹/BeiJing',
          scale: 0.3,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    fanyufeng: { //樊玉凤
      斟酒入情: {
        name: '樊玉凤/斟酒入情/daiji2',
        x: [0, 0.45],
        y: [0, 0.45],
        scale: 0.85,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '樊玉凤/斟酒入情/chuchang',
          scale: 0.8,
          action: 'play',
        },
        gongji: {
          name: '樊玉凤/斟酒入情/chuchang',
          scale: 1,
          action: 'play',
        },
        beijing: {
          name: '樊玉凤/斟酒入情/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
      },
    },
    fengfangnv: { //冯妤
      丹唇点绛: {
        name: '冯妤/丹唇点绛/xingxiang',
        version: "4.0",
        x: [0, 0.35],
        y: [0, 0.4],
        scale: 0.9,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '冯妤/丹唇点绛/jineng01',
          version: "4.0",
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '冯妤/丹唇点绛/jineng01',
          version: "4.0",
          scale: 0.9,
          action: 'play',
        },
        zhishixian: {
          name: '冯妤/丹唇点绛/jineng02',
          version: "4.0",
          scale: 0.5,
          speed: 0.5,
          delay: 0.4,
        },
        beijing: {
          name: '冯妤/丹唇点绛/beijing',
          version: "4.0",
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
      韶颜雅容: {
        name: '冯妤/韶颜雅容/daiji2',
        x: [0, 0.5],
        y: [0, 0.6],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '冯妤/韶颜雅容/chuchang',
          scale: 1,
          action: 'play',
        },
        gongji: {
          name: '冯妤/韶颜雅容/chuchang',
          scale: 1.2,
          action: 'play',
        },
        beijing: {
          name: '冯妤/韶颜雅容/beijing',
          x: [0, 0.2],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    guanning: { //管宁
      墨韵荷香: {
        name: '管宁/墨韵荷香/daiji2',
        shan: 'play3',
        x: [0, 0.43],
        y: [0, 0.65],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '管宁/墨韵荷香/chuchang',
          action: 'play',
          scale: 0.5,
        },
        gongji: {
          name: '管宁/墨韵荷香/chuchang2',
          action: 'gongji',
          scale: 0.5,
        },
        teshu: {
          name: '管宁/墨韵荷香/chuchang2',
          action: 'jineng',
          scale: 0.5,
          whitelist: ['dunshi', 'shidunshi'],
        },
        beijing: {
          name: '管宁/墨韵荷香/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.25,
        },
        zhishixian: {
          name: '管宁/墨韵荷香/shouji2',
          scale: 0.8,
          speed: 1,
          delay: 0.5,
          effect: {
            name: '管宁/墨韵荷香/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.6,
          },
        },
      },
    },
    guansuo: { //关索
      虎年七夕: {
        name: '关索/虎年七夕/XingXiang',
        x: [0, 0.73],
        y: [0, 0.41],
        scale: 0.42,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '关索/虎年七夕/BeiJing',
          scale: 0.3,
          x: [0, 0.69],
          y: [0, 0.5]
        },
      },
      兔娇春浓: {
        name: '关索/兔娇春浓/daiji2',
        teshu: {
          name: '关索/兔娇春浓/chuchang2',
          action: ['jineng'],
          scale: 0.9,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '关索/兔娇春浓/chuchang',
          action: 'play',
          scale: 0.8,
        },
        gongji: {
          name: '关索/兔娇春浓/chuchang2',
          action: ['gongji'],
          scale: 0.9,
        },
        beijing: {
          name: '关索/兔娇春浓/beijing',
          x: [0, 0.29],
          y: [0, 0.5],
          scale: 0.4,
        },
        zhishixian: {
          name: '关索/兔娇春浓/shouji2',
          scale: 0.5,
          speed: 0.8,
          delay: 0.4,
          effect: {
            name: '关索/兔娇春浓/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.25,
          },
        },
      },
    },
    heyan: { //何晏
      忆梦慕蝶: {
        name: '何晏/忆梦慕蝶/daiji2',
        x: [0, 0.4],
        y: [0, 0.55],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '何晏/忆梦慕蝶/chuchang',
          scale: 0.9,
          action: 'play',
        },
        gongji: {
          name: '何晏/忆梦慕蝶/chuchang',
          scale: 1.1,
          action: 'play',
        },
        beijing: {
          name: '何晏/忆梦慕蝶/beijing',
          x: [0, -1.2],
          y: [0, 0.5],
          scale: 0.4,
        },
      },
    },
    huaman: { //花鬘
      花俏蛮娇: {
        name: '花鬘/花俏蛮娇/daiji2',
        x: [0, 0.5],
        y: [0, 0.55],
        scale: 0.65,
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
    huangchengyan: { //黄承彦
      夜占吉凶: {
        name: '黄承彦/夜占吉凶/xingxiang',
        version: "4.0",
        json: true,
        x: [0, 0.75],
        y: [0, 0.55],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        beijing: {
          name: '黄承彦/夜占吉凶/beijing',
          version: "4.0",
          json: true,
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    huanggai: { //黄盖
      鏖战赤壁: {
        name: '黄盖/鏖战赤壁/XingXiang',
        x: [0, 0.63],
        y: [0, 0.5],
        scale: 0.45,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '黄盖/鏖战赤壁/BeiJing',
          scale: 0.3,
          x: [0, 1.37],
          y: [0, 0.5]
        },
      },
    },
    huangzhong: { //黄忠
      明良千古: {
        name: '黄忠/明良千古/XingXiang',
        x: [0, 0.44],
        y: [0, 0.4],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '黄忠/明良千古/BeiJing',
          scale: 0.3,
          x: [0, 1.5],
          y: [0, 0.39]
        },
      },
    },
    liru: { //李儒
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
      鸩杀少帝: {
        name: '李儒/鸩杀少帝/XingXiang',
        x: [0, 0.2],
        y: [0, 0.17],
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
    lingtong: { //凌统
      长风破浪: {
        name: '凌统/长风破浪/XingXiang',
        x: [0, 0],
        y: [0, 0],
        scale: 0.5,
        angle: 12,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '凌统/长风破浪/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    liubei: { //刘备
      龙骧麟振: {
        name: '刘备/龙骧麟振/XingXiang',
        x: [0, 0.36],
        y: [0, 0.3],
        scale: 0.46,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '刘备/龙骧麟振/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
      明良千古: {
        name: '刘备/明良千古/XingXiang',
        x: [0, 0.9],
        y: [0, 0.35],
        scale: 0.35,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '刘备/明良千古/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
      逐鹿天下: {
        name: '刘备/逐鹿天下/XingXiang',
        x: [0, 1.2],
        y: [0, 0.3],
        scale: 0.45,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '刘备/逐鹿天下/BeiJing',
          scale: 0.3,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    liuyan: { //刘焉
      秋霜金枫: {
        name: '刘焉/秋霜金枫/daiji2',
        teshu: {
          name: '刘焉/秋霜金枫/chuchang2',
          action: ['jineng'],
          scale: 0.65,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.31],
        y: [0, 0.37],
        scale: 1.1,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '刘焉/秋霜金枫/chuchang',
          action: 'play',
          scale: 0.75,
        },
        gongji: {
          name: '刘焉/秋霜金枫/chuchang2',
          action: ['gongji'],
          scale: 0.65,
        },
        beijing: {
          name: '刘焉/秋霜金枫/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
        zhishixian: {
          name: '刘焉/秋霜金枫/shouji2',
          scale: 0.5,
          speed: 0.5,
          delay: 0.4,
          effect: {
            name: '刘焉/秋霜金枫/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.25,
          },
        },
      },
      雄踞益州: {
        name: '刘焉/雄踞益州/XingXiang',
        x: [0, 0.5],
        y: [0, 0.11],
        scale: 0.56,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '刘焉/雄踞益州/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    liuzan: { //留赞
      高歌陷陈: {
        name: '留赞/高歌陷陈/daiji2',
        x: [0, 0.4],
        y: [0, 0.6],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '留赞/高歌陷陈/chuchang',
          scale: 0.9,
          action: 'play',
        },
        gongji: {
          name: '留赞/高歌陷陈/chuchang',
          scale: 1.1,
          action: 'play',
        },
        beijing: {
          name: '留赞/高歌陷陈/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
      抗音而歌: {
        name: '留赞/抗音而歌/XingXiang',
        x: [0, 0.45],
        y: [0, -0.1],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '留赞/抗音而歌/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
      灵魂歌王: {
        name: '留赞/灵魂歌王/XingXiang',
        x: [0, -0.2],
        y: [0, 0.0],
        scale: 0.5,
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
    lvlingqi: { //吕玲绮
      炽焱流金: {
        name: '吕玲绮/炽焱流金/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
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
      繁华彩鸢: {
        name: '吕玲绮/繁华彩鸢/daiji2',
        x: [0, 0.5],
        y: [0, 0.4],
        scale: 0.9,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '吕玲绮/繁华彩鸢/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '吕玲绮/繁华彩鸢/chuchang',
          scale: 0.9,
          action: 'play',
        },
        beijing: {
          name: '吕玲绮/繁华彩鸢/beijing',
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
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
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
    majun: { //马钧
      能工巧匠: {
        name: '马钧/能工巧匠/XingXiang',
        x: [0, 0.4],
        y: [0, 0.2],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '马钧/能工巧匠/BeiJing',
          scale: 0.3,
          x: [0, -0.8],
          y: [0, 0.4]
        },
      },
    },
    miheng: { //祢衡
      击鼓骂曹: {
        name: '祢衡/击鼓骂曹/XingXiang',
        x: [0, 0.3],
        y: [0, 0.2],
        scale: 0.55,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '祢衡/击鼓骂曹/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    nanhualaoxian: { //南华老仙
      丰年映雪: {
        name: '南华老仙/丰年映雪/daiji2',
        teshu: {
          name: '南华老仙/丰年映雪/chuchang2',
          action: ['jineng'],
          scale: 0.6,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.55],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '南华老仙/丰年映雪/chuchang',
          action: 'play',
          scale: 0.6,
        },
        gongji: {
          name: '南华老仙/丰年映雪/chuchang2',
          action: ['gongji'],
          scale: 0.6,
        },
        beijing: {
          name: '南华老仙/丰年映雪/beijing',
          x: [0, 1],
          y: [0, 0.5],
          scale: 0.4,
        },
        zhishixian: {
          name: '南华老仙/丰年映雪/shouji2',
          scale: 0.7,
          speed: 0.8,
          delay: 0.4,
          effect: {
            name: '南华老仙/丰年映雪/shouji',
            scale: 0.5,
            speed: 1,
            delay: 0.4,
          },
        },
      },
      野鹤闲云: {
        name: '南华老仙/野鹤闲云/XingXiang',
        x: [0, 1.7],
        y: [0, 0.0],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '南华老仙/野鹤闲云/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    panshu: { //潘淑
      繁囿引芳: {
        name: '潘淑/繁囿引芳/daiji2',
        x: [0, 0.45],
        y: [0, 0.54],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '潘淑/繁囿引芳/chuchang',
          scale: 0.8,
          action: 'play',
        },
        gongji: {
          name: '潘淑/繁囿引芳/chuchang',
          scale: 1,
          action: 'play',
        },
        beijing: {
          name: '潘淑/繁囿引芳/beijing',
          x: [0, 1],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
      江东锦绣: {
        name: '潘淑/江东锦绣/xingxiang',
        version: "4.0",
        shizhounian: true,
        x: [0, 0.4],
        y: [0, 0.5],
        scale: 0.65,
        angle: 0,
        //speed: 1,
        chuchang: {
          name: '潘淑/江东锦绣/jineng01',
          version: "4.0",
          scale: 0.6,
          action: 'play',
        },
        gongji: {
          name: '潘淑/江东锦绣/jineng01',
          version: "4.0",
          scale: 0.7,
          action: 'play',
        },
        beijing: {
          name: '潘淑/江东锦绣/beijing',
          version: "4.0",
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
        zhishixian: {
          name: '潘淑/江东锦绣/jineng02',
          version: "4.0",
          scale: 0.5,
          speed: 0.8,
          delay: 0.3,
        },
      },
    },
    puyuan: { //蒲元
      战场绝版: {
        name: '蒲元/战场绝版/daiji2',
        teshu: {
          name: '蒲元/战场绝版/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.41],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '蒲元/战场绝版/chuchang',
          action: 'play',
          scale: 0.9,
        },
        gongji: {
          name: '蒲元/战场绝版/chuchang2',
          action: ['gongji'],
          scale: 0.8,
        },
        beijing: {
          name: '蒲元/战场绝版/beijing',
          x: [0, 0.4],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '蒲元/战场绝版/shouji2',
          scale: 0.5,
          speed: 0.6,
          delay: 0.3,
          effect: {
            name: '蒲元/战场绝版/shouji',
            scale: 0.6,
            speed: 0.8,
            delay: 0.5,
          },
        },
      },
    },
    ruanyu: { //阮瑀
      墨卷浩瀚: {
        name: '阮瑀/墨卷浩瀚/daiji2',
        x: [0, 0.41],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '阮瑀/墨卷浩瀚/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '阮瑀/墨卷浩瀚/chuchang',
          scale: 0.9,
          action: 'play',
        },
        beijing: {
          name: '阮瑀/墨卷浩瀚/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
      },
    },
    ruiji: { //芮姬
      玉芮花意: {
        name: '芮姬/玉芮花意/xingxiang',
        version: "4.0",
        json: true,
        shizhounian: true,
        x: [0, 0.9],
        y: [0, 0.5],
        scale: 0.7,
        // angle: -10,
        //speed: 1,
        chuchang: {
          name: '芮姬/玉芮花意/jineng01',
          version: "4.0",
          json: true,
          scale: 1.3,
          action: 'play',
        },
        gongji: {
          name: '芮姬/玉芮花意/jineng01',
          version: "4.0",
          json: true,
          scale: 1.5,
          action: 'play',
        },
        beijing: {
          name: '芮姬/玉芮花意/beijing',
          version: "4.0",
          json: true,
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
        zhishixian: {
          name: '芮姬/玉芮花意/jineng02',
          version: "4.0",
          json: true,
          scale: 0.5,
          speed: 0.4,
          delay: 0.4,
        },
      },
    },
    shen_caocao: { //神曹操
      玄天通冥: {
        name: '神曹操/玄天通冥/XingXiang',
        x: [0, 0.55],
        y: [0, -0.05],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '神曹操/玄天通冥/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    shen_dengai: { //神邓艾
      遏川制泽: {
        name: '神邓艾/遏川制泽/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
        angle: 5,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '神邓艾/遏川制泽/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '神邓艾/遏川制泽/chuchang',
          scale: 0.9,
          action: 'play',
        },
        beijing: {
          name: '神邓艾/遏川制泽/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    shen_ganning: { // 神甘宁
      万人辟易: {
        name: '神甘宁/万人辟易/XingXiang',
        x: [0, 0.3],
        y: [0, 0.23],
        scale: 0.4,
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
      倚星折月: {
        name: '神郭嘉/倚星折月/XingXiang',
        x: [0, -0.31],
        y: [0, 0.34],
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
      倚星折月2: {
        name: '神郭嘉/倚星折月2/XingXiang-1',
        x: [0, -0.31],
        y: [0, 0.34],
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
    shen_lvmeng: { //神吕蒙
      兼资文武: {
        name: '神吕蒙/兼资文武/XingXiang',
        x: [0, 0.1],
        y: [0, 0.36],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '神吕蒙/兼资文武/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    shen_machao: { //神马超
      迅骛惊雷: {
        name: '神马超/迅骛惊雷/daiji2',
        teshu: {
          name: '神马超/迅骛惊雷/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.45],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '神马超/迅骛惊雷/chuchang',
          action: 'play',
          scale: 0.7,
        },
        gongji: {
          name: '神马超/迅骛惊雷/chuchang2',
          action: ['gongji'],
          scale: 0.8,
        },
        beijing: {
          name: '神马超/迅骛惊雷/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '神马超/迅骛惊雷/shouji2',
          scale: 0.5,
          speed: 0.6,
          delay: 0.3,
          effect: {
            name: '神马超/迅骛惊雷/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.4,
          },
        },
      },
    },
    shen_sunce: { //神孙策
      霸王再世: {
        name: '神孙策/霸王再世/XingXiang',
        x: [0, 0.23],
        y: [0, 0.54],
        scale: 0.3,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '神孙策/霸王再世/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    shen_xunyu: { //神荀彧
      虎年清明: {
        name: '神荀彧/虎年清明/XingXiang',
        x: [0, 0.6],
        y: [0, 0.28],
        scale: 0.52,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        gongji: {
          action: 'TeShu',
          scale: 0.6,
          speed: 2,
          x: [0, 0.8],
          y: [0, 0.4]
        },
        beijing: {
          name: '神荀彧/虎年清明/BeiJing',
          scale: 0.3,
          x: [0, 1.2],
          y: [0, 0.4]
        },
      },
    },
    shen_zhaoyun: { //神赵云
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
      战龙在野: {
        name: '神赵云/战龙在野/XingXiang',
        x: [0, 0.5],
        y: [0, 0.2],
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
    shen_zhouyu: { //神周瑜
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
      陵光引灵: {
        name: '神周瑜/陵光引灵/XingXiang',
        x: [0, 0.34],
        y: [0, -0.18],
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
      焰腾麒麟: {
        name: '神周瑜/焰腾麒麟/XingXiang',
        x: [0, -0.3],
        y: [0, 0.44],
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
    simahui: { //司马徽
      教诲不倦: {
        name: '司马徽/教诲不倦/daiji2',
        x: [0, 0.5],
        y: [0, 0.65],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '司马徽/教诲不倦/chuchang',
          scale: 0.9,
          action: 'play',
        },
        gongji: {
          name: '司马徽/教诲不倦/chuchang',
          scale: 1.1,
          action: 'play',
        },
        beijing: {
          name: '司马徽/教诲不倦/beijing',
          x: [0, 0.25],
          y: [0, 0.48],
          scale: 0.3,
        },
      },
    },
    sunhanhua: { //孙寒华
      莲华熠熠: {
        name: '孙寒华/莲华熠熠/XingXiang',
        x: [0, -0.2],
        y: [0, 0.2],
        scale: 0.5,
        angle: -15,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '孙寒华/莲华熠熠/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    sunluyu: { //孙鲁育
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
      牛年端午: {
        name: '孙鲁育/牛年端午/XingXiang',
        x: [0, 0.02],
        y: [0, 0.3],
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
      猪年春节: {
        name: '孙鲁育/猪年春节/XingXiang',
        x: [0, 0.26],
        y: [0, 0.28],
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
    sunquan: { //孙权
      冠绝天下: {
        name: '孙权/冠绝天下/XingXiang',
        x: [0, 0.5],
        y: [0, 0.35],
        scale: 0.35,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '孙权/冠绝天下/BeiJing',
          scale: 0.3,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
      吴王六剑: {
        name: '孙权/吴王六剑/XingXiang',
        x: [0, 0.5],
        y: [0, 0.25],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '孙权/吴王六剑/BeiJing',
          scale: 0.25,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    sunru: { //孙茹
      花容月貌: {
        name: '孙茹/花容月貌/XingXiang',
        x: [0, 0.58],
        y: [0, 0.13],
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
      烟水悠悠: {
        name: '孙茹/烟水悠悠/XingXiang',
        x: [0, 0.3],
        y: [0, -0.32],
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
      鱼游濠水: {
        name: '孙茹/鱼游濠水/XingXiang',
        x: [0, 0.78],
        y: [0, 0.08],
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
        teshu: {
          name: '孙茹/月兔琼香/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.8,
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
          action: ['gongji'],
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
    sunyi: { //孙翊
      腾龙翻江: {
        name: '孙翊/腾龙翻江/daiji2',
        x: [0, 0.6],
        y: [0, 0.5],
        scale: 0.75,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '孙翊/腾龙翻江/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '孙翊/腾龙翻江/chuchang',
          scale: 0.9,
          action: 'play',
        },
        beijing: {
          name: '孙翊/腾龙翻江/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    tengfanglan: { //滕芳兰
      拈花靛情: {
        name: '滕芳兰/拈花靛情/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '滕芳兰/拈花靛情/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '滕芳兰/拈花靛情/chuchang',
          scale: 0.9,
          action: 'play',
        },
        beijing: {
          name: '滕芳兰/拈花靛情/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
      脂车香姝: {
        name: '滕芳兰/脂车香姝/xingxiang',
        version: "4.0",
        json: true,
        shizhounian: true,
        x: [0, 0.5],
        y: [0, 0.45],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        chuchang: {
          name: '滕芳兰/脂车香姝/jineng01',
          version: "4.0",
          json: true,
          scale: 1.3,
          action: 'play',
        },
        gongji: {
          name: '滕芳兰/脂车香姝/jineng01',
          version: "4.0",
          json: true,
          scale: 1.5,
          action: 'play',
        },
        beijing: {
          name: '滕芳兰/脂车香姝/beijing',
          version: "4.0",
          json: true,
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
        zhishixian: {
          name: '滕芳兰/脂车香姝/jineng02',
          version: "4.0",
          json: true,
          scale: 0.8,
          speed: 0.9,
          delay: 0.3,
        },
      },
    },
    tenggongzhu: { //滕公主
      菡萏慕卿: {
        name: '滕公主/菡萏慕卿/daiji2',
        teshu: {
          name: '滕公主/菡萏慕卿/chuchang2',
          action: ['jineng'],
          scale: 0.7,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.52],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '滕公主/菡萏慕卿/chuchang',
          action: 'play',
          scale: 0.7,
        },
        gongji: {
          name: '滕公主/菡萏慕卿/chuchang2',
          action: ['gongji'],
          scale: 0.7,
        },
        beijing: {
          name: '滕公主/菡萏慕卿/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '滕公主/菡萏慕卿/shouji2',
          scale: 0.5,
          speed: 0.8,
          delay: 0.3,
          effect: {
            name: '滕公主/菡萏慕卿/shouji',
            scale: 0.6,
            speed: 0.8,
            delay: 0.6,
          },
        },
      },
      莲心姝影: {
        name: '滕公主/莲心姝影/daiji2',
        x: [0, 0.5],
        y: [0, 0.55],
        scale: 0.7,
        angle: -5,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '滕公主/莲心姝影/chuchang',
          scale: 0.6,
          action: 'play',
        },
        gongji: {
          name: '滕公主/莲心姝影/chuchang',
          scale: 0.8,
          action: 'play',
        },
        beijing: {
          name: '滕公主/莲心姝影/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    wanglang: { //王朗
      骧龙御宇: {
        name: '王朗/骧龙御宇/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '王朗/骧龙御宇/chuchang',
          scale: 0.9,
          action: 'play',
        },
        gongji: {
          name: '王朗/骧龙御宇/chuchang',
          scale: 1.1,
          action: 'play',
        },
        beijing: {
          name: '王朗/骧龙御宇/beijing',
          x: [0, -0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
      龙袭星落: {
        name: '王朗/龙袭星落/XingXiang',
        x: [0, 0.2],
        y: [0, 0.3],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '王朗/龙袭星落/BeiJing',
          scale: 0.25,
          x: [0, 1],
          y: [0, 0.5]
        },
      },
    },
    wangyuanji: { //王元姬
      鼠年冬至: {
        name: '王元姬/鼠年冬至/XingXiang',
        x: [0, 0.22],
        y: [0, 0.58],
        scale: 0.58,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '王元姬/鼠年冬至/BeiJing',
          scale: 0.3,
          x: [0, 0.1],
          y: [0, 0.5]
        },
      },
    },
    wenyang: { //文鸯
      骁勇金衔: {
        name: '文鸯/骁勇金衔/daiji2',
        teshu: {
          name: '文鸯/骁勇金衔/chuchang2',
          action: ['jineng'],
          scale: 0.8,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '文鸯/骁勇金衔/chuchang',
          action: 'play',
          scale: 0.9,
        },
        gongji: {
          name: '文鸯/骁勇金衔/chuchang2',
          action: ['gongji'],
          scale: 0.8,
        },
        beijing: {
          name: '文鸯/骁勇金衔/beijing',
          x: [0, 1],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '文鸯/骁勇金衔/shouji2',
          scale: 0.3,
          speed: 0.6,
          delay: 0.2,
          effect: {
            name: '文鸯/骁勇金衔/shouji',
            scale: 0.5,
            speed: 0.6,
            delay: 0.3,
          },
        },
      },
    },
    wolongfengchu: { //卧龙凤雏
      赤壁链火: {
        name: '卧龙凤雏/赤壁链火/xingxiang',
        version: "4.0",
        x: [0, 0.45],
        y: [0, 0.5],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        beijing: {
          name: '卧龙凤雏/赤壁链火/beijing',
          version: "4.0",
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
      赤壁链火卧龙: {
        name: '卧龙凤雏/赤壁链火/xingxiang',
        version: "4.0",
        x: [0, 0.95],
        y: [0, 0.4],
        scale: 1.15,
        angle: 10,
        //speed: 1,
        beijing: {
          name: '卧龙凤雏/赤壁链火/beijing',
          version: "4.0",
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
      赤壁链火凤雏: {
        name: '卧龙凤雏/赤壁链火/xingxiang',
        version: "4.0",
        x: [0, -0.4],
        y: [0, 0.23],
        scale: 1.25,
        angle: 0,
        //speed: 1,
        beijing: {
          name: '卧龙凤雏/赤壁链火/beijing',
          version: "4.0",
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    wuxian: { //吴苋
      金玉满堂: {
        name: '吴苋/金玉满堂/daiji2',
        x: [0, 0.5],
        y: [0, 0.55],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '吴苋/金玉满堂/chuchang',
          scale: 0.85,
          action: 'play',
        },
        gongji: {
          name: '吴苋/金玉满堂/chuchang',
          scale: 1.05,
          action: 'play',
        },
        beijing: {
          name: '吴苋/金玉满堂/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
      },
    },
    wu_zhugeliang: { //武诸葛亮
      经典形象: {
        name: '武诸葛亮/经典形象/wumiao_zhugeliang',
        teshu: 'play2',
        x: [0, 1.45],
        y: [0, 0.35],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        background: "武诸葛亮/经典形象/beijing.png",
        chuchang: {
          name: '武诸葛亮/经典形象/wumiao_zhugeliang',
          action: 'play2',
          scale: 0.5,
        },
        gongji: {
          name: '武诸葛亮/经典形象/wumiao_zhugeliang',
          action: ['play2'],
          scale: 0.5,
        },
      },
    },
    xizhicai: { // 戏志才
      举棋若定: {
        name: '戏志才/举棋若定/XingXiang',
        x: [0, 0.5],
        y: [0, 0.33],
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
    xusheng: { //徐盛
      破军杀将: {
        name: '徐盛/破军杀将/XingXiang',
        x: [0, 0.4],
        y: [0, 0],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '徐盛/破军杀将/BeiJing',
          scale: 0.3,
          x: [0, 1],
          y: [0, 0.5]
        },
      },
    },
    xushi: { //徐氏
      巾帼花武: {
        name: '徐氏/巾帼花武/daiji2',
        teshu: {
          name: '徐氏/巾帼花武/chuchang2',
          action: ['jineng'],
          scale: 0.85,
        },
        play2: 'play2',
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
          action: ['gongji'],
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
      琪花瑶草: {
        name: '徐氏/琪花瑶草/XingXiang',
        x: [0, 0.76],
        y: [0, 0.22],
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
          whitelist: ['pingjian', 'pingjian_use', 'shenpingjian', 'shenpingjian_use', 'shipingjian', 'shipingjian_use', 'spshenpingjian', 'spshenpingjian_use'],
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.45],
        y: [0, 0.5],
        scale: 0.75,
        angle: 0,
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
          factor: 0.5,
          effect: {
            name: '许劭/评世雕龙/shouji',
            scale: 0.4,
            speed: 0.8,
            delay: 0.3,
            factor: 0.5,
          },
        },
      },
      声名鹊起: {
        name: '许劭/声名鹊起/daiji2',
        teshu: {
          name: '许劭/声名鹊起/chuchang',
          scale: 1,
          action: 'play',
          whitelist: ['pingjian', 'pingjian_use', 'shenpingjian', 'shenpingjian_use', 'shipingjian', 'shipingjian_use', 'spshenpingjian', 'spshenpingjian_use'],
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
    xunyu: { //荀彧
      驱虎吞狼: {
        name: '荀彧/驱虎吞狼/XingXiang',
        x: [0, 1.35],
        y: [0, 0.08],
        scale: 0.54,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '荀彧/驱虎吞狼/BeiJing',
          scale: 0.25,
          x: [0, 0.1],
          y: [0, 0.5]
        },
      },
    },
    xuyou: { //许攸
      盛气凌人: {
        name: '许攸/盛气凌人/XingXiang',
        x: [0, 0.55],
        y: [0, 0.15],
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '许攸/盛气凌人/BeiJing',
          scale: 0.25,
          x: [0, 0.8],
          y: [0, 0.5]
        },
      },
      战场绝版: {
        name: '许攸/战场绝版/daiji2',
        shan: 'play3',
        play2: 'play2',
        x: [0, 0.5],
        y: [0, 0.55],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '许攸/战场绝版/chuchang',
          action: 'play',
          scale: 0.65,
        },
        gongji: {
          name: '许攸/战场绝版/chuchang2',
          action: 'gongji',
          scale: 0.65,
        },
        teshu: {
          name: '许攸/战场绝版/chuchang2',
          action: 'jineng',
          scale: 0.65,
        },
        beijing: {
          name: '许攸/战场绝版/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
        zhishixian: {
          name: '许攸/战场绝版/shouji2',
          scale: 0.6,
          speed: 0.9,
          delay: 0.6,
          effect: {
            name: '许攸/战场绝版/shouji',
            scale: 0.5,
            speed: 0.6,
            delay: 0.6,
          },
        },
      },
    },
    yangbiao: { //杨彪
      忧心国事: {
        name: '杨彪/忧心国事/XingXiang',
        x: [0, 0.45],
        y: [0, 0.42],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '杨彪/忧心国事/BeiJing',
          scale: 0.25,
          x: [0, 0.4],
          y: [0, 0.5]
        },
      },
    },
    yuantanyuanshang: { //袁谭袁尚
      常棣失华: {
        name: '袁谭袁尚/常棣失华/xingxiang',
        version: "4.0",
        json: true,
        shizhounian: true,
        x: [0, 0.45],
        y: [0, 0.55],
        scale: 0.4,
        angle: 0,
        //speed: 1,
        chuchang: {
          name: '袁谭袁尚/常棣失华/jineng01',
          version: "4.0",
          json: true,
          scale: 1,
          action: 'play',
        },
        gongji: {
          name: '袁谭袁尚/常棣失华/jineng01',
          version: "4.0",
          json: true,
          scale: 1.2,
          action: 'play',
        },
        beijing: {
          name: '袁谭袁尚/常棣失华/beijing',
          version: "4.0",
          json: true,
          scale: 0.6,
          x: [0, 0.7],
          y: [0, 0.5]
        },
      },
    },
    zhangchunhua: { //张春华
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
      宣穆夜袭: {
        name: '张春华/宣穆夜袭/XingXiang',
        x: [0, 0.23],
        y: [0, 0.18],
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
    zhangfen: { //张奋
      天工神机: {
        name: '张奋/天工神机/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.7,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '张奋/天工神机/chuchang',
          scale: 1,
          action: 'play',
        },
        gongji: {
          name: '张奋/天工神机/chuchang',
          scale: 1.2,
          action: 'play',
        },
        beijing: {
          name: '张奋/天工神机/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
    },
    zhangqiying: { //张琪瑛
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
    zhangxingcai: { //张星彩
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
      临军对阵: {
        name: '张星彩/临军对阵/XingXiang',
        x: [0, 0.92],
        y: [0, 0.3],
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
      猪年中秋: {
        name: '张星彩/猪年中秋/XingXiang',
        x: [0, 0.55],
        y: [0, 0.4],
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
    zhangxuan: { //张嫙
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
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
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
    zhangyao: { //张媱
      双姝绰约: {
        name: '张媱/双姝绰约/daiji2',
        teshu: {
          name: '张媱/双姝绰约/chuchang2',
          action: ['jineng'],
          scale: 0.7,
        },
        play2: 'play2',
        shan: 'play3',
        x: [0, 0.45],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '张媱/双姝绰约/chuchang',
          action: 'play',
          scale: 0.7,
        },
        gongji: {
          name: '张媱/双姝绰约/chuchang2',
          action: ['gongji'],
          scale: 0.7,
        },
        beijing: {
          name: '张媱/双姝绰约/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.4,
        },
        zhishixian: {
          name: '张媱/双姝绰约/shouji2',
          scale: 0.5,
          speed: 1.2,
          delay: 0.3,
          effect: {
            name: '张媱/双姝绰约/shouji',
            scale: 0.5,
            speed: 0.8,
            delay: 0.35,
          },
        },
      },
    },
    zhaoxiang: { //赵襄
      芳芷飒敌: {
        name: '赵襄/芳芷飒敌/daiji2',
        x: [0, 0.5],
        y: [0, 0.5],
        scale: 0.8,
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
    zhonghui: { //钟会
      钟桂香蒲: { //出场错误
        name: '钟会/钟桂香蒲/daiji2',
        x: [0, 0.35],
        y: [0, 0.65],
        scale: 0.6,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '钟会/钟桂香蒲/chuchang',
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '钟会/钟桂香蒲/chuchang',
          scale: 0.9,
          action: 'play',
        },
        beijing: {
          name: '钟会/钟桂香蒲/beijing',
          x: [0, 0.5],
          y: [0, 0.5],
          scale: 0.3,
        },
      },
      潜蛟觊天: {
        name: '钟会/潜蛟觊天/XingXiang',
        x: [0, -0.5],
        y: [0, 0.3],
        scale: 0.45,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        beijing: {
          name: '钟会/潜蛟觊天/BeiJing',
          scale: 0.3,
          x: [0, 0.5],
          y: [0, 0.5]
        },
        audio: {
          skill: '钟会/潜蛟觊天/audio',
          card: '钟会/潜蛟觊天/audio',
        },
        special: {
          觉醒: {
            name: 'zhonghui/潜蛟觊天2',
          },
          condition: {
            juexingji: {
              transform: "觉醒",
              effect: 'shaohui',
              //play: 'play',
            },
          },
        },
      },
      潜蛟觊天2: {
        name: '钟会/潜蛟觊天2/XingXiang-1',
        x: [0, -0.7],
        y: [0, 0.3],
        gongji: {
          x: [0, 0],
        },
        scale: 0.5,
        angle: 0,
        //speed: 1,
        //action: 'DaiJi',
        audio: {
          skill: '钟会/潜蛟觊天2/audio',
          card: '钟会/潜蛟觊天2/audio',
        },
        beijing: {
          name: '钟会/潜蛟觊天2/BeiJing-1',
          scale: 0.3,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    zhongyan: { //钟琰
      雪荣钟情: {
        name: '钟琰/雪荣钟情/xingxiang',
        version: "4.0",
        x: [0, 0.8],
        y: [0, 0.4],
        scale: 0.9,
        angle: 0,
        //speed: 1,
        shizhounian: true,
        chuchang: {
          name: '钟琰/雪荣钟情/jineng01',
          version: "4.0",
          scale: 0.7,
          action: 'play',
        },
        gongji: {
          name: '钟琰/雪荣钟情/jineng01',
          version: "4.0",
          scale: 0.9,
          action: 'play',
        },
        zhishixian: {
          name: '钟琰/雪荣钟情/jineng02',
          version: "4.0",
          scale: 0.5,
          speed: 0.5,
          delay: 0.4,
        },
        beijing: {
          name: '钟琰/雪荣钟情/beijing',
          version: "4.0",
          scale: 1.45,
          x: [0, 1.22],
          y: [0, 0.11]
        },
      },
    },
    zhouchu: { //周处
      擎苍寻猎: {
        name: '周处/擎苍寻猎/xingxiang',
        version: "4.0",
        json: true,
        x: [0, 1.5],
        y: [0, 0.5],
        scale: 0.8,
        angle: 0,
        //speed: 1,
        gongji: {
          name: '周处/擎苍寻猎/jineng01',
          version: "4.0",
          json: true,
          x: [0, 0.5],
          y: [0, 0.4],
          scale: 1.1,
          action: 'play',
        },
        beijing: {
          name: '周处/擎苍寻猎/beijing',
          version: "4.0",
          json: true,
          scale: 0.6,
          x: [0, 0.5],
          y: [0, 0.5]
        },
      },
    },
    zhouyi: { //周夷
      剑舞浏漓: {
        name: '周夷/剑舞浏漓/daiji2',
        x: [0, 0.4],
        y: [0, 0.5],
        scale: 0.7,
        angle: 0,
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
    zuoci: { //左慈
      役使鬼神: {
        name: '左慈/役使鬼神/XingXiang',
        x: [0, 0.98],
        y: [0, 0.03],
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

  var extend = { //共用
    //鲍三娘
    re_baosanniang: decadeUI.dynamicSkin.baosanniang,
    xin_baosanniang: decadeUI.dynamicSkin.baosanniang,

    //曹操
    re_caocao: decadeUI.dynamicSkin.caocao,
    sb_caocao: decadeUI.dynamicSkin.caocao,
    dc_caocao: decadeUI.dynamicSkin.caocao,
    jsrg_caocao: decadeUI.dynamicSkin.caocao,

    //大乔
    re_daqiao: decadeUI.dynamicSkin.daqiao,
    sb_daqiao: decadeUI.dynamicSkin.daqiao,

    //貂蝉
    re_diaochan: decadeUI.dynamicSkin.diaochan,
    sp_diaochan: decadeUI.dynamicSkin.diaochan,
    sb_diaochan: decadeUI.dynamicSkin.diaochan,

    //董白
    re_dongbai: decadeUI.dynamicSkin.dongbai,

    //董卓
    ol_dongzhuo: decadeUI.dynamicSkin.dongzhuo,
    re_dongzhuo: decadeUI.dynamicSkin.dongzhuo,
    sp_dongzhuo: decadeUI.dynamicSkin.dongzhuo,

    //杜预
    sp_duyu: decadeUI.dynamicSkin.duyu,
    pk_sp_duyu: decadeUI.dynamicSkin.duyu,

    //冯妤//冯芳女
    re_fengfangnv: decadeUI.dynamicSkin.fengfangnv,

    // 管宁
    shiguanning: decadeUI.dynamicSkin.guanning,

    //关索
    ol_guansuo: decadeUI.dynamicSkin.guansuo,

    //黄承彦
    dc_huangchengyan: decadeUI.dynamicSkin.huangchengyan,
    ns_huangchengyan: decadeUI.dynamicSkin.huangchengyan,

    //黄盖
    re_huanggai: decadeUI.dynamicSkin.huanggai,
    sb_huanggai: decadeUI.dynamicSkin.huanggai,

    //黄忠
    re_huangzhong: decadeUI.dynamicSkin.huangzhong,
    yj_huangzhong: decadeUI.dynamicSkin.huangzhong,
    sb_huangzhong: decadeUI.dynamicSkin.huangzhong,
    ol_huangzhong: decadeUI.dynamicSkin.huangzhong,

    //李儒
    re_liru: decadeUI.dynamicSkin.liru,
    dc_liru: decadeUI.dynamicSkin.liru,
    xin_liru: decadeUI.dynamicSkin.liru,

    //凌统
    re_lingtong: decadeUI.dynamicSkin.lingtong,
    xin_lingtong: decadeUI.dynamicSkin.lingtong,

    //刘备
    re_liubei: decadeUI.dynamicSkin.liubei,
    sb_liubei: decadeUI.dynamicSkin.liubei,
    dc_liubei: decadeUI.dynamicSkin.liubei,

    //留赞
    re_liuzan: decadeUI.dynamicSkin.liuzan,

    //马钧
    old_majun: decadeUI.dynamicSkin.majun,

    //祢衡
    re_miheng: decadeUI.dynamicSkin.miheng,

    //南华老仙
    re_nanhualaoxian: decadeUI.dynamicSkin.nanhualaoxian,

    //潘淑
    re_panshu: decadeUI.dynamicSkin.panshu,

    //蒲元
    ol_puyuan: decadeUI.dynamicSkin.puyuan,

    // 芮姬
    dc_ruiji: decadeUI.dynamicSkin.ruiji,

    //神吕蒙
    tw_shen_lvmeng: decadeUI.dynamicSkin.shen_lvmeng,

    // 神马超
    ps_shen_machao: decadeUI.dynamicSkin.shen_machao,

    // 孙寒华
    dc_sunhanhua: decadeUI.dynamicSkin.sunhanhua,

    //孙鲁育
    re_sunluyu: decadeUI.dynamicSkin.sunluyu,

    //孙权
    re_sunquan: decadeUI.dynamicSkin.sunquan,
    sb_sunquan: decadeUI.dynamicSkin.sunquan,
    dc_sunquan: decadeUI.dynamicSkin.sunquan,

    //孙茹
    dc_sunru: decadeUI.dynamicSkin.sunru,

    //孙翊
    re_sunyi: decadeUI.dynamicSkin.sunyi,

    // 滕芳兰
    dc_tengfanglan: decadeUI.dynamicSkin.tengfanglan,

    //王元姬
    jin_wangyuanji: decadeUI.dynamicSkin.wangyuanji,

    //文鸯
    db_wenyang: decadeUI.dynamicSkin.wenyang,

    // 吴苋
    clan_wuxian: decadeUI.dynamicSkin.wuxian,

    // 武诸葛亮
    oldwu_zhugeliang: decadeUI.dynamicSkin.wu_zhugeliang,

    //徐盛
    re_xusheng: decadeUI.dynamicSkin.xusheng,
    xin_xusheng: decadeUI.dynamicSkin.xusheng,

    // 许劭
    shenxushao: decadeUI.dynamicSkin.xushao,
    shixushao: decadeUI.dynamicSkin.xushao,
    spshenxushao: decadeUI.dynamicSkin.xushao,

    //许攸
    sp_xuyou: decadeUI.dynamicSkin.xuyou,
    xin_xuyou: decadeUI.dynamicSkin.xuyou,
    jsrg_xuyou: decadeUI.dynamicSkin.xuyou,

    //荀彧
    ol_xunyu: decadeUI.dynamicSkin.xunyu,
    re_xunyu: decadeUI.dynamicSkin.xunyu,

    //张春华
    re_zhangchunhua: decadeUI.dynamicSkin.zhangchunhua,

    //张琪瑛
    old_zhangqiying: decadeUI.dynamicSkin.zhangqiying,

    //赵襄
    decade_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,
    old_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,

    //钟会
    re_zhonghui: decadeUI.dynamicSkin.zhonghui,
    xin_zhonghui: decadeUI.dynamicSkin.zhonghui,
    clan_zhonghui: decadeUI.dynamicSkin.zhonghui,

    //钟琰
    clan_zhongyan: decadeUI.dynamicSkin.zhongyan,

    //周处
    jin_zhouchu: decadeUI.dynamicSkin.zhouchu,

    //左慈
    re_zuoci: decadeUI.dynamicSkin.zuoci,

  };
  decadeUI.get.extend(decadeUI.dynamicSkin, extend);

});
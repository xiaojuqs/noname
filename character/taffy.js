'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'taffy',
    connect:true,
		character:{
      // 定制武将喵
      shenxushao:['male','shen',4,['shenpingjian']],
      oldwu_zhugeliang:['male','shu','4/7',['olddcjincui','olddcqingshi','olddczhizhe']],
      shiguanning:['male','qun','3/7',['shidunshi']],
		},
    characterSort:{
      taffy:{
        taffy_old:["oldwu_zhugeliang"],
        taffy_origin:["shiguanning"],
        taffy_diy:["shenxushao"],
      }
    },
		skill:{
      // 定制武将喵
      //神许劭
      shenpingjian:{
				audio:4,
				trigger:{
					player:['damageBefore','phaseJieshuBefore','phaseBefore'],
				},
				initList:function(){
					var list=[];
					if(_status.connectMode) var list=get.charactersOL();
					else{
						var list=[];
						for(var i in lib.character){
							if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
					}
					game.countPlayer2(function(current){
						list.remove(current.name);
						list.remove(current.name1);
						list.remove(current.name2);
						if(current.storage.rehuashen&&current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
					});
					_status.characterlist=list;
				},
				frequent:true,
				content:function(){
					'step 0'
					if(!player.storage.shenpingjian) player.storage.shenpingjian=[];
					event._result={bool:true};
					'step 1'
					if(result.bool){
						if(!_status.characterlist){
							lib.skill.shenpingjian.initList();
						}
						var list=[];
						var skills=[];
						var map=[];
						_status.characterlist.randomSort();
						var name2=event.triggername;
            function hasCommonElement(array1, array2) {
              for (let i = 0; i < array1.length; i++) {
                if (array2.includes(array1[i])) {
                  return true;
                }
              }
              return false;
            }
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(name.indexOf('zuoci')!=-1||name.indexOf('xushao')!=-1||name.indexOf('shenxushao')!=-1) continue;
							var skills2=lib.character[name][3];
							for(var j=0;j<skills2.length;j++){
								if(player.storage.shenpingjian.contains(skills2[j])) continue;
								if(skills.contains(skills2[j])){
									list.add(name);
									if(!map[name]) map[name]=[];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									continue;
								}
								var list2=[skills2[j]];
								game.expandSkills(list2);
								for(var k=0;k<list2.length;k++){
									var info=lib.skill[list2[k]];
									if(!info||!info.trigger||!info.trigger.player) continue;
                  if(name2 === 'phaseBefore') {
                    name2 = ['phaseBefore','phaseBeginStart','phaseBegin','phaseZhunbeiBefore','phaseZhunbeiBegin','phaseZhunbei','phaseZhunbeiEnd','phaseZhunbeiAfter','phaseJudgeBefore','phaseJudgeBegin','phaseJudgeEnd','phaseJudgeAfter','phaseDrawBefore','phaseDrawBegin','phaseDrawBegin1','phaseDrawBegin2','phaseDrawEnd','phaseDrawAfter','phaseUseBefore','phaseUseBegin']
                  } else if (name2 === 'damageBefore') {
                    name2 = ['damageBefore','damageBegin','damageBegin2','damageBegin3','damageBegin4','damage','damageSource','damageEnd','damageAfter']
                  } else if (name2 === 'phaseJieshuBefore') {
                    name2 = ['phaseJieshuBefore','phaseJieshuBegin','phaseJieshu','phaseJieshuEnd','phaseJieshuAfter','phaseEnd','phaseAfter']
                  }
									// if(info.trigger.player==name2||Array.isArray(info.trigger.player)&&info.trigger.player.contains(name2)){
                  if(name2.includes(info.trigger.player)||Array.isArray(info.trigger.player)&&hasCommonElement(info.trigger.player,name2)){
										// if(info.init||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
										// if(info.filter){
										// 	try{
										// 		var bool=info.filter(trigger,player,name2);
										// 		if(!bool) continue;
										// 	}
										// 	catch(e){
										// 		continue;
										// 	}
										// }
										list.add(name);
										if(!map[name]) map[name]=[];
										map[name].push(skills2[j]);
										skills.add(skills2[j]);
										break;
									}
								}
							}
							if(list.length>2) break;
						}
						if(!skills.length){
							//player.draw();
							event.finish();
						}
						else{
							//skills.unshift('摸一张牌');
							player.chooseControl(skills).set('dialog',['请选择要获取的技能',[list,'character']]).set('ai',function(){return 0});
						}
					}
					else event.finish();
					'step 2'
					if(result.control=='摸一张牌'){
						player.draw();
						return;
					}
					player.storage.shenpingjian.add(result.control);
					player.addSkill(result.control,event.triggername=='damageBegin1'?'damageAfter':'phaseJieshu');
				},
				group:'shenpingjian_use',
				phaseUse_special:['xinfu_lingren'],
			},
			shenpingjian_use:{
				audio:'shenpingjian',
				enable:'phaseUse',
				usable:1,
				position:'he',
				content:function(){
					'step 0'
					if(!player.storage.shenpingjian) player.storage.shenpingjian=[];
					event._result={bool:true};
					'step 1'
					if(result.bool){
						var list=[];
						var skills=[];
						var map=[];
						if(!_status.characterlist){
							lib.skill.shenpingjian.initList();
						}
						_status.characterlist.randomSort();
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(name.indexOf('zuoci')!=-1||name.indexOf('xushao')!=-1||name.indexOf('shenxushao')!=-1) continue;
							var skills2=lib.character[name][3];
							for(var j=0;j<skills2.length;j++){
								if(player.storage.shenpingjian.contains(skills2[j])) continue;
								if(skills.contains(skills2[j])||lib.skill.shenpingjian.phaseUse_special.contains(skills2[j])){
									list.add(name);
									if(!map[name]) map[name]=[];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									continue;
								}
								var list2=[skills2[j]];
								game.expandSkills(list2);
								for(var k=0;k<list2.length;k++){
									var info=lib.skill[list2[k]];
									// if(!info||!info.enable||info.viewAs||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill||info.dutySkill) continue;
									// if(info.enable=='phaseUse'||Array.isArray(info.enable)&&info.enable.contains('phaseUse')){
									// 	if(info.init||info.onChooseToUse||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
										// if(info.filter){
										// 	try{
										// 		var bool=info.filter(event.getParent(2),player);
										// 		if(!bool) continue;
										// 	}
										// 	catch(e){
										// 		continue;
										// 	}
										// }
										list.add(name);
										if(!map[name]) map[name]=[];
										map[name].push(skills2[j]);
										skills.add(skills2[j]);
										break;
									// }
								}
							}
							if(list.length>2) break;
						}
						if(!skills.length){
							//player.draw();
							event.finish();
						}
						else{
							//skills.unshift('摸一张牌');
							player.chooseControl(skills).set('dialog',['请选择要获取的技能',[list,'character']]).set('ai',function(){return 0});
						}
					}
					else event.finish();
					'step 2'
					if(result.control=='摸一张牌'){
						player.draw();
						return;
					}
					player.storage.shenpingjian.add(result.control);
					player.addSkill(result.control,'phaseUseEnd');
					// player.addTempSkill('shenpingjian_temp','phaseUseEnd');
					// player.storage.shenpingjian_temp=result.control;
					//event.getParent(2).goto(0);
				},
				ai:{order:10,result:{player:1}},
			},
			// shenpingjian_temp:{
			// 	onremove:true,
			// 	trigger:{player:['useSkillBegin','useCard1']},
			// 	silent:true,
			// 	firstDo:true,
			// 	filter:function(event,player){
			// 		var info=lib.skill[event.skill];
			// 		if(!info) return false;
			// 		if(event.skill==player.storage.shenpingjian_temp) return true;
			// 		if(info.sourceSkill==player.storage.shenpingjian_temp||info.group==player.storage.shenpingjian_temp) return true;
			// 		if(Array.isArray(info.group)&&info.group.contains(player.storage.shenpingjian_temp)) return true;
			// 		return false;
			// 	},
			// 	content:function(){
			// 		player.removeSkill(player.storage.shenpingjian_temp);
			// 		player.removeSkill('shenpingjian_temp');
			// 	},
			// },
      //旧武诸葛
			olddcjincui:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return true;
				},
				forced:true,
				// group:'olddcjincui_advent',
				content:function(){
					'step 0'
					var num=0;
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						var card=ui.cardPile.childNodes[i];
						if(get.number(card)==7){
							num++;
							if(num>=player.maxHp) break;
						}
					}
					if(num<1) num=1;
					if(num>player.hp) player.recover(num-player.hp);
					else if(num<player.hp) player.loseHp(player.hp-num);
					'step 1'
					var num=player.hp;
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','尽瘁：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var target=(_status.event.getTrigger().name=='phaseZhunbei')?player:player.next;
						var att=get.sgn(get.attitude(player,target));
						var top=[];
						var judges=target.getCards('j');
						var stopped=false;
						if(player!=target||!target.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return (judge(b)-judge(a))*att;
								});
								if(judge(cards[0])*att<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return (get.value(b,player)-get.value(a,player))*att;
							});
							while(cards.length){
								if((get.value(cards[0],player)<=5)==(att>0)) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					'step 2'
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					if(event.triggername=='phaseZhunbeiBegin'&&top.length==0){
						player.addTempSkill('reguanxing_on');
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				ai:{
					guanxing:true,
					effect:{
						target:function(card,player,target){
							if(!get.tag(card,'damage')) return;
							var num=0,bool=false;
							for(var i=0;i<ui.cardPile.childNodes.length;i++){
								var card=ui.cardPile.childNodes[i];
								if(get.number(card)==7){
									num++;
									if(num>=target.hp){
										bool=true;
										break;
									}
								}
							}
							if(bool) return 0.2;
						}
					},
					threaten:0.6,
				},
				// subSkill:{
				// 	advent:{
				// 		audio:'olddcjincui',
				// 		trigger:{global:'phaseBefore',player:'enterGame'},
				// 		forced:true,
				// 		filter:function(event,player){
				// 			return (event.name!='phase'||game.phaseNumber==0)&&player.countCards('h')<7;
				// 		},
				// 		content:function(){
				// 			player.drawTo(7);
				// 		}
				// 	}
				// },
			},
			olddcqingshi:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					if(!player.isPhaseUsing()||player.hasSkill('olddcqingshi_blocker')) return false;
					// if(player.getStorage('olddcqingshi_clear').contains(event.card.name)) return false;
					if(player.hasCard(card=>{
						return get.name(card)==event.card.name;
					})) return true;
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var choices=[];
					var choiceList=[
						'令'+get.translation(trigger.card)+'对其中一个目标角色造成的伤害+1',
						'令任意名其他角色各摸一张牌',
						'摸'+get.cnNumber(player.hp)+'张牌，然后〖情势〗于本回合失效'
					];
					if(trigger.targets&&trigger.targets.length) choices.push('选项一');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'(无目标角色)</span>';
					if(game.countPlayer(i=>i!=player)) choices.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(player.hp>0) choices.push('选项三');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[1]+'(体力值为0)</span>';
					player.chooseControl(choices,'cancel2').set('choiceList',choiceList).set('prompt',get.prompt('olddcqingshi')).set('ai',()=>{
						return _status.event.choice;
					}).set('choice',(()=>{
						var choicesx=choices.slice();
						var cards=player.getCards('hs');
						for(var i=0;i<cards.length;i++){
							var name=get.name(cards[i]);
							for(var j=i+1;j<cards.length;j++){
								if(name==get.name(cards[j])&&get.position(cards[i])+get.position(cards[j])!='ss'&&player.hasValueTarget(cards[i])){
									choicesx.remove('选项三');
									break;
								}
							}
						}
						if(choicesx.contains('选项三')) return '选项三';
						if(choicesx.contains('选项二')){
							var cnt=game.countPlayer(current=>get.attitude(player,current)>0);
							if(cnt>2){
								return '选项二';
							}
							else if(!cnt) choicesx.remove('选项二');
						}
						if(get.tag(trigger.card,'damage')&&choicesx.contains('选项一')&&trigger.targets.some(current=>{
							return get.attitude(player,current)<0;
						})) return '选项一';
						return 0;
					})());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('olddcqingshi');
						game.log(player,'选择了','#y'+result.control);
						var index=['选项一','选项二','选项三'].indexOf(result.control)+1;
						player.storage.dcqingshi=index;
						var next=game.createEvent('olddcqingshi_after');
						next.player=player;
						next.card=trigger.card;
						next.setContent(lib.skill.olddcqingshi['content'+index]);
					}
				},
				content1:function(){
					'step 0'
					player.chooseTarget('令'+get.translation(card)+'对其中一个目标造成的伤害+1',true,(card,player,target)=>{
						return _status.event.targets.contains(target);
					}).set('ai',target=>{
						return 2-get.attitude(_status.event.player,target);
					}).set('targets',event.getParent().getTrigger().targets);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						player.addTempSkill('olddcqingshi_ex');
						if(!player.storage.dcqingshi_ex) player.storage.olddcqingshi_ex=[];
						player.storage.olddcqingshi_ex.push([target,card]);
					}
				},
				content2:function(){
					'step 0'
					player.chooseTarget('令任意名其他角色各摸一张牌',[1,Infinity],true,lib.filter.notMe).set('ai',target=>{
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.line(targets);
						game.asyncDraw(targets);
						game.delayex();
					}
				},
				content3:function(){
					'step 0'
					player.draw(player.hp);
					player.addTempSkill('olddcqingshi_blocker');
				},
				subSkill:{
					ex:{
						trigger:{source:'damageBegin1'},
						filter:function(event,player){
							return player.storage.olddcqingshi_ex&&player.storage.olddcqingshi_ex.some(info=>{
								return info[0]==event.player&&info[1]==event.card;
							});
						},
						forced:true,
						charlotte:true,
						popup:false,
						onremove:true,
						content:function(){
							trigger.num++;
							for(var i=0;i<player.storage.olddcqingshi_ex.length;i++){
								if(player.storage.olddcqingshi_ex[i][1]==trigger.card) player.storage.olddcqingshi_ex.splice(i--,1);
							}
						}
					},
					blocker:{charlotte:true}
				}
			},
			olddczhizhe:{
				audio:2,
				enable:'phaseUse',
				limited:true,
				filterCard:true,
				position:'h',
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					if(get.type(card)!='basic'&&get.type(card)!='trick') return 0;
					return get.value(card)-7.5;
				},
				content:function(){
					'step 0'
					var card=cards[0];
					player.awakenSkill('olddczhizhe');
					var cardx=game.createCard2(card.name,card.suit,card.number,card.nature);
					player.gain(cardx).gaintag.add('olddczhizhe');
					player.addSkill('olddczhizhe_effect');
				},
				ai:{
					order:15,
					result:{
						player:1
					}
				},
				subSkill:{
					effect:{
						trigger:{player:['useCardAfter','respondAfter']},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('olddczhizhe')){
										if(event.cards.some(card=>{
											return get.position(card,true)=='o'&&card.cardid==i;
										})) return true;
									}
								}
								return false;
							});
						},
						content:function(){
							'step 0'
							var cards=[];
							player.getHistory('lose',function(evt){
								if(evt.getParent()!=trigger) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('olddczhizhe')){
										var cardsx=trigger.cards.filter(card=>{
											return get.position(card,true)=='o'&&card.cardid==i;
										});
										if(cardsx.length) cards.addArray(cardsx);
									}
								}
							});
							if(cards.length){
								player.gain(cards,'gain2').gaintag.addArray(['olddczhizhe','olddczhizhe_clear']);
								player.addTempSkill('olddczhizhe_clear');
							}
						},
            mod:{
							ignoredHandcard:function(card,player){
								if(card.hasGaintag('dczhizhe')){
									return true;
								}
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&card.hasGaintag('dczhizhe')){
									return false;
								}
							},
						},
					},
					clear:{
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('olddczhizhe_clear');
						},
						mod:{
							cardEnabled2:function(card,player){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(cardx.hasGaintag('olddczhizhe_clear')) return false;
								}
							},
							cardRespondable:function(card,player){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(cardx.hasGaintag('olddczhizhe_clear')) return false;
								}
							},
							cardSavable:function(card,player){
								var cards=[];
								if(card.cards) cards.addArray(cards);
								if(get.itemtype(card)=='card') cards.push(card);
								for(var cardx of cards){
									if(cardx.hasGaintag('olddczhizhe_clear')) return false;
								}
							},
						}
					}
				}
			},
      //十周年管宁
			shidunshi:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				usable:1,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[['sha','shan','tao','jiu'],0];
				},
				hiddenCard:function(player,name){
					if(player.storage.shidunshi&&player.storage.shidunshi[0].contains(name)&&!player.getStat('skill').shidunshi) return true;
					return false;
				},
				marktext:'席',
				mark:true,
				intro:{
					markcount:function(storage){
						return storage[1];
					},
					content:function(storage,player){
						if(!storage) return;
						var str='<li>';
						if(!storage[0].length){
							str+='已无可用牌';
						}
						else{
							str+='剩余可用牌：';
							str+=get.translation(storage[0]);
						}
						str+='<br><li>“席”标记数量：';
						str+=(storage[1]);
						return str;
					},
				},
				filter:function(event,player){
					if(event.type=='wuxie') return false;
					var storage=player.storage.shidunshi;
					if(!storage||!storage[0].length) return false;
					for(var i of storage[0]){
						var card={name:i,isCard:true};
						if(event.filterCard(card,player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						var storage=player.storage.shidunshi;
						for(var i of storage[0]) list.push(['基本','',i]);
						return ui.create.dialog('遁世',[list,'vcard'],'hidden');
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						return evt.filterCard({name:button.link[2],isCard:true},player,evt);
					},
					check:function(button){
						var card={name:button.link[2]},player=_status.event.player;
						if(_status.event.getParent().type!='phase') return 1;
						if(card.name=='jiu') return 0;
						if(card.name=='sha'&&player.hasSkill('jiu')) return 0;
						return player.getUseValue(card,null,true);
					},
					backup:function(links,player){
						return {
							audio:'shidunshi',
							filterCard:function(){return false},
							popname:true,
							viewAs:{
								name:links[0][2],
								isCard:true,
							},
							selectCard:-1,
							precontent:function(){
								player.addTempSkill('shidunshi_damage');
								player.storage.shidunshi_damage=event.result.card.name;
							},
						}
					},
					prompt:function(links,player){
						return '选择【'+get.translation(links[0][2])+'】的目标';
					}
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						var storage=player.storage.shidunshi;
						if(!storage||!storage[0].length) return false;
						if(player.getStat('skill').shidunshi) return false;
						switch(tag){
							case 'respondSha':return (_status.event.type!='phase'||(player==game.me||player.isUnderControl()||player.isOnline()))&&storage[0].contains('sha');
							case 'respondShan':return storage[0].contains('shan');
							case 'save':
								if(arg==player&&storage[0].contains('jiu')) return true;
								return storage[0].contains('tao');
						}
					},
					order:2,
					result:{
						player:function(player){
							if(_status.event.type=='dying'){
								return get.attitude(player,_status.event.dying);
							}
							return 1;
						},
					},
				},
				initList:function(){
					// var list,skills=[];
          var skills=[];
					var banned=['xunyi'];
					if(get.mode()=='guozhan'){
						list=[];
						for(var i in lib.characterPack.mode_guozhan) list.push(i);
					}
					// else if(_status.connectMode) list=get.charactersOL();
					else{
						// list=[];
						// for(var i in lib.character){
						// 	if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
						// 	list.push(i);
						// }
            skills=['tianyi', 'nzry_yili', 'zhichi', 'yicong', 'new_yijue', 'rerende', 'rejizhi', 'renxin', 'zhiyu', 'juyi', 'relixia', 'dcchongyi', 'tongli', 'renzheng', 'cslilu', 'reyixiang', 'xinfu_qianxin', 'yishe']
					}
					// for(var i of list){
					// 	if(i.indexOf('gz_jun')==0) continue;
					// 	for(var j of lib.character[i][3]){
					// 		var skill=lib.skill[j];
					// 		if(!skill||skill.zhuSkill||banned.contains(j)) continue;
					// 		if(skill.ai&&(skill.ai.combo||skill.ai.notemp||skill.ai.neg)) continue;
					// 		var info=get.translation(j);
					// 		for(var ix=0;ix<info.length;ix++){
					// 			if(/仁|义|礼|智|信/.test(info[ix])==true){
					// 				skills.add(j);
					// 				break;
					// 			}
					// 		}
					// 	}
					// }
					_status.shidunshi_list=skills;
				},
				subSkill:{
					backup:{audio:'shidunshi'},
					damage:{
						audio:'shidunshi',
						trigger:{global:'damageBegin2'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.source==_status.currentPhase;
						},
						onremove:true,
						logTarget:'source',
						content:function(){
							'step 0'
							event.cardname=player.storage.shidunshi_damage;
							player.removeSkill('shidunshi_damage');
							event.target=trigger.source;
							event.videoId=lib.status.videoId++;
							var func=function(card,id,card2,card3){
								var list=[
									'防止即将对'+card3+'造成的伤害，并令'+card+'获得一个技能名中包含“仁/义/礼/智/信”的技能',
									'从〖遁世〗中删除【'+card2+'】并获得一枚“席”',
									'减1点体力上限，然后摸等同于“席”数的牌',
								];
								var choiceList=ui.create.dialog('遁世：请选择两项');
								choiceList.videoId=id;
								for(var i=0;i<list.length;i++){
									var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
									str+=list[i];
									str+='</div>';
									var next=choiceList.add(str);
									next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
									next.firstChild.link=i;
									for(var j in lib.element.button){
										next[j]=lib.element.button[j];
									}
									choiceList.buttons.add(next.firstChild);
								}
								return choiceList;
							};
							if(player.isOnline2()){
								player.send(func,get.translation(trigger.source),event.videoId,get.translation(event.cardname),get.translation(trigger.player));
							}
							event.dialog=func(get.translation(trigger.source),event.videoId,get.translation(event.cardname),get.translation(trigger.player));
							if(player!=game.me||_status.auto){
								event.dialog.style.display='none';
							}
							var next=player.chooseButton();
							next.set('dialog',event.videoId);
							next.set('forced',true);
							next.set('selectButton',2);
							next.set('ai',function(button){
								var player=_status.event.player;
								switch(button.link){
									case 0:
										if(get.attitude(player,_status.currentPhase)>0) return 3;
										return 0;
									case 1:
										return 1;
									case 2:
										var num=player.storage.shidunshi[1];
										for(var i of ui.selected.buttons){
											if(i.link==1) num++;
										}
										if(num>0&&player.isDamaged()) return 2;
										return 0;
								}
							});
							'step 1'
							if(player.isOnline2()){
								player.send('closeDialog',event.videoId);
							}
							event.dialog.close();
							event.links=result.links.sort();
							for(var i of event.links){
								game.log(player,'选择了','#g【遁世】','的','#y选项'+get.cnNumber(i+1,true));
							}
							if(event.links.contains(0)){
								trigger.cancel();
								if(!_status.shidunshi_list) lib.skill.shidunshi.initList();
								var list=_status.shidunshi_list.filter(function(i){
									return !target.hasSkill(i,null,null,false);
								}).randomGets(3);
								if(list.length==0) event.goto(3);
								else{
									event.videoId=lib.status.videoId++;
									var func=function(skills,id,target){
										var dialog=ui.create.dialog('forcebutton');
										dialog.videoId=id;
										dialog.add('令'+get.translation(target)+'获得一个技能');
										for(var i=0;i<skills.length;i++){
											dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+get.translation(skills[i])+'】</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
										}
										dialog.addText(' <br> ');
									}
									if(player.isOnline()) player.send(func,list,event.videoId,target);
									else if(player==game.me) func(list,event.videoId,target);
									player.chooseControl(list).set('ai',function(){
										var controls=_status.event.controls;
										if(controls.contains('cslilu')) return 'cslilu';
										return controls[0];
									});
								}
							}
							else event.goto(3);
							'step 2'
							game.broadcastAll('closeDialog',event.videoId);
							target.addSkillLog(result.control);
							'step 3'
							var storage=player.storage.shidunshi;
							if(event.links.contains(1)){
								storage[0].remove(event.cardname);
								storage[1]++;
								player.markSkill('shidunshi');
							}
							if(event.links.contains(2)){
								player.loseMaxHp();
								if(storage[1]>0) player.draw(storage[1]);
							}
						},
					},
				},
			},
		},
    card:{
		},
    characterIntro:{
      // 定制武将喵
      shenxushao:'许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
      shiguanning:'管宁（158年—241年），字幼安。北海郡朱虚县（今山东省安丘、临朐东南）人。汉末三国时期著名隐士。管宁与华歆、邴原并称为“一龙”。汉末天下大乱时，与邴原及王烈等人避于辽。在当地只谈经典而不问世事，做讲解《诗经》《书经》，谈祭礼、整治威仪、陈明礼让等教化工作，人们都很乐于接受他的教导。直到魏文帝黄初四年（公元223年）才返乡，辽东太守公孙恭亲自送别。此后曹魏几代帝王数次征召管宁，他都没有应命。正始二年（公元241年），管宁逝世，年八十四。著有《氏姓论》。',
    },
    characterTitle:{
      shenxushao:'永雏塔菲限定武将',
      oldwu_zhugeliang:'永雏塔菲限定武将',
      shiguanning:'永雏塔菲限定武将',
		},
    perfectPair:{},
		characterFilter:{
		},
		dynamicTranslate:{
			shidunshi:function(player){
				var info=player.storage.dunshi;
				var str='每回合限一次。你可以视为使用或打出一张';
				var list=['sha','shan','tao','jiu'];
				for(var i of list){
					var strx='【'+get.translation(i)+'】';
					if(!info||!info[0].contains(i)) strx=('<span style="text-decoration:line-through;">'+strx+'</span>');
					str+=strx;
					if(i!='jiu') str+='/';
				}
				str+='，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“席”。⒊减1点体力上限并摸X张牌（X为你的“席”数）。';
				return str;
			},
		},
		perfectPair:{},
    characterReplace:{
    },
		translate:{
      // 定制武将喵
      shenxushao:'神许劭',
      shenpingjian:'评荐',
			shenpingjian_info:'①回合开始前/结束阶段开始前/当你即将受到伤害前，你可以令系统随机从剩余武将牌堆中检索出三张拥有发动时机为回合开始前至出牌阶段开始时/结束阶段开始前至结束阶段结束后/当你即将受到伤害前至当你受到的伤害结算后的技能的武将牌。然后你可以选择获取其中一个技能。②出牌阶段限一次，你可以令系统随机从剩余武将牌堆中检索出三张武将牌。然后你可以选择获取其中一个技能',
      shenpingjian_append:'<span style="font-family: yuanli">我以月旦为料饵，钓尽世间功与名！</span>',
			shenpingjian_use:'评荐',
      oldwu_zhugeliang:'旧武诸葛亮',
      oldwu_zhugeliang_ab:'武诸葛亮',
			olddcjincui:'尽瘁',
			olddcjincui_info:'锁定技。准备阶段，你将体力值回复或失去至等同于牌堆中点数为7的牌数（你的体力值最低因此调整至1）。然后你观看牌堆顶X张牌，将这些牌以任意顺序置于牌堆顶或牌堆底（X为你的体力值）。',
			olddcqingshi:'情势',
			olddcqingshi_info:'当你于出牌阶段使用牌时，若你手牌中有同名牌，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸X张牌，然后〖情势〗于本回合无效（X为你的体力值）。',
			olddczhizhe:'智哲',
			olddczhizhe_clear:'invisible',
			olddczhizhe_info:'限定技。出牌阶段，你可以选择一张手牌并复制之。该复制牌不计入你的手牌上限，且当你使用或打出此牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。',
      shiguanning:'十周年管宁',
      shiguanning_ab:'管宁',
			shidunshi:'遁世',
			shidunshi_info:'每回合限一次。你可以视为使用或打出一张【杀】/【闪】/【桃】/【酒】，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“席”。⒊减1点体力上限并摸X张牌（X为你的“席”数）。',

      taffy_old:"圣经·塔约",
      taffy_origin:"江山如故·塔",
      taffy_diy:"神·塔",
		},
	};
});

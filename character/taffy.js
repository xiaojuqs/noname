'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {

	// 一些prefix样式补充
	lib.namePrefix.set('旧武', {
		/**
		 * @returns {string}
		 */
		getSpan: () => `${get.prefixSpan('旧')}${get.prefixSpan('武')}`
	});
	lib.namePrefix.set('旧TW', {
		/**
		 * @returns {string}
		 */
		getSpan: () => `${get.prefixSpan('旧')}${get.prefixSpan('TW')}`
	});
	lib.namePrefix.set('手杀神', {
		/**
		 * @returns {string}
		 */
		getSpan: () => `${get.prefixSpan('手杀')}${get.prefixSpan('神')}`
	});
	lib.namePrefix.set('欢杀', {
		showName: '欢',
	});
	lib.namePrefix.set('欢杀神', {
		/**
		 * @returns {string}
		 */
		getSpan: () => `${get.prefixSpan('欢杀')}${get.prefixSpan('神')}`
	});
	lib.namePrefix.set('面杀', {
		showName: '面',
	});
	lib.namePrefix.set('面杀起', {
		/**
		 * @returns {string}
		 */
		getSpan: () => `${get.prefixSpan('面杀')}${get.prefixSpan('起')}`
	});
	lib.namePrefix.set('旧OL', {
		/**
		 * @returns {string}
		 */
		getSpan: () => `${get.prefixSpan('旧')}${get.prefixSpan('OL')}`
	});

	return {
		name: 'taffy',
		connect: true,
		character: {
			shenxushao: ['male', 'shen', 1, ['shenpingjian'],
				['qun']
			],
			oldwu_zhugeliang: ['male', 'shu', '4/7', ['olddcjincui', 'olddcqingshi', 'olddczhizhe']],
			shiguanning: ['male', 'qun', '3/7', ['shidunshi']],
			acetaffy: ['female', 'shen', 3, ['taffybaomi', 'taffyfeizhu', 'taffyzuoai', 'taffychusheng'],
				['qun']
			],
			minitaffy: ['female', 'qun', 1, ['taffytangshi', 'taffyzisha']],
			shixushao: ['male', 'qun', 4, ['shipingjian']],
			spshenxushao: ['male', 'shen', 3, ['spshenpingjian'],
				['qun']
			],
			oldtw_niufudongxie: ['double', 'qun', 4, ['oldtwjuntun', 'oldtwxiongxi', 'oldtwxiafeng']],
			oldtw_zhangmancheng: ['male', 'qun', 4, ['oldtwfengji', 'oldtwyiju', 'oldtwbudao']],
			shenyuji: ['male', 'shen', 3, ['shenguhuo']],
			junko: ['female', 'shen', 3, ['junkochunhua', 'junkokuangqi', 'junkowuming']],
			huiwansunquan: ["male", "wu", 4, ["rezhiheng", "rejiuyuan", "huiwan"]],
			huiwansunquanplus: ["male", "wu", 4, ["rezhiheng", "rejiuyuan", "huiwanplus"]],
			taffyboss_lvbu1: ['male', 'shen', 8, ['mashu', 'wushuang', 'taffyboss_baonu', 'taffyboss_jingjia', 'boss_aozhan'],
				['qun'], 'wei'
			],
			shoushen_caocao: ['male', 'shen', 3, ['guixin', 'feiying'],
				['wei']
			],
			babyshen_simayi: ["male", "shen", 3, ["babyrenjie", "babyjilue", "babylianpo"],
				[]
			],
			shenduyu: ['male', 'shen', 5, ['shenmiewu']],
			shenchengui: ['male', 'shen', 3, ['shendcyingtu', 'shendccongshi']],
			taffyjsrg_nanhualaoxian: ['male', 'qun', 3, ['taffyjsrgshoushu', 'jsrgxundao', 'jsrglinghua']],
			oldruiji: ['female', 'wu', 3, ['oldqiaoli', 'oldqingliang']],
			oldtengfanglan: ['female', 'wu', 3, ['oldluochong', 'oldaichen']],
			ruijier: ['female', 'shen', '', [],
				['unseen']
			],
		},
		characterSort: {
			taffy: {
				taffy_old: ['oldwu_zhugeliang', 'oldtw_niufudongxie', 'oldtw_zhangmancheng', 'oldruiji', 'oldtengfanglan'],
				taffy_off: ['taffyjsrg_nanhualaoxian'],
				taffy_ol: ['taffyboss_lvbu1'],
				taffy_shou: ['shoushen_caocao'],
				taffy_shi: ['shiguanning', 'shixushao'],
				taffy_baby: ['babyshen_simayi'],
				taffy_diy: ["shenxushao", 'spshenxushao', 'shenyuji', 'shenduyu', 'shenchengui'],
				taffy_tang: ['acetaffy', 'minitaffy'],
				taffy_gzz: ['junko'],
				taffy_wu: ['huiwansunquan', 'huiwansunquanplus'],
			}
		},
		skill: {
			// 评世雕龙
			shenpingjian: {
				audio: 4,
				trigger: {
					player: ['damageBefore', 'phaseJieshuBefore', 'phaseBefore'],
				},
				initList: function () {
					var list = [];
					if (_status.connectMode) var list = get.charactersOL();
					else {
						var list = [];
						for (var i in lib.character) {
							if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i)) list.push(i);
						}
					}
					game.countPlayer2(function (current) {
						list.remove(current.name);
						list.remove(current.name1);
						list.remove(current.name2);
					});
					_status.characterlist = list;
				},
				frequent: true,
				content: function () {
					'step 0'
					var skills = player.getSkills(null, false, false).filter(skill => {
						var info = get.info(skill);
						if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
						return true;
					});
					var next = player.chooseButton(true, [
						'评荐：请选择失去任意个技能',
						[skills.map(i => [
							i,
							'<div class="popup text" style="width:calc(100% - 25px);display:inline-block"><div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div></div>',
						]), 'textbutton'],
					]);
					next.set('selectButton', [0, skills.length]);
					next.set('ai', function (button) {
						if (button.link == 'shenpingjian') return -1;
						return Math.random();
					});
					'step 1'
					if (result.bool) {
						let rSkillInfo;
						for (let i = 0; i < result.links.length; i++) {
							rSkillInfo = get.info(result.links[i]);
							if (rSkillInfo.limited || rSkillInfo.juexingji || rSkillInfo.dutySkill) {
								player.restoreSkill(result.links[i]);
							}
							player.removeSkill(result.links[i]);
							game.log(player, '失去了技能', '#g【' + get.translation(result.links[i]) + '】');
						}
						if (!_status.characterlist) {
							lib.skill.shenpingjian.initList();
						}
						var list = [];
						var skills = [];
						var map = [];
						var evt = event.getParent(2);
						var allList = _status.characterlist.slice(0);
						game.countPlayer(function (current) {
							if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
							if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
							if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
						});
						allList.randomSort();
						var name2 = event.triggername;

						function hasCommonElement(array1, array2) {
							for (let i = 0; i < array1.length; i++) {
								if (array2.includes(array1[i])) {
									return true;
								}
							}
							return false;
						}
						for (var i = 0; i < allList.length; i++) {
							var name = allList[i];
							if (name.indexOf('xushao') != -1 || name.indexOf('shenxushao') != -1 || name.indexOf('shixushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
							var skills2 = lib.character[name][3];
							for (var j = 0; j < skills2.length; j++) {
								var playerSkills = player.getSkills(null, false, false).filter(skill => {
									var info = get.info(skill);
									if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
									return true;
								});
								if (playerSkills.contains(skills2[j])) continue;
								if (skills.contains(skills2[j])) {
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									continue;
								}
								var list2 = [skills2[j]];
								game.expandSkills(list2);
								for (var k = 0; k < list2.length; k++) {
									var info = lib.skill[list2[k]];
									if (!info || !info.trigger) continue;
									if (name2 === 'phaseBefore') {
										name2 = ['phaseBefore', 'phaseBeginStart', 'phaseBegin', 'phaseZhunbeiBefore', 'phaseZhunbeiBegin', 'phaseZhunbei', 'phaseZhunbeiEnd', 'phaseZhunbeiAfter', 'phaseJudgeBefore', 'phaseJudgeBegin', 'phaseJudgeEnd', 'phaseJudgeAfter', 'phaseDrawBefore', 'phaseDrawBegin', 'phaseDrawBegin1', 'phaseDrawBegin2', 'phaseDrawEnd', 'phaseDrawAfter', 'phaseUseBefore', 'phaseUseBegin']
									} else if (name2 === 'damageBefore') {
										name2 = ['damageBefore', 'damageBegin', 'damageBegin2', 'damageBegin3', 'damageBegin4', 'damage', 'damageSource', 'damageEnd', 'damageAfter']
									} else if (name2 === 'phaseJieshuBefore') {
										name2 = ['phaseJieshuBefore', 'phaseJieshuBegin', 'phaseJieshu', 'phaseJieshuEnd', 'phaseJieshuAfter', 'phaseEnd', 'phaseAfter']
									}
									if (info.trigger.player) {
										if (name2.includes(info.trigger.player) || Array.isArray(info.trigger.player) && hasCommonElement(info.trigger.player, name2)) {
											if (info.filter) {
												try {
													var bool = info.filter(evt, player);
													if (!bool) continue;
												} catch (e) {
													continue;
												}
											}
											list.add(name);
											if (!map[name]) map[name] = [];
											map[name].push(skills2[j]);
											skills.add(skills2[j]);
											break;
										}
									}
									if (info.trigger.global) {
										if (name2.includes(info.trigger.global) && (!info.trigger.player || info.trigger.player !== 'enterGame') || Array.isArray(info.trigger.global) && hasCommonElement(info.trigger.global, name2)) {
											if (info.filter) {
												try {
													var bool = info.filter(evt, player);
													if (!bool) continue;
												} catch (e) {
													continue;
												}
											}
											list.add(name);
											if (!map[name]) map[name] = [];
											map[name].push(skills2[j]);
											skills.add(skills2[j]);
											break;
										}
									}
								}
							}
							if (list.length >= 2 * result.links.length + 3) break;
						}
						if (skills.length) {
							if (player.isUnderControl()) {
								game.swapPlayerAuto(player);
							}
							var switchToAuto = function () {
								_status.imchoosing = false;
								event._result = {
									bool: true,
									skills: skills.randomGets(result.links.length + 1),
								};
								if (event.dialog) event.dialog.close();
								if (event.control) event.control.close();
							};
							var chooseButton = function (list, skills, result, player) {
								var event = _status.event;
								if (!event._result) event._result = {};
								event._result.skills = [];
								var rSkill = event._result.skills;
								var dialog = ui.create.dialog('评荐：请选择获得至多' + get.cnNumber(result.links.length + 1) + '个技能', [list, 'character'], 'hidden');
								event.dialog = dialog;
								var table = document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '100%';
								table.style.position = 'relative';
								for (var i = 0; i < skills.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.link = skills[i];
									table.appendChild(td);
									td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
										if (_status.dragged) return;
										if (_status.justdragged) return;
										_status.tempNoButton = true;
										setTimeout(function () {
											_status.tempNoButton = false;
										}, 500);
										var link = this.link;
										if (!this.classList.contains('bluebg')) {
											if (rSkill.length >= result.links.length + 1) return;
											rSkill.add(link);
											this.classList.add('bluebg');
										} else {
											this.classList.remove('bluebg');
											rSkill.remove(link);
										}
									});
								}
								dialog.content.appendChild(table);
								dialog.add('　　');
								dialog.open();
								event.switchToAuto = function () {
									event.dialog.close();
									event.control.close();
									game.resume();
									_status.imchoosing = false;
								};
								event.control = ui.create.control('ok', function (link) {
									event.dialog.close();
									event.control.close();
									game.resume();
									_status.imchoosing = false;
								});
								for (var i = 0; i < event.dialog.buttons.length; i++) {
									event.dialog.buttons[i].classList.add('selectable');
								}
								game.pause();
								game.countChoose();
							};
							if (event.isMine()) {
								chooseButton(list, skills, result, player);
							} else if (event.isOnline()) {
								event.player.send(chooseButton, list, skills, result, player);
								event.player.wait();
								game.pause();
							} else {
								switchToAuto();
							}
						} else {
							event.finish();
						}
					}
					'step 2'
					var map = event.result || result;
					if (map && map.skills && map.skills.length) {
						for (var i of map.skills) {
							player.addSkill(i);
							game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
						}
					}
				},
				group: 'shenpingjian_use',
				phaseUse_special: [],
				ai: {
					threaten: 100
				},
			},
			shenpingjian_use: {
				audio: 'shenpingjian',
				enable: 'phaseUse',
				usable: 1,
				prompt: () => lib.translate.shenpingjian_info,
				content: function () {
					'step 0'
					player.chooseBool('评荐：是否选择失去Y个技能并令系统随机检索出2Y+3张武将牌，然后你选择其中至多Y张武将牌并获得其所有技能？（Y至少为1）').ai = () => {
						var skills = player.getSkills(null, false, false).filter(skill => {
							var info = get.info(skill);
							if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
							return true;
						});
						if (skills.length > 1) {
							return true;
						} else {
							return false;
						}
					};
					'step 1'
					if (result.bool) {
						var skills = player.getSkills(null, false, false).filter(skill => {
							var info = get.info(skill);
							if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
							return true;
						});
						var next = player.chooseButton(true, [
							'评荐：请选择失去至少一个技能',
							[skills.map(i => [
								i,
								'<div class="popup text" style="width:calc(100% - 25px);display:inline-block"><div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div></div>',
							]), 'textbutton'],
						]);
						next.set('selectButton', [1, skills.length]);
						next.set('ai', function (button) {
							if (button.link == 'shenpingjian') return -1;
							return Math.random();
						});
					}
					'step 2'
					if (result.bool) {
						let rSkillInfo;
						for (let i = 0; i < result.links.length; i++) {
							rSkillInfo = get.info(result.links[i]);
							if (rSkillInfo.limited || rSkillInfo.juexingji || rSkillInfo.dutySkill) {
								player.restoreSkill(result.links[i]);
							}
							player.removeSkill(result.links[i]);
							game.log(player, '失去了技能', '#g【' + get.translation(result.links[i]) + '】');
						}
						if (!_status.characterlist) {
							lib.skill.shenpingjian.initList();
						}
						var list = [];
						var allList = _status.characterlist.slice(0);
						game.countPlayer(function (current) {
							if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
							if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
							if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
						});
						allList.randomSort();
						for (var i = 0; i < allList.length; i++) {
							var name = allList[i];
							if (name.indexOf('xushao') != -1 || name.indexOf('shenxushao') != -1 || name.indexOf('shixushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
							list.add(name);
							if (list.length >= 2 * result.links.length + 3) break;
						}
						if (!list.length) event.finish();
						else {
							player.chooseButton([
								'评荐：请选择至多' + get.cnNumber(result.links.length) + '张武将牌并获得其所有技能',
								[list, 'character'],
							], [0, result.links.length], true);
						}
					}
					'step 3'
					if (result.bool) {
						if (result.links.length !== 0) {
							for (let i = 0; i < result.links.length; i++) {
								var skills = lib.character[result.links[i]][3];
								for (let j = 0; j < skills.length; j++) {
									player.addSkill(skills[j]);
									game.log(player, '获得了技能', '#g【' + get.translation(skills[j]) + '】');
								}
							}
						}
						event.finish();
					}
					'step 4'
					var list = [];
					var skills = [];
					var map = [];
					if (!_status.characterlist) {
						lib.skill.shenpingjian.initList();
					}
					var allList = _status.characterlist.slice(0);
					game.countPlayer(function (current) {
						if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
						if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
						if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
					});
					allList.randomSort();
					for (var i = 0; i < allList.length; i++) {
						var name = allList[i];
						if (name.indexOf('xushao') != -1 || name.indexOf('shenxushao') != -1 || name.indexOf('shixushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
						var skills2 = lib.character[name][3];
						for (var j = 0; j < skills2.length; j++) {
							var playerSkills = player.getSkills(null, false, false).filter(skill => {
								var info = get.info(skill);
								if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
								return true;
							});
							if (playerSkills.contains(skills2[j])) continue;
							if (skills.contains(skills2[j]) || lib.skill.shenpingjian.phaseUse_special.contains(skills2[j])) {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								continue;
							}
							var list2 = [skills2[j]];
							game.expandSkills(list2);
							for (var k = 0; k < list2.length; k++) {
								var info = lib.skill[list2[k]];
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								break;
							}
						}
						if (list.length > 2) break;
					}
					if (skills.length) player.chooseControl(skills).set('dialog', ['评荐：请选择获得一个技能', [list, 'character']]);
					else event.finish();
					'step 5'
					player.addSkill(result.control);
					game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
				},
				ai: {
					order: 12,
					result: {
						player: 1
					}
				},
			},
			//旧武诸葛
			olddcjincui: {
				audio: 'dcjincui',
				trigger: {
					player: 'phaseZhunbeiBegin'
				},
				filter: function (event, player) {
					return true;
				},
				forced: true,
				group: 'olddcjincui_advent',
				content: function () {
					'step 0'
					var num = 0;
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						var card = ui.cardPile.childNodes[i];
						if (get.number(card) == 7) {
							num++;
							if (num >= player.maxHp) break;
						}
					}
					if (num < 1) num = 1;
					if (num > player.hp) player.recover(num - player.hp);
					else if (num < player.hp) player.loseHp(player.hp - num);
					'step 1'
					var num = player.hp;
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set('list', [
						['牌堆顶', cards],
						['牌堆底'],
					]);
					next.set('prompt', '尽瘁：点击将牌移动到牌堆顶或牌堆底');
					next.processAI = function (list) {
						var cards = list[0][1],
							player = _status.event.player;
						var target = (_status.event.getTrigger().name == 'phaseZhunbei') ? player : player.next;
						var att = get.sgn(get.attitude(player, target));
						var top = [];
						var judges = target.getCards('j');
						var stopped = false;
						if (player != target || !target.hasWuxie()) {
							for (var i = 0; i < judges.length; i++) {
								var judge = get.judge(judges[i]);
								cards.sort(function (a, b) {
									return (judge(b) - judge(a)) * att;
								});
								if (judge(cards[0]) * att < 0) {
									stopped = true;
									break;
								} else {
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if (!stopped) {
							cards.sort(function (a, b) {
								return (get.value(b, player) - get.value(a, player)) * att;
							});
							while (cards.length) {
								if ((get.value(cards[0], player) <= 5) == (att > 0)) break;
								top.unshift(cards.shift());
							}
						}
						bottom = cards;
						return [top, bottom];
					}
					'step 2'
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					if (event.triggername == 'phaseZhunbeiBegin' && top.length == 0) {
						player.addTempSkill('reguanxing_on');
					}
					player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
					game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				ai: {
					guanxing: true,
					effect: {
						target: function (card, player, target) {
							if (!get.tag(card, 'damage')) return;
							var num = 0,
								bool = false;
							for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
								var card = ui.cardPile.childNodes[i];
								if (get.number(card) == 7) {
									num++;
									if (num >= target.hp) {
										bool = true;
										break;
									}
								}
							}
							if (bool) return 0.2;
						}
					},
					threaten: 0.6,
				},
				subSkill: {
					advent: {
						audio: 'olddcjincui',
						trigger: {
							global: 'phaseBefore',
							player: 'enterGame'
						},
						forced: true,
						filter: function (event, player) {
							return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') < 7;
						},
						content: function () {
							player.drawTo(7);
						}
					}
				},
			},
			olddcqingshi: {
				audio: 'dcqingshi',
				trigger: {
					player: 'useCard'
				},
				filter: function (event, player) {
					if (!player.isPhaseUsing() || player.hasSkill('olddcqingshi_blocker')) return false;
					// if(player.getStorage('olddcqingshi_clear').contains(event.card.name)) return false;
					if (player.hasCard(card => {
							return get.name(card) == event.card.name;
						})) return true;
					return false;
				},
				direct: true,
				content: function () {
					'step 0'
					var choices = [];
					var choiceList = [
						'令' + get.translation(trigger.card) + '对其中一个目标角色造成的伤害+1',
						'令任意名其他角色各摸一张牌',
						'摸' + get.cnNumber(player.hp) + '张牌，然后〖情势〗于本回合失效'
					];
					if (trigger.targets && trigger.targets.length) choices.push('选项一');
					else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '(无目标角色)</span>';
					if (game.countPlayer(i => i != player)) choices.push('选项二');
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
					if (player.hp > 0) choices.push('选项三');
					else choiceList[2] = '<span style="opacity:0.5">' + choiceList[1] + '(体力值为0)</span>';
					player.chooseControl(choices, 'cancel2').set('choiceList', choiceList).set('prompt', get.prompt('olddcqingshi')).set('ai', () => {
						return _status.event.choice;
					}).set('choice', (() => {
						var choicesx = choices.slice();
						var cards = player.getCards('hs');
						for (var i = 0; i < cards.length; i++) {
							var name = get.name(cards[i]);
							for (var j = i + 1; j < cards.length; j++) {
								if (name == get.name(cards[j]) && get.position(cards[i]) + get.position(cards[j]) != 'ss' && player.hasValueTarget(cards[i])) {
									choicesx.remove('选项三');
									break;
								}
							}
						}
						if (choicesx.contains('选项三')) return '选项三';
						if (choicesx.contains('选项二')) {
							var cnt = game.countPlayer(current => get.attitude(player, current) > 0);
							if (cnt > 2) {
								return '选项二';
							} else if (!cnt) choicesx.remove('选项二');
						}
						if (get.tag(trigger.card, 'damage') && choicesx.contains('选项一') && trigger.targets.some(current => {
								return get.attitude(player, current) < 0;
							})) return '选项一';
						return 0;
					})());
					'step 1'
					if (result.control != 'cancel2') {
						player.logSkill('olddcqingshi');
						game.log(player, '选择了', '#y' + result.control);
						var index = ['选项一', '选项二', '选项三'].indexOf(result.control) + 1;
						player.storage.olddcqingshi = index;
						var next = game.createEvent('olddcqingshi_after');
						next.player = player;
						next.card = trigger.card;
						next.setContent(lib.skill.olddcqingshi['content' + index]);
					}
				},
				content1: function () {
					'step 0'
					player.chooseTarget('令' + get.translation(card) + '对其中一个目标造成的伤害+1', true, (card, player, target) => {
						return _status.event.targets.contains(target);
					}).set('ai', target => {
						return 2 - get.attitude(_status.event.player, target);
					}).set('targets', event.getParent().getTrigger().targets);
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						player.addTempSkill('olddcqingshi_ex');
						if (!player.storage.olddcqingshi_ex) player.storage.olddcqingshi_ex = [];
						player.storage.olddcqingshi_ex.push([target, card]);
					}
				},
				content2: function () {
					'step 0'
					player.chooseTarget('令任意名其他角色各摸一张牌', [1, Infinity], true, lib.filter.notMe).set('ai', target => {
						return get.attitude(_status.event.player, target);
					});
					'step 1'
					if (result.bool) {
						var targets = result.targets;
						targets.sortBySeat();
						player.line(targets);
						game.asyncDraw(targets);
						game.delayex();
					}
				},
				content3: function () {
					'step 0'
					player.draw(player.hp);
					player.addTempSkill('olddcqingshi_blocker');
				},
				subSkill: {
					ex: {
						trigger: {
							source: 'damageBegin1'
						},
						filter: function (event, player) {
							return player.storage.olddcqingshi_ex && player.storage.olddcqingshi_ex.some(info => {
								return info[0] == event.player && info[1] == event.card;
							});
						},
						forced: true,
						charlotte: true,
						popup: false,
						onremove: true,
						content: function () {
							trigger.num++;
							for (var i = 0; i < player.storage.olddcqingshi_ex.length; i++) {
								if (player.storage.olddcqingshi_ex[i][1] == trigger.card) player.storage.olddcqingshi_ex.splice(i--, 1);
							}
						}
					},
					blocker: {
						charlotte: true
					}
				}
			},
			olddczhizhe: {
				audio: 'dczhizhe',
				enable: 'phaseUse',
				limited: true,
				filterCard: true,
				position: 'h',
				discard: false,
				lose: false,
				delay: false,
				check: function (card) {
					if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
					return get.value(card) - 7.5;
				},
				content: function () {
					'step 0'
					var card = cards[0];
					player.awakenSkill('olddczhizhe');
					var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
					player.gain(cardx).gaintag.add('olddczhizhe');
					player.addSkill('olddczhizhe_effect');
				},
				ai: {
					order: 15,
					result: {
						player: 1
					}
				},
				subSkill: {
					effect: {
						trigger: {
							player: ['useCardAfter', 'respondAfter']
						},
						charlotte: true,
						forced: true,
						filter: function (event, player) {
							return player.hasHistory('lose', function (evt) {
								if (evt.getParent() != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].contains('olddczhizhe')) {
										if (event.cards.some(card => {
												return get.position(card, true) == 'o' && card.cardid == i;
											})) return true;
									}
								}
								return false;
							});
						},
						content: function () {
							'step 0'
							var cards = [];
							player.getHistory('lose', function (evt) {
								if (evt.getParent() != trigger) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].contains('olddczhizhe')) {
										var cardsx = trigger.cards.filter(card => {
											return get.position(card, true) == 'o' && card.cardid == i;
										});
										if (cardsx.length) cards.addArray(cardsx);
									}
								}
							});
							if (cards.length) {
								player.gain(cards, 'gain2').gaintag.addArray(['olddczhizhe', 'olddczhizhe_clear']);
								player.addTempSkill('olddczhizhe_clear');
							}
						},
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag('olddczhizhe')) {
									return true;
								}
							},
							cardDiscardable: function (card, player, name) {
								if (name == 'phaseDiscard' && card.hasGaintag('olddczhizhe')) {
									return false;
								}
							},
						},
					},
					clear: {
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag('olddczhizhe_clear');
						},
						mod: {
							cardEnabled2: function (card, player) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == 'card') cards.push(card);
								for (var cardx of cards) {
									if (cardx.hasGaintag('olddczhizhe_clear')) return false;
								}
							},
							cardRespondable: function (card, player) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == 'card') cards.push(card);
								for (var cardx of cards) {
									if (cardx.hasGaintag('olddczhizhe_clear')) return false;
								}
							},
							cardSavable: function (card, player) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == 'card') cards.push(card);
								for (var cardx of cards) {
									if (cardx.hasGaintag('olddczhizhe_clear')) return false;
								}
							},
						}
					}
				}
			},
			// 新杀管宁
			shidunshi: {
				audio: 2,
				enable: ['chooseToUse', 'chooseToRespond'],
				usable: 1,
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [
						['sha', 'shan', 'tao', 'jiu'], 0
					];
				},
				hiddenCard: function (player, name) {
					if (player.storage.shidunshi && player.storage.shidunshi[0].contains(name) && !player.getStat('skill').shidunshi) return true;
					return false;
				},
				marktext: '席',
				mark: true,
				intro: {
					markcount: function (storage) {
						return storage[1];
					},
					content: function (storage, player) {
						if (!storage) return;
						var str = '<li>';
						if (!storage[0].length) {
							str += '已无可用牌';
						} else {
							str += '剩余可用牌：';
							str += get.translation(storage[0]);
						}
						str += '<br><li>“席”标记数量：';
						str += (storage[1]);
						return str;
					},
				},
				filter: function (event, player) {
					if (event.type == 'wuxie') return false;
					var storage = player.storage.shidunshi;
					if (!storage || !storage[0].length) return false;
					for (var i of storage[0]) {
						var card = {
							name: i,
							isCard: true
						};
						if (event.filterCard(card, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						var storage = player.storage.shidunshi;
						for (var i of storage[0]) list.push(['基本', '', i]);
						return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
					},
					filter: function (button, player) {
						var evt = _status.event.getParent();
						return evt.filterCard({
							name: button.link[2],
							isCard: true
						}, player, evt);
					},
					check: function (button) {
						var card = {
								name: button.link[2]
							},
							player = _status.event.player;
						if (_status.event.getParent().type != 'phase') return 1;
						if (card.name == 'jiu') return 0;
						if (card.name == 'sha' && player.hasSkill('jiu')) return 0;
						return player.getUseValue(card, null, true);
					},
					backup: function (links, player) {
						return {
							audio: 'shidunshi',
							filterCard: function () {
								return false
							},
							popname: true,
							viewAs: {
								name: links[0][2],
								isCard: true,
							},
							selectCard: -1,
							precontent: function () {
								player.addTempSkill('shidunshi_damage');
								player.storage.shidunshi_damage = event.result.card.name;
							},
						}
					},
					prompt: function (links, player) {
						return '选择【' + get.translation(links[0][2]) + '】的目标';
					}
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag, arg) {
						var storage = player.storage.shidunshi;
						if (!storage || !storage[0].length) return false;
						if (player.getStat('skill').shidunshi) return false;
						switch (tag) {
							case 'respondSha':
								return (_status.event.type != 'phase' || (player == game.me || player.isUnderControl() || player.isOnline())) && storage[0].contains('sha');
							case 'respondShan':
								return storage[0].contains('shan');
							case 'save':
								if (arg == player && storage[0].contains('jiu')) return true;
								return storage[0].contains('tao');
						}
					},
					order: 2,
					result: {
						player: function (player) {
							if (_status.event.type == 'dying') {
								return get.attitude(player, _status.event.dying);
							}
							return 1;
						},
					},
				},
				initList: function () {
					// var list,skills=[];
					var skills = [];
					// var banned = ['xunyi'];
					// if (get.mode() == 'guozhan') {
					//   list = [];
					//   for (var i in lib.characterPack.mode_guozhan) list.push(i);
					// }
					// else if(_status.connectMode) list=get.charactersOL();
					// else {
					//   list=[];
					//   for(var i in lib.character){
					//   	 if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
					//   	 list.push(i);
					//   }
					// }
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
					skills = ['rerende', 'renxin', 'renzheng', 'juyi', 'yicong', 'new_yijue', 'yishe', 'reyixiang', 'tianyi', 'dcchongyi', 'tongli', 'relixia', 'cslilu', 'nzry_yili', 'zhiyu', 'zhichi', 'rejizhi', 'xinfu_qianxin'];
					_status.shidunshi_list = skills;
				},
				subSkill: {
					backup: {
						audio: 'shidunshi'
					},
					damage: {
						audio: 'shidunshi',
						trigger: {
							global: 'damageBegin2'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return event.source == _status.currentPhase;
						},
						onremove: true,
						logTarget: 'source',
						content: function () {
							'step 0'
							event.cardname = player.storage.shidunshi_damage;
							player.removeSkill('shidunshi_damage');
							event.target = trigger.source;
							var card = get.translation(trigger.source),
								card2 = get.translation(event.cardname),
								card3 = get.translation(trigger.player);
							var list = [
								'防止即将对' + card3 + '造成的伤害，并令' + card + '获得一个技能名中包含“仁/义/礼/智/信”的技能',
								'从〖遁世〗中删除【' + card2 + '】并获得一枚“席”',
								'减1点体力上限，然后摸等同于“席”数的牌',
							];
							var next = player.chooseButton([
								'遁世：请选择两项',
								[list.map((item, i) => {
									return [i, item];
								}), 'textbutton']
							]);
							next.set('forced', true);
							next.set('selectButton', 2);
							next.set('ai', function (button) {
								var player = _status.event.player;
								switch (button.link) {
									case 0:
										if (get.attitude(player, _status.currentPhase) > 0) return 3;
										return 0;
									case 1:
										return 1;
									case 2:
										var num = player.storage.shidunshi[1];
										for (var i of ui.selected.buttons) {
											if (i.link == 1) num++;
										}
										if (num > 0 && player.isDamaged()) return 2;
										return 0;
								}
							});
							'step 1'
							event.links = result.links.sort();
							for (var i of event.links) {
								game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
							}
							if (event.links.contains(0)) {
								trigger.cancel();
								if (!_status.shidunshi_list) lib.skill.shidunshi.initList();
								var list = _status.shidunshi_list.filter(function (i) {
									return !target.hasSkill(i, null, null, false);
								}).randomGets(3);
								if (list.length == 0) event.goto(3);
								else {
									event.videoId = lib.status.videoId++;
									var func = function (skills, id, target) {
										var dialog = ui.create.dialog('forcebutton');
										dialog.videoId = id;
										dialog.add('令' + get.translation(target) + '获得一个技能');
										for (var i = 0; i < skills.length; i++) {
											dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
										}
										dialog.addText(' <br> ');
									}
									if (player.isOnline()) player.send(func, list, event.videoId, target);
									else if (player == game.me) func(list, event.videoId, target);
									player.chooseControl(list).set('ai', function () {
										var controls = _status.event.controls;
										if (controls.contains('cslilu')) return 'cslilu';
										return controls[0];
									});
								}
							} else event.goto(3);
							'step 2'
							game.broadcastAll('closeDialog', event.videoId);
							target.addSkillLog(result.control);
							'step 3'
							var storage = player.storage.shidunshi;
							if (event.links.contains(1)) {
								storage[0].remove(event.cardname);
								storage[1]++;
								player.markSkill('shidunshi');
							}
							if (event.links.contains(2)) {
								player.loseMaxHp();
								if (storage[1] > 0) player.draw(storage[1]);
							}
						},
					},
				},
			},
			// 永雏塔菲
			taffybaomi: {
				trigger: {
					source: 'damageBefore'
				},
				logTarget: 'player',
				usable: 1,
				check: function (event, player) {
					var target = event.player;
					if (get.damageEffect(target, player, player) > 0 &&
						get.attitude(player, target) >= 0) {
						return 1;
					}
					return false;
				},
				content: function () {
					'step 0'
					var h = trigger.player.getCards('h');
					if (h.length > 0) {
						if (h.length > 1) trigger.player.chooseCard('h', true, [1, Infinity], '选择交给' + get.translation(player) + '任意张牌').set('ai', (card) => -get.value(card));
						else event._result = {
							bool: true,
							cards: h
						};
					} else {
						trigger.cancel();
						event.finish();
					}
					'step 1'
					if (result.bool) {
						event.source = player;
						trigger.player.give(result.cards, player);
						event.num = result.cards.length;
					}
					player.line(trigger.player, 'green');
					trigger.cancel();
				},
				ai: {
					jueqing: true,
					skillTagFilter: function (player, tag, arg) {
						if (!arg) return false;
						if (get.attitude(player, arg) <= 0) return false;
						var evt = _status.event.getParent('phaseUse');
						if (evt && evt.player == player) return true;
						return false;
					},
					effect: {
						player: function (card, player, target) {
							if (get.tag(card, 'damage') && get.attitude(player, target) >= 0) {
								return 1;
							}
						}
					}
				}
			},
			taffyfeizhu: {
				trigger: {
					player: 'damageBegin4'
				},
				forced: true,
				content: () => {
					if (player.isTurnedOver()) {
						trigger.num = Math.floor(trigger.num * 2);
					} else {
						trigger.num = Math.floor(trigger.num / 2);
					}
				}
			},
			taffyzuoai: {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				selectCard: [0, Infinity],
				discard: false,
				lose: false,
				delay: 0,
				filterTarget: function (card, player, target) {
					return player != target && get.distance(player, target) <= 1;
				},
				check: function (card) {
					return 0;
				},
				content: () => {
					player.give(cards, target);
					if (!player.isTurnedOver()) {
						player.turnOver();
					}
					if (!target.isTurnedOver()) {
						target.turnOver();
					}
					var evt2 = event.getParent(3);
					target.loseHp();
					target.addMark('taffyzuoai', 1);
					if (!target.storage['taffyzuoai_times']) target.storage['taffyzuoai_times'] = 0;
					player.recover();
				},
				marktext: '💘',
				intro: {
					name: '卓艾',
					content: (storage, player) => {
						return `你已经跟Taffy卓艾了${player.countMark('taffyzuoai')}次喵❤~`;
					}
				},
				group: 'taffyzuoai_control',
				ai: {
					expose: 0.2,
					order: 7,
					result: {
						target: function (player, target) {
							return get.damageEffect(target, player, target, 'fire') / 10;
						}
					}
				},
			},
			taffyzuoai_control: {
				audio: 'taffyzuoai',
				forced: true,
				trigger: {
					global: 'phaseBeginStart'
				},
				filter: function (event, player) {
					return player != event.player && !event.player._trueMe && event.player.countMark('taffyzuoai') > 0 && event.player.countMark('taffyzuoai') > event.player.storage['taffyzuoai_times'];
				},
				logTarget: 'player',
				skillAnimation: true,
				animationColor: 'key',
				content: function () {
					trigger.player._trueMe = player;
					game.addGlobalSkill('autoswap');
					if (trigger.player == game.me) {
						game.notMe = true;
						if (!_status.auto) ui.click.auto();
					}
					trigger.player.addSkill('taffyzuoai2');
				},
			},
			taffyzuoai2: {
				trigger: {
					player: ['phaseAfter', 'dieAfter'],
					global: 'phaseBefore',
				},
				lastDo: true,
				charlotte: true,
				forceDie: true,
				forced: true,
				silent: true,
				content: function () {
					player.removeSkill('taffyzuoai2');
				},
				onremove: function (player) {
					player.storage['taffyzuoai_times']++;
					if (player.countCards('h') > 0) {
						player.give(player.getCards('h'), player._trueMe);
					}
					if (player == game.me) {
						if (!game.notMe) game.swapPlayerAuto(player._trueMe)
						else delete game.notMe;
						if (_status.auto) ui.click.auto();
					}
					delete player._trueMe;
				},
			},
			taffychusheng: {
				enable: 'phaseUse',
				usable: 1,
				// limited:true,
				// skillAnimation:true,
				// animationColor:'fire',
				filterTarget: function (card, player, current) {
					return current != player && current.hasSex('male') && current.countMark('taffyzuoai') > 2;
				},
				onremove: true,
				prompt: '选择一名“❤”标记数大于等于3的其他男性角色将其武将牌替换为“小菲”',
				content: function () {
					'step 0'
					player.loseMaxHp();
					event.target = target;
					player.line(target, 'fire');
					if (target.name2 != undefined) {
						target.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌');
					} else event._result = {
						control: target.name1
					};
					'step 1'
					target.reinit(result.control, 'minitaffy');
					if (target.name == 'minitaffy' && target.group != 'qun') target.changeGroup('qun');
					if (_status.characterlist) {
						_status.characterlist.add(result.control);
						_status.characterlist.remove('minitaffy');
					}
				},
				ai: {

				},
			},
			// 小菲
			taffytangshi: {
				audio: 6,
				enable: 'phaseUse',
				content: () => {

				},
				ai: {
					order: 7,
					result: {
						player: (player) => {
							if (!player.storage.taffytangshicount) {
								player.storage.taffytangshicount = {
									count: 2,
									isEnd: false,
								};
							}
							if (player.storage.taffytangshicount.isEnd) {
								player.storage.taffytangshicount.count = 2;
								player.storage.taffytangshicount.isEnd = false;
							}
							player.storage.taffytangshicount.count--;
							if (player.storage.taffytangshicount.count === 0) {
								player.storage.taffytangshicount.isEnd = true;
							}
							return player.storage.taffytangshicount.count;
						},
					},
				}
			},
			taffyzisha: {
				audio: 1,
				enable: 'phaseUse',
				usable: 1,
				content: () => {
					player.die();
				}
			},
			// 新杀许劭
			shipingjian: {
				initList: function () {
					var list = [];
					if (_status.connectMode) list = get.charactersOL();
					else {
						var list = [];
						for (var i in lib.character) {
							if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i)) list.push(i);
						}
					}
					game.countPlayer2(function (current) {
						list.remove(current.name);
						list.remove(current.name1);
						list.remove(current.name2);
					});
					_status.characterlist = list;
				},
				init: function (player) {
					player.addSkill('shipingjian_check');
					if (!player.storage.shipingjian_check) player.storage.shipingjian_check = {};
				},
				onremove: function (player) {
					player.removeSkill('shipingjian_check');
				},
				audio: 2,
				trigger: {
					player: ['damageEnd', 'phaseJieshuBegin']
				},
				frequent: true,
				content: function () {
					'step 0'
					if (!_status.characterlist) {
						lib.skill.shipingjian.initList();
					}
					var allList = [
						// 结束阶段
						'simalang',
						'xin_yufan',
						'sp_liuqi',
						're_diaochan',
						're_guohuai',
						'zhanggong', // 镇行只有结束阶段
						'sp_caiwenji',
						'zhugezhan',
						'caoying',
						'sp_jiangwei',
						'caoren',
						'haozhao',
						're_guyong',
						're_wangyi',
						'xin_liru',
						'caojie',
						'zhoufang',
						're_kanze',
						'hanfu',
						'zhangxun',
						'yujin_yujin',
						'xin_xushu',
						'wuxian',
						// 受到伤害
						're_quancong',
						'guohuanghou',
						'shen_caocao',
						'chengyu',
						're_simayi',
						're_xiahoudun',
						're_guojia',
						're_caocao',
						're_fazheng',
						'wangrong',
						'xizhicai',
						'xunyu',
						'caopi',
						'caozhi',
						're_caochong',
						'caorui',
						// 'gz_re_lidian',
						'old_re_lidian',
						'manchong',
						're_chengong',
						're_xunyou',
						'heyan',
						'huaxin',
						'caomao',
						'ol_yangyi', // 结束阶段没有狷狭
					]
					var list = [];
					var skills = [];
					var map = [];
					allList.randomSort();
					var name2 = event.triggername;
					for (var i = 0; i < allList.length; i++) {
						var name = allList[i];
						if (name.indexOf('zuoci') != -1 || name.indexOf('xushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
						var skills2;
						if (name === 'old_re_lidian') {
							skills2 = ['wangxi'];
						} else {
							skills2 = lib.character[name][3];
						}
						for (var j = 0; j < skills2.length; j++) {
							if (player.getStorage('shipingjian').contains(skills2[j])) continue;
							if (skills.contains(skills2[j])) {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								continue;
							}
							if (name2 === 'damageEnd') {
								if (skills2[j] === 'xinyaoming') {
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									continue;
								} else if (skills2[j] === 'xinfu_zhenxing') {
									continue;
								}
							} else if (name2 === 'phaseJieshuBegin') {
								if (skills2[j] === 'daiyan') {
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									continue;
								} else if (skills2[j] === 'oljuanxia') {
									continue;
								}
							}
							var list2 = [skills2[j]];
							game.expandSkills(list2);
							for (var k = 0; k < list2.length; k++) {
								var info = lib.skill[list2[k]];
								if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
								if (info.trigger.player == name2 || Array.isArray(info.trigger.player) && info.trigger.player.contains(name2)) {
									if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
									if (info.init) continue;
									if (info.filter) {
										try {
											var bool = info.filter(trigger, player, name2);
											if (!bool) continue;
										} catch (e) {
											continue;
										}
									}
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									break;
								}
							}
						}
						if (list.length > 2) break;
					}
					if (skills.length) {
						event.list = list;
						player.chooseControl(skills).set('dialog', ['评荐：请选择尝试发动的技能', [list, 'character']]);
					} else event.finish();
					'step 1'
					player.markAuto('shipingjian', [result.control]);
					player.addTempSkill(result.control);
					player.storage.shipingjian_check[result.control] = (trigger.name == 'damage' ? trigger : 'phaseJieshu');
					var name = event.list.find(name => lib.character[name][3].includes(result.control));
					// if(name) lib.skill.rehuashen.createAudio(name,result.control,'xushao');
					if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
				},
				group: 'shipingjian_use',
				phaseUse_special: [],
				ai: {
					threaten: 5
				},
			},
			shipingjian_use: {
				audio: 'shipingjian',
				enable: 'phaseUse',
				usable: 1,
				prompt: () => lib.translate.shipingjian_info,
				content: function () {
					'step 0'
					var list = [];
					var skills = [];
					var map = [];
					var evt = event.getParent(2);
					if (!_status.characterlist) {
						lib.skill.shipingjian.initList();
					}
					var allList = [
						'caoying',
						'zhangxingcai',
						'dianwei',
						're_yuanshao',
						're_masu',
						'guanyinping',
						'huangfusong',
						're_guanyu',
						'jianggan',
						'xin_gaoshun',
						'taishici',
						'liuchen',
						'huaman',
						'dc_wangyun',
						're_zhangyi',
						'dingfeng',
						'pangtong',
						'dongzhuo',
						're_sunluban',
						'zhugeke',
						're_dongcheng',
						'huanggai',
						're_xushu', // 衍生技：荐言（'jianyan'）
						'dc_liru',
						're_sunquan',
						're_daqiao',
						're_guyong',
						'chenlin',
						're_jsp_pangtong',
						'liyan',
						'shen_lvmeng',
						'zhangji',
						'xf_yiji',
						'guanlu',
						'wangrong',
						're_dongbai',
						're_zhouyu',
						'guosi',
						're_zoushi',
						'zhaoyan',
						'zongyu',
						're_dengzhi',
						'zhangwen',
						'shen_ganning',
						'xin_wuguotai',
						're_ganning',
						're_panfeng',
						'xunyou',
						'xin_handang',
						're_gongsunyuan',
						'buzhi',
						'heqi',
						'zhanghu',
						'jiangwei',
						're_huatuo',
						'simalang',
						're_zhuzhi',
						'liuyan',
						're_sunshangxiang',
						'dc_bulianshi',
						're_chengong',
						'mizhu',
						're_diaochan',
						'caorui',
						're_liubei',
						'liuxie',
						'zhangchangpu',
						're_lusu',
						'zhangzhang',
						'xunyu',
						'lvkai',
						'dc_jsp_guanyu', // 衍生技：怒嗔（'dcnuchen'）
						'xianglang',
						're_xuhuang',
						'sp_zhugeliang',
						'wangping',
						'dc_chenqun',
						'tongyuan',
						're_chendeng',
					]
					allList.randomSort();
					for (var i = 0; i < allList.length; i++) {
						var name = allList[i];
						if (name.indexOf('zuoci') != -1 || name.indexOf('xushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
						var skills2 = lib.character[name][3];
						for (var j = 0; j < skills2.length; j++) {
							if (player.getStorage('shipingjian').contains(skills2[j])) continue;
							if (skills2[j] === 'qianxin') {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push('jianyan');
								skills.add('jianyan');
								continue;
							}
							if (get.is.locked(skills2[j], player)) continue;
							var info = lib.translate[skills2[j] + '_info'];
							if (skills.contains(skills2[j]) ||
								(info && info.indexOf('当你于出牌阶段') != -1 && info.indexOf('当你于出牌阶段外') == -1) ||
								skills2[j] === 'lijian' ||
								skills2[j] === 'xinmieji' ||
								skills2[j] === 'songci' ||
								skills2[j] === 'quji' ||
								skills2[j] === 'rechanhui' ||
								skills2[j] === 'xinkuangfu' ||
								skills2[j] === 'zhijian' ||
								skills2[j] === 'chaofeng' ||
								skills2[j] === 'quhu' ||
								skills2[j] === 'xinfu_lveming') {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								continue;
							}
							if (skills2[j] === 'olshanxi') {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push('shanxi');
								skills.add('shanxi');
								continue;
							}
							if (skills2[j] === 'new_rewusheng') {
								if (name === 'dc_jsp_guanyu') {
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push('dcnuchen');
									skills.add('dcnuchen');
									continue;
								} else {
									continue;
								}
							}
							var list2 = [skills2[j]];
							game.expandSkills(list2);
							for (var k = 0; k < list2.length; k++) {
								var info = lib.skill[list2[k]];
								if (!info || !info.enable || info.charlotte || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
								if ((info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.contains('phaseUse'))) || (info.enable == 'chooseToUse' || (Array.isArray(info.enable) && info.enable.contains('chooseToUse')))) {
									if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
									if (info.init || info.onChooseToUse) continue;
									if (info.filter) {
										try {
											var bool = info.filter(evt, player);
											if (!bool) continue;
										} catch (e) {
											continue;
										}
									} else if (info.viewAs && typeof info.viewAs != 'function') {
										try {
											if (evt.filterCard && !evt.filterCard(info.viewAs, player, evt)) continue;
											if (info.viewAsFilter && info.viewAsFilter(player) == false) continue;
										} catch (e) {
											continue;
										}
									}
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									break;
								}
							}
						}
						if (list.length > 2) break;
					}
					if (skills.length) {
						event.list = list;
						player.chooseControl(skills).set('dialog', ['评荐：请选择尝试发动的技能', [list, 'character']]);
					} else event.finish();
					'step 1'
					player.markAuto('shipingjian', [result.control]);
					player.addTempSkill(result.control);
					player.storage.shipingjian_check[result.control] = 'phaseUse';
					var name = event.list.find(name => lib.character[name][3].includes(result.control));
					// if(name) lib.skill.rehuashen.createAudio(name,result.control,'xushao');
					if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
				},
				ai: {
					order: 12,
					result: {
						player: 1
					}
				},
			},
			shipingjian_check: {
				charlotte: true,
				trigger: {
					player: ['useSkill', 'logSkillBegin']
				},
				filter: function (event, player) {
					var info = get.info(event.skill);
					if (info && info.charlotte) return false;
					var skill = event.sourceSkill || event.skill;
					return player.storage.shipingjian_check[skill];
				},
				direct: true,
				firstDo: true,
				priority: Infinity,
				content: function () {
					var skill = trigger.sourceSkill || trigger.skill;
					player.removeSkill(skill);
					const names = player.tempname && player.tempname.filter(i => lib.character[i][3].includes(skill));
					if (names) game.broadcastAll((player, names) => player.tempname.removeArray(names), player, names);
					delete player.storage.shipingjian_check[skill];
				},
				group: 'shipingjian_check2',
			},
			shipingjian_check2: {
				charlotte: true,
				trigger: {
					player: ['phaseUseEnd', 'damageEnd', 'phaseJieshuBegin']
				},
				filter: function (event, player) {
					return Object.keys(player.storage.shipingjian_check).find(function (skill) {
						if (event.name != 'damage') return player.storage.shipingjian_check[skill] == event.name;
						return player.storage.shipingjian_check[skill] == event;
					});
				},
				direct: true,
				lastDo: true,
				priority: -Infinity,
				content: function () {
					var skills = Object.keys(player.storage.shipingjian_check).filter(function (skill) {
						if (trigger.name != 'damage') return player.storage.shipingjian_check[skill] == trigger.name;
						return player.storage.shipingjian_check[skill] == trigger;
					});
					player.removeSkill(skills);
					const names = player.tempname && player.tempname.filter(i => skills.some(skill => lib.character[i][3].includes(skill)));
					if (names) game.broadcastAll((player, names) => player.tempname.removeArray(names), player, names);
					for (var skill of skills) delete player.storage.shipingjian_check[skill];
				},
			},
			// 神许劭
			spshenpingjian: {
				audio: 'shenpingjian',
				trigger: {
					player: ['damageBefore', 'phaseJieshuBefore', 'phaseBefore'],
				},
				initList: function () {
					var list = [];
					if (_status.connectMode) var list = get.charactersOL();
					else {
						var list = [];
						for (var i in lib.character) {
							if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i)) list.push(i);
						}
					}
					game.countPlayer2(function (current) {
						list.remove(current.name);
						list.remove(current.name1);
						list.remove(current.name2);
					});
					_status.characterlist = list;
				},
				frequent: true,
				content: function () {
					'step 0'
					if (!player.storage.spshenpingjianX && player.storage.spshenpingjianX !== 0) player.storage.spshenpingjianX = 0;
					var skills = player.getSkills(null, false, false).filter(skill => {
						var info = get.info(skill);
						if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
						const tempSkills = Object.keys(player.tempSkills)
						if (tempSkills.includes(skill)) {
							return false;
						}
						const additionalSkills = Object.keys(player.additionalSkills)
						for (let i = 0; i < additionalSkills.length; i++) {
							if (player.additionalSkills[additionalSkills[i]].includes(skill)) {
								return false;
							}
						}
						return true;
					});
					if (skills.length < 2) player.storage.spshenpingjianX = 1;
					var next = player.chooseButton(true, [
						'评荐：请选择失去任意个技能',
						[skills.map(i => [
							i,
							'<div class="popup text" style="width:calc(100% - 25px);display:inline-block"><div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div></div>',
						]), 'textbutton'],
					]);
					next.set('selectButton', [0, skills.length]);
					next.set('ai', function (button) {
						if (button.link == 'spshenpingjian') return -1;
						return Math.random();
					});
					'step 1'
					if (result.bool) {
						if (result.links.length === 0 && player.storage.spshenpingjianX === 0) {
							event.finish();
						} else {
							let rSkillInfo;
							for (let i = 0; i < result.links.length; i++) {
								rSkillInfo = get.info(result.links[i]);
								if (rSkillInfo.limited || rSkillInfo.juexingji || rSkillInfo.dutySkill) {
									player.restoreSkill(result.links[i]);
								}
								player.removeSkill(result.links[i]);
								game.log(player, '失去了技能', '#g【' + get.translation(result.links[i]) + '】');
							}
							if (!_status.characterlist) {
								lib.skill.spshenpingjian.initList();
							}
							var list = [];
							var skills = [];
							var map = [];
							var evt = event.getParent(2);
							var allList = _status.characterlist.slice(0);
							game.countPlayer(function (current) {
								if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
								if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
								if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
							});
							allList.randomSort();
							var name2 = event.triggername;

							function hasCommonElement(array1, array2) {
								for (let i = 0; i < array1.length; i++) {
									if (array2.includes(array1[i])) {
										return true;
									}
								}
								return false;
							}
							for (var i = 0; i < allList.length; i++) {
								var name = allList[i];
								if (name.indexOf('xushao') != -1 || name.indexOf('shenxushao') != -1 || name.indexOf('shixushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
								var skills2 = lib.character[name][3];
								for (var j = 0; j < skills2.length; j++) {
									var playerSkills = player.getSkills(null, false, false).filter(skill => {
										var info = get.info(skill);
										if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
										return true;
									});
									if (playerSkills.contains(skills2[j])) continue;
									if (skills.contains(skills2[j])) {
										list.add(name);
										if (!map[name]) map[name] = [];
										map[name].push(skills2[j]);
										skills.add(skills2[j]);
										continue;
									}
									var list2 = [skills2[j]];
									game.expandSkills(list2);
									for (var k = 0; k < list2.length; k++) {
										var info = lib.skill[list2[k]];
										if (!info || !info.trigger) continue;
										if (name2 === 'phaseBefore') {
											name2 = ['phaseBefore', 'phaseBeginStart', 'phaseBegin', 'phaseZhunbeiBefore', 'phaseZhunbeiBegin', 'phaseZhunbei', 'phaseZhunbeiEnd', 'phaseZhunbeiAfter', 'phaseJudgeBefore', 'phaseJudgeBegin', 'phaseJudgeEnd', 'phaseJudgeAfter', 'phaseDrawBefore', 'phaseDrawBegin', 'phaseDrawBegin1', 'phaseDrawBegin2', 'phaseDrawEnd', 'phaseDrawAfter', 'phaseUseBefore', 'phaseUseBegin']
										} else if (name2 === 'damageBefore') {
											name2 = ['damageBefore', 'damageBegin', 'damageBegin2', 'damageBegin3', 'damageBegin4', 'damage', 'damageSource', 'damageEnd', 'damageAfter']
										} else if (name2 === 'phaseJieshuBefore') {
											name2 = ['phaseJieshuBefore', 'phaseJieshuBegin', 'phaseJieshu', 'phaseJieshuEnd', 'phaseJieshuAfter', 'phaseEnd', 'phaseAfter']
										}
										if (info.trigger.player) {
											if (name2.includes(info.trigger.player) || Array.isArray(info.trigger.player) && hasCommonElement(info.trigger.player, name2)) {
												if (info.filter) {
													try {
														var bool = info.filter(evt, player);
														if (!bool) continue;
													} catch (e) {
														continue;
													}
												}
												list.add(name);
												if (!map[name]) map[name] = [];
												map[name].push(skills2[j]);
												skills.add(skills2[j]);
												break;
											}
										}
										if (info.trigger.global) {
											if (name2.includes(info.trigger.global) && (!info.trigger.player || info.trigger.player !== 'enterGame') || Array.isArray(info.trigger.global) && hasCommonElement(info.trigger.global, name2)) {
												if (info.filter) {
													try {
														var bool = info.filter(evt, player);
														if (!bool) continue;
													} catch (e) {
														continue;
													}
												}
												list.add(name);
												if (!map[name]) map[name] = [];
												map[name].push(skills2[j]);
												skills.add(skills2[j]);
												break;
											}
										}
									}
								}
								if (list.length >= 2 * (result.links.length + player.storage.spshenpingjianX) + 1) break;
							}
							if (skills.length) {
								if (player.isUnderControl()) {
									game.swapPlayerAuto(player);
								}
								var switchToAuto = function () {
									_status.imchoosing = false;
									event._result = {
										bool: true,
										skills: skills.randomGets(result.links.length + player.storage.spshenpingjianX),
									};
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
								};
								var chooseButton = function (list, skills, result, player) {
									var event = _status.event;
									if (!event._result) event._result = {};
									event._result.skills = [];
									var rSkill = event._result.skills;
									var dialog = ui.create.dialog('评荐：请选择获得至多' + get.cnNumber(result.links.length + player.storage.spshenpingjianX) + '个技能', [list, 'character'], 'hidden');
									event.dialog = dialog;
									var table = document.createElement('div');
									table.classList.add('add-setting');
									table.style.margin = '0';
									table.style.width = '100%';
									table.style.position = 'relative';
									for (var i = 0; i < skills.length; i++) {
										var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.link = skills[i];
										table.appendChild(td);
										td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
											if (_status.dragged) return;
											if (_status.justdragged) return;
											_status.tempNoButton = true;
											setTimeout(function () {
												_status.tempNoButton = false;
											}, 500);
											var link = this.link;
											if (!this.classList.contains('bluebg')) {
												if (rSkill.length >= result.links.length + player.storage.spshenpingjianX) return;
												rSkill.add(link);
												this.classList.add('bluebg');
											} else {
												this.classList.remove('bluebg');
												rSkill.remove(link);
											}
										});
									}
									dialog.content.appendChild(table);
									dialog.add('　　');
									dialog.open();
									event.switchToAuto = function () {
										event.dialog.close();
										event.control.close();
										game.resume();
										_status.imchoosing = false;
									};
									event.control = ui.create.control('ok', function (link) {
										event.dialog.close();
										event.control.close();
										game.resume();
										_status.imchoosing = false;
									});
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									game.pause();
									game.countChoose();
								};
								if (event.isMine()) {
									chooseButton(list, skills, result, player);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, list, skills, result, player);
									event.player.wait();
									game.pause();
								} else {
									switchToAuto();
								}
							} else {
								event.finish();
							}
						}
					}
					'step 2'
					var map = event.result || result;
					if (map && map.skills && map.skills.length) {
						for (var i of map.skills) {
							player.addSkill(i);
							game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
						}
						player.storage.spshenpingjianX = 0;
					}
				},
				group: ['spshenpingjian_use'],
				phaseUse_special: [],
				ai: {
					threaten: 100
				},
			},
			spshenpingjian_use: {
				audio: 'shenpingjian',
				enable: 'phaseUse',
				usable: 1,
				prompt: () => lib.translate.spshenpingjian_info,
				content: function () {
					'step 0'
					if (!player.storage.spshenpingjianX && player.storage.spshenpingjianX !== 0) player.storage.spshenpingjianX = 1;
					var skills = player.getSkills(null, false, false).filter(skill => {
						var info = get.info(skill);
						if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
						const tempSkills = Object.keys(player.tempSkills)
						if (tempSkills.includes(skill)) {
							return false;
						}
						const additionalSkills = Object.keys(player.additionalSkills)
						for (let i = 0; i < additionalSkills.length; i++) {
							if (player.additionalSkills[additionalSkills[i]].includes(skill)) {
								return false;
							}
						}
						return true;
					});
					if (skills.length < 2) player.storage.spshenpingjianX = 1;
					var next = player.chooseButton(true, [
						'评荐：请选择失去任意个技能',
						[skills.map(i => [
							i,
							'<div class="popup text" style="width:calc(100% - 25px);display:inline-block"><div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div></div>',
						]), 'textbutton'],
					]);
					next.set('selectButton', [0, skills.length]);
					next.set('ai', function (button) {
						if (button.link == 'spshenpingjian') return -1;
						return Math.random();
					});
					'step 1'
					if (result.bool) {
						if (result.links.length === 0 && player.storage.spshenpingjianX === 0) {
							event.finish();
						} else {
							let rSkillInfo;
							for (let i = 0; i < result.links.length; i++) {
								rSkillInfo = get.info(result.links[i]);
								if (rSkillInfo.limited || rSkillInfo.juexingji || rSkillInfo.dutySkill) {
									player.restoreSkill(result.links[i]);
								}
								player.removeSkill(result.links[i]);
								game.log(player, '失去了技能', '#g【' + get.translation(result.links[i]) + '】');
							}
							var list = [];
							var skills = [];
							var map = [];
							if (!_status.characterlist) {
								lib.skill.spshenpingjian.initList();
							}
							var allList = _status.characterlist.slice(0);
							game.countPlayer(function (current) {
								if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
								if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
								if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
							});
							allList.randomSort();
							for (var i = 0; i < allList.length; i++) {
								var name = allList[i];
								if (name.indexOf('xushao') != -1 || name.indexOf('shenxushao') != -1 || name.indexOf('shixushao') != -1 || name.indexOf('spshenxushao') != -1) continue;
								var skills2 = lib.character[name][3];
								for (var j = 0; j < skills2.length; j++) {
									var playerSkills = player.getSkills(null, false, false).filter(skill => {
										var info = get.info(skill);
										if (!info || info.charlotte || get.is.empty(info) || get.skillInfoTranslation(skill, player) === "") return false;
										return true;
									});
									if (playerSkills.contains(skills2[j])) continue;
									if (skills.contains(skills2[j]) || lib.skill.spshenpingjian.phaseUse_special.contains(skills2[j])) {
										list.add(name);
										if (!map[name]) map[name] = [];
										map[name].push(skills2[j]);
										skills.add(skills2[j]);
										continue;
									}
									var list2 = [skills2[j]];
									game.expandSkills(list2);
									for (var k = 0; k < list2.length; k++) {
										var info = lib.skill[list2[k]];
										list.add(name);
										if (!map[name]) map[name] = [];
										map[name].push(skills2[j]);
										skills.add(skills2[j]);
										break;
									}
								}
								if (list.length >= 2 * (result.links.length + player.storage.spshenpingjianX) + 1) break;
							}
							if (skills.length) {
								if (player.isUnderControl()) {
									game.swapPlayerAuto(player);
								}
								var switchToAuto = function () {
									_status.imchoosing = false;
									event._result = {
										bool: true,
										skills: skills.randomGets(result.links.length + player.storage.spshenpingjianX),
									};
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
								};
								var chooseButton = function (list, skills, result, player) {
									var event = _status.event;
									if (!event._result) event._result = {};
									event._result.skills = [];
									var rSkill = event._result.skills;
									var dialog = ui.create.dialog('评荐：请选择获得至多' + get.cnNumber(result.links.length + player.storage.spshenpingjianX) + '个技能', [list, 'character'], 'hidden');
									event.dialog = dialog;
									var table = document.createElement('div');
									table.classList.add('add-setting');
									table.style.margin = '0';
									table.style.width = '100%';
									table.style.position = 'relative';
									for (var i = 0; i < skills.length; i++) {
										var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.link = skills[i];
										table.appendChild(td);
										td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
											if (_status.dragged) return;
											if (_status.justdragged) return;
											_status.tempNoButton = true;
											setTimeout(function () {
												_status.tempNoButton = false;
											}, 500);
											var link = this.link;
											if (!this.classList.contains('bluebg')) {
												if (rSkill.length >= result.links.length + player.storage.spshenpingjianX) return;
												rSkill.add(link);
												this.classList.add('bluebg');
											} else {
												this.classList.remove('bluebg');
												rSkill.remove(link);
											}
										});
									}
									dialog.content.appendChild(table);
									dialog.add('　　');
									dialog.open();
									event.switchToAuto = function () {
										event.dialog.close();
										event.control.close();
										game.resume();
										_status.imchoosing = false;
									};
									event.control = ui.create.control('ok', function (link) {
										event.dialog.close();
										event.control.close();
										game.resume();
										_status.imchoosing = false;
									});
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									game.pause();
									game.countChoose();
								};
								if (event.isMine()) {
									chooseButton(list, skills, result, player);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, list, skills, result, player);
									event.player.wait();
									game.pause();
								} else {
									switchToAuto();
								}
							} else {
								event.finish();
							}
						}
					}
					'step 2'
					var map = event.result || result;
					if (map && map.skills && map.skills.length) {
						for (var i of map.skills) {
							player.addSkill(i);
							game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
						}
						player.storage.spshenpingjianX = 0;
					}
				},
				ai: {
					order: 12,
					result: {
						player: 1
					}
				},
			},
			// 旧牛董
			oldtwjuntun: {
				audio: 'twjuntun',
				trigger: {
					global: ['phaseBefore', 'dyingAfter'],
					player: 'enterGame',
				},
				init: function (player) {
					lib.skill.oldbaonvezhi.change(player, 0)
				},
				direct: true,
				derivation: ['oldtwxiongjun', 'oldbaonvezhi_faq'],
				group: 'oldtwjuntun_extra',
				filter: function (event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && game.hasPlayer(current => {
						return !current.hasSkill('oldtwxiongjun');
					});
				},
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt('oldtwjuntun'), '令一名角色获得〖凶军〗', (card, player, target) => {
						return !target.hasSkill('oldtwxiongjun');
					}).set('ai', target => get.attitude(player, target) - 2);
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill('oldtwjuntun', target);
						target.addSkillLog('oldtwxiongjun');
						if (target != player) player.addExpose(0.25);
					}
				},
				subSkill: {
					extra: {
						audio: 2,
						trigger: {
							global: 'damageSource'
						},
						forced: true,
						locked: false,
						filter: function (event, player) {
							return event.source && event.source.hasSkill('oldtwxiongjun') && event.source != player;
						},
						logTarget: 'source',
						content: function () {
							lib.skill.oldbaonvezhi.change(player, trigger.num);
						}
					},
				},
			},
			oldbaonvezhi: {
				audio: 'baonvezhi',
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				silent: true,
				forced: true,
				charlotte: true,
				oldbaonvezhi_max: 5,
				change: function (player, num) {
					var oldbaonvezhi_max = lib.skill.oldbaonvezhi.oldbaonvezhi_max;
					player.addSkill('oldbaonvezhi');
					var tmp = player.countMark('oldbaonvezhi');
					if (tmp + num > oldbaonvezhi_max) num = oldbaonvezhi_max - tmp;
					else if (tmp + num < 0) num = -tmp;
					if (num === 0) return;
					player[num > 0 ? 'addMark' : 'removeMark']('oldbaonvezhi', Math.abs(num), false);
					game.log(player, num >= 0 ? '获得了' : '失去了', get.cnNumber(Math.abs(num)) + '点<span class="firetext">暴虐值</span>');
					player[player.countMark('oldbaonvezhi') > 0 ? 'markSkill' : 'unmarkSkill']('oldbaonvezhi');
				},
				filter: function (event, player) {
					return player.countMark('oldbaonvezhi') < lib.skill.oldbaonvezhi.oldbaonvezhi_max;
				},
				content: function () {
					lib.skill.oldbaonvezhi.change(player, trigger.num);
				},
				marktext: '暴',
				intro: {
					name: '暴虐值',
					content: function (storage, player) {
						return get.translation(player) + '的暴虐值为' + (player.storage.oldbaonvezhi || 0);
					}
				}
			},
			oldbaonvezhi_faq: {},
			oldtwxiongjun: {
				init: function (player) {
					lib.skill.oldbaonvezhi.change(player, 0)
				},
				trigger: {
					source: 'damageSource'
				},
				forced: true,
				// usable: 1,
				content: function () {
					var targets = game.filterPlayer(current => current.hasSkill('oldtwxiongjun')).sortBySeat();
					player.line(targets, 'green');
					game.asyncDraw(targets);
				},
			},
			oldtwxiongxi: {
				audio: 'twxiongxi',
				enable: 'phaseUse',
				// usable: 1,
				init: function (player) {
					lib.skill.oldbaonvezhi.change(player, 0)
				},
				filterCard: () => true,
				selectCard: function () {
					return (lib.skill.oldbaonvezhi.oldbaonvezhi_max || 5) - _status.event.player.countMark('oldbaonvezhi');
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				position: 'he',
				filterTarget: function (card, player, target) {
					return player != target && !player.getStorage('oldtwxiongxi_target').contains(target);
				},
				content: function () {
					player.addTempSkill('oldtwxiongxi_clear', ['phaseUseAfter', 'phaseAfter']);
					player.markAuto('oldtwxiongxi_target', [target]);
					player.syncStorage();
					target.damage();
				},
				subSkill: {
					clear: {
						trigger: {
							player: 'phaseAfter'
						},
						charlotte: true,
						silent: true,
						onremove: function (player) {
							delete player.storage.oldtwxiongxi_target;
						}
					}
				},
				ai: {
					expose: 0.25,
					order: 8,
					result: {
						target: function (player, target) {
							return get.damageEffect(target, player, player);
						}
					}
				}
			},
			oldtwxiafeng: {
				audio: 'twxiafeng',
				trigger: {
					player: 'phaseUseBegin'
				},
				filter: function (event, player) {
					return player.countMark('oldbaonvezhi') > 0;
				},
				init: function (player) {
					lib.skill.oldbaonvezhi.change(player, 0)
				},
				direct: true,
				content: function () {
					'step 0'
					player.chooseButton(['黠凤：选择要消耗的暴虐值', [
						['oldtw_bn_1', 'oldtw_bn_2', 'oldtw_bn_3'], 'vcard'
					]], (button) => {
						var num = player.countCards('hs', card => get.tag(card, 'damage') && game.hasPlayer(current => get.effect(current, card, player, player) > 0));
						if (num <= 0) return 0;
						if (num >= 3) num = 3;
						if (button.link[2] == 'oldtw_bn_' + num) return 10;
						return 1;
					}).set('filterButton', (button) => {
						var player = _status.event.player;
						var link = button.link[2];
						if (link[link.length - 1] * 1 > player.storage.oldbaonvezhi) return false;
						return true;
					});
					'step 1'
					if (result.bool) {
						player.logSkill('oldtwxiafeng');
						var link = result.links[0][2],
							num = link[link.length - 1] * 1;
						player.addTempSkill('oldtwxiafeng_effect');
						player.storage.oldtwxiafeng_effect = num;
						lib.skill.oldbaonvezhi.change(player, -num);
					}
				},
				subSkill: {
					effect: {
						trigger: {
							player: 'useCard'
						},
						filter: function (event, player) {
							return !player.storage.oldtwxiafeng_effect2;
						},
						forced: true,
						content: function () {
							var count = player.getHistory('useCard', evt => evt.getParent('phaseUse').player == player).length;
							if (count == player.storage.oldtwxiafeng_effect) {
								player.storage.oldtwxiafeng_effect2 = true;
							}
							if (count <= player.storage.oldtwxiafeng_effect) {
								trigger.directHit.addArray(game.players);
								if (trigger.addCount !== false) {
									trigger.addCount = false;
									var stat = player.getStat().card,
										name = trigger.card.name;
									if (typeof stat[name] == 'number') stat[name]--;
								}
							}
						},
						onremove: function (player) {
							delete player.storage.oldtwxiafeng_effect;
							delete player.storage.oldtwxiafeng_effect2;
						},
						mod: {
							targetInRange: function (card, player, target, now) {
								if (!player.storage.oldtwxiafeng_effect2) return true;
							},
							cardUsableTarget: function (card, player, target) {
								if (!player.storage.oldtwxiafeng_effect2) return true;
							},
							maxHandcard: function (player, num) {
								return num + (player.storage.oldtwxiafeng_effect || 0);
							}
						},
					}
				}
			},
			// 旧张曼成
			oldtwfengji: {
				audio: 'twfengji',
				mahouSkill: true,
				trigger: {
					player: 'phaseUseBegin'
				},
				filter: function (event, player) {
					return !player.getExpansions('oldtwfengji').length && !player.hasSkill('oldtwfengji_mahou') && player.countCards('he');
				},
				direct: true,
				content: function () {
					'step 0'
					player.chooseCard('he', get.prompt2('oldtwfengji')).set('ai', function (card) {
						var name = card.name,
							num = 0;
						for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
							if (ui.cardPile.childNodes[i].name == name) num++;
						}
						if (num < 2) return false;
						return 8 - get.value(card);
					});
					'step 1'
					if (result.bool) {
						player.logSkill('oldtwfengji');
						player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('oldtwfengji');
						player.chooseControl('1回合', '2回合', '3回合').set('prompt', '请选择施法时长').set('ai', function () {
							var player = _status.event.player;
							var safe = Math.min(player.getHandcardLimit(), player.countCards('h', 'shan'));
							if (safe < Math.min(3, game.countPlayer())) {
								var next = player.next;
								while (next != player && get.attitude(next, player) > 0) {
									safe++;
									next = next.next;
								}
							}
							return Math.max(2, Math.min(safe, 3, game.countPlayer())) - 1;
						});
					} else event.finish();
					'step 2'
					player.storage.oldtwfengji_mahou = [result.index + 1, result.index + 1];
					player.addTempSkill('oldtwfengji_mahou', {
						player: 'die'
					});
				},
				marktext: '示',
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				subSkill: {
					mahou: {
						trigger: {
							global: 'phaseEnd'
						},
						forced: true,
						popup: false,
						charlotte: true,
						content: function () {
							var list = player.storage.oldtwfengji_mahou;
							list[1]--;
							if (list[1] == 0) {
								game.log(player, '的“蜂集”魔法生效');
								player.logSkill('oldtwfengji');
								var cards = player.getExpansions('oldtwfengji');
								if (cards.length) {
									var cards2 = [],
										num = list[0];
									for (var card of cards) {
										for (var i = 0; i < num; i++) {
											var card2 = get.cardPile2(function (cardx) {
												return cardx.name == card.name && !cards2.contains(cardx);
											});
											if (card2) cards2.push(card2);
											else break;
										}
									}
									game.delayx();
									if (cards2.length) player.gain(cards2, 'gain2');
									player.loseToDiscardpile(cards);
								}
								player.removeSkill('oldtwfengji_mahou');
							} else {
								game.log(player, '的“蜂集”魔法剩余', '#g' + (list[1]) + '回合');
								player.markSkill('oldtwfengji_mahou');
							}
						},
						ai: {
							threaten: 2.5
						},
						mark: true,
						onremove: true,
						//该图标为灵魂宝石
						marktext: '♗',
						intro: {
							name: '施法：蜂集',
							markcount: function (storage) {
								if (storage) return storage[1];
								return 0;
							},
							content: function (storage) {
								if (storage) {
									return '经过' + storage[1] + '个“回合结束时”后，若有“示”，则从牌堆中获得' + storage[0] + '张和“示”名称相同的牌';
								}
								return '未指定施法效果';
							},
						},
					},
				},
			},
			oldtwyiju: {
				audio: 'twyiju',
				locked: false,
				mod: {
					attackRangeBase: function (player, num) {
						if (player.getExpansions('oldtwfengji').length) return player.hp;
					},
					cardUsable: function (card, player, num) {
						if (card.name == 'sha' && player.getExpansions('oldtwfengji').length) return num - 1 + player.hp;
					},
				},
				trigger: {
					player: 'damageBegin3'
				},
				filter: function (event, player) {
					return player.getExpansions('oldtwfengji').length > 0;
				},
				forced: true,
				content: function () {
					trigger.num++;
					var cards = player.getExpansions('oldtwfengji');
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: {
					halfneg: true,
					combo: 'oldtwfengji',
				},
			},
			oldtwbudao: {
				audio: 'twbudao',
				trigger: {
					player: 'phaseZhunbeiBegin'
				},
				derivation: ['twzhouhu', 'twharvestinori', 'twzuhuo'],
				limited: true,
				skillAnimation: true,
				animationColor: 'metal',
				check: function (event, player) {
					return !player.hasUnknown() || !player.hasFriend();
				},
				skillValue: {
					twzhouhu: (target) => 1,
					twzuhuo: (target, player) => 1,
					twharvestinori: (target) => 1,
					// twhuangjin:(target)=>Math.random()/5,
					// twguimen:(target)=>Math.sqrt(Math.min(3,target.countCards('he',{suit:'spade'})))*0.09,
					// twzhouzu:(target)=>{
					// 	var rand=Math.random();
					// 	if(rand<0.8) return 1-Math.sqrt(0.8-rand);
					// 	return 1;
					// },
					// twdidao:(target,player)=>{
					// 	if([target,player].some(current=>current.getSkills().some(skill=>{
					// 		var info=get.info(skill);
					// 		if(!info||!info.ai||!info.ai.rejudge) return false;
					// 		return true;
					// 	}))){
					// 		return 0.05;
					// 	}
					// 	return 0.85+Math.random()/5;
					// }
				},
				content: function () {
					'step 0'
					player.awakenSkill('oldtwbudao');
					player.loseMaxHp();
					player.recover();
					var skills = lib.skill.oldtwbudao.derivation,
						map = lib.skill.oldtwbudao.skillValue;
					skills = skills.randomGets(3);
					var target = game.filterPlayer().sort((a, b) => get.attitude(player, b) - get.attitude(player, a))[0];
					if (player.identity == 'nei' || get.attitude(player, target) < 6) target = player;
					player.chooseControl(skills).set('choiceList', skills.map(function (i) {
						return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
					})).set('displayIndex', false).set('prompt', '布道：选择获得一个技能').set('ai', () => {
						return _status.event.choice;
					}).set('choice', skills.sort((a, b) => (map[b](target, player) || 0.5) - (map[a](target, player) || 0.5))[0]);
					'step 1'
					var skill = result.control;
					player.addSkillLog(skill);
					event.oldtwbudao_skill = skill;
					player.chooseTarget(lib.filter.notMe, '是否令一名其他角色也获得【' + get.translation(skill) + '】？').set('ai', function (target) {
						var player = _status.event.player;
						if (player.identity == 'nei') return 0;
						return get.attitude(player, target) - 6;
					});
					'step 2'
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, 'green');
						target.addSkillLog(event.oldtwbudao_skill);
						var cards = target.getCards('he');
						if (!cards.length) event.finish();
						else if (cards.length == 1) event._result = {
							bool: true,
							cards: cards
						};
						else target.chooseCard('he', true, '交给' + get.translation(player) + '一张牌作为学费');
					} else event.finish();
					'step 3'
					if (result.bool) target.give(result.cards, player);
				},
			},
			// 神于吉
			shenguhuo: {
				audio: 'old_guhuo',
				group: ['shenguhuo_guess'],
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard: function (player, name) {
					return (lib.inpile.contains(name) && player.countCards('hs') > 0);
				},
				filter: function (event, player) {
					if (!player.countCards('hs')) return false;
					for (var i of lib.inpile) {
						var type = get.type2(i);
						if ((type == 'basic' || type == 'trick') && event.filterCard({
								name: i
							}, player, event)) return true;
						if (i == 'sha') {
							for (var j of lib.inpile_nature) {
								if (event.filterCard({
										name: i,
										nature: j
									}, player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i of lib.inpile) {
							if (event.type != 'phase')
								if (!event.filterCard({
										name: i
									}, player, event)) continue;
							var type = get.type2(i);
							if (type == 'basic' || type == 'trick') list.push([type, '', i]);
							if (i == 'sha') {
								if (event.type != 'phase')
									if (!event.filterCard({
											name: i,
											nature: j
										}, player, event)) continue;
								for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
							}
						}
						return ui.create.dialog('蛊惑', [list, 'vcard']);
					},
					filter: function (button, player) {
						var evt = _status.event.getParent();
						return evt.filterCard({
							name: button.link[2],
							nature: button.link[3]
						}, player, evt);
					},
					check: function (button) {
						var player = _status.event.player;
						var order = Math.max(0, get.order(card) + 1);
						var enemyNum = game.countPlayer(function (current) {
							return current != player && (get.realAttitude || get.attitude)(current, player) < 0 && current.hp > 0;
						});
						var card = {
							name: button.link[2],
							nature: button.link[3]
						};
						if (player.isDying() && !player.hasCard(function (cardx) {
								// if(get.suit(cardx)!='heart') return false;
								var mod2 = game.checkMod(cardx, player, 'unchanged', 'cardEnabled2', player);
								if (mod2 != 'unchanged') return mod2;
								var mod = game.checkMod(cardx, player, player, 'unchanged', 'cardSavable', player);
								if (mod != 'unchanged') return mod;
								var savable = get.info(cardx).savable;
								if (typeof savable == 'function') savable = savable(card, player, player);
								return savable;
							}, 'hs')) {
							if (!player.getStorage('shenguhuo_cheated').contains(card.name + card.nature) && Math.random() < 0.4) return 1;
							return 0;
						}
						var val = _status.event.getParent().type == 'phase' ? player.getUseValue(card) : 1;
						if (player.getStorage('shenguhuo_cheated').contains(card.name + card.nature) && !player.hasCard(function (cardx) {
								if (card.name == cardx.name) {
									if (card.name != 'sha') return true;
									return get.is.sameNature(card, cardx);
								}
								return false;
							}, 'hs') && Math.random() < 0.7) return 0;
						if (val <= 0) return 0;
						if (enemyNum) {
							if (!player.hasCard(function (cardx) {
									if (card.name == cardx.name) {
										if (card.name != 'sha') return true;
										return get.is.sameNature(card, cardx);
									}
									return false;
								}, 'hs')) {
								if (get.value(card, player, 'raw') < 6) return Math.sqrt(val) * (0.25 + Math.random() / 1.5);
								if (enemyNum <= 2) return Math.sqrt(val) / 1.5 + order * 10;
								return 0;
							}
							return 3 * val + order * 10;
						}
						return val + order * 10;
					},
					backup: function (links, player) {
						return {
							filterCard: function (card, player, target) {
								var result = true;
								var suit = card.suit,
									number = card.number;
								card.suit = 'none';
								card.number = null;
								var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
								if (mod != 'unchanged') result = mod;
								card.suit = suit;
								card.number = number;
								return result;
							},
							selectCard: 1,
							position: 'hs',
							ignoreMod: true,
							aiUse: Math.random(),
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: 'none',
								number: null
							},
							ai1: function (card) {
								var player = _status.event.player;
								var enemyNum = game.countPlayer(function (current) {
									return current != player && (get.realAttitude || get.attitude)(current, player) < 0 && current.hp > 0;
								});
								var cardx = lib.skill.shenguhuo_backup.viewAs;
								if (enemyNum) {
									if (card.name == cardx.name && (card.name != 'sha' || get.is.sameNature(card, cardx)) || player.getStorage('shenguhuo_cheated').contains(card.name + card.nature)) return 8 + Math.random() * 3;
									else if (lib.skill.shenguhuo_backup.aiUse < 0.5 && !player.isDying()) return 0;
								}
								return get.value(cardx) - get.value(card);
							},
							precontent: function () {
								player.logSkill('shenguhuo');
								var card = event.result.cards[0];
								event.result.card.suit = get.suit(card);
								event.result.card.number = get.number(card);
							},
						}
					},
					prompt: function (links, player) {
						return '将一张手牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】' + (_status.event.name == 'chooseToRespond' ? '打出' : '使用');
					},
				},
				ai: {
					save: true,
					respondSha: true,
					respondShan: true,
					fireAttack: true,
					skillTagFilter: function (player) {
						if (!player.countCards('hs')) return false;
					},
					threaten: 1.2,
					order: 10,
					result: {
						player: 1
					},
				},
				subSkill: {
					cheated: {
						trigger: {
							player: 'gainAfter',
							global: 'loseAsyncAfter',
						},
						charlotte: true,
						forced: true,
						silent: true,
						popup: false,
						firstDo: true,
						onremove: true,
						filter: function (event, player) {
							if (event.getParent().name == 'draw') return true;
							var cards = event.getg(player);
							if (!cards.length) return false;
							return game.hasPlayer(current => {
								if (current == player) return false;
								var evt = event.getl(current);
								if (evt && evt.cards && evt.cards.length) return true;
								return false;
							});
						},
						content: function () {
							player.removeSkill('shenguhuo_cheated');
						}
					}
				}
			},
			shenguhuo_guess: {
				audio: 'old_guhuo',
				trigger: {
					player: ['useCardBefore', 'respondBefore'],
				},
				forced: true,
				silent: true,
				popup: false,
				firstDo: true,
				charlotte: true,
				filter: function (event, player) {
					return event.skill && event.skill.indexOf('shenguhuo_') == 0;
				},
				content: function () {
					'step 0'
					event.fake = false;
					event.goon = true;
					event.betrayers = [];
					event.shenguhuoShouldChoose = false;
					var card = trigger.cards[0];
					if (card.name != trigger.card.name || (card.name == 'sha' && get.is.differentNature(trigger.card, card))) event.fake = true;
					if (event.fake) {
						player.addSkill('shenguhuo_cheated');
						player.markAuto('shenguhuo_cheated', [trigger.card.name + trigger.card.nature]);
					}
					player.popup(trigger.card.name, 'metal');
					player.lose(card, ui.ordering).relatedEvent = trigger;
					trigger.throw = false;
					trigger.skill = 'shenguhuo_backup';
					game.log(player, '声明', trigger.targets && trigger.targets.length ? '对' : '', trigger.targets || '', trigger.name == 'useCard' ? '使用' : '打出', trigger.card);
					event.prompt = get.translation(player) + '声明' + (trigger.targets && trigger.targets.length ? '对' + get.translation(trigger.targets) : '') +
						(trigger.name == 'useCard' ? '使用' : '打出') + (get.translation(trigger.card.nature) || '') + get.translation(trigger.card.name) + '，是否质疑？';
					event.targets = game.filterPlayer(i => i != player && i.hp > 0).sortBySeat(_status.currentPhase);

					game.broadcastAll(function (card, player) {
						_status.shenguhuoNode = card.copy('thrown');
						if (lib.config.cardback_style != 'default') {
							_status.shenguhuoNode.style.transitionProperty = 'none';
							ui.refresh(_status.shenguhuoNode);
							_status.shenguhuoNode.classList.add('infohidden');
							ui.refresh(_status.shenguhuoNode);
							_status.shenguhuoNode.style.transitionProperty = '';
						} else {
							_status.shenguhuoNode.classList.add('infohidden');
						}
						_status.shenguhuoNode.style.transform = 'perspective(600px) rotateY(180deg) translateX(0)';
						player.$throwordered2(_status.shenguhuoNode);
					}, trigger.cards[0], player);
					event.onEnd01 = function () {
						_status.shenguhuoNode.removeEventListener('webkitTransitionEnd', _status.event.onEnd01);
						setTimeout(function () {
							_status.shenguhuoNode.style.transition = 'all ease-in 0.3s';
							_status.shenguhuoNode.style.transform = 'perspective(600px) rotateY(270deg)';
							var onEnd = function () {
								_status.shenguhuoNode.classList.remove('infohidden');
								_status.shenguhuoNode.style.transition = 'all 0s';
								ui.refresh(_status.shenguhuoNode);
								_status.shenguhuoNode.style.transform = 'perspective(600px) rotateY(-90deg)';
								ui.refresh(_status.shenguhuoNode);
								_status.shenguhuoNode.style.transition = '';
								ui.refresh(_status.shenguhuoNode);
								_status.shenguhuoNode.style.transform = '';
								_status.shenguhuoNode.removeEventListener('webkitTransitionEnd', onEnd);
							}
							_status.shenguhuoNode.listenTransition(onEnd);
						}, 300);
					};
					if (!event.targets.length) event.goto(3);
					'step 1'
					event.target = event.targets.shift();
					event.target.chooseButton([event.prompt, [
						['reguhuo_ally', 'reguhuo_betray'], 'vcard'
					]], true).set('ai', function (button) {
						var player = _status.event.player;
						var evt = _status.event.getParent('shenguhuo_guess'),
							evtx = evt.getTrigger();
						if (!evt) return Math.random();
						var card = {
							name: evtx.card.name,
							nature: evtx.card.nature,
							isCard: true
						};
						var ally = button.link[2] == 'reguhuo_ally';
						if (ally && (player.hp <= 1 || get.attitude(player, evt.player) >= 0)) return 1.1;
						if (!ally && get.effect(player, {
								name: 'losehp'
							}, player, player) >= 0) return 10;
						if (!ally && get.attitude(player, evt.player) < 0) {
							if (evtx.name == 'useCard') {
								var eff = 0;
								var targetsx = evtx.targets || [];
								for (var target of targetsx) {
									var isMe = target == evt.player;
									eff += get.effect(target, card, evt.player, player) / (isMe ? 1.35 : 1);
								}
								eff /= (1.5 * targetsx.length) || 1;
								if (eff > 0) return 0;
								if (eff < -7) return (Math.random() + Math.pow(-(eff + 7) / 8, 2)) / Math.sqrt(evt.betrayers.length + 1) + (player.hp - 3) * 0.05 + Math.max(0, 4 - evt.player.hp) * 0.05 - (player.hp == 1 && !get.tag(card, 'damage') ? 0.2 : 0);
								return Math.pow((get.value(card, evt.player, 'raw') - 4) / (eff == 0 ? 3.1 : 10), 2) / Math.sqrt(evt.betrayers.length || 1) + (player.hp - 3) * 0.05 + Math.max(0, 4 - evt.player.hp) * 0.05;
							}
							if (evt.player.getStorage('shenguhuo_cheated').contains(card.name + card.nature)) return Math.random() + 0.3;
						}
						return Math.random();
					});
					'step 2'
					if (result.links[0][2] == 'reguhuo_betray') {
						target.addExpose(0.2);
						game.log(target, '#y质疑');
						target.popup('质疑！', 'fire');
						event.betrayers.push(target);
					} else {
						game.log(target, '#g不质疑');
						target.popup('不质疑', 'wood');
					}
					if (targets.length) event.goto(1);
					'step 3'
					game.delayx();
					game.broadcastAll(function (onEnd) {
						_status.event.onEnd01 = onEnd;
						if (_status.shenguhuoNode) _status.shenguhuoNode.listenTransition(onEnd, 300);
					}, event.onEnd01);
					'step 4'
					game.delay(2);
					'step 5'
					if (!event.betrayers.length) {
						event.goto(7);
					}
					'step 6'
					if (event.fake) {
						for (var target of event.betrayers) {
							target.popup('质疑正确', 'wood');
						}
						event.goon = false;
					} else {
						for (var target of event.betrayers) {
							target.popup('质疑错误', 'fire');
							target.loseHp();
						}
						// if(get.suit(trigger.cards[0],player)!='heart'){
						// 	event.goon=false;
						// }
						event.shenguhuoShouldChoose = true;
					}
					'step 7'
					if (!event.goon) {
						game.log(player, '声明的', trigger.card, '作废了');
						trigger.cancel();
						trigger.getParent().goto(0);
						trigger.line = false;
					}
					'step 8'
					game.delay();
					'step 9'
					if (!event.goon) {
						if (event.fake) {
							const drawer = event.betrayers;
							drawer.push(player);
							game.asyncDraw(event.betrayers);
						}
						game.broadcastAll(ui.clear);
						event.shenguhuoShouldChoose = false;
					}
					'step 10'
					if (event.shenguhuoShouldChoose) {
						player.chooseBool('蛊惑：是否作废此牌，然后摸一张牌？').ai = () => {
							return 0;
						}
					}
					'step 11'
					if (result.bool) {
						if (event.shenguhuoShouldChoose) {
							game.log(player, '声明的', trigger.card, '作废了');
							trigger.cancel();
							trigger.getParent().goto(0);
							trigger.line = false;
							player.draw();
							event.shenguhuoShouldChoose = false;
						}
					}
				},
			},
			// 纯狐
			junkochunhua: {
				audio: 2,
				trigger: {
					global: 'damageEnd'
				},
				forced: true,
				logTarget: 'player',
				filter: function (event, player) {
					return event.player != player && event.player.isIn();
				},
				content: function () {
					trigger.player.addMark('junkochunhua', trigger.num, false);
				},
				group: ['junkochunhua_lose'],
				marktext: '秽',
				intro: {
					name: '纯化(秽)',
					name2: '秽',
				},
				subSkill: {
					lose: {
						audio: 'junkochunhua',
						trigger: {
							source: "damageAfter"
						},
						check: function (event, player) {
							var target = _status.event.getTrigger().player
							return get.attitude(player, target) < -2;
						},
						filter: function (event, player) {
							return event.player.hasMark('junkochunhua') && event.player.countMark('junkochunhua') >= event.player.maxHp && event.player.isIn();
						},
						content: function (event, player) {
							trigger.player.loseHp(trigger.player.hp);
						},
					},
				},
			},
			junkokuangqi: {
				audio: 2,
				trigger: {
					player: 'useCard2'
				},
				check: function (event, player) {
					return event.card.name !== 'wuzhong' && event.card.name !== 'tao' && event.card.name !== 'jiu' && event.card.name !== 'wugu' && event.card.name !== 'taoyuan';
				},
				filter: function (event, player) {
					return get.type(event.card) !== 'delay' && get.type(event.card) !== 'equip' && event.card.storage && event.targets.length && game.filterPlayer(current => current != player).length;
				},
				content: function () {
					'step 0'
					var trigger = _status.event.getTrigger();
					trigger.targets.removeArray(trigger.targets);
					var targets = game.filterPlayer(current => current != player);
					if (targets.length) trigger.targets.addArray(targets);
				}
			},
			junkowuming: {
				forced: true,
				mod: {
					suit: function (card) {
						return 'none';
					},
					targetInRange: function (card) {
						if (get.color(card) == 'none') return true;
					},
					targetEnabled: function (card) {
						if (card.cards) {
							for (var i of card.cards) {
								if (get.color(i) !== 'none')
									return false;
							}
						} else if (get.itemtype(card) == 'card') {
							if (get.color(card) !== 'none')
								return false;
						}
					},
				},
			},
			// 会玩的孙权
			huiwan: {
				trigger: {
					player: 'drawBefore'
				},
				frequent: true,
				content: function () {
					'step 0'
					var num = trigger.num;
					var chooseWashAfter = false;
					event.chooseWashAfter = chooseWashAfter;
					if (ui.cardPile.childElementCount === 0) {
						game.washCard();
					}
					var source = ui['cardPile'].childNodes;
					var list = [];
					if (num > source.length) {
						chooseWashAfter = true;
						event.chooseWashAfter = chooseWashAfter;
					}
					for (let i = 0; i < source.length; i++) list.push(source[i]);
					player.chooseButton([`会玩：选择获得${get.cnNumber(num > source.length ? source.length : num)}张牌`, list], [num > source.length ? source.length : num, num], true).set('ai', function (button) {
						var target = player;
						var card = {
							name: button.link[2]
						};
						return get.attitude(_status.event.player, target) * (target.getUseValue(card) - 0.1);
					});
					'step 1'
					if (result.links.length !== 0) {
						player.gain(result.links, 'draw');
					}
					'step 2'
					if (event.chooseWashAfter) {
						game.washCard();
						var num = trigger.num - result.links.length;
						var source = ui['cardPile'].childNodes;
						var list = [];
						for (let i = 0; i < source.length; i++) list.push(source[i]);
						player.chooseButton([`会玩：选择获得${get.cnNumber(num > source.length ? source.length : num)}张牌`, list], [num > source.length ? source.length : num, num], true).set('ai', function (button) {
							var target = player;
							var card = {
								name: button.link[2]
							};
							return get.attitude(_status.event.player, target) * (target.getUseValue(card) - 0.1);
						});
					}
					'step 3'
					if (event.chooseWashAfter) {
						if (result.links.length !== 0) {
							player.gain(result.links, 'draw');
						}
					}
					'step 4'
					trigger.cancel();
				},
			},
			// 超会玩的孙权
			huiwanplus: {
				trigger: {
					global: 'drawBefore'
				},
				forced: true,
				content: function () {
					'step 0'
					var num = trigger.num;
					var chooseWashAfter = false;
					event.chooseWashAfter = chooseWashAfter;
					if (ui.cardPile.childElementCount === 0) {
						game.washCard();
					}
					var source = ui['cardPile'].childNodes;
					var list = [];
					if (num > source.length) {
						chooseWashAfter = true;
						event.chooseWashAfter = chooseWashAfter;
					}
					for (let i = 0; i < source.length; i++) list.push(source[i]);
					player.chooseButton([`超玩：选择令${get.translation(trigger.player)}获得${get.cnNumber(num > source.length ? source.length : num)}张牌`, list], [num > source.length ? source.length : num, num], true).set('ai', function (button) {
						var target = trigger.player;
						var card = {
							name: button.link[2]
						};
						return get.attitude(player, target) * (target.getUseValue(card) - 0.1);
					});
					'step 1'
					if (result.links.length !== 0) {
						trigger.player.gain(result.links, 'draw');
					}
					'step 2'
					if (event.chooseWashAfter) {
						game.washCard();
						var num = trigger.num - result.links.length;
						var source = ui['cardPile'].childNodes;
						var list = [];
						for (let i = 0; i < source.length; i++) list.push(source[i]);
						player.chooseButton([`超玩：选择令${get.translation(trigger.player)}获得${get.cnNumber(num > source.length ? source.length : num)}张牌`, list], [num > source.length ? source.length : num, num], true).set('ai', function (button) {
							var target = trigger.player;
							var card = {
								name: button.link[2]
							};
							return get.attitude(player, target) * (target.getUseValue(card) - 0.1);
						});
					}
					'step 3'
					if (event.chooseWashAfter) {
						if (result.links.length !== 0) {
							trigger.player.gain(result.links, 'draw');
						}
					}
					'step 4'
					trigger.cancel();
				},
				group: 'huiwanplus_judge',
			},
			huiwanplus_judge: {
				trigger: {
					global: 'judgeBefore'
				},
				forced: true,
				priority: 1,
				unique: true,
				content: function () {
					"step 0"
					if (ui.cardPile.childElementCount === 0) {
						game.washCard();
					}
					var source = ui['cardPile'].childNodes;
					event.cards = [];
					for (let i = 0; i < source.length; i++) event.cards.push(source[i]);
					player.chooseCardButton(true, event.cards, '超玩：选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').ai = function (button) {
						if (get.attitude(player, trigger.player) > 0) {
							return 1 + trigger.judge(button.link);
						}
						if (get.attitude(player, trigger.player) < 0) {
							return 1 - trigger.judge(button.link);
						}
						return 0;
					};
					"step 1"
					if (!result.bool) {
						event.finish();
						return;
					}
					player.logSkill('huiwanplus_judge', trigger.player);
					var card = result.links[0];
					event.cards.remove(card);
					var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
					event.videoId = lib.status.videoId++;
					event.dialog = ui.create.dialog(judgestr);
					event.dialog.classList.add('center');
					event.dialog.videoId = event.videoId;

					game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
					// for(var i=0;i<event.cards.length;i++) event.cards[i].discard();
					result.links[0].discard();
					// var node=card.copy('thrown','center',ui.arena).animate('start');
					var node;
					if (game.chess) {
						node = card.copy('thrown', 'center', ui.arena).animate('start');
					} else {
						node = player.$throwordered(card.copy(), true);
					}
					node.classList.add('thrownhighlight');
					ui.arena.classList.add('thrownhighlight');
					if (card) {
						trigger.cancel();
						trigger.result = {
							card: card,
							judge: trigger.judge(card),
							node: node,
							number: get.number(card),
							suit: get.suit(card),
							color: get.color(card),
						};
						if (trigger.result.judge > 0) {
							trigger.result.bool = true;
							trigger.player.popup('洗具');
						}
						if (trigger.result.judge < 0) {
							trigger.result.bool = false;
							trigger.player.popup('杯具');
						}
						game.log(trigger.player, '的判定结果为', card);
						trigger.direct = true;
						trigger.position.appendChild(card);
						game.delay(2);
					} else {
						event.finish();
					}
					"step 2"
					ui.arena.classList.remove('thrownhighlight');
					event.dialog.close();
					game.addVideo('judge2', null, event.videoId);
					ui.clear();
					var card = trigger.result.card;
					trigger.position.appendChild(card);
					trigger.result.node.delete();
					game.delay();
				},
			},
			// 最强神话
			taffyboss_baonuwash: {
				trigger: {
					player: 'phaseAfter'
				},
				forced: true,
				content: function () {
					game.over(game.me == game.boss);
				},
				temp: true,
			},
			taffyboss_baonu: {
				unique: true,
				trigger: {
					player: 'changeHp',
					global: 'boss_baonuwash'
				},
				forced: true,
				priority: 100,
				fixed: true,
				audio: 'shenji',
				// mode:['identity','guozhan','boss','stone'],
				init: function (player) {
					if (get.mode() == 'boss' && player == game.boss) {
						lib.onwash.push(function () {
							if (!_status.boss_baonuwash) {
								_status.boss_baonuwash = true;
								_status.event.parent.trigger('taffyboss_baonuwash');
							} else {
								_status.event.player.addSkill('taffyboss_baonuwash');
							}
						});
						for (var i in lib.card) {
							if (lib.card[i].subtype == 'equip1') lib.card[i].recastable = true;
						}
					}
				},
				filter: function (event, player) {
					let isBoss = false;
					let list = Object.keys(lib.character);
					console.log(list);
					if (list.includes("boss_lvbu3")) {
						isBoss = true;
					}
					return (player.hp <= 4 || _status.taffyboss_baonuwash) && isBoss;
				},
				content: function () {
					'step 0'
					if (player.hp > 6) {
						game.delay();
					}
					'step 1'
					player.chooseControl('暴怒战神', '神鬼无前', function () {
						if (Math.random() < 0.5) return '神鬼无前';
						return '暴怒战神';
					}).set('prompt', '选择一个形态');
					'step 2'
					var hp = player.hp;
					player.removeSkill('boss_baonu', true);
					if (result.control == '暴怒战神') {
						player.uninit();
						player.init('boss_lvbu2');
					} else {
						player.uninit();
						player.init('boss_lvbu3');
					}
					if (hp > 6) {
						player.maxHp = hp;
						player.hp = hp;
					}
					player.update();
					ui.clear();
					if (player.isLinked()) player.link();
					if (player.isTurnedOver()) player.turnOver();
					player.discard(player.getCards('j'));
					'step 3'
					while (_status.event.name != 'phaseLoop') {
						_status.event = _status.event.parent;
					}
					game.resetSkills();
					_status.paused = false;
					_status.event.player = player;
					_status.event.step = 0;
					if (game.bossinfo) {
						game.bossinfo.loopType = 1;
						_status.roundStart = game.boss;
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage') || get.tag(card, 'loseHp')) {
								if (player.hp == 5) {
									if (game.players.length < 4) return [0, 5];
									var num = 0
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i] != game.boss && game.players[i].hp == 1) {
											num++;
										}
									}
									if (num > 1) return [0, 2];
									if (num && Math.random() < 0.7) return [0, 1];
								}
							}
						}
					}
				}
			},
			taffyboss_jingjia: {
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter: function (event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0);
				},
				content: function () {
					'step 0'
					lib.inpile.addArray(['wushuangfangtianji', 'shufazijinguan', 'hongmianbaihuapao', 'linglongshimandai', 'lianjunshengyan']);
					ui.cardPile.insertBefore(game.createCard2('linglongshimandai', 'club', 2), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('linglongshimandai', 'spade', 2), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('hongmianbaihuapao', 'club', 2), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('hongmianbaihuapao', 'spade', 2), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('wushuangfangtianji', 'diamond', 12), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('shufazijinguan', 'diamond', 5), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('lianjunshengyan', 'heart', 1), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('lianjunshengyan', 'heart', 3), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					ui.cardPile.insertBefore(game.createCard2('lianjunshengyan', 'heart', 4), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					var next = game.createEvent('taffyboss_jingjia_equip');
					next.player = game.boss || player;
					next.setContent(function () {
						'step 0'
						event.cards = 6;
						console.log(cards);
						if (event.cards === 0) {
							event.finish();
							return;
						}
						player.logSkill('taffyboss_jingjia_equip');
						event.num = 1.5;
						'step 1'
						var card = get.cardPile2(function (card) {
							if (card.name == 'linglongshimandai') {
								return true;
							} else if (card.name == 'hongmianbaihuapao') {
								return true;
							} else if (card.name == 'wushuangfangtianji') {
								return true;
							} else if (card.name == 'shufazijinguan') {
								return true;
							}
						});
						event.cards--;
						if (player.canEquip(card) && Math.random() < event.num) {
							player.equip(card);
							event.num = 0.5;
						}
						if (event.cards !== 0) event.redo();
					});
				},
			},
			// 欢杀神司马懿
			babyrenjie: {
				audio: 'renjie2',
				trigger: {
					player: ['damageEnd', 'loseAfter'],
					global: 'loseAsyncAfter',
				},
				forced: true,
				group: 'babyrenjie_begin',
				filter: function (event, player) {
					if (event.name == 'damage') return event.num > 0;
					if (event.type != 'discard' || event.getlx === false) return false;
					var evt = event.getParent('phaseDiscard'),
						evt2 = event.getl(player);
					return evt && evt2 && evt.name == 'phaseDiscard' && evt.player == player && evt2.cards2 && evt2.cards2.length > 0;
				},
				content: function () {
					player.addMark('babyrenjie', trigger.name == 'damage' ? trigger.num : trigger.getl(player).cards2.length);
				},
				intro: {
					name2: '忍',
					content: "mark",
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					combo: "babyjilue",
				},
				subSkill: {
					begin: {
						trigger: {
							global: 'phaseBefore',
							player: 'enterGame'
						},
						forced: true,
						filter: function (event, player) {
							return (event.name != 'phase' || game.phaseNumber == 0);
						},
						audio: 'babyjilue',
						forced: true,
						unique: true,
						content: function () {
							player.addMark('babyrenjie', 1);
						},
					},
				},
			},
			babyjilue: {
				audio: 'sbaiyin',
				group: ["babyjilue_guicai", "babyjilue_fangzhu", "babyjilue_wansha", "babyjilue_jizhi", 'babyjilue_draw'],
				derivation: ['babyjilue_guicai', 'babyjilue_fangzhu', 'babyjilue_jizhi', 'babyjilue_wansha'],
				subfrequent: ['draw'],
				subSkill: {
					guicai: {
						audio: 'jilue_guicai',
						trigger: {
							global: "judge",
						},
						direct: true,
						filter: function (event, player) {
							return player.countCards('he') > 0 && player.hasMark('babyrenjie');
						},
						content: function () {
							"step 0"
							player.chooseCard('是否弃置一枚“忍”，并发动〖鬼才〗？', get.skillInfoTranslation('babyjilue_guicai'), 'he', function (card) {
								var player = _status.event.player;
								var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
								if (mod2 != 'unchanged') return mod2;
								var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
								if (mod != 'unchanged') return mod;
								return true;
							}).ai = function (card) {
								var trigger = _status.event.parent._trigger;
								var player = _status.event.player;
								var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
								var attitude = get.attitude(player, trigger.player);
								if (attitude == 0 || result == 0) return 0;
								if (attitude > 0) {
									return result - get.value(card) / 2;
								} else {
									return -result - get.value(card) / 2;
								}
							};
							"step 1"
							if (result.bool) {
								player.respond(result.cards, 'highlight', 'babyjilue_guicai', 'noOrdering');
							} else {
								event.finish();
							}
							"step 2"
							if (result.bool) {
								var card = result.cards[0];
								player.removeMark('babyrenjie', 1);
								if (trigger.player.judging[0].clone) {
									trigger.player.judging[0].clone.delete();
									game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
								}
								game.cardsDiscard(trigger.player.judging[0]);
								if (get.suit(card) == 'heart') {
									player.recover();
								} else if (get.suit(card) == 'club') {
									player.draw(2, 'nodelay');
								}
								trigger.player.judging[0] = card;
								trigger.orderingCards.addArray(result.cards);
								game.log(trigger.player, '的判定牌改为', card);
							}
							"step 3"
							game.delay(2);
						},
						ai: {
							rejudge: true,
							tag: {
								rejudge: 1,
							},
						},
					},
					fangzhu: {
						audio: 'jilue_fangzhu',
						trigger: {
							player: 'damageEnd'
						},
						direct: true,
						filter: function (event, player) {
							return player.hasMark('babyrenjie');
						},
						content: function () {
							"step 0"
							player.chooseTarget('是否弃置一枚“忍”，并发动【放逐】？', get.skillInfoTranslation('babyjilue_fangzhu'), function (card, player, target) {
								return player != target
							}).ai = function (target) {
								if (target.hasSkillTag('noturn')) return 0;
								if (target.isTurnedOver()) {
									return get.attitude(player, target) - 1;
								}
								return -get.attitude(player, target) - 1;
							}
							"step 1"
							if (result.bool) {
								player.removeMark('babyrenjie', 1);
								player.logSkill('babyjilue_fangzhu', result.targets);
								result.targets[0].draw();
								result.targets[0].turnOver();
							}
						},
						ai: {
							maixie: true,
							maixie_hp: true,
							effect: {
								target: function (card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (target.hp <= 1) return;
										if (!target.hasFriend()) return;
										var hastarget = false;
										var turnfriend = false;
										var players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
												hastarget = true;
											}
											if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
												hastarget = true;
												turnfriend = true;
											}
										}
										if (get.attitude(player, target) > 0 && !hastarget) return;
										if (turnfriend) return [0.5, 1];
										if (target.hp > 1) return [1, 1];
									}
								}
							}
						}
					},
					wansha: {
						audio: 'jilue_wansha',
						global: 'babyjilue_wansha_global',
						trigger: {
							global: 'dyingBegin'
						},
						// logTarget: 'player',
						prompt: '是否弃一枚“忍”，本回合获得【完杀】？',
						prompt2: () => get.skillInfoTranslation('babyjilue_wansha'),
						filter: function (event, player) {
							if (!player.hasMark('babyrenjie')) return false;
							if (player.hasSkill('babyjilue_wansha_clear')) return false;
							return player == _status.currentPhase;
						},
						content: function () {
							player.removeMark('babyrenjie', 1);
							player.addTempSkill('babyjilue_wansha_clear');
						},
					},
					wansha_global: {
						mod: {
							cardEnabled: function (card, player) {
								var source = _status.currentPhase;
								if (card.name == 'tao' && source && source != player && source.hasSkill('babyjilue_wansha_clear')) return false;
							},
							cardSavable: function (card, player) {
								var source = _status.currentPhase;
								if (card.name == 'tao' && source && source != player && source.hasSkill('babyjilue_wansha_clear')) return false;
							},
						},
					},
					wansha_clear: {
						charlotte: true,
					},
					jizhi: {
						audio: 'jilue_zhiheng',
						trigger: {
							player: "useCard",
						},
						prompt: '是否弃一枚“忍”，发动【集智】？',
						prompt2: () => get.skillInfoTranslation('babyjilue_jizhi'),
						filter: function (event, player) {
							return (get.type(event.card) == 'trick' && player.hasMark('babyrenjie'));
						},
						content: function () {
							'step 0'
							player.removeMark('babyrenjie', 1);
							player.draw();
							'step 1'
							var cards = result;
							if (get.itemtype(cards) != 'cards') {
								event.finish();
								return;
							}
							var type = get.type2(cards[0]);
							switch (type) {
								case 'basic':
									player.addTempSkill('babyjilue_limit');
									player.addMark('babyjilue_limit', 1, false);
									event.finish();
									break;
								case 'trick':
									player.addTempSkill('babyjilue_sha');
									player.addMark('babyjilue_sha', 1, false);
									event.finish();
									break;
								case 'equip':
									event.card = cards[0];
									break;
								default:
									event.finish();
							}
							'step 2'
							player.chooseTarget('集智：是否将' + get.translation(card) + '置入一名其他角色的装备区？', (card, player, target) => {
								if (player == target) return false;
								var card = _status.event.card;
								return target.isEmpty(get.subtype(card));
							}).set('ai', target => {
								return get.effect(target, _status.event.card, _status.event.player, _status.event.player);
							}).set('card', card);
							'step 3'
							if (result.bool) {
								var target = result.targets[0];
								player.$give(card, target, false);
								game.delayx();
								target.equip(card);
							}
						},
						ai: {
							threaten: 1.4,
							noautowuxie: true,
						},
					},
					limit: {
						marktext: '智',
						charlotte: true,
						intro: {
							name: '集智',
							content: '手牌上限+#'
						},
						onremove: true,
						mod: {
							maxHandcard: function (player, num) {
								return num + player.countMark('babyjilue_limit');
							},
						}
					},
					sha: {
						marktext: '智',
						charlotte: true,
						intro: {
							name: '集智',
							content: '使用【杀】的次数上限+#'
						},
						onremove: true,
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == 'sha') return num + player.countMark('babyjilue_sha');
							},
						}
					},
					draw: {
						trigger: {
							player: 'logSkill',
						},
						frequent: true,
						prompt2: '当你每回合首次发动〖极略〗后，可摸一张牌',
						filter: function (event, player) {
							return event.skill.indexOf('babyjilue_') == 0 && player.getHistory('useSkill', evt => evt.skill.indexOf('babyjilue_') == 0).length == 1;
						},
						content: function () {
							player.draw();
						}
					}
				}
			},
			babylianpo: {
				audio: 'lianpo',
				trigger: {
					global: "phaseAfter",
				},
				frequent: true,
				filter: function (event, player) {
					return player.getStat('kill') > 0;
				},
				content: function () {
					player.insertPhase();
				},
			},
			shenmiewu: {
				audio: 'spmiewu',
				enable: ['chooseToUse', 'chooseToRespond'],
				group: 'shenmiewu_shenpkmiewu',
				filter: function (event, player) {
					if (!player.countCards('hse') || player.hasSkill('shenmiewu2')) return false;
					for (var i of lib.inpile) {
						var type = get.type2(i);
						if ((type == 'basic' || type == 'trick') && event.filterCard({
								name: i
							}, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == 'sha') {
								if (event.filterCard({
										name: name
									}, player, event)) list.push(['基本', '', 'sha']);
								for (var j of lib.inpile_nature) {
									if (event.filterCard({
											name: name,
											nature: j
										}, player, event)) list.push(['基本', '', 'sha', j]);
								}
							} else if (get.type2(name) == 'trick' && event.filterCard({
									name: name
								}, player, event)) list.push(['锦囊', '', name]);
							else if (get.type(name) == 'basic' && event.filterCard({
									name: name
								}, player, event)) list.push(['基本', '', name]);
						}
						return ui.create.dialog('灭吴', [list, 'vcard']);
					},
					filter: function (button, player) {
						return _status.event.getParent().filterCard({
							name: button.link[2]
						}, player, _status.event.getParent());
					},
					check: function (button) {
						if (_status.event.getParent().type != 'phase') return 1;
						var player = _status.event.player;
						if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].contains(button.link[2])) return 0;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup: function (links, player) {
						return {
							filterCard: true,
							audio: 'shenmiewu',
							popname: true,
							check: function (card) {
								return 8 - get.value(card);
							},
							position: 'hse',
							viewAs: {
								name: links[0][2],
								nature: links[0][3]
							},
							precontent: function () {
								player.addTempSkill('shenmiewu2');
							},
						}
					},
					prompt: function (links, player) {
						return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
					}
				},
				hiddenCard: function (player, name) {
					if (!lib.inpile.contains(name)) return false;
					var type = get.type2(name);
					return (type == 'basic' || type == 'trick') && player.countCards('she') > 0 && !player.hasSkill('shenmiewu2');
				},
				ai: {
					fireAttack: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player) {
						if (!player.countCards('hse') || player.hasSkill('shenmiewu2')) return false;
					},
					order: 1,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
				subSkill: {
					shenpkmiewu: {
						audio: 'spmiewu',
						enable: ['chooseToUse', 'chooseToRespond'],
						filter: function (event, player) {
							if (player.hasSkill('shenmiewu2') || !!player.countCards('hse')) return false;
							for (var i of lib.inpile) {
								var type = get.type(i);
								if ((type == 'basic' || type == 'trick') && event.filterCard({
										name: i
									}, player, event)) return true;
							}
							return false;
						},
						chooseButton: {
							dialog: function (event, player) {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									if (name == 'sha') {
										if (event.filterCard({
												name: name
											}, player, event)) list.push(['基本', '', 'sha']);
										for (var j of lib.inpile_nature) {
											if (event.filterCard({
													name: name,
													nature: j
												}, player, event)) list.push(['基本', '', 'sha', j]);
										}
									} else if (get.type(name) == 'trick' && event.filterCard({
											name: name
										}, player, event)) list.push(['锦囊', '', name]);
									else if (get.type(name) == 'basic' && event.filterCard({
											name: name
										}, player, event)) list.push(['基本', '', name]);
								}
								return ui.create.dialog('灭吴', [list, 'vcard']);
							},
							filter: function (button, player) {
								return _status.event.getParent().filterCard({
									name: button.link[2]
								}, player, _status.event.getParent());
							},
							check: function (button) {
								if (_status.event.getParent().type != 'phase') return 1;
								var player = _status.event.player;
								if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].contains(button.link[2])) return 0;
								return player.getUseValue({
									name: button.link[2],
									nature: button.link[3],
								});
							},
							backup: function (links, player) {
								return {
									audio: 'spmiewu',
									filterCard: () => false,
									selectCard: -1,
									popname: true,
									viewAs: {
										name: links[0][2],
										nature: links[0][3]
									},
									precontent: function () {
										player.addTempSkill('shenmiewu2');
									},
								}
							},
							prompt: function (links, player) {
								return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '并摸一张牌';
							}
						},
						hiddenCard: function (player, name) {
							if (!lib.inpile.contains(name)) return false;
							var type = get.type(name);
							return (type == 'basic' || type == 'trick') && player.countCards('she') === 0 && !player.hasSkill('shenmiewu2');
						},
						ai: {
							fireAttack: true,
							respondSha: true,
							respondShan: true,
							skillTagFilter: function (player) {
								if (!!player.countCards('hse') || player.hasSkill('shenmiewu2')) return false;
							},
							order: 1,
							result: {
								player: function (player) {
									if (_status.event.dying) return get.attitude(player, _status.event.dying);
									return 1;
								},
							},
						},
					},
				}
			},
			shenmiewu2: {
				trigger: {
					player: ['useCardAfter', 'respondAfter']
				},
				forced: true,
				charlotte: true,
				popup: false,
				filter: function (event, player) {
					return event.skill == 'shenmiewu_backup' || event.skill == 'shenmiewu_shenpkmiewu_backup';
				},
				content: function () {
					player.draw();
				},
			},
			shenmiewu_backup: {
				audio: 'shenmiewu'
			},
			//神陈珪
			shendcyingtu: {
				audio: 'dcyingtu',
				trigger: {
					global: ['gainAfter', 'loseAsyncAfter'],
				},
				usable: 1,
				filter: function (event, player) {
					var evt = event.getParent('phaseDraw');
					if (event.player == player) return false;
					if (evt && event.player == evt.player) return false;
					return event.getg(event.player).length > 0 && event.player.hasCard(function (card) {
						return lib.filter.canBeGained(card, event.player, player)
					}, 'he');
				},
				logTarget: 'player',
				direct: true,
				checkx: function (player, source) {
					return Math.min(0, get.attitude(player, source)) >= get.attitude(player, source);
				},
				content: function () {
					'step 0'
					player.chooseBool(
						get.prompt('shendcyingtu', trigger.player),
						'获得该角色的一张牌，然后将一张牌交给一名其他角色。若你给出的是装备牌，则其使用其得到的牌。'
					).set('goon', lib.skill.shendcyingtu.checkx(player, trigger.player)).set('ai', function () {
						return _status.event.goon;
					});
					'step 1'
					if (result.bool) {
						player.logSkill('shendcyingtu', trigger.player);
						var next = game.createEvent('shendcyingtu_insert');
						next.player = player;
						next.target = trigger.player;
						next.setContent(lib.skill.shendcyingtu.contentx);
						event.finish();
					} else if (targets?.length > 0) event.goto(1);
					else player.storage.counttrigger.shendcyingtu--;
				},
				contentx: function () {
					'step 0'
					player.gainPlayerCard(target, true, 'he');
					player.chooseCardTarget({
						prompt: '请选择要交出的牌和目标',
						prompt2: '将一张牌交给一名其他角色，若你给出的是装备牌，则其使用其得到的牌',
						position: 'he',
						filterCard: true,
						forced: true,
						filterTarget: lib.filter.notMe,
						ai1: function (card) {
							if (!game.hasPlayer(function (current) {
									return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
								})) return 0;
							return 1 / Math.max(0.1, get.value(card));
						},
						ai2: function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.hasSkillTag('nogain')) att /= 9;
							return 4 + att;
						},
					});
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						var card = result.cards[0];
						event.target = target;
						event.card = card;
						player.line(target);
						player.give(card, target);
					} else event.finish();
					'step 2'
					if (target.getCards('h').contains(card) && get.type(card, null, target) == 'equip' && target.canUse(card, target)) target.chooseUseTarget(card, true, 'nopopup');
				},
			},
			shendccongshi: {
				audio: 'dccongshi',
				trigger: {
					global: 'useCardAfter'
				},
				forced: true,
				locked: false,
				filter: function (event, player) {
					return get.type(event.card, null, false) == 'equip';
				},
				content: function () {
					player.draw();
				},
			},
			// 线下起南华老仙
			taffyjsrgshoushu: {
				audio: 'jsrgshoushu',
				forced: true,
				trigger: {
					global: 'roundStart'
				},
				filter: function (event, player) {
					if (game.hasPlayer(function (current) {
							return current.countCards('hej', 'taipingyaoshu');
						})) return false;
					return true;
				},
				direct: true,
				group: 'jsrgshoushu_destroy',
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt('jsrgshoushu'), '将【太平要术】置入一名角色的装备区', (card, player, target) => {
						var card = {
							name: 'taipingyaoshu'
						};
						return target.canEquip(card, true);
					}).set('ai', target => {
						return target.getUseValue({
							name: 'taipingyaoshu'
						}) * get.attitude(_status.event.player, target);
					})
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill('jsrgshoushu', target);
						if (!lib.inpile.contains('taipingyaoshu')) {
							lib.inpile.push('taipingyaoshu');
						}
						event.card = game.createCard2('taipingyaoshu', 'heart', 3);
					} else event.finish();
					'step 2'
					if (card) target.equip(card);
				},
				subSkill: {
					destroy: {
						audio: 'jsrgshoushu',
						trigger: {
							global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd'],
						},
						forced: true,
						filter: function (event, player) {
							return game.hasPlayer(current => {
								var evt = event.getl(current);
								if (evt && evt.es) return evt.es.some(i => i.name == 'taipingyaoshu');
								return false;
							});
						},
						content: function () {
							var cards = [];
							game.countPlayer(current => {
								var evt = trigger.getl(current);
								if (evt && evt.es) return cards.addArray(evt.es.filter(i => i.name == 'taipingyaoshu'));
							});
							game.cardsGotoSpecial(cards);
							game.log(cards, '被销毁了');
						}
					}
				}
			},
			//旧OL芮姬
			oldqiaoli: {
				audio: 'qiaoli',
				enable: 'chooseToUse',
				viewAs: {
					name: 'juedou'
				},
				viewAsFilter: function (player) {
					return player.hasCard(function (card) {
						return get.type(card) == 'equip';
					}, 'ehs')
				},
				filterCard: {
					type: 'equip'
				},
				check: function (card) {
					if (get.position(card) == 'e') return 7.5 - get.value(card);
					return 12 - _status.event.player.getUseValue(card);
				},
				position: 'hes',
				group: ['oldqiaoli_effect', 'oldqiaoli_gain', 'oldqiaoli_norespond'],
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						return arg && arg.card && arg.card.name == 'juedou' && _status.event.skill == 'oldqiaoli';
					},
				},
				subSkill: {
					norespond: {
						trigger: {
							player: 'useCard1'
						},
						forced: true,
						charlotte: true,
						popup: false,
						filter: function (event, player) {
							if (event.skill != 'oldqiaoli') return false;
							var card = event.cards[0];
							return get.subtype(card) != 'equip1';
						},
						content: function () {
							trigger.directHit.addArray(game.filterPlayer(function (current) {
								return current != player;
							}));
						},
					},
					effect: {
						trigger: {
							player: 'useCardAfter'
						},
						forced: true,
						charlotte: true,
						popup: false,
						filter: function (event, player) {
							if (event.skill != 'oldqiaoli') return false;
							var card = event.cards[0];
							return get.subtype(card) == 'equip1';
						},
						content: function () {
							'step 0'
							var card = trigger.cards[0];
							var num = 1;
							var info = get.info(card, false);
							if (info && info.distance && typeof info.distance.attackFrom == 'number') num -= info.distance.attackFrom;
							player.draw(num);
							'step 1'
							var cards = result;
							if (get.itemtype(cards) != 'cards') {
								event.finish(5);
								return;
							}
							var hs = player.getCards('h');
							cards = cards.filter(function (card) {
								return hs.contains(card);
							});
							if (!cards.length) {
								event.finish(5);
								return;
							}
							event.cards = cards;
							if (_status.connectMode) game.broadcastAll(function () {
								_status.noclearcountdown = true
							});
							event.given_map = {};
							'step 2'
							player.chooseCardTarget({
								filterCard: function (card) {
									return _status.event.cards.contains(card) && !card.hasGaintag('oldqiaoli_given');
								},
								cards: cards,
								filterTarget: lib.filter.notMe,
								selectCard: [1, cards.length],
								prompt: '是否将得到的牌分配给其他角色？',
								ai1: function (card) {
									return -1;
								},
								ai2: function (target) {
									return -1;
								},
							});
							'step 3'
							if (result.bool) {
								var res = result.cards,
									target = result.targets[0].playerid;
								player.addGaintag(res, 'oldqiaoli_given');
								cards.removeArray(res);
								if (!event.given_map[target]) event.given_map[target] = [];
								event.given_map[target].addArray(res);
								if (cards.length) event.goto(2);
							}
							'step 4'
							if (_status.connectMode) {
								game.broadcastAll(function () {
									delete _status.noclearcountdown;
									game.stopCountChoose()
								});
							}
							var map = [],
								cards = [];
							for (var i in event.given_map) {
								var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
								player.line(source, 'green');
								map.push([source, event.given_map[i]]);
								cards.addArray(event.given_map[i]);
							}
							if (map.length) game.loseAsync({
								gain_list: map,
								player: player,
								cards: cards,
								giver: player,
								animate: 'giveAuto',
							}).setContent('gaincardMultiple');
						},
					},
					gain: {
						audio: 'qiaoli',
						trigger: {
							player: 'phaseJieshuBegin'
						},
						forced: true,
						filter: function (event, player) {
							return player.hasHistory('useCard', function (evt) {
								return evt.skill == 'oldqiaoli';
							})
						},
						content: function () {
							var card = get.cardPile2(function (card) {
								return get.type(card) == 'equip';
							});
							if (card) player.gain(card, 'gain2');
						},
					},
				},
			},
			oldqingliang: {
				audio: 'qingliang',
				trigger: {
					target: 'useCardToTarget'
				},
				usable: 1,
				filter: function (event, player) {
					return player != event.player && player.countCards('h') > 0;
				},
				logTarget: 'player',
				check: function (event, player) {
					if (get.attitude(player, event.player) > 0 || event.player.hasSkillTag('nogain')) return true;
					var eff = get.effect(player, event.card, event.player, player);
					if (eff >= 0) return false;
					var suits = [],
						banned = [],
						hs = player.getCards('h');
					for (var i of hs) {
						var suit = get.suit(i, player);
						suits.add(suit);
						if (!lib.filter.cardDiscardable(i, player, 'oldqingliang')) banned.add(suit);
					}
					suits.removeArray(banned);
					for (var i of suits) {
						var cards = player.getCards('h', function (card) {
							return get.suit(card, player) == i;
						});
						if ((-eff / 2 - get.value(cards, player)) > 0) return true;
					}
					return false;
				},
				content: function () {
					'step 0'
					player.showHandcards(get.translation(player) + '发动了【清靓】');
					'step 1'
					var suits = [],
						banned = [],
						hs = player.getCards('h');
					for (var i of hs) {
						var suit = get.suit(i, player);
						suits.add(suit);
						if (!lib.filter.cardDiscardable(i, player, 'oldqingliang')) banned.add(suit);
					}
					if (suits.length > banned.length) {
						player.chooseControl().set('choiceList', [
							'和' + get.translation(trigger.player) + '各摸一张牌',
							'弃置一种花色的所有手牌，令' + get.translation(trigger.card) + '对自己无效',
						]).set('ai', function () {
							var player = _status.event.player,
								event = _status.event.getTrigger();
							if (get.attitude(player, event.player) > 0 || event.player.hasSkillTag('nogain')) return 0;
							return 1;
						});
						event.suits = suits;
						suits.removeArray(banned);
						suits.sort();
					} else {
						event._result = {
							index: 0
						};
					}
					'step 2'
					if (result.index == 0) {
						var list = [player, trigger.player].sortBySeat();
						list[0].draw('nodelay');
						list[1].draw();
						event.finish();
					} else {
						if (event.suits.length == 1) event._result = {
							control: event.suits[0]
						};
						else player.chooseControl(event.suits).set('prompt', '选择弃置一种花色的所有牌').set('ai', function () {
							var player = _status.event.player,
								list = _status.event.controls.slice(0);
							var gett = function (suit) {
								var cards = player.getCards('h', function (card) {
									return get.suit(card, player) == suit;
								});
								return get.value(cards);
							}
							return list.sort(function (b, a) {
								return gett(b) - gett(a);
							})[0];
						});
					}
					'step 3'
					var cards = player.getCards('h', function (card) {
						return get.suit(card) == result.control;
					});
					if (cards.length) player.discard(cards);
					trigger.targets.remove(player);
					trigger.getParent().triggeredTargets2.remove(player);
					trigger.untrigger();
				},
			},
			//旧OL滕芳兰
			oldluochong: {
				audio: 'luochong',
				trigger: {
					player: ['phaseZhunbeiBegin', 'damageEnd']
				},
				direct: true,
				filter: function (event, player) {
					var storage1 = player.getStorage('oldluochong_round'),
						storage2 = player.getStorage('oldluochong');
					for (var i = 0; i < 4; i++) {
						if (!storage1.contains(i) && !storage2.contains(i) && (i != 2 || game.hasPlayer(function (current) {
								return current != player && current.hasCard(function (card) {
									return lib.filter.canBeDiscarded(card, player, current);
								}, 'he')
							}))) return true;
					}
					return false;
				},
				onremove: true,
				content: function () {
					'step 0'
					var list = [];
					var choiceList = [
						'令一名角色回复1点体力。',
						'令一名其他角色失去1点体力。',
						'弃置一名其他角色的至多两张牌。',
						'令一名角色摸两张牌。',
					];
					var storage1 = player.getStorage('oldluochong_round'),
						storage2 = player.getStorage('oldluochong');
					for (var i = 0; i < 4; i++) {
						if (storage2.contains(i)) {
							choiceList[i] = ('<span style="text-decoration: line-through; opacity:0.5; ">' + choiceList[i] + '</span>');
						} else if (storage1.contains(i) || (i == 2 && !game.hasPlayer(function (current) {
								return current != player && current.hasCard(function (card) {
									return lib.filter.canBeDiscarded(card, player, current);
								}, 'he')
							}))) {
							choiceList[i] = ('<span style="opacity:0.5;">' + choiceList[i] + '</span>');
						} else list.push('选项' + get.cnNumber(i + 1, true))
					}
					list.push('cancel2');
					player.chooseControl(list).set('prompt', get.prompt('oldluochong')).set('choiceList', choiceList).set('ai', function () {
						var player = _status.event.player;
						var list = _status.event.controls.slice(0);
						var gett = function (choice) {
							if (choice == 'cancel2') return 0.1;
							var max = 0,
								func = {
									选项一: function (current) {
										if (current.isDamaged()) max = Math.max(max, get.recoverEffect(current, player, player));
									},
									选项二: function (target) {
										max = Math.max(max, get.effect(target, {
											name: 'losehp'
										}, player, player));
									},
									选项三: function (target) {
										var num = target.countDiscardableCards(player, 'he');
										if (num > 0) max = Math.max(max, Math.sqrt(Math.min(2, num)) * get.effect(target, {
											name: 'guohe_copy2'
										}, player, player));
									},
									选项四: function (target) {
										max = Math.max(max, get.effect(target, {
											name: 'wuzhong'
										}, player, player));
									},
								} [choice];
							game.countPlayer(func);
							return max;
						};
						return list.sort(function (a, b) {
							return gett(b) - gett(a);
						})[0];
					});
					'step 1'
					if (result.control != 'cancel2') {
						var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
						event.index = index;
						var list = [
							['选择一名角色，令其回复1点体力', function (target) {
								var player = _status.event.player;
								return get.recoverEffect(target, player, player);
							}],
							['选择一名其他角色，令其失去1点体力', function (target) {
								return get.effect(target, {
									name: 'losehp'
								}, player, player);
							}, lib.filter.notMe],
							['选择一名其他角色，弃置其至多两张牌', function (target) {
								var player = _status.event.player;
								return get.effect(target, {
									name: 'guohe_copy2'
								}, player, player) * Math.sqrt(Math.min(2, target.countCards('he')));
							}, function (card, player, target) {
								return target != player && target.hasCard(function (card) {
									return lib.filter.canBeDiscarded(card, player, target);
								}, 'he');
							}],
							['选择一名角色，令其摸两张牌', function (target) {
								var player = _status.event.player;
								return get.effect(target, {
									name: 'wuzhong'
								}, player, player);
							}]
						][index];
						var next = player.chooseTarget(list[0], true);
						next.set('ai', list[1]);
						if (list.length > 2) next.set('filterTarget', list[2]);
					} else event.finish();
					'step 2'
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill('oldluochong', target);
						if (player != target) player.addExpose(0.2);
						player.addTempSkill('oldluochong_round', 'roundStart');
						player.markAuto('oldluochong_round', [event.index]);
						switch (event.index) {
							case 0:
								target.recover();
								break;
							case 1:
								target.loseHp();
								break;
							case 2:
								player.discardPlayerCard(target, true, 'he', [1, 2]);
								break;
							case 3:
								target.draw(2);
								break;
						}
					}
				},
				subSkill: {
					round: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			oldaichen: {
				audio: 'aichen',
				trigger: {
					player: 'dying'
				},
				forced: true,
				filter: function (event, player) {
					return player.hasSkill('oldluochong', null, null, false) && player.getStorage('oldluochong').length < 3;
				},
				content: function () {
					'step 0'
					var num = 1 - player.hp;
					if (num > 0) player.recover(num);
					'step 1'
					var list = [];
					var choiceList = [
						'令一名角色回复1点体力。',
						'令一名其他角色失去1点体力。',
						'弃置一名其他角色的至多两张牌。',
						'令一名角色摸两张牌。',
					];
					var storage2 = player.getStorage('oldluochong');
					for (var i = 0; i < 4; i++) {
						if (storage2.contains(i)) {
							choiceList[i] = ('<span style="text-decoration: line-through; opacity:0.5; ">' + choiceList[i] + '</span>');
						} else list.push('选项' + get.cnNumber(i + 1, true))
					}
					player.chooseControl(list).set('prompt', '哀尘：选择移去一个〖落宠〗的选项').set('choiceList', choiceList).set('ai', function () {
						var controls = _status.event.controls.slice(0);
						var list = ['选项三', '选项四', '选项二', '选项一'];
						for (var i of list) {
							if (controls.contains(i)) return i;
						}
						return 0;
					});
					'step 2'
					var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
					player.markAuto('oldluochong', [index]);
					game.log(player, '移去了', '#g【落宠】', '的', '#y' + [
						'令一名角色回复1点体力。',
						'令一名其他角色失去1点体力。',
						'弃置一名其他角色的至多两张牌。',
						'令一名角色摸两张牌。',
					][index], '的选项');
				},
			},
		},
		card: {},
		characterIntro: {
			shenxushao: '许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
			shiguanning: '管宁（158年—241年），字幼安。北海郡朱虚县（今山东省安丘、临朐东南）人。汉末三国时期著名隐士。管宁与华歆、邴原并称为“一龙”。汉末天下大乱时，与邴原及王烈等人避于辽。在当地只谈经典而不问世事，做讲解《诗经》《书经》，谈祭礼、整治威仪、陈明礼让等教化工作，人们都很乐于接受他的教导。直到魏文帝黄初四年（公元223年）才返乡，辽东太守公孙恭亲自送别。此后曹魏几代帝王数次征召管宁，他都没有应命。正始二年（公元241年），管宁逝世，年八十四。著有《氏姓论》。',
			acetaffy: '永雏塔菲是一名经营着侦探事务所的少女王牌侦探发明家。她来自1885年，乘着自己发明的时光机试图穿越到100年后的时空，却因迟到36年来到了现代，并被现代的电子游戏吸引，不想返回过去。',
			minitaffy: '呃呃，唐完了喵。',
			shixushao: '许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
			spshenxushao: '许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
			shenyuji: '自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。',
			junko: `东方绀珠传6面BOSS　（无名的存在）<br/>
        纯狐<br/>
        Junko<br/>
        种族：神灵<br/>
        能力：纯化程度的能力<br/>
        <br/>
        对于月之民抱有怨恨的存在。<br/>
        自身也是被怨恨纯化的灵。<br/>
        她已经连自己是什么人的情报都不需要了。<br/>
        <br/>
        她对月之民嫦娥有着强烈的怨恨。<br/>
        详情与游戏的一部分结局重复，在此并不细说，<br/>
        她似乎是一个每次袭击月之都，最终都被贤者平息其愤怒的存在。<br/>
        丈夫杀死了自己的儿子，这是最初的怨恨，但怨恨早已纯化，<br/>
        失去了控制。<br/>
        <br/>
        其存在只有一部分月之民知道。<br/>
        因为月之民不需要有畏惧敌人的生活。<br/>
        嫦娥是否知晓她的存在还尚不明确，但应该不会毫不知情吧。<br/>
        <br/>
        嫦娥，虽然在本作中并未登场，是被幽禁在月之都的月之女神。<br/>
        她是月兔的支配者，也有着强大的力量，但并不会出现在外界面前。<br/>
        嫦娥是使用了蓬莱之药的罪人。<br/>
        <br/>
        这次的月之都袭击计划的概要如下。<br/>
        <br/>
        「使月的正面，充满纯化了生命力的妖精，<br/>
          将月球本身，化为生命之星。<br/>
          这样一来，月之都就只好逃窜了。<br/>
          趁其不备，讨伐藏匿其中的嫦娥。」<br/>
          <br/>
        厌恶地面充斥污秽（生命）而移居月球，是月之都的开端。<br/>
        她想让相同的事情，发生在月球。<br/>
        <br/>
        计划十分顺利。<br/>
        静海开始被生命填满。<br/>
        地狱的妖精们，将月球当作了乐园。<br/>
        地狱的环境便是如此严苛。<br/>
        <br/>
        月之民，对于她的生命之星计划束手无策。<br/>
        <br/>
        然而，纯狐却已经知道。<br/>
        月之民不会就这样居住在污秽附近，他们一定会逃往梦境之类的地方。<br/>
        所以，预测到这一切的她，将朋友送到了那边。<br/>
        <br/>
        不知该说是正如所料，还是说预料之外，月之民超过半年都没什么动静。<br/>
        纯狐也攻击月之都感到厌倦了。双方都无法出手，陷入了胶着状态。<br/>
        逐渐，她的愤怒有所舒缓，开始考虑今后该如何行动。<br/>
        <br/>
        就在此时，想不到人类居然出现了。<br/>
        而且是污秽被净化的人类。是某种药物的影响吗。<br/>
        <br/>
        不厌恶生命，又感受不到生命。<br/>
        虽然想不到会打出如此这般牺牲人类的奇计，但她却放心了。<br/>
        <br/>
        月之贤者所做之事超乎所料。<br/>
        这是她的乐趣所在。<br/>
        然后，终于，这次的复仇大戏，将要落下帷幕了。`,
			huiwansunquan: '界孙权，但是会玩。',
			huiwansunquanplus: '界孙权，但是超会玩。',
			shenduyu: '杜预（222年－285年），字元凯，京兆郡杜陵县（今陕西西安）人，中国魏晋时期军事家、经学家、律学家，曹魏散骑常侍杜恕之子。杜预初仕曹魏，任尚书郎，后成为权臣司马昭的幕僚，封丰乐亭侯。西晋建立后，历任河南尹、安西军司、秦州刺史、度支尚书等职。咸宁四年（278年）接替羊祜出任镇南大将军，镇守荆州。他积极备战，支持晋武帝司马炎对孙吴作战，并在咸宁五年（279年）成为晋灭吴之战的统帅之一。战后因功进封当阳县侯，仍镇荆州。太康五年（285年），杜预被征入朝，拜司隶校尉，途中于邓县逝世，终年六十三岁。获赠征南大将军、开府仪同三司，谥号为成。杜预耽思经籍，博学多通，多有建树，时誉为“杜武库”。著有《春秋左氏传集解》及《春秋释例》等。为明朝之前唯一一个同时进入文庙和武庙之人。',
			shenchengui: '陈珪（生卒年不详），一作圭，字汉瑜。徐州下邳（治今江苏睢宁西北）人，广汉太守陈亹之孙，太尉陈球之侄，吴郡太守陈瑀（一作陈璃）、汝阴太守陈琮的从兄，陈登、陈应之父。官至沛相。',
			oldruiji: '芮姬，芮玄之女，太子孙登妃，黄武五年卒。',
			oldtengfanglan: '滕芳兰，生卒年不详，北海剧县（今山东省寿光市）人，太常滕胤的族女，滕牧的女儿，吴末帝孙皓的皇后。永安元年（258年），孙皓为乌程侯时被聘为妃。元兴元年（264年），孙皓登基后被立为皇后。孙吴灭亡后，随孙皓迁居洛阳。',
		},
		characterTitle: {
			shenxushao: '#gViridian',
			oldwu_zhugeliang: '#gViridian',
			shiguanning: '#gViridian',
			acetaffy: '#gViridian',
			minitaffy: '#gViridian',
			shixushao: '#gViridian',
			spshenxushao: '#gViridian',
			oldtw_niufudongxie: '#gViridian',
			oldtw_zhangmancheng: '#gViridian',
			shenyuji: '#gViridian',
			junko: '#gViridian',
			huiwansunquan: '#gViridian',
			huiwansunquanplus: '#gViridian',
			taffyboss_lvbu1: '#gViridian',
			shenduyu: '#gViridian',
			shenchengui: '#gViridian',
		},
		perfectPair: {},
		characterFilter: {},
		dynamicTranslate: {
			shidunshi: function (player) {
				var info = player.storage.shidunshi;
				var str = '每回合限一次。你可以视为使用或打出一张';
				var list = ['sha', 'shan', 'tao', 'jiu'];
				for (var i of list) {
					var strx = '【' + get.translation(i) + '】';
					if (!info || !info[0].contains(i)) strx = ('<span style="text-decoration:line-through;">' + strx + '</span>');
					str += strx;
					if (i != 'jiu') str += '/';
				}
				str += '，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“席”。⒊减1点体力上限并摸X张牌（X为你的“席”数）。';
				return str;
			},
			oldluochong: function (player) {
				var storage = player.getStorage('oldluochong');
				var str = '准备阶段开始时/当你受到伤害后，你可选择本轮内未选择过的一项：'
				var choiceList = [
					'⒈令一名角色回复1点体力。',
					'⒉令一名其他角色失去1点体力。',
					'⒊弃置一名其他角色的至多两张牌。',
					'⒋令一名角色摸两张牌。'
				];
				for (var i = 0; i < 4; i++) {
					if (storage.contains(i)) {
						choiceList[i] = ('<span style="text-decoration: line-through;">' + choiceList[i] + '</span>');
					}
					str += choiceList[i];
				}
				return str;
			},
		},
		perfectPair: {},
		characterReplace: {},
		translate: {
			shenxushao: '评世雕龙',
			shenpingjian: '评荐',
			shenpingjian_info: '①回合开始前/结束阶段开始前/当你即将受到伤害前，你可以选择失去X个技能并令系统随机检索出2X+3张拥有发动时机为回合开始前至出牌阶段开始时/结束阶段开始前至结束阶段结束后/当你即将受到伤害前至当你受到的伤害结算后的技能的武将牌，然后你可以选择获得其中至多X+1个技能（X至少为0）。②出牌阶段限一次，你可以选择一项：⒈选择失去Y个技能并令系统随机检索出2Y+3张武将牌，然后你可以选择其中至多Y张武将牌并获得其所有技能（Y至少为1）。⒉令系统随机检索出三张武将牌。然后你可以选择获得其中一个技能。',
			shenpingjian_append: '<span style="font-family: yuanli">玩这么阴间的武将，你良心不会痛吗？</span>',
			shenpingjian_use: '评荐',
			oldwu_zhugeliang: '旧武诸葛亮',
			oldwu_zhugeliang_prefix: '旧武',
			olddcjincui: '尽瘁',
			olddcjincui_info: '锁定技。①游戏开始时，你将手牌摸至七张。②准备阶段，你将体力值回复或失去至等同于牌堆中点数为7的牌数（你的体力值最低因此调整至1）。然后你观看牌堆顶X张牌，将这些牌以任意顺序置于牌堆顶或牌堆底（X为你的体力值）。',
			olddcqingshi: '情势',
			olddcqingshi_info: '当你于出牌阶段使用牌时，若你手牌中有同名牌，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸X张牌，然后〖情势〗于本回合无效（X为你的体力值）。',
			olddczhizhe: '智哲',
			olddczhizhe_clear: 'invisible',
			olddczhizhe_info: '限定技。出牌阶段，你可以选择一张手牌并复制之。该复制牌不计入你的手牌上限，且当你使用或打出此牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。',
			shiguanning: '新杀管宁',
			shiguanning_prefix: '新杀',
			shidunshi: '遁世',
			shidunshi_info: '每回合限一次。你可以视为使用或打出一张【杀】/【闪】/【桃】/【酒】，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“席”。⒊减1点体力上限并摸X张牌（X为你的“席”数）。',
			acetaffy: '永雏塔菲',
			taffybaomi: '爆米',
			taffybaomi_info: '每回合限一次，当你即将对一名角色造成伤害时，你可以防止此伤害；若该角色有手牌，则你令该角色选择交给你任意张手牌。',
			taffyfeizhu: '菲柱',
			taffyfeizhu_info: '锁定技。当你受到伤害时，若你的武将牌正面朝上，此伤害减半（向下取整）；若你的武将牌背面朝上，此伤害加倍（向下取整）。',
			taffyzuoai: '卓艾',
			taffyzuoai_info: '出牌阶段限一次，你可以将任意张手牌交给一名距离为1以内的其他角色，然后你与该角色的武将牌一同翻至背面，该角色失去一点体力并获得一个“❤”标记且你回复一点体力；该角色的回合即将开始时，此回合改为由你操控；该角色的回合结束时，你获得其所有手牌。',
			taffychusheng: '雏生',
			taffychusheng_info: '出牌阶段限一次，你可以减一点体力上限，然后令一名“❤”标记数大于等于3的男性角色将一张武将牌替换为“小菲”。',
			taffychusheng_append: '<span style="font-family: yuanli">灌注永雏塔菲喵，灌注永雏塔菲谢谢喵！</span>',
			minitaffy: '小菲',
			taffytangshi: '糖氏',
			taffytangshi_info: '出牌阶段，你可以随机播放一条小菲的糖氏语音。',
			taffyzisha: '紫砂',
			taffyzisha_info: '出牌阶段限一次，你可以死亡',
			shixushao: '新杀许劭',
			shixushao_prefix: '新杀',
			shipingjian: '评荐',
			shipingjian_use: '评荐',
			shipingjian_info: '结束阶段开始时/当你受到伤害后/出牌阶段限一次，你可以令系统随机检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌。然后你可以选择尝试发动其中一个技能。每个技能每局游戏只能选择一次。',
			spshenxushao: '神许劭',
			spshenxushao_prefix: '神',
			spshenpingjian: '评荐',
			spshenpingjian_info: '①回合开始前/结束阶段开始前/当你即将受到伤害前，你可以选择失去X个技能并令系统随机检索出2<span class=greentext>X</span>+1张拥有发动时机为回合开始前至出牌阶段开始时/结束阶段开始前至结束阶段结束后/当你即将受到伤害前至当你受到的伤害结算后的技能的武将牌，然后你可以选择获得其中至多<span class=greentext>X</span>个技能（X至少为0）。②出牌阶段限一次，你可以选择失去X个技能并令系统随机检索出2<span class=greentext>X</span>+1张武将牌，然后你可以选择获得其中至多<span class=greentext>X</span>个技能（X至少为0）。③当你发动〖评荐〗时，若你拥有的技能数小于2，则你令本次〖评荐〗中的具有颜色的X+1。',
			spshenpingjian_use: '评荐',
			spshenpingjian_append: '<span style="font-family: yuanli">我以月旦为料饵，钓尽世间功与名！</span>',
			oldtw_niufudongxie: '旧牛辅董翓',
			oldtw_niufudongxie_prefix: '旧',
			oldbaonvezhi_faq: '关于暴虐值',
			oldbaonvezhi_faq_info: '<br><li>当你造成或受到伤害后，你获得等量的暴虐值；<li>暴虐值的上限为5。',
			oldtwjuntun: '军屯',
			oldtwjuntun_info: '①游戏开始时或一名角色的濒死结算后，你可令一名角色获得〖凶军〗。②当其他角色造成伤害后，若其拥有〖凶军〗，你获得等同于此次伤害值的暴虐值。',
			oldtwxiongxi: '凶袭',
			oldtwxiongxi_info: '出牌阶段每名角色限一次，你可以弃置X张牌对一名其他角色造成1点伤害（X为你的暴虐值与暴虐值上限之差）。',
			oldtwxiafeng: '黠凤',
			oldtwxiafeng_info: '出牌阶段开始时，你可消耗至多3点暴虐值并获得如下效果直到回合结束：你使用的前X张牌没有距离和次数限制且不可被响应，你的手牌上限+X（X为你以此法消耗的暴虐值）。',
			oldtw_bn_1: '一点',
			oldtw_bn_2: '两点',
			oldtw_bn_3: '三点',
			oldtw_bn_1_bg: '一',
			oldtw_bn_2_bg: '二',
			oldtw_bn_3_bg: '三',
			oldtwxiongjun: '凶军',
			oldtwxiongjun_info: '锁定技，当你造成伤害后，所有拥有〖凶军〗的角色摸一张牌。',
			oldtw_zhangmancheng: '旧TW张曼成',
			oldtw_zhangmancheng_prefix: '旧TW',
			oldtwfengji: '蜂集',
			oldtwfengji_info: '出牌阶段开始时，若你没有“示”，则你可以将一张牌作为“示”置于武将牌上并施法：从牌堆中获得X张与“示”牌名相同的牌，然后移去“示”。',
			oldtwyiju: '蚁聚',
			oldtwyiju_info: '非锁定技。若你的武将牌上有“示”，则：①你使用【杀】的次数上限和攻击范围的基数改为你的体力值。②当你受到伤害时，你移去“示”，且令此伤害+1。',
			oldtwbudao: '布道',
			oldtwbudao_info: '限定技。准备阶段，你可减1点体力上限，回复1点体力并选择获得一个〖布道〗技能池里的技能（三选一）。然后你可以令一名其他角色也获得此技能并交给你一张牌。',
			shenyuji: '神于吉',
			shenyuji_prefix: '神',
			shenguhuo: '蛊惑',
			shenguhuo_guess: "蛊惑",
			shenguhuo_info: "你可以扣置一张手牌当作一张基本牌或锦囊牌使用或打出。其他角色同时选择是否质疑。然后，你展示此牌。若有质疑的角色：若此牌为假，则此牌作废，且你与所有质疑者各摸一张牌；为真，则所有质疑角色失去1点体力，然后你可以令此牌作废并摸一张牌。",
			shenguhuo_append: '<span style="font-family: yuanli">拥有洞察人心的直觉，就有改变乱世的力量！</span>',
			junko: '纯狐',
			junkochunhua: '纯化',
			junkochunhua_info: '①锁定技，当其他角色受到伤害后，其获得一枚“秽”。②当你造成伤害后，若该角色的“秽”数不小于X，你可以令其失去等同于其体力值的体力（X为其体力上限）。',
			junkokuangqi: '狂气',
			junkokuangqi_info: '当你使用牌时，若此牌无花色且不是延时类锦囊牌或装备牌，你可以令此牌目标改为所有其他角色。',
			junkowuming: '无名',
			junkowuming_info: '锁定技。①你的手牌花色均视为无。②你使用无色牌无距离限制。③你不能成为有花色牌的目标。',
			junkowuming_append: '<span style="font-family: yuanli">不共戴天之敌，嫦娥啊。你在看着吗！？</span>',
			ruijier: '瑞吉儿',
			huiwansunquan: "会玩的孙权",
			huiwansunquan_prefix: "会玩的",
			huiwansunquan_ab: "会玩权",
			huiwan: "会玩",
			huiwan_info: "当你摸牌时，你可以改为观看牌堆所有牌并从中选择获得等量的牌。",
			huiwan_append: '<span style="font-family: yuanli">感觉不如界权，精品第一，史诗质检员，回合内大制衡找顺拆卡距离随便打，不好打的制衡找无懈闪桃下回合找顺拆继续打，对爆也是界权优。</span>',
			huiwansunquanplus: "超会玩的孙权",
			huiwansunquanplus_prefix: "超会玩的",
			huiwansunquanplus_ab: "超玩权",
			huiwanplus: "超玩",
			huiwanplus_info: "锁定技。①一名角色摸牌时，你改为观看牌堆所有牌并从中选择等量的牌令其获得。②一名角色的判定牌生效前，你观看牌堆所有牌并选择一张作为判定结果，此结果不可更改。",
			huiwanplus_append: `<span style="font-family: yuanli">思权拳 思如泉涌！<br/>
      念权剑 念念不忘！！<br/>
      界权掌 生生世世！！<br/>
      会玩、会玩、会玩！<br/>
      璀璨中的凋零、制衡联合！<br/>
      极冻中的炽烈、纵横捭阖！<br/>
      虚无中的真言、容我三思！<br/>
      冰霜中的独舞、则吴盛可期！</span>`,
			huiwanplus_judge: "超玩",
			taffyboss_lvbu1: '最强神话',
			taffyboss_baonu: '暴怒',
			taffyboss_baonu_info: '锁定技，当你的体力值降至4或更低时，你变身为暴怒战神或神鬼无前，并立即开始你的回合。',
			taffyboss_jingjia: "精甲",
			taffyboss_jingjia_info: "锁定技，游戏开始时，将本局游戏中加入的装备随机置入你的装备区。",
			shoushen_caocao: "手杀神曹操",
			shoushen_caocao_prefix: "手杀神",
			babyshen_simayi: "欢杀神司马懿",
			babyshen_simayi_prefix: "欢杀神",
			babyrenjie: "忍戒",
			babyrenjie_info: "锁定技，①游戏开始时或当你受到1点伤害后，你获得1枚“忍”标记。②当你于弃牌阶段内弃置牌后，你获得等同于失去的牌数量的“忍”。",
			babyjilue: "极略",
			babyjilue_info: "①当一名角色的判定牌生效前，你可以弃1枚“忍”并发动〖鬼才〗。②当你受到伤害后，你可以弃1枚“忍”并发动〖放逐〗。③当你使用锦囊牌时，你可以弃1枚“忍”并发动〖集智〗。④当一名角色于你的回合内进入濒死状态时，你可以弃1枚“忍”并获得〖完杀〗直到回合结束。⑤当你每回合首次发动〖极略〗后，可摸一张牌。",
			babylianpo: "连破",
			babylianpo_info: "一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。",
			babyjilue_fangzhu: "放逐",
			babyjilue_fangzhu_info: "当你受到伤害后，你可以令一名其他角色摸一张牌并翻面。",
			babyjilue_guicai: "鬼才",
			babyjilue_guicai_info: "一名角色的判定牌生效前，你可以打出一张牌代替之。若此牌花色为：♥，你回复1点体力；♣，你摸两张牌。",
			babyjilue_jizhi: "集智",
			babyjilue_jizhi_info: "当你使用普通锦囊牌时，你可以摸一张牌。若此牌为：基本牌，你于本回合手牌上限+1；锦囊牌，你于本回合使用【杀】的次数上限+1；装备牌，你可以将此牌置入其他角色的装备区。",
			babyjilue_wansha: "完杀",
			babyjilue_wansha_info: "锁定技，你的回合内，其他角色不能使用【桃】。",
			babyjilue_wansha_clear: "完杀",
			babyjilue_wansha_clear_info: "锁定技，你的回合内，其他角色不能使用【桃】。",
			shenduyu: '神杜预',
			shenduyu_prefix: '神',
			shenmiewu: '灭吴',
			shenmiewu2: '灭吴',
			shenmiewu_backup: '灭吴',
			shenmiewu_info: '每回合限一次。你可将一张牌当做任意基本牌或锦囊牌使用，然后摸一张牌。若你没有牌，你可视为使用或打出任意一张基本牌或普通锦囊牌，然后摸一张牌。',
			shenmiewu_append: '<span style="font-family: yuanli">吾军势如破竹，江东六郡唾手可得！</span>',
			shenchengui: '神陈珪',
			shenchengui_prefix: '神',
			shendcyingtu: '营图',
			shendcyingtu_info: '每回合限一次。当一名其他角色于摸牌阶段外得到牌后，你可以获得其一张牌，然后将一张牌交给一名其他角色。若你给出的牌为装备牌，则其使用之。',
			shendccongshi: '从势',
			shendccongshi_info: '一名角色使用的装备牌结算结束后，你摸一张牌。',
			shendccongshi_append: '<span style="font-family: yuanli">不过略施小计，聊戏莽夫耳。</span>',
			taffyjsrg_nanhualaoxian: '面杀起南华老仙',
			taffyjsrg_nanhualaoxian_prefix: '面杀起',
			taffyjsrg_nanhualaoxian_ab: '面杀起南华',
			taffyjsrgshoushu: '授术',
			taffyjsrgshoushu_info: '锁定技。①一轮游戏开始时，若场上没有【太平要术】，你可以从游戏外将【太平要术】置于一名角色的装备区内。②当【太平要术】离开一名角色的装备区后，你令此牌销毁。',
      oldruiji: '旧OL芮姬',
			oldruiji_prefix: '旧OL',
			oldqiaoli: '巧力',
			oldqiaoli_info: '①你可以将一张装备牌当做【决斗】使用。若此【决斗】对应的实体牌：为武器牌，当你以此法声明使用【决斗】后，你摸X张牌（X为此牌的攻击范围），且可以将其中任意张牌分配给其他角色；不为武器牌，此牌不可被响应。②结束阶段开始时，若你于本回合内发动过〖巧力①〗，则你从牌堆中获得一张装备牌。',
			oldqiaoli_given: '已分配',
			oldqingliang: '清靓',
			oldqingliang_info: '每回合限一次。当你成为其他角色使用牌的目标时，你可展示所有手牌，然后选择一项：⒈你与其各摸一张牌，⒉取消此目标，然后弃置你手牌中一种花色的所有牌。',
      oldtengfanglan: '旧OL滕芳兰',
			oldtengfanglan_prefix: '旧OL',
			oldluochong: '落宠',
			oldluochong_info: '准备阶段开始时/当你受到伤害后，你可选择本轮内未选择过的一项：⒈令一名角色回复1点体力。⒉令一名其他角色失去1点体力。⒊弃置一名其他角色的至多两张牌。⒋令一名角色摸两张牌。',
			oldaichen: '哀尘',
			oldaichen_info: '锁定技。当你进入濒死状态时，若〖落宠〗中的剩余选项数大于1，则你将体力回复至1点，然后选择移去〖落宠〗中的一个选项。',

			taffy_old: "圣经·塔约",
			taffy_off: "江山如故·唐",
			taffy_ol: "江山如故·永",
			taffy_shou: "江山如故·雏",
			taffy_shi: "江山如故·塔",
			taffy_baby: "江山如故·菲",
			taffy_diy: "神·塔",
			taffy_tang: "东瀛·唐氏",
			taffy_gzz: "东方·绀珠传",
			taffy_wu: "东吴·超玩会",
		},
	};
});

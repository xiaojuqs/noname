game.import('extension', function (lib, game, ui, get, ai, _status) { return {
	name: "AI优化",
	editable: false,
	content: function (config, pack) {
		//非常感谢@柚子丶奶茶丶猫以及面具 提供的《云将》相关部分AI优化的修复代码
		if (lib.config.extension_AI优化_attceshi == 'on') {//态度测试
			/*态度相减*/
			minusatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi -= 1.5;
				else if (target.getSeatNum() == 2) player.storage.er -= 1.5;
				else if (target.getSeatNum() == 3) player.storage.san -= 1.5;
				else if (target.getSeatNum() == 4) player.storage.si -= 1.5;
				else if (target.getSeatNum() == 5) player.storage.wu -= 1.5;
				else if (target.getSeatNum() == 6) player.storage.liu -= 1.5;
				else if (target.getSeatNum() == 7) player.storage.qi -= 1.5;
				else if (target.getSeatNum() == 8) player.storage.ba -= 1.5;
			};
			//翻面专属
			fminusatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi -= 6;
				else if (target.getSeatNum() == 2) player.storage.er -= 6;
				else if (target.getSeatNum() == 3) player.storage.san -= 6;
				else if (target.getSeatNum() == 4) player.storage.si -= 6;
				else if (target.getSeatNum() == 5) player.storage.wu -= 6;
				else if (target.getSeatNum() == 6) player.storage.liu -= 6;
				else if (target.getSeatNum() == 7) player.storage.qi -= 6;
				else if (target.getSeatNum() == 8) player.storage.ba -= 6;
			};
			//弃牌专属
			pminusatt = function (player, target, num) {
				if (target.getSeatNum() == 1) player.storage.yi -= num;
				else if (target.getSeatNum() == 2) player.storage.er -= num;
				else if (target.getSeatNum() == 3) player.storage.san -= num;
				else if (target.getSeatNum() == 4) player.storage.si -= num;
				else if (target.getSeatNum() == 5) player.storage.wu -= num;
				else if (target.getSeatNum() == 6) player.storage.liu -= num;
				else if (target.getSeatNum() == 7) player.storage.qi -= num;
				else if (target.getSeatNum() == 8) player.storage.ba -= num;
			};
			/*态度相加*/
			addatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi += 1;
				else if (target.getSeatNum() == 2) player.storage.er += 1;
				else if (target.getSeatNum() == 3) player.storage.san += 1;
				else if (target.getSeatNum() == 4) player.storage.si += 1;
				else if (target.getSeatNum() == 5) player.storage.wu += 1;
				else if (target.getSeatNum() == 6) player.storage.liu += 1;
				else if (target.getSeatNum() == 7) player.storage.qi += 1;
				else if (target.getSeatNum() == 8) player.storage.ba += 1;
			};
			//翻面专属
			faddatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi += 6;
				else if (target.getSeatNum() == 2) player.storage.er += 6;
				else if (target.getSeatNum() == 3) player.storage.san += 6;
				else if (target.getSeatNum() == 4) player.storage.si += 6;
				else if (target.getSeatNum() == 5) player.storage.wu += 6;
				else if (target.getSeatNum() == 6) player.storage.liu += 6;
				else if (target.getSeatNum() == 7) player.storage.qi += 6;
				else if (target.getSeatNum() == 8) player.storage.ba += 6;
			};
			//给牌专属
			paddatt = function (player, target, num) {
				if (target.getSeatNum() == 1) player.storage.yi += num;
				else if (target.getSeatNum() == 2) player.storage.er += num;
				else if (target.getSeatNum() == 3) player.storage.san += num;
				else if (target.getSeatNum() == 4) player.storage.si += num;
				else if (target.getSeatNum() == 5) player.storage.wu += num;
				else if (target.getSeatNum() == 6) player.storage.liu += num;
				else if (target.getSeatNum() == 7) player.storage.qi += num;
				else if (target.getSeatNum() == 8) player.storage.ba += num;
			};
			/*态度归正*/
			zhengatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi == 114514;
				else if (target.getSeatNum() == 2) player.storage.er == 114514;
				else if (target.getSeatNum() == 3) player.storage.san == 114514;
				else if (target.getSeatNum() == 4) player.storage.si == 114514;
				else if (target.getSeatNum() == 5) player.storage.wu == 114514;
				else if (target.getSeatNum() == 6) player.storage.liu == 114514;
				else if (target.getSeatNum() == 7) player.storage.qi == 114514;
				else if (target.getSeatNum() == 8) player.storage.ba == 114514;
			};
			/*态度归负*/
			fuatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi == -114514;
				else if (target.getSeatNum() == 2) player.storage.er == -114514;
				else if (target.getSeatNum() == 3) player.storage.san == -114514;
				else if (target.getSeatNum() == 4) player.storage.si == -114514;
				else if (target.getSeatNum() == 5) player.storage.wu == -114514;
				else if (target.getSeatNum() == 6) player.storage.liu == -114514;
				else if (target.getSeatNum() == 7) player.storage.qi == -114514;
				else if (target.getSeatNum() == 8) player.storage.ba == -114514;
			};
			/*态度归零*/
			lingatt = function (player, target) {
				if (target.getSeatNum() == 1) player.storage.yi == 0;
				else if (target.getSeatNum() == 2) player.storage.er == 0;
				else if (target.getSeatNum() == 3) player.storage.san == 0;
				else if (target.getSeatNum() == 4) player.storage.si == 0;
				else if (target.getSeatNum() == 5) player.storage.wu == 0;
				else if (target.getSeatNum() == 6) player.storage.liu == 0;
				else if (target.getSeatNum() == 7) player.storage.qi == 0;
				else if (target.getSeatNum() == 8) player.storage.ba == 0;
			};
			/*态度输出*/
			xsatt = function (from, to) {
				if (to.getSeatNum() == 1) return from.storage.yi;
				else if (to.getSeatNum() == 2) return from.storage.er;
				else if (to.getSeatNum() == 3) return from.storage.san;
				else if (to.getSeatNum() == 4) return from.storage.si;
				else if (to.getSeatNum() == 5) return from.storage.wu;
				else if (to.getSeatNum() == 6) return from.storage.liu;
				else if (to.getSeatNum() == 7) return from.storage.qi;
				else if (to.getSeatNum() == 8) return from.storage.ba;
			};

			lib.skill._attzhi = {
				trigger: {global: 'gameStart', player: 'enterGame'},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				priority: 9999,
				mode: ['identity'],
				filter: function (event, player) {
					if (_status.mode != 'normal') return false;
					return true;
				},
				content: function () {
					game.countPlayer2(function (current) {
						current.addSkill('attcard');
						current.addSkill('attdamage');
						current.addSkill('attlosehp');
						current.addSkill('attrecover');
						current.addSkill('attgain');
						current.addSkill('attlose');
						current.addSkill('attturnover');
						current.addSkill('attfanzhuang');
						current.addSkill('attbaolu');
						current.addSkill('atttiaofan');
						current.addSkill('attmingbian1');
						if (current.identity == 'zhu') {
							current.addSkill('attbo');
							current.addSkill('attmingbian');
						}
					});
				}
			};
			//伤害牌
			lib.skill.attcard = {
				trigger: {
					player: 'useCardToPlayered'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				init: function (player) {
					player.storage.yi = 0;
					player.storage.er = 0;
					player.storage.san = 0;
					player.storage.si = 0;
					player.storage.wu = 0;
					player.storage.liu = 0;
					player.storage.qi = 0;
					player.storage.ba = 0;
				},
				filter: function (event, player) {
					if (!event.isPhaseUsing()) return false;
					if (_status.currentPhase != player) return false;
					if (!event.card) return false;
					if (event.card.name == 'nanman' || event.card.name == 'wanjian') return false;
					if (!event.getParent('chooseToUse')) return false;
					if (player == game.zhu) return false;
					if (event.target == player) return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					return true;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					if (get.tag(trigger.card, 'damage')) {
						if (get.effect(trigger.target, trigger.card, player, trigger.target) < 0) {
							if (trigger.target.identity == 'zhu') {
								// game.log('伤害——主');
								// game.me.popup('伤害——主');
								player.storage.tiaofan += 1.5;
								if (get.attitude(game.zhu, player) > 0) {
									fuatt(game.zhu, player);
								} else {
									minusatt(game.zhu, player);
								}
								zhong.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) > 0) {
											fuatt(item, player);
										} else {
											minusatt(item, player);
										}
									}
								});
								fan.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) < 0) {
											zhengatt(item, player);
										} else {
											addatt(item, player);
										}
									}
								});
							}
							if (trigger.target.ai.shown >= 0.4 && trigger.target.identity == 'zhong') {
								// game.log('伤害——忠');
								// game.me.popup('伤害——忠');
								player.storage.tiaofan += 1.5;
								if (get.attitude(game.zhu, player) > 0) {
									fuatt(game.zhu, player);
								} else {
									minusatt(game.zhu, player);
								}
								zhong.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) > 0) {
											fuatt(item, player);
										} else {
											minusatt(item, player);
										}
									}
								});
								fan.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) < 0) {
											zhengatt(item, player);
										} else {
											addatt(item, player);
										}
									}
								});
							}
							if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
								// game.log('伤害——忠');
								// game.me.popup('伤害——忠');
								player.storage.tiaofan += 1.5;
								if (get.attitude(game.zhu, player) > 0) {
									fuatt(game.zhu, player);
								} else {
									minusatt(game.zhu, player);
								}
								zhong.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) > 0) {
											fuatt(item, player);
										} else {
											minusatt(item, player);
										}
									}
								});
								fan.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) < 0) {
											zhengatt(item, player);
										} else {
											addatt(item, player);
										}
									}
								});
							}
							if (trigger.target.ai.shown >= 0.4 && trigger.target.identity == 'fan') {
								// game.log('伤害——反');
								// game.me.popup('伤害——反');
								player.storage.tiaofan -= 1.5;
								if (get.attitude(game.zhu, player) < 0) {
									zhengatt(game.zhu, player);
								} else {
									addatt(game.zhu, player);
								}
								zhong.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) < 0) {
											zhengatt(item, player);
										} else {
											addatt(item, player);
										}
									}
								});
								fan.forEach((item) => {
									if (item != player) {
										if (get.attitude(item, player) > 0) {
											fuatt(item, player);
										} else {
											minusatt(item, player);
										}
									}
								});
							}
						}
					}
				}
			};
			//直伤
			lib.skill.attdamage = {
				trigger: {
					source: 'damageAfter'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (event.card) return false;
					if (event.parent.name == '_lianhuan') return false;
					if (player == game.zhu) return false;
					if (event.player == player) return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					return true;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					if (get.damageEffect(trigger.player, player, trigger.player) < 0) {
						if (trigger.player.identity == 'zhu') {
							// game.log('直伤——主');
							// game.me.popup('直伤——主');
							player.storage.tiaofan += 1.5;
							if (get.attitude(game.zhu, player) > 0) {
								fuatt(game.zhu, player);
							} else {
								minusatt(game.zhu, player);
							}
							zhong.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) > 0) {
										fuatt(item, player);
									} else {
										minusatt(item, player);
									}
								}
							});
							fan.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) < 0) {
										zhengatt(item, player);
									} else {
										addatt(item, player);
									}
								}
							});
						}
						if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'zhong') {
							// game.log('直伤——忠');
							// game.me.popup('直伤——忠');
							player.storage.tiaofan += 1.5;
							if (get.attitude(game.zhu, player) > 0) {
								fuatt(game.zhu, player);
							} else {
								minusatt(game.zhu, player);
							}
							zhong.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) > 0) {
										fuatt(item, player);
									} else {
										minusatt(item, player);
									}
								}
							});
							fan.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) < 0) {
										zhengatt(item, player);
									} else {
										addatt(item, player);
									}
								}
							});
						}
						if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
							// game.log('直伤——忠');
							// game.me.popup('直伤——忠');
							player.storage.tiaofan += 1.5;
							if (get.attitude(game.zhu, player) > 0) {
								fuatt(game.zhu, player);
							} else {
								minusatt(game.zhu, player);
							}
							zhong.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) > 0) {
										fuatt(item, player);
									} else {
										minusatt(item, player);
									}
								}
							});
							fan.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) < 0) {
										zhengatt(item, player);
									} else {
										addatt(item, player);
									}
								}
							});
						}
						if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'fan') {
							// game.log('直伤——反');
							// game.me.popup('直伤——反');
							player.storage.tiaofan -= 1.5;
							if (get.attitude(game.zhu, player) < 0) {
								zhengatt(game.zhu, player);
							} else {
								addatt(game.zhu, player);
							}
							zhong.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) < 0) {
										zhengatt(item, player);
									} else {
										addatt(item, player);
									}
								}
							});
							fan.forEach((item) => {
								if (item != player) {
									if (get.attitude(item, player) > 0) {
										fuatt(item, player);
									} else {
										minusatt(item, player);
									}
								}
							});
						}
					}
				}
			};
			//令失去体力
			lib.skill.attlosehp = {
				trigger: {
					global: 'changeHp'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (player == game.zhu) return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					return event.getParent().name == 'loseHp' && event.player != player && event.getParent(2).player == player;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					if (trigger.player.identity == 'zhu') {
						// game.log('失血——主');
						// game.me.popup('失血——主');
						player.storage.tiaofan += 1.5;
						if (get.attitude(game.zhu, player) > 0) {
							fuatt(game.zhu, player);
						} else {
							minusatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'zhong') {
						// game.log('失血——忠');
						// game.me.popup('失血——忠');
						player.storage.tiaofan += 1.5;
						if (get.attitude(game.zhu, player) > 0) {
							fuatt(game.zhu, player);
						} else {
							minusatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
					}
					if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
						// game.log('失血——忠');
						// game.me.popup('失血——忠');
						player.storage.tiaofan += 1.5;
						if (get.attitude(game.zhu, player) > 0) {
							fuatt(game.zhu, player);
						} else {
							minusatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'fan') {
						// game.log('失血——反');
						// game.me.popup('失血——反');
						player.storage.tiaofan -= 1.5;
						if (get.attitude(game.zhu, player) < 0) {
							zhengatt(game.zhu, player);
						} else {
							addatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
					}
				}
			};
			//令回复体力
			lib.skill.attrecover = {
				trigger: {
					global: 'recoverEnd'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (event.card && event.card.name == 'taoyuan') return false;
					if (player == game.zhu) return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					return event.source && event.source == player;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					if (trigger.player.identity == 'zhu') {
						// game.log('回血——主');
						// game.me.popup('回血——主');
						player.storage.tiaofan -= 1.5;
						if (get.attitude(game.zhu, player) < 0) {
							zhengatt(game.zhu, player);
						} else {
							addatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'zhong') {
						// game.log('回血——忠');
						// game.me.popup('回血——忠');
						player.storage.tiaofan -= 1.5;
						if (get.attitude(game.zhu, player) < 0) {
							zhengatt(game.zhu, player);
						} else {
							addatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
					}
					if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
						// game.log('回血——忠');
						// game.me.popup('回血——忠');
						player.storage.tiaofan -= 1.5;
						if (get.attitude(game.zhu, player) < 0) {
							zhengatt(game.zhu, player);
						} else {
							addatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'fan') {
						// game.log('回血——反');
						// game.me.popup('回血——反');
						player.storage.tiaofan += 1.5;
						if (get.attitude(game.zhu, player) > 0) {
							fuatt(game.zhu, player);
						} else {
							minusatt(game.zhu, player);
						}
						zhong.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) > 0) {
									fuatt(item, player);
								} else {
									minusatt(item, player);
								}
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								if (get.attitude(item, player) < 0) {
									zhengatt(item, player);
								} else {
									addatt(item, player);
								}
							}
						});
					}
				}
			};
			//令得到牌
			lib.skill.attgain = {
				trigger: {
					global: 'gainEnd'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (!event.cards || event.cards.length == 0) return false;
					if (event.parent.name == 'wugu') return false;
					if (player == game.zhu) return false;
					if (event.player == player) return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					return (event.getParent(2).player == player && event.getParent(2).player != event.player) || (event.getParent(3).player == player && event.getParent(3).player != event.player);
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					var num = trigger.cards.length;
					if (trigger.player.identity == 'zhu') {
						// game.log('摸牌——主');
						// game.me.popup('摸牌——主');
						player.storage.tiaofan -= num;
						paddatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'zhong') {
						// game.log('摸牌——忠');
						// game.me.popup('摸牌——忠');
						player.storage.tiaofan -= num;
						paddatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
					}
					if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
						// game.log('摸牌——忠');
						// game.me.popup('摸牌——忠');
						player.storage.tiaofan -= num;
						paddatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'fan') {
						// game.log('摸牌——反');
						// game.me.popup('摸牌——反');
						player.storage.tiaofan += num;
						pminusatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
					}
				}
			};
			//令失去牌
			lib.skill.attlose = {
				trigger: {
					global: 'loseEnd'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (!event.cards || event.cards.length == 0) return false;
					if (player == game.zhu) return false;
					if (event.player == player) return false;
					if (event.player == event.getParent(3).player) return false;
					if (event.getParent(3).player != player) return false;
					if (get.translation(event.getParent(3)) == '杀' || get.translation(event.getParent(3)) == '南蛮入侵' || get.translation(event.getParent(3)) == '万箭齐发' || get.translation(event.getParent(3)) == '决斗' || get.translation(event.getParent(3)) == '奇正相生' || get.translation(event.getParent(2)) == '_wuxie') return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					return true;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					var num = trigger.cards.length;
					if (trigger.player.identity == 'zhu') {
						// game.log('丢牌——主');
						// game.me.popup('丢牌——主');
						player.storage.tiaofan += num;
						pminusatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'zhong') {
						// game.log('丢牌——忠');
						// game.me.popup('丢牌——忠');
						player.storage.tiaofan += num;
						pminusatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
					}
					if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
						// game.log('丢牌——忠');
						// game.me.popup('丢牌——忠');
						player.storage.tiaofan += num;
						pminusatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'fan') {
						// game.log('丢牌——反');
						// game.me.popup('丢牌——反');
						player.storage.tiaofan -= num;
						paddatt(game.zhu, player, num);
						zhong.forEach((item) => {
							if (item != player) {
								paddatt(item, player, num);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								pminusatt(item, player, num);
							}
						});
					}
				}
			};
			//令翻面
			lib.skill.attturnover = {
				trigger: {
					global: 'turnOverEnd'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (player == game.zhu) return false;
					if (game.roundNumber > 1 && !player.isUnderControl(true)) return false;
					if (!event.player.isTurnedOver()) return false;
					return event.player != player && event.getParent().player == player;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					if (trigger.player.identity == 'zhu') {
						// game.log('翻面——主');
						// game.me.popup('翻面——主');
						player.storage.tiaofan += 4;
						fminusatt(game.zhu, player);
						zhong.forEach((item) => {
							if (item != player) {
								fminusatt(item, player);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								faddatt(item, player);
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'zhong') {
						// game.log('翻面——忠');
						// game.me.popup('翻面——忠');
						player.storage.tiaofan += 4;
						fminusatt(game.zhu, player);
						zhong.forEach((item) => {
							if (item != player) {
								fminusatt(item, player);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								faddatt(item, player);
							}
						});
					}
					if (trigger.player.ai.shown < 0.4 && trigger.player.identity == 'zhong' && ((game.zhu.storage.dongcha != trigger.player && get.attitude(game.zhu, trigger.player) > 1) || (game.zhu.storage.dongcha == trigger.player && get.attitude(game.zhu, trigger.player) > 6))) {
						// game.log('翻面——忠');
						// game.me.popup('翻面——忠');
						player.storage.tiaofan += 4;
						fminusatt(game.zhu, player);
						zhong.forEach((item) => {
							if (item != player) {
								fminusatt(item, player);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								faddatt(item, player);
							}
						});
					}
					if (trigger.player.ai.shown >= 0.4 && trigger.player.identity == 'fan') {
						// game.log('翻面——反');
						// game.me.popup('翻面——反');
						player.storage.tiaofan -= 4;
						faddatt(game.zhu, player);
						zhong.forEach((item) => {
							if (item != player) {
								faddatt(item, player);
							}
						});
						fan.forEach((item) => {
							if (item != player) {
								fminusatt(item, player);
							}
						});
					}
				}
			};
			//拨乱反正
			lib.skill.attbo = {
				trigger: {
					global: 'roundStart'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					return game.roundNumber == 2;
				},
				content: function () {
					var fun = get.attitude;
					get.attitude = function (a, b) {
						if (b != game.me && !game.me.isUnderControl(true)) {
							if (b.identity == 'zhong' && fun(game.zhu, b) < 0) {
								if (a != b) {
									if (a.identity == 'zhong' || a.identity == 'zhu') return 2;
									if (a.identity == 'fan') return -2;
								}
							}
							if (b.identity == 'fan' && fun(game.zhu, b) > 0) {
								if (a != b) {
									if (a.identity == 'zhong' || a.identity == 'zhu') return -2;
									if (a.identity == 'fan') return 2;
								}
							}
						}
						return fun(a, b);
					};
				}
			};
			//明辨忠反
			lib.skill.attmingbian = {
				trigger: {
					global: ['changeHp', 'dieAfter', 'useSkillAfter', 'phaseZhunbeiAfter', 'phaseBefore', 'phaseJieshuAfter', 'useCard', 'respond']
				},
				silent: true,
				forced: true,
				unique: true,
				popup: false,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				filter: function (event, player) {
					return _status.mode == 'normal';
				},
				content: function () {
					var numz = game.countPlayer(function (current) {
						return current.identity == 'zhong';
					});
					var mz = game.countPlayer(function (current) {
						return current.identity == 'zhong' && (current.ai.shown >= 0.4 || get.attitude(game.zhu, current) > 2);
					});
					var numf = game.countPlayer(function (current) {
						return current.identity == 'fan';
					});
					var mf = game.countPlayer(function (current) {
						return current.identity == 'fan' && (current.ai.shown >= 0.4 || get.attitude(game.zhu, current) < -2);
					});
					var fun = get.attitude;
					//辨别反贼
					if (
						numz == mz &&
						numz != 0 &&
						numf != 0 &&
						(game.countPlayer((current) => current.identity == 'nei') == 0 ||
							game.hasPlayer((current) => {
								return current.identity == 'nei' && get.attitude(game.zhu, current) > 1;
							}))
					) {
						var fan = game.filterPlayer((current) => current.identity == 'fan');
						fan.forEach((item) => {
							if (item.ai.shown < 0.4 && !(item.isUnderControl(true) && item.storage.fanzhuang < 2)) {
								get.attitude = function (a, b) {
									if (b == item) {
										if (a.identity == 'zhu') return -4;
										if (a.identity == 'zhong' && a != item) return -4;
										if (a.identity == 'fan') return 4;
									}
									return fun(a, b);
								};
							}
						});
					}
					//辨别忠臣
					if (numf == mf && numf != 0) {
						var zhong = game.filterPlayer((current) => current.identity == 'zhong');
						zhong.forEach((item) => {
							if (item.ai.shown < 0.4) {
								get.attitude = function (a, b) {
									if (b == item) {
										if (a.identity == 'zhu') return 4;
										if (a.identity == 'zhong' && a != item) return 4;
										if (a.identity == 'fan') return -4;
									}
									return fun(a, b);
								};
							}
						});
					}
					var num = 0;
					game.filterPlayer().forEach((current) => {
						if (current.ai.shown >= 0.4) num += 1;
					});
					if (num == game.filterPlayer().length) player.removeSkill('attmingbian');
				}
			};
			//明辨忠反1
			lib.skill.attmingbian1 = {
				trigger: {
					player: 'phaseJieshuBegin'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					return player.ai.shown < 0.4;
				},
				content: function () {
					var fan = game.filterPlayer((current) => current.identity == 'fan');
					var zhong = game.filterPlayer((current) => current.identity == 'zhong');
					if (player.identity == 'zhong') {
						if (
							player.getHistory('useCard', function (evt) {
								if (!evt.card) return false;
								if (get.tag(evt.card, 'multitarget')) return false;
								if (!evt.isPhaseUsing()) return false;
								if (!evt.targets) return false;
								for (var i = 0; i < evt.targets.length; i++) {
									if (evt.targets[i] == player) continue;
									if (!get.tag(evt.card, 'damage')) {
										if (player.canUse(evt.card, game.zhu)) return true;
									} else {
										if (!game.zhu.hasSkillTag('maixie') && player.canUse(evt.card, game.zhu)) {
											if (get.name(evt.card) == 'sha') {
												if (!player.inRange(game.zhu)) {
													return false;
												} else {
													if (get.effect(game.zhu, evt.card, player, player) >= 0) return false;
												}
												return true;
											}
											return true;
										}
									}
								}
							}).length > 0
						) {
							addatt(game.zhu, player);
							zhong.forEach((item) => {
								if (item != player) {
									addatt(item, player);
								}
							});
							fan.forEach((item) => {
								if (item != player) {
									minusatt(item, player);
								}
							});
						} else {
							var list = player.getHistory('lose', function (evt) {
								return evt.type == 'discard' && evt.getParent(3).name == 'phaseDiscard' && evt.hs;
							});
							for (var i = 0; i < list.length; i++) {
								var card = list[i];
								if (get.tag(card, 'damage')) {
									if (!game.zhu.hasSkillTag('maixie') && player.canUse(card, game.zhu)) {
										if (get.name(card) == 'sha') {
											if (!player.inRange(game.zhu)) {
												list.splice(i--, 1);
											} else {
												if (get.effect(game.zhu, card, player, player) >= 0) list.splice(i--, 1);
											}
										}
									}
								}
							}
							if (list && list.length > 0) {
								addatt(game.zhu, player);
								zhong.forEach((item) => {
									if (item != player) {
										addatt(item, player);
									}
								});
								fan.forEach((item) => {
									if (item != player) {
										minusatt(item, player);
									}
								});
							}
						}
					}
				}
			};
			//玩家反贼装忠
			lib.skill.attfanzhuang = {
				trigger: {
					player: 'phaseJieshuBegin'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				init: function (player) {
					player.storage.fanzhuang = 0;
				},
				filter: function (event, player) {
					return player.identity == 'fan' && player.isUnderControl(true);
				},
				content: function () {
					var numz = game.countPlayer(function (current) {
						return current.identity == 'zhong';
					});
					var numf = game.countPlayer(function (current) {
						return current.identity == 'fan';
					});
					if (
						player.getHistory('useCard', function (evt) {
							if (!evt.card) return false;
							if (!((get.tag(evt.card, 'damage') && get.effect(evt.player, evt.card, player, evt.player) < 0) || get.name(evt.card) == 'lebu' || get.name(evt.card) == 'bingliang')) return false;
							if (evt.card.name == 'nanman' || evt.card.name == 'wanjian') return false;
							if (!evt.isPhaseUsing()) return false;
							if (!evt.targets) return false;
							for (var i = 0; i < evt.targets.length; i++) {
								if (evt.targets[i].identity == 'zhu') return true;
								if (evt.targets[i].identity == 'nei' && evt.targets[i].ai.shown >= 0.4 && get.attitude(evt.targets[i], game.zhu > 1)) {
									if (numf == 1 && numz > 0) return false;
									return true;
								}
								if (evt.targets[i].identity == 'zhong' && evt.targets[i].ai.shown >= 0.4) {
									if (numf == 1) return false;
									return true;
								}
							}
						}).length > 0
					) {
						// game.log('跳反');
						// player.popup('跳反');
						player.storage.fanzhuang++;
					}
				}
			};
			//反装忠暴露
			lib.skill.attbaolu = {
				trigger: {
					global: ['changeHp', 'dieAfter', 'useSkillAfter', 'phaseZhunbeiAfter', 'phaseBefore', 'phaseJieshuAfter', 'useCard', 'respond']
				},
				silent: true,
				forced: true,
				unique: true,
				popup: false,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				filter: function (event, player) {
					return player.identity == 'fan' && player.isUnderControl(true);
				},
				content: function () {
					var numz = game.countPlayer(function (current) {
						return current.identity == 'zhong';
					});
					var numf = game.countPlayer(function (current) {
						return current.identity == 'fan';
					});
					//判断谁血最多
					var fanzhuangmaxhp = function () {
						var list = game.filterPlayer((current) => current.identity == 'nei' || current.identity == 'zhong' || current == player);
						if (list && list.length > 1) {
							var list = list.sort(function (a, b) {
								return b.hp - a.hp;
							});
							if (list[0].hp == list[1].hp) {
								if ((list[1].countCards('h') > list[0].countCards('h') && !list[0].getEquip('equip2')) || (list[1].countCards('e') > list[0].countCards('e') && list[1].getEquip('equip2'))) return list[1];
							}
						}
						return list[0];
					};
					var fun = get.attitude;
					if (player.storage.fanzhuang > 1) {
						if (game.roundNumber == 2) {
							get.attitude = function (a, b) {
								if (b == player) {
									if (a.identity == 'zhu') return -6;
									if (a.identity == 'zhong') return -6;
									if (a.identity == 'fan') return 6;
								}
								return fun(a, b);
							};
							player.removeSkill('attcard');
							player.removeSkill('attdamage');
							player.removeSkill('attlosehp');
							player.removeSkill('attrecover');
							player.removeSkill('attgain');
							player.removeSkill('attlose');
							player.removeSkill('attturnover');
							player.removeSkill('attfanzhuang');
							player.removeSkill('attbaolu');
						}
					} else {
						if (numf == 1) {
							get.attitude = function (a, b) {
								if (a.identity == 'zhu') {
									if (b.identity == 'zhong') {
										if (b == fanzhuangmaxhp()) return -1;
										return 0;
									}
									if (b == player) {
										if (numz == 0) return -10;
										if (b == fanzhuangmaxhp()) return -1;
										return 0;
									}
								}
								if (a.identity == 'zhong') {
									if (b.identity == 'zhong' && b != a) {
										if (b == fanzhuangmaxhp()) return -6;
										return -2;
									}
									if (b == player) {
										if (b == fanzhuangmaxhp()) return -6;
										return -2;
									}
								}
								return fun(a, b);
							};
						}
					}
				}
			};
			lib.skill.atttiaofan = {
				trigger: {
					globe: ['phaseZhunbeiBegin', 'phaseJieshuBegin']
				},
				silent: true,
				forced: true,
				unique: true,
				popup: false,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				init: function (player) {
					player.storage.tiaofan = 0;
				},
				content: function () {
					if (player.storage.tiaofan > 0.5) {
						player.storage.fanzhuang++;
						player.storage.jlnj++;
					}
					player.storage.tiaofan = 0;
				}
			};
			//本体态度值修改
			if (get.mode() == 'identity') {
				lib.get.attitude = function (from, to) {
					if (!from || !to) return 0;
					from = from._trueMe || from;
					arguments[0] = from;
					var att = get.rawAttitude.apply(this, arguments);
					if (from.isMad()) att = -att;
					if (to.isMad() && att > 0) {
						if (to.identity == 'zhu') {
							att = 1;
						} else {
							att = 0;
						}
					}
					if (!_status.tempnofake) {
						_status.tempnofake = true;
						if (from.ai.modAttitudeFrom) {
							att = from.ai.modAttitudeFrom(from, to, att);
						}
						if (to.ai.modAttitudeTo) {
							att = to.ai.modAttitudeTo(from, to, att);
						}
						delete _status.tempnofake;
					}
					if (_status.mode == 'normal') {
						if (to.identity == 'zhu') {
							return att;
						}
						if (xsatt(from, to) <= 0) {
							if (xsatt(from, to) < -1145) {
								lingatt(from, to);
								return -1;
							}
							return Math.max(-8, att + xsatt(from, to));
						}
						if (xsatt(from, to) > 0) {
							if (xsatt(from, to) > 1145) {
								lingatt(from, to);
								return 1;
							}
							return Math.min(8, att + xsatt(from, to));
						}
					}
					return att;
				};
			}
		}

		/*AI优化*/
		lib.skill._findZhong = {
			trigger: {
				global: 'gameStart'
			},
			unique: true,
			silent: true,
			charlotte: true,
			superCharlotte: true,
			mode: ['identity'],
			filter: function (event, player) {
				return (
					player.identity == 'zhu' &&
					_status.mode == 'normal' &&
					lib.config.extension_AI优化_findZhong == 'on' &&
					game.countPlayer(function (current) {
						return current.identity == 'zhong';
					})
				);
			},
			content: function () {
				var list = [];
				for (var i = 0; i < game.players.length; i++) {
					if (game.players[i].identity == 'zhong') {
						list.push(game.players[i]);
					}
				}
				var target = list.randomGet();
				player.storage.dongcha = target;
				if (!_status.connectMode) {
					if (player == game.me) {
						target.setIdentity('zhong');
						target.node.identity.classList.remove('guessing');
						target.zhongfixed = true;
					}
				} else player.chooseControl('ok').set('dialog', [get.translation(target) + '是忠臣', [[target.name], 'character']]);
			}
		};

		if (lib.config.extension_AI优化_sfjAi == 'shyg') {
			//身份局AI
			/*主公AI*/
			lib.skill._fenghuyunlong = {
				trigger: {
					global: 'gameStart'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				filter: function (event, player) {
					return player.identity == 'zhu' && _status.mode == 'normal';
				},
				content: function () {
					game.countPlayer2(function (current) {
						if (current.identity == 'nei') current.addSkill('jlnj');
					});
					player.addTempSkill('shyg_mz');
				}
			};
			lib.skill.shyg_mz = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				ai: {
					effect: {
						player: function (card, player, target, current) {
							if (get.tag(card, 'damage') && get.attitude(player, target) <= 0) {
								if (card.name == 'huogong' || get.name(card) == 'juedou') return -0.5;
								if (get.name(card) == 'sha' && !card.nature) {
									if ((target.hasSkill('tengjia3') || target.hasSkill('rw_tengjia4')) && !(player.getEquip('qinggang') || player.getEquip('zhuque'))) return 'zeroplayertarget';
								}
								if (get.name(card) == 'sha' && get.color(card) == 'black' && (target.hasSkill('renwang_skill') || target.hasSkill('rw_renwang_skill'))) {
									if (!player.getEquip('qinggang')) return 'zeroplayertarget';
								}
								if (get.attitude(player, target) == 0) return [0.5, 0.5];
								if (get.attitude(player, target) < 0) return 1;
							}
							if (get.name(card) == 'guohe' || get.name(card) == 'shunshou' || get.name(card) == 'lebu' || get.name(card) == 'bingliang' || get.name(card) == 'caomu' || get.name(card) == 'zhujinqiyuan' || get.name(card) == 'caochuanjiejian' || get.name(card) == 'toulianghuanzhu') {
								if (get.attitude(player, target) == 0) return [0.5, 0.5];
								if (get.attitude(player, target) < 0) return 1;
							}
						}
					}
				}
			};
			/*主忠残局AI*/
			lib.skill._tianxiayitong = {
				trigger: {
					global: ['dieAfter']
				},
				silent: true,
				forced: true,
				unique: true,
				popup: false,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				filter: function (event, player) {
					if (get.mode() == 'identity') {
						var numf = game.countPlayer(function (current) {
							return current.identity == 'fan';
						});
					}
					return _status.mode == 'normal' && (player.identity == 'zhu' || player.identity == 'zhong') && numf == 0 && !player.isUnderControl(true);
				},
				content: function () {
					var func = function () {
						game.countPlayer(function (current) {
							current.setIdentity();
						});
					};
					if (player == game.me) func();
					else if (player.isOnline()) player.send(func);
					if (!player.storage.zhibi) player.storage.zhibi = [];
					player.storage.zhibi.addArray(game.players);
					player.addSkill('shyg_smz');
				}
			};
			lib.skill.shyg_smz = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				ai: {
					effect: {
						player: function (card, player, target, current) {
							if (get.tag(card, 'damage')) {
								if (target.hp > 1) {
									if (target.identity == 'zhong') {
										return [0.25, 0.25];
									}
									if (target.identity == 'nei') {
										return [0.5, 0.5];
									}
									return [0.5, 0.5];
								}
								if (get.name(card) == 'nanman' || get.name(card) == 'wanjian') {
									if (
										game.countPlayer(function (current) {
											return current.identity == 'nei' && (current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1'));
										})
									) {
										return 'zeroplayertarget';
									}
								}
							}
							if (get.name(card) == 'guohe' || get.name(card) == 'shunshou' || get.name(card) == 'lebu' || get.name(card) == 'bingliang' || get.name(card) == 'caomu' || get.name(card) == 'zhujinqiyuan' || get.name(card) == 'caochuanjiejian' || get.name(card) == 'toulianghuanzhu') {
								if (target.hp > 1) {
									if (target.identity == 'zhong') {
										return [0.25, 0.25];
									}
									if (target.identity == 'nei') {
										return [0.5, 0.5];
									}
								}
								if (get.name(card) == 'guohe' || get.name(card) == 'shunshou') {
									if (target.countCards('he') == 0 && (target.hasJudge('bingliang') || target.hasJudge('lebu'))) {
										return 0;
									}
								}
								return [0.5, 0.5];
							}
						}
					}
				}
			};
			/*内奸AI*/
			//记录内奸
			lib.skill.jlnj = {
				trigger: {
					player: 'phaseJieshuBegin'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					return player.identity == 'nei';
				},
				init: function (player) {
					player.storage.jlnj = 0;
				},
				content: function () {
					var numz = game.countPlayer(function (current) {
						return current.identity == 'zhong';
					});
					var numf = game.countPlayer(function (current) {
						return current.identity == 'fan';
					});
					if (
						player.getHistory('useCard', function (evt) {
							if (!evt.card) return false;
							if (!((get.tag(evt.card, 'damage') && get.effect(evt.player, evt.card, player, evt.player) < 0) || (get.tag(evt.card, 'lose') && !player.isUnderControl(true)) || get.name(evt.card) == 'lebu' || get.name(evt.card) == 'bingliang')) return false;
							if (evt.card.name == 'nanman' || evt.card.name == 'wanjian') return false;
							if (!evt.isPhaseUsing()) return false;
							if (!evt.targets) return false;
							for (var i = 0; i < evt.targets.length; i++) {
								if (evt.targets[i].identity == 'zhu') {
									if (player.isUnderControl(true)) {
										return true;
									} else {
										if (player.hasSkill('tfattzhu')) return true;
									}
								}
								if (evt.targets[i].identity == 'zhong' && evt.targets[i].ai.shown >= 0.4) {
									if (player.isUnderControl(true)) {
										return true;
									} else {
										if (player.hasSkill('tfattzhong')) return true;
									}
								}
							}
						}).length > 0
					) {
						//game.log('跳反');
						//player.popup('跳反');
						if (numf > 0 && numz > 0 && player.hasSkill('shyg_tf')) player.addSkill('atttf');
						player.storage.jlnj++;
					}
				}
			};
			//空技能
			lib.skill.tfattzhu = {};
			lib.skill.tfattzhong = {};
			lib.skill.atttf = {};
			//内奸态度
			lib.skill._yingshilanggu = {
				trigger: {
					global: ['changeHp', 'dieAfter', 'useSkillAfter', 'phaseZhunbeiAfter', 'phaseBefore', 'phaseJieshuAfter', 'useCard', 'respond']
				},
				silent: true,
				forced: true,
				unique: true,
				popup: false,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				filter: function (event, player) {
					return _status.mode == 'normal' && get.config('double_nei') == false && player.identity == 'nei';
				},
				content: function () {
					'step 0'
					event.cfz = 0;
					event.cff = 0;
					player.removeSkill('shyg_tz');
					player.removeSkill('shyg_tf');
					player.removeSkill('tfattzhu');
					player.removeSkill('tfattzhong');
					'step 1'
					if (get.mode() == 'identity') {
						var numz = game.countPlayer(function (current) {
							return current.identity == 'zhong';
						});
						var mz = game.countPlayer(function (current) {
							return current.identity == 'zhong' && current.ai.shown >= 0.4;
						});
						var numf = game.countPlayer(function (current) {
							return current.identity == 'fan';
						});
						var mf = game.countPlayer(function (current) {
							return current.identity == 'fan' && current.ai.shown >= 0.4;
						});
						var rarez = game.countPlayer(function (current) {
							return (current.identity == 'zhu' || current.identity == 'zhong') && game.getRarity(current.name) == 'rare';
						});
						var epicz = game.countPlayer(function (current) {
							return (current.identity == 'zhu' || current.identity == 'zhong') && game.getRarity(current.name) == 'epic';
						});
						var legendz = game.countPlayer(function (current) {
							return (current.identity == 'zhu' || current.identity == 'zhong') && game.getRarity(current.name) == 'legend';
						});
						event.cfz += rarez + 2 * epicz + 3 * legendz;
						var raref = game.countPlayer(function (current) {
							return current.identity == 'fan' && game.getRarity(current.name) == 'rare';
						});
						var epicf = game.countPlayer(function (current) {
							return current.identity == 'fan' && game.getRarity(current.name) == 'epic';
						});
						var legendf = game.countPlayer(function (current) {
							return current.identity == 'fan' && game.getRarity(current.name) == 'legend';
						});
						event.cff += raref + 2 * epicf + 3 * legendf;
						//判断忠内血最多
						var znmaxhp = function () {
							var list = game.filterPlayer((current) => current.identity == 'nei' || current.identity == 'zhong');
							if (list.length < 2) return null;
							list = list.sort(function (a, b) {
								return b.hp - a.hp;
							});
							if (list[0].hp == list[1].hp) {
								if ((list[1].countCards('h') > list[0].countCards('h') && !list[0].getEquip('equip2')) || (list[1].countCards('e') > list[0].countCards('e') && list[1].getEquip('equip2'))) return list[1];
							}
							return list[0];
						};
						//判断玩家反装忠时场上血最多
						var fanzhuangmaxhp = function () {
							var list = game.filterPlayer((current) => {
								if (game.me.isAlive() && game.me.identity == 'fan') {
									return current.identity == 'nei' || current.identity == 'zhong' || current == game.me;
								}
							});
							if (list && list.length > 1) {
								var list = list.sort(function (a, b) {
									return b.hp - a.hp;
								});
								if (list[0].hp == list[1].hp) {
									if ((list[1].countCards('h') > list[0].countCards('h') && !list[0].getEquip('equip2')) || (list[1].countCards('e') > list[0].countCards('e') && list[1].getEquip('equip2'))) return list[1];
								}
							}
							return list[0];
						};
						var fun = get.attitude;
						if (Math.abs(event.cff - event.cfz) <= 3) {
							if (numz > 0 && numf > 0) {
								if (numf == 1 && numz == 1) {
									player.addTempSkill('shyg_tf');
									player.addTempSkill('tfattzhu');
									player.addTempSkill('tfattzhong');
									get.attitude = function (a, b) {
										if (a.identity == 'nei' && b.identity != 'nei') {
											if (b.identity == 'zhong') {
												if (b.ai.shown < 0.4) return fun(a, b);
												return -6;
											}
											if (b.identity == 'fan') {
												if (b.ai.shown < 0.4) return fun(a, b);
												return 0;
											}
											if (b.identity == 'zhu') return 0;
										}
										if (a.identity != 'nei' && b.identity == 'nei' && a.ai.shown >= 0.4) {
											if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) {
												if (a.identity == 'zhu') return -2;
												if (a.identity == 'zhong') return -2;
												if (a.identity == 'fan') return 2;
											}
										}
										return fun(a, b);
									};
									event.finish();
								} else {
									if (game.zhu.hp >= 2 && numf <= numz + 1) {
										if (!player.hasSkill('atttf') && ((player.storage.jlnj < 1 && !player.isUnderControl(true)) || player.storage.jlnj < 2) && numf == 1 && player.hp + player.countCards((card) => get.tag(card, 'recover') >= 1) == 1) {
											player.addTempSkill('shyg_tz');
										} else {
											player.addTempSkill('shyg_tf');
										}
										player.addTempSkill('tfattzhu');
										player.addTempSkill('tfattzhong');
										get.attitude = function (a, b) {
											if (a.identity == 'nei' && b.identity != 'nei') {
												if (player.hasSkill('shyg_tz')) {
													if (numf == 1 && game.me.identity == 'fan' && game.me.storage.fanzhuang < 2) {
														if (b.identity == 'zhong') {
															if (b.ai.shown < 0.4) return fun(a, b);
															return -1;
														}
														if (b.identity == 'fan') {
															if (b.ai.shown < 0.4) return fun(a, b);
															return -1;
														}
														if (b.identity == 'zhu') return 3;
													} else {
														if (b.identity == 'zhong') {
															if (b.ai.shown < 0.4) return fun(a, b);
															return 0;
														}
														if (b.identity == 'fan') {
															if (b.ai.shown < 0.4) return fun(a, b);
															return -1;
														}
														if (b.identity == 'zhu') return 3;
													}
												} else {
													if (b.identity == 'zhong') {
														if (b.ai.shown < 0.4) return fun(a, b);
														return -6;
													}
													if (b.identity == 'fan') {
														if (b.ai.shown < 0.4) return fun(a, b);
														if (game.me == b && game.me.storage.fanzhuang < 2) return -1;
														return 0;
													}
													if (b.identity == 'zhu') return 0;
												}
											}
											if (a.identity != 'nei' && b.identity == 'nei' && a.ai.shown >= 0.4 && !player.isUnderControl(true)) {
												if (player.hasSkill('shyg_tz')) {
													if (numf == 1 && game.me.identity == 'fan' && game.me.storage.fanzhuang < 2) {
														if (a.identity == 'zhu') {
															if (player.hp == 1) return 0;
															return -0.5;
														}
														if (a.identity == 'zhong') return -0.5;
														if (a.identity == 'fan') return -0.5;
													} else {
														if (a.identity == 'zhu') return 3;
														if (a.identity == 'zhong') return 0;
														if (a.identity == 'fan') return -0.5;
													}
												} else {
													if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) {
														if (a.identity == 'zhu') return -0.5;
														if (a.identity == 'zhong') return -0.5;
														if (a.identity == 'fan') return 0.5;
													}
												}
											}
											return fun(a, b);
										};
										event.finish();
									} else {
										player.addTempSkill('shyg_tz');
										get.attitude = function (a, b) {
											if (a.identity == 'nei' && b.identity != 'nei') {
												if (b.identity == 'zhong') {
													if (b.ai.shown < 0.4) return fun(a, b);
													if (numf == 1) return 0;
													return 6;
												}
												if (b.identity == 'fan') {
													if (b.ai.shown < 0.4) return fun(a, b);
													return -6;
												}
												if (b.identity == 'zhu') return 8;
											}
											return fun(a, b);
										};
										event.finish();
									}
								}
							}
							if (numf == 0 && numz > 0) {
								player.addTempSkill('shyg_tf');
								player.addTempSkill('tfattzhu');
								get.attitude = function (a, b) {
									if (a.identity == 'nei' && b.identity != 'nei') {
										if (b.identity == 'zhong') return -6;
										if (b.identity == 'zhu') {
											if (!player.hasSkill('atttf') && ((player.storage.jlnj < 1 && !player.isUnderControl(true)) || player.storage.jlnj < 2)) return 0.1;
											return 0;
										}
									}
									if (a.identity == 'zhu') {
										if (b.identity == 'zhong') {
											if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return 6;
											if (player.hasSkill('atttf')) return 6;
											if (b == znmaxhp()) return -1;
											return 0;
										}
										if (b.identity == 'nei') {
											if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return -6;
											if (player.hasSkill('atttf')) return -6;
											if (b == znmaxhp()) return -1;
											return 0;
										}
									}
									if (a.identity == 'zhong') {
										if (b.identity == 'zhong' && b != a) {
											if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return 6;
											if (player.hasSkill('atttf')) return 6;
											if (b == znmaxhp()) return -6;
											return -2;
										}
										if (b.identity == 'nei') {
											if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return -6;
											if (player.hasSkill('atttf')) return -6;
											if (b == znmaxhp()) return -6;
											return -2;
										}
									}
									return fun(a, b);
								};
								event.finish();
							}
							if (numf > 0 && numz == 0) {
								player.addTempSkill('shyg_tz');
								get.attitude = function (a, b) {
									if (a.identity == 'nei' && b.identity != 'nei') {
										if (b.identity == 'fan') return -6;
										if (b.identity == 'zhu') return 6;
									}
									if (b.identity == 'nei') {
										if (a.identity == 'zhu') {
											if (game.me.identity == 'fan' && game.me.storage.fanzhuang < 2) {
												if (fanzhuangmaxhp() == game.me) {
													return -6;
												}
												return 0;
											}
											return 6;
										}
										if (a.identity == 'fan') return -3;
									}
									return fun(a, b);
								};
								event.finish();
							}
							if (numz == 0 && numf == 0) {
								player.removeSkill('shyg_tz');
								player.removeSkill('shyg_tf');
								get.attitude = function (a, b) {
									if (a == game.zhu && b.identity == 'nei') return -10;
									if (a.identity == 'nei' && b == game.zhu) return -10;
									return fun(a, b);
								};
								event.finish();
							}
						} else {
							if (event.cff >= event.cfz || (game.zhu.hp < 2 && numf > 0)) {
								player.addTempSkill('shyg_tz');
								get.attitude = function (a, b) {
									if (a.identity == 'nei' && b.identity != 'nei') {
										if (b.identity == 'zhong') {
											if (b.ai.shown < 0.4) return fun(a, b);
											return 6;
										}
										if (b.identity == 'fan') {
											if (b.ai.shown < 0.4) return fun(a, b);
											return -6;
										}
										if (b.identity == 'zhu') return 8;
									}
									if (a.identity == 'zhu' && b.identity == 'nei') {
										if (numz == 0) return 6;
										return 0;
									}
									return fun(a, b);
								};
								event.finish();
							}
							if (event.cff < event.cfz && game.zhu.hp >= 2) {
								player.addTempSkill('shyg_tf');
								player.addTempSkill('tfattzhu');
								if (numf > 0) {
									player.addTempSkill('tfattzhong');
								}
								get.attitude = function (a, b) {
									if (a.identity == 'nei' && b.identity != 'nei') {
										if (b.identity == 'zhong') {
											if (b.ai.shown < 0.4) return fun(a, b);
											return -6;
										}
										if (b.identity == 'fan') {
											if (b.ai.shown < 0.4) return fun(a, b);
											return 0;
										}
										if (b.identity == 'zhu') {
											if (numf == 0 && !player.hasSkill('atttf') && ((player.storage.jlnj < 1 && !player.isUnderControl(true)) || player.storage.jlnj < 2)) return 0.1;
											return 0;
										}
									}
									if (numf == 0) {
										if (a.identity == 'zhu') {
											if (b.identity == 'zhong') {
												if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return 6;
												if (player.hasSkill('atttf')) return 6;
												if (b == znmaxhp()) return -1;
												return 0;
											}
											if (b.identity == 'nei') {
												if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return -6;
												if (player.hasSkill('atttf')) return -6;
												if (b == znmaxhp()) return -1;
												return 0;
											}
										}
										if (a.identity == 'zhong') {
											if (b.identity == 'zhong' && b != a) {
												if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return 6;
												if (player.hasSkill('atttf')) return 6;
												if (b == znmaxhp()) return -6;
												return -2;
											}
											if (b.identity == 'nei') {
												if ((player.storage.jlnj > 0 && !player.isUnderControl(true)) || player.storage.jlnj > 1) return -6;
												if (player.hasSkill('atttf')) return -6;
												if (b == znmaxhp()) return -6;
												return -2;
											}
										}
									}
									return fun(a, b);
								};
								event.finish();
							}
						}
					}
				}
			};
			/*内奸跳忠*/
			lib.skill.shyg_tz = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				ai: {
					effect: {
						player: function (card, player, target, current) {
							if (get.tag(card, 'damage')) {
								if (target.identity == 'zhu') {
									return -1;
								}
								if (target.identity == 'fan') {
									return 1;
								}
								if (target.identity == 'zhong') {
									return 0.5;
								}
							}
							if (get.name(card) == 'guohe' || get.name(card) == 'lebu' || get.name(card) == 'bingliang' || get.name(card) == 'caomu' || get.name(card) == 'zhujinqiyuan' || get.name(card) == 'caochuanjiejian' || get.name(card) == 'toulianghuanzhu') {
								if (target.identity == 'zhu') {
									return 0.25;
								}
								if (target.identity == 'fan') {
									return 1;
								}
								if (target.identity == 'zhong') {
									return 0.5;
								}
							}
						}
					}
				}
			};
			/*内奸跳反*/
			lib.skill.shyg_tf = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				ai: {
					effect: {
						player: function (card, player, target, current) {
							if (get.tag(card, 'damage')) {
								if (target.identity == 'zhu') {
									return -1;
								}
								if (target.identity == 'zhong') {
									return 1;
								}
								if (target.identity == 'fan') {
									return 0.5;
								}
							}
							if (get.name(card) == 'guohe' || get.name(card) == 'lebu' || get.name(card) == 'bingliang' || get.name(card) == 'caomu' || get.name(card) == 'zhujinqiyuan' || get.name(card) == 'caochuanjiejian' || get.name(card) == 'toulianghuanzhu') {
								if (game.zhu.hp > 3 && target.identity == 'zhu') {
									return 0.25;
								}
								if (target.identity == 'zhong') {
									return 1;
								}
								if (target.identity == 'fan') {
									return 0.5;
								}
							}
						}
					}
				}
			};
			/*AI嘲讽*/
			lib.skill._wanjunpiyi = {
				trigger: {
					global: 'gameStart'
				},
				silent: true,
				forced: true,
				unique: true,
				popup: false,
				charlotte: true,
				superCharlotte: true,
				content: function () {
					if (game.getRarity(player.name) == 'common') {
						player.addSkill('chaofeng_common');
					}
					if (game.getRarity(player.name) == 'rare') {
						player.addSkill('chaofeng_rare');
					}
					if (game.getRarity(player.name) == 'epic') {
						player.addSkill('chaofeng_epic');
					}
					if (game.getRarity(player.name) == 'legend') {
						player.addSkill('chaofeng_legend');
					}
				}
			};
			lib.skill.chaofeng_common = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				ai: {
					threaten: 1
				}
			};
			lib.skill.chaofeng_rare = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				ai: {
					threaten: 2
				}
			};
			lib.skill.chaofeng_epic = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				ai: {
					threaten: 3
				}
			};
			lib.skill.chaofeng_legend = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				ai: {
					threaten: 4
				}
			};
			/*身份场AI*/
			lib.skill._shyg = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mode: ['identity'],
				ai: {
					effect: {
						player: function (card, player, target, current) {
							var numz = game.countPlayer(function (current) {
								return current.identity == 'zhong';
							});
							var numf = game.countPlayer(function (current) {
								return current.identity == 'fan';
							});
							var numn = game.countPlayer(function (current) {
								return current.identity == 'nei';
							});
							/*桃补充*/
							if (_status.mode == 'normal' && get.name(card) == 'tao' && card.isCard) {
								if (player.identity == 'zhong' && player.hp >= 1 && game.zhu.hp <= 1 && player.countCards('hs', 'tao') <= 1 && target.identity != 'zhu') {
									return 'zeroplayertarget';
								}
							}
							/*桃园结义补充*/
							if (_status.mode == 'normal' && get.name(card) == 'taoyuan') {
								if ((player.identity == 'zhong' || player.identity == 'zhu') && game.zhu.hp == 1 && get.recoverEffect(game.zhu, player, player) > 0) {
									return [2.5, 2.5];
								}
							}
							/*身份场主内反残局AI*/
							if (player.identity == 'zhu' && _status.mode == 'normal' && get.tag(card, 'damage') && numz == 0 && numf > 0) {
								if (target.identity == 'nei') {
									return -1.5;
								}
							}
							if (player.identity == 'nei' && _status.mode == 'normal' && get.tag(card, 'damage') && numz >= 2 && numf == 1) {
								if (target.identity == 'fan') {
									return -1.5;
								}
							}
							if (player.identity == 'fan' && _status.mode == 'normal' && get.tag(card, 'damage')) {
								if (numz >= 2 && numf == 1) {
									if (target.identity == 'nei') {
										return -1.5;
									}
								}
							}
							/*杀队友能赢？*/
							if (player.isUnderControl(true) && player.identity == 'fan' && get.tag(card, 'damage') && get.attitude(target, player) > 0) {
								if (target.identity == 'fan' && target.hp == 1 && target.countCards('h') < 3 && (numz > 0 || numn > 0)) {
									return 'zeroplayertarget';
								}
							}
						}
					}
				}
			};
		}
		else if (lib.config.extension_AI优化_sfjAi == 'gjcx') {
				lib.skill.gjcx_zhuAi = {
					trigger: {global: 'zhuUpdate'},
					silent: true,
					forced: true,
					unique: true,
					popup: false,
					charlotte: true,
					superCharlotte: true,
					content: function () {
						let target = game.findPlayer(function (current) {
							return current == game.zhu;
						});
						player.removeSkill('gjcx_zhuAi');
						target.addSkill('gjcx_zhuAi');
					},
					ai: {
						effect: {
							player: function (card, player, target) {
								if (typeof card != 'object' || player._aiyh_zhuAi_temp || get.itemtype(target) != 'player') return;
								player._aiyh_zhuAi_temp = true;
								let att = get.attitude(player, target);
								delete player._aiyh_zhuAi_temp;
								if (Math.abs(att) < 1 && player.needsToDiscard()) {
									if ((get.tag(card, 'damage') && get.name(card) != 'huogong' && get.name(card) != 'juedou' && (target.hp > 1 || player.hasSkillTag('jueqing', false, target))) || get.name(card) == 'lebu' || get.name(card) == 'bingliang' || get.name(card) == 'fudichouxin') return [1, 0.8];
								}
							},
							target: function (card, player, target) {
								if (typeof card != 'object' || target._zhu_temp || get.itemtype(player) != 'player') return;
								target._zhu_temp = true;
								let eff = get.effect(target, card, player, target);
								delete target._zhu_temp;
								if (!eff) return;
								if (get.tag(card, 'damage')) return [1, -Math.min(3, 0.8 * target.getDamagedHp()) - 0.6];
								if (get.name(card) == 'lebu' || get.name(card) == 'bingliang') return [1, -0.8];
							}
						}
					}
				};
				lib.skill.gjcx_neiAi = {
					init: function (player) {
						game.countPlayer(function (current) {
							current.storage.gjcx_neiAi = current.maxHp;
						});
					},
					trigger: {
						global: ['phaseUseBegin', 'changeHp', 'dieAfter']
					},
					silent: true,
					forced: true,
					forceDie: true,
					unique: true,
					popup: false,
					priority: -1,
					charlotte: true,
					superCharlotte: true,
					mode: ['identity'],
					filter: function (event, player) {
						return !player.hasSkill('gjcx_neiAi_nojump') && !player.hasSkill('gjcx_neiAi_suspend');
					},
					content: function () {
						'step 0'
						player.removeSkill('gjcx_neiJiang');
						player.removeSkill('gjcx_neiZhong');
						player.removeSkill('gjcx_neiFan');
						'step 1'
						if (player.identity != 'nei' || game.players.length <= 2) {
							player.removeSkill('gjcx_neiAi');
							player.removeSkill('gjcx_neiAi_damage');
							player.removeSkill('gjcx_neiAi_expose');
							event.finish();
						}
						if (
							trigger.name == 'die' &&
							!game.hasPlayer(function (current) {
								return current.identity == 'fan';
							})
						) {
							player.removeSkill('gjcx_neiAi_damage');
							player.addSkill('gjcx_neiAi_nojump');
							event.finish();
						}
						'step 2'
						let zs = game.filterPlayer(function (current) {
							return current.identity == 'zhu' || current.identity == 'zhong' || current.identity == 'mingzhong';
						});
						let fs = game.filterPlayer(function (current) {
							return current.identity == 'fan';
						});
						let all = 0,
							mine = 0;
						for (let i of game.players) {
							let sym,
								base1 = 1,
								base2 = 0,
								temp = 0;
							if (i == player || zs.contains(i)) sym = 1;
							else if (fs.contains(i)) sym = -1;
							else continue;
							if (i.hp > 0) {
								if (typeof lib.config.extension_AI优化_qz[i.name] == 'number') base1 = lib.config.extension_AI优化_qz[i.name];
								else if (lib.config.extension_AI优化_ckQz == 'cf') base1 = get.threaten(i, player);
								else if (lib.config.extension_AI优化_ckQz == 'pj') {
									let rank1 = game.getRarity(i.name);
									if (rank1 == 'rare') base1 = 1.1;
									else if (rank1 == 'epic') base1 = 1.57;
									else if (rank1 == 'legend') base1 = 1.95;
									else if (rank1 == 'junk') base1 = 0.8;
								}
								if (i.name2 != undefined) {
									if (typeof lib.config.extension_AI优化_qz[i.name2] == 'number') base2 = lib.config.extension_AI优化_qz[i.name2];
									else if (lib.config.extension_AI优化_ckQz == 'pj') {
										let rank2 = game.getRarity(i.name2);
										base2 = 1;
										if (rank2 == 'rare') base2 = 1.1;
										else if (rank2 == 'epic') base2 = 1.57;
										else if (rank2 == 'legend') base2 = 1.95;
										else if (rank2 == 'junk') base2 = 0.8;
									}
								}
								if (base2) base1 = (base1 + base2) / 2;
								if (i.isTurnedOver()) base1 -= 0.28;
								if (i.storage.gjcx_neiAi && i.storage.gjcx_neiAi != i.maxHp) {
									if (i.maxHp > i.storage.gjcx_neiAi) {
										if (i.hp > i.storage.gjcx_neiAi) temp += ((1 + (i.maxHp - i.storage.gjcx_neiAi) / 10) * base1 * i.hp) / i.maxHp;
										else temp += (base1 * i.hp) / i.storage.gjcx_neiAi;
									} else temp += (base1 * i.hp) / Math.min(5, i.storage.gjcx_neiAi);
								} else temp += (base1 * i.hp) / i.maxHp;
							}
							temp += (i.countCards('hes') - i.countCards('j') * 1.6) / 10;
							if (player == i) mine = temp * Math.sqrt(base1);
							else all += sym * temp;
						}
						if (Math.abs(all) < mine && game.zhu.hp > 2 && zs.length > 1) player.addSkill('gjcx_neiJiang');
						else if (all > 0) {
							if (all > mine) player.addSkill('gjcx_neiFan');
							else if (zs.length == 1) player.addSkill('gjcx_neiZhong');
							else player.addSkill('gjcx_neiJiang');
						} else player.addSkill('gjcx_neiZhong');
					},
					subSkill: {
						damage: {
							mode: ['identity'],
							trigger: {player: 'useCard1'},
							filter: function (event, player) {
								return get.tag(event.card, 'damage');
							},
							direct: true,
							unique: true,
							lastDo: true,
							charlotte: true,
							superCharlotte: true,
							content: function () {
								player.addTempSkill('gjcx_neiAi_suspend', {player: 'useCardAfter'});
							}
						},
						expose: {
							mode: ['identity'],
							trigger: {player: 'useCard1'},
							filter: function (event, player) {
								return !player.identityShown && typeof player.ai.shown == 'number' && player.ai.shown;
							},
							silent: true,
							forced: true,
							unique: true,
							popup: false,
							charlotte: true,
							superCharlotte: true,
							content: function () {
								if (player.ai.shown >= 0.95 || get.attitude(game.zhu, player) < 0) player.removeSkill('gjcx_neiAi_expose');
								else if (trigger.card.name == 'tao') {
									for (let i of trigger.targets) {
										if (player == i) continue;
										if (get.attitude(game.zhu, i) > 0) player.ai.shown -= 0.5;
										else if (i.identity == 'fan') player.ai.shown = 0.99;
									}
								} else if (trigger.targets && trigger.targets.length == 1 && player != trigger.targets[0] && !player.hasSkill('gjcx_neiZhong') && !player.hasSkill('gjcx_neiJiang') && get.attitude(game.zhu, trigger.targets[0]) * get.effect(trigger.targets[0], trigger.card, player, game.zhu) < 0) {
									player.removeSkill('gjcx_neiAi_expose');
									player.ai.shown = 0.99;
								} else if (!player.hasSkill('gjcx_neiFan')) player.ai.shown -= 0.03;
							}
						},
						suspend: {
							charlotte: true,
							superCharlotte: true
						},
						nojump: {
							charlotte: true,
							superCharlotte: true
						}
					}
				};
				lib.skill.gjcx_neiZhong = {
					silent: true,
					forced: true,
					unique: true,
					popup: false,
					charlotte: true,
					superCharlotte: true,
					mode: ['identity'],
					ai: {
						effect: {
							player: function (card, player, target) {
								if (typeof card != 'object' || player._aiyh_neiZhong_temp || get.itemtype(target) != 'player') return;
								player._aiyh_neiZhong_temp = true;
								let eff = get.effect(target, card, player, player);
								delete player._aiyh_neiZhong_temp;
								if (!eff) return;
								if ((get.tag(card, 'damage') && get.name(card) != 'huogong') || get.name(card) == 'lebu' || get.name(card) == 'bingliang') {
									if (target.identity == 'zhu') return [1, -3];
									if (target.ai.shown < 0.95 && get.attitude(game.zhu, target) <= 0) {
										if (player.needsToDiscard()) return [1, 0.5];
										return [0, 0];
									}
									if (target.identity != 'fan') return [1, -2];
									return [1, 0.9];
								}
								if (get.name(card) == 'tao') {
									if (target == player || target == game.zhu || (_status.event.dying && player.countCards('hs', 'tao') + _status.event.dying.hp <= 0)) return;
									if (target.identity != 'fan' && game.zhu.hp > 1 && player.hp > 2) return [1, 0.8];
									return [1, -2];
								}
							}
						}
					}
				};
				lib.skill.gjcx_neiFan = {
					silent: true,
					forced: true,
					unique: true,
					popup: false,
					charlotte: true,
					superCharlotte: true,
					mode: ['identity'],
					ai: {
						effect: {
							player: function (card, player, target) {
								if (typeof card != 'object' || player._aiyh_neiFan_temp || get.itemtype(target) != 'player') return;
								player._aiyh_neiFan_temp = true;
								let eff = get.effect(target, card, player, player);
								delete player._aiyh_neiFan_temp;
								if (!eff) return;
								if ((get.tag(card, 'damage') && get.name(card) != 'huogong') || get.name(card) == 'lebu' || get.name(card) == 'bingliang') {
									if (
										target.identity == 'zhu' &&
										(target.hp < 2 ||
											game.hasPlayer(function (current) {
												return current.identity == 'zhong' || current.identity == 'mingzhong';
											}))
									)
										return [1, -3];
									if (target.identity == 'fan') return [1, -2];
									if (target.ai.shown < 0.95) {
										if (player.needsToDiscard()) return [1, 0.5];
										return [0, 0];
									}
									return [1, 0.9];
								}
								if (get.name(card) == 'tao') {
									if (target == player || target == game.zhu || (_status.event.dying && player.countCards('hs', 'tao') + _status.event.dying.hp <= 0)) return;
									if (target.identity == 'fan' && game.zhu.hp > 1 && player.hp > 2) return [1, 1.6];
									return [1, -2];
								}
							}
						}
					}
				};
				lib.skill.gjcx_neiJiang = {
					silent: true,
					forced: true,
					unique: true,
					popup: false,
					charlotte: true,
					superCharlotte: true,
					mode: ['identity'],
					ai: {
						effect: {
							player: function (card, player, target) {
								if (typeof card != 'object' || get.itemtype(target) != 'player') return;
								if ((get.tag(card, 'damage') && get.name(card) != 'huogong') || get.name(card) == 'lebu' || get.name(card) == 'bingliang') {
									if (target.identity == 'zhu') return [1, -3];
									if (!player.needsToDiscard()) return [0, 0];
									return [1, -0.5];
								}
								if (get.name(card) == 'tao') {
									if (target == player && game.zhu.hp > 2) return [1, 0.9];
									if (target == player || target == game.zhu) return;
									return [1, -2];
								}
								if (get.name(card) == 'jiu' && player.hp > 0) return [0, 0];
							}
						}
					}
				};
		lib.skill._aiyh_lianhe = {
			//联合ai
			mode: ['identity'],
			locked: true,
			unique: true,
			forceDie: true,
			charlotte: true,
			superCharlotte: true,
			ai: {
				effect: {
					player: function (card, player, target) {
						if (lib.config.extension_AI优化_sfjAi != 'gjcx' || typeof card != 'object' || get.itemtype(target) != 'player') return;
						if (
							target.getEquip(2) &&
							!target.hasSkillTag('unequip2') &&
							!player.hasSkillTag('unequip', false, {
								name: get.name(card),
								target: target,
								card: card
							}) &&
							!player.hasSkillTag('unequip_ai', false, {
								name: card ? get.name(card) : null,
								target: target,
								card: card
							})
						) {
							if (get.tag(card, 'natureDamage') && (target.getEquip('taipingyaoshu') || target.getEquip('suolianjia'))) return 'zeroplayertarget';
							if (get.name(card) == 'sha') {
								if (!card.nature && (target.getEquip('tengjia') || target.getEquip('rewrite_tengjia')) && !player.hasSkill('zhuque_skill')) return 'zeroplayertarget';
								if ((target.getEquip('renwang') && get.color(card) == 'black') || (target.getEquip('rewrite_renwang') && get.suit(card) != 'diamond')) return 'zeroplayertarget';
							}
							if (target.getEquip('heiguangkai') && (get.name(card) == 'sha' || (get.type(card) == 'trick' && (get.tag(card, 'damage') || get.color(card) == 'black')))) {
								if (ui.selected.targets && !ui.selected.targets.length) return;
								let info = get.info(card);
								if (!info || info.notarget || !info.filterTarget) return;
								let range,
									select = get.copy(info.selectTarget),
									filter;
								if (select == undefined) range = [1, 1];
								else if (typeof select == 'number') range = [select, select];
								else if (get.itemtype(select) == 'select') range = select;
								else if (typeof select == 'function') range = select(card, player);
								if (info.singleCard) range = [1, 1];
								game.checkMod(card, player, range, 'selectTarget', player);
								if (range[1] < -1) range = [1, 1];
								else if (range[0] < 0) {
									if (info.filterTarget === true) filter = game.players.length;
									else
										filter = game.countPlayer(function (current) {
											return info.filterTarget(card, player, current);
										});
									range = [filter, filter];
								}
								if (!range || (range[0] < 2 && range[1] < 2)) return;
								return 'zeroplayertarget';
							}
						}
						if (target.ai.shown < 0.95 || player == target) return;
						if (
							target.identity == 'nei' &&
							!player.getFriends().length &&
							(player.identity == 'fan' || player == game.zhu) &&
							game.countPlayer(function (current) {
								let num = 1;
								if (typeof lib.config.extension_AI优化_qz[current.name] == 'number') num = lib.config.extension_AI优化_qz[current.name];
								if (current.name2 != undefined && typeof lib.config.extension_AI优化_qz[current.name2] == 'number') num = (num + lib.config.extension_AI优化_qz[current.name2]) / 2;
								if (current.isTurnedOver()) num -= 0.28;
								if (current.storage.gjcx_neiAi && current.storage.gjcx_neiAi != current.maxHp) {
									if (current.maxHp > current.storage.gjcx_neiAi) {
										if (current.hp > current.storage.gjcx_neiAi) num *= ((1 + (current.maxHp - current.storage.gjcx_neiAi) / 10) * current.hp) / current.maxHp;
										else num *= current.hp / current.storage.gjcx_neiAi;
									} else num *= current.hp / Math.min(5, current.storage.gjcx_neiAi);
								} else num *= current.hp / current.maxHp;
								num += current.countCards('hes') * 0.1 - current.countCards('j') * 0.16;
								if (current == player) return -2 * num;
								if (current.identity == 'nei') return -num;
								return num;
							}) > 0
						) {
							if (get.tag(card, 'damage')) return [1, -2];
							if (get.name(card) == 'tao' && player.hp > 1 && player.countCards('hs', 'tao') + target.hp > 0) return [1, 2];
						}
					}
				}
			}
		};
			}

		if (lib.config.extension_AI优化_btAi != 'off'){
			/*本体函数优化*/
			/*护甲伤害判断*/
			lib.get.damageEffect = function (target, player, viewer, nature) {
				if (!player) player = target;
				if (!viewer) viewer = target;
				var name = 'damage';
				if (nature == 'fire') name = 'firedamage';
				else if (nature == 'thunder') name = 'thunderdamage';
				else if (nature == 'ice') name = 'icedamage';
				var eff = get.effect(target, {name: name}, player, viewer);
				return eff;
			};
			//拼点AI @蓝色火鸡提供代码建议
			lib.element.player.chooseToCompare=function(target,check){
				var next=game.createEvent('chooseToCompare');
				next.player=this;
				if(Array.isArray(target)){
					next.targets=target;
					if(check) next.ai=check;
					else next.ai=function(card){
						if(typeof card=='string'&&lib.skill[card]){
							var ais=lib.skill[card].check||function(){return 0};
							return ais();
						}
						var addi=(get.value(card)>=8&&get.type(card)!='equip')?-3:0;
						if(card.name=='du') addi-=3;
						var source=_status.event.source;
						var player=_status.event.player;
						var event=_status.event.getParent();
						var getn=function(card){
							if(player.hasSkill('tianbian')&&get.suit(card)=='heart') return 13*(Boolean(event.small)?-1:1);
							return get.number(card)*(Boolean(event.small)?-1:1);
						}
						if(source&&source!=player){
							if(get.attitude(player,source)>1){
								if(Boolean(event.small)) return getn(card)-get.value(card)/5+addi;
								return -getn(card)-get.value(card)/5+addi;
							}
							if(Boolean(event.small)) return -getn(card)-get.value(card)/5+addi;
							return getn(card)-get.value(card)/5+addi;
						}
						else{
							if(Boolean(event.small)) return -getn(card)-get.value(card)/5+addi;
							return getn(card)-get.value(card)/5+addi;
						}
					}
					next.setContent('chooseToCompareMultiple');
				}
				else{
					next.target=target;
					if(check) next.ai=check;
					else next.ai=function(card){
						if(typeof card=='string'&&lib.skill[card]){
							var ais=lib.skill[card].check||function(){return 0};
							return ais();
						}
						var player=get.owner(card);
						var getn=function(card){
							if(player.hasSkill('tianbian')&&get.suit(card)=='heart') return 13;
							return get.number(card);
						}
						var event=_status.event.getParent();
						var to=(player==event.player?event.target:event.player);
						var addi=(get.value(card)>=8&&get.type(card)!='equip')?-6:0;
						if(card.name=='du') addi-=5;
						if(player==event.player){
							if(Boolean(event.small)) return -getn(card)-get.value(card)/5+addi;
							return getn(card)-get.value(card)/5+addi;
						}
						else{
							if((get.attitude(player,to)<=0)==Boolean(event.small)) return -getn(card)-get.value(card)/5+addi;
							return getn(card)-get.value(card)/5+addi;
						}
					}
					next.setContent('chooseToCompare');
				}
				next.forceDie=true;
				next._args=Array.from(arguments);
				return next;
			};
			lib.element.player.hasShan=function(){
				if(this.countCards('hs','shan')||this.countCards('e','hufu')) return true;
				if(this.hasSkillTag('respondShan',true,null,true)) return true;
				return false;
			};
			lib.element.player.mayHaveShan=function(viewer){
				if(this.countCards('e','hufu')||this.hasSkillTag('respondShan',true,null,true)) return true;
				if(!viewer||get.itemtype(viewer)!='player') viewer=_status.event.player;
				if(viewer.hasSkillTag('viewHandcard', null, this, true)){
					if(this.countCards('hs','shan')) return true;
					return false;
				}
				return 0.18*this.countCards('hs')>Math.random();
			};
		}
		if (lib.config.extension_AI优化_btAi == 'shyg') {
			//全局AI
			lib.skill._shyg_qjAi = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				mod: {
					/*存牌*/
					aiUseful: function (player, card, num) {
						if (player.hp >= 3) {
							if (get.name(card) == 'wuxie') {
								return num + 1;
							}
						}
						if (get.name(card) == 'tao') {
							return num + 5;
						}
						if (get.name(card) == 'jiu') {
							return num + 3;
						}
					},
					aiValue: function (player, card, num) {
						/*武器对策*/
						if (player.isPhaseUsing()) {
							if (
								player.countCards('hes', {name: 'qinggang'}) >= 1 &&
								game.hasPlayer(function (current) {
									return current != player && current.getEquip(2) && get.attitude(player, current) < 0;
								}) == 1
							) {
								if (card.name == 'qinggang') {
									return num + 15;
								}
							}
							if (
								player.countCards('hes', {name: 'qilin'}) >= 1 &&
								game.hasPlayer(function (current) {
									return current != player && current.getEquip(3) && get.attitude(player, current) < 0;
								}) == 1
							) {
								if (card.name == 'qilin') {
									return num + 15;
								}
							}
							if (
								player.countCards('hes', {name: 'zhuque'}) >= 1 &&
								game.hasPlayer(function (current) {
									return current != player && current.hasSkill('tengjia3') && get.attitude(player, current) < 0;
								}) == 1
							) {
								if (card.name == 'zhuque') {
									return num + 15;
								}
							}
							if (
								player.countCards('hes', {name: 'guding'}) >= 1 &&
								game.hasPlayer(function (current) {
									return current != player && current.countCards('h') <= 0 && get.attitude(player, current) < 0;
								}) == 1
							) {
								if (card.name == 'guding') {
									return num + 15;
								}
							}
						}
					},
				},
				ai: {
					effect: {
						player: function (card, player, target, current) {
							var numz = game.countPlayer(function (current) {
								return current.identity == 'zhong';
							});
							var numf = game.countPlayer(function (current) {
								return current.identity == 'fan';
							});
							/*横置对策*/
							var hzdy = game.countPlayer(function (current) {
								return current.isLinked() && !current.hasSkillTag('nodamage') && get.attitude(current, player) > 0;
							});
							var hzdr = game.countPlayer(function (current) {
								return current.isLinked() && !current.hasSkillTag('nodamage') && get.attitude(current, player) <= 0;
							});
							var hzdyf = game.countPlayer(function (current) {
								return current.isLinked() && !(current.hasSkillTag('nodamage') || current.hasSkillTag('nofire')) && get.attitude(current, player) > 0;
							});
							var hzdrf = game.countPlayer(function (current) {
								return current.isLinked() && !(current.hasSkillTag('nodamage') || current.hasSkillTag('nofire')) && get.attitude(current, player) <= 0;
							});
							var hzdyt = game.countPlayer(function (current) {
								return current.isLinked() && !(current.hasSkillTag('nodamage') || current.hasSkillTag('nothunder')) && get.attitude(current, player) > 0;
							});
							var hzdrt = game.countPlayer(function (current) {
								return current.isLinked() && !(current.hasSkillTag('nodamage') || current.hasSkillTag('nothunder')) && get.attitude(current, player) <= 0;
							});
							var cxhzdyf = game.countPlayer(function (current) {
								return current.isLinked() && !(current.hasSkillTag('nodamage') || current.hasSkillTag('nofire')) && current.hp <= 1 && get.attitude(current, player) > 0;
							});
							var cxhzdyt = game.countPlayer(function (current) {
								return current.isLinked() && !(current.hasSkillTag('nodamage') || current.hasSkillTag('nothunder')) && current.hp <= 1 && get.attitude(current, player) > 0;
							});
							if (player.isUnderControl(true) && get.tag(card, 'damage') && card.nature && get.attitude(target, player) > 0) {
								if (target.isLinked() && hzdr > 0) {
									return 'zeroplayertarget';
								}
							}
							if (get.tag(card, 'damage') && card.nature && card.nature == 'fire') {
								if (target.isLinked()) {
									if (hzdyf >= hzdrf && cxhzdyf >= 1) {
										return 'zeroplayertarget';
									}
									if (get.mode() == 'identity') {
										if (player.identity == 'zhong' && game.zhu.isLinked() && game.zhu.hp <= 3 && !(game.zhu.hasSkillTag('nodamage') || game.zhu.hasSkillTag('nofire'))) {
											return 'zeroplayertarget';
										}
										if (player.identity == 'zhu' && cxhzdyf >= 1) {
											return 'zeroplayertarget';
										}
										if (player.identity == 'nei' && game.zhu.isLinked() && game.zhu.hp <= 3 && (numz > 0 || numf > 0)) {
											return 'zeroplayertarget';
										}
										if (player.identity == 'nei' && player.isLinked() && player.hp <= 2 && target.identity != 'zhu') {
											return 'zeroplayertarget';
										}
									}
								}
							}
							if (get.tag(card, 'damage') && card.nature && card.nature == 'thunder') {
								if (target.isLinked()) {
									if (hzdyt >= hzdrt && cxhzdyt >= 1) {
										return 'zeroplayertarget';
									}
									if (get.mode() == 'identity') {
										if (player.identity == 'zhong' && game.zhu.isLinked() && game.zhu.hp <= 3 && !(game.zhu.hasSkillTag('nodamage') || game.zhu.hasSkillTag('nothunder'))) {
											return 'zeroplayertarget';
										}
										if (player.identity == 'zhu' && cxhzdyt >= 1) {
											return 'zeroplayertarget';
										}
										if (player.identity == 'nei' && game.zhu.isLinked() && game.zhu.hp <= 3 && (numz > 0 || numf > 0)) {
											return 'zeroplayertarget';
										}
										if (player.identity == 'nei' && player.isLinked() && player.hp <= 2 && target.identity != 'zhu') {
											return 'zeroplayertarget';
										}
									}
								}
							}
							/*杀对策*/
							if (get.name(card) == 'sha') {
								if (!player.hasSkill('xinpojun') && !player.hasSkill('repojun') && !player.hasSkill('decadepojun') && !player.hasSkillTag('unequip_ai', false, {
										name:card?card.name:null,
										target:target,
										card:card
									})) {
									if ((target.hasSkill('tengjia3') || target.hasSkill('rw_tengjia4')) && !card.nature) {
										if (!(player.getEquip('zhuque') || player.getEquip('qinggang') || player.hasSkillTag('unequip_ai', false, {
											name:card?card.name:null,
											target:target,
											card:card
										}))) {
											return 'zeroplayertarget';
										}
									}
									if (target.hasSkill('tengjia2') && card.nature && get.attitude(player, target) < 0) {
										return 1;
									}
									if (target.hasSkill('tengjia2') && player.getEquip('zhuque') && get.attitude(player, target) < 0) {
										return 1;
									}
									if (target.hasSkill('renwang_skill') || target.hasSkill('rw_renwang_skill')) {
										if (get.color(card) == 'black') {
											if (!(player.getEquip('qinggang') || player.hasSkillTag('unequip_ai', false, {
												name:card?card.name:null,
												target:target,
												card:card
											}))) {
												return 'zeroplayertarget';
											}
										}
									}
								}
								if (target.hasSkillTag('useShan')) {
									if (get.attitude(player, target) > 0) {
										if (player.hasSkill('jiu')) {
											return -1.5;
										}
										if (target.getEquip('bagua') && player.getEquip('qinggang')) {
											return -1.5;
										}
										if (card.nature && target.hasSkill('tengjia2')) {
											return -1;
										}
										if (!card.nature && target.hasSkill('tengjia2')) {
											return 'zeroplayertarget';
										}
										if (target.hasSkill('renwang_skill')) {
											if (get.color(card) == 'black') {
												return 'zeroplayertarget';
											}
										}
										if (target.getEquip('bagua')) {
											return 1;
										}
										if (target.countCards('hs', {name: 'shan'}) <= 1) {
											return -0.5;
										}
									}
									if (get.attitude(player, target) < 0) {
										if (
											player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: {name: 'sha'}
												},
												true
											)
										) {
											return 1.5;
										}
									}
									if (
										!player.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: target,
												card: {name: 'sha'}
											},
											true
										)
									) {
										if (target.countCards('hs') >= 3) {
											return -0.5;
										}
									}
									if (target.countCards('hes') == 0) {
										return 1;
									}
								}
								if (player.hasSkill('jiu')) {
									if ((target.getEquip('baiyin') || target.getEquip('rewrite_baiyin')) && get.attitude(target, player) < 0) {
										if (
											!player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: {name: 'sha'}
												},
												true
											) &&
											!(player.getEquip('qinggang') || player.hasSkillTag('unequip_ai', false, {
												name:card?card.name:null,
												target:target,
												card:card
											}))
										) {
											return -0.5;
										}
									}
									if (get.attitude(target, player) > 0) {
										if (target.hasSkillTag('maixie')) {
											return -1.5;
										}
										if (target.hasSkillTag('useShan')) {
											return -1;
										}
									}
								}
								if (game.roundNumber == 1) {
									if (player.identity == 'fan' && target.identity == 'fan') {
										return 0;
									}
									if (get.attitude(player, target) < 0) {
										return 1;
									}
									if (get.attitude(player, target) == 0) {
										return [0.5, 0.5];
									}
								}
							}
							/*酒对策*/
							if (get.name(card) == 'jiu') {
								var tri = _status.event.getTrigger();
								if (!player.hasSkill('xinfu_tushe') && !player.hasSkill('hengwu')) {
									if (
										player.hp > 0 &&
										target == player &&
										player.countCards('hs', 'sha') > 0 &&
										!game.hasPlayer(function (current) {
											return current != player && player.inRange(current) && get.attitude(player, current) < 0 && !current.hasSkill('baiyin_skill') && !current.hasSkill('rw_baiyin_skill');
										})
									) {
										return 'zeroplayertarget';
									}
									if (player.hp > 0 && target == player && player.countCards('hs', 'sha') == 0) {
										return 'zeroplayertarget';
									}
								}
								if (player.identity == 'fan' && tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan') {
									if (player.countCards('h') < 3) {
										return 'zeroplayertarget';
									}
								}
							}
							/*过河拆桥&顺手牵羊对策*/
							if (get.name(card) == 'guohe' || get.name(card) == 'shunshou') {
								if (get.attitude(player, target) < 0 && target.getDamagedHp() && target.countCards('h') == 0 && target.countCards('e') == 1 && (target.getEquip('baiyin') || target.getEquip('rewrite_baiyin'))) {
									return 'zeroplayertarget';
								}
								if (get.attitude(player, target) < 0 && target.countCards('he') == 0 && (target.hasJudge('bingliang') || target.hasJudge('lebu'))) {
									return 'zeroplayertarget';
								}
								if (get.attitude(player, target) > 0 && (target.hasJudge('bingliang') || target.hasJudge('lebu'))) {
									return 2.5;
								}
								if (get.attitude(player, target) > 0 && (target.hasJudge('shandian') || target.hasJudge('fulei')) && (target.hasSkillTag('nodamage') || target.hasSkillTag('nothunder') || target.hasSkillTag('rejudge'))) {
									return 'zeroplayertarget';
								}
								if (game.roundNumber == 1) {
									if (player.identity == 'fan' && target.identity == 'fan') {
										return 0;
									}
									if (get.attitude(player, target) < 0) {
										return 1;
									}
									if (get.attitude(player, target) == 0) {
										return [0.5, 0.5];
									}
								}
							}
							/*兵乐对策*/
							if (get.mode() == 'identity' && game.roundNumber == 1) {
								if (get.name(card) == 'bingliang' || get.name(card) == 'lebu') {
									if (player.identity != 'zhu') {
										if (player.identity == 'fan' && target.identity == 'fan') {
											return 0;
										}
										if (get.attitude(player, target) > 0) {
											return 'zeroplayertarget';
										}
										if (get.attitude(player, target) < 0) {
											return 1;
										}
										if (get.attitude(player, target) == 0) {
											return [0.5, 0.5];
										}
									}
								}
							}
							/*闪电对策*/
							var gpdy = game.countPlayer(function (current) {
								return current.hasSkillTag('rejudge') && get.attitude(current, player) > 0;
							});
							if ((get.name(card) == 'shandian' || get.name(card) == 'fulei') && gpdy > 0) {
								return 1;
							}
							if ((get.name(card) == 'shandian' || get.name(card) == 'fulei') && gpdy <= 0) {
								if (!player.hasSkill('hengwu')) {
									return -0.5;
								}
							}
							/*南蛮万箭对策*/
							if (get.name(card) == 'nanman' || get.name(card) == 'wanjian') {
								var dy = game.countPlayer(function (current) {
									return get.attitude(current, player) > 0 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1'));
								});
								var dr = game.countPlayer(function (current) {
									return get.attitude(current, player) <= 0 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1'));
								});
								var mxdy = game.countPlayer(function (current) {
									return get.attitude(current, player) > 0 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && current.hasSkillTag('maixie') && current.hp >= 3;
								});
								var mxdr = game.countPlayer(function (current) {
									return get.attitude(current, player) <= 0 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && current.hasSkillTag('maixie') && current.hp >= 3;
								});
								var cxdy = game.countPlayer(function (current) {
									return current.hp == 1 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && get.attitude(current, player) > 0;
								});
								var cxdr = game.countPlayer(function (current) {
									return current.hp == 1 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && get.attitude(current, player) <= 0;
								});
								var cxzc = game.countPlayer(function (current) {
									return current.hp == 1 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && current.identity == 'zhong';
								});
								var cxfz = game.countPlayer(function (current) {
									return current.hp == 1 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && current.identity == 'fan';
								});
								var numz = game.countPlayer(function (current) {
									return current.identity == 'zhong' || current.identity == 'mingzhong';
								});
								var numf = game.countPlayer(function (current) {
									return current.identity == 'fan';
								});
								if (player.isUnderControl(true) && game.players.length == 2) {
									if (
										game.hasPlayer(function (current) {
											return get.attitude(player, current) < 0 && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1'));
										})
									) {
										return 1;
									} else {
										return 'zeroplayertarget';
									}
								}
								if (get.mode() == 'identity') {
									if (player.identity == 'zhu' && cxzc == 0) {
										if (
											game.hasPlayer(function (current) {
												return current.identity == 'fan' && !current.hasSkill('tengjia1') && !current.hasSkill('rw_tengjia1');
											})
										)
											return 1;
									}
									if (player.identity == 'zhu' && cxzc > 0) {
										return -1;
									}
									if (player.identity == 'zhong' && (game.zhu.isMinHp() || game.zhu.hp <= 2 || cxzc > 0)) {
										return -1;
									}
									if (player.identity == 'zhong' && cxzc <= 0 && game.zhu.hp > 2 && cxfz > 0) {
										return 1;
									}
									if (player.identity == 'fan' && game.zhu.hp <= 2) {
										return 1;
									}
									if (player.identity == 'fan' && game.zhu.hp >= 3 && cxfz > cxzc && cxfz > 0) {
										return -1;
									}
									if (player.identity == 'nei') {
										if (game.zhu.hp > 2 || (numf == 0 && numz == 0)) return 1;
									}
									if (game.zhu.hp <= 2 && (numf >= 0 || numz >= 0)) {
										return -1;
									}
								}
								if (get.mode() != 'identity') {
									if (cxdy >= cxdr && cxdy > 0) {
										return -1;
									}
									if (cxdy < cxdr && cxdr > 0) {
										return 1;
									}
									if (dy == 0 && dr > 0) {
										return 1;
									}
									if (dy >= dr && dy > 0 && cxdy <= 0) {
										return -1;
									}
									if (mxdr > mxdy && mxdr > 0) {
										return -1;
									}
									if (get.mode() == 'doudizhu' && game.zhu == player && dr > 0) {
										return 1;
									}
									if (get.mode() == 'doudizhu' && game.zhu != player && dy > 0 && game.zhu.hp > 2) {
										return -1;
									}
									if (player.isUnderControl(true) && get.mode() == 'doudizhu' && game.zhu != player && (game.zhu.hasSkill('tengjia1') || game.zhu.hasSkill('rw_tengjia1'))) {
										return 'zeroplayertarget';
									}
								}
								return 0;
							}
						},
						target: function (card, player, target, current) {
							/*免伤对策*/
							if (get.tag(card, 'damage') && !card.nature) {
								if (target.hasSkillTag('nodamage')) return 'zeroplayertarget';
							}
							if (get.tag(card, 'damage') && card.nature == 'thunder') {
								if (target.hasSkillTag('nodamage') || target.hasSkillTag('nothunder')) return 'zeroplayertarget';
							}
							if (get.tag(card, 'damage') && card.nature == 'fire') {
								if (target.hasSkillTag('nodamage') || target.hasSkillTag('nofire')) return 'zeroplayertarget';
							}
							/*残血对策*/
							if (get.attitude(player, target) < 0) {
								if (get.tag(card, 'damage') && target.hp == 1) {
									return [0, -2.5, 1, 1];
								}
							}
							/*卖血对策*/
							var dr = game.countPlayer(function (current) {
								return get.attitude(current, player) <= 0 && current != player;
							});
							var mxdr = game.countPlayer(function (current) {
								return get.attitude(current, player) <= 0 && current != player && current.hasSkillTag('maixie');
							});
							if (mxdr < dr) {
								if (get.tag(card, 'damage')) {
									if (target.hasSkillTag('maixie')) {
										if (get.attitude(player, target) > 0 && (target.hasSkill('lingren_jianxiong') || target.hasSkill('new_rejianxiong') || target.hasSkill('jianxiong') || target.hasSkill('huituo') || target.hasSkill('qianlong') || target.hasSkill('reandong') || target.hasSkill('fenyong2') || target.hasSkillTag('nodamage') || target.hasSkill('fenyong2') || target.hasSkill('hunzi') || target.hasSkill('rehunzi') || target.hasSkill('olhunzi'))) {
											return false;
										}
										if (!target.hasSkillTag('maixie_defend')) {
											if (get.attitude(player, target) > 0) {
												if (player.hasSkillTag('jueqing', false, target)) {
													return [0, -2.5];
												}
												if (get.name(card) == 'sha' && player.hasSkill('jiu')) {
													return [0, -2.5];
												}
												if (get.name(card) == 'huogong' && target.getEquip('tengjia')) {
													return [0, -2.5];
												}
												if (get.name(card) == 'huogong' && target.hp <= 3) {
													return [0, -2.5];
												}
												if (get.name(card) == 'huogong' && player.countCards('h') <= 5) {
													return [0, -2.5];
												}
												if (get.name(card) == 'sha' && target.countCards('h') == 0 && player.getEquip('guding')) {
													return [0, -2.5];
												}
												if (get.name(card) == 'sha' && card.nature && target.hasSkill('tengjia2')) {
													return [0, -2.5];
												}
											}
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (player.hasSkillTag('ignoreSkill', false, target)) return [1, -1];
											if (!target.hasFriend()) return;
											if (get.attitude(player, target) > 0) {
												if (target.hp >= 3 && target.countCards('hs', 'tao') >= 1) {
													return [0.25, 0.25];
												}
												if (target.hp >= 3) {
													return [0.15, 0.15];
												}
												if (target.hp == 2 && target.countCards('hs', 'tao') >= 1) {
													return [0.05, 0.05];
												}
												if (target.hp == 2) {
													return [-0.15, -0.15];
												}
												if (target.hp == 1) {
													return [-0.25, -0.25];
												}
											}
										}
									}
									if (get.attitude(player, target) < 0 && target.hasSkillTag('maixie_defend')) {
										if (!target.hasFriend()) return;
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (player.hasSkillTag('ignoreSkill', false, target)) return [1, -1];
										if (get.mode() == 'identity' && player.identity == 'zhu' && player != target && player.hp <= 2) {
											return [0, 0.5, 0, -1.5];
										}
										if (player != target && target.hasSkillTag('maixie_defend')) {
											return [0, 0.5, 0, -1];
										}
									}
								}
							}
						}
					}
				}
			};
			//全局技能AI优化
			lib.skill._aiyh_reserved_shan = {
				trigger: {
					target: 'useCardToTargeted'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					if (!event.card || event.card.name != 'sha' || !event.player.isPhaseUsing()) return false;
					if (player.countCards('hs', {name: 'shan'}) != 1 || event.player.getCardUsable('sha') < 1 || event.getParent(1).jiu || player.hp < 2 || event.player.countCards('hs') < 2) return false;
					if (player.isLinked()){
						let cxdy = 0, cxdr = 0;
						let hzdy = game.countPlayer(function (current) {
							if (player == current || !current.isLinked() || get.attitude(player, current) <= 0) return false;
							if (current.hp < 2) cxdy++;
							return true;
						});
						let hzdr = game.countPlayer(function (current) {
							if (player == current || !current.isLinked() || get.attitude(player, current) >= 0) return false;
							if (current.hp < 2) cxdr++;
							return true;
						});
						if (cxdy > cxdr || hzdy + 2.1*cxdy > hzdr + 2.1*cxdr) return false;
					}
					if (
						player.getEquip('bagua') ||
						player.hasSkillTag('useShan') ||
						player.hasSkillTag('respondShan') ||
						event.card.nature == 'fire' && player.hasSkillTag('tengjia3') ||
						event.player.hasSkill('luoyi2') ||
						event.player.hasSkill('reluoyi2') ||
						event.player.hasSkill('repojun') ||
						event.player.hasSkill('hanbing_skill') ||
						event.player.hasSkill('xinfu_zengdao2') ||
						event.player.hasSkill('xinliegong') ||
						event.player.hasSkill('anjian') ||
						event.player.hasSkill('reanjian') ||
						event.player.hasSkill('xinanjian') ||
						event.player.hasSkill('lkzhongzhuang') ||
						event.player.hasSkill('decadexianzhen2') ||
						event.player.hasSkill('twxuhe_damage') ||
						event.player.hasSkill('twchuanshu_effect') ||
						event.player.hasSkill('xinqingxi') ||
						event.player.hasSkill('twqingxi') ||
						event.player.hasSkill('nsshijun') ||
						event.player.hasSkill('liyong2') ||
						event.player.hasSkill('wangong2') ||
						event.player.hasSkill('pyzhuren_diamond') ||
						event.player.hasSkill('tuxing2') ||
						event.player.hasSkill('spjiedao') ||
						event.player.hasSkill('dcyiyong') ||
						event.player.hasSkill('rezhiman') ||
						player.hasSkill('zhenlie') ||
						player.hasSkill('bazhen') ||
						player.hasSkill('juezhen') ||
						player.hasSkill('lingren_adddamage') ||
						player.hasSkill('cuijin') ||
						player.hasSkill('shouli_thunder') ||
						player.hasSkill('twyiju') ||
						player.hasSkill('twzhongchi_effect') ||
						player.hasSkill('reyanzhu2') ||
						player.hasSkill('twqiongji') ||
						player.hasSkill('yise_damage') ||
						player.hasSkill('dcshizhao_effect') ||
						player.countMark('xionghuo') > 0 ||
						player.countMark('dcfudao_deadmark') > 0
					) return false;
					return true;
				},
				content: function () {
					player.addTempSkill('aiyh_disabled_shan', 'shaAfter');
				}
			};
			lib.skill.aiyh_disabled_shan = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				ai: {
					effect: {
						player: function (card, player, target) {
							if (get.name(card) == 'shan') return 'zeroplayertarget';
						}
					}
				}
			};

			/*无懈对策*/
			lib.skill._shyg_wuxie = {
				trigger: {
					global: 'useCardToPlayered'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player) {
					return get.type(event.card) == 'trick';
				},
				content: function () {
					if (get.mode() == 'identity') {
						if (get.tag(trigger.card, 'damage')) {
							if ((player.identity == 'zhu' || player.identity == 'zhong') && trigger.target.identity == 'fan') {
								player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
							}
							if ((trigger.target.identity == 'zhu' || trigger.target.identity == 'zhong') && player.identity == 'fan') {
								player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
							}
						}
					}
					if (player.countCards('hs', {name: 'wuxie'}) == 1 && (player.hasJudge('lebu') || player.hasJudge('bingliang')) && player != _status.currentPhase) {
						if (get.attitude(player, trigger.target) > 0 && get.tag(trigger.card, 'damage')) {
							if (get.mode() == 'identity' && player.identity == 'zhong' && trigger.target == game.zhu) {
								if (game.zhu.hp > 2 && player.hp > 1) {
									player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
								}
							}
							if (trigger.target.hp >= 2 && player.hp > 1) {
								player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
							}
						}
						if (get.attitude(player, trigger.target) < 0 && !get.tag(trigger.card, 'damage')) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
						if (get.attitude(player, trigger.target) > 0 && !get.tag(trigger.card, 'damage')) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
					}
					if ((get.name(trigger.card) == 'guohe' || get.name(trigger.card) == 'shunshou') && get.attitude(player, trigger.player) > 0 && get.attitude(player, trigger.target) > 0) {
						player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
					}
					if (get.name(trigger.card) == 'guohe' && get.attitude(player, trigger.target) > 0 && get.attitude(player, trigger.player) <= 0) {
						if (!trigger.target.getEquip(2) && !trigger.target.getEquip(3)) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
					}
					if (get.name(trigger.card) == 'guohe' && trigger.target.countCards('h', {name: 'wuxie'}) == 1 && trigger.target.countCards('h') == 1) {
						if (trigger.target != player) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
					}
					if (get.name(trigger.card) == 'huogong') {
						if (get.attitude(player, trigger.target) > 0 && get.attitude(player, trigger.player) <= 0 && player.countCards('hs', {name: 'wuxie'}) == 1) {
							if (!trigger.target.hasSkill('tengjia2') && (trigger.target.hp >= 2 || trigger.target.hasSkillTag('nofire') || trigger.target.hasSkillTag('nodamage'))) {
								player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
							}
						}
						if (get.attitude(player, trigger.player) > 0) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
					}
					if (get.name(trigger.card) == 'juedou') {
						if (get.attitude(player, trigger.player) > 0 && get.attitude(player, trigger.target) <= 0) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
						if (get.attitude(player, trigger.player) <= 0 && get.attitude(player, trigger.target) > 0 && trigger.target.hp > 2 && trigger.target != player) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
					}
					if (get.name(trigger.card) == 'tiesuo') {
						var hz = game.countPlayer(function (current) {
							return current.isLinked() && !current.hasSkillTag('nodamage') && get.attitude(current, player) > 0;
						});
						if (get.attitude(player, trigger.target) > 0 && (!trigger.target.hasSkill('tengjia2') || trigger.target.hp > 2 || hz <= 1)) {
							player.addTempSkill('shyg_wuxie_fy', 'useCardToAfter');
						}
					}
				}
			};
			lib.skill._shyg_wuxie_jiedao = {
				trigger: {
					global: 'useCard'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player, card) {
					return player.countCards('hs', {name: 'wuxie'}) == 1 && event.card.name == 'jiedao';
				},
				content: function () {
					player.addTempSkill('shyg_wuxie_fy', 'jiedaoAfter');
				}
			};
			lib.skill._shyg_wuxie_lei = {
				trigger: {
					global: 'phaseJudgeBefore'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player, card) {
					return event.player.countCards('j') <= 1 && (event.player.hasJudge('shandian') || event.player.hasJudge('fulei')) && (player.hasSkillTag('rejudge') || event.player.hasSkillTag('nodamage') || event.player.hasSkillTag('nothunder'));
				},
				content: function () {
					player.addTempSkill('shyg_wuxie_fy', 'phaseJudgeAfter');
				}
			};
			lib.skill.shyg_wuxie_fy = {
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				ai: {
					effect: {
						player: function (card, player, target) {
							if (get.name(card) == 'wuxie') {
								return 'zeroplayertarget';
							}
						}
					}
				}
			};
			/*五谷对策*/
			lib.skill._shyg_wugu = {
				trigger: {
					global: 'wuguBegin'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				content: function () {
					if (player.getDamagedHp()) {
						player.addTempSkill('shyg_wugu_ss_pai', 'wuguAfter');
					}
					if (!player.getDamagedHp()) {
						player.addTempSkill('shyg_wugu_wss_pai', 'wuguAfter');
					}
				}
			};
			lib.skill.shyg_wugu_ss_pai = {
				mod: {
					aiValue: function (player, card, num) {
						if (card.name == 'tao') return num + 10;
						if (card.name == 'wuzhong') return num + 9;
						if (card.name == 'jiu') return num + 8;
						if (card.name == 'wuxie') return num + 7;
						if (card.name == 'shunshou') return num + 6;
						if (card.name == 'guohe') return num + 5;
						if (card.name == 'lebu') return num + 4;
						if (card.name == 'bingliang') return num + 3;
					}
				}
			};
			lib.skill.shyg_wugu_wss_pai = {
				mod: {
					aiValue: function (player, card, num) {
						if (card.name == 'wuzhong') return num + 10;
						if (card.name == 'wuxie') return num + 9;
						if (card.name == 'shunshou') return num + 8;
						if (card.name == 'tao') return num + 7;
						if (card.name == 'guohe') return num + 6;
						if (card.name == 'lebu') return num + 5;
						if (card.name == 'bingliang') return num + 4;
						if (card.name == 'jiu') return num + 3;
					}
				}
			};
			/*弃置牌对策*/
			lib.skill._shyg_Discard = {
				trigger: {
					player: 'chooseToDiscardBefore'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player, card) {
					if (
						game.countPlayer(function (current) {
							return current.hp == 1 && get.attitude(current, player) < 0;
						}) > 0
					)
						return false;
					var evt = event.getParent('phaseDiscard');
					return evt && evt.name != 'phaseDiscard';
				},
				content: function () {
					player.addTempSkill('shyg_Discard_key', 'chooseToDiscardAfter');
				}
			};
			lib.skill.shyg_Discard_key = {
				mod: {
					aiValue: function (player, card, num) {
						if (player.hp > 2 && player.countCards('h') <= 2) {
							if (card.name == 'wuzhong') return num + 3;
						}
						if (player.hasJudge('lebu') || player.hasJudge('bingliang')) {
							if (card.name == 'wuxie') return num + 3;
						}
						if (player.hp <= 2) {
							if (card.name == 'tao') return num + 3;
						}
						if (player.hp <= 1) {
							if (card.name == 'tao') return num + 3;
							if (card.name == 'jiu') return num + 3;
							if (card.name == 'du') return num + 3;
						}
					},
					aiUseful: function (player, card, num) {
						if (player.hp > 2 && player.countCards('h') <= 2) {
							if (card.name == 'wuzhong') return num + 3;
						}
						if (player.hasJudge('lebu') || player.hasJudge('bingliang')) {
							if (card.name == 'wuxie') return num + 3;
						}
						if (player.hp <= 2) {
							if (card.name == 'tao') return num + 3;
						}
						if (player.hp <= 1) {
							if (card.name == 'tao') return num + 3;
							if (card.name == 'jiu') return num + 3;
							if (card.name == 'du') return num + 3;
						}
					}
				}
			};
			lib.skill._shyg_Discard_du = {
				trigger: {
					player: 'phaseDiscardBefore'
				},
				forced: true,
				unique: true,
				popup: false,
				silent: true,
				charlotte: true,
				superCharlotte: true,
				filter: function (event, player, card) {
					return player.countCards('h', {name: 'du'}) >= player.hp;
				},
				content: function () {
					player.addTempSkill('shyg_Discard_du_useful', 'phaseDiscardAfter');
				}
			};
			lib.skill.shyg_Discard_du_useful = {
				aiUseful: function (player, card, num) {
					if (get.name(card) == 'du') {
						return get.useful({name: 'jiu'}) - 0.5;
					}
				}
			};
			/*本体卡牌优化*/
			/*本体装备优化*/
			lib.card.ly_piliche = {//霹雳车
				fullskin: true,
				derivation: 'liuye',
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -8
				},
				skills: ['ly_piliche'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
				ai: {
					equipValue: 9,
					basic: {
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						equipValue: 9,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				}
			};
			/*霹雳投石车*/
			lib.card.pilitoushiche = {
				fullskin: true,
				derivation: 'dc_liuye',
				cardimage: 'ly_piliche',
				type: 'equip',
				subtype: 'equip5',
				skills: ['pilitoushiche'],
				destroy: true,
				ai: {
					equipValue: 9,
					basic: {
						equipValue: 9,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*大攻车*/
			lib.card.dagongche = {
				fullskin: true,
				derivation: 'zhangfen',
				type: 'equip',
				subtype: 'equip5',
				skills: ['dagongche_skill'],
				cardPrompt: function (card) {
					if (!card.storage) return '出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。';
					var str = '出牌阶段开始时，你可以视为使用一张';
					if (card.storage.大攻车选项一) str += '无距离限制且无视防具的';
					str += '【杀】';
					if (card.storage.大攻车选项二) str += '（此【杀】的目标上限+' + card.storage.大攻车选项二 + '）';
					str += '，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其';
					var num = 1;
					if (card.storage.大攻车选项三) num += card.storage.大攻车选项三;
					str += get.cnNumber(num);
					str += '张牌。当此牌离开你的装备区后，销毁之。';
					return str;
				},
				destroy: true,
				ai: {
					equipValue: 9,
					basic: {
						equipValue: 9,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*方天画戟*/
			lib.card.fangtian.ai = {
				basic: {
					equipValue: 2.2,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*寒冰剑*/
			lib.card.hanbing.ai = {
				basic: {
					equipValue: 2,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*麒麟弓*/
			lib.card.qilin.ai = {
				basic: {
					equipValue: 2.5,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*青龙偃月刀*/
			lib.card.qinglong.ai = {
				equipValue: function (card, player) {
					return Math.min(2.5 + player.countCards('h', 'sha'), 4);
				},
				basic: {
					equipValue: 3.5,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*藤甲*/
			lib.card.tengjia = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				ai: {
					value: function (card, player, index, method) {
						if (player.isDisabled(2)) return 0.01;
						if (card == player.getEquip(2)) {
							if (player.hasSkillTag('noDirectDamage')) return 10;
							if (
								game.hasPlayer(function (current) {
									return current != player && get.attitude(current, player) < 0 && current.hasSkillTag('fireAttack', null, null, true);
								})
							)
								return 0;
							return 6;
						}
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					},
					equipValue: function (card, player) {
						if (player.hasSkillTag('maixie') && player.hp > 1) {
							if (player.hp > 2) return 0;
							if (player.countCards('h', {name: 'tao'})) return 0;
						}
						if (player.hasSkillTag('useShan') && player.hp > 1) return 0;
						if (player.hasSkillTag('nofire')) return 10;
						if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
						if (player.hasSkillTag('noDirectDamage')) return 8;
						if (
							game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0 && ((current.inRange(player) && current.canUse('sha', player) && current.getEquip('zhuque')) || current.hasSkillTag('fireAttack'));
							})
						)
							return 0;
						if (player.hp == 1) return 10;
						if (player.hp == 2) return 8;
						if (player.hp > 2) return 3;
					},
					basic: {
						equipValue: 3,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['tengjia1', 'tengjia2', 'tengjia3'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*仁王盾*/
			lib.card.renwang = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				skills: ['renwang_skill'],
				ai: {
					equipValue: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0 && current.inRange(player) && (current.getEquip('zhangba') || current.hasUsableCard('sha'));
							})
						)
							return 7;
						return 7.5;
					},
					basic: {
						equipValue: 7.5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*八卦阵*/
			lib.card.bagua = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				ai: {
					equipValue: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								return (
									get.attitude(player, current) < 0 &&
									current.inRange(player) &&
									(current.getEquip('guanshi') ||
										current.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: player,
												card: {name: 'sha'}
											},
											true
										))
								);
							})
						)
							return 7;
						return 7.5;
					},
					basic: {
						equipValue: 7.5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['bagua_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*本体装备优化*/
			/*霹雳车*/
			lib.card.ly_piliche = {
				fullskin: true,
				derivation: 'liuye',
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -8
				},
				skills: ['ly_piliche'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
				ai: {
					equipValue: 9,
					basic: {
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						equipValue: 9,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				}
			};
			/*霹雳投石车*/
			lib.card.pilitoushiche = {
				fullskin: true,
				derivation: 'dc_liuye',
				cardimage: 'ly_piliche',
				type: 'equip',
				subtype: 'equip5',
				skills: ['pilitoushiche'],
				destroy: true,
				ai: {
					equipValue: 9,
					basic: {
						equipValue: 9,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*大攻车*/
			lib.card.dagongche = {
				fullskin: true,
				derivation: 'zhangfen',
				type: 'equip',
				subtype: 'equip5',
				skills: ['dagongche_skill'],
				cardPrompt: function (card) {
					if (!card.storage) return '出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。';
					var str = '出牌阶段开始时，你可以视为使用一张';
					if (card.storage.大攻车选项一) str += '无距离限制且无视防具的';
					str += '【杀】';
					if (card.storage.大攻车选项二) str += '（此【杀】的目标上限+' + card.storage.大攻车选项二 + '）';
					str += '，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其';
					var num = 1;
					if (card.storage.大攻车选项三) num += card.storage.大攻车选项三;
					str += get.cnNumber(num);
					str += '张牌。当此牌离开你的装备区后，销毁之。';
					return str;
				},
				destroy: true,
				ai: {
					equipValue: 9,
					basic: {
						equipValue: 9,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*古锭刀*/
			lib.card.guding = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -1
				},
				ai: {
					equipValue: function (card, player) {
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 2 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0;
							})
						)
							return 1;
						if (!player.hasCard({subtype: 'equip4'}, 'he')) {
							for (var i = 0; i < game.players.length; i++) {
								if (!(game.players[i] != player && game.players[i].countCards('h') <= 0 && get.distance(player, game.players[i]) <= 2 && get.attitude(player, game.players[i]) < 0)) continue;
								var target1 = game.players[i];
								if (
									game.hasPlayer(function (current) {
										return current == target1;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target1 &&
												player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												}) &&
												player.canUse('sha', current) &&
												player.getCardUsable('sha') >= 1
											);
										})
									) {
										if (
											player.getEquip('zhuge') &&
											player.countCards('h', function (card) {
												return get.name(card) == 'sha' && player.hasValueTarget(card);
											}) >= 3
										)
											return 4.5;
										return 11;
									}
									return 4.5;
								}
							}
						} else {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && game.players[j].countCards('h') <= 0 && get.distance(player, game.players[j]) <= 3 && get.attitude(player, game.players[j]) < 0)) continue;
								var target2 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target2;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target2 &&
												player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												}) &&
												player.canUse('sha', current) &&
												player.getCardUsable('sha') >= 1
											);
										})
									) {
										if (
											player.getEquip('zhuge') &&
											player.countCards('h', function (card) {
												return get.name(card) == 'sha' && player.hasValueTarget(card);
											}) >= 3
										)
											return 4.5;
										return 11;
									}
									return 4.5;
								}
							}
						}
						if (
							(player.hasSkill('repojun') || player.hasSkill('pojun')) &&
							game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 2 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0;
							})
						) {
							if (
								player.hasCard({name: 'zhuge'}) &&
								player.getCardUsable('sha') == 0 &&
								player.countCards('h', function (card) {
									return get.name(card) == 'sha' && player.hasValueTarget(card);
								}) >= 2
							)
								return 4.5;
							return 12;
						}
						return 2.4;
					},
					basic: {
						equipValue: 2,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['guding_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*诸葛连弩*/
			lib.card.zhuge = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				ai: {
					order: function () {
						return get.order({name: 'sha'}) - 0.1;
					},
					equipValue: function (card, player) {
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 1 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 2 && get.attitude(player, current) < 0;
							})
						)
							return 1;
						if (player.hasSha() && _status.currentPhase == player) {
							if (
								!player.hasCard({subtype: 'equip4'}, 'he') &&
								game.hasPlayer(function (current) {
									return (
										current != player &&
										get.distance(player, current) <= 1 &&
										get.attitude(player, current) < 0 &&
										player.hasCard(function (card) {
											return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
										}) &&
										player.canUse('sha', current)
									);
								})
							) {
								if (player.getEquip('zhuge')) {
									if (
										player.countCards('he', function (card) {
											return get.name(card) == 'sha';
										}) <= 1 &&
										player.countUsed('sha', true) == 0
									)
										return 0;
									return 10;
								}
								if (player.getCardUsable('sha') == 0) return 10;
							}
							if (
								player.hasCard({subtype: 'equip4'}, 'he') &&
								player.getCardUsable('sha') == 0 &&
								game.hasPlayer(function (current) {
									return (
										current != player &&
										get.distance(player, current) <= 2 &&
										get.attitude(player, current) < 0 &&
										player.hasCard(function (card) {
											return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
										}) &&
										player.canUse('sha', current)
									);
								})
							) {
								if (player.getEquip('zhuge')) {
									if (
										player.countCards('he', function (card) {
											return get.name(card) == 'sha';
										}) <= 1 &&
										player.countUsed('sha', true) == 0
									)
										return 0;
								}
								if (player.getCardUsable('sha') == 0) return 10;
							}
						}
						if (_status.currentPhase == player) {
							if (!player.hasSha() && !player.hasUsableCard('sha')) return 0;
							if (
								!game.hasPlayer(function (current) {
									return get.attitude(player, current) < 0 && get.effect(current, {name: 'sha'}, player, player);
								})
							)
								return 0;
						}
						var num = player.countCards('h');
						if (_status.currentPhase != player) return Math.min(2 + num, 10);
					},
					basic: {
						equipValue: 5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return 8 + get.equipValue(card, player) / 20;
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					tag: {
						valueswap: 1
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['zhuge_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*贯石斧*/
			lib.card.guanshi = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -2
				},
				ai: {
					equipValue: function (card, player) {
						var he = player.countCards('he', function (card) {
							return card.name != 'guanshi';
						});
						var num = Math.max(he, 2);
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 4 && get.attitude(player, current) < 0;
							})
						)
							return 2;
						if (!player.hasCard({subtype: 'equip4'}, 'he')) {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 3 && get.attitude(player, game.players[j]) < 0 && player.canUse('sha', game.players[j]) && (game.players[j].hasShan() || game.players[j].countCards('h') > 2))) continue;
								var target1 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target1;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target1 &&
												player.getCardUsable('sha') >= 1 &&
												player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												}) &&
												he > 2
											);
										})
									) {
										if (
											player.getEquip('zhuge') &&
											player.countCards('h', function (card) {
												return get.name(card) == 'sha' && player.hasValueTarget(card);
											}) >= 2
										)
											return Math.min(num, 9);
										return Math.min(num + 2, 12);
									}
									if (
										_status.currentPhase != player &&
										game.hasPlayer(function (current) {
											return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0 && current.hp == 1;
										})
									)
										return 10;
									return Math.min(num + 1, 6);
								}
							}
						} else {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 4 && get.attitude(player, game.players[j]) < 0 && player.canUse('sha', game.players[j]) && (game.players[j].hasShan() || game.players[j].countCards('h') > 2))) continue;
								var target2 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target2;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target2 &&
												player.getCardUsable('sha') >= 1 &&
												player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												}) &&
												he > 2
											);
										})
									) {
										if (
											player.getEquip('zhuge') &&
											player.countCards('h', function (card) {
												return get.name(card) == 'sha' && player.hasValueTarget(card);
											}) >= 2
										)
											return Math.min(num, 9);
										return Math.min(num + 2, 12);
									}
									if (
										_status.currentPhase != player &&
										game.hasPlayer(function (current) {
											return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0 && current.hp == 1;
										})
									)
										return 10;
									return Math.min(num + 1, 6);
								}
							}
						}
						return 4;
					},
					basic: {
						equipValue: 4.5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['guanshi_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*丈八蛇矛*/
			lib.card.zhangba = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -2
				},
				ai: {
					equipValue: function (card, player) {
						var num = Math.min(4 + player.countCards('h') / 3, 8);
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 4 && get.attitude(player, current) < 0;
							})
						)
							return 1.5;
						if (!player.hasCard({subtype: 'equip4'}, 'he')) {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 3 && get.attitude(player, game.players[j]) < 0 && player.canUse('sha', game.players[j]) && (game.players[j].getEquip('renwang') || game.players[j].getEquip('rewrite_renwang')))) continue;
								var target1 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target1;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target1 &&
												!player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return Math.max(num, 5);
									return 3.5;
								}
							}
						} else {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 4 && get.attitude(player, game.players[j]) < 0 && player.canUse('sha', game.players[j]) && (game.players[j].getEquip('renwang') || game.players[j].getEquip('rewrite_renwang')))) continue;
								var target2 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target2;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target2 &&
												!player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return Math.max(num, 5);
									return 3.5;
								}
							}
						}
						if (player.hasSkill('xinfu_tushe')) return 12;
						return 3.1;
					},
					basic: {
						equipValue: 3.5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['zhangba_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*雌雄双股剑*/
			lib.card.cixiong = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -1
				},
				ai: {
					equipValue: function (card, player) {
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 2 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0;
							})
						)
							return 1;
						if (!player.hasCard({subtype: 'equip4'}, 'he')) {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 2 && get.attitude(player, game.players[j]) < 0 && player.differentSexFrom(game.players[j]) && player.canUse('sha', game.players[j]))) continue;
								var target1 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target1;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target1 &&
												player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return 6;
									return 4;
								}
							}
						} else {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 3 && get.attitude(player, game.players[j]) < 0 && player.differentSexFrom(game.players[j]) && player.canUse('sha', game.players[j]))) continue;
								var target2 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target2;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target2 &&
												player.canUse('sha', current) &&
												player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return 6;
									return 4;
								}
							}
						}
						return 2.3;
					},
					basic: {
						equipValue: 2,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['cixiong_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*青釭剑*/
			lib.card.qinggang = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -1
				},
				ai: {
					equipValue: function (card, player) {
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 2 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 3 && get.attitude(player, current) < 0;
							})
						)
							return 1.9;
						if (!player.hasCard({subtype: 'equip4'}, 'he')) {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 2 && get.attitude(player, game.players[j]) < 0 && game.players[j].getEquip(2) && player.canUse('sha', game.players[j]))) continue;
								var target1 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target1;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target1 &&
												player.hasSha() &&
												!player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return 11;
									return 7;
								}
							}
						} else {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 3 && get.attitude(player, game.players[j]) < 0 && game.players[j].getEquip(2) && player.canUse('sha', game.players[j]))) continue;
								var target2 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target2;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target2 &&
												player.hasSha() &&
												!player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return 11;
									return 7;
								}
							}
						}
						return 3.5;
					},
					basic: {
						equipValue: 2,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['qinggang_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*朱雀羽扇*/
			lib.card.zhuque = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -3
				},
				ai: {
					equipValue: function (card, player) {
						if (
							!game.hasPlayer(function (current) {
								if (!player.hasCard({subtype: 'equip4'}, 'he')) return current != player && get.distance(player, current) <= 4 && get.attitude(player, current) < 0;
								return current != player && get.distance(player, current) <= 5 && get.attitude(player, current) < 0;
							})
						)
							return 1.5;
						if (!player.hasCard({subtype: 'equip4'}, 'he')) {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 4 && get.attitude(player, game.players[j]) < 0 && game.players[j].getEquip('tengjia') && !game.players[j].hasSkillTag('nofire') && player.canUse('sha', game.players[j]))) continue;
								var target1 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target1;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target1 &&
												player.hasSha() &&
												!player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return 12;
									return 8;
								}
							}
						} else {
							for (var j = 0; j < game.players.length; j++) {
								if (!(game.players[j] != player && get.distance(player, game.players[j]) <= 5 && get.attitude(player, game.players[j]) < 0 && game.players[j].getEquip('tengjia') && !game.players[j].hasSkillTag('nofire') && player.canUse('sha', game.players[j]))) continue;
								var target2 = game.players[j];
								if (
									game.hasPlayer(function (current) {
										return current == target2;
									})
								) {
									if (
										game.hasPlayer(function (current) {
											return (
												current == target2 &&
												player.hasSha() &&
												!player.hasCard(function (card) {
													return get.name(card) == 'sha' && get.effect(current, card, player, player) > 0;
												})
											);
										})
									)
										return 12;
									return 8;
								}
							}
						}
						return 3;
					},
					basic: {
						equipValue: 2,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['zhuque_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*方天画戟*/
			lib.card.fangtian.ai = {
				basic: {
					equipValue: 2.2,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*寒冰剑*/
			lib.card.hanbing.ai = {
				basic: {
					equipValue: 2,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*麒麟弓*/
			lib.card.qilin.ai = {
				basic: {
					equipValue: 2.5,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*青龙偃月刀*/
			lib.card.qinglong.ai = {
				equipValue: function (card, player) {
					return Math.min(2.5 + player.countCards('h', 'sha'), 4);
				},
				basic: {
					equipValue: 3.5,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						} else {
							return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					}
				},
				result: {
					target: function (player, target, card) {
						return get.equipResult(player, target, card.name);
					}
				}
			};
			/*藤甲*/
			lib.card.tengjia = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				ai: {
					value: function (card, player, index, method) {
						if (player.isDisabled(2)) return 0.01;
						if (card == player.getEquip(2)) {
							if (player.hasSkillTag('noDirectDamage')) return 10;
							if (
								game.hasPlayer(function (current) {
									return current != player && get.attitude(current, player) < 0 && current.hasSkillTag('fireAttack', null, null, true);
								})
							)
								return 0;
							return 6;
						}
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					},
					equipValue: function (card, player) {
						if (player.hasSkillTag('maixie') && player.hp > 1) {
							if (player.hp > 2) return 0;
							if (player.countCards('h', {name: 'tao'})) return 0;
						}
						if (player.hasSkillTag('useShan') && player.hp > 1) return 0;
						if (player.hasSkillTag('nofire')) return 10;
						if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
						if (player.hasSkillTag('noDirectDamage')) return 8;
						if (
							game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0 && ((current.inRange(player) && current.canUse('sha', player) && current.getEquip('zhuque')) || current.hasSkillTag('fireAttack'));
							})
						)
							return 0;
						if (player.hp == 1) return 10;
						if (player.hp == 2) return 8;
						if (player.hp > 2) return 3;
					},
					basic: {
						equipValue: 3,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['tengjia1', 'tengjia2', 'tengjia3'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*仁王盾*/
			lib.card.renwang = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				skills: ['renwang_skill'],
				ai: {
					equipValue: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0 && current.inRange(player) && (current.getEquip('zhangba') || current.hasUsableCard('sha'));
							})
						)
							return 7;
						return 7.5;
					},
					basic: {
						equipValue: 7.5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*八卦阵*/
			lib.card.bagua = {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				ai: {
					equipValue: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								return (
									get.attitude(player, current) < 0 &&
									current.inRange(player) &&
									(current.getEquip('guanshi') ||
										current.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: player,
												card: {name: 'sha'}
											},
											true
										))
								);
							})
						)
							return 7;
						return 7.5;
					},
					basic: {
						equipValue: 7.5,
						order: function (card, player) {
							if (player && player.hasSkillTag('reverseEquip')) {
								return 8.5 - get.equipValue(card, player) / 20;
							} else {
								return Math.min(7.2, 7 + get.equipValue(card, player) / 60);
							}
						},
						useful: 2,
						value: function (card, player, index, method) {
							if (player.isDisabled(get.subtype(card))) return 0.01;
							var value = 0;
							var info = get.info(card);
							var current = player.getEquip(info.subtype);
							if (current && card != current) {
								value = get.value(current, player);
							}
							var equipValue = info.ai.equipValue;
							if (equipValue == undefined) {
								equipValue = info.ai.basic.equipValue;
							}
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						}
					},
					result: {
						target: function (player, target, card) {
							return get.equipResult(player, target, card.name);
						}
					}
				},
				skills: ['bagua_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true
			};
			/*本体装备技能优化*/
			/*贯石斧*/
			lib.skill.guanshi_skill = {
				equipSkill: true,
				trigger: {
					player: ['shaMiss', 'eventNeutralized']
				},
				direct: true,
				audio: true,
				filter: function (event, player) {
					if (event.type != 'card' || event.card.name != 'sha') return false;
					return (
						player.countCards('he', function (card) {
							return card != player.getEquip('guanshi');
						}) >= 2 && event.target.isAlive()
					);
				},
				content: function () {
					'step 0'
					var next = player.chooseToDiscard(get.prompt('guanshi'), 2, 'he', function (card) {
						return _status.event.player.getEquip('guanshi') != card;
					});
					next.logSkill = 'guanshi_skill';
					next.set('ai', function (card) {
						var evt = _status.event.getTrigger();
						if (get.attitude(evt.player, evt.target) < 0) {
							if (player.needsToDiscard() >= 2) return 15 - get.value(card);
							if (evt.baseDamage + evt.extraDamage >= Math.min(2, evt.target.hp)) return 8 - get.value(card);
							return 5 - get.value(card);
						}
						return -1;
					});
					'step 1'
					if (result.bool) {
						if (event.triggername == 'shaMiss') {
							trigger.untrigger();
							trigger.trigger('shaHit');
							trigger._result.bool = false;
							trigger._result.result = null;
						} else {
							trigger.unneutralize();
						}
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (player._guanshi_temp) return;
						player._guanshi_temp = true;
						var bool =
							get.attitude(player, arg.target) < 0 &&
							arg.card &&
							arg.card.name == 'sha' &&
							player.countCards('he', function (card) {
								return card != player.getEquip('guanshi') && card != arg.card && (!arg.card.cards || !arg.card.cards.contains(card)) && get.value(card) < 5;
							}) > 1;
						delete player._guanshi_temp;
						return bool;
					}
				}
			};
			/*雌雄双股剑*/
			lib.skill.cixiong_skill = {
				equipSkill: true,
				trigger: {
					player: 'useCardToPlayered'
				},
				audio: true,
				logTarget: 'target',
				check: function (event, player) {
					if (get.attitude(player, event.target) > 0) return true;
					var target = event.target;
					return target.countCards('h') == 0 || !target.hasSkillTag('noh');
				},
				filter: function (event, player) {
					if (event.card.name != 'sha') return false;
					return player.differentSexFrom(event.target);
				},
				content: function () {
					'step 0'
					trigger.target.chooseToDiscard('弃置一张手牌，或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
						var trigger = _status.event.getTrigger();
						if ((trigger.target.countCards('h', 'shan') == 1 || trigger.target.countCards('h', 'tao') == 1 || trigger.target.countCards('h', 'jiu') == 1) && trigger.target.countCards('h') == 1) {
							return false;
						}
						return -get.attitude(trigger.target, trigger.player) - get.value(card);
					});
					'step 1'
					if (result.bool == false) player.draw();
				}
			};
			/*寒冰剑*/
			lib.skill.hanbing_skill = {
				equipSkill: true,
				trigger: {
					source: 'damageBegin2'
				},
				audio: true,
				filter: function (event) {
					return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('he').length > 0;
				},
				check: function (event, player) {
					var target = event.player;
					if (event.getParent(2).jiu == true) return false;
					var eff = get.damageEffect(target, player, player, event.nature);
					if (get.attitude(player, target) > 0) {
						if (eff >= 0) return false;
						return true;
					}
					if (eff <= 0) return true;
					if (target.hp == 1) return false;
					if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
					if (target.countCards('he') < 2) return false;
					var num = 0;
					var cards = target.getCards('he');
					for (var i = 0; i < cards.length; i++) {
						if (get.value(cards[i]) >= 6) num++;
					}
					if (num >= 3 && event.getParent(2).jiu != true) return true;
					if (num >= 2 && target.hasSkillTag('maixie') && event.getParent(2).jiu != true) return true;
					return false;
				},
				logTarget: 'player',
				content: function () {
					'step 0'
					trigger.cancel();
					'step 1'
					if (trigger.player.countDiscardableCards(player, 'he')) {
						player.line(trigger.player);
						player.discardPlayerCard('he', trigger.player, true);
					}
					'step 2'
					if (trigger.player.countDiscardableCards(player, 'he')) {
						player.line(trigger.player);
						player.discardPlayerCard('he', trigger.player, true);
					}
				}
			};
			/*丈八蛇矛*/
			lib.skill.zhangba_skill = {
				equipSkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard: true,
				selectCard: 2,
				position: 'hs',
				viewAs: {
					name: 'sha'
				},
				complexCard: true,
				filter: function (event, player) {
					return player.countCards('hs') >= 2;
				},
				audio: true,
				prompt: '将两张手牌当杀使用或打出',
				check: function (card) {
					let player = _status.event.player;
					if (player.needsToDiscard() >= 2 && !player.countCards('h', function (card) {
						return player.hasValueTarget(card);
					})) return 15 - get.value(card);
					if (player.hasCard(function (card) {
						return get.name(card) == 'sha' || get.name(card) == 'tao' || get.name(card) == 'jiu';
					})) return 0;
					if (_status.currentPhase == player && player.hasCard(function (card) {
						return get.name(card) == 'wuxie' || get.name(card) == 'wuzhong' || get.name(card) == 'guohe' || get.name(card) == 'shunshou' || get.name(card) == 'bingliang' || get.name(card) == 'lebu';
					})) return 0;
					if (player.hasSkill('xinfu_tushe') && player.hasCard(function (card) {
						return get.type2(card) != 'trick' && (get.name(card) == 'tao' || get.name(card) == 'jiu' || get.name(card) == 'shan');
					})) return 15 - get.value(card);
					if (player.hp <= 2 && player.countCards('hs', 'sha') <= 0) return 10 - get.value(card);
					return 5 - get.value(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter: function (player) {
						return player.countCards('hs') >= 2;
					},
					yingbian: function (card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						var base = 0,
							hit = false;
						if (get.cardtag(card, 'yingbian_hit')) {
							hit = true;
							if (
								targets.filter(function (target) {
									return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
								})
							)
								base += 5;
						}
						if (get.cardtag(card, 'yingbian_all')) {
							if (
								game.hasPlayer(function (current) {
									return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
								})
							)
								base += 5;
						}
						if (get.cardtag(card, 'yingbian_damage')) {
							if (
								targets.filter(function (target) {
									return (
										get.attitude(player, target) < 0 &&
										(hit ||
											!target.mayHaveShan() ||
											player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: card
												},
												true
											)) &&
										!target.hasSkillTag('filterDamage', null, {
											player: player,
											card: card,
											jiu: true
										})
									);
								})
							)
								base += 5;
						}
						return base;
					},
					canLink: function (player, target, card) {
						if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
						if (
							target.mayHaveShan() &&
							!player.hasSkillTag(
								'directHit_ai',
								true,
								{
									target: target,
									card: card
								},
								true
							)
						)
							return false;
						if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
						return true;
					},
					basic: {
						useful: [5, 3, 1],
						value: [5, 3, 1]
					},
					order: function (item, player) {
						if (player.hasSkillTag('presha', true, null, true)) return 10;
						if (lib.linked.contains(get.nature(item))) {
							if (
								game.hasPlayer(function (current) {
									return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
								}) &&
								game.countPlayer(function (current) {
									return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
								}) > 1
							)
								return 3.1;
							return 3;
						}
						return 3.05;
					},
					result: {
						target: function (player, target, card, isLink) {
							var eff = (function () {
								if (!isLink && player.hasSkill('jiu')) {
									if (
										!target.hasSkillTag('filterDamage', null, {
											player: player,
											card: card,
											jiu: true
										})
									) {
										if (get.attitude(player, target) > 0) {
											return -7;
										} else {
											return -4;
										}
									}
									return -0.5;
								}
								return -1.5;
							})();
							if (
								!isLink &&
								target.mayHaveShan() &&
								!player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							)
								return eff / 1.2;
							return eff;
						}
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: function (card) {
							if (card.nature == 'poison') return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature) return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == 'fire') return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == 'thunder') return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == 'poison') return 1;
						}
					}
				}
			};
			/*红缎枪*/
			lib.skill.pyzhuren_heart = {
				audio: true,
				trigger: {
					source: 'damageSource'
				},
				usable: 1,
				equipSkill: true,
				filter: function (event, player) {
					return event.getParent().name == 'sha';
				},
				check: function (event, player) {
					return true;
				},
				content: function () {
					'step 0'
					player.judge(function (card) {
						var player = _status.event.getParent('pyzhuren_heart').player;
						if (player.isHealthy() && get.color(card) == 'red') return 0;
						return 2;
					});
					'step 1'
					if (result.color == 'red') player.recover();
					else player.draw(2);
				}
			};

			/*本体卡牌优化*/
			/*桃*/
			lib.card.tao = {
				fullskin: true,
				type: 'basic',
				cardcolor: 'red',
				toself: true,
				enable: function (card, player) {
					return player.hp < player.maxHp;
				},
				savable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player && target.hp < target.maxHp;
				},
				modTarget: function (card, player, target) {
					return target.hp < target.maxHp;
				},
				content: function () {
					target.recover(event.baseDamage || 1);
				},
				ai: {
					basic: {
						order: function (card, player) {
							if (player.hasSkillTag('pretao')) return 5;
							return 2;
						},
						useful: function (card, i) {
							let player = _status.event.player;
							if (player.isDamaged() && !game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return 2 / (1 + i);
							let fs = game.filterPlayer(function (current) {
									return get.attitude(player, current) > 0 && current.hp <= 2;
								}),
								damaged = 0,
								needs = 0;
							for (let f of fs) {
								if (!lib.filter.cardSavable(card, player, f)) continue;
								if (f.hp > 1) damaged++;
								else needs++;
							}
							if (needs && damaged) return 5 * needs + 3 * damaged;
							if (needs + damaged > 1 || player.hasSkillTag('maixie')) return 8;
							if (player.hp / player.maxHp < 0.7) return 7 + Math.abs(player.hp / player.maxHp - 0.5);
							if (needs) return 7;
							if (damaged) return Math.max(3, 6.4 - i);
							return 6.8 - Math.min(5, player.hp);
						},
						value: function (card, player, i) {
							let fs = game.filterPlayer(function (current) {
									return get.attitude(_status.event.player, current) > 0;
								}),
								damaged = 0,
								needs = 0;
							for (let i of fs) {
								if (!player.canUse('tao', i)) continue;
								if (i.hp <= 1) needs++;
								else if (i.hp == 2) damaged++;
							}
							if (needs > 2) return 11;
							if (needs > 1) return 10;
							if ((needs && damaged) || player.hasSkillTag('maixie')) return 9;
							if (needs || damaged > 1) return 8;
							if (damaged) return 7.5;
							return Math.max(1, 9.2 - player.hp);
						}
					},
					result: {
						target: 2,
						target_use: function (player, target) {
							if (player.countCards('hs', 'tao') > 0) {
								var numt = player.countCards('hs', 'tao');
							}
							if (player.countCards('hs') == 0) {
								var numt = player.countCards('hs', 'tao') + 1;
							}
							if (player.canSave(target)) {
								if (player.hasSkill('longhun') || player.hasSkill('relonghun')) {
									var numt =
										player.countCards('hs', 'tao') +
										player.countCards('hes', function (card) {
											return get.suit(card, player) == 'heart' && get.name(card) != 'tao';
										});
								}
							}
							var tri = _status.event.getTrigger();
							var numz = game.countPlayer(function (current) {
								return current.identity == 'zhong' || current.identity == 'mingzhong';
							});
							var numf = game.countPlayer(function (current) {
								return current.identity == 'fan';
							});
							var cxdy = game.countPlayer(function (current) {
								return current.hp <= 1 && get.attitude(player, current) > 0;
							});
							if (cxdy >= 1 && player.hp > 1 && player.countCards('hs', 'tao') <= 1 && player == target) {
								return 'zeroplayertarget';
							}
							if (tri && tri.name == 'dying') {
								if (target.hasSkill('spshanxi_bj') && target.countCards('he') < 2) {
									return 'zeroplayertarget';
								}
							}
							if (_status.mode == 'normal') {
								if (tri && tri.name == 'dying') {
									if (player.identity == 'zhu' && get.attitude(player, target) > 0) {
										if (target.identity == 'zhong' || target.identity == 'mingzhong') {
											if (numt + target.hp > 0 && player.hp >= 2) {
												return 1;
											} else {
												return 0;
											}
										}
										if (target.identity == 'nei' && numf >= 3 && player.hp >= 2 && target.hasSkill('shyg_tz')) {
											if (numt + target.hp > 0 && player.hp >= 2) {
												return 1;
											} else {
												return 0;
											}
										}
										if (target.identity == 'fan') {
											return 0;
										}
									}
									if (player.identity == 'zhong' && get.attitude(player, target) > 0) {
										if (target != player && (target.identity == 'zhong' || target.identity == 'mingzhong')) {
											if (numt + target.hp > 0) {
												return 1;
											} else {
												return 0;
											}
										}
										if (target.identity == 'zhu') {
											return 1;
										}
										if (target.identity == 'zhong' && target == player) {
											return 1;
										}
										if (target.identity == 'nei' && numf >= 3 && numz <= 1 && target.hasSkill('shyg_tz')) {
											if (numt + target.hp > 0 && player.hp >= 2) {
												return 1;
											} else {
												return 0;
											}
										}
										if (target.identity == 'fan') {
											return 0;
										}
									}
									if (player.identity == 'nei' && (player.hasSkill('shyg_tz') || player.hasSkill('shyg_tf'))) {
										if (target.identity == 'zhu') {
											return 1;
										}
										if (player.hasSkill('shyg_tz') && (target.identity == 'zhong' || target.identity == 'mingzhong')) {
											if (numt + target.hp > 0 && player.hp >= 2 && numf >= 3 && numz <= 1) {
												return 1;
											} else {
												return 0;
											}
										}
										if (player.hasSkill('shyg_tf') && target.identity == 'fan' && tri.source && tri.source != player) {
											if (numt + target.hp > 0 && player.hp >= 2 && numf <= 1 && numz >= 2) {
												return 1;
											} else {
												return 0;
											}
										}
									}
									if (player.identity == 'fan') {
										if (target.identity == 'fan' && tri.source && tri.source.identity == 'fan' && get.attitude(player, target) > 0) {
											if (target.countCards('h') >= 3 && numt + target.hp > 0) {
												return 1;
											} else {
												if (target.countCards('h') < 3 || numt + target.hp <= 0) {
													if (player.countCards('hs', 'tao') > 0) return 0;
												}
											}
										}
										if (target.identity == 'fan' && tri.source && tri.source.identity != 'fan' && get.attitude(player, target) > 0) {
											if (target == player) {
												return 1;
											} else {
												if (target != player) {
													if (numt + target.hp > 0) {
														return 1;
													} else {
														if (numt + target.hp <= 0) {
															if (player.countCards('hs', 'tao') > 0) return 0;
														}
													}
												}
											}
										}
										if (target.identity == 'fan' && !tri.source && get.attitude(player, target) > 0) {
											if (target == player) {
												return 1;
											} else {
												if (target != player) {
													if (numt + target.hp > 0) {
														return 1;
													} else {
														if (numt + target.hp <= 0) {
															if (player.countCards('hs', 'tao') > 0) return 0;
														}
													}
												}
											}
										}
										if (target.identity == 'nei' && numf <= 1 && numz >= 2 && target.hasSkill('shyg_tf')) {
											if (numt + target.hp > 0 && player.hp >= 2) {
												return 1;
											}
										}
										if (target.identity == 'zhu' || target.identity == 'zhong') {
											return 0;
										}
									}
								}
							} else {
								if (tri && tri.name == 'dying') {
									if (target == player) {
										return 1;
									}
									if (target != player && get.attitude(player, target) > 0) {
										if (numt + target.hp > 0) {
											return 1;
										} else {
											if (numt + target.hp <= 0) {
												if (player.countCards('hs', 'tao') > 0) return 0;
											}
										}
									}
								}
							}
							// if(player==target&&player.hp<=0) return 2;
							if (player.hasSkillTag('nokeep', true, null, true)) return 2;
							var nd = player.needsToDiscard();
							var keep = false;
							if (nd <= 0) {
								keep = true;
							} else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
								keep = true;
							}
							var mode = get.mode();
							if (target.hp >= 2 && keep && target.hasFriend()) {
								if (target.hp > 2 || nd == 0) return 0;
								if (target.hp == 2) {
									if (
										game.hasPlayer(function (current) {
											if (target != current && get.attitude(target, current) >= 3) {
												if (current.hp <= 1) return true;
												if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
											}
										})
									) {
										return 0;
									}
								}
							}
							var att = get.attitude(player, target);
							if (att < 3 && att >= 0 && player != target) return 0;
							if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
								if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
									var num = game.countPlayer(function (current) {
										if (current.identity == 'fan') {
											return current.countCards('h', 'tao');
										}
									});
									if (num > 1 && player == target) return 2;
									return 0;
								}
							}
							if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
								if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
									return 0;
								}
							}
							if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
								return 0;
							}
							return 2;
						}
					},
					tag: {
						recover: 1,
						save: 1
					}
				}
			};
			/*决斗*/
			lib.card.juedou = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				yingbian_prompt: '你令此牌不可被响应',
				yingbian_tags: ['hit'],
				yingbian: function (event) {
					event.directHit.addArray(game.players);
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					'step 0'
					if (event.turn == undefined) event.turn = target;
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (typeof event.extraDamage != 'number') {
						event.extraDamage = 0;
					}
					if (!event.shaReq) event.shaReq = {};
					if (typeof event.shaReq[player.playerid] != 'number') event.shaReq[player.playerid] = 1;
					if (typeof event.shaReq[target.playerid] != 'number') event.shaReq[target.playerid] = 1;
					event.playerCards = [];
					event.targetCards = [];
					'step 1'
					event.trigger('juedou');
					event.shaRequired = event.shaReq[event.turn.playerid];
					'step 2'
					if (event.directHit) {
						event._result = {bool: false};
					} else {
						var next = event.turn.chooseToRespond({name: 'sha'});
						if (event.shaRequired > 1) {
							next.set('prompt2', '共需打出' + event.shaRequired + '张杀');
						}
						next.set('ai', function (card) {
							var event = _status.event;
							var player = event.splayer;
							var target = event.starget;
							if (player.hasSkillTag('notricksource')) return 0;
							if (target.hasSkillTag('notrick')) return 0;
							if (event.shaRequired > 1 && player.countCards('h', 'sha') < event.shaRequired) return 0;
							if (event.player == target) {
								if (player.hasSkill('naman')) return -1;
								if (get.attitude(target, player) < 0 || event.player.hp <= 1) {
									return get.order(card);
								}
								return -1;
							} else {
								if (target.hasSkill('naman')) return -1;
								if (get.attitude(player, target) < 0 || event.player.hp <= 1) {
									return get.order(card);
								}
								return -1;
							}
						});
						next.set('splayer', player);
						next.set('starget', target);
						next.set('shaRequired', event.shaRequired);
						next.autochoose = lib.filter.autoRespondSha;
						if (event.turn == target) {
							next.source = player;
						} else {
							next.source = target;
						}
					}
					'step 3'
					if (event.target.isDead() || event.player.isDead()) {
						event.finish();
					} else {
						if (result.bool) {
							event.shaRequired--;
							if (event.turn == target) {
								if (result.cards) event.targetCards.addArray(result.cards);
								if (event.shaRequired > 0) event.goto(2);
								else {
									event.turn = player;
									event.goto(1);
								}
							} else {
								if (result.cards) event.playerCards.addArray(result.cards);
								if (event.shaRequired > 0) event.goto(2);
								else {
									event.turn = target;
									event.goto(1);
								}
							}
						} else {
							if (event.turn == target) {
								target.damage(event.baseDamage + event.extraDamage);
							} else {
								player.damage(target, event.baseDamage + event.extraDamage);
							}
						}
					}
				},
				ai: {
					wuxie: function (target, card, player, viewer) {
						if (player == game.me && get.attitude(viewer, player) > 0) {
							return 0;
						}
					},
					basic: {
						order: 5,
						useful: 1,
						value: 5.5
					},
					result: {
						target: -1.5,
						player: function (player, target, card) {
							if (
								player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							) {
								return 0;
							}
							if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0) {
								return 0;
							}
							var hs1 = target.countCards('hs', 'sha');
							var hs2 = player.countCards('hs', 'sha');
							if (hs1 > hs2 + 1) {
								return -2;
							}
							if (player.hp == 1 && hs2 == 0 && hs1 >= 1) {
								return -2;
							}
							var hsx1 = target.countCards('hs');
							var hsx2 = player.countCards('hs');
							if (hsx1.length == 0) {
								return 0;
							}
							if (hsx1 > 3 && hs2 == 0) {
								return -2;
							}
							if (hs2 >= 3 && hsx1 <= hsx2) {
								return 0;
							}
							return -0.5;
						}
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1
					}
				},
				selectTarget: 1
			};
			/*过河拆桥*/
			lib.card.guohe = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: 1,
				postAi: function (targets) {
					return targets.length == 1 && targets[0].countCards('j');
				},
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					return target.countDiscardableCards(player, get.is.single() ? 'he' : 'hej');
				},
				yingbian_prompt: '当你使用此牌选择目标后，你可为此牌增加一个目标',
				yingbian_tags: ['add'],
				yingbian: function (event) {
					event.yingbian_addTarget = true;
				},
				content: function () {
					'step 0'
					if (!get.is.single() && target.countDiscardableCards(player, 'hej')) {
						if (
							player.hasSkill('hengwu') &&
							!game.hasPlayer(function (current) {
								return get.attitude(player, current) > 0 && current.countCards('j') && player.canUse('guohe', current);
							})
						) {
							player.discardPlayerCard('hej', target, true).set('ai', function (button) {
								var player = _status.event.player;
								var target = _status.event.target;
								var att = get.attitude(player, target);
								var val = get.buttonValue(button);
								if (player.hasSkill('hengwu') && att < 0) {
									if (get.subtype(button.link) == 'equip4') return 0;
									if (
										get.subtype(button.link) == 'equip3' &&
										(player.inRange(target) ||
											player.hasCard(function (card) {
												return get.subtype(card) == 'equip1';
											}, 'he'))
									)
										return 0;
									return val;
								}
							});
						} else {
							player.discardPlayerCard('hej', target, true);
						}
						event.finish();
					} else {
						var bool1 = target.countDiscardableCards(player, 'h');
						var bool2 = target.countDiscardableCards(player, 'e');
						if (bool1 && bool2) {
							player
								.chooseControl('手牌区', '装备区')
								.set('ai', function () {
									return Math.random() < 0.5 ? 1 : 0;
								})
								.set('prompt', '弃置' + get.translation(target) + '装备区的一张牌，或观看其手牌并弃置其中的一张牌。');
						} else event._result = {control: bool1 ? '手牌区' : '装备区'};
					}
					'step 1'
					var pos = result.control == '手牌区' ? 'h' : 'e';
					player.discardPlayerCard(target, pos, true, 'visible');
				},
				ai: {
					basic: {
						order: 9,
						useful: 5,
						value: 5
					},
					yingbian: function (card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (
							game.hasPlayer(function (current) {
								return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
							})
						)
							return 6;
						return 0;
					},
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target);
							var nh = target.countCards('h');
							if (att > 0) {
								if (
									target.countCards('j', function (card) {
										var cardj = card.viewAs ? {name: card.viewAs} : card;
										return get.effect(target, cardj, target, player) < 0;
									}) > 0
								)
									return 5;
								if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
									if (target.hp == 1) return 3;
									return 1;
								}
								if (
									target.countCards('e', function (card) {
										if (get.position(card) == 'e') return get.value(card, target) < 0;
									}) > 0
								)
									return 1;
							}
							if (att <= 0 && target.countCards('he')) return -1.5;
							if ((att < 0) & (nh <= 0) && (!target.getEquip(2) || !target.getEquip(3) || !target.getEquip(5))) {
								return 0;
							}
							var es = target.getCards('e');
							var noe = es.length == 0 || target.hasSkillTag('noe');
							var noe2 =
								es.filter(function (esx) {
									return get.value(esx, target) > 0;
								}).length == 0;
							var noh = nh == 0 || target.hasSkillTag('noh');
							if (noh && (noe || noe2)) return 0;
							if (att <= 0 && !target.countCards('he')) return 1.5;
							return -1.5;
						}
					},
					tag: {
						loseCard: 1,
						discard: 1
					}
				}
			};
			/*顺手牵羊*/
			lib.card.shunshou = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				range: {
					global: 1
				},
				selectTarget: 1,
				postAi: function (targets) {
					return targets.length == 1 && targets[0].countCards('j');
				},
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					return target.countGainableCards(player, get.is.single() ? 'he' : 'hej') > 0;
				},
				content: function () {
					var position = get.is.single() ? 'he' : 'hej';
					if (target.countGainableCards(player, position)) {
						if (
							player.hasSkill('hengwu') &&
							!game.hasPlayer(function (current) {
								return get.attitude(player, current) > 0 && current.countCards('j') && player.canUse('shunshou', current);
							})
						) {
							player.gainPlayerCard(position, target, true).set('ai', function (button) {
								var player = _status.event.player;
								var target = _status.event.target;
								var att = get.attitude(player, target);
								var val = get.buttonValue(button);
								if (player.hasSkill('hengwu') && att < 0) {
									if (
										get.subtype(button.link) == 'equip4' &&
										player.countCards('he', function (card) {
											return get.subtype(card) == 'equip4';
										})
									)
										return 0;
									if (
										get.subtype(button.link) == 'equip3' &&
										player.countCards('he', function (card) {
											return get.subtype(card) == 'equip3';
										})
									)
										return 0;
									return val;
								}
							});
						} else {
							player.gainPlayerCard(position, target, true);
						}
					}
				},
				ai: {
					wuxie: function (target, card, player, viewer) {
						if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
							return 0;
						}
					},
					basic: {
						order: 7.5,
						useful: 4,
						value: 9
					},
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) <= 0)
								return target.countCards('he', function (card) {
									return get.value(card, target) > 0 && card != target.getEquip('jinhe');
								}) > 0
									? -1.5
									: 1.5;
							return target.countCards('ej', function (card) {
								if (get.position(card) == 'e') return get.value(card, target) <= 0;
								var cardj = card.viewAs ? {name: card.viewAs} : card;
								return get.effect(target, cardj, target, player) < 0;
							}) > 0
								? 1.5
								: -1.5;
						},
						player: function (player, target) {
							if (
								get.attitude(player, target) < 0 &&
								!target.countCards('he', function (card) {
									return get.value(card, target) > 0 && card != target.getEquip('jinhe');
								})
							) {
								return 0;
							}
							if (get.attitude(player, target) > 1) {
								return target.countCards('ej', function (card) {
									if (get.position(card) == 'e') return get.value(card, target) <= 0;
									var cardj = card.viewAs ? {name: card.viewAs} : card;
									return get.effect(target, cardj, target, player) < 0;
								}) > 0
									? 1.5
									: -1.5;
							}
							return 1;
						}
					},
					tag: {
						loseCard: 1,
						gain: 1
					}
				}
			};
			/*南蛮入侵*/
			lib.card.nanman = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				yingbian_prompt: '当你使用此牌选择目标后，你可为此牌减少一个目标',
				yingbian_tags: ['remove'],
				yingbian: function (event) {
					event.yingbian_removeTarget = true;
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				reverseOrder: true,
				content: function () {
					'step 0'
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (event.directHit) event._result = {bool: false};
					else {
						var next = target.chooseToRespond({name: 'sha'});
						next.set('ai', function (card) {
							var evt = _status.event.getParent();
							if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
							if (evt.player.hasSkillTag('notricksource')) return 0;
							if (evt.target.hasSkillTag('notrick')) return 0;
							return get.order(card);
						});
						next.autochoose = lib.filter.autoRespondSha;
					}
					'step 1'
					if (result.bool == false) {
						target.damage(event.baseDamage, event.customSource || player);
					}
				},
				ai: {
					wuxie: function (target, card, player, viewer, status) {
						var cxdy = game.countPlayer(function (current) {
							return current.hp == 1 && current != viewer && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && get.attitude(current, viewer) > 0;
						});
						if (get.mode() != 'identity') {
							if (cxdy > 0 && viewer.hp > 1 && viewer.hp + viewer.hujia + viewer.countCards('hs', 'jiu') > 1 && get.attitude(viewer, target) > 0 && target.hp > 1) {
								return 0;
							}
						}
						if (get.mode() == 'identity') {
							if ((viewer.identity == 'zhong' || viewer.identity == 'nei') && viewer.hp + viewer.hujia + viewer.countCards('hs', 'jiu') > 1 && game.zhu.hp == 1 && game.zhu.hujia < 1 && !target.isZhu) {
								return 0;
							}
							if (viewer.identity == 'fan' && cxdy > 0 && viewer.hp + viewer.hujia + viewer.countCards('hs', 'jiu') > 1 && get.attitude(viewer, target) > 0 && target.hp > 1) {
								return 0;
							}
						}
						let att = get.attitude(viewer, target);
						if (status * att < 0) return 0;
						let evt = _status.event.getParent('useCard'),
							t = target,
							has = 0;
						if (viewer == target) return;
						if (att > 0 && viewer.hasSkillTag('viewHandcard', null, target, true)) {
							if (
								target.hasCard(function (card) {
									return get.name(card, target) == 'sha' && lib.filter.cardRespondable(card, target);
								}, 'h') ||
								target.hasCard(function (card) {
									return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, target);
								}, 'h')
							)
								return 0;
							if (!target.hasSkillTag('respondSha', true, 'respond', true)) return;
						}
						if (get.attitude(viewer, target) <= 0) has = -1;
						if (evt && evt.targets) {
							if (!evt.targets.contains(viewer)) has = -1;
							for (let i = 0; i < evt.targets.length; i++) {
								if (has || evt.targets[i] == viewer) break;
								if (evt.targets[i] == target) {
									has = 1;
									break;
								}
							}
						}
						if (has == 1) {
							if (target.isZhu) {
								if (target.hp > viewer.hp && (target.hp > 2 || target.countCards('hs') > viewer.countCards('hs'))) return 0;
							} else if ((viewer.hp <= target.hp && !viewer.countCards('hs', 'sha') && !viewer.hasSkillTag('respondSha', true, 'respond', true)) || target.countCards('hs') > 3 || (target.countCards('hs') && Math.random() < 0.3)) return 0;
						} else {
							if (target.hp > 4 || target.countCards('hs') > 3 || (target.hp > 2 && Math.random() < 1 / (4 + target.countCards('hs'))) || (target.hp > viewer.hp && target.hasSkillTag('respondSha', true, 'respond', true))) return 0;
						}
					},
					basic: {
						order: function (item, player) {
							if (player.countCards('hs', 'juedou') > 0 && player.countCards('hs', 'sha') == 0) {
								return get.order({name: 'juedou'}) + 0.5;
							}
							var cxdr = game.countPlayer(function (current) {
								return current.hp == 1 && current != player && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && get.attitude(current, player) <= 0;
							});
							if (cxdr > 0) {
								return get.order({name: 'sha'}) + 0.5;
							}
							return get.order({name: 'sha'}) - 0.5;
						},
						useful: [5, 1],
						value: 5
					},
					result: {
						target_use: function (player, target) {
							if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) {
									if (player.identity == 'nei') {
										return -1;
									}
									return -100;
								}
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
						target: function (player, target) {
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) {
									if (player.identity == 'nei') {
										return -1;
									}
									return -100;
								}
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						}
					},
					tag: {
						respond: 1,
						respondSha: 1,
						damage: 1,
						multitarget: 1,
						multineg: 1
					}
				}
			};
			/*万箭齐发*/
			lib.card.wanjian = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				reverseOrder: true,
				yingbian_prompt: '当你使用此牌选择目标后，你可为此牌减少一个目标',
				yingbian_tags: ['remove'],
				yingbian: function (event) {
					event.yingbian_removeTarget = true;
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					'step 0'
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (event.directHit) event._result = {bool: false};
					else {
						var next = target.chooseToRespond({name: 'shan'});
						next.set('ai', function (card) {
							var evt = _status.event.getParent();
							if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
							if (evt.player.hasSkillTag('notricksource')) return 0;
							if (evt.target.hasSkillTag('notrick')) return 0;
							if (evt.target.hasSkillTag('noShan')) {
								return -1;
							}
							return get.order(card);
						});
						next.autochoose = lib.filter.autoRespondShan;
					}
					'step 1'
					if (result.bool == false) {
						target.damage(event.baseDamage);
					}
				},
				ai: {
					wuxie: function (target, card, player, viewer, status) {
						var cxdy = game.countPlayer(function (current) {
							return current.hp == 1 && current != viewer && !(current.hasSkill('tengjia1') || current.hasSkill('rw_tengjia1')) && get.attitude(current, viewer) > 0;
						});
						if (get.mode() != 'identity') {
							if (cxdy > 0 && viewer.hp > 1 && viewer.hp + viewer.hujia + viewer.countCards('hs', 'jiu') > 1 && get.attitude(viewer, target) > 0 && target.hp > 1) {
								return 0;
							}
						}
						if (get.mode() == 'identity') {
							if ((viewer.identity == 'zhong' || viewer.identity == 'nei') && viewer.hp + viewer.hujia + viewer.countCards('hs', 'jiu') > 1 && game.zhu.hp == 1 && game.zhu.hujia < 1 && get.attitude(viewer, target) > 0 && target.identity != 'zhu') {
								return 0;
							}
							if (viewer.identity == 'fan' && cxdy > 0 && viewer.hp + viewer.hujia + viewer.countCards('hs', 'jiu') > 1 && get.attitude(viewer, target) > 0 && target.hp > 1) {
								return 0;
							}
						}
						let att = get.attitude(viewer, target);
						if (status * att < 0) return 0;
						let evt = _status.event.getParent('useCard'),
							t = target,
							has = 0;
						if (viewer == target) return;
						if (att > 0 && viewer.hasSkillTag('viewHandcard', null, target, true)) {
							if (
								target.hasCard(function (card) {
									return get.name(card, target) == 'shan' && lib.filter.cardRespondable(card, target);
								}, 'h') ||
								target.hasCard(function (card) {
									return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, target);
								}, 'h')
							)
								return 0;
							if (!target.hasSkillTag('respondShan', true, 'respond', true)) return;
						}
						if (get.attitude(viewer, target) <= 0) has = -1;
						if (evt && evt.targets) {
							if (!evt.targets.contains(viewer)) has = -1;
							for (let i = 0; i < evt.targets.length; i++) {
								if (has || evt.targets[i] == viewer) break;
								if (evt.targets[i] == target) {
									has = 1;
									break;
								}
							}
						}
						if (has == 1) {
							if (target.isZhu) {
								if (target.hp > viewer.hp && (target.hp > 2 || target.countCards('hs') > viewer.countCards('hs'))) return 0;
							} else if ((viewer.hp <= target.hp && !viewer.countCards('hs', 'shan') && !viewer.hasSkillTag('respondShan', true, 'respond', true)) || target.countCards('hs') > 2 || (target.countCards('hs') && Math.random() < 0.4)) return 0;
						} else {
							if (target.hp > 4 || target.countCards('hs') > 2 || (target.hp > 2 && Math.random() < 1 / (3 + target.countCards('hs'))) || (target.hp > viewer.hp && target.hasSkillTag('respondShan', true, 'respond', true))) return 0;
						}
					},
					basic: {
						order: function (item, player) {
							return get.order({name: 'sha'}) + 0.5;
						},
						useful: 1,
						value: 5
					},
					result: {
						target_use: function (player, target) {
							if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
							var nh = target.countCards('h');
							if (target.isZhu && nh <= 2 && target.hp <= 1) {
								if (player.identity == 'nei') {
									return -1;
								}
								return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
						target: function (player, target) {
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) {
									if (player.identity == 'nei') {
										return -1;
									}
									return -100;
								}
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						}
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: 1,
						multitarget: 1,
						multineg: 1
					}
				}
			};
			/*桃园结义*/
			lib.card.taoyuan = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				cardcolor: 'red',
				reverseOrder: true,
				yingbian_prompt: '当你使用此牌选择目标后，你可为此牌减少一个目标',
				yingbian_tags: ['remove'],
				yingbian: function (event) {
					event.yingbian_removeTarget = true;
				},
				filterTarget: true,
				ignoreTarget: function (card, player, target) {
					return target.isHealthy();
				},
				content: function () {
					target.recover();
				},
				ai: {
					basic: {
						order: function (item, player) {
							var ssdy = game.countPlayer(function (current) {
								return current.getDamagedHp() && get.attitude(current, player) > 0 && get.recoverEffect(current, player, player) > 0;
							});
							var ssdr = game.countPlayer(function (current) {
								return current.hp == 1 && get.attitude(current, player) <= 0;
							});
							var cxdy = game.countPlayer(function (current) {
								return current.hp == 1 && get.attitude(current, player) > 0 && get.recoverEffect(current, player, player) > 0;
							});
							var cxdr = game.countPlayer(function (current) {
								return current.getDamagedHp() && get.attitude(current, player) <= 0;
							});
							if (ssdy > ssdr && ssdr == 0) {
								return get.order({name: 'wanjian'}) + 1;
							}
							if (ssdy > ssdr && cxdy > 0) {
								return get.order({name: 'wanjian'}) + 1;
							}
						},
						useful: [3, 1],
						value: 0
					},
					result: {
						target: function (player, target) {
							return target.hp < target.maxHp ? 2 : 0;
						}
					},
					tag: {
						recover: 0.5,
						multitarget: 1
					}
				}
			};
			/*火攻*/
			lib.card.huogong = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				cardcolor: 'red',
				cardnature: 'fire',
				filterTarget: function (card, player, target) {
					return target.countCards('h') > 0;
				},
				content: function () {
					'step 0'
					if (target.countCards('h') == 0) {
						event.finish();
						return;
					}
					target.chooseCard(true).ai = function (card) {
						if (_status.event.getRand() < 0.5) return Math.random();
						return get.value(card);
					};
					'step 1'
					target.showCards(result.cards).setContent(function () {});
					event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
					event.videoId = lib.status.videoId++;
					game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
					game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
					event.card2 = result.cards[0];
					game.log(target, '展示了', event.card2);
					event._result = {};
					player.chooseToDiscard({suit: get.suit(event.card2)}, function (card) {
							var evt = _status.event.getParent();
							if (get.damageEffect(evt.target, evt.player, evt.player, 'fire') > 0) {
								return 7 - get.value(card, evt.player);
							}
							return -1;
						}).set('prompt', false);
					game.delay(2);
					'step 2'
					if (result.bool) {
						target.damage('fire', event.baseDamage || 1);
					} else {
						target.addTempSkill('huogong2');
					}
					event.dialog.close();
					game.addVideo('cardDialog', null, event.videoId);
					game.broadcast('closeDialog', event.videoId);
				},
				ai: {
					basic: {
						order: 9.2,
						value: [3, 1],
						useful: 0.6
					},
					wuxie: function (target, card, player, viewer, status) {
						if (status * get.attitude(viewer, target) < 0 || get.attitude(viewer, player) >= 0 || Math.random() * 4 > player.countCards('h')) return 0;
					},
					result: {
						player: function (player, target) {
							let evt = _status.event,
								h = 1,
								suits = [];
							if (!ui.selected.cards) h = 0;
							let ph = player.getCards('h', function (card) {
								if (h > 0 && ui.selected.cards.contains(card)) return false;
								if (!h && get.name(card) == 'huogong') {
									h = -1;
									return false;
								}
								let suit = get.suit(card);
								if (!suits.contains(suit)) suits.push(suit);
								return true;
							});
							if (!ph.length) {
								if (player.hasSkillTag('noh') && player.countCards('h')) return 0;
								return -10;
							}
							if (suits.length < 4) {
								if (player.hasSkillTag('viewHandcard', null, target, true)) {
									let has = 0;
									for (let i of target.getCards('h')) {
										if (suits.contains(get.suit(i, target))) has++;
									}
									if (!has) return -10;
									if (has == target.countCards('h')) return -1;
								}
								if (target.hasSkill('huogong2')) return -1.6;
								if (suits.length && player.needsToDiscard()) return -0.8 / player.needsToDiscard();
								if (Math.random() > suits.length / 4) return -10;
								if (ph.length <= player.hp && evt.name == 'chooseToUse') {
									if (typeof evt.filterCard == 'function' && evt.filterCard({name: 'huogong'}, player, evt)) return -1.35;
									if (evt.skill) {
										let viewAs = get.info(evt.skill).viewAs;
										if (viewAs == 'huogong') return -1.35;
										if (viewAs && viewAs.name == 'huogong') return -1.35;
									}
								}
							}
							return -1;
						},
						target: function (player, target) {
							if (target.countCards('h') == 0) return 0;
							let evt = _status.event,
								h = 1,
								suits = [];
							if (!ui.selected.cards) h = 0;
							let ph = player.getCards('h', function (card) {
								if (h > 0 && ui.selected.cards.contains(card)) return false;
								if (!h && get.name(card) == 'huogong') {
									h = -1;
									return false;
								}
								let suit = get.suit(card);
								if (!suits.contains(suit)) suits.push(suit);
								return true;
							});
							if (!ph.length) return 0;
							if (target == player) {
								if (typeof evt.filterCard == 'function' && evt.filterCard({name: 'huogong'}, player, evt)) return -1.15;
								if (evt.skill) {
									let viewAs = get.info(evt.skill).viewAs;
									if (viewAs == 'huogong') return -1.15;
									if (viewAs && viewAs.name == 'huogong') return -1.15;
								}
								return 0;
							}
							if (target.hasSkill('huogong2') && suits.length < 4) return 0;
							if (get.attitude(player, target) >= 0) return -0.15;
							if (player.hasSkillTag('viewHandcard', null, target, true)) return -0.5 * suits.length;
							return -0.45 * suits.length;
						}
					},
					tag: {
						damage: 1,
						fireDamage: 1,
						natureDamage: 1,
						discard: 0.5,
						norepeat: 1
					}
				}
			};
			/*铁索*/
			lib.card.tiesuo = {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				filterTarget: true,
				cardcolor: 'black',
				selectTarget: [1, 2],
				complexTarget: true,
				content: function () {
					target.link();
				},
				chongzhu: true,
				wuxie: function (target, card, player, viewer) {
					if (target.hasSkillTag('nodamage') || target.hasSkillTag('nofire') || target.hasSkillTag('nothunder') || _status.event.getRand() < 0.5 || get.attitude(viewer, player) > 0) return 0;
				},
				ai: {
					basic: {
						order: 7,
						useful: 4,
						value: 4
					},
					result: {
						target: function (player, target) {
							if (target.hasSkillTag('link')) return 0;
							let curs = game.filterPlayer(function (current) {
								if (current.hasSkillTag('nodamage')) return false;
								return !current.hasSkillTag('nofire') || !current.hasSkillTag('nothunder');
							});
							if (curs.length < 1) return 0;
							let f = target.hasSkillTag('nofire'),
								t = target.hasSkillTag('nothunder'),
								res = 0.9;
							if ((f && t) || target.hasSkillTag('nodamage')) return 0;
							if (f || t) res = 0.45;
							if (target.getEquip('tengjia')) res *= 2;
							if (!target.isLinked()) res = -res;
							if (ui.selected.targets.length) return res;
							let fs = 0,
								es = 0,
								att = get.attitude(player, target),
								linkf = false,
								alink = true;
							for (let i of curs) {
								let atti = get.attitude(player, i);
								if (atti > 0) {
									fs++;
									if (i.isLinked()) linkf = true;
								}
								if (atti < 0) {
									es++;
									if (!i.isLinked()) alink = false;
								}
							}
							if (es == 1 && !alink) {
								if (att <= 0 || (att > 0 && linkf && fs <= 1)) return 0;
							}
							return res;
						}
					},
					tag: {
						multitarget: 1,
						multineg: 1,
						norepeat: 1
					}
				}
			};
			/*奇正相生*/
			lib.card.qizhengxiangsheng = {
				enable: true,
				type: 'trick',
				fullskin: true,
				derivation: 'shen_xunyu',
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					'step 0'
					if (!event.qizheng_name) {
						if (player.isAlive())
							player.chooseControl('奇兵', '正兵').set('prompt', '请选择' + get.translation(target) + '的标记').set(
									'choice',
									(function () {
										var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
										var e2 = 0;
										if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
										var es = target.getGainableCards(player, 'e');
										if (es.length)
											e2 = Math.min(
												e2,
												(function () {
													var max = 0;
													for (var i of es) max = Math.max(max, get.value(i, target));
													return -max / 4;
												})()
											);
										if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
										if (e1 < e2) return '奇兵';
										return '正兵';
									})()
								).set('ai', function () {
									return _status.event.choice;
								});
						else event.finish();
					}
					'step 1'
					if (!event.qizheng_name && result && result.control) event.qizheng_name = result.control;
					if (event.directHit) event._result = {bool: false};
					else
						target.chooseToRespond('请打出一张杀或闪响应奇正相生', function (card, player) {
								var name = get.name(card);
								return name == 'sha' || name == 'shan';
							}).set('ai', function (card) {
								if (_status.event.choice == 'all') {
									var rand = get.rand('qizhengxiangsheng');
									if (rand > 0.5) return 0;
									return 1 + Math.random();
								}
								if (get.name(card) == _status.event.choice) return get.order(card);
								return 0;
							}).set(
								'choice',
								(function () {
									if (target.hasSkillTag('useShan')) return 'shan';
									if (typeof event.qizheng_aibuff == 'boolean') {
										var shas = target.getCards('h', 'sha'),
											shans = target.getCards('h', 'shan');
										if (event.qizheng_aibuff) {
											if (shas.length >= Math.max(1, shans.length)) return 'shan';
											if (shans.length > shas.length) return 'sha';
											return false;
										}
										if (!shas.length || !shans.length) return false;
									}
									var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
									var e2 = 0;
									if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
									var es = target.getGainableCards(player, 'e');
									if (es.length)
										e2 = Math.min(
											e2,
											(function () {
												var max = 0;
												for (var i of es) max = Math.max(max, get.value(i, target));
												return -max / 4;
											})()
										);
									if (e1 - e2 >= 0.3) return 'shan';
									if (e2 - e1 >= 0.3) return 'sha';
									return 'all';
								})()
							);
					'step 2'
					var name = result.bool ? result.card.name : null,
						require = event.qizheng_name;
					if (require == '奇兵' && name != 'sha') target.damage();
					else if (require == '正兵' && name != 'shan' && target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, true, 'he');
				},
				ai: {
					order: 5,
					tag: {
						damage: 0.5,
						gain: 0.5,
						loseCard: 1,
						respondShan: 1,
						respondSha: 1
					},
					result: {
						player: function (player, target, card) {
							if (target.hasSkill('tianzuo_remove')) {
								return 'zeroplayertarget';
							}
						},
						target: function (player, target) {
							if (target.hasSkill('tianzuo_remove')) {
								return 'zeroplayertarget';
							}
							var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
							var e2 = 0;
							if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
							var es = target.getGainableCards(player, 'e');
							if (es.length)
								e2 = Math.min(
									e2,
									(function () {
										var max = 0;
										for (var i of es) max = Math.max(max, get.value(i, target));
										return -max / 4;
									})()
								);
							if (
								game.hasPlayer(function (current) {
									return current.hasSkill('tianzuo') && get.attitude(current, player) <= 0;
								})
							)
								return Math.max(e1, e2);
							return Math.min(e1, e2);
						}
					}
				},
				selectTarget: 1
			};
		}

		if (lib.config.extension_AI优化_wjAi == 'on') {
			/*本体武将AI修改*/
			/*整肃*/
			lib.skill.zhengsu = {
				trigger: {
					player: 'phaseDiscardEnd'
				},
				forced: true,
				charlotte: true,
				filter: function (event, player) {
					return player.storage.zhengsu_leijin || player.storage.zhengsu_bianzhen || player.storage.zhengsu_mingzhi;
				},
				content: function () {
					player.chooseDrawRecover(2, '整肃奖励：摸两张牌或回复1点体力');
				},
				subSkill: {
					leijin: {
						mark: true,
						trigger: {
							player: 'useCard1'
						},
						lastDo: true,
						charlotte: true,
						forced: true,
						popup: false,
						onremove: true,
						filter: function (event, player) {
							return player.isPhaseUsing() && player.storage.zhengsu_leijin !== false;
						},
						content: function () {
							var list = player.getHistory('useCard', function (evt) {
								return evt.isPhaseUsing(player);
							});
							var goon = true;
							for (var i = 0; i < list.length; i++) {
								var num = get.number(list[i].card);
								if (typeof num != 'number') {
									goon = false;
									break;
								}
								if (i > 0) {
									var num2 = get.number(list[i - 1].card);
									if (typeof num2 != 'number' || num2 >= num) {
										goon = false;
										break;
									}
								}
							}
							if (!goon) {
								game.broadcastAll(function (player) {
									player.storage.zhengsu_leijin = false;
									if (player.marks.zhengsu_leijin) player.marks.zhengsu_leijin.firstChild.innerHTML = '╳';
									delete player.storage.zhengsu_leijin_markcount;
								}, player);
							} else {
								if (list.length > 2) {
									game.broadcastAll(
										function (player, num) {
											if (player.marks.zhengsu_leijin) player.marks.zhengsu_leijin.firstChild.innerHTML = '○';
											player.storage.zhengsu_leijin = true;
											player.storage.zhengsu_leijin_markcount = num;
										},
										player,
										num
									);
								} else
									game.broadcastAll(
										function (player, num) {
											player.storage.zhengsu_leijin_markcount = num;
										},
										player,
										num
									);
							}
							player.markSkill('zhengsu_leijin');
						},
						intro: {
							content: '<li>条件：回合内所有于出牌阶段使用的牌点数递增且不少于三张。'
						},
						mod: {
							aiOrder: function (player, card, num) {
								if (typeof card.number != 'number') return;
								var history = player.getHistory('useCard', function (evt) {
									return evt.isPhaseUsing();
								});
								if (history.length == 0) return num + 10 * (14 - card.number);
								var num = get.number(history[0].card);
								if (!num) return;
								for (var i = 1; i < history.length; i++) {
									var num2 = get.number(history[i].card);
									if (!num2 || num2 <= num) return;
									num = num2;
								}
								if (card.number > num) return num + 10 * (14 - card.number);
							}
						},
						sub: true
					},
					bianzhen: {
						mark: true,
						trigger: {
							player: 'useCard1'
						},
						firstDo: true,
						charlotte: true,
						forced: true,
						popup: false,
						onremove: true,
						filter: function (event, player) {
							return player.isPhaseUsing() && player.storage.zhengsu_bianzhen !== false;
						},
						content: function () {
							var list = player.getHistory('useCard', function (evt) {
								return evt.isPhaseUsing();
							});
							var goon = true,
								suit = get.suit(list[0].card, false);
							if (suit == 'none') {
								goon = false;
							} else {
								for (var i = 1; i < list.length; i++) {
									if (get.suit(list[i]) != suit) {
										goon = false;
										break;
									}
								}
							}
							if (!goon) {
								game.broadcastAll(function (player) {
									player.storage.zhengsu_bianzhen = false;
									if (player.marks.zhengsu_bianzhen) player.marks.zhengsu_bianzhen.firstChild.innerHTML = '╳';
								}, player);
							} else {
								if (list.length > 1) {
									game.broadcastAll(function (player) {
										if (player.marks.zhengsu_bianzhen) player.marks.zhengsu_bianzhen.firstChild.innerHTML = '○';
										player.storage.zhengsu_bianzhen = true;
									}, player);
								} else
									game.broadcastAll(
										function (player, suit) {
											if (player.marks.zhengsu_bianzhen) player.marks.zhengsu_bianzhen.firstChild.innerHTML = get.translation(suit);
										},
										player,
										suit
									);
							}
							player.markSkill('zhengsu_bianzhen');
						},
						intro: {
							content: '<li>条件：回合内所有于出牌阶段使用的牌花色相同且不少于两张。'
						},
						mod: {
							aiOrder: function (player, card, num) {
								if (typeof card == 'object' && player.isPhaseUsing()) {
									var evt = player.getLastUsed();
									if (evt && evt.card && get.suit(evt.card) && get.suit(evt.card) == get.suit(card)) {
										return num + 10;
									}
								}
							}
						},
						sub: true
					},
					mingzhi: {
						mark: true,
						trigger: {
							player: 'loseAfter'
						},
						firstDo: true,
						charlotte: true,
						forced: true,
						popup: false,
						onremove: true,
						filter: function (event, player) {
							if (player.storage.zhengsu_mingzhi === false || event.type != 'discard') return false;
							var evt = event.getParent('phaseDiscard');
							return evt && evt.player == player;
						},
						content: function () {
							var goon = true,
								list = [];
							player.getHistory('lose', function (event) {
								if (!goon || event.type != 'discard') return false;
								var evt = event.getParent('phaseDiscard');
								if (evt && evt.player == player) {
									for (var i of event.cards2) {
										var suit = get.suit(i, player);
										if (list.contains(suit)) {
											goon = false;
											break;
										} else list.push(suit);
									}
								}
							});
							if (!goon) {
								game.broadcastAll(function (player) {
									player.storage.zhengsu_mingzhi = false;
									if (player.marks.zhengsu_mingzhi) player.marks.zhengsu_mingzhi.firstChild.innerHTML = '╳';
									delete player.storage.zhengsu_mingzhi_list;
								}, player);
							} else {
								if (list.length > 1) {
									game.broadcastAll(
										function (player, list) {
											if (player.marks.zhengsu_mingzhi) player.marks.zhengsu_mingzhi.firstChild.innerHTML = '○';
											player.storage.zhengsu_mingzhi = true;
											player.storage.zhengsu_mingzhi_list = list;
											player.storage.zhengsu_mingzhi_markcount = list.length;
										},
										player,
										list
									);
								} else
									game.broadcastAll(
										function (player, list) {
											player.storage.zhengsu_mingzhi_list = list;
											player.storage.zhengsu_mingzhi_markcount = list.length;
										},
										player,
										list
									);
							}
							player.markSkill('zhengsu_mingzhi');
						},
						intro: {
							content: '<li>条件：回合内所有于弃牌阶段弃置的牌花色均不相同且不少于两张。'
						},
						sub: true
					}
				}
			};
			/*地主飞扬*/
			lib.skill.feiyang = {
				trigger: {
					player: 'phaseJudgeBegin'
				},
				charlotte: true,
				direct: true,
				filter: function (event, player) {
					return _status.mode != 'online' && _status.mode != 'binglin' && player == game.zhu && player.countCards('j') && player.countCards('h') > 1;
				},
				content: function () {
					'step 0'
					player.chooseToDiscard('h', 2, '是否发动【飞扬】，弃置两张手牌并弃置自己判定区的一张牌？').set('logSkill', 'feiyang').ai = function (card) {
						if (player.countCards('j') <= 1 && (player.hasSkillTag('rejudge') || player.hasSkillTag('nodamage') || player.hasSkillTag('nothunder')) && (player.hasJudge('shandian') || player.hasJudge('fulei'))) return false;
						return 6 - get.value(card);
					};
					'step 1'
					if (result.bool) {
						player.discardPlayerCard(player, 'j', true).ai = function (card) {
							if (player.countCards('h') < 2 && (!player.hasJudge('shandian') || !player.hasJudge('fulei'))) {
								return -ai.get.value(card);
							}
							return ai.get.value(card);
						};
					}
				}
			};
			/*椎锋*/
			lib.skill.dbzhuifeng = {
				audio: 2,
				groupSkill: true,
				enable: 'phaseUse',
				usable: 2,
				viewAsFilter: function (player) {
					return player.group == 'wei' && player.hp > 0;
				},
				viewAs: {name: 'juedou', isCard: true},
				filterCard: () => false,
				selectCard: -1,
				log: false,
				precontent: function () {
					player.logSkill('dbzhuifeng');
					player.loseHp();
				},
				group: 'dbzhuifeng_self',
				subSkill: {
					self: {
						trigger: {player: 'damageBegin2'},
						forced: true,
						filter: function (event, player) {
							var evt = event.getParent();
							return evt.skill == 'dbzhuifeng' && evt.player == player;
						},
						content: function () {
							trigger.cancel();
							player.getStat().skill.dbzhuifeng = 2;
						}
					}
				},
				ai: {
					order: function () {
						return get.order({name: 'juedou'}) - 0.5;
					},
					result: {
						player: function (player, target) {
							if (player.hp == 1) return -999;
						}
					}
				}
			};
			/*修好*/
			lib.skill.olxiuhao = {
				audio: 2,
				trigger: {
					player: 'damageBegin4',
					source: 'damageBegin2'
				},
				usable: 1,
				filter: function (event, player) {
					return event.source && event.source.isIn() && event.source != event.player;
				},
				logTarget: function (event, player) {
					return player == event.player ? event.source : event.player;
				},
				check: function (event, player) {
					_status.olxiuhao_judging = true;
					var bool = false;
					if (player == event.source) {
						if (get.attitude(player, event.player) > 0) bool = true;
						if (get.damageEffect(event.player, player, player, event.nature) <= 0) bool = true;
					} else {
						if (get.attitude(player, event.source) > 0) bool = true;
						if (get.damageEffect(player, event.source, player, event.nature) < 0) {
							if (event.source.hasSkillTag('nogain')) bool = true;
							if (event.num >= player.hp + player.countCards('hs', {name: ['tao', 'jiu']}) && (!player.hasFriend() || player == get.zhu(player))) bool = true;
						}
					}
					delete _status.olxiuhao_judging;
					return bool;
				},
				content: function () {
					trigger.cancel();
					trigger.source.draw(2);
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (target != player && !_status.olxiuhao_judging && get.tag(card, 'damage') && get.attitude(target, player) > 0 && (!target.storage.counttrigger || !target.storage.counttrigger.olxiuhao)) return [0, 0.5, 0, 0.5];
						},
						player: function (card, player, target) {
							if (target != player && !_status.olxiuhao_judging && get.tag(card, 'damage') && get.attitude(player, target) > 0 && (!player.storage.counttrigger || !player.storage.counttrigger.olxiuhao)) return [0, 0.5, 0, 0.5];
						}
					}
				}
			};
			/*赠刀*/
			lib.skill.xinfu_zengdao = {
				audio: 2,
				unique: true,
				limited: true,
				enable: 'phaseUse',
				filter: function (event, player) {
					return player.countCards('e') > 0;
				},
				filterTarget: lib.filter.notMe,
				skillAnimation: true,
				animationColor: 'thunder',
				position: 'e',
				filterCard: true,
				selectCard: [1, Infinity],
				discard: false,
				lose: false,
				content: function () {
					player.awakenSkill('xinfu_zengdao');
					target.addToExpansion(cards, player, 'give').gaintag.add('xinfu_zengdao2');
					target.addSkill('xinfu_zengdao2');
				},
				ai: {
					order: 1,
					result: {
						target: function (card, player, target) {
							if (player.countCards('e') >= 2) {
								return 1;
							}
						}
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				}
			};
			/*挫锐*/
			lib.skill.recuorui = {
				audio: 'cuorui',
				enable: 'phaseUse',
				limited: true,
				skillAnimation: true,
				animationColor: 'thunder',
				filter: function (event, player) {
					return (
						player.hp > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.countGainableCards(player, 'h') > 0;
						})
					);
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countGainableCards(player, 'h') > 0;
				},
				selectTarget: function () {
					return [1, _status.event.player.hp];
				},
				content: function () {
					if (num == 0) player.awakenSkill('recuorui');
					player.gainPlayerCard(target, true, 'h');
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				},
				ai: {
					order: 9,
					result: {
						player: 1,
						target: -1
					}
				}
			};
			/*引裾*/
			lib.skill.yinju = {
				audio: 2,
				enable: 'phaseUse',
				limited: true,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				skillAnimation: true,
				animationColor: 'water',
				content: function () {
					player.awakenSkill('yinju');
					player.storage.yinju2 = target;
					player.addTempSkill('yinju2');
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				},
				ai: {
					order: 10,
					result: {
						target: function (card, player, target) {
							var nm = player.getCards('hs', 'nanman');
							var wj = player.getCards('hs', 'wanjian');
							if (nm + wj >= 2) {
								return 1;
							}
						}
					}
				}
			};
			lib.skill.yinju2 = {
				trigger: {
					player: 'useCardToPlayered',
					source: 'damageBefore'
				},
				forced: true,
				onremove: true,
				filter: function (event, player, name) {
					if (name == 'useCardToPlayered') return event.target == player.storage.yinju2;
					return event.player == player.storage.yinju2;
				},
				logTarget: function (event) {
					return event[event.name == 'damage' ? 'player' : 'target'];
				},
				content: function () {
					'step 0'
					if (trigger.name == 'damage') {
						trigger.cancel();
						trigger.player.recover(trigger.num);
						event.finish();
					} else {
						game.asyncDraw([player, trigger.target]);
					}
					'step 1'
					game.delayx();
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if (card.name == 'nanman' || card.name == 'wanjian') {
								return [1, 1];
							}
						}
					}
				}
			};
			/*游龙*/
			lib.skill.youlong = {
				enable: 'chooseToUse',
				audio: 2,
				audioname: ['key_sakuya'],
				zhuanhuanji: true,
				marktext: '☯',
				mark: true,
				intro: {
					content: function (storage, player) {
						return storage ? '每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。' : '每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌。';
					}
				},
				init: function (player) {
					player.storage.youlong = false;
					if (!player.storage.youlong2) player.storage.youlong2 = [];
				},
				hiddenCard: function (player, name) {
					if (player.storage.youlong2.contains(name) || player.countDisabled() >= 5) return false;
					if (player.hasSkill('youlong_' + (player.storage.youlong || false))) return false;
					var type = get.type(name);
					if (player.storage.youlong) return type == 'basic';
					return type == 'trick';
				},
				filter: function (event, player) {
					if (player.storage.youlong2.contains(name) || player.countDisabled() >= 5) return false;
					if (player.hasSkill('youlong_' + (player.storage.youlong || false))) return false;
					var type = player.storage.youlong ? 'basic' : 'trick';
					for (var name of lib.inpile) {
						if (player.storage.youlong2.contains(name)) continue;
						if (get.type(name) != type) continue;
						if (event.filterCard({name: name, isCard: true}, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var dialog = ui.create.dialog('游龙', 'hidden');
						var table = document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin = '0';
						table.style.width = '100%';
						table.style.position = 'relative';
						for (var i = 1; i < 6; i++) {
							if (player.isDisabled(i)) continue;
							var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.innerHTML = '<span>' + get.translation('equip' + i) + '</span>';
							td.link = i;
							td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
							for (var j in lib.element.button) {
								td[j] = lib.element.button[j];
							}
							table.appendChild(td);
							dialog.buttons.add(td);
						}
						dialog.content.appendChild(table);
						var type = player.storage.youlong ? 'basic' : 'trick';
						var list = [];
						for (var name of lib.inpile) {
							if (player.storage.youlong2.contains(name)) continue;
							if (get.type(name) != type) continue;
							if (event.filterCard({name: name, isCard: true}, player, event)) {
								list.push([type, '', name]);
								if (name == 'sha') {
									for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
								}
							}
						}
						dialog.add([list, 'vcard']);
						return dialog;
					},
					filter: function (button) {
						if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
						return true;
					},
					select: 2,
					check: function (button) {
						var player = _status.event.player;
						if (typeof button.link == 'number') {
							var card = player.getEquip(button.link);
							if (card) {
								var val = get.value(card);
								if (val > 0) return 0;
								return 5 - val;
							}
							switch (button.link) {
								case 3:
									return 4.5;
									break;
								case 4:
									return 4.4;
									break;
								case 5:
									return 4.3;
									break;
								case 2:
									return (3 - player.hp) * 1.5;
									break;
								case 1: {
									if (
										game.hasPlayer(function (current) {
											return (get.realAttitude || get.attitude)(player, current) < 0 && get.distance(player, current) > 1;
										})
									)
										return 0;
									return 3.2;
								}
							}
						}
						var name = button.link[2];
						var evt = _status.event.getParent();
						if (get.type(name) == 'basic') {
							if (name == 'shan') return 2;
							if (evt.type == 'dying') {
								if (get.attitude(player, evt.dying) < 2) return false;
								if (player.hp < 1 && name == 'jiu') return 2.1;
								return 1.9;
							}
							if (evt.type == 'phase') return player.getUseValue({name: name, nature: button.link[3], isCard: true});
							return 1;
						}
						if (!['chuqibuyi', 'shuiyanqijunx', 'juedou', 'nanman', 'wanjian', 'shunshou', 'zhujinqiyuan'].contains(name)) return 0;
						var card = {name: name, isCard: true};
						if (['shunshou', 'zhujinqiyuan'].contains(card.name)) {
							if (
								!game.hasPlayer(function (current) {
									return get.attitude(player, current) != 0 && get.distance(player, current) <= 1 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
								})
							)
								return 0;
							return player.getUseValue(card) - 7;
						}
						return player.getUseValue(card) - 4;
					},
					backup: function (links, player) {
						if (typeof links[1] == 'number') links.reverse();
						var equip = links[0];
						var name = links[1][2];
						var nature = links[1][3];
						return {
							filterCard: function () {
								return false;
							},
							selectCard: -1,
							equip: equip,
							viewAs: {
								name: name,
								nature: nature,
								isCard: true
							},
							popname: true,
							precontent: function () {
								player.logSkill('youlong');
								player.disableEquip(lib.skill.youlong_backup.equip);
								delete event.result.skill;
								player.addTempSkill('youlong_' + (player.storage.youlong || false), 'roundStart');
								player.changeZhuanhuanji('youlong');
								player.storage.youlong2.add(event.result.card.name);
							}
						};
					},
					prompt: function (links, player) {
						if (typeof links[1] == 'number') links.reverse();
						var equip = 'equip' + links[0];
						var name = links[1][2];
						var nature = links[1][3];
						return '废除自己的' + get.translation(equip) + '栏，视为使用' + (get.translation(nature) || '') + get.translation(name);
					}
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg == 'respond') return false;
						if (!player.storage.youlong || player.hasSkill('youlong_true')) return false;
						var name = tag == 'respondSha' ? 'sha' : 'shan';
						return !player.storage.youlong2.contains(name);
					},
					order: 1,
					result: {
						player: 1
					}
				}
			};
			/*扎符*/
			lib.skill.zhafu = {
				audio: 2,
				enable: 'phaseUse',
				limited: true,
				skillAnimation: true,
				animationColor: 'wood',
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					player.awakenSkill('zhafu');
					target.addSkill('zhafu_hf');
					target.storage.zhafu_hf = player;
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) < 0) {
								var num = target.countCards('h');
								return -num;
								if (target.hasJudge('lebu')) return -num * 2;
							}
							return 0;
						}
					}
				},
				subSkill: {
					hf: {
						trigger: {
							player: 'phaseDiscardBegin'
						},
						forced: true,
						popup: false,
						charlotte: true,
						onremove: true,
						content: function () {
							'step 0'
							if (player.countCards('h') <= 1 || player.storage.zhafu_hf.isDead()) event.finish();
							'step 1'
							player.storage.zhafu_hf.logSkill('zhafu_hf', player);
							player.chooseCard('h', true, '选择保留一张手牌，将其余的手牌交给' + get.translation(player.storage.zhafu_hf)).ai = get.value;
							'step 2'
							var cards = player.getCards('h');
							cards.remove(result.cards[0]);
							player.storage.zhafu_hf.gain(cards, player, 'giveAuto');
							'step 3'
							player.removeSkill('zhafu_hf');
						},
						sub: true
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*武烈*/
			lib.skill.wulie = {
				trigger: {
					player: 'phaseJieshuBegin'
				},
				audio: 2,
				direct: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'wood',
				unique: true,
				filter: function (event, player) {
					return player.hp > 0;
				},
				content: function () {
					'step 0'
					player.chooseTarget([1, player.hp], get.prompt2('wulie'), lib.filter.notMe).set('ai', function (target) {
						if (player.hp <= 3) return false;
						if (player.hp >= 4) {
							if (get.mode() == 'identity') {
								if (player.identity == 'zhu') {
									if (player.hp <= 4) {
										return false;
									}
									if (player.hp >= 5) {
										return get.attitude(player, target);
									}
								}
							}
							if (player.hp >= 4) {
								return get.attitude(player, target);
							}
						} else {
							return false;
						}
					});
					'step 1'
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						player.logSkill('wulie', targets);
						player.awakenSkill('wulie');
						player.loseHp(targets.length);
						while (targets.length) {
							targets[0].addSkill('wulie2');
							targets.shift().addMark('wulie2');
						}
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*英魂*/
			lib.skill.yinghun = {
				audio: 2,
				audioname: ['re_sunjian', 'sunce', 're_sunben', 're_sunce', 'ol_sunjian', 're_sunyi', 'sb_sunce'],
				trigger: {
					player: 'phaseZhunbeiBegin'
				},
				direct: true,
				preHidden: true,
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('yinghun'), function (card, player, target) {
						return player != target;
					}).set('ai', function (target) {
						let player = _status.event.player;
						if (player.getDamagedHp() == 1 && target.countCards('he') == 0) return 0;
						if (get.attitude(_status.event.player, target) > 0) return 10 + get.attitude(_status.event.player, target);
						if (player.getDamagedHp() == 1) return -1;
						return 1;
					}).setHiddenSkill(event.name);
					'step 1'
					if (result.bool) {
						event.num = player.getDamagedHp();
						player.logSkill(event.name, result.targets);
						event.target = result.targets[0];
						if (event.num == 1) {
							event.directcontrol = true;
						} else {
							var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
							var str2 = '摸一弃' + get.cnNumber(event.num, true);
							player
								.chooseControl(str1, str2, function (event, player) {
									if (player.isHealthy()) return 1 - _status.event.choice;
									return _status.event.choice;
								})
								.set('choice', get.attitude(player, event.target) > 0 ? 0 : 1);
							event.str = str1;
						}
					} else {
						event.finish();
					}
					'step 2'
					if (event.directcontrol || result.control == event.str) {
						if (event.num > 0) event.target.draw(event.num);
						event.target.chooseToDiscard(true, 'he');
					} else {
						event.target.draw();
						if (event.num > 0) event.target.chooseToDiscard(event.num, true, 'he');
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage') && player.hp == player.maxHp) return 1.5;
							if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return 'zeroplayertarget';
						}
					}
				}
			};
			lib.skill.gzyinghun = {
				audio: 'yinghun',
				audioname: ['re_sunjian', 'sunce', 're_sunben', 're_sunce', 'ol_sunjian', 're_sunyi', 'sb_sunce'],
				trigger: {
					player: 'phaseZhunbeiBegin'
				},
				filter: function (event, player) {
					return player.getDamagedHp() > 0;
				},
				direct: true,
				preHidden: true,
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('gzyinghun'), function (card, player, target) {
						return player != target;
					}).set('ai', function (target) {
						let player = _status.event.player;
						if (player.getDamagedHp() == 1 && target.countCards('he') == 0) return 0;
						if (get.attitude(_status.event.player, target) > 0) return 10 + get.attitude(_status.event.player, target);
						if (player.getDamagedHp() == 1) return -1;
						return 1;
					}).setHiddenSkill(event.name);
					'step 1'
					if (result.bool) {
						event.num = player.getDamagedHp();
						player.logSkill(event.name, result.targets);
						event.target = result.targets[0];
						if (event.num == 1) {
							event.directcontrol = true;
						} else {
							var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
							var str2 = '摸一弃' + get.cnNumber(event.num, true);
							player
								.chooseControl(str1, str2, function (event, player) {
									return _status.event.choice;
								})
								.set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
							event.str = str1;
						}
					} else {
						event.finish();
					}
					'step 2'
					if (event.directcontrol || result.control == event.str) {
						event.target.draw(event.num);
						event.target.chooseToDiscard(true, 'he');
					} else {
						event.target.draw();
						event.target.chooseToDiscard(event.num, true, 'he');
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage') && player.hp == player.maxHp) return 1.5;
							if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return 'zeroplayertarget';
						}
					},
					threaten: function (player, target) {
						if (target.hp == target.maxHp) return 0.5;
						if (target.hp == 1) return 2;
						if (target.hp == 2) return 1.5;
						return 0.5;
					},
					maixie: true
				}
			};
			/*诏缚*/
			lib.skill.xinzhaofu = {
				mark: false,
				init: function (player) {
					if (player.hasZhuSkill('xinzhaofu')) {
						player.markSkill('xinzhaofu');
						player.storage.xinzhaofu = false;
					}
				},
				audio: 'zhaofu',
				enable: 'phaseUse',
				usable: 1,
				filter: function (event, player) {
					return player.hasZhuSkill('xinzhaofu');
				},
				limited: true,
				skillAnimation: true,
				animationColor: 'wood',
				selectTarget: [1, 2],
				filterTarget: function (card, player, target) {
					return player != target;
				},
				contentBefore: function () {
					player.awakenSkill('xinzhaofu');
				},
				content: function () {
					target.addSkill('xinzhaofu_effect');
					target.markAuto('xinzhaofu_effect', [player]);
				},
				ai: {
					order: 6,
					result: {
						target: -1
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						mark: true,
						intro: {
							content: '已视为在其他吴势力角色的攻击范围内'
						},
						mod: {
							inRangeOf: function (from, to) {
								if (from.group != 'wu') return;
								var list = to.getStorage('xinzhaofu_effect');
								for (var i of list) {
									if (i != from) return true;
								}
							}
						},
						sub: true
					}
				},
				intro: {
					content: 'limited'
				}
			};
			/*雄乱*/
			lib.skill.drlt_xiongluan = {
				audio: 2,
				unique: true,
				enable: 'phaseUse',
				mark: true,
				skillAnimation: true,
				animationColor: 'gray',
				limited: true,
				init: function (player) {
					player.storage.drlt_xiongluan = false;
				},
				filter: function (event, player) {
					if (player.storage.drlt_xiongluan) return false;
					return true;
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					player.awakenSkill('drlt_xiongluan');
					player.storage.drlt_xiongluan = true;
					player.disableEquip('equip1');
					player.disableEquip('equip2');
					player.disableEquip('equip3');
					player.disableEquip('equip4');
					player.disableEquip('equip5');
					player.disableJudge();
					player.addTempSkill('drlt_xiongluan1');
					player.storage.drlt_xiongluan1 = target;
					target.addSkill('drlt_xiongluan2');
					target.markSkillCharacter('drlt_xiongluan1', player, '雄乱', '无法使用或打出任何手牌');
				},
				ai: {
					order: 13,
					result: {
						target: function (player, target) {
							if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) return 0;
							var hs = player.countCards('hs', function (card) {
								return ['sha', 'juedou'].contains(card.name) && get.effect(target, card, player, player) != 0;
							});
							var ts = target.hp;
							if (hs >= ts && ts > 1) return -1;
							return 0;
						}
					}
				},
				intro: {
					content: 'limited'
				}
			},
			lib.skill.drlt_xiongluan1 = {
				onremove: function (player) {
					player.storage.drlt_xiongluan1.removeSkill('drlt_xiongluan2');
					player.storage.drlt_xiongluan1.unmarkSkill('drlt_xiongluan1');
					delete player.storage.drlt_xiongluan1;
				},
				mod: {
					targetInRange: function (card, player, target) {
						if (target.hasSkill('drlt_xiongluan2')) return true;
					},
					cardUsableTarget: function (card, player, target) {
						if (target.hasSkill('drlt_xiongluan2')) return true;
					}
				},
				charlotte: true,
				ai: {
					effect: {
						player: function (card, player, target) {
							if (get.tag(card, 'damage') && target.hasSkill('drlt_xiongluan2')) return [99, 99];
						}
					}
				}
			},
			lib.skill.drlt_xiongluan2 = {
				mod: {
					cardEnabled2: function (card, player) {
						if (get.position(card) == 'h') return false;
					}
				},
				charlotte: true
			};
			/*屯军*/
			lib.skill.xinfu_tunjun = {
				skillAnimation: true,
				animationColor: 'metal',
				limited: true,
				unique: true,
				enable: 'phaseUse',
				audio: 2,
				filter: function (event, player) {
					if (player.storage.xinfu_tunjun) return false;
					return player.storage.xinfu_lveming && player.storage.xinfu_lveming > 0;
				},
				filterTarget: true,
				selectTarget: 1,
				content: function () {
					'step 0'
					player.awakenSkill('xinfu_tunjun');
					event.num = player.storage.xinfu_lveming;
					event.toequip = [];
					'step 1'
					var equip = get.cardPile(function (card) {
						var bool1 = true;
						for (var i = 0; i < event.toequip.length; i++) {
							if (get.type(card) == 'equip' && get.subtype(card) == get.subtype(event.toequip[i])) bool1 = false;
						}
						return get.type(card) == 'equip' && !event.toequip.contains(card) && target.isEmpty(get.subtype(card)) && bool1;
					});
					if (equip) event.toequip.push(equip);
					else event.num = 0;
					event.num--;
					'step 2'
					if (event.num > 0) event.goto(1);
					'step 3'
					for (var i = 0; i < event.toequip.length; i++) {
						target.chooseUseTarget(event.toequip[i], true).set('animate', false).set('nopopup', true);
					}
				},
				ai: {
					order: 1,
					result: {
						target: function (card, player, target) {
							if (player.storage.xinfu_lveming >= 2) {
								return 1;
							}
						}
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player) {
					player.storage.xinfu_tunjun = false;
				}
			};
			/*慷忾*/
			lib.skill.xinfu_kaikang = {
				audio: 2,
				trigger: {
					global: 'useCardToTargeted'
				},
				filter: function (event, player) {
					return event.card.name == 'sha' && get.distance(player, event.target) <= 1 && event.target.isIn();
				},
				check: function (event, player) {
					return get.attitude(player, event.target) > 0;
				},
				logTarget: 'target',
				content: function () {
					'step 0'
					player.draw();
					if (trigger.target != player) {
						player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
							if (get.position(card) == 'e') return -1;
							if (card.name == 'shan') return 1;
							if (get.type(card) == 'equip') return 0.5;
							return 0;
						});
					} else {
						event.finish();
					}
					'step 1'
					trigger.target.gain(result.cards, player, 'give');
					game.delay();
					event.card = result.cards[0];
					'step 2'
					if (trigger.target.getCards('h').contains(card) && get.type(card) == 'equip') {
						trigger.target.chooseUseTarget(card);
					}
				},
				ai: {
					threaten: 1.1
				}
			};
			/*立牧*/
			lib.skill.xinfu_limu = {
				mod: {
					targetInRange: function (card, player, target) {
						if (player.countCards('j') && player.inRange(target)) {
							return true;
						}
					},
					cardUsableTarget: function (card, player, target) {
						if (player.countCards('j') && player.inRange(target)) return true;
					},
					aiValue: function (player, card, num) {
						if (card.name == 'zhangba') return 30;
						if (player.getEquip('zhangba') && player.countCards('hs') > 1 && ['shan', 'tao', 'jiu'].contains(card.name)) return 0;
						if (card.name == 'shan' || card.name == 'tao' || card.name == 'jiu') return num / 3;
					}
				},
				locked: false,
				audio: 2,
				enable: 'phaseUse',
				discard: false,
				filter: function (event, player) {
					if (player.hasJudge('lebu')) return false;
					return player.countCards('hes', {suit: 'diamond'}) > 0;
				},
				viewAs: {
					name: 'lebu'
				},
				position: 'hes',
				filterCard: function (card, player, event) {
					return get.suit(card) == 'diamond' && player.canAddJudge({name: 'lebu', cards: [card]});
				},
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return player == target;
				},
				check: function (card) {
					var player = _status.event.player;
					if (!player.getEquip('zhangba') && player.countCards('hs', 'sha') < 2) {
						if (
							player.countCards('h', function (cardx) {
								return cardx != card && cardx.name == 'shan';
							}) > 0
						)
							return 0;
						var damaged = player.maxHp - player.hp - 1;
						var ts = player.countCards('h', function (cardx) {
							return cardx != card && cardx.name == 'tao';
						});
						if (ts > 0 && ts > damaged) return 0;
					}
					if (card.name == 'shan') return 15;
					if (card.name == 'tao') return 10;
					return 9 - get.value(card);
				},
				onuse: function (links, player) {
					var next = game.createEvent('limu_recover', false, _status.event.getParent());
					next.player = player;
					next.setContent(function () {
						player.recover();
					});
				},
				ai: {
					result: {
						target: 1,
						ignoreStatus: true
					},
					order: function (item, player) {
						if (
							player.countCards('hs', 'zhangba') ||
							(player.countCards('h', function (card) {
								return get.suit(card) == 'diamond' && get.type(card) == 'basic';
							}) == 1 &&
								player.countCards('h', function (card) {
									return get.name(card) != 'sha' && get.type(card) == 'basic';
								}) == 1 &&
								player.countCards('h', {type: 'trick'}) > 0)
						) {
							return get.order({name: 'sha'}) + 1;
						}
						if (player.getDamagedHp() >= 2) return 5;
						if (
							game.hasPlayer(function (current) {
								return current != player && player.inRange(current) && get.attitude(player, current) <= 0;
							})
						) {
							if (player.countCards('hs', 'sha') > 1) return 3;
							if (player.countCards('h', 'sha') > 0 && player.countCards('h', 'tao') == 0 && player.countCards('h', 'shan') == 0 && player.countCards('h', 'jiu') == 0) return 3;
							if (
								player.countCards('h', function (card) {
									return get.suit(card) == 'diamond' && get.type(card) == 'basic';
								}) == 1 &&
								player.countCards('h', function (card) {
									return get.name(card) != 'sha' && get.type(card) == 'basic';
								}) == 1 &&
								(player.countCards('h', 'taoyuan') > 0 || player.countCards('h', 'wugu') > 0 || player.countCards('h', 'tiesuo') > 0 || player.countCards('h', 'nanman') > 0 || player.countCards('h', 'wanjian') > 0)
							)
								return 12;
						}
						if (player.getEquip('zhangba')) return 15;
						return 0;
					},
					effect: {
						player: function (card, player, target) {
							if (card.name == 'zhangba' && player.hasSkill('xinfu_tushe')) {
								return [3.5, 3.5];
							}
							if (player.countCards('h', 'jiu') + player.countCards('h', 'tao') == 1 && player.countCards('h', {type: 'basic'}) == 1 && player.hasSkill('xinfu_tushe')) {
								if (card.name == 'tao') {
									return [2.5, 2.5];
								}
								if (card.name == 'jiu') {
									return [2.5, 2.5];
								}
							}
							if (player.getEquip('zhangba') && player.hasSkill('xinfu_tushe')) {
								if (get.attitude(player, target) <= 0 && card.name == 'sha') {
									return [2.5, 2.5];
								}
								if (card.name == 'jiu') {
									return [2.5, 2.5];
								}
								if (!player.countCards('h', {type: 'basic'})) {
									if (get.type2(card) == 'trick') {
										return [3, 3];
									}
								}
							}
							if (!player.countCards('h', {type: 'basic'}) && player.countCards('j') && player.hasSkill('xinfu_tushe')) {
								if (card.name == 'wugu' || card.name == 'taoyuan' || card.name == 'tiesuo') {
									return [1, 1.5];
								}
							}
						}
					},
					basic: {
						order: 1,
						useful: 1,
						value: 8
					},
					tag: {
						skip: 'phaseUse'
					}
				}
			};
			/*天匠*/
			lib.skill.pytianjiang_move = {
				audio: 'pytianjiang',
				prompt: '将装备区里的一张牌移动至其他角色的装备区',
				enable: 'phaseUse',
				position: 'e',
				filter: function (event, player) {
					return player.countCards('e') > 0;
				},
				check: function () {
					return 1;
				},
				filterCard: true,
				filterTarget: function (event, player, target) {
					return target != player && target.canEquip(ui.selected.cards[0], true);
				},
				prepare: 'give',
				discard: false,
				lose: false,
				content: function () {
					target.equip(cards[0]);
					if (cards[0].name.indexOf('pyzhuren_') == 0) player.draw(2);
				},
				ai: {
					order: function (item, player) {
						return get.order({name: 'sha'}) - 0.1;
					},
					expose: 0.2,
					result: {
						target: function (player, target) {
							if (ui.selected.cards.length) {
								var card = ui.selected.cards[0];
								if (target.getEquip(card) || target.countCards('h', {subtype: get.subtype(card)})) return 1;
								return get.effect(target, card, player, target);
							}
							return 0;
						}
					}
				}
			};
			/*荐杰*/
			lib.skill.xinfu_jianjie = {
				derivation: ['jianjie_faq'],
				group: ['xinfu_jianjie1', 'xinfu_jianjie2'],
				audio: 3,
				trigger: {
					player: 'phaseZhunbeiBegin'
				},
				direct: true,
				filter: function (event, player) {
					if (player.phaseNumber > 1) return false;
					return !game.hasPlayer(function (current) {
						return current.hasSkill('smh_huoji') || current.hasSkill('smh_lianhuan');
					});
				},
				content: function () {
					'step 0'
					player.chooseTarget('请将「龙印」交给一名角色', true, function (card, player, target) {
						return target != player;
					}).set('ai', function (target) {
						let player = _status.event.player;
						return get.attitude(player, target);
					});
					'step 1'
					if (result.bool && result.targets && result.targets.length) {
						var target = result.targets[0];
						player.logSkill('xinfu_jianjie', target);
						player.line(target, 'fire');
						target.addSkill('smh_huoji');
						game.delay();
					}
					if (
						game.hasPlayer(function (current) {
							return !current.hasSkill('smh_huoji') && current != player;
						})
					) {
						player
							.chooseTarget('请将「凤印」交给一名角色', true, function (card, player, target) {
								return target != player && !target.hasSkill('smh_huoji');
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								return get.attitude(player, target);
							});
					} else event.finish();
					'step 2'
					if (result.bool && result.targets && result.targets.length) {
						var target = result.targets[0];
						player.logSkill('xinfu_jianjie', target);
						player.line(target, 'green');
						target.addSkill('smh_lianhuan');
						game.delay();
					}
				}
			};
			lib.skill.xinfu_jianjie1 = {
				audio: 3,
				prompt: '你的第一个准备阶段，你令两名不同的角色分别获得龙印与凤印；出牌阶段限一次（你的第一个回合除外），或当拥有龙印、凤印的角色死亡时，你可以转移龙印、凤印。',
				enable: 'phaseUse',
				usable: 1,
				filter: function (event, player) {
					if (player.phaseNumber == 1) return false;
					if (
						!game.hasPlayer(function (current) {
							return current.hasSkill('smh_huoji') || current.hasSkill('smh_lianhuan');
						})
					)
						return false;
					return true;
				},
				filterTarget: function (card, player, target) {
					if (ui.selected.targets.length == 1) {
						return true;
					} else {
						return target.hasSkill('smh_huoji') || target.hasSkill('smh_lianhuan');
					}
				},
				targetprompt: ['移走印', '得到印'],
				selectTarget: 2,
				multitarget: true,
				content: function () {
					'step 0'
					if (targets[0].hasSkill('smh_huoji') && targets[0].hasSkill('smh_lianhuan')) {
						player.chooseControl('龙印', '凤印').set('prompt', '请选择要移动的印');
					} else {
						if (targets[0].hasSkill('smh_huoji')) event._result = {control: '龙印'};
						else event._result = {control: '凤印'};
					}
					'step 1'
					if (result.control == '龙印') {
						targets[0].removeSkill('smh_huoji');
						targets[1].addSkill('smh_huoji');
					} else {
						targets[0].removeSkill('smh_lianhuan');
						targets[1].addSkill('smh_lianhuan');
					}
				},
				ai: {
					order: 8,
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target);
							if (ui.selected.targets.length == 0) {
								return get.attitude(player, target) < 0 ? -999 : -3;
								return get.attitude(player, target) >= 0 ? 0 : att;
								return target == player && get.attitude(player, target) >= 0 ? 0 : 1;
								return target != player && get.attitude(player, target) >= 0 ? 0 : 2;
							} else {
								if (target != player) {
									if (target.hasSkill('smh_huoji') || target.hasSkill('smh_lianhuan')) return target.countCards('h') + 2;
									return target.countCards('h') + 1;
								}
								if (target == player) {
									if (target.hasSkill('smh_huoji') || target.hasSkill('smh_lianhuan')) return target.countCards('h') + 1;
									return target.countCards('h') + 0.5;
								}
							}
						}
					},
					expose: 0.4,
					threaten: 3
				}
			};
			/*隐士*/
			lib.skill.xinfu_yinshi = {
				audio: 2,
				trigger: {
					player: 'damageBegin4'
				},
				forced: true,
				filter: function (event, player) {
					if (player.hasSkill('smh_huoji') || player.hasSkill('smh_lianhuan')) return false;
					if (!player.isEmpty(2)) return false;
					if (event.nature) return true;
					return get.type(event.card, 'trick') == 'trick';
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					notrick: true,
					nofire: true,
					nothunder: true,
					effect: {
						player: function (card, player, target) {
							if (!player.hasSkill('smh_huoji') && !player.hasSkill('smh_lianhuan')) {
								if (get.type(card) == 'equip' && get.subtype(card) == 'equip2') return 'zeroplayertarget';
							}
						},
						target: function (card, player, target, current) {
							if (target.hasSkill('smh_huoji') || target.hasSkill('smh_lianhuan')) return;
							if (player == target && get.subtype(card) == 'equip2') {
								if (get.equipValue(card) <= 8) return 0;
							}
							if (!target.isEmpty(2)) return;
							if (card.name == 'tiesuo') return 'zeroplayertarget';
							if (get.tag(card, 'natureDamage')) return 'zerotarget';
							if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
								return 'zeroplayertarget';
							}
						}
					}
				}
			};
			/*观微*/
			lib.skill.xinfu_guanwei = {
				audio: 2,
				usable: 1,
				trigger: {
					global: 'phaseUseEnd'
				},
				filter: function (event, player) {
					var history = event.player.getHistory('useCard', function (evt) {
						return evt.getParent('phaseUse') == event;
					});
					var num = 0;
					var suit = false;
					for (var i = 0; i < history.length; i++) {
						var suit2 = get.suit(history[i].card);
						if (!suit2) continue;
						if (suit && suit != suit2) return false;
						suit = suit2;
						num++;
					}
					return num > 1;
				},
				direct: true,
				content: function () {
					'step 0'
					player.chooseToDiscard('he', get.prompt('xinfu_guanwei', trigger.player), '弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。').set('ai', function (card) {
						if (get.attitude(_status.event.player, _status.currentPhase) < 1) return 0;
						return 9 - get.value(card);
					}).set('logSkill', 'xinfu_guanwei');
					'step 1'
					if (result.bool) {
						player.addTempSkill('xinfu_guanwei_off');
						player.line(trigger.player, 'green');
						trigger.player.draw(2);
					} else {
						event.finish();
					}
					'step 2'
					var next = trigger.player.phaseUse();
					event.next.remove(next);
					trigger.getParent('phase').next.push(next);
				},
				ai: {
					expose: 0.5
				},
				subSkill: {
					off: {
						charlotte: true,
						superCharlotte: true,
						sub: true
					}
				}
			};
			/*空城*/
			lib.skill.kongcheng = {
				mod: {
					targetEnabled: function (card, player, target, now) {
						if (target.countCards('h') == 0) {
							if (card.name == 'sha' || card.name == 'juedou') return false;
						}
					},
					aiUseful: function (player, card, num) {
						if (get.name(card) == 'sha') {
							return num / 2;
						}
					}
				},
				group: 'kongcheng1',
				audio: 'kongcheng1',
				audioname: ['re_zhugeliang'],
				ai: {
					noh: true,
					skillTagFilter: function (player, tag) {
						if (tag == 'noh') {
							if (player.countCards('h') != 1) return false;
						}
					}
				}
			};
			/*断肠*/
			lib.skill.duanchang = {
				audio: 2,
				audioname: ['re_caiwenji'],
				forbid: ['boss'],
				trigger: {
					player: 'die'
				},
				forced: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: 'gray',
				filter: function (event) {
					return event.source && event.source.isIn();
				},
				content: function () {
					trigger.source.clearSkills();
				},
				logTarget: 'source',
				ai: {
					threaten: function (player, target) {
						if (target.hp == 1) return 0.2;
						return 1.5;
					},
					effect: {
						target: function (card, player, target, current) {
							if (!target.hasFriend()) return;
							if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, -1, -2.5];
						}
					}
				}
			};
			/*业仇*/
			lib.skill.yechou = {
				audio: 2,
				trigger: {
					player: 'die'
				},
				direct: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: 'wood',
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('yechou'), function (card, player, target) {
						return player != target && target.getDamagedHp() > 1;
					}).set('forceDie', true).set('ai', function (target) {
						let num = get.attitude(_status.event.player, target);
						return -num;
					});
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill('yechou', target);
						player.line(target, 'green');
						target.addTempSkill('yechou2', {player: 'phaseZhunbeiBegin'});
					}
				},
				ai: {
					maixie_defend: true,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
							if (target.hp <= 1 && get.attitude(player, target) <= 0 && (get.tag(card, 'damage') || get.damageEffect(target, player, player) > 0) && target.hasFriend()) return [1, 0, 0, -9];
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						}
					}
				}
			};
			/*武魂*/
			lib.skill.twwuhun = {
				trigger: {
					player: 'die'
				},
				forceDie: true,
				skillAnimation: true,
				animationColor: 'soil',
				locked: true,
				check: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.hasMark('twwuhun') && get.attitude(player, current) < 0;
					});
				},
				content: function () {
					'step 0'
					player.judge(function (card) {
						let name = get.name(card, false);
						if (name == 'tao' || name == 'taoyuan') return -25;
						return 15;
					}).set('forceDie', true).judge2 = function (result) {
						return result.bool;
					};
					'step 1'
					var num = game.countPlayer(function (current) {
						return current != player && current.hasMark('twwuhun');
					});
					if (result.bool && num > 0) {
						player
							.chooseTarget('请选择【武魂】的目标', '选择至少一名拥有“梦魇”标记的角色。令这些角色各自失去X点体力（X为其“梦魇”标记数）', true, [1, num], function (card, player, target) {
								return target != player && target.hasMark('twwuhun');
							})
							.set('forceDie', true)
							.set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							});
					} else event.finish();
					'step 2'
					var targets = result.targets.sortBySeat();
					player.line(targets, 'fire');
					event.targets = targets;
					'step 3'
					var target = targets.shift();
					var num = target.countMark('twwuhun');
					if (num > 0) target.loseHp(num);
					if (targets.length > 0) event.redo();
				},
				marktext: '魇',
				intro: {
					name: '梦魇',
					content: 'mark',
					onunmark: true
				},
				group: 'twwuhun_gain',
				subSkill: {
					gain: {
						trigger: {
							player: 'damageEnd',
							source: 'damageSource'
						},
						forced: true,
						filter: function (event, player, name) {
							if (event.player == event.source) return false;
							var target = lib.skill.twwuhun_gain.logTarget(event, player);
							if (!target || !target.isAlive()) return false;
							return name == 'damageEnd' || target.hasMark('twwuhun');
						},
						logTarget: function (event, player) {
							if (player == event.player) return event.source;
							return event.player;
						},
						content: function () {
							var target = lib.skill.twwuhun_gain.logTarget(trigger, player);
							target.addMark('twwuhun', player == trigger.source ? 1 : trigger.num);
							game.delayx();
						},
						ai: {
							maixie_defend: true,
							effect: {
								target: function (card, player, target) {
									if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
									if (target.hp <= 1 && get.attitude(player, target) <= 0 && (get.tag(card, 'damage') || get.damageEffect(target, player, player) > 0) && target.hasFriend()) return [1, 0, 0, -9];
									// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
								}
							}
						},
						sub: true
					}
				}
			};
			lib.skill.new_wuhun = {
				audio: 'wuhun21',
				group: ['new_wuhun_mark', 'new_wuhun_die', 'wuhun22', 'wuhun23'],
				trigger: {
					player: 'damageEnd'
				},
				forced: true,
				filter: function (event, player) {
					return event.source != undefined;
				},
				content: function () {
					trigger.source.addMark('new_wuhun_mark', trigger.num);
				},
				ai: {
					maixie_defend: true,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
							if (target.hp <= 1 && get.attitude(player, target) <= 0 && (get.tag(card, 'damage') || get.damageEffect(target, player, player) > 0) && target.hasFriend()) return [1, 0, 0, -9];
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						}
					}
				},
				subSkill: {
					die: {
						skillAnimation: true,
						animationColor: 'soil',
						trigger: {
							player: 'die'
						},
						forced: true,
						forceDie: true,
						direct: true,
						filter: function (event, player) {
							return game.hasPlayer(function (current) {
								return current != player && current.hasMark('new_wuhun_mark');
							});
						},
						content: function () {
							'step 0'
							var num = 0;
							for (var i = 0; i < game.players.length; i++) {
								var current = game.players[i];
								if (current != player && current.countMark('new_wuhun_mark') > num) {
									num = current.countMark('new_wuhun_mark');
								}
							}
							player
								.chooseTarget(true, '请选择【武魂】的目标', function (card, player, target) {
									return target != player && target.countMark('new_wuhun_mark') == _status.event.num;
								})
								.set('ai', function (target) {
									return -get.attitude(_status.event.player, target);
								})
								.set('forceDie', true)
								.set('num', num);
							'step 1'
							if (result.bool && result.targets && result.targets.length) {
								var target = result.targets[0];
								event.target = target;
								player.logSkill(Math.random() < 0.5 ? 'wuhun22' : 'wuhun23', target);
								player.line(target, {color: [255, 255, 0]});
								game.delay(2);
							}
							'step 2'
							target.judge(function (card) {
								if (['tao', 'taoyuan'].contains(card.name)) return 10;
								return -10;
							}).judge2 = function (result) {
								return result.bool == false ? true : false;
							};
							'step 3'
							if (!result.bool) {
								lib.element.player.die.apply(target, []);
							}
						},
						sub: true
					},
					mark: {
						marktext: '魇',
						intro: {
							name: '梦魇',
							content: 'mark'
						},
						sub: true
					}
				},
				ai: {
					threaten: 0.01,
					notemp: true
				}
			};
			/*活墨*/
			lib.skill.huomo = {
				audio: 2,
				audioname: ['huzhao'],
				enable: 'chooseToUse',
				onChooseToUse: function (event) {
					if (game.online || event.huomo_list) return;
					var list = lib.skill.huomo.getUsed(event.player);
					event.set('huomo_list', list);
				},
				getUsed: function (player) {
					var list = [];
					player.getHistory('useCard', function (evt) {
						if (get.type(evt.card, null, false) == 'basic') list.add(evt.card.name);
					});
					return list;
				},
				hiddenCard: function (player, name) {
					if (get.type(name) != 'basic') return false;
					var list = lib.skill.huomo.getUsed(player);
					if (list.contains(name)) return false;
					return player.hasCard(function (card) {
						return get.color(card) == 'black' && get.type(card) != 'basic';
					}, 'eh');
				},
				filter: function (event, player) {
					if (
						event.type == 'wuxie' ||
						!player.hasCard(function (card) {
							return get.color(card) == 'black' && get.type(card) != 'basic';
						}, 'eh')
					)
						return false;
					var list = event.huomo_list || lib.skill.huomo.getUsed(player);
					for (var name of lib.inpile) {
						if (get.type(name) != 'basic' || list.contains(name)) continue;
						var card = {name: name, isCard: true};
						if (event.filterCard(card, player, event)) return true;
						if (name == 'sha') {
							for (var nature of lib.inpile_nature) {
								card.nature = nature;
								if (event.filterCard(card, player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var vcards = [];
						var list = event.huomo_list || lib.skill.huomo.getUsed(player);
						for (var name of lib.inpile) {
							if (get.type(name) != 'basic' || list.contains(name)) continue;
							var card = {name: name, isCard: true};
							if (event.filterCard(card, player, event)) vcards.push(['基本', '', name]);
							if (name == 'sha') {
								for (var nature of lib.inpile_nature) {
									card.nature = nature;
									if (event.filterCard(card, player, event)) vcards.push(['基本', '', name, nature]);
								}
							}
						}
						return ui.create.dialog('活墨', [vcards, 'vcard'], 'hidden');
					},
					check: function (button) {
						var player = _status.event.player;
						var card = {name: button.link[2], nature: button.link[3]};
						if (
							_status.event.getParent().type != 'phase' ||
							game.hasPlayer(function (current) {
								return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
							})
						) {
							switch (button.link[2]) {
								case 'tao':
								case 'shan':
									return 5;
								case 'jiu': {
									if (player.countCards('he', {color: 'black'}) > 0) return 3;
								}
								case 'sha':
									if (button.link[3] == 'fire') return 2.95;
									else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
					backup: function (links, player) {
						return {
							check: function (card, player, target) {
								if (!ui.selected.cards.length && get.color(card) == 'black') return 10;
								else return 8 - get.value(card);
							},
							filterCard: function (card) {
								return get.type(card) != 'basic' && get.color(card) == 'black';
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: 'none',
								number: null,
								isCard: true
							},
							position: 'he',
							popname: true,
							ignoreMod: true,
							precontent: function () {
								'step 0'
								player.logSkill('huomo');
								var card = event.result.cards[0];
								event.card = card;
								player.$throw(card, 1000);
								game.log(player, '将', card, '置于牌堆顶');
								event.result.card = {name: event.result.card.name, nature: event.result.card.nature};
								event.result.cards = [];
								player.lose(card, ui.cardPile, 'visible', 'insert');
								'step 1'
								game.delay();
							}
						};
					},
					prompt: function (links, player) {
						return '将一张黑色非基本牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
					}
				},
				ai: {
					order: function () {
						var player = _status.event.player;
						var event = _status.event;
						if (event.filterCard({name: 'jiu'}, player, event) && get.effect(player, {name: 'jiu'}) > 0 && player.countCards('he', {color: 'black'})) {
							return 3.3;
						}
						return 3.1;
					},
					skillTagFilter: function (player, tag, arg) {
						if (tag == 'fireAttack') return true;
						if (player.countCards('he', {color: 'black'})) return false;
						if (
							!player.hasCard(function (card) {
								return get.color(card) == 'black';
							}, 'hes')
						) {
							return false;
						}
					},
					result: {
						player: 1
					},
					respondSha: true,
					respondShan: true,
					fireAttack: true
				}
			};
			/*诏颂*/
			lib.skill.zhaosong = {
				trigger: {
					global: 'phaseDrawAfter'
				},
				logTarget: 'player',
				check: function (event, player) {
					return get.attitude(player, event.player) > 0 || (get.attitude(player, event.player) <= 0 && event.player.countCards('h') <= 2);
				},
				filter: function (event, player) {
					if (player == event.player || !event.player.countCards('h')) return false;
					var types = ['basic', 'trick', 'equip'];
					for (var i of types) {
						if (event.player.hasMark('zhaosong_' + i)) return false;
					}
					return true;
				},
				prompt2: '令其交给你一张手牌，并根据类型获得对应的标记',
				content: function () {
					'step 0'
					event.target = trigger.player;
					event.target.chooseCard('h', true, get.translation(player) + '发动了【诏颂】；请交给其一张手牌');
					'step 1'
					if (result.bool) {
						var card = result.cards[0];
						player.gain(card, target, 'give');
						var type = get.type2(card, target);
						if (lib.skill['zhaosong_' + type]) {
							target.addSkill('zhaosong_' + type);
							target.addMark('zhaosong_' + type);
						}
					}
				},
				subSkill: {
					basic: {
						marktext: '颂',
						intro: {
							name: '诏颂(颂)',
							name2: '颂',
							content: '当你使用【杀】选择唯一目标时，你可移去“颂”，并为此【杀】增加至多两个目标。'
						},
						trigger: {
							player: 'useCard2'
						},
						direct: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return (
								player.hasMark('zhaosong_basic') &&
								event.card.name == 'sha' &&
								event.targets.length == 1 &&
								game.hasPlayer(function (current) {
									return current != player && current != event.targets[0] && lib.filter.targetEnabled2(event.card, player, current);
								})
							);
						},
						content: function () {
							'step 0'
							player
								.chooseTarget([1, 2], '是否弃置“颂”标记？', '为' + get.translation(trigger.card) + '增加至多两个目标', function (card, player, target) {
									var evt = _status.event.getTrigger();
									return target != player && target != evt.targets[0] && lib.filter.targetEnabled2(evt.card, player, target);
								})
								.set('ai', function (target) {
									var evt = _status.event.getTrigger();
									return get.effect(target, evt.card, evt.player, evt.player);
								});
							'step 1'
							if (result.bool) {
								if (player != event.player && !player.isOnline()) game.delayx();
								//player.addTempSkill('zhaosong_shaloss');
							} else event.finish();
							'step 2'
							var targets = result.targets;
							player.logSkill('zhaosong_basic', targets);
							player.removeMark('zhaosong_basic', 1);
							player.removeSkill('zhaosong_basic');
							trigger.targets.addArray(targets);
							trigger.zhaosong_basic = true;
						},
						sub: true
					},
					trick: {
						marktext: '诔',
						intro: {
							name: '诏颂(诔)',
							name2: '诔',
							content: '当你进入濒死状态时，你可移去“诔”，然后将体力回复至1点并摸一张牌。'
						},
						trigger: {
							player: 'dying'
						},
						prompt: '是否弃置“诔”标记？',
						prompt2: '回复体力至1点并摸一张牌。',
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return player.hasMark('zhaosong_trick') && player.hp < 1;
						},
						check: function (event, player) {
							if (
								player.maxHp < 2 ||
								player.countCards('h', function (card) {
									var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
									if (mod2 != 'unchanged') return mod2;
									var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
									if (mod != 'unchanged') return mod;
									var savable = get.info(card).savable;
									if (typeof savable == 'function') savable = savable(card, player, event.player);
									return savable;
								}) >=
									1 + event.num - event.player.hp
							)
								return false;
							return true;
						},
						content: function () {
							player.removeMark('zhaosong_trick', 1);
							player.removeSkill('zhaosong_trick');
							//player.loseMaxHp();
							if (player.hp < 1) player.recover(1 - player.hp);
							player.draw();
						},
						sub: true
					},
					equip: {
						marktext: '赋',
						intro: {
							name: '诏颂(赋)',
							name2: '赋',
							content: '出牌阶段开始时，你可移去“赋”并弃置一名角色区域内的至多两张牌。'
						},
						trigger: {
							player: 'phaseUseBegin'
						},
						direct: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return (
								player.hasMark('zhaosong_equip') &&
								game.hasPlayer(function (current) {
									return current.hasCard(function (card) {
										return lib.filter.canBeDiscarded(card, player, current);
									}, 'hej');
								})
							);
						},
						content: function () {
							'step 0'
							player
								.chooseTarget('是否弃置“赋”标记？', '弃置一名角色区域内的至多两张牌', function (card, player, current) {
									return current.hasCard(function (card) {
										return lib.filter.canBeDiscarded(card, player, current);
									}, 'hej');
								})
								.set('ai', function (target) {
									var player = _status.event.player,
										att = get.attitude(player, target) > 0 ? 2 : 1;
									return get.effect(target, {name: 'guohe_copy'}, player, player) * att;
								});
							'step 1'
							if (result.bool) {
								var target = result.targets[0];
								event.target = target;
								player.logSkill('zhaosong_equip', target);
								player.removeMark('zhaosong_equip', 1);
								player.removeSkill('zhaosong_equip');
								player.discardPlayerCard(target, true, 'hej', [1, 2]);
							}
						},
						sub: true
					}
				}
			};
			/*新父荫*/
			lib.skill.xinfu_fuyin = {
				trigger: {
					target: 'useCardToTargeted'
				},
				forced: true,
				audio: 2,
				filter: function (event, player) {
					if (event.player.countCards('h') < player.countCards('h')) return false;
					if (event.card.name != 'sha' && event.card.name != 'juedou') return false;
					return !game.hasPlayer2(function (current) {
						return (
							current.getHistory('useCard', function (evt) {
								return evt != event.getParent() && evt.card && ['sha', 'juedou'].contains(evt.card.name) && evt.targets.contains(player);
							}).length > 0
						);
					});
				},
				content: function () {
					trigger.getParent().excluded.add(player);
					player.addTempSkill('xinfu_fuyin_off');
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if ((card.name == 'sha' || card.name == 'juedou') && target.countCards('h') < player.countCards('h') && !target.hasSkill('xinfu_fuyin_off')) {
								return 'zeroplayertarget';
								if (card.name == 'sha' && player.getCardUsable('sha') <= 1 && player.countCards('hs', {name: 'sha'}) < 2) {
									return 'zeroplayertarget';
								}
								if (player.getCardUsable('sha') >= 1 && player.countCards('hs', {name: 'sha'}) > 0 && player.countCards('hs', {name: 'juedou'}) > 0) {
									if (card.name == 'sha' || card.name == 'juedou') {
										if (!target.hasFriend()) return [1, -1];
									}
								}
							}
						}
					}
				}
			};
			lib.skill.xinfu_fuyin_off = {
				charlotte: true,
				superCharlotte: true
			};
			/*放权*/
			lib.skill.fangquan = {
				audio: 2,
				trigger: {
					player: 'phaseUseBefore'
				},
				filter: function (event, player) {
					return player.countCards('h') > 0 && !player.hasSkill('fangquan3');
				},
				direct: true,
				preHidden: true,
				content: function () {
					'step 0'
					var fang = player.countMark('fangquan2') == 0 && player.hp >= 2 && player.countCards('h') <= player.hp + 2;
					player.chooseBool(get.prompt2('fangquan')).set('ai', function () {
						if (!_status.event.fang) return false;
						return game.hasPlayer(function (target) {
							if (target.hasJudge('lebu') || target.classList.contains('turnedover') || target == player) return false;
							if (get.attitude(player, target) > 4) return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
							return false;
						});
					}).set('fang', fang).setHiddenSkill(event.name);
					'step 1'
					if (result.bool) {
						player.logSkill('fangquan');
						trigger.cancel();
						player.addTempSkill('fangquan2');
						player.addMark('fangquan2', 1, false);
						//player.storage.fangquan=result.targets[0];
					}
				}
			};
			lib.skill.olfangquan = {
				audio: 2,
				audioname: ['shen_caopi'],
				trigger: {
					player: 'phaseUseBefore'
				},
				filter: function (event, player) {
					return player.countCards('h') > 0 && !player.hasSkill('olfangquan3');
				},
				direct: true,
				content: function () {
					'step 0'
					var fang = player.countMark('olfangquan2') == 0 && player.hp >= 2 && player.countCards('h') <= player.hp + 2;
					player.chooseBool(get.prompt2('olfangquan')).set('ai', function () {
						if (!_status.event.fang) return false;
						return game.hasPlayer(function (target) {
							if (target.hasJudge('lebu') || target.classList.contains('turnedover') || target == player) return false;
							if (get.attitude(player, target) > 4) return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
							return false;
						});
					}).set('fang', fang);
					'step 1'
					if (result.bool) {
						player.logSkill('olfangquan');
						trigger.cancel();
						player.addTempSkill('olfangquan2');
						player.addMark('olfangquan2', 1, false);
					}
				}
			};
			lib.skill.refangquan = {
				audio: 2,
				trigger: {
					player: 'phaseUseBefore'
				},
				filter: function (event, player) {
					return player.countCards('h') > 0 && !player.hasSkill('fangquan3');
				},
				direct: true,
				content: function () {
					'step 0'
					var fang = player.countMark('fangquan2') == 0 && player.hp >= 2 && player.countCards('h') <= player.hp + 2;
					player.chooseBool(get.prompt2('refangquan')).set('ai', function () {
						if (!_status.event.fang) return false;
						return game.hasPlayer(function (target) {
							if (target.hasJudge('lebu') || target.classList.contains('turnedover') || target == player) return false;
							if (get.attitude(player, target) > 4) return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
							return false;
						});
					}).set('fang', fang);
					'step 1'
					if (result.bool) {
						player.logSkill('refangquan');
						trigger.cancel();
						player.addTempSkill('fangquan2', 'phaseAfter');
						player.addMark('fangquan2', 1, false);
						player.addTempSkill('refangquan2');
						//player.storage.fangquan=result.targets[0];
					}
				}
			};
			lib.skill.fangquan2 = {
				trigger: {
					player: 'phaseEnd'
				},
				forced: true,
				popup: false,
				audio: false,
				onremove: true,
				content: function () {
					'step 0'
					event.count = player.countMark(event.name);
					player.removeMark(event.name, event.count);
					'step 1'
					event.count--;
					player.chooseToDiscard('是否弃置一张牌并令一名其他角色进行一个额外回合？').set('logSkill', player.name == 're_liushan' ? 'refangquan' : 'fangquan').ai = function (card) {
						return 20 - get.value(card);
					};
					'step 2'
					if (result.bool) {
						player.chooseTarget(true, '请选择进行额外回合的目标角色', lib.filter.notMe).ai = function (target) {
							if (target.hasJudge('lebu') || target.classList.contains('turnedover')) return -1;
							if (get.attitude(player, target) > 0) {
								return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1);
								if (target.isUnderControl(true)) {
									return 2 * (get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0);
								}
							}
							return -1;
						};
					} else event.finish();
					'step 3'
					var target = result.targets[0];
					player.line(target, 'fire');
					target.markSkillCharacter('fangquan', player, '放权', '进行一个额外回合');
					target.insertPhase();
					target.addSkill('fangquan3');
					if (event.count > 0) event.goto(1);
				}
			};
			lib.skill.olfangquan2 = {
				trigger: {
					player: 'phaseDiscardBegin'
				},
				forced: true,
				popup: false,
				audio: false,
				onremove: true,
				content: function () {
					'step 0'
					event.count = player.countMark(event.name);
					player.removeMark(event.name, event.count, false);
					'step 1'
					event.count--;
					player.chooseToDiscard('是否弃置一张牌并令一名其他角色进行一个额外回合？').set('logSkill', 'olfangquan').ai = function (card) {
						return 20 - get.value(card);
					};
					'step 2'
					if (result.bool) {
						player.chooseTarget(true, '请选择进行额外回合的目标角色', lib.filter.notMe).ai = function (target) {
							if (target.hasJudge('lebu') || target.classList.contains('turnedover')) return -1;
							if (get.attitude(player, target) > 0) {
								return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1);
								if (target.isUnderControl(true)) {
									return 2 * (get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0);
								}
							}
							return -1;
						};
					} else event.finish();
					'step 3'
					var target = result.targets[0];
					player.line(target, 'fire');
					target.markSkillCharacter('olfangquan', player, '放权', '进行一个额外回合');
					target.insertPhase();
					target.addSkill('olfangquan3');
					if (event.count > 0) event.goto(1);
				}
			};
			/*镇庭*/
			lib.skill.spzhenting = {
				audio: 2,
				trigger: {
					global: 'useCardToTarget'
				},
				usable: 1,
				filter: function (event, player) {
					return (event.card.name == 'sha' || get.type(event.card, false) == 'delay') && event.player != player && !event.targets.contains(player) && player.inRange(event.target);
				},
				logTarget: 'target',
				check: function (event, player) {
					var target = event.target,
						source = event.player;
					if (get.attitude(player, event.target) <= 0 || (event.card.name == 'sha' && player.hp == 1 && player.countCards('h', 'shan') == 0)) return false;
					var eff2 = get.effect(player, event.card, source, player);
					if (eff2 >= 0) return true;
					var eff1 = get.effect(target, event.card, source, player);
					if (eff1 >= 0) return false;
					if (eff1)
						if (event.card.name == 'sha') {
							if (player.hasShan()) return true;
							if (eff1 > eff2) return false;
							if (player.hp > 2) return true;
							if (player.hp == 2) return eff2 > eff1 / 3;
							if (player.hp == 1) return eff2 > eff1 / 5;
							return false;
						}
					if (event.card.name == 'shandian' || event.card.name == 'bingliang') return true;
					if (event.card.name == 'lebu') return !player.needsToDiscard() && target.needsToDiscard();
					return false;
				},
				content: function () {
					'step 0'
					var target = trigger.target,
						evt = trigger.getParent();
					evt.triggeredTargets2.remove(target);
					evt.targets.remove(target);
					evt.triggeredTargets2.add(player);
					evt.targets.add(player);
					game.log(trigger.card, '的目标被改为了', player);
					trigger.untrigger();
					'step 1'
					if (!trigger.player.countDiscardableCards(player, 'h')) event._result = {index: 0};
					else player.chooseControl().set('choiceList', ['摸一张牌', '弃置' + get.translation(trigger.player) + '的一张手牌']);
					'step 2'
					if (result.index == 0) player.draw();
					else {
						player.line(trigger.player, 'fire');
						player.discardPlayerCard(trigger.player, true, 'h');
					}
				},
				ai: {
					threaten: 1.4
				}
			};
			/*败移*/
			lib.skill.baiyi = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				selectTarget: 2,
				limited: true,
				skillAnimation: true,
				filter: function (event, player) {
					return player.isDamaged() && game.players.length > 2;
				},
				multitarget: true,
				multiline: true,
				changeSeat: true,
				content: function () {
					player.awakenSkill('baiyi');
					game.broadcastAll(
						function (target1, target2) {
							game.swapSeat(target1, target2);
						},
						targets[0],
						targets[1]
					);
				},
				ai: {
					order: function (item, player) {
						return get.order({name: 'tao'}) + 3;
					},
					result: {
						target: function (player, target) {
							if (player.hasUnknown() && target != player.next && target != player.previous) return 0;
							var distance = Math.pow(get.distance(player, target, 'absolute'), 2);
							if (!ui.selected.targets.length) return distance;
							var distance2 = Math.pow(get.distance(player, ui.selected.targets[0], 'absolute'), 2);
							return Math.min(0, distance - distance2);
						}
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*手杀-邀名*/
			lib.skill.sbyaoming = {
				audio: 2,
				chargeSkill: true,
				enable: 'phaseUse',
				filter: function (event, player) {
					return player.countMark('charge') > 0;
				},
				filterTarget: true,
				prompt: function () {
					var num = _status.event.player.storage.sbyaoming_status;
					var list = ['弃置一名手牌数不小于你的角色的一张牌', '；或令一名手牌数不大于你的角色摸一张牌'];
					if (typeof num == 'number') list[num] += '（上次选择）';
					return list[0] + list[1];
				},
				content: function () {
					'step 0'
					player.removeMark('charge', 1);
					var num = target.countCards('h'),
						num2 = player.countCards('h');
					if (num == num2 && target.countCards('he') > 0) {
						var choice = get.attitude(player, target) > 0 ? 1 : 0;
						var str = get.translation(target),
							choiceList = ['弃置' + str + '的一张牌', '令' + str + '摸一张牌'];
						if (typeof player.storage.sbyaoming_status == 'number') choiceList[player.storage.sbyaoming_status] += '（上次选择）';
						var next = player.chooseControl().set('choiceList', choiceList);
						next.set('ai_choice', choice);
						next.set('ai', () => _status.event.ai_choice);
					} else event._result = {index: num > num2 ? 0 : 1};
					'step 1'
					if (result.index == 0) {
						player.discardPlayerCard(target, true, 'he');
					} else target.draw();
					if (typeof player.storage.sbyaoming_status == 'number' && result.index != player.storage.sbyaoming_status) {
						player.addMark('charge', 1);
						delete player.storage.sbyaoming_status;
					} else {
						player.storage.sbyaoming_status = result.index;
					}
				},
				ai: {
					order: 6,
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target),
								eff = [0, 0];
							var hs = player.countCards('h'),
								ht = target.countCards('h');
							if (hs >= ht) {
								eff[0] = get.effect(target, {name: 'wuzhong'}, player, player) / 2;
								if (player.storage.sbyaoming_status == 0) eff[0] *= 1.2;
							}
							if (hs < ht) {
								eff[1] = get.effect(target, {name: 'guohe_copy2'}, player, player);
								if (player.storage.sbyaoming_status == 1) eff[1] *= 1.2;
							}
							return Math.max.apply(Math, eff);
						}
					}
				},
				group: ['sbyaoming_damage', 'sbyaoming_init'],
				subSkill: {
					damage: {
						trigger: {
							player: 'damageEnd'
						},
						direct: true,
						content: function () {
							'step 0'
							var num = Math.min(trigger.num, 4 - player.countMark('charge'));
							if (num > 0) {
								player.logSkill('sbyaoming_damage');
								player.addMark('charge', num);
								game.delayx();
							}
							'step 1'
							player.chooseTarget(get.prompt('sbyaoming'), lib.skill.sbyaoming.prompt()).set('ai', function (target) {
								var player = _status.event.player;
								return get.effect(target, 'sbyaoming', player, player);
							});
							'step 2'
							if (result.bool) {
								player.useSkill('sbyaoming', result.targets);
							}
						},
						sub: true
					},
					init: {
						trigger: {
							global: 'phaseBefore',
							player: 'enterGame'
						},
						forced: true,
						locked: false,
						filter: function (event, player) {
							return (event.name != 'phase' || game.phaseNumber == 0) && player.countMark('charge') < 4;
						},
						content: function () {
							player.addMark('charge', Math.min(2, 4 - player.countMark('charge')));
						},
						sub: true
					}
				}
			};
			/*放逐*/
			lib.skill.fangzhu = {
				audio: 2,
				trigger: {
					player: 'damageEnd'
				},
				direct: true,
				preHidden: true,
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt('fangzhu'), '令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌', function (card, player, target) {
						return player != target;
					}).setHiddenSkill('fangzhu').ai = function (target) {
						if (target.hasSkillTag('noturn')) return 0;
						let player = _status.event.player;
						if (get.attitude(_status.event.player, target) > 0 && target.classList.contains('turnedover')) return 10 * player.getDamagedHp();
						if (target.classList.contains('turnedover')) return -1;
						if (_status.currentPhase == target && player.getDamagedHp() < 2 && get.attitude(_status.event.player, _status.currentPhase) <= 0) return get.attitude(_status.event.player, target) <= 0;
						if (_status.currentPhase == target && player.getDamagedHp() >= 2 && get.attitude(_status.event.player, _status.currentPhase) > 0) return get.attitude(_status.event.player, target);
						if (_status.currentPhase != target) return 2 * -get.attitude(_status.event.player, target);
						return 0;
					};
					'step 1'
					if (result.bool) {
						player.logSkill('fangzhu', result.targets);
						result.targets[0].draw(player.getDamagedHp());
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
								if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
								if (target.hp > 1) return [1, 0.5];
							}
						}
					}
				}
			};
			lib.skill.refangzhu = {
				audio: 2,
				trigger: {
					player: 'damageEnd'
				},
				direct: true,
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('refangzhu'), function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						if (target.hasSkillTag('noturn')) return 0;
						var player = _status.event.player;
						if (get.attitude(_status.event.player, target) > 0 && target.classList.contains('turnedover')) return 10 * player.getDamagedHp();
						if (target.classList.contains('turnedover')) return -1;
						if (_status.currentPhase == target && player.getDamagedHp() < 3) return get.attitude(_status.event.player, target) <= 0;
						if (_status.currentPhase != target) return 2 * -get.attitude(_status.event.player, target);
						return 0;
					};
					'step 1'
					if (result.bool) {
						player.logSkill('refangzhu', result.targets);
						event.target = result.targets[0];
						if (player.isHealthy()) event._result = {bool: false};
						else
							event.target
								.chooseToDiscard('he', player.getDamagedHp())
								.set('ai', function (card) {
									var player = _status.event.player;
									if (player.isTurnedOver() || _status.event.getTrigger().player.getDamagedHp() > 2) return -1;
									return player.hp * player.hp - get.value(card);
								})
								.set('prompt', '弃置' + get.cnNumber(player.getDamagedHp()) + '张牌并失去一点体力；或选择不弃置，将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌。');
					} else event.finish();
					'step 2'
					if (result.bool) {
						event.target.loseHp();
					} else {
						if (player.isDamaged()) event.target.draw(player.getDamagedHp());
						event.target.turnOver();
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
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
								if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
								if (target.hp > 1) return [1, 0.5];
							}
						}
					}
				}
			};
			/*极略-放逐*/
			lib.skill.jilue_fangzhu = {
				audio: 1,
				trigger: {
					player: 'damageEnd'
				},
				direct: true,
				filter: function (event, player) {
					return player.hasMark('renjie');
				},
				content: function () {
					'step 0'
					player.chooseTarget('是否弃置一枚“忍”，并发动【放逐】？', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						if (target.hasSkillTag('noturn')) return 0;
						if (target.hasSkillTag('noturn')) return 0;
						var player = _status.event.player;
						if (get.attitude(_status.event.player, target) > 0 && target.classList.contains('turnedover')) return 10 * player.getDamagedHp();
						if (target.classList.contains('turnedover')) return -1;
						if (_status.currentPhase == target && player.getDamagedHp() < 2 && get.attitude(_status.event.player, _status.currentPhase) <= 0) return get.attitude(_status.event.player, target) <= 0;
						if (_status.currentPhase == target && player.getDamagedHp() >= 2 && get.attitude(_status.event.player, _status.currentPhase) > 0) return get.attitude(_status.event.player, target);
						if (_status.currentPhase != target) return 2 * -get.attitude(_status.event.player, target);
						return 0;
					};
					'step 1'
					if (result.bool) {
						player.removeMark('renjie', 1);
						player.logSkill('jilue_fangzhu', result.targets);
						result.targets[0].draw(player.maxHp - player.hp);
						result.targets[0].turnOver();
					}
				}
			};
			/*极略-完杀*/
			lib.skill.jilue_wansha = {
				audio: 'wansha',
				audioname: ['shen_simayi'],
				enable: 'phaseUse',
				usable: 1,
				filter: function (event, player) {
					return player.hasMark('renjie');
				},
				content: function () {
					player.removeMark('renjie', 1);
					player.addTempSkill('rewansha');
				},
				ai: {
					order: function (item, player) {
						return get.order({name: 'sha'}) + 1.5;
					},
					result: {
						player: function (player, target) {
							var cx = game.hasPlayer(function (current) {
								return current != player && current.hp == 1 && player.inRange(current) && get.attitude(player, current) < 0;
							});
							if (
								cx > 0 &&
								((player.countCards('hs', 'sha') > 0 && player.getCardUsable('sha') > 0) ||
									player.countCards('hs', function (card) {
										return get.name(card) != 'sha' && get.tag(card, 'damage');
									}) > 0)
							) {
								return 1;
							}
							return 0;
						}
					},
					effect: {
						player: function (card, player, target, current) {
							if (player.hasSkill('rewansha')) {
								if (get.tag(card, 'damage')) {
									if (get.attitude(player, target) < 0 && target.hp == 1) {
										return [1, 1.5];
									}
								}
							}
						}
					}
				}
			};
			/*决生*/
			lib.skill.juesheng = {
				audio: 2,
				enable: 'phaseUse',
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				viewAs: {
					name: 'juedou',
					isCard: true
				},
				filterCard: () => false,
				selectCard: -1,
				precontent: function () {
					player.awakenSkill('juesheng');
					player.addTempSkill('juesheng_counter');
				},
				ai: {
					result: {
						player: function (player, target) {
							if (game.roundNumber < 2) return 0;
						},
						target: function (player, target) {
							if (game.roundNumber < 2) return 0;
							var num = target.getAllHistory('useCard', function (evt) {
								return evt.card.name == 'sha';
							}).length;
							var hs1 = player.countCards('hs', 'sha');
							var hs2 = target.countCards('hs', 'sha');
							if (hs2 - hs1 == 0) {
								var hs3 = -1;
							} else var hs3 = hs2 - hs1;
							if (get.attitude(player, target) < 0) {
								if (num < target.hp) {
									return 0;
								} else {
									return num * hs3;
								}
							}
						}
					},
					wuxie: function (target, card, player, viewer) {
						if (player == game.me && get.attitude(viewer, player) > 0) {
							return 0;
						}
					},
					basic: {
						order: 5,
						useful: 1,
						value: 5.5
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1
					}
				},
				subSkill: {
					counter: {
						trigger: {
							global: 'damageBegin1'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							var evt = event.getParent();
							return evt.skill == 'juesheng' && evt.player == player;
						},
						content: function () {
							var target = trigger.getParent().target;
							trigger.num = target.getAllHistory('useCard', (evt) => evt.card.name == 'sha').length;
							target.addTempSkill('juesheng', {player: 'phaseAfter'});
						},
						sub: true
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*节应*/
			lib.skill.hfjieying2 = {
				mod: {
					cardEnabled: function (card, player) {
						if (player.storage.hfjieying2) return false;
					},
					cardSavable: function (card, player) {
						if (player.storage.hfjieying2) return false;
					},
					targetInRange: function (card, player) {
						if (player == _status.currentPhase && (card.name == 'sha' || get.type(card) == 'trick')) return true;
					},
					aiOrder: function (player, card, num) {
						var info = get.info(card);
						if (!get.tag(card, 'damage') && (!info || !info.toself)) return num + 20;
					}
				},
				onremove: true,
				trigger: {
					player: 'useCard2'
				},
				direct: true,
				filter: function (event, player) {
					if (player != _status.currentPhase) return false;
					var card = event.card;
					if (card.name != 'sha' && get.type(card) != 'trick') return false;
					var info = get.info(card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return !event.targets.contains(current) && lib.filter.targetEnabled2(card, player, current);
							})
						) {
							return true;
						}
					}
					return false;
				},
				content: function () {
					'step 0'
					var prompt2 = '为' + get.translation(trigger.card) + '增加一个目标';
					player.chooseTarget(get.prompt('hfjieying2'), function (card, player, target) {
						return !_status.event.targets.contains(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
					}).set('prompt2', prompt2).set('ai', function (target) {
						let trigger = _status.event.getTrigger(), player = _status.event.player;
						return get.effect(target, trigger.card, player, player);
					}).set('card', trigger.card).set('targets', trigger.targets);
					'step 1'
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.targets = result.targets;
					}
					else event.finish();
					'step 2'
					if (event.targets) {
						player.logSkill('hfjieying2', event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				group: 'hfjieying3',
				mark: true,
				intro: {
					content: function (player) {
						if (player) return '不能使用牌直到回合结束';
						return '使用【杀】或普通锦囊牌时无距离限制且可以多指定一个目标';
					}
				}
			};
			/*屯田*/
			lib.skill.tuntian = {
				audio: 2,
				audioname: ['gz_dengai'],
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
				},
				frequent: true,
				preHidden: true,
				filter: function (event, player) {
					if (player == _status.currentPhase) return false;
					if (event.name == 'gain' && event.player == player) return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length > 0;
				},
				content: function () {
					'step 0'
					var next = player.judge(function (card) {
						if (get.suit(card) == 'heart') return -1;
						return 1;
					});
					next.judge2 = function (result) {
						return result.bool;
					};
					if (get.mode() != 'guozhan') {
						next.callback = lib.skill.tuntian.callback;
						event.finish();
					}
					'step 1'
					if (!result.bool || get.position(result.card) != 'd') {
						//game.cardsDiscard(card);
						event.finish();
						return;
					}
					event.card = result.card;
					player.chooseBool('是否将' + get.translation(event.card) + '作为【田】置于武将牌上？').ai = function () {
						return true;
					};
					'step 2'
					if (!result.bool && !event.directbool) {
						return;
					}
					player.addToExpansion(event.card, 'gain2').gaintag.add('tuntian');
				},
				callback: function () {
					if (!event.judgeResult.bool) {
						event.finish();
						return;
					}
					player.addToExpansion(event.judgeResult.card, 'gain2').gaintag.add('tuntian');
				},
				marktext: '田',
				intro: {
					content: 'expansion',
					markcount: 'expansion'
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: 'tuntian_dist',
				locked: false,
				subSkill: {
					dist: {
						locked: false,
						mod: {
							globalFrom: function (from, to, distance) {
								var num = distance - from.getExpansions('tuntian').length;
								if (_status.event.skill == 'jixi_backup' || _status.event.skill == 'gzjixi_backup') num++;
								return num;
							}
						},
						sub: true
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.name(card) == 'sha' && get.attitude(player, target) > 0 && target.countCards('hs', {name: 'shan'}) <= 0) {
								return 0;
							}
							if (get.name(card) == 'juedou' && get.attitude(player, target) > 0) {
								return 0;
							}
							if (!target.hasFriend() && !player.hasUnknown()) return;
							if (_status.currentPhase == target) return;
							if (card.name != 'shuiyanqijunx' && get.tag(card, 'loseCard') && target.countCards('he')) {
								if (target.hasSkill('ziliang')) return 0.7;
								return [0.5, Math.max(2, target.countCards('h'))];
							}
							if (target.isUnderControl(true, player)) {
								if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
									if (target.hasSkill('ziliang')) return 0.7;
									return [0.5, 1];
								}
							} else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
								if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
								if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
								if (target.countCards('h') == 0) return 2;
								if (target.hasSkill('ziliang')) return 0.7;
								if (get.mode() == 'guozhan') return 0.5;
								return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
							}
						}
					},
					threaten: function (player, target) {
						if (target.countCards('h') == 0) return 2;
						return 0.5;
					},
					nodiscard: true,
					nolose: true
				}
			};
			lib.skill.oltuntian = {
				inherit: 'tuntian',
				filter: function (event, player) {
					if (player == _status.currentPhase) {
						if (event.type != 'discard') return false;
						var evt = event.getl(player);
						return (
							evt &&
							evt.cards2 &&
							evt.cards2.filter(function (i) {
								return get.name(i, evt.hs.contains(i) ? player : false) == 'sha';
							}).length > 0
						);
					}
					if (event.name == 'gain' && event.player == player) return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length > 0;
				},
				audio: 2,
				audioname: ['gz_dengai'],
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
				},
				frequent: true,
				preHidden: true,
				content: function () {
					'step 0'
					var next = player.judge(function (card) {
						if (get.suit(card) == 'heart') return -1;
						return 1;
					});
					next.judge2 = function (result) {
						return result.bool;
					};
					if (get.mode() != 'guozhan') {
						next.callback = lib.skill.tuntian.callback;
						event.finish();
					}
					'step 1'
					if (!result.bool || get.position(result.card) != 'd') {
						//game.cardsDiscard(card);
						event.finish();
						return;
					}
					event.card = result.card;
					player.chooseBool('是否将' + get.translation(event.card) + '作为【田】置于武将牌上？').ai = function () {
						return true;
					};
					'step 2'
					if (!result.bool && !event.directbool) {
						return;
					}
					player.addToExpansion(event.card, 'gain2').gaintag.add('tuntian');
				},
				callback: function () {
					if (!event.judgeResult.bool) {
						event.finish();
						return;
					}
					player.addToExpansion(event.judgeResult.card, 'gain2').gaintag.add('tuntian');
				},
				marktext: '田',
				intro: {
					content: 'expansion',
					markcount: 'expansion'
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: 'tuntian_dist',
				locked: false,
				subSkill: {
					dist: {
						locked: false,
						mod: {
							globalFrom: function (from, to, distance) {
								var num = distance - from.getExpansions('tuntian').length;
								if (_status.event.skill == 'jixi_backup' || _status.event.skill == 'gzjixi_backup') num++;
								return num;
							}
						},
						sub: true
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.name(card) == 'sha' && get.attitude(player, target) > 0 && target.countCards('hs', {name: 'shan'}) <= 0) {
								return 0;
							}
							if (get.name(card) == 'juedou' && get.attitude(player, target) > 0) {
								return 0;
							}
							if (!target.hasFriend() && !player.hasUnknown()) return;
							if (_status.currentPhase == target) return;
							if (card.name != 'shuiyanqijunx' && get.tag(card, 'loseCard') && target.countCards('he')) {
								if (target.hasSkill('ziliang')) return 0.7;
								return [0.5, Math.max(2, target.countCards('h'))];
							}
							if (target.isUnderControl(true, player)) {
								if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
									if (target.hasSkill('ziliang')) return 0.7;
									return [0.5, 1];
								}
							} else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
								if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
								if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
								if (target.countCards('h') == 0) return 2;
								if (target.hasSkill('ziliang')) return 0.7;
								if (get.mode() == 'guozhan') return 0.5;
								return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
							}
						}
					},
					threaten: function (player, target) {
						if (target.countCards('h') == 0) return 2;
						return 0.5;
					},
					nodiscard: true,
					nolose: true
				}
			};
			lib.skill.retuntian = {
				audio: 2,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
				},
				frequent: true,
				filter: function (event, player) {
					if (player == _status.currentPhase) return false;
					if (event.name == 'gain' && event.player == player) return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length > 0;
				},
				content: function () {
					player.judge(function (card) {
						return 1;
					}).callback = lib.skill.retuntian.callback;
				},
				callback: function () {
					'step 0'
					if (event.judgeResult.suit == 'heart') {
						player.gain(card, 'gain2');
						event.finish();
					} else if (get.mode() == 'guozhan') {
						player.chooseBool('是否将' + get.translation(card) + '作为【田】置于武将牌上？').set('frequentSkill', 'retuntian').ai = function () {
							return true;
						};
					} else event.directbool = true;
					'step 1'
					if (!result.bool && !event.directbool) {
						//game.cardsDiscard(card);
						return;
					}
					player.addToExpansion(card, 'gain2').gaintag.add('tuntian');
				},
				group: 'tuntian_dist',
				locked: false,
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.name(card) == 'sha' && get.attitude(player, target) > 0 && target.countCards('hs', {name: 'shan'}) <= 0) {
								return 0;
							}
							if (get.name(card) == 'juedou' && get.attitude(player, target) > 0) {
								return 0;
							}
							return lib.skill.tuntian.ai.effect.target.apply(this, arguments);
						}
					},
					threaten: function (player, target) {
						if (target.countCards('h') == 0) return 2;
						return 0.5;
					},
					nodiscard: true,
					nolose: true
				}
			};
			/*朝凤*/
			lib.skill.chaofeng = {
				audio: 2,
				trigger: {
					source: 'damageBegin1'
				},
				direct: true,
				filter: function (event, player) {
					return player.countCards('he') > 0 && player.isPhaseUsing() && !player.hasSkill('chaofeng2');
				},
				content: function () {
					'step 0'
					var str = '弃置一张牌并摸一张牌',
						color,
						type;
					if (trigger.card) {
						type = get.type2(trigger.card, false);
						color = get.color(trigger.card, false);
						if (color != 'none') str += '；若弃置' + get.translation(color) + '牌则改为摸两张牌';
						if (type) str += '；若弃置类型为' + get.translation(type) + '的牌则伤害+1';
					}
					var next = player.chooseToDiscard('he', get.prompt('chaofeng', trigger.player), str);
					next.set('ai', function (card) {
						var player = _status.event.player,
							suit = _status.event.color,
							number = _status.event.type;
						var val = 4 - get.value(card);
						if (get.color(card) == suit) val += 3;
						if (get.attitude(player, trigger.player) <= 0 && get.type2(card) == number) val += 4;
						if (get.attitude(player, trigger.player) > 0 && get.type2(card) == number) val = 0;
						return val;
					});
					next.logSkill = ['chaofeng', trigger.player];
					if (color != 'none') {
						event.color = color;
						next.set('color', color);
					}
					if (type) {
						event.type = type;
						next.set('type', type);
					}
					'step 1'
					if (result.bool) {
						player.addTempSkill('chaofeng2', 'phaseUseEnd');
						var card = result.cards[0];
						player.draw(event.color && get.color(card, card.original == 'h' ? player : false) == event.color ? 2 : 1);
						if (event.type && get.type2(card, card.original == 'h' ? player : false) == event.type) trigger.num++;
					}
				}
			};
			/*居功*/
			lib.skill.jugong = {
				audio: ['jingong', 2],
				trigger: {
					global: 'damageEnd'
				},
				usable: 1,
				frequent: true,
				locked: false,
				notemp: true,
				marktext: '功',
				init: function (player) {
					player.storage.jugong = [];
				},
				filter: function (event, player) {
					return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink() && _status.currentPhase != player;
				},
				content: function () {
					'step 0'
					player.draw();
					'step 1'
					if (player.countCards('h')) {
						player.chooseCard('将' + get.cnNumber(1) + '张手牌置于武将牌上作为“功”', 1, true);
					} else {
						event.finish();
					}
					'step 2'
					if (result.cards && result.cards.length) {
						player.lose(result.cards, ui.special);
						player.storage.jugong = player.storage.jugong.concat(result.cards);
						player.syncStorage('jugong');
						player.markSkill('jugong');
						game.log(player, '将', result.cards, '置于武将牌上作为“功”');
					}
				},
				intro: {
					content: 'cards'
				},
				group: 'jugong_1',
				subSkill: {
					1: {
						trigger: {
							player: 'damageBegin'
						},
						filter: function (event, player) {
							return player.storage.jugong.length > 1;
						},
						content: function () {
							'step 0'
							player.chooseCardButton('移去两张“功”', 2, player.storage.jugong, true);
							'step 1'
							if (event.directresult || result.bool) {
								player.logSkill('jugong');
								var links = event.directresult || result.links;
								for (var i = 0; i < links.length; i++) {
									player.storage.jugong.remove(links[i]);
								}
								player.syncStorage('jugong');
								if (!player.storage.jugong.length) {
									player.unmarkSkill('jugong');
								} else {
									player.markSkill('jugong');
								}
								player.$throw(links);
								game.log(player, '被移去了', links);
								for (var i = 0; i < links.length; i++) {
									ui.discardPile.appendChild(links[i]);
								}
							}
							'step 2'
							trigger.cancel();
						},
						sub: true
					}
				}
			};
			/*新胆守*/
			lib.skill.xindanshou = {
				audio: 2,
				trigger: {
					global: 'phaseJieshuBegin',
					target: 'useCardToTargeted'
				},
				direct: true,
				filter: function (event, player, name) {
					return ((name == 'phaseJieshuBegin' && event.player != player && player.countCards('he') >= event.player.countCards('h')) || (event.targets && event.targets.contains(player) && ['basic', 'trick'].contains(get.type(event.card, 'trick')))) && !player.hasSkill('xindanshou_as');
				},
				content: function () {
					'step 0'
					if (event.triggername == 'phaseJieshuBegin') {
						var num = trigger.player.countCards('h');
						if (num > 0)
							player
								.chooseToDiscard(get.prompt('xindanshou', trigger.player), num, '弃置' + get.cnNumber(num) + '张牌并对' + get.translation(trigger.player) + '造成1点伤害', 'he')
								.set('logSkill', ['xindanshou', trigger.player])
								.set('ai', function (card) {
									if (num > 3 && trigger.player.hp > 1) return false;
									if (get.damageEffect(_status.event.getTrigger().player, _status.event.player, _status.event.player) > 0) return Math.max(5.5, 8 - _status.event.selectTarget) - get.value(card);
									return -1;
								});
						else
							player.chooseBool(get.prompt('xindanshou', trigger.player), '对' + get.translation(trigger.player) + '造成1点伤害').ai = function () {
								return get.damageEffect(trigger.player, player, player) > 0;
							};
					} else {
						var num = 0;
						game.countPlayer2(function (current) {
							var history = current.getHistory('useCard');
							for (var j = 0; j < history.length; j++) {
								if (['basic', 'trick'].contains(get.type(history[j].card, 'trick')) && history[j].targets && history[j].targets.contains(player)) num++;
							}
						});
						event.num = num;
						player
							.chooseBool(get.prompt('xindanshou') + '（可摸' + get.cnNumber(num) + '张牌）', get.translation('xindanshou_info'))
							.set('ai', function () {
								return _status.event.choice;
							})
							.set(
								'choice',
								(function () {
									if (player.isPhaseUsing()) {
										if (
											player.countCards('h', function (card) {
												return ['basic', 'trick'].contains(get.type(card, 'trick')) && player.canUse(card, player, null, true) && get.effect(player, card, player) > 0 && player.getUseValue(card, null, true) > 0;
											})
										)
											return false;
										return true;
									}
									if (num > 2) return true;
									var card = trigger.card;
									if (get.tag(card, 'damage') && player.hp <= trigger.getParent().baseDamage && (!get.tag(card, 'respondShan') || !player.hasShan()) && (!get.tag(card, 'respondSha') || !player.hasSha())) return true;
									var source = _status.currentPhase,
										todis = source.countCards('h') - Math.max(0, source.needsToDiscard());
									if (
										todis <=
											Math.max(
												Math.min(
													2 + (source.hp <= 1 ? 1 : 0),
													player.countCards('he', function (card) {
														return get.value(card, player) < Math.max(5.5, 8 - todis);
													})
												),
												player.countCards('he', function (card) {
													return get.value(card, player) <= 0;
												})
											) &&
										get.damageEffect(source, player, player) > 0
									)
										return false;
									if (!source.isPhaseUsing() || get.attitude(player, source) > 0) return true;
									if (card.name == 'sha' && !source.getCardUsable('sha')) return true;
									return Math.random() < num / 3;
								})()
							);
					}
					'step 1'
					if (result.bool) {
						if (!result.cards || !result.cards.length) {
							player.logSkill('xindanshou', trigger.player);
						}
						if (event.triggername == 'useCardToTargeted') {
							player.draw(num);
							player.addTempSkill('xindanshou_as');
						} else {
							trigger.player.damage('nocard');
						}
					}
				},
				subSkill: {
					as: {
						sub: true
					}
				},
				ai: {
					threaten: 0.6,
					effect: {
						target: function (card, player, target, current) {
							if (get.attitude(player, target) <= 0) {
								if (typeof card != 'object' || target.hasSkill('xindanshou_as') || !['basic', 'trick'].contains(get.type(card, 'trick'))) return;
								var num = 0;
								game.countPlayer2(function (current) {
									var history = current.getHistory('useCard');
									for (var j = 0; j < history.length; j++) {
										if (['basic', 'trick'].contains(get.type(history[j].card, 'trick')) && history[j].targets && history[j].targets.contains(player)) num++;
									}
								});
								if (player == target && current > 0) return [1.1, num];
								return [0.9, num];
							}
						}
					}
				}
			};
			/*拥嫡*/
			lib.skill.yongdi = {
				audio: 2,
				audioname: ['xinping'],
				unique: true,
				limited: true,
				trigger: {
					player: 'phaseZhunbeiBegin'
				},
				animationColor: 'thunder',
				skillAnimation: 'legend',
				filter: function (event, player) {
					return !player.storage.yongdi;
				},
				init: function (player) {
					player.storage.yongdi = false;
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				direct: true,
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('yongdi'), function (card, player, target) {
						return (target.hasSex('male') || target.name == 'key_yuri') && target != player;
					}).set('ai', function (target) {
						if (!_status.event.goon) return 0;
						let player = _status.event.player;
						let att = get.attitude(player, target);
						if (att <= 0) return 0;
						let mode = get.mode();
						if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
							if (target.name && lib.character[target.name]) for (var i = 0; i < lib.character[target.name][3].length; i++) {
								if (lib.skill[lib.character[target.name][3][i]].zhuSkill) return att * 2;
							}
						}
						return get.attitude(player, target);
					}).set('goon', !player.hasUnknown());
					'step 1'
					if (result.bool) {
						player.awakenSkill('yongdi');
						player.storage.yongdi = true;
						player.logSkill('yongdi', result.targets);
						var target = result.targets[0];
						target.gainMaxHp(true);
						target.recover();
						var mode = get.mode();
						if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
							if (target.name && lib.character[target.name]) {
								var skills = lib.character[target.name][3];
								target.storage.zhuSkill_yongdi = [];
								for (var i = 0; i < skills.length; i++) {
									var info = lib.skill[skills[i]];
									if (info.zhuSkill) {
										target.storage.zhuSkill_yongdi.push(skills[i]);
										if (info.init) {
											info.init(target);
										}
										if (info.init2) {
											info.init2(target);
										}
									}
								}
							}
						}
					}
				},
				ai: {
					expose: 0.2
				}
			};
			lib.skill.dcyongdi = {
				audio: 'yongdi',
				audioname: ['xinping'],
				unique: true,
				limited: true,
				enable: 'phaseUse',
				filterTarget: function (card, player, target) {
					return target.hasSex('male');
				},
				animationColor: 'thunder',
				skillAnimation: 'legend',
				mark: true,
				intro: {
					content: 'limited'
				},
				direct: true,
				content: function () {
					'step 0'
					player.awakenSkill('dcyongdi');
					player.logSkill('dcyongdi', target);
					if (!game.hasPlayer((current) => current.maxHp < target.maxHp)) {
						target.gainMaxHp();
					}
					'step 1'
					if (target.isMinHp()) {
						target.recover();
					}
					'step 2'
					if (target.isMinHandcard()) {
						target.draw(Math.min(5, target.maxHp));
					}
					'step 3'
					game.delayx();
				},
				ai: {
					expose: 0.3,
					order: 1,
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) > 0) {
								var val = 0;
								var bool1 = !game.hasPlayer((current) => current.maxHp < target.maxHp),
									bool2 = target.isMinHp(),
									bool3 = target.isMinHandcard();
								if (bool1) val += 5;
								if (bool2) {
									if (bool1) target.maxHp++;
									val += get.recoverEffect(target, player, player);
									if (bool1) target.maxHp--;
								}
								if (bool3) {
									var num = Math.min(5, target.maxHp + (bool1 ? 1 : 0));
									val += 5 * num;
								}
								return val;
							}
						}
					}
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*SP善檄*/
			lib.skill.spshanxi = {
				audio: 2,
				trigger: {
					player: 'phaseUseBegin'
				},
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.hasMark('spshanxi');
					});
				},
				content: function () {
					'step 0'
					var eff = 0;
					var target = game.findPlayer(function (current) {
						return current != player && !current.hasMark('spshanxi');
					});
					if (target) eff = -get.attitude(player, target) / Math.sqrt(Math.max(1, target.hp));
					player.chooseTarget(get.prompt('spshanxi'), '令一名其他角色获得“檄”', function (card, player, target) {
						return target != player && !target.hasMark('spshanxi');
					}).set('ai', function (target) {
						return -get.attitude(_status.event.player, target) / Math.sqrt(Math.max(1, target.hp)) - _status.event.eff;
					}).set('eff', eff);
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill('spshanxi', target);
						game.countPlayer(function (current) {
							if (current == target) {
								current.addMark('spshanxi', 1);
								current.addSkill('spshanxi_bj');
							} else {
								var num = current.countMark('spshanxi');
								if (num > 0) {
									current.removeMark('spshanxi', num);
									current.removeSkill('spshanxi_bj');
								}
							}
						});
					}
				},
				marktext: '檄',
				intro: {
					name2: '檄',
					content: '已被设下索命檄文'
				},
				group: 'spshanxi_suoming',
				ai: {
					threaten: 3.3
				}
			};
			lib.skill.spshanxi_bj = {
				charlotte: true,
				superCharlotte: true
			};
			/*TW孝廉*/
			lib.skill.twxiaolian = {
				audio: 2,
				trigger: {
					global: 'useCardToTarget'
				},
				logTarget: 'target',
				filter: function (event, player) {
					return event.card && event.card.name == 'sha' && event.player != player && event.targets.length == 1 && event.targets[0] != player;
				},
				check: function (event, player) {
					return player.hp > 1 && get.attitude(player, event.target) > 0;
				},
				content: function () {
					trigger.getParent().twxiaolian = trigger.targets[0];
					trigger.targets.length = 0;
					trigger.getParent().triggeredTargets2.length = 0;
					trigger.targets.push(player);
				},
				group: 'twxiaolian_damage',
				subSkill: {
					distance: {
						sub: true,
						charlotte: true,
						init: function (player, skill) {
							if (!player.storage[skill]) player.storage[skill] = [];
						},
						mark: true,
						marktext: '马',
						intro: {
							content: 'cards',
							onunmark: 'throw'
						},
						mod: {
							globalTo: function (from, to, distance) {
								if (from != to && to.storage.twxiaolian_distance) return distance + to.storage.twxiaolian_distance.length;
							}
						}
					},
					damage: {
						sub: true,
						trigger: {
							player: 'damageEnd'
						},
						direct: true,
						filter: function (event, player) {
							return event.getParent(2).twxiaolian != undefined;
						},
						content: function () {
							'step 0'
							var target = trigger.getParent(2).twxiaolian;
							event.target = target;
							player.chooseCard('是否将一张牌当做【马】置于' + get.translation(target) + '的武将牌旁？', 'he').ai = function (card) {
								if (get.attitude(_status.event.player, _status.event.getParent('twxiaolian_damage').target) > 2) return 7 - get.value(card);
								return 0;
							};
							'step 1'
							if (result.bool) {
								player.logSkill('twxiaolian', target);
								player.lose(result.cards, ui.special, 'toStorage');
								target.addSkill('twxiaolian_distance');
								target.storage.twxiaolian_distance.addArray(result.cards);
								target.markSkill('twxiaolian_distance');
							}
						}
					}
				}
			};
			/*TW伺怠*/
			lib.skill.twsidai = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				locked: false,
				limited: true,
				skillAnimation: true,
				animationColor: 'fire',
				filter: function (event, player) {
					var cards = player.getCards('h', {type: 'basic'});
					if (!cards.length) return false;
					for (var i of cards) {
						if (!game.checkMod(i, player, 'unchanged', 'cardEnabled2', player)) return false;
					}
					return event.filterCard(get.autoViewAs({name: 'sha', storage: {twsidai: true}}, cards), player, event);
				},
				viewAs: {
					name: 'sha',
					storage: {
						twsidai: true
					}
				},
				filterCard: {
					type: 'basic'
				},
				selectCard: -1,
				check: () => 1,
				onuse: function (result, player) {
					player.awakenSkill('twsidai');
					player.addTempSkill('twsidai_effect');
				},
				ai: {
					order: 2.9,
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) > 0) return 'zeroplayertarget';
							var cards = ui.selected.cards.slice(0);
							var names = [];
							for (var i of cards) names.add(i.name);
							if (names.length < player.hp) return 0;
							if (player.hasUnknown() && (player.identity != 'fan' || !target.isZhu)) return 0;
							if (get.attitude(player, target) >= 0) return -20;
							return lib.card.sha.ai.result.target.apply(this, arguments);
						}
					},
					yingbian: function (card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						var base = 0,
							hit = false;
						if (get.cardtag(card, 'yingbian_hit')) {
							hit = true;
							if (
								targets.filter(function (target) {
									return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
								})
							)
								base += 5;
						}
						if (get.cardtag(card, 'yingbian_all')) {
							if (
								game.hasPlayer(function (current) {
									return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
								})
							)
								base += 5;
						}
						if (get.cardtag(card, 'yingbian_damage')) {
							if (
								targets.filter(function (target) {
									return (
										get.attitude(player, target) < 0 &&
										(hit ||
											!target.mayHaveShan() ||
											player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: card
												},
												true
											)) &&
										!target.hasSkillTag('filterDamage', null, {
											player: player,
											card: card,
											jiu: true
										})
									);
								})
							)
								base += 5;
						}
						return base;
					},
					canLink: function (player, target, card) {
						if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
						if (
							target.mayHaveShan() &&
							!player.hasSkillTag(
								'directHit_ai',
								true,
								{
									target: target,
									card: card
								},
								true
							)
						)
							return false;
						if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
						return true;
					},
					basic: {
						useful: [5, 3, 1],
						value: [5, 3, 1]
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: function (card) {
							if (card.nature == 'poison') return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature) return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == 'fire') return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == 'thunder') return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == 'poison') return 1;
						}
					}
				},
				mod: {
					cardUsable: function (card) {
						if (card.storage && card.storage.twsidai) return Infinity;
					},
					targetInRange: function (card) {
						if (card.storage && card.storage.twsidai) return true;
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: {
							source: 'damageBegin1'
						},
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.twsidai || event.getParent().type != 'card') return false;
							for (var i of event.cards) {
								if (i.name == 'jiu') return true;
							}
							return false;
						},
						forced: true,
						popup: false,
						content: function () {
							trigger.num *= 2;
							game.log(trigger.card, '的伤害值', '#y×2');
						},
						group: ['twsidai_tao', 'twsidai_shan'],
						sub: true
					},
					tao: {
						trigger: {
							source: 'damageSource'
						},
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.twsidai || !event.player.isIn()) return false;
							for (var i of event.cards) {
								if (i.name == 'tao') return true;
							}
							return false;
						},
						forced: true,
						popup: false,
						content: function () {
							trigger.player.loseMaxHp();
						},
						sub: true
					},
					shan: {
						trigger: {
							player: 'useCardToPlayered'
						},
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.twsidai || !event.target.isIn()) return false;
							for (var i of event.cards) {
								if (i.name == 'shan') return true;
							}
							return false;
						},
						forced: true,
						popup: false,
						content: function () {
							'step 0'
							trigger.target.chooseToDiscard('h', {type: 'basic'}, '弃置一张基本牌，否则不能响应' + get.translation(trigger.card)).set('ai', function (card) {
								var player = _status.event.player;
								if (
									player.hasCard('hs', function (cardx) {
										return cardx != card && get.name(cardx, player) == 'shan';
									})
								)
									return 12 - get.value(card);
								return 0;
							});
							'step 1'
							if (!result.bool) trigger.directHit.add(trigger.target);
						},
						sub: true
					}
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*精械*/
			lib.skill.xinfu_jingxie1 = {
				position: 'he',
				audio: 'xinfu_jingxie',
				enable: ['phaseUse', 'chooseToUse'],
				filter: function (event, player) {
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return (
							player.countCards('he', function (card) {
								return get.subtype(card) == 'equip2';
							}) > 0
						);
					} else {
						var he = player.getCards('he');
						for (var i = 0; i < he.length; i++) {
							if (['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge'].contains(he[i].name)) return true;
						}
					}
					return false;
				},
				filterCard: function (card) {
					return _status.event.parent.name == 'phaseUse' ? ['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge'].contains(card.name) : get.subtype(card) == 'equip2';
				},
				discard: false,
				get lose() {
					return _status.event.parent && _status.event.parent.type == 'dying';
				},
				get loseTo() {
					if (_status.event.parent && _status.event.parent.type == 'dying') return 'discardPile';
				},
				get prepare() {
					if (_status.event.parent && _status.event.parent.type == 'dying')
						return function (cards, player) {
							player.$throw(cards, 1000);
							game.log(player, '将', cards, '置入了弃牌堆');
						};
				},
				delay: false,
				check: function () {
					return 1;
				},
				content: function () {
					'step 0'
					if (event.getParent(2).type == 'dying') player.draw();
					else player.showCards(cards);
					'step 1'
					if (event.getParent(2).type == 'dying') {
						var num = 1 - player.hp;
						if (num) player.recover(num);
						return;
					}
					var card = cards[0];
					var bool = get.position(card) == 'e';
					if (bool) player.removeEquipTrigger(card);
					game.addVideo('skill', player, ['xinfu_jingxie', [bool, get.cardInfo(card)]]);
					game.broadcastAll(function (card) {
						card.init([card.suit, card.number, 'rewrite_' + card.name]);
					}, card);
					if (bool) {
						var info = get.info(card);
						if (info.skills) {
							for (var i = 0; i < info.skills.length; i++) {
								player.addSkillTrigger(info.skills[i]);
							}
						}
					}
				},
				ai: {
					get order() {
						if (_status.event.type == 'dying') return 0.5;
					},
					basic: {
						order: 10
					},
					result: {
						player: function () {
							return _status.event.type == 'dying' ? 10 : 1;
						}
					},
					skillTagFilter: function (player, arg, target) {
						if (player != target) return false;
						return (
							player.countCards('he', function (card) {
								if (_status.connectMode && get.position(card) == 'h') return true;
								return get.subtype(card) == 'equip2';
							}) > 0
						);
					},
					save: true
				}
			};
			/*忠佐*/
			lib.skill.zhongzuo = {
				audio: 2,
				trigger: {
					global: 'phaseJieshuBegin'
				},
				direct: true,
				filter: function (event, player) {
					return player.getHistory('damage').length > 0 || player.getHistory('sourceDamage').length > 0;
				},
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt('zhongzuo'), '令一名角色摸两张牌。若其已受伤，则你摸一张牌。').set('ai', function (target) {
						if (target.hasSkillTag('nogain') && target != _status.currentPhase) return target.isDamaged() ? 0 : 1;
						if (target == player) return 2;
						if (get.attitude(_status.event.player, target) > 0) {
							if (target.isDamaged() && target == player) {
								return 3.5;
							}
							if (target.isDamaged()) {
								return 3;
							}
							return 2;
						}
						if (get.attitude(_status.event.player, target) <= 0) return 0;
						return 0;
					});
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill('zhongzuo', target);
						target.draw(2);
						if (target.isDamaged()) player.draw();
					}
				}
			};
			/*进谏*/
			lib.skill.jinjian = {
				audio: 2,
				trigger: {
					source: 'damageBegin1'
				},
				logTarget: 'player',
				filter: function (event, player) {
					return !event.jinjian_source2 && !player.hasSkill('jinjian_source2');
				},
				prompt2: '令即将对其造成的伤害+1',
				check: function (event, player) {
					return (
						get.attitude(player, event.player) < 0 &&
						!event.player.hasSkillTag('filterDamage', null, {
							player: player,
							card: event.card
						})
					);
				},
				content: function () {
					trigger.jinjian_source = true;
					trigger.num++;
					player.addTempSkill('jinjian_source2');
				},
				group: 'jinjian_player',
				subSkill: {
					player: {
						audio: 'jinjian',
						trigger: {
							player: 'damageBegin3'
						},
						filter: function (event, player) {
							return !event.jinjian_player2 && !player.hasSkill('jinjian_player2');
						},
						prompt2: '令即将受到的伤害-1',
						content: function () {
							trigger.jinjian_player = true;
							trigger.num--;
							player.addTempSkill('jinjian_player2');
						},
						sub: true
					},
					source2: {
						trigger: {
							source: 'damageBegin1'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.jinjian_source;
						},
						content: function () {
							trigger.num--;
							trigger.jinjian_source2 = true;
							player.removeSkill('jinjian_source2');
						},
						marktext: ' -1 ',
						intro: {
							content: '下次造成的伤害-1'
						},
						sub: true
					},
					player2: {
						trigger: {
							player: 'damageBegin3'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.jinjian_player;
						},
						content: function () {
							trigger.num++;
							trigger.jinjian_player2 = true;
							player.removeSkill('jinjian_player2');
						},
						marktext: ' +1 ',
						intro: {
							content: '下次受到的伤害+1'
						},
						sub: true
					}
				},
				ai: {
					maixie_defend: true,
					threaten: 0.9,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag('jueqing')) return;
							if (target.hujia) return;
							if (player._jinjian_tmp) return;
							if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
							if (get.tag(card, 'damage')) {
								if (target.hasSkill('jinjian_player2')) {
									return [1, -2];
								} else {
									if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
										var sha = player.getCardUsable({name: 'sha'});
										player._jinjian_tmp = true;
										var num = player.countCards('h', function (card) {
											if (card.name == 'sha') {
												if (sha == 0) {
													return false;
												} else {
													sha--;
												}
											}
											return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
										});
										delete player._jinjian_tmp;
										if (player.hasSkillTag('damage')) {
											num++;
										}
										if (num < 2) {
											return [0, 0.8];
										}
									}
								}
							}
						}
					}
				}
			};
			/*雷击*/
			lib.skill.xinleiji = {
				group: 'xinleiji_misa',
				audio: 2,
				derivation: 'xinleiji_faq',
				audioname: ['boss_qinglong'],
				trigger: {
					player: ['useCard', 'respond']
				},
				filter: function (event, player) {
					return event.card.name == 'shan' || (event.name == 'useCard' && event.card.name == 'shandian');
				},
				judgeCheck: function (card, bool) {
					var suit = get.suit(card);
					if (suit == 'spade') {
						if (bool && get.number(card) > 1 && get.number(card) < 10) return 5;
						return 4;
					}
					if (suit == 'club') return 2;
					return 0;
				},
				content: function () {
					player.judge(lib.skill.xinleiji.judgeCheck).judge2 = function (result) {
						return result.bool ? true : false;
					};
				},
				ai: {
					useShan: true,
					effect: {
						target: function (card, player, target, current) {
							if (
								get.tag(card, 'respondShan') &&
								!player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							) {
								var hastarget = game.hasPlayer(function (current) {
									return get.attitude(target, current) < 0;
								});
								var be = target.countCards('e', {color: 'black'});
								if (target.countCards('h', 'shan') && be) {
									if (!target.hasSkill('xinguidao')) return 0;
									return [0, hastarget ? target.countCards('he') / 2 : 0];
								}
								if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
									if (!target.hasSkill('xinguidao')) return 0;
									return [0, hastarget ? target.countCards('h') / 4 : 0];
								}
								if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
									return [0, 0];
								}
								if (target.countCards('h') == 0) {
									return [1.5, 0];
								}
								if (target.countCards('h') == 1 && !be) {
									return [1.2, 0];
								}
								if (!target.hasSkill('xinguidao')) return [1, 0.05];
								return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
							}
							if (get.name(card) == 'lebu' || get.name(card) == 'bingliang') {
								if (get.attitude(target, player) < 0 && (target.countCards('e', {color: 'black'}) > 0 || target.countCards('h') > 2)) {
									return [0, 0.5];
								}
							}
						}
					}
				}
			};
			/*战绝*/
			lib.skill.zhanjue = {
				audio: 2,
				enable: 'phaseUse',
				filterCard: true,
				selectCard: -1,
				position: 'h',
				filter: function (event, player) {
					if (player.getStat().skill.zhanjue_draw && player.getStat().skill.zhanjue_draw >= 2) return false;
					var hs = player.getCards('h');
					if (!hs.length) return false;
					for (var i = 0; i < hs.length; i++) {
						var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
						if (mod2 === false) return false;
					}
					return true;
				},
				viewAs: {
					name: 'juedou'
				},
				group: ['zhanjue4'],
				ai: {
					damage: true,
					order: function (item, player) {
						if (player.countCards('h', 'tao') > 0) {
							return get.order({name: 'tao'}) - 1;
						}
						return 0.5;
					},
					effect: {
						player: function (card, player, target) {
							if (_status.event.skill == 'zhanjue') {
								if (
									player.hasSkillTag(
										'directHit_ai',
										true,
										{
											target: target,
											card: card
										},
										true
									)
								)
									return;
								if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
								if (player.countCards('h', 'tao')) return 'zeroplayertarget';
								if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
							}
						}
					},
					wuxie: function (target, card, player, viewer) {
						if (player == game.me && get.attitude(viewer, player) > 0) {
							return 0;
						}
					},
					basic: {
						order: 5,
						useful: 1,
						value: 5.5
					},
					result: {
						target: -1.5,
						player: function (player, target, card) {
							if (
								player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							) {
								return 0;
							}
							if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
								return 0;
							}
							var hs1 = target.countCards('hs', 'sha');
							var hs2 = player.countCards('hs', 'sha');
							if (hs1 > hs2 + 1) {
								return -2;
							}
							if (player.hp == 1 && hs2 == 0 && hs1 >= 1) {
								return -2;
							}
							var hsx = target.countCards('hs');
							if (hsx.length == 0) {
								return 0;
							}
							if (hsx > 3 && hs2 == 0) {
								return -2;
							}
							return -0.5;
						}
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1
					}
				}
			};
			lib.skill.rezhanjue = {
				audio: 2,
				enable: 'phaseUse',
				filterCard: function (card) {
					return !card.hasGaintag('reqinwang');
				},
				selectCard: -1,
				position: 'h',
				filter: function (event, player) {
					var stat = player.getStat().skill;
					if (stat.rezhanjue_draw && stat.rezhanjue_draw >= 3) return false;
					var hs = player.getCards('h', function (card) {
						return !card.hasGaintag('reqinwang');
					});
					if (!hs.length) return false;
					for (var i = 0; i < hs.length; i++) {
						var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
						if (mod2 === false) return false;
					}
					return event.filterCard(get.autoViewAs({name: 'juedou'}, hs));
				},
				viewAs: {
					name: 'juedou'
				},
				onuse: function (links, player) {
					player.addTempSkill('rezhanjue_effect', 'phaseUseEnd');
				},
				ai: {
					order: function (item, player) {
						if (player.countCards('h', 'tao') > 0) {
							return get.order({name: 'tao'}) - 1;
						}
						return 0.5;
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1
					},
					result: {
						target: -1.5,
						player: function (player, target) {
							if (
								player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: {name: 'juedou'}
									},
									true
								)
							) {
								return 0;
							}
							if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
								return 0;
							}
							var hs1 = target.getCards('h', 'sha');
							var hs2 = player.getCards('h', function (card) {
								return card.hasGaintag('reqinwang') && get.name(card) == 'sha';
							});
							if (hs1.length > hs2.length + 1) {
								return -2;
							}
							var hsx = target.getCards('h');
							if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
								return -2;
							}
							if (hsx.length > 3 && hs2.length == 0) {
								return -2;
							}
							if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
								return -2;
							}
							return -0.5;
						}
					},
					wuxie: function (target, card, player, viewer) {
						if (player == game.me && get.attitude(viewer, player) > 0) {
							return 0;
						}
					},
					basic: {
						order: 5,
						useful: 1,
						value: 5.5
					}
				}
			};
			/*制衡*/
			lib.skill.zhiheng = {
				audio: 2,
				audioname: ['gz_jun_sunquan'],
				enable: 'phaseUse',
				usable: 1,
				position: 'he',
				filterCard: true,
				selectCard: [1, Infinity],
				prompt: '弃置任意张牌并摸等量的牌',
				check: function (card) {
					return 6 - get.value(card);
				},
				content: function () {
					player.draw(cards.length);
				},
				ai: {
					order: function (item, player) {
						if (player.countCards('h', 'tao') > 0) {
							return get.order({name: 'tao'}) - 1;
						}
						return 0.5;
					},
					result: {
						player: 1
					},
					threaten: 1.5
				}
			};
			lib.skill.rezhiheng = {
				audio: 2,
				audioname: ['shen_caopi'],
				enable: 'phaseUse',
				usable: 1,
				position: 'he',
				filterCard: function (card, player, event) {
					event = event || _status.event;
					if (typeof event != 'string') event = event.getParent().name;
					var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
					if (mod != 'unchanged') return mod;
					return true;
				},
				discard: false,
				lose: false,
				delay: false,
				selectCard: [1, Infinity],
				check: function (card) {
					var player = _status.event.player;
					if (
						get.position(card) == 'h' &&
						!player.countCards('h', 'du') &&
						(player.hp > 2 ||
							!player.countCards('h', function (card) {
								return get.value(card) >= 8;
							}))
					) {
						return 1;
					}
					return 6 - get.value(card);
				},
				content: function () {
					'step 0'
					player.discard(cards);
					event.num = 1;
					var hs = player.getCards('h');
					if (!hs.length) event.num = 0;
					for (var i = 0; i < hs.length; i++) {
						if (!cards.contains(hs[i])) {
							event.num = 0;
							break;
						}
					}
					'step 1'
					player.draw(event.num + cards.length);
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'loseEnd'
						},
						silent: true,
						filter: function (event, player) {
							if (event.getParent(2).skill != 'rezhiheng' && event.getParent(2).skill != 'jilue_zhiheng') return false;
							if (player.countCards('h')) return false;
							for (var i = 0; i < event.cards.length; i++) {
								if (event.cards[i].original == 'h') return true;
							}
							return false;
						},
						content: function () {
							player.addTempSkill('rezhiheng_delay', trigger.getParent(2).skill + 'After');
						},
						sub: true,
						forced: true,
						popup: false
					},
					delay: {
						sub: true
					}
				},
				ai: {
					order: function (item, player) {
						if (player.countCards('h') == 1) {
							if (player.countCards('h', 'tao') == 0 && player.countCards('h', 'wuzhong') == 0) return 10;
						}
						if (player.countCards('h', 'tao') > 0) {
							return get.order({name: 'tao'}) - 1;
						}
						return 0.5;
					},
					result: {
						player: 1
					},
					threaten: 1.55
				}
			};
			/*诛侫*/
			lib.skill.zhuning = {
				audio: 2,
				enable: 'phaseUse',
				usable: 2,
				filter: function (event, player) {
					if (!player.countCards('he')) return false;
					return !player.getStat('skill').zhuning || player.hasSkill('zhuning_double');
				},
				filterCard: true,
				position: 'he',
				filterTarget: function (card, player, target) {
					return player != target;
				},
				selectCard: [1, Infinity],
				delay: false,
				lose: false,
				discard: false,
				check: function (card) {
					if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
					if (!ui.selected.cards.length && card.name == 'du') return 20;
					var player = get.owner(card);
					if (ui.selected.cards.length >= Math.max(1, player.countCards('h') - player.hp)) return 0;
					return 10 - get.value(card);
				},
				content: function () {
					'step 0'
					player.give(cards, target).gaintag.add('fengxiang_tag');
					target.addSkill('fengxiang_card');
					'step 1'
					var list = [];
					for (var name of lib.inpile) {
						var type = get.type(name);
						if (type != 'basic' && type != 'trick') continue;
						var card = {name: name, isCard: true};
						if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
							list.push([type, '', name]);
						}
						if (name == 'sha') {
							for (var i of lib.inpile_nature) {
								card.nature = i;
								if (player.hasUseTarget(card)) list.push([type, '', name, i]);
							}
						}
					}
					if (list.length) {
						player.chooseButton(['是否视为使用一张伤害牌？', [list, 'vcard']]).set('ai', function (button) {
							return _status.event.player.getUseValue({name: button.link[2]});
						});
					} else event.finish();
					'step 2'
					if (result.bool) {
						player.chooseUseTarget({name: result.links[0][2], nature: result.links[0][3], isCard: true}, true, false);
					} else event.finish();
					'step 3'
					if (
						!player.hasHistory('sourceDamage', function (evt) {
							if (!evt.card) return false;
							var evtx = evt.getParent('useCard');
							return evtx.card == evt.card && evtx.getParent(2) == event;
						})
					)
						player.addTempSkill('zhuning_double');
				},
				subSkill: {
					double: {
						sub: true
					}
				},
				ai: {
					fireAttack: true,
					order: 4,
					result: {
						target: function (player, target) {
							if (target.hasSkillTag('nogain')) return 0;
							if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
								if (target.hasSkillTag('nodu')) return 0;
								return -10;
							}
							if (target.hasJudge('lebu')) return 0;
							var nh = target.countCards('h');
							var np = player.countCards('h');
							if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
								if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
							}
							return Math.max(1, 5 - nh);
						}
					}
				}
			};
			lib.skill.fengxiang_card = {
				trigger: {
					player: 'loseEnd'
				},
				forced: true,
				popup: false,
				silent: true,
				filter: function (event, player, card) {
					return (
						player.getCards('h', function (card) {
							return card.hasGaintag('fengxiang_tag');
						}).length == 0
					);
				},
				content: function () {
					player.removeSkill('fengxiang_card');
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (
							game.countPlayer(function (current) {
								return get.attitude(player, current) > 0 && current.hasSkill('fengxiang');
							})
						) {
							if (get.itemtype(card) == 'card' && card.hasGaintag('fengxiang_tag')) {
								return num + 10;
							}
						}
					}
				}
			};
			/*手杀节钺*/
			lib.skill.rejieyue = {
				audio: 2,
				trigger: {
					player: 'phaseJieshuBegin'
				},
				direct: true,
				filter: function (event, player) {
					return player.countCards('he') > 0;
				},
				content: function () {
					'step 0'
					player.chooseCardTarget({
						prompt: get.prompt2('rejieyue'),
						filterCard: true,
						position: 'he',
						filterTarget: lib.filter.notMe,
						ai1: function (card) {
							var player = _status.event.player;
							if (get.name(card) == 'du') return 20;
							if (get.position(card) == 'e' && get.value(card) <= 0) return 14;
							if (
								get.position(card) == 'h' &&
								game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
								})
							)
								return 12;
							if (
								game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) > 0;
								})
							) {
								if (card.name == 'wuxie') return 11;
								if (card.name == 'shan' && player.countCards('h', 'shan') > 1) return 9;
							}
							return 6 / Math.max(1, get.value(card));
						},
						ai2: function (target) {
							var player = _status.event.player;
							var card = ui.selected.cards[0];
							var att = get.attitude(player, target);
							if (card.name == 'du') return -6 * att;
							if (att > 0) {
								if (get.position(card) == 'h' && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
								if (get.value(card, target) > get.value(card, player)) return 2 * att;
								return 1.2 * att;
							}
							return (-att * Math.min(5, target.countCards('he'))) / 5;
						}
					});
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill('rejieyue', target);
						player.give(result.cards, target);
					} else event.finish();
					'step 2'
					var num = 0;
					if (target.countCards('h')) num++;
					if (target.countCards('e')) num++;
					if (num > 0) {
						var next = target.chooseCard('he', num, '选择保留每个区域的各一张牌，然后弃置其余的牌。或点取消，令' + get.translation(player) + '摸三张牌', function (card) {
							for (var i = 0; i < ui.selected.cards.length; i++) {
								if (get.position(ui.selected.cards[i]) == get.position(card)) return false;
							}
							return true;
						});
						next.set('complexCard', true);
						next.set('goon', get.attitude(target, player) >= 0);
						next.set('maxNum', num);
						next.set('ai', function (card) {
							if (_status.event.player.countCards('he') >= 4) return -1;
							if (_status.event.goon) return -1;
							var num = _status.event.maxNum;
							if (ui.selected.cards.length >= num - 1) {
								var val = get.value(
									player.getCards('he', function (cardx) {
										return cardx != card && !ui.selected.cards.contains(cardx);
									})
								);
								if (val >= 14) return 0;
							}
							return get.value(card);
						});
					} else event._result = {bool: false};
					'step 3'
					if (!result.bool) player.draw(3);
					else {
						var cards = target.getCards('he');
						cards.removeArray(result.cards);
						if (cards.length) target.discard(cards);
					}
				},
				ai: {
					threaten: 1.3,
					expose: 0.2
				}
			};
			/*曹婴 凌人*/
			lib.skill.xinfu_lingren = {
				usable: 1,
				audio: 2,
				trigger: {
					player: 'useCardToPlayered'
				},
				direct: true,
				filter: function (event, player) {
					if (event.getParent().triggeredTargets3.length > 1) return false;
					if (!player.isPhaseUsing()) return false;
					if (!['basic', 'trick'].contains(get.type(event.card))) return false;
					if (get.tag(event.card, 'damage')) return true;
					return false;
				},
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt('xinfu_lingren'), '选择一名目标角色并猜测其手牌构成', function (card, player, target) {
						return _status.event.targets.contains(target);
					}).set('ai', function (target) {
						return 2 - get.attitude(_status.event.player, target);
					}).set('targets', trigger.targets);
					'step 1'
					if (result.bool) {
						player.logSkill('xinfu_lingren', result.targets);
						var target = result.targets[0];
						event.target = target;
						event.choice = {
							basic: false,
							trick: false,
							equip: false
						};
						player.chooseButton(['凌人：猜测其有哪些类别的手牌', [['basic', 'trick', 'equip'], 'vcard']], [0, 3], true).set('ai', function (button) {
							switch (button.link[2]) {
								case 'basic':
									var rand = 0.95;
									if (!target.countCards('h', {type: ['basic']})) rand = 0.05;
									if (!target.countCards('h')) rand = 0;
									if (target.countCards('h') > 0) return Math.random() < rand ? true : false;
									if (target.countCards('h') == 0) return false;
								case 'trick':
									var rand = 0.9;
									if (!target.countCards('h', {type: ['trick', 'delay']})) rand = 0.1;
									if (target.countCards('h') > 0) return Math.random() < rand ? true : false;
									if (target.countCards('h') == 0) return false;
								case 'equip':
									var rand = 0.75;
									if (!target.countCards('h', {type: ['equip']})) rand = 0.25;
									if (target.countCards('h') > 0) return Math.random() < rand ? true : false;
									if (target.countCards('h') == 0) return false;
							}
						});
					} else {
						player.storage.counttrigger.xinfu_lingren--;
						event.finish();
					}
					'step 2'
					if (result.bool) {
						var choices = result.links.map((i) => i[2]);
						if (!event.isMine() && !event.isOnline()) game.delayx();
						var list = [];
						event.num = 0;
						['basic', 'trick', 'equip'].forEach((type) => {
							if (choices.contains(type) == target.hasCard({type: type}, 'h')) event.num++;
						});
					}
					'step 3'
					player.popup('猜对' + get.cnNumber(event.num) + '项');
					game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
					if (event.num > 0) {
						target.addTempSkill('lingren_adddamage');
						target.storage.lingren = {
							card: trigger.card
							//player:event.targett,
						};
					}
					if (event.num > 1) player.draw(2);
					if (event.num > 2) {
						player.addTempSkill('lingren_jianxiong', {player: 'phaseBegin'});
						player.addTempSkill('lingren_xingshang', {player: 'phaseBegin'});
					}
				},
				ai: {
					threaten: 2.4
				}
			};
			/*滔乱*/
			lib.skill.taoluan = {
				enable: 'chooseToUse',
				popup: false,
				filter: function (event, player) {
					return !player.hasSkill('taoluan3') && player.countCards('hes') > 0;
				},
				hiddenCard: function (player, name) {
					return !player.getStorage('taoluan').contains(name) && player.countCards('hes') > 0 && !player.hasSkill('taoluan3') && lib.inpile.contains(name);
				},
				init: function (player) {
					if (!player.storage.taoluan) player.storage.taoluan = [];
				},
				onremove: true,
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (player.storage.taoluan.contains(name)) continue;
							if (name == 'sha') {
								list.push(['基本', '', 'sha']);
								list.push(['基本', '', 'sha', 'fire']);
								list.push(['基本', '', 'sha', 'thunder']);
								list.push(['基本', '', 'sha', 'ice']);
							} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
							else if (get.type(name) == 'basic') list.push(['基本', '', name]);
						}
						if (list.length == 0) {
							return ui.create.dialog('滔乱已无牌可用');
						}
						return ui.create.dialog('滔乱', [list, 'vcard']);
					},
					filter: function (button, player) {
						return _status.event.getParent().filterCard(
							{
								name: button.link[2]
							},
							player,
							_status.event.getParent()
						);
					},
					check: function (button) {
						if (_status.event.getParent().type != 'phase') return 1;
						var player = _status.event.player;
						if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].contains(button.link[2])) return 0;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3]
						});
					},
					backup: function (links, player) {
						return {
							filterCard: true,
							selectCard: 1,
							popname: true,
							check: function (card) {
								return 6 - get.value(card);
							},
							position: 'hse',
							viewAs: {
								name: links[0][2],
								nature: links[0][3]
							},
							onuse: function (result, player) {
								player.logSkill('taoluan');
								player.storage.taoluan.add(result.card.name);
							}
						};
					},
					prompt: function (links, player) {
						return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
					}
				},
				ai: {
					fireAttack: true,
					save: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player) {
						if (!player.countCards('hse')) return false;
					},
					order: 4,
					basic: {
						useful: [6, 4, 3],
						value: [6, 4, 3]
					},
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						}
					}
				},
				group: ['taoluan_2'],
				subSkill: {
					2: {
						trigger: {
							player: ['useCardAfter', 'respondAfter']
						},
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.skill == 'taoluan_backup';
						},
						content: function () {
							'step 0'
							player
								.chooseTarget(
									true,
									function (card, player, target) {
										return target != player;
									},
									'滔乱<br><br><div class="text center">令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别相同的牌；2.你失去1点体力'
								)
								.set('ai', function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) > 0) {
										if (get.attitude(target, player) > 0) {
											return target.countCards('he');
										}
										return target.countCards('he') / 2;
									}
									return 0;
								});
							'step 1'
							var target = result.targets[0];
							event.target = target;
							player.line(target, 'green');
							var type = get.type(trigger.card, 'trick');
							target
								.chooseCard('滔乱<br><br><div class="text center">交给' + get.translation(player) + '一张不为' + get.translation(type) + '牌的牌，或令其失去一点体力且滔乱无效直到回合结束', 'he', function (card, player, target) {
									return get.type(card, 'trick') != _status.event.cardType;
								})
								.set('cardType', type)
								.set('ai', function (card) {
									if (_status.event.att) {
										return 11 - get.value(card);
									}
									return 0;
								})
								.set('att', get.attitude(target, player) > 0);
							'step 2'
							var target = event.target;
							if (result.bool) {
								target.give(result.cards, player);
							} else {
								player.addTempSkill('taoluan3');
								var next = player.loseHp();
								event.next.remove(next);
								event.getParent('phase').after.push(next);
							}
						},
						sub: true
					}
				}
			};
			/*DIY文鸯 膂力*/
			lib.skill.lvli = {
				audio: 2,
				init: function (player, skill) {
					player.storage[skill] = 0;
				},
				enable: 'chooseToUse',
				filter: function (event, player) {
					if (player.storage.lvli > 1) return false;
					if (player.storage.lvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
					return true;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == 'sha') {
								list.push(['基本', '', 'sha']);
								list.push(['基本', '', 'sha', 'fire']);
								list.push(['基本', '', 'sha', 'thunder']);
							} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
							else if (get.type(name) == 'basic') list.push(['基本', '', name]);
						}
						return ui.create.dialog(event.lvli6 ? get.prompt('lvli') : '膂力', [list, 'vcard']);
					},
					filter: function (button, player) {
						var evt = _status.event.getParent();
						if (evt && typeof evt.filterCard == 'function') return evt.filterCard({name: button.link[2]}, player, evt);
						return lib.filter.filterCard({name: button.link[2]}, player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						if (player.countCards('h', button.link[2])) return 0;
						if (_status.event.getParent().type != 'phase' && !_status.event.getParent().lvli6) return 1;
						return player.getUseValue({name: button.link[2]});
					},
					backup: function (links, player) {
						return {
							filterCard: function () {
								return false;
							},
							audio: 'lvli',
							selectCard: -1,
							check: function (card) {
								return 1;
							},
							viewAs: {name: links[0][2], nature: links[0][3], isCard: true}
						};
					},
					prompt: function (links, player) {
						return '请选择' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '的目标';
					}
				},
				ai: {
					fireAttack: true,
					save: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player) {
						if (!player.countCards('hse')) return false;
					},
					order: 10,
					basic: {
						useful: [6, 4, 3],
						value: [6, 4, 3]
					},
					result: {
						player: function (player) {
							if (_status.event.type == 'dying') {
								return get.attitude(player, _status.event.dying);
							} else {
								return 1;
							}
						}
					}
				},
				group: ['lvli2', 'lvli3', 'lvli6']
			};
			lib.skill.dawu = {
				trigger: {
					player: 'phaseJieshuBegin'
				},
				direct: true,
				filter: function (event, player) {
					return player.getExpansions('qixing').length;
				},
				audio: 2,
				content: function () {
					'step 0'
					var num = Math.min(game.countPlayer(), player.getExpansions('qixing').length);
					player.chooseTarget(get.prompt('dawu'), '令至多' + get.cnNumber(num) + '名角色获得“大雾”标记', [1, num]).set('ai', function (target) {
						if (target.isMin()) return 0;
						if (target.hasSkill('biantian2')) return 0;
						let att = get.attitude(player, target);
						if (att >= 4) {
							if (target.hp > 2 && !target.getDamagedHp()) return 0;
							if (target.hp >= 3 && target.hasSkillTag('maixie')) return 0;
							if (_status.event.allUse) return att;
							if (target.hp == 1) return att;
							if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
							return 0;
						}
						return -1;
					}).set('allUse', player.getExpansions('qixing').length >= game.countPlayer(function (current) {
							return get.attitude(player, current) > 4;
						}) * 2
					);
					'step 1'
					if (result.bool) {
						player.logSkill('dawu', result.targets, 'thunder');
						var length = result.targets.length;
						for (var i = 0; i < length; i++) {
							result.targets[i].addSkill('dawu2');
						}
						player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张“星”', length, player.getExpansions('qixing'), true);
						player.addSkill('dawu3');
					} else {
						event.finish();
					}
					'step 2'
					player.loseToDiscardpile(result.links);
				},
				ai: {
					combo: 'qixing'
				}
			};
			/*蒙斥*/
			lib.skill.dcmengchi = {
				audio: 2,
				trigger: {
					player: ['linkBefore', 'damageEnd']
				},
				forced: true,
				filter: function (event, player) {
					var num = player.getStat('gain');
					if (num && num > 0) return false;
					if (event.name == 'link') return !player.isLinked();
					return !event.nature;
				},
				content: function () {
					if (trigger.name == 'link') trigger.cancel();
					else player.recover();
				},
				ai: {
					filterDamage: true,
					effect: {
						target: function (card, player, target, current) {
							if (!target.hasFriend()) return;
							if (target.getStat('gain')) return;
							if (get.tag(card, 'natureDamage')) return;
							if (target.hp == 1) return 0.75;
							if (
								(card.name == 'sha' && !player.hasSkill('jiu')) ||
								target.hasSkillTag('filterDamage', null, {
									player: player,
									card: card
								})
							)
								return [1, 0.75 + 0.25 * target.hp];
						}
					}
				},
				mod: {
					cardEnabled: function (card, player) {
						if (!player.getStat('gain')) return false;
					},
					cardSavable: function (card, player) {
						if (!player.getStat('gain')) return false;
					}
				}
			};
			/*讽言*/
			lib.skill.dcfengyan = {
				enable: 'phaseUse',
				usable: 2,
				chooseButton: {
					dialog: function (event, player) {
						var dialog = ui.create.dialog('讽言：请选择一项', 'hidden');
						dialog.add([
							[
								['gain', '令一名体力值不大于你的其他角色交给你一张手牌'],
								['sha', '视为对一名手牌数不大于你的其他角色使用一张【杀】']
							],
							'textbutton'
						]);
						return dialog;
					},
					filter: function (button, player) {
						return !player.hasSkill('dcfengyan_' + button.link, null, null, false);
					},
					check: function (button) {
						var player = _status.event.player;
						if (
							button.link == 'gain' &&
							game.hasPlayer(function (current) {
								return lib.skill.dcfengyan_gain.filterTarget(null, player, current) && get.effect(current, 'dcfengyan_gain', player, player) > 0;
							})
						)
							return 4;
						if (
							button.link == 'sha' &&
							game.hasPlayer(function (current) {
								return lib.skill.dcfengyan_sha.filterTarget(null, player, current) && get.effect(current, 'dcfengyan_sha', player, player) > 0;
							})
						)
							return 4;
						return 2;
					},
					backup: function (links) {
						return get.copy(lib.skill['dcfengyan_' + links[0]]);
					},
					prompt: function (links) {
						if (links[0] == 'gain') return '令一名体力值不大于你的其他角色交给你一张手牌';
						return '视为对一名手牌数不大于你的其他角色使用【杀】';
					}
				},
				ai: {
					order: 10,
					threaten: 1.7,
					result: {
						player: 0.1,
						target: -1
					}
				},
				subSkill: {
					backup: {
						audio: 'dcfengyan',
						sub: true
					},
					gain: {
						audio: 'dcfengyan',
						filterTarget: function (card, player, target) {
							return target != player && target.hp <= player.hp && target.countCards('h') > 0;
						},
						filterCard: () => false,
						selectCard: -1,
						charlotte: true,
						content: function () {
							'step 0'
							player.addTempSkill('dcfengyan_gain', 'phaseUseAfter');
							target.chooseCard('h', true, '交给' + get.translation(player) + '一张牌');
							'step 1'
							if (result.bool) target.give(result.cards, player);
						},
						ai: {
							tag: {
								loseCard: 1,
								gain: 1
							},
							result: {
								player: 0.1,
								target: -1
							}
						},
						sub: true
					},
					sha: {
						audio: 'dcfengyan',
						filterTarget: function (card, player, target) {
							return target != player && target.countCards('h') <= player.countCards('h') && player.canUse('sha', target, false);
						},
						filterCard: () => false,
						selectCard: -1,
						charlotte: true,
						content: function () {
							player.addTempSkill('dcfengyan_sha', 'phaseUseAfter');
							player.useCard(
								{
									name: 'sha',
									isCard: true
								},
								target,
								false
							);
						},
						ai: {
							result: {
								player: function (player, target) {
									return get.effect(
										target,
										{
											name: 'sha',
											isCard: true
										},
										player,
										player
									);
								}
							}
						},
						sub: true
					}
				}
			};
			/*王荣 丰姿*/
			lib.skill.olfengzi = {
				audio: 2,
				trigger: {
					player: 'useCard'
				},
				direct: true,
				usable: 1,
				filter: function (event, player) {
					if (event.olfengzi_buff || !event.targets.length || !player.isPhaseUsing() || player.hasSkill('olfengzi_buff')) return false;
					var type = get.type(event.card, false);
					if (type != 'basic' && type != 'trick') return false;
					return player.hasCard(function (i) {
						if (_status.connectMode) return true;
						return get.type2(i, player) == type;
					}, 'h');
				},
				content: function () {
					'step 0'
					if (player != game.me && !player.isUnderControl() && !player.isOnline()) game.delayx();
					var type = get.type(trigger.card, false);
					player.chooseToDiscard('h', get.prompt('olfengzi'), '弃置一张' + get.translation(type) + '牌，令' + get.translation(trigger.card) + '结算两次', function (card, player) {
						return get.type2(card, player) == _status.event.type;
					}).set('type', type).set('ai', function (card) {
						if (trigger.card.name == 'tiesuo' || trigger.card.name == 'huogong' || trigger.card.name == 'shunshou' || trigger.card.name == 'guohe') return false;
						return 10 - get.value(card);
					}).logSkill = 'olfengzi';
					'step 1'
					if (result.bool) {
						player.addTempSkill('olfengzi_buff', 'phaseUseAfter');
						trigger.olfengzi_buff = player;
					} else player.storage.counttrigger.olfengzi--;
				},
				subSkill: {
					buff: {
						trigger: {
							global: 'useCardToTargeted'
						},
						forced: true,
						charlotte: true,
						popup: false,
						lastDo: true,
						filter: function (event, player) {
							return event.parent.olfengzi_buff == player && event.targets.length == event.parent.triggeredTargets4.length;
						},
						content: function () {
							trigger.getParent().targets = trigger.getParent().targets.concat(trigger.targets);
							trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.concat(trigger.targets);
						},
						onremove: function (player) {
							delete player.storage.counttrigger.olfengzi;
						},
						sub: true
					}
				}
			};
			lib.skill.xinkuangfu = {
				enable: 'phaseUse',
				usable: 1,
				audio: 2,
				delay: false,
				filterTarget: function (card, player, target) {
					if (player == target)
						return (
							player.countCards('e', function (card) {
								return lib.filter.cardDiscardable(card, player);
							}) > 0
						);
					return target.countDiscardableCards(player, 'e') > 0;
				},
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.countCards('e') > 0;
					});
				},
				content: function () {
					'step 0'
					if (player == target) player.chooseToDiscard('e', true);
					else player.discardPlayerCard(target, 'e', true);
					'step 1'
					player.chooseUseTarget('sha', true, false, 'nodistance');
					'step 2'
					var bool = game.hasPlayer2(function (current) {
						return (
							current.getHistory('damage', function (evt) {
								return evt.getParent(4) == event;
							}).length > 0
						);
					});
					if (player == target && bool) player.draw(2);
					else if (player != target && !bool) player.chooseToDiscard('h', 2, true);
				},
				ai: {
					order: function () {
						return get.order({name: 'sha'}) + 0.3;
					},
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target);
							var max = 0;
							var min = 1;
							target.countCards('e', function (card) {
								var val = get.value(card, target);
								if (val > max) max = val;
								if (val < min) min = val;
							});
							if (att > 0 && min <= 0) return target.hasSkillTag('noe') ? 3 : 1;
							if (att < 0 && max > 0) {
								if (target.hasSkillTag('noe')) return max > 6 ? -max / 3 : 0;
								return -max;
							}
							var cxdr = game.countPlayer(function (current) {
								return current.hp == 1 && player.inRange(current) && current != player && (!current.hasSkill('tengjia1') || !current.hasSkill('rw_tengjia1')) && get.attitude(current, player) < 0;
							});
							if (player.countCards('e') > 0 && (player.countCards('hs') <= 1 || player.countCards('hs', {name: 'sha'}) <= 0 || cxdr > 0) && target == player) {
								return 1;
							}
							return 0;
						}
					}
				}
			};
			//神荀彧
			lib.skill.tianzuo = {
				audio: 2,
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame'
				},
				forced: true,
				filter: function (event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.contains('qizhengxiangsheng');
				},
				content: function () {
					game.addGlobalSkill('tianzuo_global');
					for (var i = 2; i < 10; i++) {
						var card = game.createCard2('qizhengxiangsheng', i % 2 ? 'club' : 'spade', i);
						ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
					}
					game.broadcastAll(function () {
						lib.inpile.add('qizhengxiangsheng');
					});
					game.updateRoundNumber();
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.name(card) == 'qizhengxiangsheng') {
								if (get.attitude(player, target) <= 0) return [0, 1, 0, -10];
								return [0, 1, 0, 0];
							}
						}
					}
				},
				group: 'tianzuo_remove',
				subSkill: {
					remove: {
						audio: 'tianzuo',
						trigger: {
							target: 'useCardToBefore'
						},
						forced: true,
						priority: 15,
						filter: function (event, player) {
							return event.card && event.card.name == 'qizhengxiangsheng';
						},
						content: function () {
							trigger.cancel();
						},
						ai: {
							target: function (card, player, target) {
								if (card && card.name == 'qizhengxiangsheng') return 'zerotarget';
							}
						},
						sub: true
					},
					global: {
						trigger: {
							player: 'useCardToPlayered'
						},
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.card.name == 'qizhengxiangsheng';
						},
						content: function () {
							'step 0'
							var target = trigger.target;
							event.target = target;
							player
								.chooseControl('奇兵', '正兵')
								.set('prompt', '请选择' + get.translation(target) + '的标记')
								.set(
									'choice',
									(function () {
										var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
										var e2 = 0;
										if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
										var es = target.getGainableCards(player, 'e');
										if (es.length)
											e2 = Math.min(
												e2,
												(function () {
													var max = 0;
													for (var i of es) max = Math.max(max, get.value(i, target));
													return -max / 4;
												})()
											);
										if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
										if (e1 < e2) return '奇兵';
										return '正兵';
									})()
								)
								.set('ai', function () {
									return _status.event.choice;
								});
							'step 1'
							var map = trigger.getParent().customArgs,
								id = target.playerid;
							if (!map[id]) map[id] = {};
							map[id].qizheng_name = result.control;
						},
						sub: true
					},
					rewrite: {
						audio: 'tianzuo',
						trigger: {
							global: 'useCardToTargeted'
						},
						filter: function (event, player) {
							return event.card.name == 'qizhengxiangsheng';
						},
						logTarget: 'target',
						prompt2: '观看其手牌并修改“奇正相生”标记',
						content: function () {
							'step 0'
							var target = trigger.target;
							event.target = target;
							if (player != target && target.countCards('h') > 0) player.viewHandcards(target);
							player
								.chooseControl('奇兵', '正兵')
								.set('prompt', '请选择' + get.translation(target) + '的标记')
								.set(
									'choice',
									(function () {
										var shas = target.getCards('h', 'sha'),
											shans = target.getCards('h', 'shan');
										var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
										var e2 = 0;
										if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
										var es = target.getGainableCards(player, 'e');
										if (es.length)
											e2 = Math.min(
												e2,
												(function () {
													var max = 0;
													for (var i of es) max = Math.max(max, get.value(i, target));
													return -max / 4;
												})()
											);
										if (get.attitude(player, target) > 0) {
											if (shas.length >= Math.max(1, shans.length)) return '奇兵';
											if (shans.length > shas.length) return '正兵';
											return e1 > e2 ? '奇兵' : '正兵';
										}
										if (shas.length) e1 = -0.5;
										if (shans.length) e2 = -0.7;
										if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
										var rand = Math.random();
										if (e1 < e2) return rand < 0.1 ? '奇兵' : '正兵';
										return rand < 0.1 ? '正兵' : '奇兵';
									})()
								)
								.set('ai', () => _status.event.choice);
							'step 1'
							var map = trigger.getParent().customArgs,
								id = target.playerid;
							if (!map[id]) map[id] = {};
							map[id].qizheng_name = result.control;
							map[id].qizheng_aibuff = get.attitude(player, target) > 0;
						},
						sub: true
					}
				}
			};
			lib.skill.lingce.ai = {
				threaten: 4.2,
				effect: {
					target: function (card, player, target) {
						var numf = game.countPlayer(function (current) {
							return target.getFriends().contains(current);
						});
						var nume = game.countPlayer(function (current) {
							return player.getFriends().contains(current);
						});
						if (get.attitude(player, target) < 0) {
							if (numf > 0 || nume > 0) {
								if (!target.getStorage('dinghan').contains(card.name)) {
									if (get.type(card) == 'delay') {
										if (player.countCards('hs', {name: card.name}) > 1) return [1, 0, 1, 0];
										return [0.01, 0, 0, 0];
									}
									if (get.type(card) == 'trick' && get.name(card) != 'wugu') {
										if (player.countCards('hs', {name: card.name}) > 1) return [1, 0, 1, 0];
										return [0.2, 0, 0, 0];
									}
								}
							}
							if (nume == 0 && numf == 0) {
								if (get.type(card) == 'trick' || (get.type(card) == 'delay' && get.name(card) != 'wugu')) {
									if (!target.getStorage('dinghan').contains(card.name)) {
										if (player.countCards('hs', {name: card.name}) > 1) {
											return [1, 0.5, 1, 0];
										}
										return [0, 1, 0, 0];
									}
									if (target.getStorage('dinghan').contains(card.name)) {
										return [1, 1, 1, 0];
									}
								}
							}
						}
					}
				}
			};
			//神马超
			lib.skill.shouli = {
				audio: 2,
				mod: {
					cardUsable: function (card) {
						if (card.storage && card.storage.shouli) return Infinity;
					}
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard: function (player, name) {
					if (player != _status.currentPhase && (name == 'sha' || name == 'shan')) return true;
				},
				filter: function (event, player) {
					if (event.responded || event.shouli || event.type == 'wuxie') return false;
					if (
						game.hasPlayer(function (current) {
							return current.getEquip(4);
						}) &&
						event.filterCard(
							{
								name: 'sha',
								storage: {shouli: true}
							},
							player,
							event
						)
					)
						return true;
					if (
						game.hasPlayer(function (current) {
							return current.getEquip(3);
						}) &&
						event.filterCard(
							{
								name: 'shan',
								storage: {shouli: true}
							},
							player,
							event
						)
					)
						return true;
					return false;
				},
				delay: false,
				locked: true,
				filterTarget: function (card, player, target) {
					var event = _status.event,
						evt = event;
					if (event._backup) evt = event._backup;
					var equip3 = target.getEquip(3);
					var equip4 = target.getEquip(4);
					if (
						equip3 &&
						evt.filterCard(
							get.autoViewAs(
								{
									name: 'shan',
									storage: {shouli: true}
								},
								[equip3]
							),
							player,
							event
						)
					)
						return true;
					var sha = get.autoViewAs(
						{
							name: 'sha',
							storage: {shouli: true}
						},
						[equip4]
					);
					if (equip4 && evt.filterCard(sha, player, event)) {
						if (!evt.filterTarget) return true;
						return game.hasPlayer(function (current) {
							return evt.filterTarget(sha, player, current);
						});
					}
					return false;
				},
				prompt: '将场上的一张坐骑牌当做【杀】或【闪】使用或打出',
				content: function () {
					'step 0'
					var evt = event.getParent(2);
					evt.set('shouli', true);
					var list = [];
					var equip3 = target.getEquip(3);
					var equip4 = target.getEquip(4);
					var backupx = _status.event;
					_status.event = evt;
					try {
						if (equip3) {
							var shan = get.autoViewAs(
								{
									name: 'shan',
									storage: {shouli: true}
								},
								[equip3]
							);
							if (evt.filterCard(shan, player, event)) list.push('shan');
						}
						if (equip4) {
							var sha = get.autoViewAs(
								{
									name: 'sha',
									storage: {shouli: true}
								},
								[equip4]
							);
							if (
								evt.filterCard(sha, player, evt) &&
								(!evt.filterTarget ||
									game.hasPlayer(function (current) {
										return evt.filterTarget(sha, player, current);
									}))
							)
								list.push('sha');
						}
					} catch (e) {
						game.print(e);
					}
					_status.event = backupx;
					if (list.length == 1)
						event._result = {
							bool: true,
							links: [list[0] == 'shan' ? equip3 : equip4]
						};
					else
						player.choosePlayerCard(true, target, 'e').set('filterButton', function (button) {
							var type = get.subtype(button.link);
							return type == 'equip3' || type == 'equip4';
						});
					'step 1'
					var evt = event.getParent(2);
					if (result.bool && result.links && result.links.length) {
						var name = get.subtype(result.links[0]) == 'equip3' ? 'shan' : 'sha';
						if (evt.name == 'chooseToUse') {
							game.broadcastAll(
								function (result, name) {
									lib.skill.shouli_backup.viewAs = {
										name: name,
										cards: [result],
										storage: {shouli: true}
									};
									lib.skill.shouli_backup.prompt = '选择' + get.translation(name) + '（' + get.translation(result) + '）的目标';
								},
								result.links[0],
								name
							);
							if (player != target) target.addTempSkill('fengyin');
							target.addTempSkill('shouli_thunder');
							player.addTempSkill('shouli_thunder');
							evt.set('_backupevent', 'shouli_backup');
							evt.backup('shouli_backup');
							evt.set('openskilldialog', '选择' + get.translation(name) + '（' + get.translation(result.links[0]) + '）的目标');
							evt.set('norestore', true);
							evt.set('custom', {
								add: {},
								replace: {window: function () {}}
							});
						} else {
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card = get.autoViewAs(
								{
									name: name,
									cards: [result],
									storage: {shouli: true}
								},
								result.links
							);
							evt.result.cards = [result.links[0]];
							target.$give(result.links[0], player, false);
							if (player != target) target.addTempSkill('fengyin');
							target.addTempSkill('shouli_thunder');
							player.addTempSkill('shouli_thunder');
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag) {
						var subtype = tag == 'respondSha' ? 'equip4' : 'equip3';
						return game.hasPlayer(function (current) {
							return current.getEquip(subtype);
						});
					},
					order: function (item, player) {
						for (var i = 0; i < game.players.length; i++) {
							var current = game.players[i];
							if (_status.currentPhase != player && get.attitude(player, _status.currentPhase) < 0) {
								if (get.translation(_status.event == '杀')) {
									if (
										(_status.currentPhase.getEquip('guanshi') && _status.currentPhase.countCards('hes') > 4) ||
										(_status.currentPhase.getEquip('qinglong') &&
											_status.currentPhase.countCards('h', {name: 'sha'}) >
												player.countCards('h', {name: 'shan'}) +
													current.countCards('e', function (card) {
														return get.subtype(card) == 'equip3';
													})) ||
										(_status.currentPhase.getEquip('zhuge') &&
											_status.currentPhase.countCards('h', {name: 'sha'}) >
												player.countCards('h', {name: 'shan'}) +
													current.countCards('e', function (card) {
														return get.subtype(card) == 'equip3';
													}))
									)
										return 0;
								}
								if (get.translation(_status.event == '决斗')) {
									if (
										_status.currentPhase.countCards('h', {name: 'sha'}) >
										player.countCards('h', {name: 'sha'}) +
											current.countCards('e', function (card) {
												return get.subtype(card) == 'equip4';
											})
									)
										return 0;
									return 1;
								}
							}
							if (
								get.translation(_status.event != '决斗') &&
								_status.currentPhase == player &&
								!player.hasCard('wuzhong') &&
								!player.hasCard(function (card) {
									return get.type(card) == 'trick' && player.hasUseTarget(card) && !get.tag(card, 'damage') && get.name(card) != 'wugu' && get.name(card) != 'wuxie';
								})
							)
								return 45;
							return 1;
						}
					},
					result: {
						player: function (player, target) {
							var att = get.attitude(player, target);
							var eff = Math.max(0, get.effect(target, get.autoViewAs({name: 'sha'}, ['equip4']), player, player));
							if (_status.event.type != 'phase') return 11 - att;
							if (!player.hasValueTarget({name: 'sha'})) return 0;
							if (_status.event.type == 'phase') {
								if (
									player.hasValueTarget({name: 'sha'}) &&
									game.hasPlayer(function (current) {
										return (
											get.attitude(player, current) < 0 &&
											current.hp <= 2 &&
											current.hasSkill('shouli_thunder') &&
											!player.hasCard(function (card) {
												return get.tag(card, 'damage') && player.hasUseTarget(card);
											})
										);
									})
								)
									return 15 - att + 3 * eff;
								return 9 - att + 3 * eff;
							}
						}
					}
				},
				group: 'shouli_init',
				subSkill: {
					thunder: {
						charlotte: true,
						trigger: {
							player: 'damageBegin1'
						},
						forced: true,
						mark: true,
						content: function () {
							trigger.num++;
							trigger.nature = 'thunder';
						},
						marktext: '⚡',
						intro: {
							content: '受到的伤害+1且改为雷属性'
						},
						sub: true
					},
					init: {
						trigger: {
							global: 'phaseBefore',
							player: 'enterGame'
						},
						forced: true,
						filter: function (event, player) {
							return event.name != 'phase' || game.phaseNumber == 0;
						},
						logTarget: () => game.filterPlayer(),
						content: function () {
							'step 0'
							var targets = game.filterPlayer().sortBySeat(player.getNext());
							event.targets = targets;
							event.num = 0;
							'step 1'
							var target = event.targets[num];
							if (target.isIn()) {
								var card = get.cardPile2(function (card) {
									if (get.cardtag(card, 'gifts')) return false;
									var type = get.subtype(card);
									if (type != 'equip3' && type != 'equip4' && type != 'equip6') return false;
									return target.canUse(card, target);
								});
								if (card) target.chooseUseTarget(card, 'nopopup', 'noanimate', true);
							}
							event.num++;
							if (event.num < targets.length) event.redo();
						},
						audio: 'shouli',
						sub: true
					}
				}
			};
			lib.skill.hengwu = {
				audio: 2,
				trigger: {
					player: ['useCard', 'respond']
				},
				frequent: true,
				filter: function (event, player) {
					var suit = get.suit(event.card);
					if (
						!lib.suit.contains(suit) ||
						player.hasCard(function (card) {
							return get.suit(card, player) == suit;
						}, 'h')
					)
						return false;
					return game.hasPlayer(function (current) {
						return current.hasCard(function (card) {
							return get.suit(card, current) == suit;
						}, 'e');
					});
				},
				content: function () {
					var suit = get.suit(trigger.card);
					player.draw(
						game.countPlayer(function (current) {
							return current.countCards('e', function (card) {
								return get.suit(card, current) == suit;
							});
						})
					);
				},
				mod: {
					aiUseful: function (player, card, num) {
						var suit = get.suit(card);
						var es = game.countPlayer(function (current) {
							return current.countCards('e', function (cardx) {
								return cardx != card && get.suit(cardx, current) == suit;
							});
						});
						var hs = player.getCards('h');
						if (player.hp > 2) {
							//杀
							for (var i = 0; i < hs.length; i++) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasCard(function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										}, 'e');
									})
								)
									continue;
								if (get.name(hs[i]) != 'sha') continue;
								var shu = game.countPlayer(function (current) {
									return current.countCards('e', function (cardx) {
										return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
									});
								});
								var max = 0;
								var list = [];
								for (var j = 1; j < shu.length; j++) {
									if (shu[j] > max) {
										max = shu[j];
									}
								}
								if (
									game.countPlayer(function (current) {
										return current.countCards('e', function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										});
									}) == max
								)
									list.add(i);
								var list = list.sort(function (a, b) {
									return get.number(b) - get.number(a);
								});
								var ka = list[0];
								if (card == ka) return num + 5 * es;
								if (player.hasCard(ka) && card.name == 'sha' && get.suit(ka) == suit && card != ka) return num - 20;
							}
							//闪
							for (var i = 0; i < hs.length; i++) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasCard(function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										}, 'e');
									})
								)
									continue;
								if (get.name(hs[i]) != 'shan') continue;
								var shu = game.countPlayer(function (current) {
									return current.countCards('e', function (cardx) {
										return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
									});
								});
								var max = 0;
								var list = [];
								for (var j = 1; j < shu.length; j++) {
									if (shu[j] > max) {
										max = shu[j];
									}
								}
								if (
									game.countPlayer(function (current) {
										return current.countCards('e', function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										});
									}) == max
								)
									list.add(i);
								var list = list.sort(function (a, b) {
									return get.number(b) - get.number(a);
								});
								var ka = list[0];
								if (card == ka) return num + 3 * es;
								if (player.hasCard(ka) && card.name == 'shan' && get.suit(ka) == suit && card != ka) return num - 20;
							}
							//桃
							for (var i = 0; i < hs.length; i++) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasCard(function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										}, 'e');
									})
								)
									continue;
								if (get.name(hs[i]) != 'tao') continue;
								var shu = game.countPlayer(function (current) {
									return current.countCards('e', function (cardx) {
										return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
									});
								});
								var max = 0;
								var list = [];
								for (var j = 1; j < shu.length; j++) {
									if (shu[j] > max) {
										max = shu[j];
									}
								}
								if (
									game.countPlayer(function (current) {
										return current.countCards('e', function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										});
									}) == max
								)
									list.add(i);
								var list = list.sort(function (a, b) {
									return get.number(b) - get.number(a);
								});
								var ka = list[0];
								if (card == ka) return num + 4 * es;
								if (
									player.hasCard(ka) &&
									card.name == 'tao' &&
									get.suit(ka) == suit &&
									card != ka &&
									!game.hasPlayer(function (current) {
										return current != player && get.attitude(player, current) > 0 && current.hp < 3;
									})
								)
									return num - 20;
								if (
									player.hasCard(ka) &&
									card.name == 'tao' &&
									get.suit(ka) == suit &&
									card != ka &&
									game.hasPlayer(function (current) {
										return current != player && get.attitude(player, current) > 0 && current.hp < 3;
									})
								)
									return num + 10;
							}
							//酒
							for (var i = 0; i < hs.length; i++) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasCard(function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										}, 'e');
									})
								)
									continue;
								if (get.name(hs[i]) != 'jiu') continue;
								var shu = game.countPlayer(function (current) {
									return current.countCards('e', function (cardx) {
										return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
									});
								});
								var max = 0;
								var list = [];
								for (var j = 1; j < shu.length; j++) {
									if (shu[j] > max) {
										max = shu[j];
									}
								}
								if (
									game.countPlayer(function (current) {
										return current.countCards('e', function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										});
									}) == max
								)
									list.add(i);
								var list = list.sort(function (a, b) {
									return get.number(b) - get.number(a);
								});
								var ka = list[0];
								if (card == ka) return num + 4 * es;
								if (player.hasCard(ka) && card.name == 'jiu' && get.suit(ka) == suit && card != ka) return num - 20;
							}
							//无懈
							for (var i = 0; i < hs.length; i++) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasCard(function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										}, 'e');
									})
								)
									continue;
								if (get.name(hs[i]) != 'wuxie') continue;
								var shu = game.countPlayer(function (current) {
									return current.countCards('e', function (cardx) {
										return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
									});
								});
								var max = 0;
								var list = [];
								for (var j = 1; j < shu.length; j++) {
									if (shu[j] > max) {
										max = shu[j];
									}
								}
								if (
									game.countPlayer(function (current) {
										return current.countCards('e', function (cardx) {
											return cardx != card && get.suit(cardx, current) == get.suit(hs[i]);
										});
									}) == max
								)
									list.add(i);
								var list = list.sort(function (a, b) {
									return get.number(b) - get.number(a);
								});
								var ka = list[0];
								if (card == ka) return num + 4 * es;
								if (player.hasCard(ka) && card.name == 'wuxie' && get.suit(ka) == suit && card != ka) return num - 20;
							}
						}
					},
					aiOrder: function (player, card, num) {
						var suit = get.suit(card);
						var hs = player.countCards('h', function (cardx) {
							return get.suit(cardx) == suit;
						});
						var es = game.countPlayer(function (current) {
							return current.countCards('e', function (cardx) {
								return cardx != card && get.suit(cardx, current) == suit;
							});
						});
						var canusek = player.getCards('h', function (cardx) {
							return get.type(cardx) == 'trick' || get.type(cardx) == 'delay';
						});
						if (get.type(card) == 'equip') {
							var stp = get.subtype(card);
							if (!player.getEquip(stp)) return num + 50;
						}
						if (
							game.hasPlayer(function (current) {
								return current.hasCard(function (cardx) {
									return cardx != card && get.suit(cardx, current) == suit;
								}, 'e');
							})
						) {
							if (hs == 1) {
								if (get.name(card) == 'sha') {
									if (player.getEquip('zhuge') || player.getEquip('qinglong')) return num + 2 * es;
									return num + 0.1;
								}
								if (get.name(card) != 'sha' || get.name(card) != 'jiu') return num + 7 * es;
							}
							if (get.name(card) == 'jiu') {
								if (hs == 1) return num + 3 * es;
								if (player.hasCard('sha')) return get.order({name: 'sha'}) + 0.4;
							}
							if (!['tao', 'shan', 'wuxie', 'jiu', 'sha'].contains(card.name)) {
								if (
									player.hasCard(function (cardx) {
										return;
										cardx != card && get.suit(cardx) == suit && get.name(cardx) != 'tao' && get.name(cardx) != 'shan' && get.name(cardx) != 'wuxie';
									}, 'h')
								) {
									if (
										player.countCards('h', function (cardx) {
											return cardx != card && get.suit(cardx) == suit && get.name(cardx) == 'jiu';
										}) == 0 ||
										(player.countCards('h', function (cardx) {
											return cardx != card && get.suit(cardx) == suit && get.name(cardx) == 'jiu';
										}) == 1 &&
											player.countUsed('jiu', true) == 0) ||
										player.countCards('h', function (cardx) {
											return cardx != card && get.suit(cardx) == suit && get.name(cardx) == 'sha';
										}) == 0 ||
										(player.countCards('h', function (cardx) {
											return cardx != card && get.suit(cardx) == suit && get.name(cardx) == 'sha';
										}) == 1 &&
											player.countUsed('sha', true) == 0)
									) {
										if (
											get.effect(target, card, player, player) >= 0 &&
											!player.hasCard(function (cardx) {
												return cardx != card && get.suit(cardx) == suit && get.effect(target, cardx, player, player) < 0;
											}, 'h')
										) {
											if (get.type(card) == 'equip') return num + (15 * es) / hs;
											return num + (7 * es) / hs;
										}
									}
								}
							}
						}
					}
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							var suit = get.suit(card);
							var hs = player.countCards('h', function (cardx) {
								return get.suit(cardx) == suit;
							});
							var sd = game.countPlayer(function (current) {
								return current.hasSkillTag('rejudge') && get.attitude(current, player) < 0;
							});
							var canusek = player.getCards('h', function (cardx) {
								return get.suit(cardx) == suit;
							});
							/*if(game.hasPlayer(function(current){return current.getEquip('tengjia')&&get.attitude(player,current)<0})&&card.name=='zhuque') return [1,5];*/
							if (
								game.hasPlayer(function (current) {
									return get.attitude(player, current) <= 0 && current.hasSkill('shouli_thunder');
								})
							) {
								if (get.tag(card, 'damage')) {
									if (player.inRange(target)) {
										if (target.hasSkill('shouli_thunder') && get.attitude(player, target) <= 0) {
											if (!target.hasSkillTag('nodamage' && 'filterDamage' && 'nothunder')) return [2, 4, 2, -4];
											if (target.hasSkillTag('nodamage' || 'nothunder')) return 'zeroplayertarget';
										}
										if (!target.hasSkill('shouli_thunder')) {
											if (
												!game.hasPlayer(function (current) {
													return current.hasSkill('shouli_thunder') && !current.hasSkillTag('nodamage' || 'filterDamage' || 'nothunder');
												})
											)
												return 'zeroplayertarget';
											return [1, 0, 1, 0];
										}
									}
								}
							}
							if (
								game.hasPlayer(function (current) {
									return current.hasCard(function (cardx) {
										return cardx != card && get.suit(cardx, current) == suit;
									}, 'e');
								})
							) {
								if (get.type(card) == 'equip') {
									var stp = get.subtype(card);
									if (
										player.getEquip(stp) &&
										!player.hasCard(function (card) {
											return card == canusek && !player.hasUseTarget(card);
										})
									) {
										if (get.subtype(card) == 'equip1') {
											if (player.getEquip('zhuge') && (player.hasValueTarget({name: 'sha'}) || player.hasCard('wuzhong'))) return 'zeroplayertarget';
											if (
												card.name == 'zhuge' &&
												!game.hasPlayer(function (current) {
													return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, {name: 'sha'}, player, player) > 0;
												})
											)
												return 'zeroplayertarget';
										}
										return [1, 5];
									}
									return [0, 0];
								}
								if (card.name == 'jiu' && hs == 1) return [1, 2];
								if (card.name == 'tiesuo' && hs == 1) return [2, 0, 2, 0];
								if (card.name == 'shandian') {
									if (sd == 0 && hs == 1) return [1, 1];
									return [0, -2, 0, 0];
								}
							}
						},
						target: function (card, player, target) {
							if (
								card.name == 'sha' &&
								!player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							) {
								if (
									game.hasPlayer(function (current) {
										return current.hasCard(function (cardx) {
											return get.subtype(cardx) == 'equip3';
										}, 'e');
									})
								)
									return [0, -0.5];
							}
						}
					}
				}
			};
			lib.skill.shouli_backup = {
				sourceSkill: 'shouli',
				precontent: function () {
					delete event.result.skill;
					var cards = event.result.card.cards;
					event.result.cards = cards;
					var owner = get.owner(cards[0]);
					event.target = owner;
					owner.$give(cards[0], player, false);
					player.popup(event.result.card.name, 'metal');
					game.delayx();
					event.getParent().addCount = false;
				},
				filterCard: function () {
					return false;
				},
				prompt: '请选择【杀】的目标',
				selectCard: -1
			};
			//曹髦
			//潜龙
			lib.skill.qianlong = {
				audio: 2,
				trigger: {
					player: 'damageEnd'
				},
				frequent: true,
				content: function () {
					'step 0'
					var cards = get.cards(3);
					event.cards = cards;
					game.cardsGotoOrdering(cards);
					//展示牌
					game.log(player, '展示了', event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, id, cards) {
							if (player == game.me || player.isUnderControl()) return;
							var str = get.translation(player) + '发动了【潜龙】';
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						event.videoId,
						event.cards
					);
					game.addVideo('showCards', player, [get.translation(player) + '发动了【潜龙】', get.cardsInfo(event.cards)]);
					if (player != game.me && !player.isUnderControl() && !player.isOnline()) game.delay(2);
					//选牌
					var next = player.chooseToMove('潜龙：获得至多' + get.cnNumber(Math.min(3, player.getDamagedHp())) + '张牌并将其余牌置于牌堆底');
					next.set('list', [['置于牌堆底', cards], ['自己获得']]);
					next.set('filterMove', function (from, to, moved) {
						if (moved[0].contains(from.link)) {
							if (typeof to == 'number') {
								if (to == 1) {
									if (moved[1].length >= _status.event.player.getDamagedHp()) return false;
								}
								return true;
							}
						}
						return true;
					});
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0),
							player = _status.event.player;
						cards.sort(function (a, b) {
							return get.value(b, player) - get.value(a, player);
						});
						if (player.hasCard('sha') && player.storage.juetao == false) {
							var gain,
								bottom = [];
							var pai = cards.filter(function (card) {
								return card.name != 'sha';
							});
							if (pai.length <= player.getDamagedHp()) {
								var gain = pai;
							} else {
								pai.sort(function (a, b) {
									return get.value(b, player) - get.value(a, player);
								});
								var gain = pai.splice(0, player.getDamagedHp());
								var bottom = bottom.push(pai);
							}
							return [bottom, gain];
						} else {
							return [cards, cards.splice(0, _status.event.player.getDamagedHp())];
						}
					});
					'step 1'
					game.broadcastAll('closeDialog', event.videoId);
					game.addVideo('cardDialog', null, event.videoId);
					var moved = result.moved;
					if (moved[0].length > 0) {
						for (var i of moved[0]) {
							i.fix();
							ui.cardPile.appendChild(i);
						}
					}
					if (moved[1].length > 0) player.gain(moved[1], 'gain2');
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return;
								if (!target.hasFriend()) return;
								var num = 1;
								if (!player.needsToDiscard() && target.isDamaged()) {
									num = 0.7;
								} else {
									num = 0.5;
								}
								if (target.hp >= 4) return [1, num * 2];
								if (target.hp == 3) return [1, num * 1.5];
								if (target.hp == 2) return [1, num * 0.5];
							}
						}
					}
				}
			};
			//决讨
			lib.skill.juetao = {
				audio: 2,
				trigger: {
					player: 'phaseUseBegin'
				},
				direct: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'thunder',
				filter: function (event, player) {
					return player.hp == 1;
				},
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('juetao'), lib.filter.notMe).set('ai', function (target) {
						var att = get.attitude(_status.event.player, target);
						if (att < 0) {
							if (!target.hasSkillTag('nodamage')) {
								if (target.getEquip('tengjia')) return -att;
								if (target.getEquip('bagua')) return 6 - att;
								if (target.getEquip('renwang')) return 4 - att;
								if (!target.getEquip(2) || target.getEquip('baiyin' || 'rewrite_baiyin')) return 10 - att;
								return 3 - att;
							} else {
								return 0.5;
							}
						} else {
							return 0;
						}
					});
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill('juetao', target);
						player.awakenSkill('juetao');
					} else event.finish();
					'step 2'
					var card = get.bottomCards()[0];
					game.cardsGotoOrdering(card);
					player.showCards(card);
					player.chooseUseTarget(card, true, false, 'nodistance').set('filterTarget', function (card, player, target) {
						let evt = _status.event;
						if (_status.event.name == 'chooseTarget') evt = evt.getParent();
						if (target != player && target != evt.juetao_target) return false;
						return lib.filter.targetEnabledx(card, player, target);
					}).set('juetao_target', target);
					'step 3'
					if (result.bool && target.isIn()) event.goto(2);
				},
				mark: true,
				intro: {
					content: 'limited'
				},
				init: function (player, skill) {
					player.storage[skill] = false;
				}
			};
			/*神甘宁 劫营*/
			lib.skill.drlt_jieying = {
				audio: 2,
				locked: false,
				ai: {
					effect: {
						player: function (card, player, target) {
							if (get.name(card) == 'lebu' && get.attitude(player, target) < 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
						}
					}
				},
				global: 'drlt_jieying_mark',
				group: ['drlt_jieying_1', 'drlt_jieying_2', 'drlt_jieying_3'],
				subSkill: {
					1: {
						audio: 'drlt_jieying',
						trigger: {
							player: 'phaseZhunbeiBegin'
						},
						forced: true,
						filter: function (event, player) {
							return !game.hasPlayer(function (current) {
								return current.hasMark('drlt_jieying_mark');
							});
						},
						content: function () {
							player.addMark('drlt_jieying_mark', 1);
						}
					},
					2: {
						audio: 'drlt_jieying',
						trigger: {
							player: 'phaseJieshuBegin'
						},
						direct: true,
						filter: function (event, player) {
							return player.hasMark('drlt_jieying_mark');
						},
						content: function () {
							'step 0'
							player.chooseTarget(get.prompt('drlt_jieying'), '将“营”交给一名角色；其摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数上限+1且手牌上限+1。该角色回合结束后，其移去“营”标记，然后你获得其所有手牌。', function (card, player, target) {
								return target != player;
							}).ai = function (target) {
								if (get.attitude(player, target) > 0 && target.countCards('h') > 3 && (target.hp > 2 || (target.hp > 1 && target.getEquip(2)))) return 0.8 * target.countCards('h');
								if (get.attitude(player, target) < 1 && target.countCards('h') >= 0 && target.countCards('j', {name: 'lebu'}) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
								if (get.attitude(player, target) < 1 && target.countCards('h') > 0) {
									if (
										target.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: player,
												card: {name: 'sha'}
											},
											true
										)
									)
										return 0;
									if (target.getEquip('zhangba') || target.getEquip('guanshi')) return 0;
									if (
										player.countCards('e', function (card) {
											return get.subtype(card) == 'equip2' && get.name(card) != 'baiyin';
										}) &&
										!target.hasSkillTag('unequip_ai', false, {
											name:card?card.name:null,
											target:target,
											card:card
										})
									)
										return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
									if (player.countCards('h', {name: 'shan'}) > 1 && !target.getEquip('qinglong')) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
									if (!target.inRange(player)) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
								}
								return 0;
							};
							'step 1'
							if (result.bool) {
								var target = result.targets[0];
								player.line(target);
								player.logSkill('drlt_jieying', target);
								var mark = player.countMark('drlt_jieying_mark');
								player.removeMark('drlt_jieying_mark', mark);
								target.addMark('drlt_jieying_mark', mark);
							}
						}
					},
					3: {
						audio: 'drlt_jieying',
						trigger: {
							global: 'phaseEnd'
						},
						forced: true,
						filter: function (event, player) {
							return player != event.player && event.player.hasMark('drlt_jieying_mark') && event.player.isAlive();
						},
						logTarget: 'player',
						content: function () {
							if (trigger.player.countCards('h') > 0) {
								trigger.player.give(trigger.player.getCards('h'), player);
							}
							trigger.player.removeMark('drlt_jieying_mark', trigger.player.countMark('drlt_jieying_mark'));
						}
					}
				}
			};
			/*界颜良文丑 双雄*/
			lib.skill.reshuangxiong = {
				trigger: {
					player: 'phaseDrawBegin1'
				},
				group: 'reshuangxiong2',
				audio: 'shuangxiong',
				audioname: ['re_yanwen'],
				check: function (event, player) {
					if (player.countCards('h') > player.hp) return true;
					if (player.countCards('h') > 3) return true;
					return false;
				},
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					'step 0'
					trigger.changeToZero();
					event.cards = get.cards(2);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, id, cards) {
							var str;
							if (player == game.me && !_status.auto) {
								str = '【双雄】选择获得其中一张牌';
							} else {
								str = '双雄';
							}
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						event.videoId,
						event.cards
					);
					event.time = get.utc();
					game.addVideo('showCards', player, ['双雄', get.cardsInfo(event.cards)]);
					game.addVideo('delay', null, 2);
					'step 1'
					var next = player.chooseButton([1, 1], true);
					next.set('dialog', event.videoId);
					next.set('ai', function (button) {
						var player = _status.event.player;
						var color = get.color(button.link);
						var value = get.value(button.link, player);
						if (player.countCards('h', {color: color}) > player.countCards('h', ['red', 'black'].remove(color)[0])) value += 7;
						return value;
					});
					'step 2'
					if (result.bool && result.links) {
						var cards2 = [];
						for (var i = 0; i < result.links.length; i++) {
							cards2.push(result.links[i]);
							cards.remove(result.links[i]);
						}
						game.cardsDiscard(cards);
						event.card2 = cards2[0];
					}
					var time = 1000 - (get.utc() - event.time);
					if (time > 0) {
						game.delay(0, time);
					}
					'step 3'
					game.broadcastAll('closeDialog', event.videoId);
					var card2 = event.card2;
					player.gain(card2, 'gain2');
					player.addTempSkill('shuangxiong2');
					player.storage.shuangxiong = get.color(card2);
					player.storage.shuangxiong_m = '';
					num = player.storage.shuangxiong == 'red' ? '♠️️♣️️️决斗' : '♦️♥️决斗';
					player.addMark('shuangxiong_m', num);
				}
			};
			lib.skill.shuangxiong2 = {
				audio: true,
				audioname: ['re_yanwen'],
				enable: 'chooseToUse',
				prompt: function () {
					var player = _status.event.player;
					var str = '将一张' + (player.storage.shuangxiong != 'red' ? '红' : '黑') + '色手牌当做【决斗】使用';
					return str;
				},
				viewAs: {
					name: 'juedou'
				},
				position: 'hs',
				onremove: function (player) {
					player.removeMark('shuangxiong_m');
				},
				filterCard: function (card, player) {
					return get.color(card) != player.storage.shuangxiong;
				},
				check: function (card) {
					var player = _status.event.player;
					if (player.needsToDiscard() >= 2) return 15 - get.value(card);
					return 8 - get.value(card);
				},
				ai: {
					basic: {
						order: function () {
							var player = _status.event.player;
							if (
								player.hasCard(function (card) {
									return get.tag(card, 'gain') && get.color(card) == player.storage.shuangxiong && card.name == 'tiesuo';
								})
							)
								return 7.1;
							return 12;
						},
						useful: 1,
						value: 5.5
					},
					wuxie: function (target, card, player, viewer) {
						if (player == game.me && get.attitude(viewer, player) > 0) {
							return 0;
						}
					},
					result: {
						target: -1.5,
						player: function (player, target, card) {
							if (
								player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							) {
								return 0;
							}
							if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
								return 0;
							}
							var hs1 = target.getCards('h', 'sha');
							var hs2 = player.getCards('h', 'sha');
							if (hs1.length > hs2.length + 1) {
								return -2;
							}
							var hsx = target.getCards('h');
							if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
								return -2;
							}
							if (hsx.length > 3 && hs2.length == 0) {
								return -2;
							}
							if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
								return -2;
							}
							return -0.5;
						}
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1
					}
				}
			};
			/*谋孙权 统业*/
			lib.skill.sbtongye = {
				audio: 2,
				trigger: {
					player: 'phaseJieshuBegin'
				},
				forced: true,
				onremove: true,
				content: function () {
					'step 0'
					player.chooseControl('变化', '不变', function () {
						let player = _status.event.player;
						if (game.countPlayer() > 3) return '变化';
						if (game.countPlayer(function (current) {
							return current.hasCard({type: 'equip'}, 'e');
						}) < game.countPlayer()) return '变化';
						if (game.countPlayer() == 2 && game.countPlayer(function (current) {
							if (current != player) return current.countCards('e', {type: 'equip'}) + current.storage.disableEquip.length;
						}) == 5) return '不变';
						if (Math.random() < 0.3) return '变化';
						return '不变';
					}).set('prompt', '统业：猜测场上装备数是否于你下回合准备阶段前发生变化');
					'step 1'
					if (result.control == '变化') {
						player.addSkill('sbtongye_change', 1);
						player.chat('变！');
					} else {
						player.addSkill('sbtongye_nochange', 1);
						player.chat('不变！');
					}
					var num = game.filterPlayer().map((i) => i.countCards('e')).reduce((p, c) => p + c, 0);
					player.removeMark('sbtongye_count', player.countMark('sbtongye_count'), false);
					if (num > 0) player.addMark('sbtongye_count', num, false);
					player.addSkill('sbtongye_settle');
				},
				marktext: '业',
				intro: {
					name: '统业',
					name2: '业',
					content: 'mark'
				},
				subSkill: {
					broadcast: {
						trigger: {
							global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
						},
						charlotte: true,
						silent: true,
						filter: function (event, player) {
							var num = 0;
							game.countPlayer(function (current) {
								var evt = event.getl(current);
								if (evt && evt.es) num += evt.es.length;
							});
							if (event.name == 'equip') num--;
							return num != 0;
						},
						content: function () {
							if (player.hasSkill('sbtongye_change')) player.markSkill('sbtongye_change');
							if (player.hasSkill('sbtongye_nochange')) player.markSkill('sbtongye_nochange');
						},
						sub: true,
						forced: true,
						popup: false
					},
					settle: {
						audio: 'sbtongye',
						init: function (player) {
							player.addSkill('sbtongye_broadcast');
						},
						trigger: {
							player: 'phaseZhunbeiBegin'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return player.hasSkill('sbtongye_change') || player.hasSkill('sbtongye_nochange');
						},
						content: function () {
							var delta =
								game
									.filterPlayer()
									.map((i) => i.countCards('e'))
									.reduce((p, c) => p + c, 0) - player.countMark('sbtongye_count');
							if ((player.hasSkill('sbtongye_change') && delta != 0) || (player.hasSkill('sbtongye_nochange') && delta == 0)) {
								game.log(player, '猜测', '#g正确');
								if (player.countMark('sbtongye') < 2) player.addMark('sbtongye', 1);
							} else {
								game.log(player, '猜测', '#y错误');
								player.removeMark('sbtongye', 1);
							}
							player.removeSkill('sbtongye_change');
							player.removeSkill('sbtongye_nochange');
							player.removeSkill('sbtongye_settle');
							player.removeSkill('sbtongye_broadcast');
						},
						sub: true
					},
					change: {
						charlotte: true,
						mark: true,
						marktext: '变',
						intro: {
							markcount: function (storage, player) {
								return (
									game
										.filterPlayer()
										.map((i) => i.countCards('e'))
										.reduce((p, c) => p + c, 0) - player.countMark('sbtongye_count')
								);
							},
							mark: function (dialog, storage, player) {
								dialog.addText(get.translation(player) + '猜测场上装备数发生变化');
								var delta =
									game
										.filterPlayer()
										.map((i) => i.countCards('e'))
										.reduce((p, c) => p + c, 0) - player.countMark('sbtongye_count');
								if (delta == 0) dialog.addText('(当前未发生变化)');
								else dialog.addText('(当前已' + (delta > 0 ? '增加' : '减少') + get.cnNumber(Math.abs(delta)) + '张装备牌)');
							}
						},
						sub: true
					},
					nochange: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration:line-through;">变</span>',
						intro: {
							markcount: function (storage, player) {
								return (
									game
										.filterPlayer()
										.map((i) => i.countCards('e'))
										.reduce((p, c) => p + c, 0) - player.countMark('sbtongye_count')
								);
							},
							mark: function (dialog, storage, player) {
								dialog.addText(get.translation(player) + '猜测场上装备数不发生变化');
								var delta =
									game
										.filterPlayer()
										.map((i) => i.countCards('e'))
										.reduce((p, c) => p + c, 0) - player.countMark('sbtongye_count');
								if (delta == 0) dialog.addText('(当前未发生变化)');
								else dialog.addText('(当前已' + (delta > 0 ? '增加' : '减少') + get.cnNumber(Math.abs(delta)) + '张装备牌)');
							}
						},
						sub: true
					}
				}
			};
			/*山包界蔡文姬 悲歌*/
			lib.skill.olbeige.check = function (event, player) {
				if (event.player.hasSkill('xinleiji')) return get.attitude(player, event.player) > 0;
				if (get.attitude(player, event.player) < 0) {
					if (get.attitude(player, _status.currentPhase) && _status.currentPhase.isTurnedOver()) return true;
					return false;
				}
				return true;
			};
			/*刘辩 诗怨*/
			lib.skill.shiyuan = {
				audio: 2,
				trigger: {
					target: 'useCardToTargeted'
				},
				frequent: true,
				filter: function (event, player) {
					var num = 1;
					if (_status.currentPhase && _status.currentPhase != player && _status.currentPhase.group == 'qun' && player.hasZhuSkill('yuwei', _status.currentPhase)) num = 2;
					return (
						player != event.player &&
						player.getHistory('gain', function (evt) {
							return evt.getParent(2).name == 'shiyuan' && evt.cards.length == 2 + get.sgn(event.player.hp - player.hp);
						}).length < num
					);
				},
				content: function () {
					player.draw(2 + get.sgn(trigger.player.hp - player.hp));
				},
				ai: {
					threaten: 1,
					effect: {
						target: function (card, player, target) {
							var num = 1;
							if (player.group == 'qun') num = 2;
							if (get.tag(card, 'damage') || get.tag(card, 'lose')) {
								if (!target.hasFriend()) return;
								if (target == player) return;
								if (get.attitude(player, target) > 0) return;
								if (
									player.getHistory('gain', function (evt) {
										return evt.getParent(2).name == 'shiyuan' && evt.cards.length == 2 + get.sgn(target.hp - player.hp);
									}).length < num
								)
									return [1, 2 + get.sgn(player.hp - target.hp)];
							}
						}
					}
				}
			};
			/*旧曹冲 仁心*/
			lib.skill.oldrenxin = {
				trigger: {
					global: 'dying'
				},
				filter: function (event, player) {
					return event.player != player && event.player.hp <= 0 && player.countCards('h') > 0;
				},
				check: function (event, player) {
					if (get.attitude(player, event.player) <= 0) return false;
					if (player.countCards('h', {name: ['tao', 'jiu']}) + event.player.hp < 0) return false;
					return true;
				},
				content: function () {
					'step 0'
					player.turnOver();
					'step 1'
					player.give(player.getCards('h'), trigger.player);
					'step 2'
					trigger.player.recover();
				}
			};
			/*周宣 寤寐*/
			lib.skill.dcwumei = {
				audio: 2,
				trigger: {
					player: 'phaseBegin'
				},
				filter: function (event, player) {
					return !player.hasSkill('dcwumei_used');
				},
				priority: 10,
				direct: true,
				content: function () {
					'step 0'
					player.chooseTarget(get.prompt2('dcwumei')).set('ai', (target) => {
						return get.attitude(_status.event.player, target);
					});
					'step 1'
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill('dcwumei', target);
						player.addTempSkill('dcwumei_used', 'roundStart');
						target.insertPhase();
						target.addTempSkill('dcwumei_wake');
						var targets = game.filterPlayer();
						if (!target.storage.dcwumei_wake) target.storage.dcwumei_wake = [[], []];
						for (var targetx of targets) {
							target.storage.dcwumei_wake[0].push(targetx);
							target.storage.dcwumei_wake[1].push(targetx.hp);
						}
						target.markSkill('dcwumei_wake');
						if (!trigger._finished) {
							trigger.finish();
							trigger.untrigger(true);
							trigger._triggered = 5;
							var evt = player.insertPhase();
							delete evt.skill;
						}
					}
				},
				subSkill: {
					used: {
						charlotte: true,
						sub: true
					},
					wake: {
						trigger: {
							player: 'phaseJieshuBegin'
						},
						charlotte: true,
						popup: false,
						forced: true,
						onremove: true,
						filter: function (event, player) {
							return player.storage.dcwumei_wake && player.storage.dcwumei_wake.length;
						},
						content: function () {
							var storage = player.storage.dcwumei_wake;
							for (var i = 0; i < storage[0].length; i++) {
								var target = storage[0][i];
								if (target && target.isIn()) {
									if (target.hp != storage[1][i]) {
										game.log(target, '将体力从', get.cnNumber(target.hp, true), '改为', get.cnNumber(storage[1][i], true));
										target.changeHp(storage[1][i] - target.hp)._triggered = null;
									}
								}
							}
							player.removeSkill('dcwumei_wake');
						},
						marktext: '寐',
						intro: {
							markcount: function (storage, player) {
								if (!storage || !storage.length) return 0;
								return storage[0].length;
							},
							content: function (storage, player) {
								if (!storage || !storage.length) return '无信息';
								var str = '所有角色于回合开始时的体力值：<br>';
								for (var i = 0; i < storage[0].length; i++) {
									var str2 = get.translation(storage[0][i]) + '：' + storage[1][i];
									if (!storage[0][i].isIn()) str2 = '<span style="opacity:0.5">' + str2 + '（已故）</span>';
									str += '<li>' + str2;
								}
								return str;
							}
						},
						ai: {
							effect: {
								player_use: function (card, player, target) {
									if (get.tag(card, 'damage')) return 0.5;
								},
								target: function (card, player, target) {
									var tri = _status.event.getTrigger();
									if (get.tag(card, 'recover') && target.hp > 0) {
										if (get.name(card) != 'jiu') return 'zeroplayertarget';
									}
								}
							}
						},
						sub: true
					}
				}
			};
			/*马休马铁 垦伤*/
			lib.skill.rekenshang = {
				audio: 'olkenshang',
				enable: 'chooseToUse',
				filterCard: true,
				selectCard: [2, Infinity],
				viewAsFilter: function (player) {
					return player.countCards('hes') > 1;
				},
				check: function (card) {
					var player = _status.event.player;
					if (
						game.countPlayer(function (current) {
							return (
								current != player &&
								player.canUse('sha', current) &&
								get.effect(
									current,
									{
										name: 'sha'
									},
									player,
									player
								) > 0
							);
						}) <= ui.selected.cards.length
					)
						return 0;
					if (_status.event.player.countCards('hes') >= 3) return 8 - ui.selected.cards.length - get.value(card);
					return 6 - ui.selected.cards.length - get.value(card);
				},
				position: 'hes',
				viewAs: {
					name: 'sha',
					storage: {
						olkenshang: true
					}
				},
				onuse: function (links, player) {
					player.addTempSkill('rekenshang_effect');
				},
				ai: {
					order: function (item, player) {
						if (player.countCards('hes') >= 3) {
							return 6;
						}
						return 4;
					},
					respondSha: true,
					skillTagFilter: (player) => player.countCards('hes') > 1,
					yingbian: function (card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						var base = 0,
							hit = false;
						if (get.cardtag(card, 'yingbian_hit')) {
							hit = true;
							if (
								targets.filter(function (target) {
									return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
								})
							)
								base += 5;
						}
						if (get.cardtag(card, 'yingbian_all')) {
							if (
								game.hasPlayer(function (current) {
									return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
								})
							)
								base += 5;
						}
						if (get.cardtag(card, 'yingbian_damage')) {
							if (
								targets.filter(function (target) {
									return (
										get.attitude(player, target) < 0 &&
										(hit ||
											!target.mayHaveShan() ||
											player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: card
												},
												true
											)) &&
										!target.hasSkillTag('filterDamage', null, {
											player: player,
											card: card,
											jiu: true
										})
									);
								})
							)
								base += 5;
						}
						return base;
					},
					canLink: function (player, target, card) {
						if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
						if (
							target.mayHaveShan() &&
							!player.hasSkillTag(
								'directHit_ai',
								true,
								{
									target: target,
									card: card
								},
								true
							)
						)
							return false;
						if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
						return true;
					},
					basic: {
						useful: [5, 3, 1],
						value: [5, 3, 1]
					},
					result: {
						target: function (player, target, card, isLink) {
							var eff = (function () {
								if (!isLink && player.hasSkill('jiu')) {
									if (
										!target.hasSkillTag('filterDamage', null, {
											player: player,
											card: card,
											jiu: true
										})
									) {
										if (get.attitude(player, target) > 0) {
											return -7;
										} else {
											return -4;
										}
									}
									return -0.5;
								}
								return -1.5;
							})();
							if (
								!isLink &&
								target.mayHaveShan() &&
								!player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card
									},
									true
								)
							)
								return eff / 1.2;
							return eff;
						}
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: function (card) {
							if (card.nature == 'poison') return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature) return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == 'fire') return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == 'thunder') return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == 'poison') return 1;
						}
					}
				},
				subSkill: {
					effect: {
						audio: 'olkenshang',
						trigger: {
							player: 'useCard2'
						},
						charlotte: true,
						group: 'rekenshang_after',
						direct: true,
						filter: function (event, player) {
							return (
								event.card.storage &&
								event.card.storage.olkenshang &&
								game.countPlayer(function (current) {
									return current != player && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
								}) >= event.cards.length
							);
						},
						content: function () {
							'step 0'
							player
								.chooseTarget(trigger.cards.length, '是否更改' + get.translation(trigger.card) + '的目标？', '选择' + get.cnNumber(trigger.cards.length) + '名角色作为' + get.translation(trigger.card) + '的目标，覆盖原先存在的目标', function (card, player, target) {
									var evt = _status.event.getTrigger();
									return target != player && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
								})
								.set('ai', function (target) {
									var evt = _status.event.getTrigger();
									return get.effect(target, evt.card, evt.player, evt.player);
								});
							'step 1'
							if (result.bool) {
								if (player != event.player && !player.isOnline()) game.delayx();
							} else event.finish();
							'step 2'
							var targets = result.targets;
							player.logSkill('rekenshang_effect', targets);
							trigger.targets.length = 0;
							trigger.targets.addArray(targets);
							game.log(targets, '成为了', trigger.card, '的新目标');
						},
						sub: true
					},
					after: {
						audio: 'olkenshang',
						trigger: {
							player: 'useCardAfter'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							if (event.card.name != 'sha' || !event.card.storage || !event.card.storage.olkenshang) return false;
							var num = 0;
							game.countPlayer2((current) => {
								current.getHistory('damage', (evt) => {
									if (evt.card == event.card) num += evt.num;
								});
							});
							return num < event.cards.length;
						},
						content: function () {
							player.draw();
						},
						sub: true
					}
				}
			};
			/*王瓘 谬焰*/
			lib.skill.olmiuyan = {
				audio: 2,
				enable: 'chooseToUse',
				viewAsFilter: function (player) {
					return !player.hasSkill('olmiuyan_blocker') && player.hasCard((card) => get.color(card) == 'black', 'hes');
				},
				viewAs: {
					name: 'huogong'
				},
				filterCard: {
					color: 'black'
				},
				position: 'hes',
				check: function (card) {
					var player = _status.event.player,
						suits = lib.suit.slice(0);
					if (
						player.countCards('h') >= 4 &&
						player.hasCard(function (card) {
							suits.remove(get.suit(card));
							return suits.length == 0;
						}, 'h')
					)
						return 8 - get.value(card);
					return 6 - get.value(card);
				},
				promptfunc: function () {
					if (_status.event.player.storage.olmiuyan) return '转换技。你可以将一张黑色牌当做【火攻】使用。若此牌未造成伤害，则你令此技能失效直到本轮结束。';
					return '转换技。你可以将一张黑色牌当做【火攻】使用。若此牌造成了伤害，则你获得此阶段内所有被展示过的牌。';
				},
				precontent: function () {
					player.changeZhuanhuanji('olmiuyan');
					var card = event.result.card;
					if (!card.storage) card.storage = {};
					if (player.storage.olmiuyan) {
						card.storage.olmiuyan_gain = true;
						player.addTempSkill('olmiuyan_gain');
					} else {
						card.storage.olmiuyan_remove = true;
						player.addTempSkill('olmiuyan_remove');
					}
				},
				init: function (player) {
					player.addSkill('olmiuyan_counter');
				},
				onremove: function (player) {
					player.removeSkill('olmiuyan_counter');
				},
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				ai: {
					order: function (item, player) {
						if (player.storage.olmiuyan) return 6;
						if (player.countCards('h') >= 4) return 8;
						return 7;
					},
					basic: {
						order: 4,
						value: [3, 1],
						useful: 1
					},
					wuxie: function (target, card, player, current, state) {
						if (get.attitude(current, player) >= 0 && state > 0) return false;
					},
					result: {
						player: function (player) {
							var nh = player.countCards('h');
							if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
								if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({name: 'huogong'}, player, _status.event)) {
									return -10;
								}
								if (_status.event.skill) {
									var viewAs = get.info(_status.event.skill).viewAs;
									if (viewAs == 'huogong') return -10;
									if (viewAs && viewAs.name == 'huogong') return -10;
								}
							}
							return 0;
						},
						target: function (player, target) {
							if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
							if (player.countCards('h') <= 1) return 0;
							if (target == player) {
								if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({name: 'huogong'}, player, _status.event)) {
									return -1.15;
								}
								if (_status.event.skill) {
									var viewAs = get.info(_status.event.skill).viewAs;
									if (viewAs == 'huogong') return -1.15;
									if (viewAs && viewAs.name == 'huogong') return -1.15;
								}
								return 0;
							}
							return -1.15;
						}
					},
					tag: {
						damage: 1,
						fireDamage: 1,
						natureDamage: 1,
						norepeat: 1
					}
				},
				intro: {
					content: function (storage) {
						if (storage) return '转换技。你可以将一张黑色牌当做【火攻】使用。然后若此牌未造成伤害，则你令此技能失效直到本轮结束。';
						return '转换技。你可以将一张黑色牌当做【火攻】使用。然后若此牌造成了伤害，则你获得此阶段内所有被展示过的牌。';
					}
				},
				subSkill: {
					counter: {
						trigger: {
							global: ['showCardsEnd', 'phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore']
						},
						forced: true,
						charlotte: true,
						popup: false,
						firstDo: true,
						filter: function (event, player) {
							if (event.name == 'showCards') return get.itemtype(event.cards) == 'cards';
							return true;
						},
						content: function () {
							if (trigger.name == 'showCards') {
								game.broadcastAll(function (cards) {
									cards.forEach((card) => card.addGaintag('olmiuyan_tag'));
								}, trigger.cards);
							} else game.players.forEach((current) => current.removeGaintag('olmiuyan_tag'));
						},
						sub: true
					},
					gain: {
						trigger: {
							player: 'useCardAfter'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return (
								event.card.storage &&
								event.card.storage.olmiuyan_gain &&
								player.hasHistory('sourceDamage', function (evt) {
									return evt.card == event.card;
								}) &&
								game.hasPlayer(function (current) {
									return current != player && current.hasCard((card) => card.hasGaintag('olmiuyan_tag'));
								})
							);
						},
						logTarget: function (event, player) {
							return game.filterPlayer(function (current) {
								return current != player && current.hasCard((card) => card.hasGaintag('olmiuyan_tag'));
							});
						},
						content: function () {
							var cards = [],
								players = game.filterPlayer((current) => current != player).sortBySeat();
							players.forEach((current) => {
								var cardsx = current.getCards('h', function (card) {
									return card.hasGaintag('olmiuyan_tag');
								});
								if (cardsx.length) cards.addArray(cardsx);
							});
							player.gain(cards, 'give');
						},
						sub: true
					},
					remove: {
						trigger: {
							player: 'useCardAfter'
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return (
								event.card.storage &&
								event.card.storage.olmiuyan_remove &&
								!player.hasHistory('sourceDamage', function (evt) {
									return evt.card == event.card;
								})
							);
						},
						content: function () {
							player.addTempSkill('olmiuyan_blocker', 'roundStart');
							game.log(player, '的', '#g【谬焰】', '失效了');
						},
						sub: true
					},
					blocker: {
						charlotte: true,
						sub: true
					}
				}
			};
			/*曹冲 称象*/
			lib.skill.chengxiang={
				trigger:{player:'damageEnd'},
				frequent:true,
				audio:2,
				content:function(){
					"step 0"
					event.cards=get.cards(4);
					game.cardsGotoOrdering(event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards,num){
						var str;
						if(player==game.me&&!_status.auto){
							str='称象：选择任意张点数不大于'+num+'的牌';
						}
						else{
							str='称象';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards,event.name=='chengxiang'?13:12);
					event.time=get.utc();
					game.addVideo('showCards',player,['称象',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var next=player.chooseButton([0,4]);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						var num=0
						for(var i=0;i<ui.selected.buttons.length;i++){
							num+=get.number(ui.selected.buttons[i].link);
						}
						return (num+get.number(button.link)<=_status.event.maxNum);
					});
					next.set('maxNum',event.name=='chengxiang'?13:12);
					next.set('ai',function(button){
						let val=get.value(button.link,_status.event.player);
						if (get.name(button.link) == 'tao') return val + 2*Math.min(3,1+player.getDamagedHp());
						if (get.name(button.link) == 'jiu') return val + 2*Math.min(2,player.getDamagedHp());
						if (player.countCards('j') && !player.hasWuxie() && get.name(button.link) == 'wuxie') return val + 5;
						if (player.hasSkill('renxin') && player.hp > 1 && player.hasFriend() && get.type(button.link) == 'equip') return val + 4;
						return val;
					});
					"step 2"
					if(result.bool&&result.links){
						//player.logSkill('chengxiang');
						var cards2=[];
						for(var i=0;i<result.links.length;i++){
							cards2.push(result.links[i]);
							cards.remove(result.links[i]);
						}
						event.cards2=cards2;
					}
					else{
						event.finish();
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					player.gain(cards2,'log','gain2');
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [1,2];
								if(target.hp==3) return [1,1.5];
								if(target.hp==2) return [1,0.5];
							}
						}
					}
				}
			};
			/*藤芳兰 落宠*/
			lib.skill.dcluochong = {
				audio: 2,
				trigger: {global: 'roundStart'},
				filter: function (event, player) {
					return game.hasPlayer((current) => current.countDiscardableCards(player, 'hej') > 0);
				},
				direct: true,
				content: function () {
					'step 0'
					var num = 4 - player.countMark('dcluochong');
					var dialog = [];
					dialog.push('###' + get.prompt('dcluochong') + '###<div class="text center">弃置任意名角色区域内共计至多' + get.cnNumber(num) + '张牌</div>');
					game.filterPlayer().sortBySeat().forEach((target) => {
						if (target.countDiscardableCards(player, 'hej') <= 0) return false;
						let name = target == player ? '你' : get.translation(target);
						if (target.countCards('h')) {
							dialog.add('<div class="text center">' + name + '的手牌区</div>');
							if (player.hasSkillTag('viewHandcard', null, target, true) || player == target) dialog.push(target.getCards('h'));
							else dialog.push([target.getCards('h'), 'blank']);
						}
						if (target.countCards('e')) dialog.addArray(['<div class="text center">' + name + '的装备区</div>', target.getCards('e')]);
						if (target.countCards('j')) dialog.addArray(['<div class="text center">' + name + '的判定区</div>', target.getCards('j')]);
					});
					player.chooseButton([1, num]).set('createDialog', dialog).set('filterButton', (button) => {
						return lib.filter.canBeDiscarded(button.link, _status.event.player, get.owner(button.link));
					}).set('ai', (button) => {
						let card = button.link;
						let player = _status.event.player, target = get.owner(card);
						if (target == player && ui.cardPile.childNodes.length > 80) {
							var num = ui.selected.buttons.filter((i) => get.owner(i.link) == player).length;
							if (player.countCards('j') <= 1 && num > 0) return 0;
							if (player.countCards('j') == 2 && num > 1) return 0;
							if (player.countCards('j') <= 0 && get.type(card) == 'equip' && player.countCards('he', (cardx) => {
								let stp = get.subtype(card);
								return cardx != card && get.subtype(cardx) == stp;
							})) return 70 - get.value(card, player);
							else if (get.value(card, player) < 6 && get.type(card) != 'equip') return 60 - get.value(card, player);
							return 0;
						}
						var num = ui.selected.buttons.filter((i) => get.owner(i.link) == target).length;
						var dr = game.countPlayer((current) => get.attitude(player, current) < 0);
						var mark = 4 - player.countMark('dcluochong');
						if (get.position(card) == 'j') return 10 * get.attitude(player, target) * get.value(card, target);
						else {
							if (dr == 1) {
								if (get.mode() == 'identity' && game.roundNumber == 1 && num <= 1) return -get.attitude(player, target) * get.value(card, target);
								if (mark <= 3 && num <= 1) return -get.attitude(player, target) * get.value(card, target);
								if (mark > 3 && !(get.mode() == 'identity' && game.roundNumber == 1)) return -get.attitude(player, target) * get.value(card, target);
							}
							else if (num <= 1) {
								if (num > 0) return -2 * get.attitude(player, target) * get.value(card, target);
								return -get.attitude(player, target) * get.value(card, target);
							}
						}
					});
					'step 1'
					if (result.bool) {
						var links = result.links;
						var lose_list = [];
						var log = false;
						for (var target of game.players) {
							var cards = links.filter((card) => get.owner(card) == target);
							if (cards.length) {
								if (cards.length > 2) {
									player.addMark('dcluochong', 1, false);
									log = true;
								}
								lose_list.push([target, cards]);
							}
						}
						player.logSkill(
							'dcluochong',
							lose_list.map((i) => i[0])
						);
						if (log) game.log(player, '可弃置牌数', '#g-1');
						if (lose_list[0].length == 1) lose_list[0][0].discard(lose_list[0][1]);
						else {
							game.loseAsync({
								lose_list: lose_list,
								discarder: player
							}).setContent('discardMultiple');
						}
					}
				},
				ai: {
					threaten: 2.5,
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == 'delay' && current < 0) {
								var current = _status.currentPhase;
								if (current.getSeatNum() > target.getSeatNum()) return 'zerotarget';
							}
						}
					}
				}
			};
			/*辣个男人 激昂*/
			lib.skill.oljiang = {
				audio: 'jiang',
				inherit: 'jiang',
				group: 'oljiang_gain',
				subSkill: {
					gain: {
						audio: 'jiang',
						audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
						trigger: {
							global: ['loseAfter', 'loseAsyncAfter']
						},
						usable: 1,
						filter: function (event, player) {
							if (player.hp < 1 || event.type != 'discard' || event.position != ui.discardPile) return false;
							var filter = (card) => card.name == 'juedou' || (card.name == 'sha' && get.color(card, false) == 'red');
							var cards = event.getd().filter(filter);
							if (!cards.filter((card) => get.position(card, true) == 'd').length) return false;
							var searched = false;
							if (
								game.getGlobalHistory('cardMove', function (evt) {
									if (searched || evt.type != 'discard' || evt.position != ui.discardPile) return false;
									var evtx = evt;
									if (evtx.getlx === false) evtx = evt.getParent();
									var cards = evtx.getd().filter(filter);
									if (!cards.length) return false;
									searched = true;
									return evtx != event;
								}).length > 0
							)
								return false;
							return true;
						},
						prompt2: function (event, player) {
							var cards = event.getd().filter(function (card) {
								return (card.name == 'juedou' || (card.name == 'sha' && get.color(card, false) == 'red')) && get.position(card, true) == 'd';
							});
							return '失去1点体力并获得' + get.translation(cards);
						},
						check: function (event, player) {
							return player.hp > 1 && !player.storage.olhunzi;
						},
						content: function () {
							player.loseHp();
							var cards = trigger.getd().filter(function (card) {
								return (card.name == 'juedou' || (card.name == 'sha' && get.color(card, false) == 'red')) && get.position(card, true) == 'd';
							});
							if (cards.length > 0) player.gain(cards, 'gain2');
						},
						sub: true
					}
				},
				shaRelated: true,
				preHidden: true,
				audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted'
				},
				filter: function (event, player) {
					if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
					return player == event.target || event.getParent().triggeredTargets3.length == 1;
				},
				frequent: true,
				content: function () {
					player.draw();
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (get.color(card) == 'red' && get.name(card) == 'sha') return get.order({name: 'sha'}) + 0.1;
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.color(card) == 'red' && get.name(card) == 'sha' && get.attitude(player, target) < 0) return [1, 1.5];
						},
						player: function (card, player, target) {
							if (get.color(card) == 'red' && get.name(card) == 'sha' && get.attitude(player, target) < 0) return [1, 1.5];
						}
					}
				}
			};
			lib.skill.jiang = {
				shaRelated: true,
				audio: 2,
				preHidden: true,
				audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted'
				},
				filter: function (event, player) {
					if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
					return player == event.target || event.getParent().triggeredTargets3.length == 1;
				},
				frequent: true,
				content: function () {
					player.draw();
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (get.color(card) == 'red' && get.name(card) == 'sha') return get.order({name: 'sha'}) + 0.1;
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.color(card) == 'red' && get.name(card) == 'sha' && get.attitude(player, target) < 0) return [1, 1.5];
						},
						player: function (card, player, target) {
							if (get.color(card) == 'red' && get.name(card) == 'sha' && get.attitude(player, target) < 0) return [1, 1.5];
						}
					}
				}
			};
			/*界陆逊 谦逊*/
			lib.skill.reqianxun.ai = {
				effect: function (card, player, target) {
					if (!target.hasFriend()) return;
					if (player == target) return;
					var type = get.type(card);
					var dy = game.countPlayer((current) => get.attitude(target, current) > 0);
					var nh = target.countCards();
					if (get.attitude(player, target) <= 0) {
						if (type == 'trick') {
							if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
								if (get.tag(card, 'damage')) {
									if (nh < 3 || target.hp <= 2) return 0.8;
								} else {
									if (nh >= dy) return [1, dy / 1.2];
									return [1, nh / 1.2];
								}
							}
						} else if (type == 'delay') {
							return [0.5, 0.5];
						}
					}
				}
			};
			/*徐氏 问卦*/
			lib.skill.wengua2 = {
				audio: 'wengua',
				enable: 'phaseUse',
				filter: function (event, player) {
					if (player.hasSkill('wengua3')) return false;
					return (
						player.countCards('he') &&
						game.hasPlayer(function (current) {
							return current.hasSkill('wengua');
						})
					);
				},
				direct: true,
				delay: false,
				filterCard: true,
				discard: false,
				lose: false,
				position: 'he',
				prompt: function () {
					var player = _status.event.player;
					var list = game.filterPlayer(function (current) {
						return current.hasSkill('wengua');
					});
					if (list.length == 1 && list[0] == player) return '将一张牌置于牌堆顶或是牌堆底';
					var str = '将一张牌交给' + get.translation(list);
					if (list.length > 1) str += '中的一人';
					return str;
				},
				check: function (card) {
					if (card.name == 'sha') return 5;
					return 8 - get.value(card);
				},
				content: function () {
					'step 0'
					var targets = game.filterPlayer(function (current) {
						return current.hasSkill('wengua');
					});
					if (targets.length == 1) {
						event.target = targets[0];
						event.goto(2);
					} else if (targets.length > 0) {
						player
							.chooseTarget(true, '选择【问卦】的目标', function (card, player, target) {
								return _status.event.list.contains(target);
							})
							.set('list', targets)
							.set('ai', function (target) {
								var player = _status.event.player;
								return get.attitude(player, target);
							});
					} else {
						event.finish();
					}
					'step 1'
					if (result.bool && result.targets.length) {
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					'step 2'
					if (event.target) {
						player.logSkill('wengua', event.target);
						player.addTempSkill('wengua3', 'phaseUseEnd');
						event.card = cards[0];
						if (event.target != player) {
							player.give(cards, event.target);
						}
					} else {
						event.finish();
					}
					delete _status.noclearcountdown;
					game.stopCountChoose();
					'step 3'
					if (event.target.getCards('he').contains(event.card)) {
						event.target.chooseControlList('问卦', '将' + get.translation(event.card) + '置于牌堆顶', '将' + get.translation(event.card) + '置于牌堆底', event.target == player, function () {
							if (get.attitude(event.target, player) < 0) return 2;
							return 1;
						});
					} else {
						event.finish();
					}
					'step 4'
					event.index = result.index;
					if (event.index == 0 || event.index == 1) {
						var next = event.target.lose(event.card, ui.cardPile);
						if (event.index == 0) next.insert_card = true;
						game.broadcastAll(function (player) {
							var cardx = ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx, 1000, 'nobroadcast');
						}, event.target);
					} else event.finish();
					'step 5'
					game.delay();
					'step 6'
					if (event.index == 1) {
						game.log(event.target, '将获得的牌置于牌堆底');
						if (ui.cardPile.childElementCount == 1 || player == event.target) {
							player.draw();
						} else {
							game.asyncDraw([player, target], null, null);
						}
					} else if (event.index == 0) {
						game.log(player, '将获得的牌置于牌堆顶');
						if (ui.cardPile.childElementCount == 1 || player == event.target) {
							player.draw('bottom');
						} else {
							game.asyncDraw([player, target], null, null, true);
						}
					}
				},
				ai: {
					order: function (item, player) {
						if (player.countCards('hs', 'sha') > 1) return get.order({name: 'sha'}) + 1;
						if (player.countCards('hs', 'sha') <= 1) return 2;
					},
					threaten: 1.5,
					result: {
						player: function (player, target) {
							var target = game.findPlayer(function (current) {
								return current.hasSkill('wengua');
							});
							if (target) {
								return get.attitude(player, target);
							}
						}
					}
				}
			};
			/*张华 弼昏 剑合*/
			lib.skill.olbihun = {
				audio: 2,
				trigger: {
					player: 'useCardToPlayer'
				},
				forced: true,
				filter: function (event, player) {
					return event.isFirstTarget && player.countCards('h') > player.getHandcardLimit() && event.targets.some((target) => target != player);
				},
				content: function () {
					if (trigger.targets.length == 1) {
						var cards = trigger.cards.filterInD();
						if (cards.length) {
							game.delayx();
							trigger.targets[0].gain(cards, 'gain2');
						}
					}
					var targets = trigger.targets.filter((target) => target != player);
					trigger.targets.removeArray(targets);
					trigger.getParent().triggeredTargets1.removeArray(targets);
				},
				ai: {
					threaten: 0.8,
					halfneg: true,
					effect: {
						player: function (card, player, target) {
							if ((!card.isCard || !card.cards) && get.itemtype(card) != 'card') return;
							if (target && player != target && player.countCards('h') > player.getHandcardLimit() + 1) {
								if (get.attitude(player, target) > 0) return [0, 0, 0, 0.5];
								return [0, -1, 0, 5];
							}
						}
					}
				}
			};
			lib.skill.oljianhe = {
				audio: 2,
				enable: 'phaseUse',
				filterTarget: function (card, player, target) {
					return !player.getStorage('oljianhe_chosen').contains(target);
				},
				filterCard: function (card, player) {
					if (ui.selected.cards.length) {
						var cardx = ui.selected.cards[0];
						if (get.type(cardx) == 'equip') return get.type(card) == 'equip';
						return get.name(card) == get.name(cardx);
					}
					var cards = player.getCards('he');
					for (var cardx of cards) {
						if (card != cardx) {
							if (get.type(cardx) == 'equip' && get.type(card) == 'equip') return true;
							if (get.name(card) == get.name(cardx)) return true;
						}
					}
					return false;
				},
				selectCard: [2, Infinity],
				position: 'he',
				complexCard: true,
				discard: false,
				visible: true,
				prepare: 'throw',
				loseTo: 'discardPile',
				delay: 0.5,
				check: function (card) {
					var player = _status.event.player;
					var cards = player.getCards('he', (card) => get.subtype(card) == 'equip1');
					cards = cards.sort(function (a, b) {
						return get.value(b) - get.value(a);
					});
					if (get.type(card) == 'equip') {
						if (get.subtype(card) == 'equip1' && card == cards[0]) return 0;
						return 15 - get.value(card);
					} else {
						if (!player.hasValueTarget(card)) return 20 - get.value(card);
						return 7 - get.value(card);
					}
				},
				content: function () {
					'step 0'
					player.draw(cards.length);
					player.addTempSkill('oljianhe_chosen', 'phaseUseAfter');
					player.markAuto('oljianhe_chosen', [target]);
					'step 1'
					var type = get.type2(cards[0]);
					target.chooseCard(get.translation(player) + '对你发动了【剑合】', '请重铸' + get.cnNumber(cards.length) + '张' + get.translation(type) + '牌，或点“取消”受到1点雷电伤害', cards.length, 'he', (card, player, target) => {
						return get.type2(card) == _status.event.type;
					}).set('ai', (card) => {
						if (_status.event.goon) return (get.type(card) == 'equip' ? 15 : 7) - get.value(card);
						return 0;
					}).set('type', type).set('goon', get.damageEffect(target, player, target, 'thunder') < 0);
					'step 2'
					if (result.bool) {
						var cards = result.cards;
						target.loseToDiscardpile(cards);
						target.draw(cards.length);
					} else {
						target.damage(player, 'thunder');
					}
					'step 3'
					game.delayx();
				},
				ai: {
					order: function (item, player) {
						if (player.hasSkill('olbihun') && player.countCards('h') - player.countCards('h', (card) => player.hasValueTarget(card)) > player.getHandcardLimit()) return 11;
						return 4;
					},
					threaten: 2.4,
					expose: 0.1,
					result: {
						target: function (player, target) {
							var cards = ui.selected.cards,
								type = get.type2(cards[0]);
							if (
								target.countCards('he', (card) => {
									return get.type(card) == type && get.value(card) <= 5;
								}) >= cards.length
							)
								return 1;
							return -1;
						}
					}
				},
				subSkill: {
					chosen: {
						charlotte: true,
						onremove: true,
						intro: {
							content: '本阶段已对$发动过技能'
						},
						sub: true
					}
				}
			};
			/*司马懿 反馈*/
			lib.skill.refankui = {
				audio: 2,
				trigger: {
					player: 'damageEnd'
				},
				direct: true,
				filter: function (event, player) {
					return event.source && event.source.countGainableCards(player, event.source != player ? 'he' : 'e') && event.num > 0;
				},
				content: function () {
					'step 0'
					event.count = trigger.num;
					'step 1'
					event.count--;
					player.gainPlayerCard(get.prompt('refankui', trigger.source), trigger.source, get.buttonValue, trigger.source != player ? 'he' : 'e').set('ai', function (target) {
						if (get.attitude(_status.event.player, trigger.source) > 0) return false;
						if (get.attitude(_status.event.player, trigger.source) <= 0) return true;
					}).set('logSkill', [event.name, trigger.source]);
					'step 2'
					if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, trigger.source != player ? 'he' : 'e') > 0) event.goto(1);
				},
				ai: {
					maixie_defend: true,
					effect: {
						target: function (card, player, target) {
							if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
								if (get.attitude(target, player) < 0) return [1, 1];
							}
						}
					}
				}
			};
			/*本体武将技能优化*/
		}

		lib.skill._aiyh_firstKs = {
			trigger: {global: 'gameStart'},
			silent: true,
			unique: true,
			firstDo: true,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				if(lib.config.extension_AI优化_btAi=='gjcx') player.addSkill('aiyh_gjcx_qj');
				if (get.mode() == 'identity' && _status.mode != 'zhong' && _status.mode != 'purple') {
					//身份局ai
					if (game.players.length == 4 && lib.config.extension_AI优化_fixFour) {
						if (player.identity == 'zhu') {
							player.maxHp = player.maxHp + 1;
							player.hp = player.hp + 1;
						} else if (player.identity == 'zhong') {
							game.broadcastAll(
								function (player, shown) {
									player.identity = 'fan';
									if (shown || player == game.me) player.setIdentity();
								},
								player,
								player.identityShown
							);
						}
						player.update();
					}
					if (player.identity == 'nei' && lib.config.extension_AI优化_sfjAi == 'gjcx') {
						player.addSkill('gjcx_neiAi');
						player.addSkill('gjcx_neiAi_expose');
						player.addSkill('gjcx_neiAi_damage');
					}
					if (lib.config.extension_AI优化_sfjAi == 'gjcx') if (player == game.zhu) player.addSkill('gjcx_zhuAi');
				}
				if (!_status.gjcxlist) {
					//未上场角色池
					let list = [];
					if (_status.connectMode) list = get.charactersOL();
					else {
						for (let i in lib.character) {
							if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
					}
					game.countPlayer2(function (current) {
						list.remove(current.name);
						list.remove(current.name1);
						list.remove(current.name2);
					});
					_status.gjcxlist = list;
				}
			},
			ai: {
				effect: {
					target: function (card, player, target) {
						if (!lib.config.extension_AI优化_qzCf || get.itemtype(target) != 'player') return;
						let base1 = 1;
						if (typeof lib.config.extension_AI优化_qz[target.name] == 'number') base1 = lib.config.extension_AI优化_qz[target.name];
						if (target.name2 != undefined && typeof lib.config.extension_AI优化_qz[target.name2] == 'number') return base1 + lib.config.extension_AI优化_qz[target.name2];
						return base1;
					}
				}
			}
		};
		lib.skill.aiyh_gjcx_qj={
			mod: {
				aiOrder: function (player, card, num) {
					if (player && !player._aiyh_order_temp && get.itemtype(card) == 'card' && get.position(card) != 'e') {
						player._aiyh_order_temp = true;
						let dis = player.needsToDiscard(), equipValue = get.equipValue(card, player);
						if (lib.config.extension_AI优化_fixZq && (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') && !player.isDisabled(6)) {
							if (player.hasSkillTag('reverseEquip')){
								delete player._aiyh_order_temp;
								return 8.5 - equipValue / 20;
							}
							let value = 0,
								val = get.value(card),
								info = get.info(card),
								current1 = player.getEquip(3),
								current2 = player.getEquip(4);
							if (current1) value = get.value(current1, player);
							else if (current2) value = get.value(current2, player);
							delete player._aiyh_order_temp;
							if (val <= value || (get.subtype(card) == 'equip3' && player.getEquip(4) && (dis || player.hp > 2) && !player.getEquip(1)) || (get.subtype(card) == 'equip4' && player.getEquip(3) && (dis || player.hp < 3))) return 0;
							return 8 + equipValue / 20;
						}
						if (get.type(card) == 'equip') {
							let ec = player.getEquip(get.subtype(card)),
								ev;
							if (ec) {
								ev = equipValue - get.equipValue(ec, player);
								if (ev <= Math.max(0, 2 - dis)){
									delete player._aiyh_order_temp;
									return 0;
								}
							}
						}
						delete player._aiyh_order_temp;
						if (num > 0 && typeof card.number == 'number') return Math.max(0.01, num - (get.number(card) - 5) / 50);
					}
				},
				aiUseful: function (player, card, num) {
					if (get.itemtype(card) == 'card') {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						if (num > 0 && typeof card.number == 'number') return Math.max(0.01, num + (get.number(card) - 5) / 50);
					}
				},
				aiValue: function (player, card, num) {
					if (player && !player._aiyh_value_temp && get.itemtype(card) == 'card') {
						if (player.isDisabled(get.subtype(card))) return 0.1 * num;
						if (lib.config.extension_AI优化_fixZq && get.position(card) != 'e' && (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') && !player.isDisabled(6)) {
							if (get.subtype(card) == 'equip3' && !player.getEquip(3) && player.hp < 3) return;
							player._aiyh_value_temp = true;
							let value = 0;
							let info = get.info(card);
							let current1 = player.getEquip(3),
								current2 = player.getEquip(4);
							if (current1) value = get.value(current1, player);
							else if (current2) value = get.value(current2, player);
							delete player._aiyh_value_temp;
							return Math.max(0.1, num - value);
						}
						if (num > 0 && typeof card.number == 'number') return Math.max(0.01, num + (get.number(card) - 5) / 50);
					}
				}
			},
			charlotte:true,
			superCharlotte:true,
		};
		//功能
		lib.skill._aiyh_nhFriends = {//AI不砍队友
			silent: true,
			unique: true,
			charlotte: true,
			superCharlotte: true,
			ai: {
				effect: {
					player: function (card, player, target) {
						if(lib.config.extension_AI优化_nhFriends != 'off' && !player._nhFriends_temp && get.itemtype(target) == 'player' && player != game.me && get.tag(card, 'damage') && card.name != 'huogong' && (!lib.config.extension_AI优化_ntAoe || card.name != 'nanman' && card.name != 'wanjian') && get.attitude(player, target) > 0){
							let num = 0;
							if(lib.config.extension_AI优化_nhFriends == 'ph') num = player.hp;
							else num = parseInt(lib.config.extension_AI优化_nhFriends);
							if(target.hp > num) return;
							player._nhFriends_temp = true;
							let eff = get.effect(target, card, player, player);
							delete player._nhFriends_temp;
							if(eff > 0) return [1, 0, 1, -1-eff];
						}
					}
				}
			}
		};
		lib.skill._aiyh_remove_duplicate = {//去重
			trigger: {global: ['gameStart', 'showCharacterEnd']},
			filter: function (event, player) {
				return lib.config.extension_AI优化_qc != 'off' && player == game.me;
			},
			silent: true,
			unique: true,
			priority: 1024,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				let names = [],
					curs = game.filterPlayer().randomSort(),
					info;
				event.target = null;
				event.add = false;
				if (!_status.gjcx_qc) _status.gjcx_qc = [];
				for (let i = 0; i < curs.length; i++) {
					for (let j = 1; j < 3; j++) {
						if (curs[i]['name' + j] && curs[i]['name' + j].indexOf('unknown')) {
							info = curs[i]['name' + j];
							if (lib.config.extension_AI优化_qc == 'name') {
								info = get.translation(info);
								while (true) {
									let nopr = true;
									for (let pr of lib.config.extension_AI优化_pr) {
										if (info.indexOf(pr) == 0) {
											info = info.slice(pr.length);
											nopr = false;
											break;
										}
									}
									if (nopr) break;
								}
							}
							if (names.contains(info) && !_status.gjcx_qc.contains(info)) {
								event.target = curs[i];
								event.num = 0;
								break;
							}
							names.push(info);
						}
					}
				}
				if (event.target) {
					let sd = _status.mode,
						name,
						qcp = lib.config.extension_AI优化_qcp,
						curs;
					if (get.mode() == 'single' && sd == 'dianjiang') {
						if (!localStorage.getItem('gjcx_single_alerted')) {
							localStorage.setItem('gjcx_single_alerted', true);
							alert('当前模式为点将模式，不在［武将登场去重］功能管辖范围内');
						}
						event.finish();
						return;
					}
					if (event.num) name = event.target.name2;
					else name = event.target.name1;
					if (lib.config.extension_AI优化_qc == 'name') {
						name = get.translation(name);
						while (true) {
							let nopr = true;
							for (let pr of lib.config.extension_AI优化_pr) {
								if (name.indexOf(pr) == 0) {
									name = name.slice(pr.length);
									nopr = false;
									break;
								}
							}
							if (nopr) break;
						}
					}
					if ((game.me == event.target && qcp != 'zc') || event.target == game.boss || (get.mode() == 'boss' && event.target.identity == 'zhong') || event.target == game.trueZhu || event.target == game.falseZhu) {
						curs = game.filterPlayer(function (current) {
							if (current == game.boss || (get.mode() == 'boss' && current.identity == 'zhong') || current == game.trueZhu || current == game.falseZhu) return false;
							for (let j = 1; j < 3; j++) {
								info = current['name' + j];
								if (lib.config.extension_AI优化_qc == 'name') {
									info = get.translation(info);
									while (true) {
										let nopr = true;
										for (let pr of lib.config.extension_AI优化_pr) {
											if (info.indexOf(pr) == 0) {
												info = info.slice(pr.length);
												nopr = false;
												break;
											}
										}
										if (nopr) break;
									}
								}
								if (info == name) {
									event.num = j - 1;
									return true;
								}
							}
							return false;
						});
						if (!curs.length) event.target = null;
						else if (qcp == 'zc') event.target = curs.randomGet();
						else {
							let me = false;
							if (curs.contains(game.me)) {
								me = true;
								curs.remove(game.me);
							}
							if (curs.length) event.target = curs.randomGet();
							else if (me && qcp != 'no') event.target = game.me;
							else event.target = null;
						}
					}
					if (!event.target) {
						alert(get.translation(name) + '受情景约束，不能替换');
						_status.gjcx_qc.push(name);
						event.finish();
						return;
					}
					let ts = _status.gjcxlist.randomSort(),
						list = [],
						str,
						hx = 6,
						id = event.target.identity;
					if (lib.config.extension_AI优化_qcs == 'same')
						switch (get.mode()) {
							case 'identity':
								if (sd == 'zhong') {
									if (id == 'fan' || id == 'zhong') hx = 6;
									else hx = 8;
								} else if (sd == 'purple') {
									if (id.indexOf('Zhu') == 1) hx = 4;
									else hx = 5;
								} else hx = get.config('choice_' + id);
								break;
							case 'versus':
								if (sd == 'two') hx = 7;
								else if (sd == 'guandu') hx = 4;
								else hx = 8;
								break;
							case 'doudizhu':
								if (sd == 'normal') hx = get.config('choice_' + id);
								else if (id == 'zhu') {
									if (sd == 'kaihei') hx = 5;
									else if (sd == 'huanle' || sd == 'binglin') hx = 7;
									else hx = 4;
								} else {
									if (sd == 'kaihei') hx = 3;
									else hx = 4;
								}
								break;
							default:
								if (typeof get.config('choice_' + id) == 'number') hx = get.config('choice_' + id);
						}
					else hx = parseInt(lib.config.extension_AI优化_qcs);
					for (let i = 0; i < ts.length; i++) {
						list.push(ts[i]);
						if (list.length >= hx) break;
					}
					if (!list.length) {
						alert('没有可供候选的武将！');
						event.finish();
						return;
					}
					if ((event.target == game.zhu && (game.players.length > 4 || (game.players.length == 4 && sd == 'normal' && lib.config.extension_AI优化_fixFour))) || (id && (id == 'mingzhong' || id.indexOf('Zhu') > 0)) || event.target == game.friendZhu || event.target == game.enemyZhu) event.add = true;
					if (event.target.name2 == undefined) str = '武将';
					else if (event.num) str = '副将';
					else str = '主将';
					if (lib.config.extension_AI优化_delayQc != '0') game.delay(parseInt(lib.config.extension_AI优化_delayQc));
					if (list.length == 1) event._result = {links: list};
					else
						event.target.chooseButton(true, ['请选择一张武将牌替换你的' + str, [list, 'character']]).ai = function (button) {
							return get.rank(button.link);
						};
				} else event.finish();
				'step 1'
				let name = result.links[0],
					j = '将',
					old = event.target.name1;
				_status.gjcxlist.remove(name);
				if (event.num) {
					j += '副将';
					old = event.target.name2;
					_status.gjcxlist.push(event.target.name2);
					event.target.init(event.target.name1, name);
				} else {
					_status.gjcxlist.push(event.target.name1);
					if (event.target.name2 != undefined) {
						j += '主将';
						event.target.init(name, event.target.name2);
					} else event.target.init(name);
				}
				if (event.add) {
					event.target.maxHp++;
					event.target.hp++;
				}
				if (!lib.character[name] || !lib.character[name][4] || !lib.character[name][4].contains('hiddenSkill')) event.target.showCharacter(event.num, false);
				game.log(event.target, j, '#y' + lib.translate[old], '更换为', '#y' + lib.translate[name]);
				'step 2'
				event.target.update();
				event.trigger('showCharacterEnd');
			}
		};
		lib.skill._aiyh_fake_prohibited = {//伪禁
			trigger: {
				global: 'gameStart',
				player: 'showCharacterEnd'
			},
			filter: function (event, player) {
				return lib.config.extension_AI优化_Wj && player != game.me && lib.config.extension_AI优化_wj;
			},
			silent: true,
			unique: true,
			priority: 729,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				if (player.name1 != undefined && lib.config.extension_AI优化_wj.contains(player.name1)) event.num = 0;
				else if (player.name2 != undefined && lib.config.extension_AI优化_wj.contains(player.name2)) event.num = 1;
				else event.finish();
				'step 1'
				let list = [],
					hx = 6,
					sd = _status.mode,
					id = player.identity,
					str;
				if (lib.config.extension_AI优化_wjs == 'same')
					switch (get.mode()) {
						case 'identity':
							if (sd == 'zhong') {
								if (id == 'fan' || id == 'zhong') hx = 6;
								else hx = 8;
							} else if (sd == 'purple') {
								if (id.indexOf('Zhu') == 1) hx = 4;
								else hx = 5;
							} else hx = get.config('choice_' + id);
							break;
						case 'versus':
							if (sd == 'two') hx = 7;
							else if (sd == 'guandu') hx = 4;
							else hx = 8;
							break;
						case 'doudizhu':
							if (sd == 'normal') hx = get.config('choice_' + id);
							else if (id == 'zhu') {
								if (sd == 'kaihei') hx = 5;
								else if (sd == 'huanle' || sd == 'binglin') hx = 7;
								else hx = 4;
							} else {
								if (sd == 'kaihei') hx = 3;
								else hx = 4;
							}
							break;
						default:
							if (typeof get.config('choice_' + id) == 'number') hx = get.config('choice_' + id);
					}
				else hx = parseInt(lib.config.extension_AI优化_wjs);
				_status.gjcxlist.randomSort();
				for (let i = 0; i < _status.gjcxlist.length; i++) {
					if (!lib.config.extension_AI优化_wj.contains(_status.gjcxlist[i])) list.push(_status.gjcxlist[i]);
					if (list.length >= hx) break;
				}
				if (!list.length) {
					alert('没有可供候选的武将！');
					event.finish();
					return;
				}
				if ((player == game.zhu && (game.players.length > 4 || (game.players.length == 4 && sd == 'normal' && lib.config.extension_AI优化_fixFour))) || (id && (id == 'mingzhong' || id.indexOf('Zhu') > 0)) || player == game.friendZhu || player == game.enemyZhu) event.add = true;
				else event.add = false;
				if (player.name2 == undefined) str = '武将';
				else if (event.num) str = '副将';
				else str = '主将';
				if (lib.config.extension_AI优化_delayWj != '0') game.delay(parseInt(lib.config.extension_AI优化_delayWj));
				if (list.length == 1) event._result = {links: list};
				else
					player.chooseButton(true, ['请选择一张武将牌替换你的' + str, [list, 'character']]).ai = function (button) {
						return get.rank(button.link);
					};
				'step 2'
				let name = result.links[0],
					j = '将',
					old = player.name1;
				_status.gjcxlist.remove(name);
				if (event.num) {
					j += '副将';
					old = player.name2;
					_status.gjcxlist.push(player.name2);
					player.init(player.name1, name);
				} else {
					_status.gjcxlist.push(player.name1);
					if (player.name2 != undefined) {
						j += '主将';
						player.init(name, player.name2);
					} else player.init(name);
				}
				if (event.add) {
					player.maxHp++;
					player.hp++;
				}
				if (!lib.character[name] || !lib.character[name][4] || !lib.character[name][4].contains('hiddenSkill')) player.showCharacter(event.num, false);
				game.log(player, j, '#y' + lib.translate[old], '更换为', '#y' + lib.translate[name]);
				'step 3'
				player.update();
				event.trigger('showCharacterEnd');
			}
		};
		lib.skill._aiyh_meks = {
			trigger: {
				global: ['gameStart', 'showCharacterEnd']
			},
			filter: function (event, player) {
				return player == game.me;
			},
			silent: true,
			unique: true,
			priority: 157,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				event.names = [];
				if (lib.config.extension_AI优化_applyQz)
					game.countPlayer2(function (current) {
						if (current.name != 'unknown' && !event.names.contains(current.name)) event.names.push(current.name);
						if (current.name2 != undefined && current.name2 != 'unknown' && !event.names.contains(current.name2)) event.names.push(current.name2);
					});
				if (!event.names.length) event.goto(4);
				'step 1'
				event.name = event.names.splice(0, 1)[0];
				if (lib.config.extension_AI优化_qz[event.name] == undefined) event.qz = 1;
				else if (event.names.length) event.redo();
				else event.goto(4);
				'step 2'
				let list = ['+1', '+0.1', '+0.01'];
				event.qz = Math.round(event.qz * 100) / 100;
				if (event.qz > 1) list.push('-1');
				if (event.qz > 0.1) list.push('-0.1');
				if (event.qz > 0.01) list.push('-0.01');
				list.push('暂不设置');
				list.push('设置');
				player.chooseControl(list).set('prompt', get.translation(event.name) + '的 权重：<font color=#FFFF00>' + event.qz + '</font>').set('prompt2', '该值将作为内奸AI判断角色实力的首选').set('ai', function () {
						return '暂不设置';
					});
				'step 3'
				if (result.control == '设置') {
					lib.config.extension_AI优化_qz[event.name] = event.qz;
					game.saveExtensionConfig('AI优化', 'qz', lib.config.extension_AI优化_qz);
					if (event.names.length) event.goto(1);
				} else if (result.control == '暂不设置') {
					delete lib.config.extension_AI优化_qz[event.name];
					game.saveExtensionConfig('AI优化', 'qz', lib.config.extension_AI优化_qz);
					if (event.names.length) event.goto(1);
				} else {
					if (result.control == '+1') event.qz++;
					else if (result.control == '+0.1') event.qz += 0.1;
					else if (result.control == '+0.01') event.qz += 0.01;
					else if (result.control == '-0.01') event.qz -= 0.01;
					else if (result.control == '-0.1') event.qz -= 0.1;
					else if (result.control == '-1') event.qz--;
					event.goto(2);
				}
				'step 4'
				if (lib.config.extension_AI优化_applyCf == 'sd') event.targets = game.filterPlayer2();
				else event.finish();
				'step 5'
				event.target = event.targets.splice(0, 1)[0];
				event.skills = event.target.getSkills(null, false, false).filter(function (i) {
					if (!lib.translate[i]) return false;
					let info = lib.skill[i];
					return !info || !info.ai || info.ai.threaten == 'undefined';
				});
				'step 6'
				if (event.skills.length) {
					event.skill = event.skills.splice(0, 1)[0];
					event.th = 1;
				} else if (event.targets.length) event.goto(5);
				else event.finish();
				'step 7'
				let con = ['+1', '+0.1', '+0.01'],
					str = '技能ID：' + event.skill;
				event.th = Math.round(event.th * 100) / 100;
				if (event.target.tempSkills[event.skill]) str = '&nbsp&nbsp&nbsp<font color=#FF3300>这是一项临时技能</font>';
				if (lib.translate[event.skill + '_info']) str += '<br>' + lib.translate[event.skill + '_info'];
				else str += '<br>暂无技能描述';
				if (event.th > 1) con.push('-1');
				if (event.th > 0.1) con.push('-0.1');
				if (event.th > 0.01) con.push('-0.01');
				con.push('暂不处理');
				con.push('确认修改');
				player.chooseControl(con).set('prompt', '<font color=#00FFFF>' + get.translation(event.target) + '</font>的【<font color=#FFFF00>' + get.translation(event.skill) + '</font>】：当前为<font color=#00FFFF>' + event.th + '</font>').set('prompt2', str).set('ai', function () {
						return '确认修改';
					});
				'step 8'
				if (result.control == '确认修改') {
					let s = lib.skill[event.skill];
					if (!s) s = {ai: {threaten: event.th}};
					else if (!s.ai) s.ai = {threaten: event.th};
					else s.ai.threaten = event.th;
					lib.config.extension_AI优化_cf[event.skill] = event.th;
					game.saveExtensionConfig('AI优化', 'cf', lib.config.extension_AI优化_cf);
					event.goto(6);
				} else if (result.control == '暂不处理') {
					delete lib.config.extension_AI优化_cf[event.skill];
					game.saveExtensionConfig('AI优化', 'cf', lib.config.extension_AI优化_cf);
					event.goto(6);
				} else {
					if (result.control == '+1') event.th++;
					else if (result.control == '+0.1') event.th += 0.1;
					else if (result.control == '+0.01') event.th += 0.01;
					else if (result.control == '-1') event.th--;
					else if (result.control == '-0.1') event.th -= 0.1;
					else if (result.control == '-0.01') event.th -= 0.01;
					event.goto(7);
				}
			}
		};
		lib.skill._phd_fixZq = {
			//坐骑修改
			trigger: {player: 'equipBegin'},
			filter: function (event, player) {
				if (!lib.config.extension_AI优化_fixZq) return false;
				if (get.subtype(event.card) == 'equip3') return player.getEquip(4);
				if (get.subtype(event.card) == 'equip4') return player.getEquip(3);
				return false;
			},
			forced: true,
			popup: false,
			lastDo: true,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				let type = get.subtype(trigger.card),
					num = 3;
				if (type == 'equip3') num = 4;
				player.$throw(player.getEquip(num));
				player.lose(player.getEquip(num));
				game.log(player, '用', trigger.card, '替换了', player.getEquip(num));
			}
		};
		lib.skill._aiyh_neiKey = {//内奸可亮明身份
			mode: ['identity'],
			enable: 'phaseUse',
			filter: function (event, player) {
				if (player.identity != 'nei' || player.storage.neiKey) return false;
				if (player.identityShown) return lib.config.extension_AI优化_neiKey == 'must';
				return lib.config.extension_AI优化_neiKey != 'off';
			},
			log: false,
			unique: true,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				player.storage.neiKey = true;
				game.log(player, '亮明了身份');
				game.broadcastAll(function (player) {
					player.showIdentity();
				}, player);
				game.log(player, '的身份为', '#b内奸');
				player.gainMaxHp();
				player.removeSkill('gjcx_neiAi_expose');
				player.chooseBool('是否令你和' + get.translation(game.zhu) + '各回复1点体力？').ai = function () {
					return (
						game.zhu.isHealthy() ||
						!game.hasPlayer(function (current) {
							return current.identity == 'zhong' || current.identity == 'mingzhong';
						}) ||
						player.hp <= 2 ||
						game.zhu.hp <= 1
					);
				};
				'step 1'
				if (result.bool) {
					player.recover();
					game.zhu.recover();
				}
			},
			ai: {
				order: 1,
				result: {
					player: function (player) {
						if (
							!game.hasPlayer(function (current) {
								return current.identity == 'zhong' || current.identity == 'mingzhong';
							}) ||
							(player.hp <= 1 && !player.countCards('hs', 'tao') && !player.countCards('hs', 'jiu'))
						)
							return 1;
						if (
							!game.hasPlayer(function (current) {
								return current.identity == 'fan';
							})
						) {
							if (get.attitude(game.zhu, player) < -1 || (get.attitude(game.zhu, player) < 0 && player.ai.shown >= 0.95)) return 1;
							return -3;
						}
						if ((!player.hasSkill('gjcx_neiZhong') && !player.hasSkill('gjcx_neiJiang') && ((player.hp <= 2 && game.zhu.hp <= 2) || (game.zhu.isHealthy() && lib.config.extension_AI优化_sfjAi == 'gjcx'))) || (game.zhu.hp <= 1 && !player.countCards('hs', 'tao') && (player.hasSkill('gjcx_neiZhong') || lib.config.extension_AI优化_sfjAi != 'gjcx'))) return 1;
						return -3;
					}
				}
			}
		};
		lib.skill._aiyh_fixQz = {
			//武将权重
			enable: 'phaseUse',
			filter: function (event, player) {
				return player == game.me && lib.config.extension_AI优化_fixQz;
			},
			filterTarget: function (card, player, target) {
				return target.name != 'unknown' || (target.name2 != undefined && target.name2 != 'unknown');
			},
			prompt: '修改一名角色一张武将牌的权重',
			log: false,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				let trans = [];
				event.names = [];
				if (target.name != 'unknown') {
					trans.push(get.translation(target.name));
					event.names.push(target.name);
				}
				if (target.name2 != undefined && target.name2 != 'unknown') {
					trans.push(get.translation(target.name2));
					event.names.push(target.name2);
				}
				if (trans.length > 1)
					player.chooseControl(names).set('prompt', '请选择要修改权重的武将').set('ai', function () {
							return 0;
						});
				else event._result = {index: 0};
				'step 1'
				event.name = event.names[result.index];
				if (lib.config.extension_AI优化_qz[event.name] == undefined) lib.config.extension_AI优化_qz[event.name] = 1;
				event.qz = lib.config.extension_AI优化_qz[event.name];
				'step 2'
				let list = ['+1', '+0.1', '+0.01'];
				event.qz = Math.round(event.qz * 100) / 100;
				if (event.qz > 1) list.push('-1');
				if (event.qz > 0.1) list.push('-0.1');
				if (event.qz > 0.01) list.push('-0.01');
				list.push('删除此记录');
				list.push('确认修改');
				player.chooseControl(list).set('prompt', get.translation(event.name) + '的 权重：<font color=#FFFF00>' + event.qz + '</font>').set('prompt2', '武将ID：' + event.name + '<br>该值将作为内奸AI判断角色实力的首选').set('ai', function () {
						return '确认修改';
					});
				'step 3'
				if (result.control == '确认修改') {
					lib.config.extension_AI优化_qz[event.name] = event.qz;
					game.saveExtensionConfig('AI优化', 'qz', lib.config.extension_AI优化_qz);
				} else if (result.control == '删除此记录') {
					delete lib.config.extension_AI优化_qz[event.name];
					game.saveExtensionConfig('AI优化', 'qz', lib.config.extension_AI优化_qz);
				} else {
					if (result.control == '+1') event.qz++;
					else if (result.control == '+0.1') event.qz += 0.1;
					else if (result.control == '+0.01') event.qz += 0.01;
					else if (result.control == '-0.01') event.qz -= 0.01;
					else if (result.control == '-0.1') event.qz -= 0.1;
					else if (result.control == '-1') event.qz--;
					event.goto(2);
				}
			},
			ai: {
				result: {
					target: 0
				}
			}
		};
		lib.skill._aiyh_fixCf = {//技能嘲讽
			enable: 'phaseUse',
			filter: function (event, player) {
				return player == game.me && lib.config.extension_AI优化_fixCf;
			},
			filterTarget: true,
			prompt: '修改一名角色当前拥有的一项技能的嘲讽值',
			log: false,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				let trans = [],
					skills = target.getSkills(null, false, false).filter(function (i) {
						return lib.translate[i];
					});
				event.skills = skills;
				event.ths = [];
				for (let i = 0; i < skills.length; i++) {
					let info = lib.skill[skills[i]],
						th = 1;
					if (!info) info = {ai: {threaten: 1}};
					else if (!info.ai) info.ai = {threaten: 1};
					else if (typeof info.ai.threaten == 'undefined') info.ai.threaten = 1;
					else if (typeof info.ai.threaten == 'number') th = info.ai.threaten;
					else th = '一个函数（不建议修改）';
					if (typeof th == 'number') event.ths.push(th);
					else event.ths.push(1);
					trans.push('<font color=#00FF00>' + lib.translate[skills[i]] + '</font> | <font color=#FFFF00>' + skills[i] + '</font>：' + th);
				}
				if (trans.length > 1)
					player.chooseControl().set('choiceList', trans).set('prompt', '请选择要修改嘲讽值的技能').set('ai', function () {
							return 0;
						});
				else event._result = {index: 0};
				'step 1'
				event.skill = event.skills[result.index];
				event.th = event.ths[result.index];
				'step 2'
				let list = ['+1', '+0.1', '+0.01'],
					str = '技能ID：' + event.skill;
				event.th = Math.round(event.th * 100) / 100;
				if (event.target.tempSkills[event.skill]) str = '<font color=#FF3300>这是一项临时技能</font><br>';
				if (lib.translate[event.skill + '_info']) str += lib.translate[event.skill + '_info'];
				else str += '暂无技能描述';
				if (event.th > 1) list.push('-1');
				if (event.th > 0.1) list.push('-0.1');
				if (event.th > 0.01) list.push('-0.01');
				list.push('删除此记录');
				list.push('确认修改');
				player.chooseControl(list).set('prompt', get.translation(event.skill) + '（' + get.translation(target) + '）：当前为<font color=#00FFFF>' + event.th + '</font>').set('prompt2', str).set('ai', function () {
						return '确认修改';
					});
				'step 3'
				if (result.control == '确认修改') {
					let s = lib.skill[event.skill];
					if (!s) s = {ai: {threaten: event.th}};
					else if (!s.ai) s.ai = {threaten: event.th};
					else s.ai.threaten = event.th;
					lib.config.extension_AI优化_cf[event.skill] = event.th;
					game.saveExtensionConfig('AI优化', 'cf', lib.config.extension_AI优化_cf);
				} else if (result.control == '删除此记录') {
					delete lib.config.extension_AI优化_cf[event.skill];
					game.saveExtensionConfig('AI优化', 'cf', lib.config.extension_AI优化_cf);
				} else {
					if (result.control == '+1') event.th++;
					else if (result.control == '+0.1') event.th += 0.1;
					else if (result.control == '+0.01') event.th += 0.01;
					else if (result.control == '-1') event.th--;
					else if (result.control == '-0.1') event.th -= 0.1;
					else if (result.control == '-0.01') event.th -= 0.01;
					event.goto(2);
				}
			},
			ai: {
				result: {
					target: 0
				}
			}
		};
		lib.skill._aiyh_fixWj = {//伪禁列表
			enable: 'phaseUse',
			filter: function (event, player) {
				return player == game.me && lib.config.extension_AI优化_fixWj;
			},
			filterTarget: function (card, player, target) {
				if (target.name == 'unknown' && (target.name2 == undefined || target.name2 == 'unknown')) return false;
				return true;
			},
			selectTarget: [0, Infinity],
			multitarget: true,
			prompt: '若选择角色则对这些角色的武将牌进行加入/移出伪禁列表操作，否则从所有武将包选择进行操作',
			log: false,
			charlotte: true,
			superCharlotte: true,
			content: function () {
				'step 0'
				targets.sortBySeat();
				if (targets.length) {
					event.names = [];
					for (let i of targets) {
						if (i.name != 'unknown') event.names.push(i.name);
						if (i.name2 != undefined && i.name2 != 'unknown') event.names.push(i.name2);
					}
					event.goto(2);
				} else {
					let ts = [];
					event.sorts = [];
					for (let i in lib.characterPack) {
						if (Object.prototype.toString.call(lib.characterPack[i]) === '[object Object]') {
							event.sorts.push(lib.characterPack[i]);
							ts.push(lib.translate[i + '_character_config']);
						}
					}
					if (!ts.length) event.finish();
					else {
						event.videoId = lib.status.videoId++;
						let func = function (player, list, id) {
							let choiceList = ui.create.dialog('请选择要移动的武将所在的武将包');
							choiceList.videoId = id;
							for (let i = 0; i < list.length; i++) {
								let str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">' + list[i] + '</div>';
								let next = choiceList.add(str);
								next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
								next.firstChild.link = i;
								for (let j in lib.element.button) {
									next[j] = lib.element.button[j];
								}
								choiceList.buttons.add(next.firstChild);
							}
							return choiceList;
						};
						if (game.me.isOnline2()) game.me.send(func, game.me, ts, event.videoId);
						event.dialog = func(game.me, ts, event.videoId);
						if (_status.auto) event.dialog.style.display = 'none';
						let next = game.me.chooseButton();
						next.set('dialog', event.videoId);
						next.set('forced', true);
						next.set('ai', function (button) {
							return 1;
						});
						next.set('selectButton', [0, ts.length]);
					}
				}
				'step 1'
				if (game.me.isOnline2()) game.me.send('closeDialog', event.videoId);
				event.dialog.close();
				if (result.links && result.links.length) {
					let nums = result.links.sort();
					event.names = [];
					for (let num of nums) {
						for (let i in event.sorts[num]) {
							event.names.push(i);
						}
					}
					if (!event.names.length) {
						alert('所选武将包不包含武将');
						event.finish();
					}
				} else event.finish();
				'step 2'
				let jr = [];
				event.yc = [];
				for (let i of event.names) {
					if (lib.config.extension_AI优化_wj.contains(i)) event.yc.push(i);
					else jr.push(i);
				}
				if (jr.length)
					player.chooseButton(['请选择要加入伪禁列表的武将', [jr, 'character']], [1, Infinity]).ai = function (button) {
						return 0;
					};
				else event.goto(4);
				'step 3'
				if (result.bool && result.links) {
					lib.config.extension_AI优化_wj.addArray(result.links);
					game.saveExtensionConfig('AI优化', 'wj', lib.config.extension_AI优化_wj);
				}
				'step 4'
				if (event.yc.length)
					player.chooseButton(['请选择要移出伪禁列表的武将', [event.yc, 'character']], [1, Infinity]).ai = function (button) {
						return 0;
					};
				else event.finish();
				'step 5'
				if (result.bool && result.links) {
					lib.config.extension_AI优化_wj.removeArray(result.links);
					game.saveExtensionConfig('AI优化', 'wj', lib.config.extension_AI优化_wj);
				}
			},
			ai: {
				result: {
					target: 0
				}
			}
		};

		/*闲云野鹤小游戏*/
		if (lib.config.extension_AI优化_xianyunyehe == 'on') {
			/*冲虚*/
			lib.skill.chongxu = {
				enable: 'phaseUse',
				usable: 1,
				content: function () {
					'step 0'
					event.score = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5].randomGet();
					game.log(player, '获得了', '#g' + event.score + '分');
					if (event.score < 3) {
						if (event.score >= 2) player.draw();
						event.finish();
						return;
					}
					var list = [];
					if (player.countMark('miaojian') < 2 && player.hasSkill('miaojian')) list.push('修改【妙剑】');
					if (player.countMark('shhlianhua') < 2 && player.hasSkill('shhlianhua')) list.push('修改【莲华】');
					if (list.length) {
						list.push('全部摸牌');
						player.chooseControl(list).set('prompt', '冲虚：修改技能' + (event.score == 5 ? '并摸一张牌' : '') + '；或摸' + Math.floor(event.score / 2) + '张牌');
					} else event._result = {control: '全部摸牌'};
					'step 1'
					var score = event.score;
					if (result.control != '全部摸牌') {
						score -= 3;
						var skill = result.control == '修改【妙剑】' ? 'miaojian' : 'shhlianhua';
						player.addMark(skill, 1, false);
						game.log(player, '修改了技能', '#g【' + get.translation(skill) + '】');
					}
					if (score > 1) player.draw(Math.floor(score / 2));
				},
				ai: {
					order: 10,
					result: {
						player: 1
					}
				}
			};
			/*评才*/
			lib.skill.xinfu_pingcai = {
				wolong_card: function () {
					'step 0'
					var ingame = game.hasPlayer(function (current) {
						return ['sp_zhugeliang', 're_sp_zhugeliang', 'ol_sp_zhugeliang'].contains(current.name) || ['sp_zhugeliang', 're_sp_zhugeliang', 'ol_sp_zhugeliang'].contains(current.name2);
					})
						? true
						: false;
					var prompt = '请选择';
					prompt += ingame ? '至多两名' : '一名';
					prompt += '角色，对其造成1点火焰伤害';
					var range = ingame ? [1, 2] : [1, 1];
					player.chooseTarget(prompt, range).set('ai', function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player, 'fire');
					});
					'step 1'
					if (result.bool && result.targets.length) {
						player.line(result.targets, 'fire');
						result.targets.sortBySeat();
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].damage('fire');
						}
					}
				},
				fengchu_card: function () {
					'step 0'
					var ingame = game.hasPlayer(function (current) {
						return ['re_pangtong', 'pangtong', 'ol_pangtong'].contains(current.name) || ['re_pangtong', 'pangtong', 'ol_pangtong'].contains(current.name2);
					}) ? true : false;
					var prompt = '请选择';
					prompt += ingame ? '至多四名' : '至多三名';
					prompt += '要横置的角色';
					var range = ingame ? [1, 4] : [1, 3];
					player.chooseTarget(prompt, range).set('ai', function (target) {
						var player = _status.event.player;
						return get.effect(target, {name: 'tiesuo'}, player, player);
					});
					'step 1'
					if (result.bool && result.targets.length) {
						player.line(result.targets, 'green');
						result.targets.sortBySeat();
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].link();
						}
					}
				},
				xuanjian_card: function () {
					'step 0'
					event.ingame = game.hasPlayer(function (current) {
						return ['re_xushu', 'xin_xushu', 'xushu'].contains(current.name) || ['re_xushu', 'xin_xushu', 'xushu'].contains(current.name2);
					}) ? true : false;
					var prompt = '请选择一名角色，令其回复一点体力并摸一张牌';
					prompt += event.ingame ? '，然后你摸一张牌。' : '。';
					player.chooseTarget(prompt).set('ai', function (target) {
						var player = _status.event.player;
						return get.attitude(player, target) * (target.isDamaged() ? 2 : 1);
					});
					'step 1'
					if (result.bool && result.targets.length) {
						var target = result.targets[0];
						player.line(target, 'thunder');
						target.draw();
						target.recover();
						if (event.ingame) player.draw();
					}
				},
				shuijing_card: function () {
					'step 0'
					event.ingame = game.hasPlayer(function (current) {
						return current.name == 'simahui' || current.name2 == 'simahui';
					}) ? true : false;
					var prompt = '将一名角色装备区中的';
					prompt += event.ingame ? '一张牌' : '防具牌';
					prompt += '移动到另一名角色的装备区中';
					var next = player.chooseTarget(2, function (card, player, target) {
						if (ui.selected.targets.length) {
							if (!_status.event.ingame) {
								return target.isEmpty(2) ? true : false;
							}
							var from = ui.selected.targets[0];
							if (target.isMin()) return false;
							var es = from.getCards('e');
							for (var i = 0; i < es.length; i++) {
								if (['equip3', 'equip4'].contains(get.subtype(es[i])) && target.getEquip('liulongcanjia')) continue;
								if (es[i].name == 'liulongcanjia' && target.countCards('e', {subtype: ['equip3', 'equip4']}) > 1) continue;
								if (target.isEmpty(get.subtype(es[i]))) return true;
							}
							return false;
						} else {
							if (!event.ingame) {
								if (target.getEquip(2)) return true;
								return false;
							}
							return target.countCards('e') > 0;
						}
					});
					next.set('ingame', event.ingame);
					next.set('ai', function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (ui.selected.targets.length == 0) {
							if (att < 0) {
								if (
									game.hasPlayer(function (current) {
										if (get.attitude(player, current) > 0) {
											var es = target.getCards('e');
											for (var i = 0; i < es.length; i++) {
												if (['equip3', 'equip4'].contains(get.subtype(es[i])) && current.getEquip('liulongcanjia')) continue;
												else if (es[i].name == 'liulongcanjia' && target.countCards('e', {subtype: ['equip3', 'equip4']}) > 1) continue;
												else if (current.isEmpty(get.subtype(es[i]))) return true;
											}
											return false;
										}
									})
								)
									return -att;
							}
							return 0;
						}
						if (att > 0) {
							var es = ui.selected.targets[0].getCards('e');
							var i;
							for (i = 0; i < es.length; i++) {
								if (['equip3', 'equip4'].contains(get.subtype(es[i])) && target.getEquip('liulongcanjia')) continue;
								if (es[i].name == 'liulongcanjia' && target.countCards('e', {subtype: ['equip3', 'equip4']}) > 1) continue;
								if (target.isEmpty(get.subtype(es[i]))) break;
							}
							if (i == es.length) return 0;
						}
						return -att * get.attitude(player, ui.selected.targets[0]);
					});
					next.set('multitarget', true);
					next.set('targetprompt', ['被移走', '移动目标']);
					next.set('prompt', prompt);
					'step 1'
					if (result.bool) {
						player.line2(result.targets, 'green');
						event.targets = result.targets;
					} else event.finish();
					'step 2'
					game.delay();
					'step 3'
					if (targets.length == 2) {
						if (!event.ingame) {
							event._result = {
								bool: true,
								links: [targets[0].getEquip(2)]
							};
						} else {
							player
								.choosePlayerCard(
									'e',
									true,
									function (button) {
										return get.equipValue(button.link);
									},
									targets[0]
								)
								.set('targets0', targets[0])
								.set('targets1', targets[1])
								.set('filterButton', function (button) {
									var targets1 = _status.event.targets1;
									if (['equip3', 'equip4'].contains(get.subtype(button.link)) && targets1.getEquip('liulongcanjia')) return false;
									if (button.link.name == 'liulongcanjia' && targets1.countCards('e', {subtype: ['equip3', 'equip4']}) > 1) return false;
									return !targets1.countCards('e', {subtype: get.subtype(button.link)});
								});
						}
					} else event.finish();
					'step 4'
					if (result.bool && result.links.length) {
						var link = result.links[0];
						if (get.position(link) == 'e') event.targets[1].equip(link);
						else if (link.viewAs) event.targets[1].addJudge({name: link.viewAs}, [link]);
						else event.targets[1].addJudge(link);
						event.targets[0].$give(link, event.targets[1], false);
						game.delay();
					}
				},
				audio: true,
				enable: 'phaseUse',
				usable: 1,
				content: function () {
					'step 0'
					var list = ['wolong', 'fengchu', 'xuanjian', 'shuijing'];
					var list2 = [];
					for (var i = 0; i < list.length; i++) {
						list2.push(game.createCard(list[i] + '_card', '', ''));
					}
					//list2.randomSort();
					event.time = get.utc();
					player.chooseButton(['请选择要擦拭的宝物', list2], true).set('ai', function (button) {
						var player = _status.event.player;
						if (button.link.name == 'xuanjian_card') {
							if (
								game.hasPlayer(function (current) {
									return current.isDamaged() && current.hp < 3 && get.attitude(player, current) > 1;
								})
							)
								return 1 + Math.random();
							else return 1;
						} else if (button.link.name == 'wolong_card') {
							if (
								game.hasPlayer(function (current) {
									return get.damageEffect(current, player, player, 'fire') > 0;
								})
							)
								return 1.2 + Math.random();
							else return 0.5;
						} else return 0.6;
					});
					'step 1'
					var delay = 8400 - (get.utc() - event.time);
					if (delay > 0) {
						event.delay2 = true;
						event.dialog = ui.create.dialog(get.translation(player) + '正在擦拭宝物...' + (_status.connectMode ? '' : '<br>（点击屏幕可跳过等待）'));
						event.videoId = lib.status.videoId++;
						game.broadcast('createDialog', event.videoId, get.translation(player) + '正在擦拭宝物...');
						game.pause();
						event.pingcai_delayed = true;
						setTimeout(function () {
							if (event.pingcai_delayed == true) {
								delete event.pingcai_delayed;
								game.resume();
							}
						}, delay);
						if (!_status.connectMode) {
							event.forceMine = true;
							event.custom.replace.window = function () {
								if (event.pingcai_delayed == true) {
									delete event.forceMine;
									delete event.pingcai_delayed;
									game.resume();
								}
							};
						}
					}
					event.card = result.links[0];
					'step 2'
					if (event.delay2) {
						delete event.custom.replace.window;
						event.dialog.close();
						game.addVideo('cardDialog', null, event.videoId);
						game.broadcast('closeDialog', event.videoId);
					}
					player.logSkill('pcaudio_' + event.card.name);
					player.$throw(event.card);
					event.insert(lib.skill.xinfu_pingcai[event.card.name], {
						player: player
					});
				},
				ai: {
					order: 7,
					fireAttack: true,
					threaten: 1.7,
					result: {
						player: 1
					}
				}
			};
			/*御风*/
			lib.skill.yufeng = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				content: function () {
					'step 0'
					result.score = [1, 2, 3].randomGet();
					'step 1'
					var result = event.result || result;
					if (result.score == 3) {
						game.log(player, '御风飞行', '成功');
					} else {
						game.log(player, '御风飞行', '失败');
					}
					game.log(player, '获得了', '#g' + result.score + '分');
					var max = result.score;
					if (result.score < 3) {
						if (result.score) player.draw(result.score);
						event.finish();
					} else {
						event.score = result.score;
						player
							.chooseTarget('请选择【御风】的目标', [1, result.score], function (card, player, target) {
								return target != player && !target.hasSkill('yufeng2');
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								var att = -get.attitude(player, target),
									attx = att * 2;
								if (att <= 0 || target.hasSkill('xinfu_pdgyingshi')) return 0;
								if (target.hasJudge('lebu')) attx -= att;
								if (target.hasJudge('bingliang')) attx -= att;
								return attx / Math.max(2.25, Math.sqrt(target.countCards('h') + 1));
							});
					}
					'step 2'
					if (result.bool) {
						result.targets.sortBySeat();
						player.line(result.targets, 'green');
						game.log(result.targets, '获得了', '#y“御风”', '效果');
						for (var i of result.targets) i.addSkill('yufeng2');
						if (event.score > result.targets.length) player.draw(event.score - result.targets.length);
					} else player.draw(event.score);
				},
				ai: {
					order: 10,
					result: {
						player: 1
					},
					threaten: 3.2
				}
			};
			/*整经*/
			lib.skill.zhengjing = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter: function (event, player) {
					return !player.hasSkill('zhengjing3');
				},
				content: function () {
					'step 0'
					var num = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5].randomGet();
					var cards = [];
					var names = [];
					while (cards.length < num) {
						var card = get.cardPile2(function (card) {
							return !cards.contains(card);
						});
						if (card) {
							cards.push(card);
							names.push(card.name);
						} else break;
					}
					event.cards = cards;
					'step 1'
					if (cards.length) {
						player.showCards(cards, get.translation(player) + '整理出了以下经典');
						game.cardsGotoOrdering(cards);
					} else {
						game.log(player, '并没有整理出经典');
						player.popup('杯具');
						event.finish();
					}
					'step 2'
					game.updateRoundNumber();
					player.chooseTarget(true, '将整理出的经典置于一名角色的武将牌上').set('ai', function (target) {
						if (target.hasSkill('xinfu_pdgyingshi')) return 0;
						var player = _status.event.player;
						var cards = _status.event.getParent().cards;
						var att = get.attitude(player, target);
						return -att;
						//if(cards.length==1) return -att;
						if (player == target) att /= 2;
						if (target.hasSkill('pingkou')) att *= 1.4;
						att *= 1 + target.countCards('j') / 2;
						return att;
					});
					'step 3'
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, 'thunder');
					}
					'step 4'
					if (cards.length == 1) {
						event._result = {bool: true, moved: [cards, []]};
						return;
					}
					var next = player.chooseToMove('整经：请分配整理出的经典', true);
					next.set('list', [['置于' + get.translation(target) + '的武将牌上', cards], ['自己获得']]);
					next.set('filterMove', function (from, to, moved) {
						if (moved[0].length == 1 && to == 1 && from.link == moved[0][0]) return false;
						return true;
					});
					next.set('filterOk', function (moved) {
						return moved[0].length > 0;
					});
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(a) - get.value(b);
						});
						return [cards.splice(0, 1), cards];
					});
					'step 5'
					if (result.bool) {
						var cards = result.moved[0],
							gains = result.moved[1];
						target.addSkill('zhengjing2');
						target.addToExpansion(cards, 'gain2').gaintag.add('zhengjing2');
						if (gains.length) player.gain(gains, 'gain2');
					}
				},
				ai: {
					order: 10,
					result: {
						player: 1
					},
					threaten: 3.2
				}
			};
		}

		if(lib.config.extension_AI优化_redMs){
			lib.translate.xunshi_info='锁定技，你的多目标锦囊牌均视为无色的【杀】。你使用无色牌无距离和次数限制且可以额外指定任意个目标，然后修改“神裁”的发动次数（每次修改次数+1，至多为5）。';
			lib.translate.shencai_info='出牌阶段限一次，你可以令一名其他角色进行判定。若判定牌包含以下内容，你获得判定牌，其获得（已有标记则改为修改）对应标记：<br>&nbsp&nbsp&nbsp&nbsp体力：“笞”标记，每次受到伤害后失去等量体力；<br>&nbsp&nbsp&nbsp&nbsp武器：“杖”标记，无法响应【杀】；<br>&nbsp&nbsp&nbsp&nbsp打出：“徒”标记，以此法外失去手牌后随机弃置一张手牌；<br>&nbsp&nbsp&nbsp&nbsp距离：“流”标记，结束阶段将武将牌翻面；<br>若判定牌不包含以上内容，该角色获得一个“死”标记且手牌上限减少其身上“死”标记个数。然后，你获得其区域内一张牌。“死”标记个数大于场上存活人数的角色回合结束时，其直接死亡。';
			lib.translate.discretesidi_info='当你使用除延时锦囊牌以外的牌结算结束后，可以选择一名未指定“司敌”目标的其他角色，并为其指定一名“司敌”目标角色（仅你可见）。当其使用第一张除延时锦囊牌外的牌仅指定“司敌”目标为唯一目标时（否则清除你为其指定的“司敌”目标角色），若目标：为你，你摸一张牌；不为你，你选择一项：1.取消之，然后若此时场上没有角色处于濒死状态，你对其造成1点伤害；2.你摸两张牌。然后清除你为其指定的“司敌”目标角色。';
			lib.translate.yuejian_info='每回合限两次，其他角色对你使用的牌置入弃牌堆时，你可展示所有手牌（至少一张），若你的手牌花色与此牌均不同，你获得此牌。';
			lib.translate.shefu_info='结束阶段，你可以记录一个基本牌或锦囊牌的名称并扣置一张手牌，称为“伏兵”。当其他角色于你的回合外使用手牌时，你可以移去一张记录名称相同的“伏兵”，然后此牌无效。若此时是使用者的回合，则其本回合所有技能失效。';
			lib.translate.yijiao_info='出牌阶段限一次，你可以在1~4之间选择一个数字，令一名其他角色获得此数字十倍的“异”标记。有“异”标记的角色的结束阶段，若其本回合使用牌的点数之和：小于“异”标记数，其随机弃置一张手牌；等于“异”标记数，该角色本回合结束后进行一个额外的回合；大于“异”标记数，你摸两张牌。有“异”标记的角色的回合结束时，移去“异”标记。';
			lib.translate.dcqizi_info='锁定技，其他角色处于濒死状态时，若你与其距离大于2，你不能对其使用桃。';
			lib.translate.dchuishu_info='摸牌阶段结束时，你可以摸3张牌然后弃置1张手牌。若如此做，你本回合弃置超过2张牌时，从弃牌堆中随机获得一张锦囊牌。';
			lib.translate.dcyishu_info='锁定技，当你于出牌阶段外失去牌后，“慧淑”中最小的一个数字+2且最大的一个数字-1。';
			lib.translate.dcligong_info='觉醒技，准备阶段，若“慧淑”有数字达到5，你加1点体力上限并回复1点体力，失去“慧淑”和“易数”，然后从已开通的随机四个吴国女性武将中选择至多两个技能获得（如果不获得技能则不失去“慧淑”并摸两张牌）。';
			lib.translate.dcjiezhen_info='出牌阶段限一次，你可令一名其他角色的所有技能替换为“八阵”（锁定技，限定技，觉醒技，主公技除外），你的下回合开始或当其【八卦阵】判定后，其失去“八阵”并获得原技能，然后你获得其区域里的一张牌。';
			lib.translate.dcyinshi_info='锁定技，你每回合首次受到无色牌或非游戏牌造成的伤害时，防止此伤害。当场上有角色判定【八卦阵】时，你获得其生效的判定牌。';
			lib.translate.huaping_info='限定技，当一名其他角色死亡时，你可以获得其所有武将技能，然后你失去“绡舞”和所有“沙”标记并摸等量的牌。当你死亡时，若此技能未发动过，你可令一名其他角色获得“沙舞”和所有“沙”标记。';
			lib.translate.requanfeng_info='限定技，当一名其他角色死亡后，你可以失去“弘仪”，然后获得其武将牌的所有技能（主公技除外），若如此做，你加1点体力上限，回复1点体力。当你处于濒死状态时，你可以加2点体力上限，回复4点体力。';
			lib.translate.sptaoluan_info='每回合限一次，当一名角色的判定牌生效时，若结果为♠️，你可以终止此次判定并选择一项：1.获得此牌；2.若该角色不为你，视为对其使用一张无距离且无次数限制的火【杀】。';
		}

		/*声名鹊起*/
		if (lib.config.extension_AI优化_smqq == 'on') {
			//身份ai禁选
			if (lib.config.mode == 'identity') {
				setTimeout(function () {
					lib.game.chooseCharacter = function () {
						if (_status.mode == 'purple') {
							game.chooseCharacterPurple();
							return;
						}
						var next = game.createEvent('chooseCharacter', false);
						next.showConfig = true;
						next.addPlayer = function (player) {
							var list = lib.config.mode_config.identity.identity[game.players.length - 3].slice(0);
							var list2 = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
							for (var i = 0; i < list.length; i++) list2.remove(list[i]);
							player.identity = list2[0];
							player.setIdentity('cai');
						};
						next.removePlayer = function () {
							return game.players.randomGet(game.me, game.zhu);
						};
						next.ai = function (player, list, list2, back) {
							if (_status.brawl && _status.brawl.chooseCharacterAi) {
								if (_status.brawl.chooseCharacterAi(player, list, list2, back) !== false) {
									return;
								}
							}
							if (_status.event.zhongmode) {
								var listc = list.slice(0, 2);
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) listc[i] = listx.randomGet();
								}
								if (get.config('double_character')) {
									player.init(listc[0], listc[1]);
								} else {
									player.init(listc[0]);
								}
								if (player.identity == 'mingzhong') {
									player.hp++;
									player.maxHp++;
									player.update();
								}
							} else if (player.identity == 'zhu') {
								list2.randomSort();
								var choice, choice2;
								var banZhu = lib.config.extension_AI优化_zhu;
								if (lib.config.extension_AI优化_zhu == undefined) banZhu = [];
								//list
								var listc = list.slice(0);
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banZhu.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								//list2
								var listc2 = list.slice(0, 2);
								var listt2 = [];
								for (var i = 0; i < listc2.length; i++) {
									var listx = lib.characterReplace[listc2[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banZhu.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc2[i] = LIST.randomGet();
										} else {
											listt2.push(listc2[i]);
										}
									}
								}
								for (var i = 0; i < listc2.length; i++) {
									var a = listc2[i];
									for (var j = 0; j < listt2.length; j++) {
										var b = listt2[j];
										if (a == b) {
											listc2.splice(i--, 1);
											listt2.splice(j--, 1);
											break;
										}
									}
								}
								if (!_status.event.zhongmode && Math.random() - 0.8 < 0 && listc2.length) {
									choice = listc2[0];
									choice2 = listc[0];
									if (choice2 == choice) {
										choice2 = listc[1];
									}
								} else {
									choice = listc[0];
									choice2 = listc[1];
								}
								if (get.config('double_character')) {
									player.init(choice, choice2);
								} else {
									player.init(choice);
								}
								if (game.players.length > 4) {
									player.hp++;
									player.maxHp++;
									player.update();
								}
							} else if (player.identity == 'zhong') {
								if (lib.character[game.zhu.name] != undefined) {
									var skillS = lib.character[game.zhu.name][3];
								}
								var banZhong = lib.config.extension_AI优化_zhong;
								if (lib.config.extension_AI优化_zhong == undefined) banZhong = [];
								var listc = list.slice(0);
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banZhong.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								if (lib.character[game.zhu.name] != undefined) {
									for (var j = 0; j < skillS.length; j++) {
										var str = '';
										str += skillS[j];
										if (lib.skill[str] && lib.skill[str].zhuSkill || Math.random() < 0.5) {
											var choice = 0;
											for (var i = 0; i < listc.length; i++) {
												if (lib.character[listc[i]][1] == game.zhu.group) {
													choice = i;
													break;
												}
											}
											if (get.config('double_character')) {
												player.init(listc[choice], listc[choice == 0 ? choice + 1 : choice - 1]);
											} else {
												player.init(listc[choice]);
											}
										} else {
											if (get.config('double_character')) {
												player.init(listc[0], listc[1]);
											} else {
												player.init(listc[0]);
											}
										}
									}
								} else {
									var choice = 0;
									for (var i = 0; i < listc.length; i++) {
										if (lib.character[listc[i]][1] == game.zhu.group) {
											choice = i;
											break;
										}
									}
									if (get.config('double_character')) {
										player.init(listc[choice], listc[choice == 0 ? choice + 1 : choice - 1]);
									} else {
										player.init(listc[choice]);
									}
								}
							} else if (player.identity == 'nei') {
								var listc = list.slice(0);
								var banNei = lib.config.extension_AI优化_nei;
								if (lib.config.extension_AI优化_nei == undefined) banNei = [];
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banNei.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								var listC = listc.sort(function (a, b) {
									var rank = function (name) {
										if (game.getRarity(name) == 'junk') return 1;
										if (game.getRarity(name) == 'common') return 2;
										if (game.getRarity(name) == 'rare') return 3;
										if (game.getRarity(name) == 'epic') return 4;
										if (game.getRarity(name) == 'legend') return 5;
									};
									return rank(b) - rank(a);
								});
								if (get.config('double_character')) {
									player.init(listC[0], listC[1]);
								} else {
									player.init(listC[0]);
								}
							} else {
								var listc = list.slice(0, 2);
								var banFan = lib.config.extension_AI优化_fan;
								if (lib.config.extension_AI优化_fan == undefined) banFan = [];
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banFan.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								if (get.config('double_character')) {
									player.init(listc[0], listc[1]);
								} else {
									player.init(listc[0]);
								}
							}
							if (back) {
								list.remove(get.sourceCharacter(player.name1));
								list.remove(get.sourceCharacter(player.name2));
								for (var i = 0; i < list.length; i++) {
									back.push(list[i]);
								}
							}
							if (typeof lib.config.test_game == 'string' && player == game.me.next) {
								player.init(lib.config.test_game);
							}
							if (get.is.double(player.name1)) {
								player._groupChosen = true;
								player.group = get.is.double(player.name1, true).randomGet();
								player.node.name.dataset.nature = get.groupnature(player.group);
							} else if (get.config('choose_group') && player.group == 'shen' && !player.isUnseen(0)) {
								var list = lib.group.slice(0);
								list.remove('shen');
								if (list.length)
									player.group = (function () {
										if (_status.mode != 'zhong' && game.zhu && game.zhu.group) {
											if (['re_zhangjiao', 'liubei', 're_liubei', 'caocao', 're_caocao', 'sunquan', 're_sunquan', 'zhangjiao', 'sp_zhangjiao', 'caopi', 're_caopi', 'liuchen', 'caorui', 'sunliang', 'sunxiu', 'sunce', 're_sunben', 'ol_liushan', 're_liushan', 'key_akane', 'dongzhuo', 're_dongzhuo', 'ol_dongzhuo', 'jin_simashi', 'caomao'].contains(game.zhu.name)) return game.zhu.group;
											if (game.zhu.name == 'yl_yuanshu') {
												if (player.identity == 'zhong') list.remove('qun');
												else return 'qun';
											}
											if (['sunhao', 'xin_yuanshao', 're_yuanshao', 're_sunce', 'ol_yuanshao', 'yuanshu', 'jin_simazhao', 'liubian'].contains(game.zhu.name)) {
												if (player.identity != 'zhong') list.remove(game.zhu.group);
												else return game.zhu.group;
											}
										}
										return list.randomGet();
									})();
							}
							player.node.name.dataset.nature = get.groupnature(player.group);
						};
						next.setContent(function () {
							'step 0'
							ui.arena.classList.add('choose-character');
							var i;
							var list;
							var list2 = [];
							var list3 = [];
							var list4 = [];
							var evtfilter = [];
							var identityList;
							var chosen = lib.config.continue_name || [];
							game.saveConfig('continue_name');
							event.chosen = chosen;
							if (_status.mode == 'zhong') {
								event.zhongmode = true;
								identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
							} else {
								identityList = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
								if (get.config('double_nei')) {
									switch (get.playerNumber()) {
										case 8:
											identityList.remove('fan');
											identityList.push('nei');
											break;
										case 7:
											identityList.remove('zhong');
											identityList.push('nei');
											break;
										case 6:
											identityList.remove('fan');
											identityList.push('nei');
											break;
										case 5:
											identityList.remove('fan');
											identityList.push('nei');
											break;
										case 4:
											identityList.remove('zhong');
											identityList.push('nei');
											break;
										case 3:
											identityList.remove('fan');
											identityList.push('nei');
											break;
									}
								}
							}
							var addSetting = function (dialog) {
								dialog.add('选择身份').classList.add('add-setting');
								var table = document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '100%';
								table.style.position = 'relative';
								var listi;
								if (event.zhongmode) {
									listi = ['random', 'zhu', 'mingzhong', 'zhong', 'nei', 'fan'];
								} else {
									listi = ['random', 'zhu', 'zhong', 'nei', 'fan'];
								}
								for (var i = 0; i < listi.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.link = listi[i];
									if (td.link === game.me.identity) {
										td.classList.add('bluebg');
									}
									table.appendChild(td);
									td.innerHTML = '<span>' + get.translation(listi[i] + '2') + '</span>';
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
										if (_status.dragged) return;
										if (_status.justdragged) return;
										_status.tempNoButton = true;
										setTimeout(function () {
											_status.tempNoButton = false;
										}, 500);
										var link = this.link;
										if (game.zhu) {
											if (link != 'random') {
												_status.event.parent.fixedseat = get.distance(game.me, game.zhu, 'absolute');
											}
											if (game.zhu.name) game.zhu.uninit();
											delete game.zhu.isZhu;
											delete game.zhu.identityShown;
										}
										var current = this.parentNode.querySelector('.bluebg');
										if (current) {
											current.classList.remove('bluebg');
										}
										current = seats.querySelector('.bluebg');
										if (current) {
											current.classList.remove('bluebg');
										}
										if (link == 'random') {
											if (event.zhongmode) {
												link = ['zhu', 'zhong', 'nei', 'fan', 'mingzhong'].randomGet();
											} else {
												link = ['zhu', 'zhong', 'nei', 'fan'].randomGet();
											}
											for (var i = 0; i < this.parentNode.childElementCount; i++) {
												if (this.parentNode.childNodes[i].link == link) {
													this.parentNode.childNodes[i].classList.add('bluebg');
												}
											}
										} else {
											this.classList.add('bluebg');
										}
										num = get.config('choice_' + link);
										if (event.zhongmode) {
											num = 6;
											if (link == 'zhu' || link == 'nei' || link == 'mingzhong') {
												num = 8;
											}
										}
										_status.event.parent.swapnodialog = function (dialog, list) {
											var buttons = ui.create.div('.buttons');
											var node = dialog.buttons[0].parentNode;
											dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
											dialog.content.insertBefore(buttons, node);
											buttons.animate('start');
											node.remove();
											game.uncheck();
											game.check();
											for (var i = 0; i < seats.childElementCount; i++) {
												if (get.distance(game.zhu, game.me, 'absolute') === seats.childNodes[i].link) {
													seats.childNodes[i].classList.add('bluebg');
												}
											}
										};
										_status.event = _status.event.parent;
										_status.event.step = 0;
										_status.event.identity = link;
										if (link != (event.zhongmode ? 'mingzhong' : 'zhu')) {
											seats.previousSibling.style.display = '';
											seats.style.display = '';
										} else {
											seats.previousSibling.style.display = 'none';
											seats.style.display = 'none';
										}
										game.resume();
									});
								}
								dialog.content.appendChild(table);
								dialog.add('选择座位').classList.add('add-setting');
								var seats = document.createElement('div');
								seats.classList.add('add-setting');
								seats.style.margin = '0';
								seats.style.width = '100%';
								seats.style.position = 'relative';
								for (var i = 2; i <= game.players.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.innerHTML = get.cnNumber(i, true);
									td.link = i - 1;
									seats.appendChild(td);
									if (get.distance(game.zhu, game.me, 'absolute') === i - 1) {
										td.classList.add('bluebg');
									}
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
										if (_status.dragged) return;
										if (_status.justdragged) return;
										if (get.distance(game.zhu, game.me, 'absolute') == this.link) return;
										var current = this.parentNode.querySelector('.bluebg');
										if (current) {
											current.classList.remove('bluebg');
										}
										this.classList.add('bluebg');
										for (var i = 0; i < game.players.length; i++) {
											if (get.distance(game.players[i], game.me, 'absolute') == this.link) {
												game.swapSeat(game.zhu, game.players[i], false);
												return;
											}
										}
									});
								}
								dialog.content.appendChild(seats);
								if (game.me == game.zhu) {
									seats.previousSibling.style.display = 'none';
									seats.style.display = 'none';
								}
								dialog.add(ui.create.div('.placeholder.add-setting'));
								dialog.add(ui.create.div('.placeholder.add-setting'));
								if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
							};
							var removeSetting = function () {
								var dialog = _status.event.dialog;
								if (dialog) {
									dialog.style.height = '';
									delete dialog._scrollset;
									var list = Array.from(dialog.querySelectorAll('.add-setting'));
									while (list.length) {
										list.shift().remove();
									}
									ui.update();
								}
							};
							event.addSetting = addSetting;
							event.removeSetting = removeSetting;
							event.list = [];
							identityList.randomSort();
							if (event.identity) {
								identityList.remove(event.identity);
								identityList.unshift(event.identity);
								if (event.fixedseat) {
									var zhuIdentity = _status.mode == 'zhong' ? 'mingzhong' : 'zhu';
									if (zhuIdentity != event.identity) {
										identityList.remove(zhuIdentity);
										identityList.splice(event.fixedseat, 0, zhuIdentity);
									}
									delete event.fixedseat;
								}
								delete event.identity;
							} else if (_status.mode != 'zhong' && (!_status.brawl || !_status.brawl.identityShown)) {
								var ban_identity = [];
								ban_identity.push(get.config('ban_identity') || 'off');
								if (ban_identity[0] != 'off') {
									ban_identity.push(get.config('ban_identity2') || 'off');
									if (ban_identity[1] != 'off') {
										ban_identity.push(get.config('ban_identity3') || 'off');
									}
								}
								ban_identity.remove('off');
								if (ban_identity.length) {
									var identityList2 = identityList.slice(0);
									for (var i = 0; i < ban_identity.length; i++) {
										while (identityList2.remove(ban_identity[i]));
									}
									ban_identity = identityList2.randomGet();
									identityList.remove(ban_identity);
									identityList.splice(game.players.indexOf(game.me), 0, ban_identity);
								}
							}
							for (i = 0; i < game.players.length; i++) {
								if (_status.brawl && _status.brawl.identityShown) {
									if (game.players[i].identity == 'zhu') game.zhu = game.players[i];
									game.players[i].identityShown = true;
								} else {
									game.players[i].node.identity.classList.add('guessing');
									game.players[i].identity = identityList[i];
									game.players[i].setIdentity('cai');
									if (event.zhongmode) {
										if (identityList[i] == 'mingzhong') {
											game.zhu = game.players[i];
										} else if (identityList[i] == 'zhu') {
											game.zhu2 = game.players[i];
										}
									} else {
										if (identityList[i] == 'zhu') {
											game.zhu = game.players[i];
										}
									}
									game.players[i].identityShown = false;
								}
							}
							if (get.config('special_identity') && !event.zhongmode && game.players.length == 8) {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].special_identity;
								}
								event.special_identity = [];
								var zhongs = game.filterPlayer(function (current) {
									return current.identity == 'zhong';
								});
								var fans = game.filterPlayer(function (current) {
									return current.identity == 'fan';
								});
								if (fans.length >= 1) {
									fans.randomRemove().special_identity = 'identity_zeishou';
									event.special_identity.push('identity_zeishou');
								}
								if (zhongs.length > 1) {
									zhongs.randomRemove().special_identity = 'identity_dajiang';
									zhongs.randomRemove().special_identity = 'identity_junshi';
									event.special_identity.push('identity_dajiang');
									event.special_identity.push('identity_junshi');
								} else if (zhongs.length == 1) {
									if (Math.random() < 0.5) {
										zhongs.randomRemove().special_identity = 'identity_dajiang';
										event.special_identity.push('identity_dajiang');
									} else {
										zhongs.randomRemove().special_identity = 'identity_junshi';
										event.special_identity.push('identity_junshi');
									}
								}
							}
							if (!game.zhu) game.zhu = game.me;
							else {
								game.zhu.setIdentity();
								game.zhu.identityShown = true;
								game.zhu.isZhu = game.zhu.identity == 'zhu';
								game.zhu.node.identity.classList.remove('guessing');
								game.me.setIdentity();
								game.me.node.identity.classList.remove('guessing');
							}
							//选将框分配
							for (i in lib.characterReplace) {
								var ix = lib.characterReplace[i];
								for (var j = 0; j < ix.length; j++) {
									if (chosen.contains(ix[j]) || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
								}
								if (ix.length) {
									event.list.push(i);
									list4.addArray(ix);
									var bool = false;
									for (var j of ix) {
										if (lib.character[j][4] && lib.character[j][4].contains('zhu')) {
											bool = true;
											break;
										}
									}
									(bool ? list2 : list3).push(i);
								}
							}
							for (i in lib.character) {
								if (list4.contains(i)) continue;
								if (chosen.contains(i)) continue;
								if (lib.filter.characterDisabled(i)) continue;
								event.list.push(i);
								list4.push(i);
								if (lib.character[i][4] && lib.character[i][4].contains('zhu')) {
									list2.push(i);
								} else {
									list3.push(i);
								}
							}
							var getZhuList = function () {
								var limit_zhu = get.config('limit_zhu');
								if (!limit_zhu || limit_zhu == 'off') return list2.slice(0).sort(lib.sort.character);
								if (limit_zhu != 'group') {
									var num = parseInt(limit_zhu) || 6;
									return list2.randomGets(num).sort(lib.sort.character);
								}
								var getGroup = function (name) {
									if (lib.characterReplace[name]) return lib.character[lib.characterReplace[name][0]][1];
									return lib.character[name][1];
								};
								var list2x = list2.slice(0);
								list2x.randomSort();
								for (var i = 0; i < list2x.length; i++) {
									for (var j = i + 1; j < list2x.length; j++) {
										if (getGroup(list2x[i]) == getGroup(list2x[j])) {
											list2x.splice(j--, 1);
										}
									}
								}
								list2x.sort(lib.sort.character);
								return list2x;
							};
							event.list.randomSort();
							_status.characterlist = list4.slice(0).randomSort();
							list3.randomSort();
							if (_status.brawl && _status.brawl.chooseCharacterFilter) {
								_status.brawl.chooseCharacterFilter(event.list, getZhuList(), list3);
							}
							var num = get.config('choice_' + game.me.identity);
							if (event.zhongmode) {
								num = 6;
								if (game.me.identity == 'zhu' || game.me.identity == 'nei' || game.me.identity == 'mingzhong') {
									num = 8;
								}
							}
							if (game.zhu != game.me) {
								var evtlist = event.list.slice(0);
								var evtlist2 = list2.slice(0);
								var banZhu = lib.config.extension_AI优化_zhu;
								if (lib.config.extension_AI优化_zhu == undefined) banZhu = [];
								for (var i = 0; i < evtlist.length; i++) {
									var listx = lib.characterReplace[evtlist[i]];
									if (!listx) {
										if (banZhu.contains(evtlist[i])) evtlist.splice(i--, 1);
									}
								}
								for (var i = 0; i < evtlist2.length; i++) {
									var listx = lib.characterReplace[evtlist2[i]];
									if (!listx) {
										if (banZhu.contains(evtlist2[i])) evtlist2.splice(i--, 1);
									}
								}
								var GetZhuList = function () {
									var limit_zhu = get.config('limit_zhu');
									if (!limit_zhu || limit_zhu == 'off') return evtlist2.slice(0).sort(lib.sort.character);
									if (limit_zhu != 'group') {
										var num = parseInt(limit_zhu) || 6;
										return evtlist2.randomGets(num).sort(lib.sort.character);
									}
									var getGroup = function (name) {
										if (lib.characterReplace[name]) return lib.character[lib.characterReplace[name][0]][1];
										return lib.character[name][1];
									};
									var list2x = evtlist2.slice(0);
									list2x.randomSort();
									for (var i = 0; i < list2x.length; i++) {
										for (var j = i + 1; j < list2x.length; j++) {
											if (getGroup(list2x[i]) == getGroup(list2x[j])) {
												list2x.splice(j--, 1);
											}
										}
									}
									list2x.sort(lib.sort.character);
									return list2x;
								};
								event.ai(game.zhu, evtlist, GetZhuList());
								event.list.remove(get.sourceCharacter(game.zhu.name1));
								event.list.remove(get.sourceCharacter(game.zhu.name2));
								if (_status.brawl && _status.brawl.chooseCharacter) {
									list = _status.brawl.chooseCharacter(event.list, num);
									if (list === false || list === 'nozhu') {
										list = event.list.slice(0, num);
									}
								} else {
									list = event.list.slice(0, num);
								}
							} else {
								if (_status.brawl && _status.brawl.chooseCharacter) {
									list = _status.brawl.chooseCharacter(getZhuList(), list3, num);
									if (list === false) {
										if (event.zhongmode) {
											list = list3.slice(0, 6);
										} else {
											list = getZhuList().concat(list3.slice(0, num));
										}
									} else if (list === 'nozhu') {
										list = event.list.slice(0, num);
									}
								} else {
									if (event.zhongmode) {
										list = list3.slice(0, 8);
									} else {
										list = getZhuList().concat(list3.slice(0, num));
									}
								}
							}
							delete event.swapnochoose;
							var dialog;
							if (event.swapnodialog) {
								dialog = ui.dialog;
								event.swapnodialog(dialog, list);
								delete event.swapnodialog;
							} else {
								var str = '选择角色';
								if (_status.brawl && _status.brawl.chooseCharacterStr) {
									str = _status.brawl.chooseCharacterStr;
								}
								dialog = ui.create.dialog(str, 'hidden', [list, 'characterx']);
								if (!_status.brawl || !_status.brawl.noAddSetting) {
									if (get.config('change_identity')) {
										addSetting(dialog);
									}
								}
							}
							if (game.me.special_identity) {
								dialog.setCaption('选择角色（' + get.translation(game.me.special_identity) + '）');
								game.me.node.identity.firstChild.innerHTML = get.translation(game.me.special_identity + '_bg');
							} else {
								dialog.setCaption('选择角色');
								game.me.setIdentity();
							}
							if (!event.chosen.length) {
								game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
									if (_status.brawl && _status.brawl.doubleCharacter) return 2;
									return get.config('double_character') ? 2 : 1;
								};
							} else {
								lib.init.onfree();
							}
							ui.create.cheat = function () {
								_status.createControl = ui.cheat2;
								ui.cheat = ui.create.control('更换', function () {
									if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
										return;
									}
									if (game.changeCoin) {
										game.changeCoin(-3);
									}
									if (game.zhu != game.me) {
										event.list.randomSort();
										if (_status.brawl && _status.brawl.chooseCharacter) {
											list = _status.brawl.chooseCharacter(event.list, num);
											if (list === false || list === 'nozhu') {
												list = event.list.slice(0, num);
											}
										} else {
											list = event.list.slice(0, num);
										}
									} else {
										getZhuList().sort(lib.sort.character);
										list3.randomSort();
										if (_status.brawl && _status.brawl.chooseCharacter) {
											list = _status.brawl.chooseCharacter(getZhuList(), list3, num);
											if (list === false) {
												if (event.zhongmode) {
													list = list3.slice(0, 6);
												} else {
													list = getZhuList().concat(list3.slice(0, num));
												}
											} else if (list === 'nozhu') {
												event.list.randomSort();
												list = event.list.slice(0, num);
											}
										} else {
											if (event.zhongmode) {
												list = list3.slice(0, 6);
											} else {
												list = getZhuList().concat(list3.slice(0, num));
											}
										}
									}
									var buttons = ui.create.div('.buttons');
									var node = _status.event.dialog.buttons[0].parentNode;
									_status.event.dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
									_status.event.dialog.content.insertBefore(buttons, node);
									buttons.animate('start');
									node.remove();
									game.uncheck();
									game.check();
								});
								delete _status.createControl;
							};
							if (lib.onfree) {
								lib.onfree.push(function () {
									event.dialogxx = ui.create.characterDialog('heightset');
									if (ui.cheat2) {
										ui.cheat2.animate('controlpressdownx', 500);
										ui.cheat2.classList.remove('disabled');
									}
								});
							} else {
								event.dialogxx = ui.create.characterDialog('heightset');
							}
							ui.create.cheat2 = function () {
								ui.cheat2 = ui.create.control('自由选将', function () {
									if (this.dialog == _status.event.dialog) {
										if (game.changeCoin) {
											game.changeCoin(50);
										}
										this.dialog.close();
										_status.event.dialog = this.backup;
										this.backup.open();
										delete this.backup;
										game.uncheck();
										game.check();
										if (ui.cheat) {
											ui.cheat.animate('controlpressdownx', 500);
											ui.cheat.classList.remove('disabled');
										}
									} else {
										if (game.changeCoin) {
											game.changeCoin(-10);
										}
										this.backup = _status.event.dialog;
										_status.event.dialog.close();
										_status.event.dialog = _status.event.parent.dialogxx;
										this.dialog = _status.event.dialog;
										this.dialog.open();
										game.uncheck();
										game.check();
										if (ui.cheat) {
											ui.cheat.classList.add('disabled');
										}
									}
								});
								if (lib.onfree) {
									ui.cheat2.classList.add('disabled');
								}
							};
							if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
								if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
								if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
							}
							'step 1'
							if (ui.cheat) {
								ui.cheat.close();
								delete ui.cheat;
							}
							if (ui.cheat2) {
								ui.cheat2.close();
								delete ui.cheat2;
							}
							if (event.chosen.length) {
								event.choosed = event.chosen;
							} else if (event.modchosen) {
								if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
								else event.modchosen[1] = result.buttons[0].link;
								event.choosed = event.modchosen;
							} else if (result.buttons.length == 2) {
								event.choosed = [result.buttons[0].link, result.buttons[1].link];
								game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
							} else {
								event.choosed = [result.buttons[0].link];
								game.addRecentCharacter(result.buttons[0].link);
							}
							var name = event.choosed[0];
							if (get.is.double(name)) {
								game.me._groupChosen = true;
								game.me.chooseControl(get.is.double(name, true)).set('prompt', '请选择你的势力');
							} else if (lib.character[name][1] == 'shen' && !lib.character[name][4].contains('hiddenSkill') && get.config('choose_group')) {
								var list = lib.group.slice(0);
								list.remove('shen');
								game.me.chooseControl(list).set('prompt', '请选择神武将的势力');
							}
							'step 2'
							event.group = result.control || false;
							if (event.choosed.length == 2) {
								game.me.init(event.choosed[0], event.choosed[1]);
							} else {
								game.me.init(event.choosed[0]);
							}
							event.list.remove(get.sourceCharacter(game.me.name1));
							event.list.remove(get.sourceCharacter(game.me.name2));
							if (game.me == game.zhu && game.players.length > 4) {
								game.me.hp++;
								game.me.maxHp++;
								game.me.update();
							}
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i] == game.zhu || game.players[i] == game.me) continue;
								event.list.randomSort();
								var evtlist = event.list.slice(0);
								var banZhong = lib.config.extension_AI优化_zhong;
								var banFan = lib.config.extension_AI优化_fan;
								var banNei = lib.config.extension_AI优化_nei;
								if (lib.config.extension_AI优化_zhong == undefined) banZhong = [];
								if (lib.config.extension_AI优化_fan == undefined) banFan = [];
								if (lib.config.extension_AI优化_nei == undefined) banNei = [];
								if (game.players[i].identity == 'zhong') {
									for (var j = 0; j < evtlist.length; j++) {
										var listx = lib.characterReplace[evtlist[j]];
										if (!listx) {
											if (banZhong.contains(evtlist[j])) evtlist.splice(j--, 1);
										}
									}
								}
								if (game.players[i].identity == 'fan') {
									for (var j = 0; j < evtlist.length; j++) {
										var listx = lib.characterReplace[evtlist[j]];
										if (!listx) {
											if (banFan.contains(evtlist[j])) evtlist.splice(j--, 1);
										}
									}
								}
								if (game.players[i].identity == 'nei') {
									for (var j = 0; j < evtlist.length; j++) {
										var listx = lib.characterReplace[evtlist[j]];
										if (!listx) {
											if (banNei.contains(evtlist[j])) evtlist.splice(j--, 1);
										}
									}
								}
								event.ai(game.players[i], evtlist.splice(0, get.config('choice_' + game.players[i].identity)));
								event.list.remove(get.sourceCharacter(game.players[i].name1));
								event.list.remove(get.sourceCharacter(game.players[i].name2));
							}
							'step 3'
							if (event.group) {
								game.me.group = event.group;
								game.me.node.name.dataset.nature = get.groupnature(game.me.group);
								game.me.update();
							}
							for (var i = 0; i < game.players.length; i++) {
								_status.characterlist.remove(game.players[i].name);
								_status.characterlist.remove(game.players[i].name1);
								_status.characterlist.remove(game.players[i].name2);
							}
							'step 4'
							setTimeout(function () {
								ui.arena.classList.remove('choose-character');
							}, 500);
							if (event.special_identity) {
								for (var i = 0; i < event.special_identity.length; i++) {
									game.zhu.addSkill(event.special_identity[i]);
								}
							}
						});
					};
				}, 50);
			}
			//斗地主ai禁选
			if (lib.config.mode == 'doudizhu') {
				//智斗斗地主
				setTimeout(function () {
					lib.game.chooseCharacterZhidou = function () {
						var next = game.createEvent('chooseCharacter', false);
						next.setContent(function () {
							'step 0'
							game.no_continue_game = true;
							lib.init.onfree();
							'step 1'
							ui.arena.classList.add('choose-character');
							var i;
							var groups = [];
							event.list = [];
							event.map = {};
							var chara = get.config('character_online') || lib.characterOnline;
							for (i in chara) {
								var list = chara[i];
								for (var j = 0; j < list.length; j++) {
									if (!lib.character[list[j]] || (i == 'key' && lib.filter.characterDisabled(list[j]))) list.splice(j--, 1);
								}
								if (list.length >= 3) {
									groups.push(i);
									event.list.addArray(list);
								}
							}
							event.list.randomSort();
							_status.characterlist = event.list.slice(0);
							event.controls = ['不叫地主', '一倍', '两倍', '三倍'];
							for (var player of game.players) {
								var id = player.playerid;
								player._group = groups.randomRemove(1)[0];
								event.map[id] = chara[player._group].randomGets(4);
								player.storage.doudizhu_cardPile = get.cards(20).sort(function (a, b) {
									if (a.name != b.name) return lib.sort.card(a.name, b.name);
									else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
									else return a.number - b.number;
								});
							}
							event.dialog = ui.create.dialog('你的选将框与底牌', [event.map[game.me.playerid], 'character'], game.me.storage.doudizhu_cardPile);
							event.start = game.players.randomGet();
							event.current = event.start;
							game.delay(7);
							'step 2'
							event.current.classList.add('glow_phase');
							if (event.current == game.me) event.dialog.content.firstChild.innerHTML = '是否叫地主？';
							else {
								event.dialog.content.firstChild.innerHTML = '请等待其他玩家叫地主';
								game.delay(2);
							}
							event.current.chooseControl(event.controls).set('ai', function () {
								return _status.event.getParent().controls.randomGet();
							});
							'step 3'
							event.current.classList.remove('glow_phase');
							event.current._control = result.control;
							event.current.chat(result.control);
							if (result.control == '三倍') {
								game.bonusNum = 3;
								game.zhu = event.current;
								return;
							} else if (result.control != '不叫地主') {
								event.controls.splice(1, event.controls.indexOf(result.control));
								event.tempDizhu = event.current;
								if (result.control == '二倍') game.bonusNum = 2;
							}
							event.current = event.current.next;
							if (event.current == event.start && (event.start == event.tempDizhu || event.start._control == '不叫地主')) {
								game.zhu = event.tempDizhu || event.start.previous;
							} else if (event.current == event.start.next && event.current._control) {
								game.zhu = event.tempDizhu;
							} else event.goto(2);
							if (event.current == event.start.previous && !event.tempDizhu) event.controls.remove('不叫地主');
							'step 4'
							game.updateRoundNumber();
							var chara = get.config('character_online') || lib.characterOnline;
							for (i in chara) {
								var list = chara[i];
								for (var j = 0; j < list.length; j++) {
									if (!lib.character[list[j]] || (i == 'key' && lib.filter.characterDisabled(list[j]))) list.splice(j--, 1);
								}
							}
							var banYI = lib.config.extension_AI优化_yi;
							var banER = lib.config.extension_AI优化_er;
							var banSAN = lib.config.extension_AI优化_san;
							if (lib.config.extension_AI优化_yi == undefined) banYI = [];
							if (lib.config.extension_AI优化_er == undefined) banER = [];
							if (lib.config.extension_AI优化_san == undefined) banSAN = [];
							for (var player of game.players) {
								player.identity = player == game.zhu ? 'zhu' : 'fan';
								player.showIdentity();
								var id = player.playerid;
								var group = player._group;
								if (player != game.me) {
									if (player == game.zhu) {
										var character = chara[group].slice(0);
										for (var i = 0; i < character.length; i++) {
											if (banYI.contains(character[i])) character.splice(i--, 1);
										}
										event.map[id] = character.randomGets(4);
									} else {
										if (get.distance(game.zhu, player, 'absolute') == 1) {
											var character = chara[group].slice(0);
											for (var i = 0; i < character.length; i++) {
												if (banER.contains(character[i])) character.splice(i--, 1);
											}
											event.map[id] = character.randomGets(4);
										} else {
											var character = chara[group].slice(0);
											for (var i = 0; i < character.length; i++) {
												if (banSAN.contains(character[i])) character.splice(i--, 1);
											}
											event.map[id] = character.randomGets(4);
										}
									}
								}
							}
							event.dialog.content.firstChild.innerHTML = '请选择' + get.cnNumber(game.me == game.zhu ? 2 : 1) + '张武将牌';
							game.me.chooseButton(event.dialog, true, game.me == game.zhu ? 2 : 1).set('filterButton', function (button) {
								return typeof button.link == 'string';
							});
							'step 5'
							game.me.init(result.links[0], result.links[1]);
							for (var player of game.players) {
								if (player != game.me) {
									if (player == game.zhu) {
										var list = event.map[player.playerid].randomGets(2);
										player.init(list[0], list[1]);
									} else player.init(event.map[player.playerid].randomGet());
								}
								player.markSkill('doudizhu_cardPile');
							}
							game.zhu.hp = 4;
							game.zhu.maxHp = 4;
							game.zhu.update();
							for (var i = 0; i < game.players.length; i++) {
								_status.characterlist.remove(game.players[i].name1);
								_status.characterlist.remove(game.players[i].name2);
							}
							setTimeout(function () {
								ui.arena.classList.remove('choose-character');
							}, 500);
						});
					};
				}, 50);
				//兵临城下
				setTimeout(function () {
					lib.game.chooseCharacterBinglin = function () {
						var next = game.createEvent('chooseCharacter', false);
						next.setContent(function () {
							'step 0'
							game.no_continue_game = true;
							lib.init.onfree();
							'step 1'
							ui.arena.classList.add('choose-character');
							game.zhuSkill = 'zhuSkill_' + ['xiangyang', 'jiangling', 'fancheng'].randomGet();
							var i;
							event.list = [];
							event.map = {};
							for (i in lib.character) {
								if (lib.filter.characterDisabled(i)) continue;
								event.list.push(i);
							}
							event.list.randomSort();
							_status.characterlist = event.list.slice(0);
							event.map[game.me.playerid] = event.list.randomRemove(4);
							event.controls = ['不叫地主', '一倍', '两倍', '三倍'];
							event.dialog = ui.create.dialog('本局城池：' + get.translation(game.zhuSkill), [event.map[game.me.playerid], 'character']);
							event.start = game.players.randomGet();
							event.current = event.start;
							game.delay(8);
							'step 2'
							event.current.classList.add('glow_phase');
							if (event.current == game.me) event.dialog.content.firstChild.innerHTML = '是否叫地主？';
							else {
								event.dialog.content.firstChild.innerHTML = '请等待其他玩家叫地主';
								game.delay(2);
							}
							event.current.chooseControl(event.controls).set('ai', function () {
								return _status.event.getParent().controls.randomGet();
							});
							'step 3'
							event.current.classList.remove('glow_phase');
							event.current._control = result.control;
							event.current.chat(result.control);
							if (result.control == '三倍') {
								game.bonusNum = 3;
								game.zhu = event.current;
								return;
							} else if (result.control != '不叫地主') {
								event.controls.splice(1, event.controls.indexOf(result.control));
								event.tempDizhu = event.current;
								if (result.control == '二倍') game.bonusNum = 2;
							}
							event.current = event.current.next;
							if (event.current == event.start) {
								game.zhu = event.tempDizhu || event.start.previous;
							} else event.goto(2);
							if (event.current == event.start.previous && !event.tempDizhu) event.controls.remove('不叫地主');
							'step 4'
							var evtlist = event.list.slice(0);
							var banYI = lib.config.extension_AI优化_yi;
							var banER = lib.config.extension_AI优化_er;
							var banSAN = lib.config.extension_AI优化_san;
							if (lib.config.extension_AI优化_yi == undefined) banYI = [];
							if (lib.config.extension_AI优化_er == undefined) banER = [];
							if (lib.config.extension_AI优化_san == undefined) banSAN = [];
							for (var player of game.players) {
								player.identity = player == game.zhu ? 'zhu' : 'fan';
								player.showIdentity();
								var id = player.playerid;
								if (player != game.me) {
									if (player == game.zhu) {
										for (var i = 0; i < evtlist.length; i++) {
											if (banYI.contains(evtlist[i])) evtlist.splice(i--, 1);
										}
										event.map[id] = evtlist.randomGets(7);
										event.list.removeArray(event.map[id]);
									} else {
										if (get.distance(game.zhu, player, 'absolute') == 1) {
											for (var i = 0; i < evtlist.length; i++) {
												if (banER.contains(evtlist[i])) evtlist.splice(i--, 1);
											}
											event.map[id] = evtlist.randomGets(4);
											event.list.removeArray(event.map[id]);
										} else {
											for (var i = 0; i < evtlist.length; i++) {
												if (banSAN.contains(evtlist[i])) evtlist.splice(i--, 1);
											}
											event.map[id] = evtlist.randomGets(4);
											event.list.removeArray(event.map[id]);
										}
									}
								}
							}
							event.dialog.close();
							if (game.me == game.zhu) {
								event.map[game.zhu.playerid].addArray(event.list.randomRemove(3));
							}
							'step 5'
							var list = ['请选择你的武将', [event.map[game.me.playerid], 'character']];
							if (game.me.identity == 'fan') {
								var friend = game.findPlayer(function (current) {
									return current != game.me && current.identity == 'fan';
								});
								list.push('<div class="text center">队友的选将框</div>');
								list.push([event.map[friend.playerid], 'character']);
							}
							game.me
								.chooseButton(list, true)
								.set('list', event.map[game.me.playerid])
								.set('filterButton', function (button) {
									return _status.event.list.contains(button.link);
								});
							'step 6'
							game.me.init(result.links[0]);
							for (var player of game.players) {
								if (player != game.me) player.init(event.map[player.playerid].randomGet());
								if (player == game.zhu) {
									player.addSkill(game.zhuSkill);
								} else player.addSkill('binglin_neihong');
							}
							game.zhu.hp++;
							game.zhu.maxHp++;
							game.zhu.update();
							for (var i = 0; i < game.players.length; i++) {
								_status.characterlist.remove(game.players[i].name1);
								_status.characterlist.remove(game.players[i].name2);
							}
							setTimeout(function () {
								ui.arena.classList.remove('choose-character');
							}, 500);
						});
					};
				}, 50);
				//欢乐斗地主
				setTimeout(function () {
					lib.game.chooseCharacterHuanle = function () {
						var next = game.createEvent('chooseCharacter', false);
						next.setContent(function () {
							'step 0'
							ui.arena.classList.add('choose-character');
							game.no_continue_game = true;
							var i;
							event.list = [];
							event.list2 = [];
							var list4 = [];
							if (!event.map) event.map = {};
							for (i in lib.characterReplace) {
								var ix = lib.characterReplace[i];
								for (var j = 0; j < ix.length; j++) {
									if (lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
								}
								if (ix.length) {
									var name = ix.randomGet();
									event.list.push(name);
									if (game.recommendDizhu.contains(name)) event.list2.push(name);
									list4.addArray(ix);
								}
							}
							for (i in lib.character) {
								if (list4.contains(i) || lib.filter.characterDisabled(i)) continue;
								event.list.push(i);
								if (game.recommendDizhu.contains(i)) event.list2.push(i);
							}
							event.list.randomSort();
							_status.characterlist = event.list.slice(0);
							event.controls = ['不叫', '叫地主'];
							var id = game.me.playerid;
							if (!event.map[id]) event.map[id] = [];
							event.map[id].addArray(event.list2.randomRemove(1));
							event.list.removeArray(event.map[id]);
							event.map[id].addArray(event.list.randomRemove(4 - event.map[id].length));
							event.list2.removeArray(event.map[id]);
							event.dialog = ui.create.dialog('你的选将框', [event.map[game.me.playerid], 'character']);
							event.start = game.players.randomGet();
							event.current = event.start;
							lib.init.onfree();
							game.delay(2.5);
							'step 1'
							event.current.chooseControl(event.controls).set('ai', function () {
								return Math.random() > 0.5 ? '不叫' : '叫地主';
							});
							if (event.current == game.me) {
								event.dialog.content.childNodes[0].innerHTML = '是否抢地主？';
							}
							'step 2'
							event.current.chat(result.control);
							if (result.control == '叫地主' || event.current == event.start.next) {
								game.zhu = result.control == '叫地主' ? event.current : event.current.next;
								var evtlist = event.list.slice(0);
								var banYI = lib.config.extension_AI优化_yi;
								var banER = lib.config.extension_AI优化_er;
								var banSAN = lib.config.extension_AI优化_san;
								if (lib.config.extension_AI优化_yi == undefined) banYI = [];
								if (lib.config.extension_AI优化_er == undefined) banER = [];
								if (lib.config.extension_AI优化_san == undefined) banSAN = [];
								for (var player of game.players) {
									player.identity = player == game.zhu ? 'zhu' : 'fan';
									player.showIdentity();
									var id = player.playerid;
									if (player != game.me) {
										if (player == game.zhu) {
											for (var i = 0; i < evtlist.length; i++) {
												if (banYI.contains(evtlist[i])) evtlist.splice(i--, 1);
											}
											event.map[id] = evtlist.randomGets(7);
											event.list.removeArray(event.map[id]);
										} else {
											if (get.distance(game.zhu, player, 'absolute') == 1) {
												for (var i = 0; i < evtlist.length; i++) {
													if (banER.contains(evtlist[i])) evtlist.splice(i--, 1);
												}
												event.map[id] = evtlist.randomGets(4);
												event.list.removeArray(event.map[id]);
											} else {
												for (var i = 0; i < evtlist.length; i++) {
													if (banSAN.contains(evtlist[i])) evtlist.splice(i--, 1);
												}
												event.map[id] = evtlist.randomGets(4);
												event.list.removeArray(event.map[id]);
											}
										}
									}
								}
								event.dialog.close();
								if (game.me == game.zhu) {
									event.map[game.zhu.playerid].addArray(event.list.randomRemove(3));
								}
							} else {
								event.current = event.current.next;
								event.goto(1);
								game.delay(1.5);
							}
							'step 3'
							game.me.chooseButton(['请选择你的武将', [event.map[game.me.playerid], 'character']], true);
							'step 4'
							game.me.init(result.links[0]);
							for (var player of game.players) {
								if (player != game.me) player.init(event.map[player.playerid].randomGet());
							}
							game.zhu.hp++;
							game.zhu.maxHp++;
							game.zhu.update();
							for (var i = 0; i < game.players.length; i++) {
								_status.characterlist.remove(game.players[i].name1);
								_status.characterlist.remove(game.players[i].name2);
							}
							setTimeout(function () {
								ui.arena.classList.remove('choose-character');
							}, 500);
						});
					};
				}, 50);
				//开黑斗地主
				setTimeout(function () {
					lib.game.chooseCharacterKaihei = function () {
						var next = game.createEvent('chooseCharacter', false);
						next.setContent(function () {
							'step 0'
							ui.arena.classList.add('choose-character');
							game.no_continue_game = true;
							var i;
							var identityList = ['zhu', 'fan', 'fan'];
							game.saveConfig('continue_name');
							event.list = [];
							var list4 = [];
							identityList.randomSort();
							for (i = 0; i < game.players.length; i++) {
								game.players[i].identity = identityList[i];
								game.players[i].showIdentity();
								if (identityList[i] == 'zhu') {
									game.zhu = game.players[i];
								}
							}
							if (!game.zhu) game.zhu = game.me;
							else {
								game.zhu.setIdentity();
								game.zhu.identityShown = true;
								game.zhu.isZhu = game.zhu.identity == 'zhu';
								game.zhu.node.identity.classList.remove('guessing');
								game.me.setIdentity();
								game.me.node.identity.classList.remove('guessing');
							}

							for (i in lib.characterReplace) {
								var ix = lib.characterReplace[i];
								for (var j = 0; j < ix.length; j++) {
									if (lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
								}
								if (ix.length) {
									event.list.push(ix.randomGet());
									list4.addArray(ix);
								}
							}
							for (i in lib.character) {
								if (list4.contains(i) || lib.filter.characterDisabled(i)) continue;
								event.list.push(i);
							}
							event.list.randomSort();
							_status.characterlist = event.list.slice(0);
							var evtlist = event.list.slice(0);
							var banYI = lib.config.extension_AI优化_yi;
							var banER = lib.config.extension_AI优化_er;
							var banSAN = lib.config.extension_AI优化_san;
							if (lib.config.extension_AI优化_yi == undefined) banYI = [];
							if (lib.config.extension_AI优化_er == undefined) banER = [];
							if (lib.config.extension_AI优化_san == undefined) banSAN = [];
							for (var player of game.players) {
								if (player != game.me) {
									if (player == game.zhu) {
										for (var i = 0; i < evtlist.length; i++) {
											if (banYI.contains(evtlist[i])) evtlist.splice(i--, 1);
										}
										player._characterChoice = evtlist.randomGets(5);
										event.list.removeArray(player._characterChoice);
									} else {
										if (get.distance(game.zhu, player, 'absolute') == 1) {
											for (var i = 0; i < evtlist.length; i++) {
												if (banER.contains(evtlist[i])) evtlist.splice(i--, 1);
											}
											player._characterChoice = evtlist.randomGets(3);
											event.list.removeArray(player._characterChoice);
										} else {
											for (var i = 0; i < evtlist.length; i++) {
												if (banSAN.contains(evtlist[i])) evtlist.splice(i--, 1);
											}
											player._characterChoice = evtlist.randomGets(3);
											event.list.removeArray(player._characterChoice);
										}
									}
								} else {
									player._characterChoice = event.list.randomRemove(player.identity == 'zhu' ? 5 : 3);
								}
								if (player.identity == 'fan') player._friend = player.next.identity == 'fan' ? player.next : player.previous;
							}
							var createDialog = ['选择武将'];
							createDialog.push([game.me._characterChoice, 'character']);
							if (game.me._friend) {
								createDialog.push('队友的武将');
								createDialog.push([game.me._friend._characterChoice, 'character']);
							}
							game.me
								.chooseButton(createDialog, true)
								.set('onfree', true)
								.set('filterButton', function (button) {
									return _status.event.player._characterChoice.contains(button.link);
								});
							'step 1'
							game.me.init(result.links[0]);
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i] != game.me) game.players[i].init(game.players[i]._characterChoice.randomGet());
								_status.characterlist.remove(game.players[i].name1);
								_status.characterlist.remove(game.players[i].name2);
								if (game.players[i] == game.zhu) {
									game.players[i].hp++;
									game.players[i].maxHp++;
									game.players[i].update();
								}
							}
							setTimeout(function () {
								ui.arena.classList.remove('choose-character');
							}, 500);
						});
					};
				}, 50);
				//休闲斗地主
				setTimeout(function () {
					lib.game.chooseCharacter = function () {
						if (_status.mode == 'kaihei') {
							game.chooseCharacterKaihei();
							return;
						}
						if (_status.mode == 'huanle') {
							game.chooseCharacterHuanle();
							return;
						}
						if (_status.mode == 'online') {
							game.chooseCharacterZhidou();
							return;
						}
						if (_status.mode == 'binglin') {
							game.chooseCharacterBinglin();
							return;
						}
						var next = game.createEvent('chooseCharacter', false);
						next.showConfig = true;
						next.addPlayer = function (player) {
							var list = lib.config.mode_config.identity.identity[game.players.length - 3].slice(0);
							var list2 = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
							for (var i = 0; i < list.length; i++) list2.remove(list[i]);
							player.identity = list2[0];
							player.setIdentity('cai');
						};
						next.removePlayer = function () {
							return game.players.randomGet(game.me, game.zhu);
						};
						next.ai = function (player, list, list2, back) {
							if (player.identity == 'zhu') {
								var listc = list.slice(0, 2);
								var banYI = lib.config.extension_AI优化_yi;
								if (lib.config.extension_AI优化_yi == undefined) banYI = [];
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banYI.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								if (get.config('double_character')) {
									player.init(listc[0], listc[1]);
								} else {
									player.init(listc[0]);
								}
							} else if (get.distance(game.zhu, player, 'absolute') == 1) {
								var listc = list.slice(0, 2);
								var banER = lib.config.extension_AI优化_er;
								if (lib.config.extension_AI优化_er == undefined) banER = [];
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banER.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								if (get.config('double_character')) {
									player.init(listc[0], listc[1]);
								} else {
									player.init(listc[0]);
								}
							} else {
								var listc = list.slice(0, 2);
								var banSAN = lib.config.extension_AI优化_san;
								if (lib.config.extension_AI优化_san == undefined) banSAN = [];
								var listt = [];
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) {
										var LIST = listx.slice(0);
										for (var j = 0; j < LIST.length; j++) {
											if (banSAN.contains(LIST[j])) LIST.splice(j--, 1);
										}
										if (LIST && LIST.length) {
											listc[i] = LIST.randomGet();
										} else {
											listt.push(listc[i]);
										}
									}
								}
								for (var i = 0; i < listc.length; i++) {
									var a = listc[i];
									for (var j = 0; j < listt.length; j++) {
										var b = listt[j];
										if (a == b) {
											listc.splice(i--, 1);
											listt.splice(j--, 1);
											break;
										}
									}
								}
								if (get.config('double_character')) {
									player.init(listc[0], listc[1]);
								} else {
									player.init(listc[0]);
								}
							}
							if (player == game.zhu) {
								player.hp++;
								player.maxHp++;
								player.update();
							}
							if (back) {
								list.remove(get.sourceCharacter(player.name1));
								list.remove(get.sourceCharacter(player.name2));
								for (var i = 0; i < list.length; i++) {
									back.push(list[i]);
								}
							}
							if (typeof lib.config.test_game == 'string' && player == game.me.next) {
								player.init(lib.config.test_game);
							}
							player.node.name.dataset.nature = get.groupnature(player.group);
						};
						next.setContent(function () {
							'step 0'
							ui.arena.classList.add('choose-character');
							var i;
							var list;
							var list4 = [];
							var identityList = ['zhu', 'fan', 'fan'];
							var chosen = lib.config.continue_name || [];
							game.saveConfig('continue_name');
							event.chosen = chosen;
							var addSetting = function (dialog) {
								dialog.add('选择身份').classList.add('add-setting');
								var table = document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '100%';
								table.style.position = 'relative';
								var listi = ['random', 'zhu', 'fan'];
								for (var i = 0; i < listi.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.link = listi[i];
									if (td.link === game.me.identity) {
										td.classList.add('bluebg');
									}
									table.appendChild(td);
									td.innerHTML = '<span>' + get.translation(listi[i] + '2') + '</span>';
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
										if (_status.dragged) return;
										if (_status.justdragged) return;
										_status.tempNoButton = true;
										setTimeout(function () {
											_status.tempNoButton = false;
										}, 500);
										var link = this.link;
										if (game.zhu.name) {
											if (link != 'random') {
												_status.event.parent.fixedseat = get.distance(game.me, game.zhu, 'absolute');
											}
											game.zhu.uninit();
											delete game.zhu.isZhu;
											delete game.zhu.identityShown;
										}
										var current = this.parentNode.querySelector('.bluebg');
										if (current) {
											current.classList.remove('bluebg');
										}
										current = seats.querySelector('.bluebg');
										if (current) {
											current.classList.remove('bluebg');
										}
										if (link == 'random') {
											link = ['zhu', 'fan'].randomGet();
											for (var i = 0; i < this.parentNode.childElementCount; i++) {
												if (this.parentNode.childNodes[i].link == link) {
													this.parentNode.childNodes[i].classList.add('bluebg');
												}
											}
										} else {
											this.classList.add('bluebg');
										}
										num = get.config('choice_' + link);
										_status.event.parent.swapnodialog = function (dialog, list) {
											var buttons = ui.create.div('.buttons');
											var node = dialog.buttons[0].parentNode;
											dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
											dialog.content.insertBefore(buttons, node);
											buttons.animate('start');
											node.remove();
											game.uncheck();
											game.check();
											for (var i = 0; i < seats.childElementCount; i++) {
												if (get.distance(game.zhu, game.me, 'absolute') === seats.childNodes[i].link) {
													seats.childNodes[i].classList.add('bluebg');
												}
											}
										};
										_status.event = _status.event.parent;
										_status.event.step = 0;
										_status.event.identity = link;
										if (link != (event.zhongmode ? 'mingzhong' : 'zhu')) {
											seats.previousSibling.style.display = '';
											seats.style.display = '';
										} else {
											seats.previousSibling.style.display = 'none';
											seats.style.display = 'none';
										}
										game.resume();
									});
								}
								dialog.content.appendChild(table);
								dialog.add('选择座位').classList.add('add-setting');
								var seats = document.createElement('div');
								seats.classList.add('add-setting');
								seats.style.margin = '0';
								seats.style.width = '100%';
								seats.style.position = 'relative';
								for (var i = 2; i <= game.players.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.innerHTML = get.cnNumber(i, true);
									td.link = i - 1;
									seats.appendChild(td);
									if (get.distance(game.zhu, game.me, 'absolute') === i - 1) {
										td.classList.add('bluebg');
									}
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
										if (_status.dragged) return;
										if (_status.justdragged) return;
										if (get.distance(game.zhu, game.me, 'absolute') == this.link) return;
										var current = this.parentNode.querySelector('.bluebg');
										if (current) {
											current.classList.remove('bluebg');
										}
										this.classList.add('bluebg');
										for (var i = 0; i < game.players.length; i++) {
											if (get.distance(game.players[i], game.me, 'absolute') == this.link) {
												game.swapSeat(game.zhu, game.players[i], false);
												return;
											}
										}
									});
								}
								dialog.content.appendChild(seats);
								if (game.me == game.zhu) {
									seats.previousSibling.style.display = 'none';
									seats.style.display = 'none';
								}
								dialog.add(ui.create.div('.placeholder.add-setting'));
								dialog.add(ui.create.div('.placeholder.add-setting'));
								if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
							};
							var removeSetting = function () {
								var dialog = _status.event.dialog;
								if (dialog) {
									dialog.style.height = '';
									delete dialog._scrollset;
									var list = Array.from(dialog.querySelectorAll('.add-setting'));
									while (list.length) {
										list.shift().remove();
									}
									ui.update();
								}
							};
							event.addSetting = addSetting;
							event.removeSetting = removeSetting;
							event.list = [];
							identityList.randomSort();
							if (event.identity) {
								identityList.remove(event.identity);
								identityList.unshift(event.identity);
								if (event.fixedseat) {
									var zhuIdentity = 'zhu';
									if (zhuIdentity != event.identity) {
										identityList.remove(zhuIdentity);
										identityList.splice(event.fixedseat, 0, zhuIdentity);
									}
									delete event.fixedseat;
								}
								delete event.identity;
							}
							for (i = 0; i < game.players.length; i++) {
								game.players[i].identity = identityList[i];
								game.players[i].showIdentity();
								if (identityList[i] == 'zhu') {
									game.zhu = game.players[i];
								}
							}
							if (!game.zhu) game.zhu = game.me;
							else {
								game.zhu.setIdentity();
								game.zhu.identityShown = true;
								game.zhu.isZhu = game.zhu.identity == 'zhu';
								game.zhu.node.identity.classList.remove('guessing');
								game.me.setIdentity();
								game.me.node.identity.classList.remove('guessing');
							}
							//选将框分配
							for (i in lib.characterReplace) {
								var ix = lib.characterReplace[i];
								for (var j = 0; j < ix.length; j++) {
									if (chosen.contains(ix[j]) || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
								}
								if (ix.length) {
									event.list.push(i);
									list4.addArray(ix);
								}
							}
							for (i in lib.character) {
								if (chosen.contains(i) || list4.contains(i)) continue;
								if (lib.filter.characterDisabled(i)) continue;
								event.list.push(i);
								list4.push(i);
							}
							event.list.randomSort();
							_status.characterlist = list4.slice(0);
							var num = get.config('choice_' + game.me.identity);
							list = event.list.slice(0, num);
							delete event.swapnochoose;
							var dialog;
							if (event.swapnodialog) {
								dialog = ui.dialog;
								event.swapnodialog(dialog, list);
								delete event.swapnodialog;
							} else {
								var str = '选择角色';
								if (_status.brawl && _status.brawl.chooseCharacterStr) {
									str = _status.brawl.chooseCharacterStr;
								}
								dialog = ui.create.dialog(str, 'hidden', [list, 'characterx']);
								if (!_status.brawl || !_status.brawl.noAddSetting) {
									if (get.config('change_identity')) {
										addSetting(dialog);
									}
								}
							}
							dialog.setCaption('选择角色');
							game.me.setIdentity();
							if (!event.chosen.length) {
								game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
									return get.config('double_character') ? 2 : 1;
								};
							} else {
								lib.init.onfree();
							}
							ui.create.cheat = function () {
								_status.createControl = ui.cheat2;
								ui.cheat = ui.create.control('更换', function () {
									if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
										return;
									}
									if (game.changeCoin) {
										game.changeCoin(-3);
									}
									event.list.randomSort();
									list = event.list.slice(0, num);
									var buttons = ui.create.div('.buttons');
									var node = _status.event.dialog.buttons[0].parentNode;
									_status.event.dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
									_status.event.dialog.content.insertBefore(buttons, node);
									buttons.animate('start');
									node.remove();
									game.uncheck();
									game.check();
								});
								delete _status.createControl;
							};
							if (lib.onfree) {
								lib.onfree.push(function () {
									event.dialogxx = ui.create.characterDialog('heightset');
									if (ui.cheat2) {
										ui.cheat2.animate('controlpressdownx', 500);
										ui.cheat2.classList.remove('disabled');
									}
								});
							} else {
								event.dialogxx = ui.create.characterDialog('heightset');
							}
							ui.create.cheat2 = function () {
								ui.cheat2 = ui.create.control('自由选将', function () {
									if (this.dialog == _status.event.dialog) {
										if (game.changeCoin) {
											game.changeCoin(50);
										}
										this.dialog.close();
										_status.event.dialog = this.backup;
										this.backup.open();
										delete this.backup;
										game.uncheck();
										game.check();
										if (ui.cheat) {
											ui.cheat.animate('controlpressdownx', 500);
											ui.cheat.classList.remove('disabled');
										}
									} else {
										if (game.changeCoin) {
											game.changeCoin(-10);
										}
										this.backup = _status.event.dialog;
										_status.event.dialog.close();
										_status.event.dialog = _status.event.parent.dialogxx;
										this.dialog = _status.event.dialog;
										this.dialog.open();
										game.uncheck();
										game.check();
										if (ui.cheat) {
											ui.cheat.classList.add('disabled');
										}
									}
								});
								if (lib.onfree) {
									ui.cheat2.classList.add('disabled');
								}
							};
							if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
								if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
								if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
							}
							'step 1'
							if (ui.cheat) {
								ui.cheat.close();
								delete ui.cheat;
							}
							if (ui.cheat2) {
								ui.cheat2.close();
								delete ui.cheat2;
							}
							var chooseGroup = false;
							if (event.chosen.length) {
								if (lib.character[event.chosen[0]][1] == 'shen') {
									chooseGroup = true;
								}
							} else if (event.modchosen) {
								if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
								else event.modchosen[1] = result.buttons[0].link;
							} else if (result.buttons.length == 2) {
								event.choosed = [result.buttons[0].link, result.buttons[1].link];
								game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
								if (lib.character[event.choosed[0]][1] == 'shen') {
									chooseGroup = true;
								}
							} else {
								event.choosed = [result.buttons[0].link];
								if (lib.character[event.choosed[0]][1] == 'shen') {
									chooseGroup = true;
								}
								game.addRecentCharacter(result.buttons[0].link);
							}
							'step 2'
							if (event.chosen.length) {
								game.me.init(event.chosen[0], event.chosen[1]);
							} else if (event.modchosen) {
								game.me.init(event.modchosen[0], event.modchosen[1]);
							} else if (event.choosed.length == 2) {
								game.me.init(event.choosed[0], event.choosed[1]);
							} else {
								game.me.init(event.choosed[0]);
							}
							event.list.remove(get.sourceCharacter(game.me.name1));
							event.list.remove(get.sourceCharacter(game.me.name2));
							if (game.me == game.zhu) {
								game.me.hp++;
								game.me.maxHp++;
								game.me.update();
							}
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i] != game.me) {
									event.list.randomSort();
									var evtlist = event.list.slice(0);
									var banYI = lib.config.extension_AI优化_yi;
									var banER = lib.config.extension_AI优化_er;
									var banSAN = lib.config.extension_AI优化_san;
									if (lib.config.extension_AI优化_yi == undefined) banYI = [];
									if (lib.config.extension_AI优化_er == undefined) banER = [];
									if (lib.config.extension_AI优化_san == undefined) banSAN = [];
									if (game.players[i].identity == 'zhu') {
										for (var j = 0; j < evtlist.length; j++) {
											var listx = lib.characterReplace[evtlist[j]];
											if (!listx) {
												if (banYI.contains(evtlist[j])) evtlist.splice(j--, 1);
											}
										}
									} else {
										if (get.distance(game.zhu, game.players[i], 'absolute') == 1) {
											for (var j = 0; j < evtlist.length; j++) {
												var listx = lib.characterReplace[evtlist[j]];
												if (!listx) {
													if (banER.contains(evtlist[j])) evtlist.splice(j--, 1);
												}
											}
										} else {
											for (var j = 0; j < evtlist.length; j++) {
												var listx = lib.characterReplace[evtlist[j]];
												if (!listx) {
													if (banSAN.contains(evtlist[j])) evtlist.splice(j--, 1);
												}
											}
										}
									}
									event.ai(game.players[i], evtlist.splice(0, get.config('choice_' + game.players[i].identity)));
									event.list.remove(get.sourceCharacter(game.players[i].name1));
									event.list.remove(get.sourceCharacter(game.players[i].name2));
								}
							}
							'step 3'
							for (var i = 0; i < game.players.length; i++) {
								_status.characterlist.remove(get.sourceCharacter(game.players[i].name1));
								_status.characterlist.remove(get.sourceCharacter(game.players[i].name2));
							}
							setTimeout(function () {
								ui.arena.classList.remove('choose-character');
							}, 500);
						});
					};
				}, 50);
			}
		}
	},
	precontent: function () {
		if (lib.config.extension_AI优化_btAi != 'off') lib.arenaReady.push(function(){
			//卡牌AI
			if (lib.card.shan){
				lib.card.shan.ai={
					order:3,
					basic:{
						useful: function(card, i){
							let player = _status.event.player, basic = [7, 5.1, 2], num = basic[Math.min(2, i)];
							if (player.hasSkillTag('maixie') && player.hp > 2) num *= 0.57;
							if (player.getEquip('bagua') || player.getEquip('rewrite_bagua') || player.getEquip('renwang') || player.getEquip('rewrite_renwang')) num *= 0.8;
							return num;
						},
						value:[7,5.1,2],
					},
					result:{player:1},
				}
			}
			lib.card.yiyi = {
				audio: true,
				fullskin: true,
				type: 'trick',
				cardcolor: 'red',
				enable: true,
				filterTarget: function (card, player, target) {
					if (get.mode() == 'guozhan') return target.isFriendOf(player);
					if (get.mode() == 'versus' || get.is.versus()) return player.side == target.side;
					return true;
				},
				selectTarget: function () {
					if (get.mode() == 'guozhan' || get.mode() == 'versus') return -1;
					return [1, 3];
				},
				content: function () {
					target.draw(2);
					target.chooseToDiscard(2, 'he', true).ai = get.disvalue;
				},
				ai: {
					wuxie: function () {
						return 0;
					},
					basic: {
						order: 9,
						useful: 1.5,
						value: 3
					},
					result: {
						target: function (player, target) {
							let i,
								add = 0,
								y = 1,
								tars = 0;
							if (!ui.selected.cards) y = 0;
							if (ui.selected.targets) tars = 0.01 * ui.selected.targets.length;
							else tars = 0;
							if (target == player)
								i = player.countCards('h', function (card) {
									if (y > 0 && ui.selected.cards.contains(card)) return false;
									if (!y && get.name(card) == 'yiyi') {
										y = -1;
										return false;
									}
									return true;
								});
							else i = target.countCards('he');
							if (target.hasSkillTag('noh')) add++;
							return add + Math.sqrt(i / 3.6 + tars) / 2;
						}
					},
					tag: {
						draw: 1,
						loseCard: 1,
						discard: 1,
						norepeat: 1
					}
				}
			};
			lib.translate.yiyi_info = '出牌阶段，对至多三名角色使用。目标角色摸两张牌然后弃置两张牌。',
			lib.translate.yiyi_info_versus = '出牌阶段，对所有友方角色使用。目标角色摸两张牌然后弃置两张牌。';
				if (lib.card.wangmeizhike){
					lib.card.wangmeizhike.filterTarget = true;
					lib.card.wangmeizhike.ai = {
						order: function () {
							let player = _status.event.player,
								nan = player.hasCard(function (card) {
									return get.name(card) == 'nanman';
								}, 'hs'),
								wan = player.hasCard(function (card) {
									return get.name(card) == 'wanjian';
								}, 'hs'),
								aoe = 0,
								max = 0;
							game.countPlayer(function (current) {
								if (get.attitude(player, current) <= 0) return false;
								let hp = current.isMinHp(),
									hc = current.isMinHandcard();
								if ((nan || wan) && (hp || hc)) aoe = 1;
								if (hp && hc && max != 1) max = current == player ? 1 : -1;
							});
							if (aoe) {
								if (nan) aoe = Math.max(aoe, get.order('nanman'));
								if (wan) aoe = Math.max(aoe, get.order('wanjian'));
								return aoe + 0.2;
							}
							if (max) return 5.8;
							if (player.isDamaged() && player.isMinHp() && player.countCards('hs', 'tao')) return get.order('tao') + 0.2;
							return 0.5;
						},
						value: 7,
						result: {
							target: function (player, target) {
								let num = 0,
									current = player.next,
									mei = 1,
									draw = target.hasSkillTag('nogain') ? 0.1 : 1;
								if (!ui.selected.cards) mei = 0;
								let mine = player.countCards('h', function (card) {
									if (mei > 0 && ui.selected.cards.contains(card)) return false;
									if (!mei && get.name(card) == 'wangmeizhike') {
										mei = -1;
										return false;
									}
									return true;
								});
								if (player.hasSkillTag('noh') && player.countCards('h')) mine++;
								let min = mine;
								while (current != player) {
									if (current.countCards('h') < min) min = current.countCards('h');
									current = current.next;
								}
								if (target.isMinHp() && target.isDamaged() && get.recoverEffect(target) > 0) {
									if (target.hp == 1) num += 3;
									else num += 2;
								}
								if (player == target) {
									if (mine <= min) num += (num ? 2 : 1) * draw;
								} else if (target.countCards('h') <= min) num += (num ? 2 : 1) * draw;
								return num;
							}
						},
						tag: {
							draw: 1,
							recover: 0.5
						}
					};
				}
		});
		if (lib.config.extension_AI优化_wjAi == 'on') lib.arenaReady.push(function(){//武将AI优化
			if (lib.skill.drlt_duorui) lib.skill.drlt_duorui.logTarget = 'player';
			if (lib.skill.dcaichen) {
				lib.skill.dcaichen.global = 'dcaichen_hit';
				lib.skill.dcaichen.subSkill = {
					hit: {
						ai: {
							directHit_ai: true,
							skillTagFilter: function (player, tag, arg) {
								return arg && arg.card && arg.target && arg.target.hasSkill('dcaichen') && ui.cardPile.childNodes.length < 40 && get.suit(arg.card) == 'spade';
							}
						}
					}
				};
			}
			if (lib.skill.mingluan) {
				lib.skill.mingluan.content = function () {
					'step 0'
					let he = player.getCards('he'),
						disval = 0,
						dis = 0,
						spare = 30,
						use = true;
					for (let i of he) {
						let val = get.value(i, player);
						if (val < 6 && get.position(i) == 'h') {
							dis++;
							disval += val;
						} else if (val < spare) spare = val;
					}
					if (!dis) {
						dis = 1;
						disval = spare;
						spare = -1;
					}
					let draw = Math.min(trigger.player.countCards('h'), 5 + dis - player.countCards('h'));
					if (6 * draw < disval) use = false;
					player.chooseToDiscard('he', get.prompt('mingluan'), '弃置任意张牌，并摸等同于' + get.translation(trigger.player) + '手牌数的牌（至多摸至五张）', [1, Infinity]).set('ai', function (card) {
						let val = get.value(card, player);
						if (val < 0 && card.name != 'du') return 30;
						if (!use) return 0;
						if (ui.selected.cards.length) {
							if (get.position(card) != 'h') return 0;
							return 6 - val;
						}
						if (spare < 0 || get.position(card) == 'h') return 30 - val;
						return 0;
					}).logSkill = ['mingluan', trigger.player];
					'step 1'
					if (result.bool) {
						let num = trigger.player.countCards('h'),
							num2 = 5 - player.countCards('h');
						if (num > 0 && num2 > 0) player.draw(Math.min(num, num2));
					}
				};
			}
			if (lib.skill.yimie) {
				lib.skill.yimie.check = function (event, player) {
					if (event.player.hasSkillTag('nodamage')) return false;
					let tj = player.countCards('hs', function (card) {
							return get.name(card) == 'tao' || get.name(card) == 'jiu';
						}),
						att = get.attitude(_status.event.player, event.player),
						eff = get.damageEffect(event.player, player, _status.event.player, event.nature),
						fd = event.player.hasSkillTag('filterDamage', null, {
							player: player,
							card: event.card
						}),
						hp = player.hp + tj;
					if (player.storage.tairan2) hp -= player.storage.tairan2;
					if (eff <= 0 || fd || att >= -2 || Math.abs(hp) <= 1) return false;
					if (hp > 2 || (event.player.isLinked() && event.nature && eff > 0)) return true;
					return !event.player.countCards('hs') || (event.player.hp > 2 * event.num && !event.player.hasSkillTag('maixie'));
				},
				lib.skill.yimie.ai = {
					damageBonus: true,
					skillTagFilter: function (player, tag, arg) {
						return arg.target && get.attitude(player, arg.target) < -2 && arg.target.hp > 1 && player.hp > 1;
					}
				};
			}
			if (lib.skill.dcyongdi) {
				lib.skill.dcyongdi.ai = {
					expose: 0.3,
					order: 1,
					result: {
						target: function (player, target) {
							let val = 0,
								att = get.attitude(_status.event.player, target);
							if (att <= 0) return 0;
							let bool1 = !game.hasPlayer((current) => current.maxHp < target.maxHp),
								bool2 = target.isMinHp(),
								bool3 = target.isMinHandcard();
							if (bool1) val += 6.5;
							if (bool2) {
								if (bool1) target.maxHp++;
								val += get.recoverEffect(target, player, player);
								if (bool1) target.maxHp--;
							}
							if (bool3) val += 5 * Math.min(5, target.maxHp + (bool1 ? 1 : 0));
							return val;
						}
					}
				};
			}
			if (lib.skill.huguan) {
				lib.skill.huguan.content = function () {
					'step 0'
					player.chooseControl(lib.suit, 'cancel2').set('prompt', get.prompt('huguan', trigger.player)).set('prompt2', '令某种花色的手牌不计入其本回合的手牌上限').set('ai', function () {
							let player = _status.event.player,
								target = _status.event.getTrigger().player,
								att = get.attitude(player, target);
							if (att <= 0) {
								if (!player.hasSkill('yaopei') || target.needsToDiscard() - target.needsToDiscard(-target.countCards('h') / 4) > 1 || get.recoverEffect(target, player, _status.event.player) > 0) return 'cancel2';
							}
							let list = lib.suit.slice(0);
							if (att <= 0 && target.getStorage('huguan_add'))
								for (let i of target.getStorage('huguan_add')) {
									if (list.contains(i)) return i;
								}
							list.removeArray(target.getStorage('huguan_add'));
							if (list.length) return list.randomGet();
							return 'cancel2';
						});
					'step 1'
					if (result.control != 'cancel2') {
						let target = trigger.player;
						player.logSkill('huguan', target);
						game.log(player, '选择了', '#g' + get.translation(result.control), '花色');
						target.addTempSkill('huguan_add');
						target.markAuto('huguan_add', [result.control]);
					}
				};
				lib.skill.huguan.global = 'huguan_all';
			}
			lib.skill.huguan_all = {
				mod: {
					aiValue: function (player, card, num) {
						if (player && player.storage.huguan_all && get.itemtype(card) == 'card' && get.color(card, player) == 'red') {
							if (player.storage.huguan_all < 0) return num * 0.4;
							return num + player.storage.huguan_all;
						}
					}
				},
				trigger: {
					player: ['phaseUseBegin', 'useCard']
				},
				filter: function (event, player) {
					if (event.name == 'useCard') return player.storage.huguan_all;
					return true;
				},
				silent: true,
				charlotte: true,
				content: function () {
					'step 0'
					if (trigger.name == 'useCard') {
						player.storage.huguan_all = 0;
						event.finish();
					}
					'step 1'
					let num = -157;
					game.countPlayer(function (current) {
						if (current.hasSkill('huguan')) num = Math.max(num, get.attitude(_status.event.player, current));
					});
					if (num == -157) game.removeGlobalSkill('huguan_all');
					else if (num == 0) player.storage.huguan_all = 6;
					else if (num > 0) player.storage.huguan_all = 9;
					else player.storage.huguan_all = -1;
				}
			};
			if (lib.skill.changbiao) {
				lib.skill.changbiao.check = function (card) {
					let player = _status.event.player;
					if (ui.selected.cards.length) {
						let list = game.filterPlayer(function (current) {
								return current != player && player.canUse('sha', current, false) && get.effect(current, {name: 'sha'}, player, player) > 0;
							}).sort(function (a, b) {
								return get.effect(b, {name: 'sha'}, player, player) - get.effect(a, {name: 'sha'}, player, player);
							});
						if (!list.length) return 0;
						let target = list[0],
							cards = ui.selected.cards.concat([card]),
							color = [];
						for (let i of cards) {
							if (!color.contains(get.color(i, player))) color.add(get.color(i, player));
						}
						if (color.length != 1) color[0] = 'none';
						if (player.hasSkillTag(
							'directHit_ai',
							true,
							{
								target: target,
								card: {name: 'sha', suit: 'none', color: color[0], cards: cards, isCard: true}
							},
							true
						)) return 6.5 - get.value(card, player);
						if (Math.random() * target.countCards('hs') < 1 || player.needsToDiscard(-ui.selected.cards.length)) return 6 - get.value(card, player);
						return 0;
					}
					return 6.3 - get.value(card);
				};
			}
			if (lib.skill.oldaili) {
				lib.skill.oldaili.mod = {
					aiValue: function (player, card, num) {
						if (get.itemtype(card) != 'card' || !card.hasGaintag('oldaili_tag') || num < 0) return;
						if (get.distance(_status.currentPhase, player, 'absolute') == 1 && !player.isTurnedOver()) return;
						let dai = player.countCards('h', (card) => {
							return card.hasGaintag('oldaili_tag');
						});
						if (ui.selected.cards && ui.selected.cards.length)
							dai += ui.selected.cards.filter((card) => {
								return card.hasGaintag('oldaili_tag');
							}).length;
						if (dai % 2) return Math.sqrt(num);
						return num + 6;
					},
					aiUseful: function () {
						return lib.skill.oldaili.mod.aiValue.apply(this, arguments);
					}
				};
			}
			if (lib.skill.yaopei){
				lib.skill.yaopei.content = function () {
					'step 0'
					let suits = [];
					trigger.player.getHistory('lose', function (evt) {
						if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) {
							for (let i of evt.cards2) suits.add(get.suit(i, evt.hs.contains(i) ? evt.player : false));
						}
					});
					player.chooseCardTarget({
						prompt: get.prompt('yaopei', trigger.player),
						prompt2: '操作提示：选择要弃置的牌，并选择执行摸牌选项的角色，另一名角色执行回复体力的选项。',
						suits: suits,
						position: 'he',
						filterCard: function (card, player) {
							return !_status.event.suits.contains(get.suit(card)) && lib.filter.cardDiscardable(card, player, 'yaopei');
						},
						filterTarget: function (card, player, target) {
							return target == player || target == _status.event.getTrigger().player;
						},
						ai1: function (card) {
							let player = _status.event.player,
								source = _status.event.getTrigger().player;
							if (get.attitude(player, source) > 0 && (get.recoverEffect(player, player, player) > 0 || get.recoverEffect(source, player, player) > 0)) return 12 - get.value(card);
							return 8 - get.value(card);
						},
						ai2: function (target) {
							let player = _status.event.player,
								source = _status.event.getTrigger().player;
							let recoverer = player == target ? source : player;
							if (recoverer.isHealthy()) return get.attitude(player, target);
							let rec = get.recoverEffect(recoverer, player, player);
							return Math.abs(get.attitude(player, recoverer)) * get.recoverEffect(recoverer, player, player) + 6 * get.attitude(player, target);
						}
					});
					'step 1'
					if (result.bool) {
						let target = trigger.player;
						player.logSkill('yaopei', target);
						player.discard(result.cards);
						if (player == result.targets[0]) {
							target.recover();
							player.draw(2);
						} else {
							target.draw(2);
							player.recover();
						}
					}
				}
			}
			if (lib.skill.dcjijiao){//继椒
				lib.skill.dcjijiao.ai={
					order:1,
					result:{
						target:function(player,target){
							if(ui.cardPile.childNodes.length>game.countPlayer()*5&&!game.hasPlayer(current=>current.hp<=1)&&game.countPlayer(current=>current.hp==2&&current.countCards('hes')<3)<=1&&!player.hasSkill('dcjijiao_risutoa')) return 0;
							return 5;
						}
					}
				}
			}
			if(lib.skill.beizhu){
				lib.skill.beizhu.ai= {
					order: 5,
					result: {
						player: function (player, target) {
							var hs1 = target.countCards('h', 'sha');
							var hs2 = player.countCards('h', 'shan');
							if (hs1 < hs2) {
								return 1;
							}
							var hsx = target.countCards('h');
							if (hsx > 3) {
								return -1;
							}
							if (hs2 == 0) {
								return -0.5;
							}
							return 0;
						},
						target: function (player, target) {
							var hs1 = target.countCards('h', 'sha');
							var hs2 = player.countCards('h', 'shan');
							if (hs1 <= hs2) {
								return -1;
							}
							var hsx = target.countCards('h');
							if (hsx <= 3) {
								return -0.5;
							}
						}
					}
				};
			}
			if(lib.skill.zhenge){
				lib.skill.zhenge.content=function(){
					'step 0'
					player.chooseTarget(get.prompt('zhenge'),'令一名角色的攻击范围+1').set('ai',function(target){
						let player=_status.event.player,att=get.attitude(player,target);
						if(att>0){
							if(!target.hasMark('zhenge_effect')) att*=1.5;
							if(!game.hasPlayer(function(current){
								return get.distance(target,current,'attack')>2;
							})){
								let nums=[];
								game.countPlayer(function(current){
									if(target.canUse('sha',current,false)) nums.add(get.effect(current,{name:'sha'},target,player));
								});
								let usf=Math.max.apply(Math,nums);
								if(nums.length) return att+usf;
							}
							return att;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('zhenge',target);
						target.addSkill('zhenge_effect');
						if(target.countMark('zhenge_effect')<5) target.addMark('zhenge_effect',1,false);
						if(!game.hasPlayer(function(current){
							return current!=target&&!target.inRange(current);
						})){
							player.chooseTarget('是否令'+get.translation(target)+'视为对另一名角色使用【杀】？',function(card,player,target){
								return _status.event.source.canUse('sha',target);
							}).set('source',target).set('ai',function(target){
								var evt=_status.event;
								return get.effect(target,{name:'sha'},evt.source,evt.player);
							});
						}
						else{
							game.delayx();
							event.finish();
						}
					}
					else event.finish();
					'step 2'
					if(result.bool){
						target.useCard({name:'sha',isCard:true},result.targets[0],false);
					}
					'step 3'
					game.delayx();
				};
			}
			if(lib.skill.jiang){
				lib.skill.jiang.ai= {
					effect: {
						target: function (card, player, target) {
							if (get.color(card) == 'red' && get.name(card) == 'sha' && get.attitude(player, target) < 0) return 1.5;
						},
						player: function (card, player, target) {
							if (get.color(card) == 'red' && get.name(card) == 'sha' && get.attitude(player, target) < 0) return 1.5;
						}
					}
				}
			}
			//nsp
		});
		lib.arenaReady.push(function () {
			let gamev = lib.version.split('.');
			let aiyhv = [1, 9, 122, 2];
			let dv = gamev.length - aiyhv.length;
			if (dv > 0) for (let i = 0; i < dv; i++) {
				aiyhv.push('0');
			}
			else for (let i = 0; i > dv; i--) {
				gamev.push('0');
			}
			dv = gamev.length;
			for (let i = 0; i < dv; i++) {
				if (gamev[i] == aiyhv[i]) continue;
				if(lib.config.extension_AI优化_bugs) {
					game.saveExtensionConfig('AI优化', 'bugs', false);
					alert('由于「AI优化」中［本体bug修复］功能修复的少量技能与您当前的游戏版本无关，为避免产生不必要的冲突，已为您关闭「AI优化」中［本体bug修复］功能');
				}
				break;
			}
			if (lib.config.extension_AI优化_viewAtt == 'on') {//火眼金睛
				ui.create.system(
					'查看态度',
					function () {
						var STR = '';
						for (var i = 0; i < game.players.length; i++) {
							var str = '';
							for (var j = 0; j < game.players.length; j++) {
								str += get.translation(game.players[i]) + '对' + get.translation(game.players[j]) + '的态度为' + get.attitude(game.players[i], game.players[j]) + '\n';
							}
							STR += str + '\n';
						}
						alert(STR);
					},
					true
				);
			}
			if (lib.config.extension_AI优化_bugs) {//bug修复
				if (lib.skill.dcwujie){
					lib.skill.dcwujie.filter=function(event,player){
						return event.player!=player && event.getParent().name=='die' && event.getParent().player==player;
					};
				}
				if(lib.skill.beizhu) lib.skill.beizhu.content=function () {
					'step 0'
					player.addTempSkill('beizhu_draw');
					player.viewHandcards(target);
					'step 1'
					var cards = target.getCards('h', 'sha');
					if (cards.length) {
						event.cards = cards;
						event.goto(5);
					} else player.discardPlayerCard('he', target, true);
					'step 2'
					player.chooseBool('是否令' + get.translation(target) + '获得一张【杀】？').set('ai', function () {
						var evt = _status.event.getParent();
						return get.attitude(evt.player, evt.target) > 0;
					});
					'step 3'
					if (result.bool) {
						var card = get.cardPile2(function (card) {
							return card.name == 'sha';
						});
						if (card) target.gain(card, 'gain2');
					} else event.finish();
					'step 4'
					game.updateRoundNumber();
					event.finish();
					'step 5'
					var hs = target.getCards('h');
					cards = cards.filter(function (card) {
						return (
							hs.contains(card) &&
							get.name(card, target) == 'sha' &&
							target.canUse(
								{
									name: 'sha',
									isCard: true,
									cards: [card]
								},
								player,
								false
							)
						);
					});
					if (cards.length) {
						var card = cards.randomRemove(1)[0];
						target.useCard(player, false, card).card.beizhu = true;
						event.redo();
					}
				};
			}
			if (lib.config.extension_AI优化_btAi == 'gjcx') {
				//卡牌ai优化
				if (lib.card.tao)
					lib.card.tao.ai = {
						basic: {
							order: function (card, player) {
								if (player.hasSkillTag('pretao')) return 9;
								return 2;
							},
							useful: function (card, i) {
								let player = _status.event.player;
								if (player.isDamaged() && !game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return 2 / (1 + i);
								let fs = game.filterPlayer(function (current) {
										return get.attitude(player, current) > 0 && current.hp <= 2;
									}),
									damaged = 0,
									needs = 0;
								for (let f of fs) {
									if (!lib.filter.cardSavable(card, player, f)) continue;
									if (f.hp > 1) damaged++;
									else needs++;
								}
								if (needs && damaged) return 5 * needs + 3 * damaged;
								if (needs + damaged > 1 || player.hasSkillTag('maixie')) return 8;
								if (player.hp / player.maxHp < 0.7) return 7 + Math.abs(player.hp / player.maxHp - 0.5);
								if (needs) return 7;
								if (damaged) return Math.max(3, 6.4 - i);
								return 6.8 - Math.min(5, player.hp);
							},
							value: function (card, player, i) {
								let fs = game.filterPlayer(function (current) {
										return get.attitude(_status.event.player, current) > 0;
									}),
									damaged = 0,
									needs = 0;
								for (let i of fs) {
									if (!player.canUse('tao', i)) continue;
									if (i.hp <= 1) needs++;
									else if (i.hp == 2) damaged++;
								}
								if (needs > 2) return 11;
								if (needs > 1) return 10;
								if ((needs && damaged) || player.hasSkillTag('maixie')) return 9;
								if (needs || damaged > 1) return 8;
								if (damaged) return 7.5;
								return Math.max(1, 9.2 - player.hp);
							}
						},
						result: {
							target: function (player, target) {
								if (target.hasSkillTag('maixie')) return 3;
								return 2;
							},
							target_use: function (player, target) {
								if (player == _status.currentPhase && player.hasSkillTag('nokeep', true, null, true)) return 2;
								let mode = get.mode();
								if (target.hp > 0) {
									let nd = player.needsToDiscard();
									let keep = false;
									if (_status.currentPhase.hasSkill('dcwumei_wake')) keep = true;
									else if (player.isPhaseUsing()) {
										if (nd <= 0 || (nd == 1 && target.hp >= 2 && player.countCards('hs', 'tao') <= 1)) keep = true;
									}
									if (keep) {
										if (
											!nd ||
											(nd < 2 &&
												game.hasPlayer(function (current) {
													if (current.hp <= 2 && player != current && get.attitude(player, current) > 2) {
														if (player.hp > current.hp || (target.hp >= 2 && current.identity == 'zhu' && (mode == 'identity' || mode == 'versus' || mode == 'chess'))) return true;
													}
													return false;
												}))
										)
											return 0;
									}
								}
								if (player != target) {
									if (target.hp < 0 && target.identity != 'zhu' && player.countCards('hs', 'tao') + target.hp <= 0) return 0;
									if (Math.abs(get.attitude(player, target)) < 2) return 0;
								}
								if (!player.getFriends().length) return 2;
								let tri = _status.event.getTrigger(),
									num = game.countPlayer(function (current) {
										if (get.attitude(current, target) > 0) return current.countCards('hs', 'tao');
									}),
									dis = 1,
									t = _status.currentPhase;
								while (t != target) {
									let att = get.attitude(player, t);
									if (Math.abs(att) < 2) dis += 0.45;
									else if (att < 0) dis++;
									t = t.next;
								}
								if (mode == 'identity') {
									if (tri && tri.name == 'dying') {
										if (target.identity == 'fan') {
											if ((!tri.source && player != target) || (tri.source && tri.source != target && player.getFriends().contains(tri.source.identity))) {
												if (num > dis || (player == target && player.countCards('hs', {type: 'basic'}) > 1.6 * dis)) return 2;
												return 0;
											}
										}
										//if(player!=target&&!target.isZhu()&&target.countCards('hs')<dis) return 0;
									}
									if (player.identity == 'zhu') {
										if (
											player.hp <= 1 &&
											player != target &&
											player.countCards('hs', 'tao') + player.countCards('hs', 'jiu') <=
												Math.min(
													dis,
													game.countPlayer(function (current) {
														return current.identity == 'fan';
													})
												)
										)
											return 0;
									}
								} else if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) return 0;
								return 2;
							}
						},
						tag: {
							recover: 1,
							save: 1
						}
					};
				if (lib.card.jiu)
					lib.card.jiu.ai = {
						basic: {
							useful: function (card, i) {
								if (_status.event.player.hp > 1) {
									if (i == 0) return 4;
									return 1;
								}
								if (i == 0) return 7.3;
								return 3;
							},
							value: function (card, player, i) {
								if (player.hp > 1) {
									if (i == 0) return 5;
									return 1;
								}
								if (i == 0) return 7.3;
								return 3;
							}
						},
						order: function () {
							let so = get.order({name: 'sha'});
							if (so > 0) return so + 0.2;
							return 0;
						},
						result: {
							target: function (player, target) {
								if (target && target.isDying()) return 2;
								if (!target || target._jiu_temp || !target.isPhaseUsing()) return 0;
								if (!target.getCardUsable('sha') || (lib.config.mode == 'stone' && !player.isMin() && player.getActCount() + 1 >= player.actcount)) return 0;
								let shas = player.getCards('hs', 'sha'),
									card;
								if (!target.hasSha() || (shas.length > 1 && (target.getCardUsable('sha') > 1 || target.countCards('h', 'zhuge')))) return 0;
								target._jiu_temp = true;
								if (shas.length)
									shas.sort(function (a, b) {
										return get.order(b) - get.order(a);
									});
								else shas.push({name: 'sha'});
								for (let i = 0; i < shas.length; i++) {
									let tars = [];
									if (lib.filter.filterCard(shas[i], target))
										tars = game.filterPlayer(function (current) {
											return (
												get.attitude(target, current) < 0 &&
												target.canUse(shas[i], current, null, true) &&
												!current.hasSkillTag('filterDamage', null, {
													player: target,
													card: shas[i],
													jiu: true
												}) &&
												get.effect(current, shas[i], target) > 0
											);
										});
									for (let j of tars) {
										if (
											(!j.mayHaveShan() && (!j.countCards('hs') || target.hasSkillTag('viewHandcard', null, j, true))) ||
											target.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: j,
													card: shas[i]
												},
												true
											)
										) {
											delete target._jiu_temp;
											return 1;
										}
									}
									if (tars.length && target.needsToDiscard() > 1) return 1;
								}
								delete target._jiu_temp;
								return 0;
							}
						},
						tag: {
							save: 1,
							recover: 0.1
						}
					};
				if (lib.card.nanman)
					lib.card.nanman.ai = {
						wuxie: function (target, card, player, viewer, status) {
							let att = get.attitude(viewer, target);
							if (lib.config.extension_AI优化_gxAi && status * att < 0) return 0;
							let evt = _status.event.getParent('useCard'),
								t = target,
								has = 0;
							if (viewer == target) return;
							if (att > 0 && viewer.hasSkillTag('viewHandcard', null, target, true)) {
								if (
									target.hasCard(function (card) {
										return get.name(card, target) == 'sha' && lib.filter.cardRespondable(card, target);
									}, 'h') ||
									target.hasCard(function (card) {
										return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, target);
									}, 'h')
								)
									return 0;
								if (!target.hasSkillTag('respondSha', true, 'respond', true)) return;
							}
							if (get.attitude(viewer, target) <= 0) has = -1;
							if (evt && evt.targets) {
								if (!evt.targets.contains(viewer)) has = -1;
								for (let i = 0; i < evt.targets.length; i++) {
									if (has || evt.targets[i] == viewer) break;
									if (evt.targets[i] == target) {
										has = 1;
										break;
									}
								}
							}
							if (has == 1) {
								if (target.isZhu) {
									if (target.hp > viewer.hp && (target.hp > 2 || target.countCards('hs') > viewer.countCards('hs'))) return 0;
								} else if ((viewer.hp <= target.hp && !viewer.countCards('hs', 'sha') && !viewer.hasSkillTag('respondSha', true, 'respond', true)) || target.countCards('hs') > 3 || (target.countCards('hs') && Math.random() < 0.3)) return 0;
							} else {
								if (target.hp > 4 || target.countCards('hs') > 3 || (target.hp > 2 && Math.random() < 1 / (4 + target.countCards('hs'))) || (target.hp > viewer.hp && target.hasSkillTag('respondSha', true, 'respond', true))) return 0;
							}
						},
						basic: {
							order: 8.8,
							useful: [5, 1],
							value: 5.7
						},
						result: {
							player: function (player) {
								if (player._nanman_temp) return 0;
								player._nanman_temp = true;
								let tars = game.filterPlayer(function (current) {
										if (current.hp > 1 || current == player) return false;
										if (
											player.hasSkillTag('viewHandcard', null, current, true) &&
											(current.hasCard(function (card) {
												return get.name(card, current) == 'sha' && lib.filter.cardRespondable(card, current);
											}) ||
												current.hasCard(function (card) {
													return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, current);
												}, 'h'))
										)
											return false;
										return get.effect(current, {name: 'nanman'}, player) != 0;
									}),
									ts = player.countCards('hs', 'tao'),
									res = 0;
								for (let i of tars) {
									let nh = i.countCards('hs'),
										att = get.sgn(get.attitude(player, i));
									if (att > 0 && ts && player.canUse('tao', i)) {
										ts--;
										continue;
									}
									res -= (Math.max(0, 4 - nh) * att * (nh + i.countCards('e') + 2)) / 4;
									if (att < -2 || (get.mode() == 'identity' && i.identity == 'fan')) res += 3;
									if ((get.mode() == 'guozhan' && att > 2) || (get.mode() == 'identity' && player.identity == 'zhu' && (i.identity == 'zhong' || i.identity == 'mingzhong'))) res -= player.countCards('he');
								}
								delete player._nanman_temp;
								return res;
							},
							target: function (player, target) {
								let nh = target.countCards('hs'),
									zhu = (get.mode() == 'identity' && target.isZhu) || target.identity == 'zhu';
								if (!lib.filter.cardRespondable({name: 'sha'}, target)) {
									if (zhu) {
										if (target.hp < 2) return -99;
										if (target.hp == 2) return -3.6;
									}
									return -2;
								}
								if (player.hasSkillTag('viewHandcard', null, target, true)) {
									if (
										target.hasCard(function (card) {
											return get.name(card, target) == 'sha' && lib.filter.cardRespondable(card, target);
										}, 'h') ||
										target.hasCard(function (card) {
											return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, target);
										}, 'h')
									)
										return -1.2;
									if (zhu && target.hp <= 1) return -99;
								}
								if (zhu && target.hp <= 1) {
									if (nh == 0) return -99;
									if (nh == 1) return -60;
									if (nh == 2) return -36;
									if (nh == 3) return -12;
									if (nh == 4) return -6;
									return -3;
								}
								if (target.hasSkillTag('respondSha', true, 'respond', true)) return -1.35;
								if (!nh) return -2;
								if (nh == 1) return -1.8;
								return -1.5;
							}
						},
						tag: {
							respond: 1,
							respondSha: 1,
							damage: 1,
							multitarget: 1,
							multineg: 1
						}
					};
				if (lib.card.wanjian)
					lib.card.wanjian.ai = {
						wuxie: function (target, card, player, viewer, status) {
							let att = get.attitude(viewer, target);
							if (lib.config.extension_AI优化_gxAi && status * att < 0) return 0;
							let evt = _status.event.getParent('useCard'),
								t = target,
								has = 0;
							if (viewer == target) return;
							if (att > 0 && viewer.hasSkillTag('viewHandcard', null, target, true)) {
								if (
									target.hasCard(function (card) {
										return get.name(card, target) == 'shan' && lib.filter.cardRespondable(card, target);
									}, 'h') ||
									target.hasCard(function (card) {
										return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, target);
									}, 'h')
								)
									return 0;
								if (!target.hasSkillTag('respondShan', true, 'respond', true)) return;
							}
							if (get.attitude(viewer, target) <= 0) has = -1;
							if (evt && evt.targets) {
								if (!evt.targets.contains(viewer)) has = -1;
								for (let i = 0; i < evt.targets.length; i++) {
									if (has || evt.targets[i] == viewer) break;
									if (evt.targets[i] == target) {
										has = 1;
										break;
									}
								}
							}
							if (has == 1) {
								if (target.isZhu) {
									if (target.hp > viewer.hp && (target.hp > 2 || target.countCards('hs') > viewer.countCards('hs'))) return 0;
								} else if ((viewer.hp <= target.hp && !viewer.countCards('hs', 'shan') && !viewer.hasSkillTag('respondShan', true, 'respond', true)) || target.countCards('hs') > 2 || (target.countCards('hs') && Math.random() < 0.4)) return 0;
							} else {
								if (target.hp > 4 || target.countCards('hs') > 2 || (target.hp > 2 && Math.random() < 1 / (3 + target.countCards('hs'))) || (target.hp > viewer.hp && target.hasSkillTag('respondShan', true, 'respond', true))) return 0;
							}
						},
						basic: {
							order: 8.8,
							useful: 1,
							value: 5.4
						},
						result: {
							player: function (player) {
								if (player._wanjian_temp) return 0;
								player._wanjian_temp = true;
								let tars = game.filterPlayer(function (current) {
										if (current.hp > 1 || current == player) return false;
										if (
											player.hasSkillTag('viewHandcard', null, current, true) &&
											(current.hasCard(function (card) {
												return get.name(card, current) == 'shan' && lib.filter.cardRespondable(card, current);
											}) ||
												current.hasCard(function (card) {
													return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, current);
												}, 'h'))
										)
											return false;
										return get.effect(current, {name: 'wanjian'}, player) != 0;
									}),
									ts = player.countCards('hs', 'tao'),
									res = 0;
								for (let i of tars) {
									let nh = i.countCards('hs'),
										att = get.sgn(get.attitude(player, i));
									if (att > 0 && ts && player.canUse('tao', i)) {
										ts--;
										continue;
									}
									res -= (Math.max(0, 3 - nh) * att * (nh + i.countCards('e') + 2)) / 3;
									if (att < -2 || (get.mode() == 'identity' && i.identity == 'fan')) res += 3;
									if ((get.mode() == 'guozhan' && att > 2) || (get.mode() == 'identity' && player.identity == 'zhu' && (i.identity == 'zhong' || i.identity == 'mingzhong'))) res -= player.countCards('he');
								}
								delete player._wanjian_temp;
								return res;
							},
							target: function (player, target) {
								let nh = target.countCards('hs'),
									zhu = (get.mode() == 'identity' && target.isZhu) || target.identity == 'zhu';
								if (!lib.filter.cardRespondable({name: 'shan'}, target)) {
									if (zhu) {
										if (target.hp < 2) return -99;
										if (target.hp == 2) return -3.6;
									}
									return -2;
								}
								if (player.hasSkillTag('viewHandcard', null, target, true)) {
									if (
										target.hasCard(function (card) {
											return get.name(card, target) == 'shan' && lib.filter.cardRespondable(card, target);
										}, 'h') ||
										target.hasCard(function (card) {
											return get.name(card) == 'wuxie' && lib.filter.cardEnabled(card, target);
										}, 'h')
									)
										return -1.2;
									if (zhu && target.hp <= 1) return -99;
								}
								if (zhu && target.hp <= 1) {
									if (nh == 0) return -99;
									if (nh == 1) return -60;
									if (nh == 2) return -36;
									if (nh == 3) return -6;
									return -3;
								}
								if (target.hasSkillTag('respondShan', true, 'respond', true)) return -1.35;
								if (!nh) return -2;
								if (nh == 1) return -1.65;
								return -1.5;
							}
						},
						tag: {
							respond: 1,
							respondShan: 1,
							damage: 1,
							multitarget: 1,
							multineg: 1
						}
					};
				if (lib.card.huogong) {
					lib.card.huogong.cardnature = 'fire';
					lib.card.huogong.filterTarget = function (card, player, target) {
						return target.countCards('h') > 0;
					},
					lib.card.huogong.ai = {
						basic: {
							order: 9.2,
							value: [3, 1],
							useful: 0.6
						},
						wuxie: function (target, card, player, viewer, status) {
							if ((lib.config.extension_AI优化_gxAi && status * get.attitude(viewer, target) < 0) || get.attitude(viewer, player) >= 0 || Math.random() * 4 > player.countCards('h')) return 0;
						},
						result: {
							player: function (player, target) {
								let evt = _status.event,
									h = 1,
									suits = [];
								if (!ui.selected.cards) h = 0;
								let ph = player.getCards('h', function (card) {
									if (h > 0 && ui.selected.cards.contains(card)) return false;
									if (!h && get.name(card) == 'huogong') {
										h = -1;
										return false;
									}
									let suit = get.suit(card);
									if (!suits.contains(suit)) suits.push(suit);
									return true;
								});
								if (!ph.length) {
									if (player.hasSkillTag('noh') && player.countCards('h')) return 0;
									return -10;
								}
								if (suits.length < 4) {
									if (player.hasSkillTag('viewHandcard', null, target, true)) {
										let has = 0;
										for (let i of target.getCards('h')) {
											if (suits.contains(get.suit(i, target))) has++;
										}
										if (!has) return -10;
										if (has == target.countCards('h')) return -1;
									}
									if (target.hasSkill('huogong2')) return -1.6;
									if (suits.length && player.needsToDiscard()) return -0.8 / player.needsToDiscard();
									if (Math.random() > suits.length / 4) return -10;
									if (ph.length <= player.hp && evt.name == 'chooseToUse') {
										if (typeof evt.filterCard == 'function' && evt.filterCard({name: 'huogong'}, player, evt)) return -1.35;
										if (evt.skill) {
											let viewAs = get.info(evt.skill).viewAs;
											if (viewAs == 'huogong') return -1.35;
											if (viewAs && viewAs.name == 'huogong') return -1.35;
										}
									}
								}
								return -1;
							},
							target: function (player, target) {
								if (target.countCards('h') == 0) return 0;
								let evt = _status.event,
									h = 1,
									suits = [];
								if (!ui.selected.cards) h = 0;
								let ph = player.getCards('h', function (card) {
									if (h > 0 && ui.selected.cards.contains(card)) return false;
									if (!h && get.name(card) == 'huogong') {
										h = -1;
										return false;
									}
									let suit = get.suit(card);
									if (!suits.contains(suit)) suits.push(suit);
									return true;
								});
								if (!ph.length) return 0;
								if (target == player) {
									if (typeof evt.filterCard == 'function' && evt.filterCard({name: 'huogong'}, player, evt)) return -1.15;
									if (evt.skill) {
										let viewAs = get.info(evt.skill).viewAs;
										if (viewAs == 'huogong') return -1.15;
										if (viewAs && viewAs.name == 'huogong') return -1.15;
									}
									return 0;
								}
								if (target.hasSkill('huogong2') && suits.length < 4) return 0;
								if (get.attitude(player, target) >= 0) return -0.15;
								if (player.hasSkillTag('viewHandcard', null, target, true)) return -0.5 * suits.length;
								return -0.45 * suits.length;
							}
						},
						tag: {
							damage: 1,
							fireDamage: 1,
							natureDamage: 1,
							discard: 0.5,
							norepeat: 1
						}
					};
				}
				if (lib.card.tiesuo)
					lib.card.tiesuo.ai = {
						wuxie: function (target, card, player, viewer) {
							if (target.hasSkillTag('nodamage') || target.hasSkillTag('nofire') || target.hasSkillTag('nothunder') || _status.event.getRand() < 0.5 || get.attitude(viewer, player) > 0) return 0;
						},
						basic: {
							order: 7,
							useful: 4,
							value: 4
						},
						result: {
							target: function (player, target) {
								if (target.hasSkillTag('link')) return 0;
								let curs = game.filterPlayer(function (current) {
									if (current.hasSkillTag('nodamage')) return false;
									return !current.hasSkillTag('nofire') || !current.hasSkillTag('nothunder');
								});
								if (curs.length < 1) return 0;
								let f = target.hasSkillTag('nofire'),
									t = target.hasSkillTag('nothunder'),
									res = 0.9;
								if ((f && t) || target.hasSkillTag('nodamage')) return 0;
								if (f || t) res = 0.45;
								if (target.getEquip('tengjia')) res *= 2;
								if (!target.isLinked()) res = -res;
								if (ui.selected.targets.length) return res;
								let fs = 0,
									es = 0,
									att = get.attitude(player, target),
									linkf = false,
									alink = true;
								for (let i of curs) {
									let atti = get.attitude(player, i);
									if (atti > 0) {
										fs++;
										if (i.isLinked()) linkf = true;
									}
									if (atti < 0) {
										es++;
										if (!i.isLinked()) alink = false;
									}
								}
								if (es == 1 && !alink) {
									if (att <= 0 || (att > 0 && linkf && fs <= 1)) return 0;
								}
								return res;
							}
						},
						tag: {
							multitarget: 1,
							multineg: 1,
							norepeat: 1
						}
					};
			}
			if (lib.config.extension_AI优化_banQh) lib.characterReplace = {}; //禁用切换功能
			if (!Array.isArray(lib.config.extension_AI优化_pr)) game.saveExtensionConfig('AI优化', 'pr', ['界', '谋', '晋', '神', '族', '魏', '群', '极', '新', '旧', '☆', '手杀', '欢杀', '微信', 'SP', 'OL', 'TW', '十周年']); //前缀列表
			let sortedKeys, sortedObj;
			if (Object.prototype.toString.call(lib.config.extension_AI优化_qz) !== '[object Object]') lib.config.extension_AI优化_qz = {};
			for (let i in lib.character) {
				if (lib.config.extension_AI优化_seen && lib.character[i] && lib.character[i][4] && lib.character[i][4].contains('unseen')) lib.character[i][4].remove('unseen');
			}
			let qz = ''; //权重
			sortedKeys = Object.keys(lib.config.extension_AI优化_qz).sort();
			sortedObj = {};
			sortedKeys.forEach((key) => {
				sortedObj[key] = lib.config.extension_AI优化_qz[key];
			});
			game.saveExtensionConfig('AI优化', 'qz', sortedObj);
			for (i in lib.config.extension_AI优化_qz) {
				qz += '<option value=' + i + '>' + lib.translate[i] + '(' + i + ')：' + lib.config.extension_AI优化_qz[i] + '</option>';
			}
			//选项显示修改摘自@Aurora《战斗记录》
			lib.extensionMenu.extension_AI优化.chooseQz.name = '请选择要删除的武将权重<br><select id="AI优化_chooseQz" size="1" style="width:180px">' + qz + '</select>';
			if (Object.prototype.toString.call(lib.config.extension_AI优化_cf) !== '[object Object]') lib.config.extension_AI优化_cf = {};
			let cf = ''; //嘲讽
			sortedKeys = Object.keys(lib.config.extension_AI优化_cf).sort();
			sortedObj = {};
			sortedKeys.forEach((key) => {
				sortedObj[key] = lib.config.extension_AI优化_cf[key];
			});
			game.saveExtensionConfig('AI优化', 'cf', sortedObj);
			for (i in lib.config.extension_AI优化_cf) {
				cf += '<option value=' + i + '>' + i + ' | ' + (lib.translate[i] || '无') + '：' + lib.config.extension_AI优化_cf[i] + '</option>';
			}
			lib.extensionMenu.extension_AI优化.chooseCf.name = '<span style="font-family: xinwei">请选择要删除的技能嘲讽</span><br><select id="AI优化_chooseCf" size="1" style="width:180px">' + cf + '</select>';
			if (!Array.isArray(lib.config.extension_AI优化_wj)) game.saveExtensionConfig('AI优化', 'wj', []);
			for (let i in lib.config.extension_AI优化_cf) {
				//修改技能嘲讽值
				if (!lib.skill[i]) lib.skill[i] = {ai: {threaten: lib.config.extension_AI优化_cf[i]}};
				else if (!lib.skill[i].ai) lib.skill[i].ai = {threaten: lib.config.extension_AI优化_cf[i]};
				else lib.skill[i].ai.threaten = lib.config.extension_AI优化_cf[i];
			}
			if (lib.config.extension_AI优化_applyCf == 'pj') {
				//嘲讽补充
				let list;
				if (_status.connectMode) list = get.charactersOL();
				else list = get.gainableCharacters();
				for (let i = 0; i < list.length; i++) {
					let info = lib.character[list[i]];
					if (!info || info.length < 4) continue;
					let rarity = game.getRarity(list[i]),
						all,
						skills = [],
						th;
					if (rarity == 'rare') all = 1.2;
					else if (rarity == 'epic') all = 2;
					else if (rarity == 'legend') all = 2.4;
					else if (rarity == 'junk') all = 0.8;
					else continue;
					for (let j of info[3]) {
						if (lib.skill[j] && lib.skill[j].juexingji) continue;
						skills.push(j);
					}
					if (skills.length) {
						th = Math.pow(all, 1 / skills.length);
						for (let j = 0; j < skills.length; j++) {
							let info = lib.skill[skills[j]];
							if (!info) lib.skill[skills[j]] = {ai: {threaten: th}};
							else if (!info.ai) lib.skill[skills[j]].ai = {threaten: th};
							else if (typeof info.ai.threaten == 'undefined') {
								if (info.ai.maixie_defend) lib.skill[skills[j]].ai.threaten = 0.8 * th;
								else lib.skill[skills[j]].ai.threaten = th;
							}
						}
					}
				}
			}
			lib.translate._aiyh_neiKey = '<font color=#8DD8FF>亮明身份</font>',
			lib.translate._aiyh_fixQz = '<font color=#FFFF00>修改权重</font>',
			lib.translate._aiyh_fixCf = '<font color=#FF3300>修改嘲讽</font>',
			lib.translate._aiyh_fixWj = '<font color=#00FFFF>伪禁</font>';
		});
	},
	config: {
		kzjs: {
			name: '扩展介绍',
			init: 'jieshao',
			unfrequent: true,
			item: {
				jieshao: '点击查看'
			},
			textMenu: function (node, link) {
				lib.setScroll(node.parentNode);
				node.parentNode.style.transform = 'translateY(-100px)';
				node.parentNode.style.height = '300px';
				node.parentNode.style.width = '300px';
				switch (link) {
					case 'jieshao':
						node.innerHTML =
							'本扩展以『云将』『官将重修』『临时补丁』中部分功能为基础，@柚子丶奶茶丶猫以及面具 退圈前已许可修改，现由@翩翩浊世许公子 和 @157 整理，@157负责主要后续维护，与原作者无关' +
							'<br>AI优化相关功能选项中的〔山河永固〕主要基于『云将』扩展代码，〔官将重修〕主要基于『官将重修』扩展代码，与原扩展并无直接联系或联动效果，仅用于区分AI策略，且云将部分是基于v1.9.122.1版本开发的优化，与后续版本无关  ' +
							'<br><font color=#FF3300>注意！</font>本扩展与其他拓展AI功能同时打开可能会导致AI错乱，相关AI增强优化不建议重复开启，若下面涉及到的本体武将或卡牌出现bug建议关闭本扩展后测试' +
							'<br><br>【山河永固AI增强详细介绍】<br><br>全局AI相关：<br><br>存牌逻辑优化为桃>酒>闪>无懈，AI会弃牌阶段会优先存桃，弃置牌添加关键牌对策<br><br>受到大伤害进入濒死，血量为负，队友手里桃能救活的时候不会再拒绝出桃。（这里还是按照座次结算，比如你-2血，你手里有一桃，AI队友手里两桃，AI还是会认为他手里的两桃救不活你，不会出）<br><br>部分关键牌序优化，如南蛮入侵、万箭齐发、桃园结义、决斗、火攻等<br><br>卖血武将优化，有卖血标签技能的武将现在会更乐意卖血，没有绝情标签技能的队友也会主动帮忙卖血，拒绝杀闪砸蛋你干嘛？ 对敌人卖血武将会优先处理非卖血武将的队友<br><br>闪相关技能对策优化，目前张角比较明显，队友酒杀张角这种傻逼行为杜绝掉。<br><br>铁索相关优化，AI在场上横置敌人比横置队友少，不会使用属性杀和火攻，如果是忠臣，目标横置，主公横置，不会使用属性杀和火攻。<br><br>增加AI喝闷酒对策。<br><br>顺拆敌人白银狮子，照月狮子对策，并会优先拆顺队友兵乐。<br><br>无懈对策，判定区有牌的时候会考虑保留无解，无防具和防御马时无懈过河拆桥优先级降低，血量健康无懈不多火攻目标无藤甲无懈火攻优先级降低，借刀无懈优先级降低，南蛮万箭铁索添加无懈使用优化。<br><br>南蛮万箭对策，残血队友大于残血敌人时降低开AOE概率，以及添加卖血敌友筛选。<br><br>高评级武将增加嘲讽度，AI会更愿意针对评级较高的武将。' +
							'<br><br>AI小人防酒杀。<br><br>五谷选牌对策，满状态依次优先无中生有 无懈可击 顺手牵羊 桃 过河拆桥 乐不思蜀 兵粮寸断 酒，非满状态依次 桃 无中生有 无懈可击 酒 顺手牵羊 过河拆桥 乐不思蜀 兵粮寸断。<br><br>闪电对策，场上没有改判或者闪电浮雷存在收益的队友时降低闪电使用优先级。<br><br>斗地主自己有免伤或者改判不飞扬闪电，判定区同时有兵乐存在手牌数多飞扬乐不思蜀否则飞扬兵粮寸断。<br><br>本体对护甲伤害判定相关优化，比如张角不劈带护甲的敌人。' +
							'<br><br><br>主公AI相关：<br><br>主公开局默认知晓一名忠臣身份（无名杀没法看将面，只能如此），AI主公会对未知身份的角色进行压制，八人场三分之一概率盲到忠内。<br><br>反贼全灭忠臣存活，内奸此时跳忠，AI主公会识别内奸。<br><br>主公一血，忠臣濒死，主公手里只有一桃，那主公会留着自己吃。<br><br>忠臣残血，主公不会看见反贼残血就开南蛮万箭，顺便把忠剁了。<br><br>忠臣全灭，反贼存活不小于三，内奸濒死主公桃充足，主公会救内奸。<br><br><br>忠臣AI相关：<br><br>忠对忠现在不会见死不救。<br><br>只存活一名忠臣，反贼全活，内奸濒死，忠会出桃捞内奸。<br><br>反贼全灭，内奸未跳身份 AI忠臣会识别内奸。<br><br><br>内奸AI相关：<br><br>内奸全场保持活跃状态，强势增加存在感。<br><br>主忠反将面（也就是评级和嘲讽，某些低评级但技能很离谱的不在考虑范围）差距过大，且主公血量健康，内奸优先按照主忠反将面优劣来选择行动策略，否则根据主忠反人数选择行动策略。<br><br>内奸在主忠方人数小于反贼人数，跳忠。<br><br>内奸在反贼人数不大于主忠方人数且主公血量大于二，跳反。<br><br>只要主公血量不大于二，内奸无视前面的设定，跳忠。<br><br>内奸在有反贼存活的情况下不会对主公使用伤害牌。<br><br>反贼全员存活，忠臣只存活一名，内奸会对濒死忠臣出桃。<br><br>主忠全员存活，反贼只存活一名，内奸会对濒死反贼出桃。<br><br><br>反贼AI相关：<br><br>反贼在手牌数不小于三，因为队友造成伤害进入濒死时，不会再主动求死。<br><br>反贼只活一人，主忠全存活，内奸跳反濒死，反贼会出桃。<br><br>在主公血量不大于二时，反贼会强势开AOE输出主公。' +
							'<br><br>本体部分装备AI优化：<br>寒冰剑<br>雌雄双股剑<br>古锭刀<br>朱雀羽扇<br>青釭剑<br>丈八蛇矛<br>朱雀羽扇<br>霹雳车<br>霹雳投石车<br>大攻车<br>藤甲<br>仁王盾<br>八卦阵<br><br><br><span style="font-family: xinwei"><font color=#00FFB0>官将重修AI</font>：</span><br><br><li><span style="font-family: xingkai">卡牌相关：</span><br><span style="font-family: shousha">以下这些的选项开关为其他ai优化中的卡牌优化</span><br>●<span style="font-family: xingkai">桃</span><br>拥有pretao标签时，将【桃】的优先级提高至放aoe之前；<br>提高【桃】的价值，适当提高【桃】的留存地位，卖血将（带maixie标签的）会更加积极屯桃，队友战损程度也在一定程度上会影响人机屯桃；<br>提高【桃】对卖血将的效益；<br>一定程度上鼓励需要弃牌的人机吃桃，队友负血如果桃够会考虑救人；<br>反贼杀反贼，根据反方当前生存状况（其实是反手里桃数量）、濒死角色手牌数以及轮到濒死角色回合还有几个不友好角色来决定要不要救人；<br>主公1血时，如果场上存活反贼数不小于他的屯桃数量，主公将为了自保放弃救人（濒死忠：你tm）<br>●<span style="font-family: xingkai">酒</span><br>一定程度上修复人机喝酒不杀和杀完弃酒的问题；<br>由于相关技能种类繁多，个人能力有限，故没有进行额外的适配优化<br>' +
							'●<span style="font-family: xingkai">南蛮入侵</span><br>将身份奖惩写在【南蛮入侵】中对使用者的效益里，一定程度上减少人机杀敌一千自损八百的情况；<br>增加对有「打出杀」标签的角色的判断，具体化残血主公的放大效益，一定程度上鼓励人机开aoe收残血反；<br>有无懈的队友一般会在自己也是aoe的目标且没有响应的情况下比较当前响应角色和自己的情况决定要不要不出无懈，已响应或不为目标也会看在队友实力雄厚的情况下可能不出无懈<br>●<span style="font-family: xingkai">万箭齐发</span>与<span style="font-family: xingkai">南蛮入侵</span>类似<br>●<span style="font-family: xingkai">火攻</span><br>提高【火攻】的使用优先级；<br>大概率能将使用者即将使用的【火攻】（包括视为技）剥离出来，根据剩余手牌花色数：0，不使用；3以上，高收益；其他情况有概率不使用，若需要弃牌一般情况下会选择使用；<br>考虑有noh标签的角色，如果使用者有，人机有概率会选择一换一；<br>对于火攻失败的目标，如果使用者花色数不小于4，也会将其纳入考量范围；<br>●<span style="font-family: xingkai">铁索连环</span><br>对于有link,nofire和nothunder,nodamage标签的角色返回0，装藤甲的角色效益翻倍；<br>在除了免疫属性伤害的角色中，如果只有一个敌人并且这个敌人没被连环，第一个选择的目标不再选择敌人和被连环自己/唯一受到属性伤害影响的队友，以此来解决人机单挑时经常解自己连对面这种没有太大意义的操作；当然如果已经选了一个目标，第二个目标不再进行此类判断（连一个两个都已经无所谓了，反正要把铁索消耗掉）<br>●<span style="font-family: xingkai">以逸待劳</span><br>修复文字描述错误，对决模式目标默认选择己方角色<br>' +
							'●<span style="font-family: xingkai">望梅止渴</span><br>如果使用者手里有aoe，场上也有可以援助的队友，【望梅止渴】将优先于aoe使用；如果有最大收益队友，将在拆顺之后优先使用；如果对自己用能回血，将在吃桃之前使用；其他情况则最后使用；<br>类似【火攻】，也引入了除去使用牌后剩余手牌参与结果的判断语句；一定程度上减少了原【望梅止渴】ai使用后实际没有效益的情况，稍稍细化了收益判断<br>●<span style="font-family: shousha">此外，在修改的12种卡牌中（选项开关为卡牌修改），也或多或少对ai进行了粗略的优化</span><br><br><li><span style="font-family: xingkai">身份局相关：</span><br>●一定程度上减少人机普杀藤甲、黑杀仁王、一杀多指黑光铠等rz操作，目前基本涵盖了所有无名杀自带的无效化防具；<br>●没有队友、场上有忠臣存活的反贼和内奸，以及没有忠臣、场上有多名反贼存活的主公和内奸彼此会减少伤害牌的使用，并在自己血还够扛的情况下会救濒死的对方；<br>●需要弃牌时，主公会盲那些身份尚不明朗的人，前提是对方体力大于1或者自己有绝情标签（一定程度上避免盲忠弃牌后果），如果是忠内混战，主公还会把身份尚不明朗的人都连起来；<br>●稍稍提高对主公用伤害牌或兵乐的影响；<br>' +
							'●内奸将根据玩家设置的武将权重和［第二权重参考］选择的选项作为侧重判断场上角色实力、战损程度、牌持有量、有无翻面决定自己是跳反、跳忠还是酱油（主公比较健康且忠反双方实力差距不大时酱油）；<br>●通过内奸的努力，会逐渐减少其身份暴露度，但如果他跳反时救人或直接伤害主忠，将其身份直接暴露，如果救主忠，大幅减少其身份暴露度；<br>●内奸跳忠/反时会优先打反/忠，需要弃牌时会盲身份不明朗的角色，并尽量规避对主以及忠/反使用伤害牌，自己和主公比较健康时也会救忠/反；<br>●内奸打酱油时，只关心自己和主公，非必要不用牌，需要弃牌时使用伤害牌但也不酒杀，对忠反的生死漠不关心<br><br><li><span style="font-family: xingkai">其他：</span><br>●人机拥有多张同名牌时鼓励人机使用点数较小的牌，弃牌时鼓励保留点数较大的牌，但貌似没有效果；<br>●鼓励拥有reverseEquip标签的角色刷装备，降低已被废除的装备栏对应副类别的牌的价值<br><br><br>'+
							'本体武将AI优化相关：<br>整肃AI<br>手杀文鸯 椎锋<br>DIY文鸯 膂力<br>OL邓芝 修好<br>卧龙凤雏 游龙<br>张绣 雄乱<br>左棻 诏颂<br>蒲元 天匠<br>诸葛亮 空城<br>钟繇 活墨<br>孙策&孙坚 英魂<br>刘焉 立牧<br>潘濬 观微<br>TW曹昂 孝廉<br>曹昂 慷忾<br>许贡 业仇<br>诸葛瞻 父荫<br>刘禅 放权<br>曹丕 放逐<br>神司马懿 放逐 完杀<br>华佗 急救<br>司马徽 荐杰 隐士<br>蒋琬 镇庭<br>手杀全宗 邀名<br>韩馥 节应<br>邓艾 屯田<br>朱然 胆守<br>王粲 善檄<br>TW霍峻 伺怠<br>孙策 激昂<br>神荀彧 灵策 奇正相生<br>神马超 横婺 狩郦<br>童渊 朝凤<br>贾逵 忠佐<br>吕虔 献刀<br>牛金 摧锐<br>辛毗 引据<br>葛玄 扎符<br>OL界孙坚 武烈<br>界孙休 诏缚<br>张济 屯军<br>SP贾诩 拥嫡<br>王允 居功<br>范疆张达 决生<br>司马师 败移<br>骆统 进谏<br>张角 雷击<br>刘谌 战绝<br>孙权 制衡<br>刘永 封乡<br>手杀于禁 节钺<br>曹婴 凌人<br>张让 滔乱<br>神赵云 龙魂<br>神诸葛 大雾<br>丁尚涴 讽言<br>OL王荣 丰姿<br>新潘凤 狂斧<br>曹髦 潜龙 决讨<br>神甘宁 劫营<br>界颜良文丑 双雄<br>谋孙权 统业<br>山包界蔡文姬 悲歌<br>刘辩 诗怨<br>曹冲 仁心 称象<br>周宣 寤寐<br>马铁马休 垦伤<br>王瓘 谬焰<br>丁原〖备诛〗<br>滕芳兰〖哀尘〗<br>王桃〖护关〗〖摇佩〗<br>王悦〖护关〗〖鸣鸾〗<br>晋司马师〖夷灭〗<br>十周年贾诩〖拥嫡〗<br>界祝融〖长标〗<br>罗宪〖带砺〗<br>张瑾云〖继椒〗<br>万年公主〖枕戈〗';
						break;
				}
			}
		},
		copyQg:{
			name:"<span style='color: #00FFFF; font-family: yuanli'>Q群</span>：<span style='color: #FF3300; font-family: suits'>715181494</span> (<font color=#FFFF00>点我复制</font>)",
			clear:true,
			onclick:function(){
				const textarea=document.createElement('textarea');
				textarea.setAttribute('readonly', 'readonly');
				textarea.value='715181494';
				document.body.appendChild(textarea);
				textarea.select();
				if(document.execCommand('copy')){
					document.execCommand('copy');
					alert('群号已复制到剪贴板');
				}
				else alert('复制失败');
				document.body.removeChild(textarea);
			}
		},
		copyWp:{
			name:"<font color=#FF3300>一键复制</font><font color=#FFFF00>百度网盘</font><font color=#00FFFF>下载链接</font>",
			clear:true,
			onclick:function(){
				const textarea=document.createElement('textarea');
				textarea.setAttribute('readonly', 'readonly');
				textarea.value='https://pan.baidu.com/s/1hsVJjfx-wZi87JlaOpIBIw?pwd=h4go';
				document.body.appendChild(textarea);
				textarea.select();
				if(document.execCommand('copy')){
					document.execCommand('copy');
					alert('浏览器访问或打开「百度网盘APP」即可获取本扩展最新版本');
				}
				else alert('复制失败');
				document.body.removeChild(textarea);
			}
		},
		copyYp:{
			name:"<font color=#FF3300>一键复制</font><font color=#FFFF00>123云盘</font><font color=#00FFFF>下载链接</font>",
			clear:true,
			onclick:function(){
				const textarea=document.createElement('textarea');
				textarea.setAttribute('readonly', 'readonly');
				textarea.value='https://www.123pan.com/s/hjYtVv-FZWyh';
				document.body.appendChild(textarea);
				textarea.select();
				if(document.execCommand('copy')){
					document.execCommand('copy');
					alert('提取码：dwOG\n无需登录，浏览器访问即可获取本扩展最新版本');
				}
				else alert('复制失败');
				document.body.removeChild(textarea);
			}
		},
		bd1: {
			clear: true,
			name: '<hr>',
			nopointer: true
		},
		btAi: {
			name: '本体AI优化',
			intro: '开启后，重启游戏可载入对应AI优化策略（包括卡牌AI）。其中〔山河永固〕优化较全面；〔官将重修〕仅优化了部分卡牌AI',
			init: 'shyg',
			item: {
				shyg: '山河永固',
				gjcx: '官将重修',
				off: '关闭'
			}
		},
		gxAi: {
			name: '惯性思维无懈ai',
			intro: '仅在开启［本体AI优化］中〔官将重修〕选项后生效。开启后，针对本扩展中的【火攻】【南蛮入侵】【万箭齐发】，ai<font color=#FF3300>不再对</font>不考虑武将技能、只借助态度值便能确定<font color=#00FFFF>无需无懈</font>的情况（如对敌人使用的即将生效的aoe、对队友使用的即将失效的aoe）进行更多的思考',
			init: true
		},
		nhFriends:{
			name: 'ai不砍队友',
			intro: '开启后，AI一般情况下将更不乐意对符合条件的队友使用除【火攻】外的伤害牌',
			init: 'off',
			item:{
				off: '关闭',
				1: '<=1血队友',
				2: '<=2血队友',
				3: '<=3血队友',
				4: '<=4血队友',
				hp: '<=其体力值队友',
			}
		},
		ntAoe: {
			name: 'aoe不受上一功能影响',
			init: false
		},
		wjAi: {
			name: '武将技能优化',
			intro: '开启后，重启游戏可载入优化后的武将技能，具体优化技能见扩展介绍',
			init: 'on',
			item: {
				on: '开启',
				off: '关闭'
			}
		},
		bd2: {
			clear: true,
			name: '<center>功能</center>',
			nopointer: true
		},
		viewAtt: {
			name: '火眼金睛',
			intro: '可在顶部菜单栏查看态度',
			init: 'off',
			item: {
				on: '开',
				off: '关'
			},
			onclick: function (item) {
				game.saveConfig('extension_AI优化_viewAtt', item);
			}
		},
		findZhong: {
			name: '慧眼识忠',
			intro: '主公开局知道一名忠臣身份',
			init: 'off',
			item: {
				off: '关',
				on: '开'
			},
			onclick: function (item) {
				game.saveConfig('extension_AI优化_findZhong', item);
			}
		},
		xianyunyehe: {
			name: '闲云野鹤',
			intro: '去除部分小游戏，重启生效。（注意：若有其他拓展修改了小游戏可能会报错，关闭此选项即可）',
			init: 'off',
			item: {
				on: '开',
				off: '关'
			},
			onclick: function (item) {
				game.saveConfig('extension_AI优化_xianyunyehe', item);
			}
		},
		attceshi: {
			name: '鹰视狼顾',
			intro: '仅在标准身份局生效，优化场上态度，且玩家可装身份',
			init: 'on',
			item: {
				on: '开',
				off: '关'
			},
			onclick: function (item) {
				game.saveConfig('extension_AI优化_attceshi', item);
			}
		},
		smqq: {
			name: '声名鹊起',
			intro: '对身份局和斗地主ai的选将框进行过滤，可防止出现内奸、地主选单挑王（刘备）这种奇景。如果主公有主公技，忠臣会尽量选择与主势力相同的武将，而且内奸会倾向于选强将，即评级高的(与部分美化扩展不兼容)，具体使用请下滑找到那一系列禁将',
			init: 'off',
			item: {
				off: '关',
				on: '开'
			},
			onclick: function (item) {
				game.saveConfig('extension_AI优化_smqq', item);
			}
		},
		neiKey: {
			name: '内奸可亮明身份',
			intro: '内奸可以于出牌阶段直接亮明身份并加1点体力上限，然后可以选择与主公各回复1点体力，建议与［身份局AI优化］中〔官将重修〕搭配使用',
			init: 'off',
			item: {
				can: '未暴露可亮',
				must: '暴露也可亮',
				off: '关闭'
			}
		},
		bugs: {
			name: '本体bug修复',
			intro: "<br><font color=#00FFFF>修复内容</font>：<br><span style='font-family: shousha'>❶修复孟达〖无节〗全场都不执行死亡奖惩的bug<br>❷修复手杀丁原选择是否令对方获得【杀】时弹窗的bug</span><br><br>可开关此选项并重启游戏测试本扩展修复内容有无bug",
			init: true
		},
		redMs: {
			name: '技能描述还原',
			intro: '将无名杀本体的一些武将技能描述还原为官方描述版本，游戏开始后描述依旧可能被覆盖',
			init: false
		},
		fixZq: {
			name: '坐骑修改',
			intro: '每名角色只能同时装备至多一个坐骑',
			init: false,
			onclick: function (item) {
				if(item && lib.config.extension_AI优化_btAi!='gjcx') alert('［本体AI优化］建议开启〔官将重修〕策略，其中有针对此功能的ai优化');
				game.saveConfig('extension_AI优化_fixZq', item);
			}
		},
		fixFour: {
			name: "<span style='font-family: xingkai'>四人身份局修改</span>",
			intro: '将四人身份局改为1主（加体力上限）1内2反，游戏开始时忠臣改为反贼',
			init: false
		},
		banQh: {
			name: "<span style='font-family: xingkai'>屏蔽武将切换功能</span>",
			intro: '开启后，会屏蔽选将时武将左下角的切换功能',
			init: false
		},
		seen: {
			name: "<span style='font-family: xingkai'>显示隐藏武将</span>",
			intro: '开启后，会显示本体隐藏武将',
			init: false
		},
		banshenfen: {
			clear: true,
			name: '<center>身份</center>',
			nopointer: true
		},
		sfjAi: {
			name: '身份局AI优化',
			intro: '开启后，重启游戏可载入对应身份局AI策略。其中〔山河永固〕优化内容较全面、较耗时；〔官将重修〕优化内容较少、较快，其内奸ai可通过［出牌可修改武将权重］、［武将登场补充权重］和［第二权重参考］为内奸AI判断场上角色实力提供参考',
			init: 'shyg',
			item: {
				shyg: '山河永固',
				gjcx: '官将重修',
				off: '关闭'
			}
		},
		//主公
		banjunzhu: {
			clear: true,
			name: '<li>主公禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_zhu;
				var zhuwrite = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'banZhu.html', function () {});
				};
				game.prompt('请输入要主公ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_zhu;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出主公ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>主公禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入主公ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>主公禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_zhu', lists);
							zhuwrite(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>主公禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		banzhubiao: {
			name: '<li>主公禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				banzhucharacter = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/banZhu.html"></iframe></div>', ui.window);
				banzhucharacter_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', banzhucharacter, function () {
					banzhucharacter.delete();
				});
			}
		},
		//忠臣
		banjunzhong: {
			clear: true,
			name: '<li>忠臣禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_zhong;
				var zhongwrite = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'banZhong.html', function () {});
				};
				game.prompt('请输入要忠臣ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_zhong;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出忠臣ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>忠臣禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入忠臣ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>忠臣禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_zhong', lists);
							zhongwrite(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>忠臣禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		banzhongbiao: {
			name: '<li>忠臣禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				banzhongcharacter = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/banZhong.html"></iframe></div>', ui.window);
				banzhongcharacter_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', banzhongcharacter, function () {
					banzhongcharacter.delete();
				});
			}
		},
		//反贼
		banjunfan: {
			clear: true,
			name: '<li>反贼禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_fan;
				var fanwrite = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'banFan.html', function () {});
				};
				game.prompt('请输入要反贼ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_fan;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出反贼ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>反贼禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入反贼ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>反贼禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_fan', lists);
							fanwrite(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>反贼禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		banfanbiao: {
			name: '<li>反贼禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				banfancharacter = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/banFan.html"></iframe></div>', ui.window);
				banfancharacter_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', banfancharacter, function () {
					banfancharacter.delete();
				});
			}
		},
		//内奸
		banjunnei: {
			clear: true,
			name: '<li>内奸禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_nei;
				var neiwrite = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'banNei.html', function () {});
				};
				game.prompt('请输入要内奸ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_nei;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出内奸ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>内奸禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入内奸ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>内奸禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_nei', lists);
							neiwrite(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>内奸禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		banneibiao: {
			name: '<li>内奸禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				banneicharacter = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/banNei.html"></iframe></div>', ui.window);
				banneicharacter_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', banneicharacter, function () {
					banneicharacter.delete();
				});
			}
		},
		bandoudizhu: {
			clear: true,
			name: '<center>斗地主</center>',
			nopointer: true
		},
		//地主
		bandizhu: {
			clear: true,
			name: '<li>地主禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_yi;
				var dizhuwrite = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'bandizhu.html', function () {});
				};
				game.prompt('请输入要内奸ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_yi;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出地主ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>地主禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入地主ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>地主禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_yi', lists);
							dizhuwrite(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>地主禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		bandizhubiao: {
			name: '<li>地主禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				bandizhucharacter = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/bandizhu.html"></iframe></div>', ui.window);
				bandizhucharacter_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', bandizhucharacter, function () {
					bandizhucharacter.delete();
				});
			}
		},
		//二号农民
		bannongmin2: {
			clear: true,
			name: '<li>二号农民禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_er;
				var nongmin2write = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'bannongmin2.html', function () {});
				};
				game.prompt('请输入要内奸ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_er;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出二号农民ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>二号农民禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入二号农民ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>二号农民禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_er', lists);
							nongmin2write(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>二号农民禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		bannongminbiao2: {
			name: '<li>二号农民禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				bannongmincharacter2 = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/bannongmin2.html"></iframe></div>', ui.window);
				bannongmincharacter2_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', bannongmincharacter2, function () {
					bannongmincharacter2.delete();
				});
			}
		},
		//三号农民
		bannongmin3: {
			clear: true,
			name: '<li>三号农民禁将',
			onclick: function () {
				var temp = this;
				var lists = lib.config.extension_AI优化_san;
				var nongmin3write = function (lists, thisname) {
					//改自手杀ui和群英荟萃
					if (lists && lists.length > 0) {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>";
						for (var i = 0; i < lists.length; i++) {
							SRr += '〖';
							if (lib.translate[lists[i]]) SRr += lib.translate[lists[i]] + '（' + lists[i] + '）〗';
							else SRr += lists[i] + '〗';
							if (lib.translate[lists[i] + '_info']) SRr += lib.translate[lists[i] + '_info'];
						}
						SRr += '</div></body></html>';
					} else {
						var SRr = "<html><head><meta charset='utf-8'><style tybe='text/css'>body {background-image: url('beijing.png');background-size: 100% 100%;background-position: center;--w: 560px;--h: calc(var(--w) * 610/1058);width: var(--w);height: var(--h);background-repeat: no-repeat;background-attachment: fixed;}h1{text-shadow:1px 1px 1PX #000000,1px -1px 1PX #000000,-1px 1px 1PX #000000,-1px -1px 1PX #000000;font-size:20px}div {width: 160vmin;height: 63vmin;border: 0px solid black;border-radius: 9px;padding: 35px;margin-top: 5.5vmin;margin-bottom: 5.5vmin;margin-left: 10.5vmin;margin-right: 10.5vmin;position: center;}div.ex1 {width: 160vmin;/*改变内框宽度*/height: 63vmin;overflow: auto;}</style></head><body><div class='ex1'>亲～您尚未禁将</div></body></html>";
					}
					game.writeFile(SRr, 'extension/AI优化/banList', 'bannongmin3.html', function () {});
				};
				game.prompt('请输入要内奸ai禁选的武将id<br>（如标曹操为“caocao”，神曹操为“shen_caocao”），再次输入同id即可退出', function (str) {
					if (str) {
						var thisstr = false;
						if (lib.character[str]) {
							thisstr = str;
							var lists = lib.config.extension_AI优化_san;
							if (lists) lists = lists.slice(0);
							else lists = [];
							if (lists && lists.contains(thisstr)) {
								lists.remove(thisstr);
								temp.innerHTML = '<div style="color:rgb(210,210,000);font-family:xinwei"><font size="4">武将已退出三号农民ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>三号农民禁将';
									delete temp.ready;
								}, 1600);
							} else {
								lists.push(thisstr);
								temp.innerHTML = '<div style="color:rgb(255,97,3);font-family:xinwei"><font size="4">武将已加入三号农民ai禁选</font></div>';
								temp.ready = true;
								setTimeout(() => {
									temp.innerHTML = '<li>三号农民禁将';
									delete temp.ready;
								}, 1600);
							}
							game.saveConfig('extension_AI优化_san', lists);
							nongmin3write(lists);
						} else {
							temp.innerHTML = '<div style="color:rgb(255,0,0);font-family:xinwei"><font size="4">找不到该武将</font></div>';
							temp.ready = true;
							setTimeout(() => {
								temp.innerHTML = '<li>三号农民禁将';
								delete temp.ready;
							}, 1600);
						}
					}
				});
			}
		},
		bannongminbiao3: {
			name: '<li>三号农民禁选(点击查看)',
			clear: true,
			onclick: function () {
				var h = document.body.offsetHeight;
				var w = document.body.offsetWidth;
				bannongmincharacter3 = ui.create.div('', '<div style="z-index:114514"><iframe width="' + w + 'px" height="' + h + 'px" src="' + lib.assetURL + 'extension/AI优化/banList/bannongmin3.html"></iframe></div>', ui.window);
				bannongmincharacter3_close = ui.create.div('', '<div style="height:10px;width:' + w + 'px;text-align:center;z-index:114514"><font size="5em">关闭</font></div>', bannongmincharacter3, function () {
					bannongmincharacter3.delete();
				});
			}
		},
		zaxiang: {
			clear: true,
			name: '<center>杂项</center>',
			nopointer: true
		},
		qc: {
			name: '武将登场去重',
			intro: '开启后，游戏开始或隐匿武将展示武将牌时，若场上有符合条件的重复武将，则令其中随机一名角色再次进行选将并重复此流程。其中〔去同名〕会根据前缀列表将武将名称的前缀不断剥离后再进行比较',
			init: 'off',
			item: {
				off: '关闭',
				id: '去同id',
				name: '去同名'
			}
		},
		tip1: {
			name: '<font color=#FF3300>注意！</font>此功能进行的选将<font color=#FFFF00>不再额外提供固定武将</font>，且<font color=#FFFF00>暂不支持为特殊模式提供专属将池</font>',
			clear: true
		},
		qcs: {
			name: '去重候选武将数',
			intro: '〔默认〕即游戏开始时每名角色的候选武将数，若为自由选将等特殊情况则默认为6',
			init: 'same',
			item: {
				same: '默认',
				1: '一',
				2: '二',
				3: '三',
				4: '四',
				5: '五',
				6: '六',
				8: '八',
				10: '十'
			}
		},
		editPr: {
			name: '编辑前缀列表',
			clear: true,
			onclick: function () {
				let container = ui.create.div('.popup-container.editor');
				let editorpage = ui.create.div(container);
				let discardConfig = ui.create.div('.editbutton', '取消', editorpage, function () {
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete(null);
					delete window.saveNonameInput;
				});
				let node = container;
				let map = lib.config.extension_AI优化_pr || [];
				let str = 'prefix=[';
				for (let i = 0; i < map.length; i++) {
					if (i % 10 == 0) str += '\n	';
					str += '"' + map[i] + '", ';
				}
				str += '\n];\n//请在[]内进行编辑，或借此复制/粘贴内容以备份/还原配置\n//请务必使用英文标点符号！';
				node.code = str;
				ui.window.classList.add('shortcutpaused');
				ui.window.classList.add('systempaused');
				let saveInput = function () {
					let code;
					if (container.editor) code = container.editor.getValue();
					else if (container.textarea) code = container.textarea.value;
					try {
						var prefix = null;
						eval(code);
						if (!Array.isArray(prefix)) {
							throw '类型不符';
						}
					} catch (e) {
						if (e == '类型不符') alert(e);
						else alert('代码语法有错误，请仔细检查（' + e + '）');
						return;
					}
					game.saveExtensionConfig('AI优化', 'pr', prefix);
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete();
					container.code = code;
					delete window.saveNonameInput;
				};
				window.saveNonameInput = saveInput;
				let saveConfig = ui.create.div('.editbutton', '保存', editorpage, saveInput);
				let editor = ui.create.div(editorpage);
				if (node.aced) {
					ui.window.appendChild(node);
					node.editor.setValue(node.code, 1);
				} else if (lib.device == 'ios') {
					ui.window.appendChild(node);
					if (!node.textarea) {
						let textarea = document.createElement('textarea');
						editor.appendChild(textarea);
						node.textarea = textarea;
						lib.setScroll(textarea);
					}
					node.textarea.value = node.code;
				} else {
					let aceReady = function () {
						ui.window.appendChild(node);
						let mirror = window.CodeMirror(editor, {
							value: node.code,
							mode: 'javascript',
							lineWrapping: !lib.config.touchscreen && lib.config.mousewheel,
							lineNumbers: true,
							indentUnit: 4,
							autoCloseBrackets: true,
							theme: 'mdn-like'
						});
						lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
						node.aced = true;
						node.editor = mirror;
					};
					if (!window.ace) {
						lib.init.js(lib.assetURL + 'game', 'codemirror', aceReady);
						lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
					} else aceReady();
				}
			}
		},
		resetPr: {
			name: '重置前缀列表',
			clear: true,
			onclick: function () {
				if (confirm('单击「确定」以重置武将名前缀列表')) {
					game.saveExtensionConfig('AI优化', 'pr', ['界', '谋', '晋', '神', '族', '魏', '群', '极', '新', '旧', '☆', '手杀', '欢杀', '微信', 'SP', 'OL', 'TW', '十周年']);
					alert('重置成功');
				}
			}
		},
		delayQc: {
			name: '去重换将延时',
			intro: '作者为展示效果用',
			init: '0',
			item: {
				0: '不延时',
				1: '1秒',
				2: '2秒',
				3: '3秒',
				5: '5秒'
			}
		},
		qcp: {
			name: '玩家去重时',
			intro: '玩家为重复武将其中一方被选中更换武将时，〔人机先执行〕优先令另一方更换武将，若另一方受情景约束不能更换武将，玩家不受此约束，则要求玩家更换武将；〔始终不执行〕优先令另一方更换武将，若另一方受情景约束不能更换武将，则不再对这组进行去重操作',
			init: 'ai',
			item: {
				zc: '直接执行',
				ai: '人机先执行',
				no: '始终不执行'
			}
		},
		tip2: {
			name: '<br><font color=#FF3300>注意！</font>通过以下功能设置的权重将<font color=#00FFFF>优先</font>作为内奸AI判断场上角色实力的参考',
			clear: true
		},
		fixQz: {
			name: '出牌可修改武将权重',
			intro: '出牌阶段可以设置/修改场上武将的权重，以此影响内奸AI策略',
			init: false
		},
		applyQz: {
			name: '武将登场补充权重',
			intro: '游戏开始或隐匿武将展示武将牌时建议玩家为没有设置权重的武将设置权重',
			init: false
		},
		ckQz: {
			name: '第二权重参考',
			intro: '开启后，针对没有设置权重的武将，〔评级〕会根据武将评级为这些武将分配正相关的权重[0.8,1.95]，单机时可通过〈千幻聆音〉等扩展修改武将评级以影响对应技能嘲讽值；［嘲讽］会将武将嘲讽作为其对应的权重',
			init: 'off',
			item: {
				off: '不设置',
				pj: '评级',
				cf: '嘲讽'
			}
		},
		qzCf: {
			name: '权重参与效益结算',
			intro: '开启后，ai在计算卡牌效益时会将权重（若无则为1）与结果作积返回，以此鼓励ai优先“待遇”权重大的角色',
			init: false
		},
		chooseQz: {
			name: '<font color=#FF3300>武将权重选项加载失败</font>',
			clear: true,
			nopointer: true
		},
		deleteQz: {
			name: '删除此权重',
			clear: true,
			onclick: function () {
				let id = document.getElementById('AI优化_chooseQz');
				let val = id.options[id.selectedIndex].value;
				if (confirm('确定要删除为' + lib.translate[val] + '设置的权重（' + lib.config.extension_AI优化_qz[val] + '）？')) {
					delete lib.config.extension_AI优化_qz[val];
					game.saveExtensionConfig('AI优化', 'qz', lib.config.extension_AI优化_qz);
					alert('删除成功');
				}
			}
		},
		editQz: {
			name: '编辑武将权重',
			clear: true,
			onclick: function () {
				let container = ui.create.div('.popup-container.editor');
				let editorpage = ui.create.div(container);
				let discardConfig = ui.create.div('.editbutton', '取消', editorpage, function () {
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete(null);
					delete window.saveNonameInput;
				});
				let node = container;
				let map = lib.config.extension_AI优化_qz || {};
				let str = 'weight={',
					len = false;
				for (let i in map) {
					len = true;
					str += '\n	"' + i + '": ' + map[i] + ',';
				}
				if (!localStorage.getItem('weight_alerted')) {
					localStorage.setItem('weight_alerted', true);
					str += '\n	"shen_zhugeliang": 1.75,\n	"liangxing": 1.57,';
					len = true;
					alert('检测到您首次使用此功能，系统将自动为您补充两个作者给定的武将权重作为样例参考（点“取消”不会保存此样例）');
				}
				str += '\n};';
				if (len) str += '\n//请按照上面的写法规则进行编辑，或借此复制/粘贴内容以备份/还原配置\n//请务必使用英文标点符号！';
				node.code = str;
				ui.window.classList.add('shortcutpaused');
				ui.window.classList.add('systempaused');
				let saveInput = function () {
					let code;
					if (container.editor) code = container.editor.getValue();
					else if (container.textarea) code = container.textarea.value;
					try {
						var weight = null;
						eval(code);
						if (Object.prototype.toString.call(weight) !== '[object Object]') {
							throw '类型不符';
						}
					} catch (e) {
						if (e == '类型不符') alert(e);
						else alert('代码语法有错误，请仔细检查（' + e + '）');
						return;
					}
					game.saveExtensionConfig('AI优化', 'qz', weight);
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete();
					container.code = code;
					delete window.saveNonameInput;
				};
				window.saveNonameInput = saveInput;
				let saveConfig = ui.create.div('.editbutton', '保存', editorpage, saveInput);
				let editor = ui.create.div(editorpage);
				if (node.aced) {
					ui.window.appendChild(node);
					node.editor.setValue(node.code, 1);
				} else if (lib.device == 'ios') {
					ui.window.appendChild(node);
					if (!node.textarea) {
						let textarea = document.createElement('textarea');
						editor.appendChild(textarea);
						node.textarea = textarea;
						lib.setScroll(textarea);
					}
					node.textarea.value = node.code;
				} else {
					let aceReady = function () {
						ui.window.appendChild(node);
						let mirror = window.CodeMirror(editor, {
							value: node.code,
							mode: 'javascript',
							lineWrapping: !lib.config.touchscreen && lib.config.mousewheel,
							lineNumbers: true,
							indentUnit: 4,
							autoCloseBrackets: true,
							theme: 'mdn-like'
						});
						lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
						node.aced = true;
						node.editor = mirror;
					};
					if (!window.ace) {
						lib.init.js(lib.assetURL + 'game', 'codemirror', aceReady);
						lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
					} else aceReady();
				}
			}
		},
		copyQz: {
			name: '一键复制武将权重',
			clear: true,
			onclick: function () {
				let map = lib.config.extension_AI优化_qz || {};
				let txt = '';
				for (let i in map) {
					txt += '\r	"' + i + '": ' + map[i] + ',';
				}
				const textarea = document.createElement('textarea');
				textarea.setAttribute('readonly', 'readonly');
				textarea.value = txt;
				document.body.appendChild(textarea);
				textarea.select();
				if (document.execCommand('copy')) {
					document.execCommand('copy');
					alert('已成功复制到剪切板');
				} else alert('复制失败');
				document.body.removeChild(textarea);
			}
		},
		clearQz: {
			name: '清空设置的武将权重',
			clear: true,
			onclick: function () {
				let xs = 0;
				for (let i in lib.config.extension_AI优化_qz) {
					xs++;
				}
				if (confirm('您确定要清空所有通过上述功能设置的武将权重（共' + xs + '项）？')) {
					game.saveExtensionConfig('AI优化', 'qz', {});
					alert('清除成功');
				}
			}
		},
		tip3: {
			name: '<br><font color=#FF3300>注意！</font>通过以下功能修改的技能嘲讽会<font color=#00FFFF>覆盖</font>技能原有的嘲讽值<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp由于嘲讽值一般会与卡牌收益作积，为避免新手胡乱设置可能引起的错乱ai，故部分功能不允许将嘲讽值设为<font color=#FFFF00>非正数</font>',
			clear: true
		},
		fixCf: {
			name: '出牌可修改技能嘲讽',
			intro: '出牌阶段可以修改场上武将当前拥有的技能的嘲讽值，一定程度上为AI提供集火优先级',
			init: false
		},
		applyCf: {
			name: "<span style='font-family: xingkai'>嘲讽补充</span>",
			intro: '〔自动补充〕会在进入游戏时根据武将评级对没有添加嘲讽值的武将技能增加一定嘲讽，单机时可通过〈千幻聆音〉等扩展修改武将评级以影响对应技能嘲讽值；<br>〔手动补充〕会在游戏开始或隐匿武将展示武将牌时建议玩家为没有添加嘲讽值的技能赋嘲讽值',
			init: 'off',
			item: {
				off: '不补充',
				pj: '自动补充',
				sd: '手动补充'
			}
		},
		chooseCf: {
			name: '<font color=#FF3300>技能嘲讽选项加载失败</font>',
			clear: true,
			nopointer: true
		},
		deleteCf: {
			name: '删除此修改项',
			clear: true,
			onclick: function () {
				let id = document.getElementById('AI优化_chooseCf');
				let val = id.options[id.selectedIndex].value;
				if (confirm('确定要删除修改的【' + lib.translate[val] + '】嘲讽值（' + lib.config.extension_AI优化_cf[val] + '）？')) {
					delete lib.config.extension_AI优化_cf[val];
					game.saveExtensionConfig('AI优化', 'cf', lib.config.extension_AI优化_cf);
					alert('删除成功');
				}
			}
		},
		editCf: {
			name: '编辑修改的技能嘲讽',
			clear: true,
			onclick: function () {
				let container = ui.create.div('.popup-container.editor');
				let editorpage = ui.create.div(container);
				let discardConfig = ui.create.div('.editbutton', '取消', editorpage, function () {
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete(null);
					delete window.saveNonameInput;
				});
				let node = container;
				let map = lib.config.extension_AI优化_cf || {};
				let str = 'threaten={',
					len = false;
				for (let i in map) {
					len = true;
					str += '\n	"' + i + '": ' + map[i] + ',';
				}
				if (!localStorage.getItem('threaten_alerted')) {
					localStorage.setItem('threaten_alerted', true);
					str += '\n	"gjcxs_zhugeliang3": 1.9,\n	"gjcxs_caojie1": 0.7,';
					len = true;
					alert('检测到您首次使用此功能，系统将自动为您补充两个作者给定的技能嘲讽作为样例参考（点“取消”不会保存此样例）');
				}
				str += '\n};';
				if (len) str += '\n//请按照上面的写法规则进行编辑，或借此复制/粘贴内容以备份/还原配置\n//请务必使用英文标点符号！';
				node.code = str;
				ui.window.classList.add('shortcutpaused');
				ui.window.classList.add('systempaused');
				let saveInput = function () {
					let code;
					if (container.editor) code = container.editor.getValue();
					else if (container.textarea) code = container.textarea.value;
					try {
						var threaten = null;
						eval(code);
						if (Object.prototype.toString.call(threaten) !== '[object Object]') {
							throw '类型不符';
						}
					} catch (e) {
						if (e == '类型不符') alert(e);
						else alert('代码语法有错误，请仔细检查（' + e + '）');
						return;
					}
					game.saveExtensionConfig('AI优化', 'cf', threaten);
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete();
					container.code = code;
					delete window.saveNonameInput;
				};
				window.saveNonameInput = saveInput;
				let saveConfig = ui.create.div('.editbutton', '保存', editorpage, saveInput);
				let editor = ui.create.div(editorpage);
				if (node.aced) {
					ui.window.appendChild(node);
					node.editor.setValue(node.code, 1);
				} else if (lib.device == 'ios') {
					ui.window.appendChild(node);
					if (!node.textarea) {
						let textarea = document.createElement('textarea');
						editor.appendChild(textarea);
						node.textarea = textarea;
						lib.setScroll(textarea);
					}
					node.textarea.value = node.code;
				} else {
					let aceReady = function () {
						ui.window.appendChild(node);
						let mirror = window.CodeMirror(editor, {
							value: node.code,
							mode: 'javascript',
							lineWrapping: !lib.config.touchscreen && lib.config.mousewheel,
							lineNumbers: true,
							indentUnit: 4,
							autoCloseBrackets: true,
							theme: 'mdn-like'
						});
						lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
						node.aced = true;
						node.editor = mirror;
					};
					if (!window.ace) {
						lib.init.js(lib.assetURL + 'game', 'codemirror', aceReady);
						lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
					} else aceReady();
				}
			}
		},
		copyCf: {
			name: '一键复制修改的技能嘲讽',
			clear: true,
			onclick: function () {
				let map = lib.config.extension_AI优化_cf || {};
				let txt = '';
				for (let i in map) {
					txt += '\r	"' + i + '": ' + map[i] + ',';
				}
				const textarea = document.createElement('textarea');
				textarea.setAttribute('readonly', 'readonly');
				textarea.value = txt;
				document.body.appendChild(textarea);
				textarea.select();
				if (document.execCommand('copy')) {
					document.execCommand('copy');
					alert('已成功复制到剪切板');
				} else alert('复制失败');
				document.body.removeChild(textarea);
			}
		},
		clearCf: {
			name: '清空修改的技能嘲讽',
			clear: true,
			onclick: function () {
				let xs = 0;
				for (let i in lib.config.extension_AI优化_cf) {
					xs++;
				}
				if (confirm('您确定要清空所有通过上述功能修改的技能嘲讽（共' + xs + '项）？')) {
					game.saveExtensionConfig('AI优化', 'cf', {});
					alert('清除成功');
				}
			}
		},
		bd3: {
			clear: true,
			name: '<br>'
		},
		Wj: {
			name: '<font color=#00FFFF>伪</font>玩家可选ai禁选',
			intro: '开启后，游戏开始或隐匿武将展示武将牌时，若场上有ai选择了伪禁列表里包含的ID对应武将，则勒令其从未加入游戏且不包含伪禁列表武将的将池里再次进行选将',
			init: false
		},
		wjs: {
			name: '伪禁候选武将数',
			intro: '〔默认〕即游戏开始时每名角色的候选武将数，若为自由选将等特殊情况则默认为6',
			init: 'same',
			item: {
				same: '默认',
				1: '一',
				2: '二',
				3: '三',
				4: '四',
				5: '五',
				6: '六',
				8: '八',
				10: '十'
			}
		},
		delayWj: {
			name: '伪禁换将延时',
			intro: '作者为展示效果用',
			init: '0',
			item: {
				0: '不延时',
				1: '1秒',
				2: '2秒',
				3: '3秒',
				5: '5秒'
			}
		},
		fixWj: {
			name: '出牌阶段可编辑伪禁',
			intro: '出牌阶段可将场上武将加入/移出伪禁列表，也可以从若干个武将包中选择武将执行此操作',
			init: false
		},
		editWj: {
			name: '编辑伪禁列表',
			clear: true,
			onclick: function () {
				//代码取自［编辑统率将池］
				let container = ui.create.div('.popup-container.editor');
				let editorpage = ui.create.div(container);
				let discardConfig = ui.create.div('.editbutton', '取消', editorpage, function () {
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete(null);
					delete window.saveNonameInput;
				});
				let node = container;
				let map = lib.config.extension_AI优化_wj || [];
				let str = 'disabled=[';
				for (let i = 0; i < map.length; i++) {
					str += '\n	"' + map[i] + '",';
				}
				str += '\n];\n//请在[]内进行编辑，或借此复制/粘贴内容以备份/还原配置\n//请务必使用英文标点符号！';
				node.code = str;
				ui.window.classList.add('shortcutpaused');
				ui.window.classList.add('systempaused');
				let saveInput = function () {
					let code;
					if (container.editor) code = container.editor.getValue();
					else if (container.textarea) code = container.textarea.value;
					try {
						var disabled = null;
						eval(code);
						if (!Array.isArray(disabled)) {
							throw '类型不符';
						}
					} catch (e) {
						if (e == '类型不符') alert(e);
						else alert('代码语法有错误，请仔细检查（' + e + '）');
						return;
					}
					game.saveExtensionConfig('AI优化', 'wj', disabled);
					ui.window.classList.remove('shortcutpaused');
					ui.window.classList.remove('systempaused');
					container.delete();
					container.code = code;
					delete window.saveNonameInput;
				};
				window.saveNonameInput = saveInput;
				let saveConfig = ui.create.div('.editbutton', '保存', editorpage, saveInput);
				let editor = ui.create.div(editorpage);
				if (node.aced) {
					ui.window.appendChild(node);
					node.editor.setValue(node.code, 1);
				} else if (lib.device == 'ios') {
					ui.window.appendChild(node);
					if (!node.textarea) {
						let textarea = document.createElement('textarea');
						editor.appendChild(textarea);
						node.textarea = textarea;
						lib.setScroll(textarea);
					}
					node.textarea.value = node.code;
				} else {
					let aceReady = function () {
						ui.window.appendChild(node);
						let mirror = window.CodeMirror(editor, {
							value: node.code,
							mode: 'javascript',
							lineWrapping: !lib.config.touchscreen && lib.config.mousewheel,
							lineNumbers: true,
							indentUnit: 4,
							autoCloseBrackets: true,
							theme: 'mdn-like'
						});
						lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
						node.aced = true;
						node.editor = mirror;
					};
					if (!window.ace) {
						lib.init.js(lib.assetURL + 'game', 'codemirror', aceReady);
						lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
					} else aceReady();
				}
			}
		},
		copyWj: {
			name: '一键复制伪禁列表',
			clear: true,
			onclick: function () {
				let map = lib.config.extension_AI优化_wj || [];
				let txt = '';
				for (let i = 0; i < map.length; i++) {
					txt += '\r	"' + map[i] + '",';
				}
				const textarea = document.createElement('textarea');
				textarea.setAttribute('readonly', 'readonly');
				textarea.value = txt;
				document.body.appendChild(textarea);
				textarea.select();
				if (document.execCommand('copy')) {
					document.execCommand('copy');
					alert('伪禁列表已成功复制到剪切板');
				} else alert('复制失败');
				document.body.removeChild(textarea);
			}
		},
		clearWj: {
			name: '清空伪禁列表',
			clear: true,
			onclick: function () {
				if (confirm('您确定要清空伪玩家可选ai禁选列表（共' + lib.config.extension_AI优化_wj.length + '个伪禁武将）？')) {
					game.saveExtensionConfig('AI优化', 'wj', []);
					alert('清除成功');
				}
			}
		},
		bd4: {
			name: '<hr>',
			clear: true
		},
	},
	help: {},
	package: {
		character: {
			character: {},
			translate: {}
		},
		card: {
			card: {},
			translate: {},
			list: []
		},
		skill: {
			skill: {},
			translate: {}
		},
		intro: '<font color=#00FFFF>更新日期</font>：<font color=#00FFB0> 7</font>月<font color=#FFFF00> 1</font>日<font color=fire>23</font>时',
		author: '翩翩浊世许公子、157',
		diskURL: '',
		forumURL: '',
		version: '1.0.3.5'
	},
	files: {character: [], card: [], skill: []}
}});
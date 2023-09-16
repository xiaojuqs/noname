'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
  return {
    name: 'taffy',
    connect: true,
    character: {
      shenxushao: ['male', 'shen', 4, ['shenpingjian'],
        ['qun']
      ],
      oldwu_zhugeliang: ['male', 'shu', '4/7', ['olddcjincui', 'olddcqingshi', 'olddczhizhe']],
      shiguanning: ['male', 'qun', '3/7', ['shidunshi']],
      acetaffy: ['female', 'shen', 3, ['taffybaomi', 'taffyfeizhu', 'taffyzuoai', 'taffychusheng'],
        ['qun']
      ],
      minitaffy: ['female', 'qun', 1, ['taffytangshi', 'taffyzisha']],
      shixushao: ['male', 'qun', 4, ['shipingjian']],
      spshenxushao: ['male', 'shen', 4, ['spshenpingjian'],
        ['qun']
      ],
      oldtw_niufudongxie: ['double', 'qun', 4, ['oldtwjuntun', 'oldtwxiongxi', 'oldtwxiafeng']],
      oldtw_zhangmancheng: ['male', 'qun', 4, ['oldtwfengji', 'oldtwyiju', 'oldtwbudao']],
    },
    characterSort: {
      taffy: {
        taffy_old: ['oldwu_zhugeliang', 'oldtw_niufudongxie', 'oldtw_zhangmancheng'],
        taffy_origin: ['shiguanning', 'shixushao'],
        taffy_diy: ["shenxushao", 'acetaffy', 'minitaffy', 'spshenxushao'],
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
                      list.add(name);
                      if (!map[name]) map[name] = [];
                      map[name].push(skills2[j]);
                      skills.add(skills2[j]);
                      break;
                    }
                  }
                  if (info.trigger.global) {
                    if (name2.includes(info.trigger.global) || Array.isArray(info.trigger.global) && hasCommonElement(info.trigger.global, name2)) {
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
              var chooseButton = function (list, skills) {
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
                chooseButton(list, skills);
              } else if (event.isOnline()) {
                event.player.send(chooseButton, list, skills);
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
          threaten: 5
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
        audio: 2,
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
        audio: 2,
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
            player.storage.dcqingshi = index;
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
            if (!player.storage.dcqingshi_ex) player.storage.olddcqingshi_ex = [];
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
        audio: 2,
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
                if (card.hasGaintag('dczhizhe')) {
                  return true;
                }
              },
              cardDiscardable: function (card, player, name) {
                if (name == 'phaseDiscard' && card.hasGaintag('dczhizhe')) {
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
          var banned = ['xunyi'];
          if (get.mode() == 'guozhan') {
            list = [];
            for (var i in lib.characterPack.mode_guozhan) list.push(i);
          }
          // else if(_status.connectMode) list=get.charactersOL();
          else {
            // list=[];
            // for(var i in lib.character){
            // 	if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
            // 	list.push(i);
            // }
            skills = ['tianyi', 'nzry_yili', 'zhichi', 'yicong', 'new_yijue', 'rerende', 'rejizhi', 'renxin', 'zhiyu', 'juyi', 'relixia', 'dcchongyi', 'tongli', 'renzheng', 'cslilu', 'reyixiang', 'xinfu_qianxin', 'yishe']
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
              event.videoId = lib.status.videoId++;
              var func = function (card, id, card2, card3) {
                var list = [
                  '防止即将对' + card3 + '造成的伤害，并令' + card + '获得一个技能名中包含“仁/义/礼/智/信”的技能',
                  '从〖遁世〗中删除【' + card2 + '】并获得一枚“席”',
                  '减1点体力上限，然后摸等同于“席”数的牌',
                ];
                var choiceList = ui.create.dialog('遁世：请选择两项');
                choiceList.videoId = id;
                for (var i = 0; i < list.length; i++) {
                  var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                  str += list[i];
                  str += '</div>';
                  var next = choiceList.add(str);
                  next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                  next.firstChild.link = i;
                  for (var j in lib.element.button) {
                    next[j] = lib.element.button[j];
                  }
                  choiceList.buttons.add(next.firstChild);
                }
                return choiceList;
              };
              if (player.isOnline2()) {
                player.send(func, get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
              }
              event.dialog = func(get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
              if (player != game.me || _status.auto) {
                event.dialog.style.display = 'none';
              }
              var next = player.chooseButton();
              next.set('dialog', event.videoId);
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
              if (player.isOnline2()) {
                player.send('closeDialog', event.videoId);
              }
              event.dialog.close();
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
            'simayi',
            're_xiahoudun',
            're_guojia',
            're_caocao',
            're_fazheng',
            'wangrong',
            'xizhicai',
            'xunyu',
            'caopi',
            'caozhi',
            'caochong',
            'caorui',
            // 'gz_re_lidian',
            'old_re_lidian',
            'manchong',
            'chengong',
            'xunyou',
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
          if (skills.length) player.chooseControl(skills).set('dialog', ['评荐：请选择尝试发动的技能', [list, 'character']]);
          else event.finish();
          'step 1'
          player.markAuto('shipingjian', [result.control]);
          player.addTempSkill(result.control);
          player.storage.shipingjian_check[result.control] = (trigger.name == 'damage' ? trigger : 'phaseJieshu');
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
            'xin_liru',
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
            'ganning',
            're_panfeng',
            'xunyou',
            'xin_handang',
            're_gongsunyuan',
            'buzhi',
            'heqi',
            'zhanghu',
            'jiangwei',
            'huatuo',
            'simalang',
            'zhuzhi',
            'liuyan',
            're_sunshangxiang',
            'dc_bulianshi',
            'chengong',
            'mizhu',
            'diaochan',
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
            'chenqun',
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
          if (skills.length) player.chooseControl(skills).set('dialog', ['评荐：请选择尝试发动的技能', [list, 'character']]);
          else event.finish();
          'step 1'
          player.markAuto('shipingjian', [result.control]);
          player.addTempSkill(result.control);
          player.storage.shipingjian_check[result.control] = 'phaseUse';
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
          if (get.info(event.skill).charlotte) return false;
          var skill = event.sourceSkill || event.skill;
          return player.storage.shipingjian_check[skill];
        },
        direct: true,
        firstDo: true,
        priority: Infinity,
        content: function () {
          var skill = trigger.sourceSkill || trigger.skill;
          player.removeSkill(skill);
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
          if (!player.storage.spshenpingjianX) player.storage.spshenpingjianX = 0;
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
                        list.add(name);
                        if (!map[name]) map[name] = [];
                        map[name].push(skills2[j]);
                        skills.add(skills2[j]);
                        break;
                      }
                    }
                    if (info.trigger.global) {
                      if (name2.includes(info.trigger.global) || Array.isArray(info.trigger.global) && hasCommonElement(info.trigger.global, name2)) {
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
                var chooseButton = function (list, skills) {
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
                  chooseButton(list, skills);
                } else if (event.isOnline()) {
                  event.player.send(chooseButton, list, skills);
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
        group: ['spshenpingjian_use', 'spshenpingjian_check'],
        phaseUse_special: [],
        ai: {
          threaten: 5
        },
      },
      spshenpingjian_use: {
        audio: 'shenpingjian',
        enable: 'phaseUse',
        usable: 1,
        prompt: () => lib.translate.spshenpingjian_info,
        content: function () {
          'step 0'
          if (!player.storage.spshenpingjianX) player.storage.spshenpingjianX = 0;
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
                var chooseButton = function (list, skills) {
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
                  chooseButton(list, skills);
                } else if (event.isOnline()) {
                  event.player.send(chooseButton, list, skills);
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
      spshenpingjian_check: {
        round: 2,
        trigger: {
          player: ['spshenpingjianBefore', 'spshenpingjian_useBefore']
        },
        // direct: true,
        charlotte: true,
        // silent: true,
        forced: true,
        firstDo: true,
        priority: Infinity,
        content: function () {
          if (!player.storage.spshenpingjianX) player.storage.spshenpingjianX = 0;
          player.storage.spshenpingjianX = 1;
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
    },
    card: {},
    characterIntro: {
      shenxushao: '许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
      shiguanning: '管宁（158年—241年），字幼安。北海郡朱虚县（今山东省安丘、临朐东南）人。汉末三国时期著名隐士。管宁与华歆、邴原并称为“一龙”。汉末天下大乱时，与邴原及王烈等人避于辽。在当地只谈经典而不问世事，做讲解《诗经》《书经》，谈祭礼、整治威仪、陈明礼让等教化工作，人们都很乐于接受他的教导。直到魏文帝黄初四年（公元223年）才返乡，辽东太守公孙恭亲自送别。此后曹魏几代帝王数次征召管宁，他都没有应命。正始二年（公元241年），管宁逝世，年八十四。著有《氏姓论》。',
      acetaffy: '永雏塔菲是一名经营着侦探事务所的少女王牌侦探发明家。她来自1885年，乘着自己发明的时光机试图穿越到100年后的时空，却因迟到36年来到了现代，并被现代的电子游戏吸引，不想返回过去。',
      minitaffy: '呃呃，唐完了喵。',
      shixushao: '许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
      spshenxushao: '许劭（shào）（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。',
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
    },
    perfectPair: {},
    characterReplace: {},
    translate: {
      shenxushao: '评世雕龙',
      shenpingjian: '评荐',
      shenpingjian_info: '①回合开始前/结束阶段开始前/当你即将受到伤害前，你可以选择失去X个技能并令系统随机检索出2X+3张拥有发动时机为回合开始前至出牌阶段开始时/结束阶段开始前至结束阶段结束后/当你即将受到伤害前至当你受到的伤害结算后的技能的武将牌，然后你可以选择获得其中至多X+1个技能（X至少为0）。②出牌阶段限一次，你可以选择一项：⒈选择失去Y个技能并令系统随机检索出2Y+3张武将牌，然后你可以选择其中至多Y张武将牌并获得其所有技能（Y至少为1）。⒉令系统随机检索出三张武将牌。然后你可以选择获得其中一个技能。',
      shenpingjian_append: '<span style="font-family: yuanli">我以月旦为料饵，钓尽世间功与名！</span>',
      shenpingjian_use: '评荐',
      oldwu_zhugeliang: '旧武诸葛亮',
      oldwu_zhugeliang_ab: '武诸葛亮',
      olddcjincui: '尽瘁',
      olddcjincui_info: '锁定技。①游戏开始时，你将手牌摸至七张。②准备阶段，你将体力值回复或失去至等同于牌堆中点数为7的牌数（你的体力值最低因此调整至1）。然后你观看牌堆顶X张牌，将这些牌以任意顺序置于牌堆顶或牌堆底（X为你的体力值）。',
      olddcqingshi: '情势',
      olddcqingshi_info: '当你于出牌阶段使用牌时，若你手牌中有同名牌，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸X张牌，然后〖情势〗于本回合无效（X为你的体力值）。',
      olddczhizhe: '智哲',
      olddczhizhe_clear: 'invisible',
      olddczhizhe_info: '限定技。出牌阶段，你可以选择一张手牌并复制之。该复制牌不计入你的手牌上限，且当你使用或打出此牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。',
      shiguanning: '新杀管宁',
      shiguanning_ab: '管宁',
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
      shixushao_ab: '许劭',
      shipingjian: '评荐',
      shipingjian_use: '评荐',
      shipingjian_info: '结束阶段开始时/当你受到伤害后/出牌阶段限一次，你可以令系统随机检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌。然后你可以选择尝试发动其中一个技能。每个技能每局游戏只能选择一次。',
      spshenxushao: '神许劭',
      spshenpingjian: '评荐',
      spshenpingjian_info: '①回合开始前/结束阶段开始前/当你即将受到伤害前，你可以选择失去X个技能并令系统随机检索出2<span class=greentext>X</span>+1张拥有发动时机为回合开始前至出牌阶段开始时/结束阶段开始前至结束阶段结束后/当你即将受到伤害前至当你受到的伤害结算后的技能的武将牌，然后你可以选择获得其中至多<span class=greentext>X</span>个技能（X至少为0）。②出牌阶段限一次，你可以选择失去X个技能并令系统随机检索出2<span class=greentext>X</span>+1张武将牌，然后你可以选择获得其中至多<span class=greentext>X</span>个技能（X至少为0）。③锁定技。每两轮限一次，当你发动〖评荐①〗或〖评荐②〗前，你令本次〖评荐〗中的具有颜色的X+1。',
      spshenpingjian_use: '评荐',
      spshenpingjian_check: '评荐',
      oldtw_niufudongxie: '旧牛辅董翓',
      oldtw_niufudongxie_ab: '牛辅董翓',
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
      oldtw_zhangmancheng: '旧张曼成',
      oldtw_zhangmancheng_ab: '张曼成',
      oldtwfengji: '蜂集',
      oldtwfengji_info: '出牌阶段开始时，若你没有“示”，则你可以将一张牌作为“示”置于武将牌上并施法：从牌堆中获得X张与“示”牌名相同的牌，然后移去“示”。',
      oldtwyiju: '蚁聚',
      oldtwyiju_info: '非锁定技。若你的武将牌上有“示”，则：①你使用【杀】的次数上限和攻击范围的基数改为你的体力值。②当你受到伤害时，你移去“示”，且令此伤害+1。',
      oldtwbudao: '布道',
      oldtwbudao_info: '限定技。准备阶段，你可减1点体力上限，回复1点体力并选择获得一个〖布道〗技能池里的技能（三选一）。然后你可以令一名其他角色也获得此技能并交给你一张牌。',

      taffy_old: "圣经·塔约",
      taffy_origin: "江山如故·塔",
      taffy_diy: "神·塔",
    },
  };
});
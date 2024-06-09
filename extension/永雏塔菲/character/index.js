import { lib, game, ui, get, ai, _status } from "../extension/noname.js";
import characters from "./character.js";
import cards from "./card.js";
import pinyins from "./pinyin.js";
import skills from "./skill.js";
import translates from "./translate.js";
import characterIntros from "./intro.js";
import characterFilters from "./characterFilter.js";
import characterReplaces from "./characterReplace.js";
import dynamicTranslates from "./dynamicTranslate.js";
import voices from "./voices.js";
import { characterSort, characterSortTranslate } from "./sort.js";

export const characterPackFunc = function () {
	game.import("character", function (lib, game, ui, get, ai, _status) {
		const oobj = {
			name: "taffy_character",
			connect: true,
			character: { ...characters },
			characterSort: {
				taffy_character: characterSort,
			},
			characterFilter: { ...characterFilters },
			characterTitle: {
				shenxushao: "#gViridian",
				acetaffy: "#gViridian",
				minitaffy: "#gViridian",
				shixushao: "#gViridian",
				spshenxushao: "#gViridian",
				oldtw_niufudongxie: "#gViridian",
				shenyuji: "#gViridian",
				junko: "#gViridian",
				huiwansunquan: "#gViridian",
				huiwansunquanplus: "#gViridian",
				taffyboss_lvbu1: "#gViridian",
				shenduyu: "#gViridian",
				shenchengui: "#gViridian",
				shenshiguanning: "#gViridian",
				taffyre_xushao: "#gViridian",
				taffyold_sb_caopi: "#gViridian",
				taffyold_wu_guanyu: "#gViridian",
				taffyold_dc_shen_huatuo: "#gViridian",
				taffyshen_xushao: "#gViridian",
			},
			dynamicTranslate: { ...dynamicTranslates },
			characterIntro: { ...characterIntros },
			characterReplace: { ...characterReplaces },
			card: { ...cards },
			skill: { ...skills },
			translate: { ...translates, ...voices, ...characterSortTranslate },
			pinyins: { ...pinyins },
		};
		const whiteList = [...oobj.characterSort.taffy_character.taffy_old, "shoushen_caocao"];
		const specialDetails = {
			shiguanning: {
				character: "character:ddd_guanning",
				die: "die:ext:永雏塔菲/audio/die/shiguanning.mp3",
			},
			spshenxushao: {
				character: "ext:永雏塔菲/image/character/shenxushao.jpg",
				die: "die:ext:永雏塔菲/audio/die/shenxushao.mp3",
			},
			shenyuji: {
				character: "ext:永雏塔菲/image/character/shenyuji.jpg",
				die: "die_audio:yuji",
			},
			huiwansunquan: {
				character: "ext:永雏塔菲/image/character/huiwansunquan.jpg",
				die: "die_audio:re_sunquan",
			},
			huiwansunquanplus: {
				character: "ext:永雏塔菲/image/character/huiwansunquan.jpg",
				die: "die_audio:re_sunquan",
			},
			taffyboss_lvbu1: {
				character: "ext:永雏塔菲/image/character/taffyboss_lvbu1.jpg",
				die: "die_audio:boss_lvbu1",
			},
			taffybaby_shen_simayi: {
				character: "ext:永雏塔菲/image/character/taffybaby_shen_simayi.jpg",
				die: "die_audio:shen_simayi",
			},
			shenduyu: {
				character: "ext:永雏塔菲/image/character/shenduyu.jpg",
				die: "die_audio:sp_duyu",
			},
			shenchengui: {
				character: "ext:永雏塔菲/image/character/shenchengui.jpg",
				die: "die:ext:永雏塔菲/audio/die/shenchengui.mp3",
			},
			taffyre_xushao: {
				character: "ext:永雏塔菲/image/character/taffyre_xushao.jpg",
				die: "die:ext:永雏塔菲/audio/die/shixushao.mp3",
			},
			taffyshen_xushao: {
				character: "ext:永雏塔菲/image/character/shenxushao.jpg",
				die: "die:ext:永雏塔菲/audio/die/shenxushao.mp3",
			},
		};
		const specialList = Object.keys(specialDetails);
		for (let i in oobj.character) {
			if (whiteList.includes(i)) continue;
			if (specialList.includes(i)) {
				if (oobj.character[i][4]) {
					oobj.character[i][4].push(specialDetails[i].character, specialDetails[i].die);
				} else {
					oobj.character[i].splice(4, 0, [specialDetails[i].character, specialDetails[i].die]);
				}
				continue;
			}
			if (oobj.character[i][4]) {
				oobj.character[i][4].push("ext:永雏塔菲/image/character/" + i + ".jpg", "die:ext:永雏塔菲/audio/die/" + i + ".mp3");
			} else {
				oobj.character[i].splice(4, 0, ["ext:永雏塔菲/image/character/" + i + ".jpg", "die:ext:永雏塔菲/audio/die/" + i + ".mp3"]);
			}
		}
		for (let i in oobj.skill) {
			if (typeof oobj.skill[i].audio === "number") {
				oobj.skill[i].audio = `ext:永雏塔菲/audio/skill/:${oobj.skill[i].audio}`;
			}
		}
		return oobj;
	});
};

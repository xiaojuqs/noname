import { lib, game, ui, get, ai, _status } from "../extension/noname.js";

const dynamicTranslates = {
	taffydc_dunshi(player) {
		var info = player.storage.taffydc_dunshi;
		var str = "每回合限一次。你可以视为使用或打出一张";
		var list = ["sha", "shan", "tao", "jiu"];
		for (var i of list) {
			var strx = "【" + get.translation(i) + "】";
			if (!info || !info[0].includes(i)) strx = '<span style="text-decoration:line-through;">' + strx + "</span>";
			str += strx;
			if (i != "jiu") str += "/";
		}
		str += "，然后当前回合角色于本回合内下一次造成伤害时，你选择两项：⒈防止此伤害。系统从技能名中包含“仁/义/礼/智/信”字样的技能中随机选择三个其未拥有的技能，然后你令当前回合角色获得其中一个技能。⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个“席”。⒊减1点体力上限并摸X张牌（X为你的“席”数）。";
		return str;
	},
	taffyold_luochong(player) {
		var storage = player.getStorage("taffyold_luochong");
		var str = "准备阶段开始时/当你受到伤害后，你可选择本轮内未选择过的一项：";
		var choiceList = ["⒈令一名角色回复1点体力。", "⒉令一名其他角色失去1点体力。", "⒊弃置一名其他角色的至多两张牌。", "⒋令一名角色摸两张牌。"];
		for (var i = 0; i < 4; i++) {
			if (storage.includes(i)) {
				choiceList[i] = '<span style="text-decoration: line-through;">' + choiceList[i] + "</span>";
			}
			str += choiceList[i];
		}
		return str;
	},
	limulu_zhihui(player) {
		return ["每轮限X次（X为你的体力上限）。你可以选择失去一个技能，视为使用或打出任意一张基本牌，此牌无法被响应；若你以此法失去了〖暴食〗，你加1点体力上限并获得5张基本牌；若你以此法造成了伤害，此技能于本回合失效。", "每轮限X次（X为你的体力上限）。你可以选择失去一个技能或弃置2张牌，视为使用或打出任意一张基本牌或普通锦囊牌，此牌无法被响应；若你以此法失去了〖暴食〗，你加1点体力上限并获得5张基本牌；若你以此法造成了伤害，此技能于本回合失效。"][player.countMark("limulu_zhihui")];
	},
	taffyre_nzry_cunmu(player) {
		if (player.storage.taffyre_nzry_cunmu) return "转换技，锁定技，当你摸牌时，<span class='bluetext'>阴：改为从牌堆底摸牌。</span>阳：改为从牌堆顶摸牌。";
		return "转换技，锁定技，当你摸牌时，阴：改为从牌堆底摸牌。<span class='bluetext'>阳：改为从牌堆顶摸牌。</span>";
	},
};
export default dynamicTranslates;

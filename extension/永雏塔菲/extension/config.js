import { lib, get, _status, ui, game, ai } from "./noname.js";

export const CONFIG = {
	version: {
		nopointer: true,
		clear: true,
		name: "更新日期: 2024-06-10",
	},
	github: {
		clear: true,
		name: '<span style="text-decoration: underline;">点击前往项目Github地址<span>',
		onclick(item) {
			window.open("https://github.com/Viridian8520/noname");
		},
	},
};

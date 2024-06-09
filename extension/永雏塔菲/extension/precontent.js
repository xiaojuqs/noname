import { lib, get, _status, ui, game, ai } from "./noname.js";
import { characterPackFunc } from "../character/index.js";

export const PRECONTENT = function (config) {
	if (config.enable) {
		const link = document.createElement("link");
		link.rel = "icon";
		link.href = `${lib.assetURL}extension/永雏塔菲/image/icon.png`;
		document.head.appendChild(link);
		// 联机模式导入所有扩展喵
		const retryOverride = function (times, timer) {
			if (times < 0) return;
			if (_status.connectMode === undefined) {
				console.log(`%c替换联机函数：第${times}次尝试`, "color:pink");
				const ti = setTimeout(() => {
					retryOverride(times - 1, ti);
					clearTimeout(ti);
				}, 10);
			} else {
				Object.defineProperties(_status, {
					connectMode: {
						configurable: true,
						get: function () {
							return this._connectMode;
						},
						set: function (value) {
							this._connectMode = value;
							if (!value || !lib.extensions) return;
							const extensions = lib.extensions;
							const startBeforeFunction = lib.init.startBefore;
							lib.init.startBefore = function () {
								try {
									extensions.forEach(ext => {
										_status.extension = ext[0];
										_status.evaluatingExtension = ext[3];
										ext[1](ext[2], ext[4]);
										delete _status.extension;
										delete _status.evaluatingExtension;
										console.log(`%c${ext[0]}: 联机成功喵~`, "color:pink");
									});
								} catch (e) {
									console.log(e);
								}
								if (startBeforeFunction) startBeforeFunction.apply(this, arguments);
							};
						},
					},
					_connectMode: {
						value: false,
						writable: true,
					},
				});
				console.log("%c替换十周年UI联机函数成功喵~", "color:pink");
				if (timer) {
					clearTimeout(timer);
				}
			}
		};
		retryOverride(20);
		// 一些prefix样式补充
		lib.namePrefix.set("旧武", {
			/**
			 * @returns {string}
			 */
			getSpan: () => `${get.prefixSpan("旧")}${get.prefixSpan("武")}`,
		});
		lib.namePrefix.set("旧TW", {
			/**
			 * @returns {string}
			 */
			getSpan: () => `${get.prefixSpan("旧")}${get.prefixSpan("TW")}`,
		});
		lib.namePrefix.set("欢杀", {
			showName: "欢",
		});
		lib.namePrefix.set("欢杀神", {
			/**
			 * @returns {string}
			 */
			getSpan: () => `${get.prefixSpan("欢杀")}${get.prefixSpan("神")}`,
		});
		lib.namePrefix.set("面杀", {
			showName: "面",
		});
		lib.namePrefix.set("旧OL", {
			/**
			 * @returns {string}
			 */
			getSpan: () => `${get.prefixSpan("旧")}${get.prefixSpan("OL")}`,
		});
		lib.namePrefix.set("新杀神", {
			/**
			 * @returns {string}
			 */
			getSpan: () => `${get.prefixSpan("新杀")}${get.prefixSpan("神")}`,
		});
		lib.namePrefix.set("旧族", {
			/**
			 * @returns {string}
			 */
			getSpan: () => `${get.prefixSpan("旧")}${get.prefixSpan("族")}`,
		});
		characterPackFunc();
		lib.config.all.characters.splice(21, 0, "taffy_character");
		if (!lib.config.characters.includes("taffy_character")) {
			lib.config.characters.splice(21, 0, "taffy_character");
		}
		lib.translate["taffy_character" + "_character_config"] = "永雏塔菲";
	}
};

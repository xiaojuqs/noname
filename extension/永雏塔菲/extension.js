import { lib, get, _status, ui, game, ai } from "./extension/noname.js";
import { CONFIG } from "./extension/config.js";
import { CONTENT } from "./extension/content.js";
import { PRECONTENT } from "./extension/precontent.js";

const mainPackageFunc = async function () {
	const extensionInfo = await lib.init.promises.json(`${lib.assetURL}extension/永雏塔菲/info.json`);
	const mainPackage = {
		name: "永雏塔菲",
		content: CONTENT,
		precontent: PRECONTENT,
		config: CONFIG,
		help: {},
		package: {
			character: {
				character: {},
				translate: {},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {},
				translate: {},
			},
			intro: extensionInfo.intro,
			author: extensionInfo.author,
			diskURL: "",
			forumURL: "",
			version: extensionInfo.version,
		},
		files: {
			character: [],
			card: [],
			skill: [],
		},
	};
	return mainPackage;
};

export const type = "extension";
export default mainPackageFunc;

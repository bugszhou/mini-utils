function getGlobal(){return "undefined"!=typeof wx&&wx?wx:"undefined"!=typeof my&&my?my:"undefined"!=typeof swan&&swan?swan:"undefined"!=typeof tt&&tt?tt:global}

function getPlatform(){if("undefined"!=typeof wx&&wx)return "weapp";if("undefined"!=typeof my&&my)return "aliapp";if("undefined"!=typeof swan&&swan)return "swan";if("undefined"!=typeof tt&&tt)return "tt";throw new Error("Not Support In This Platform!")}

function showModal(){var platform=getPlatform();return "aliapp"===platform?getGlobal().alert:getGlobal().showModal}

var globalObj=getGlobal();function updateApp(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{reLaunch:"/pages/index/index"},reLaunchPage=_ref.reLaunchPage,updateManager=globalObj.getUpdateManager();return updateManager.onCheckForUpdate(function(res){console.log(res.hasUpdate);}),updateManager.onUpdateReady(function(){showModal();}),updateManager.onUpdateFailed(function(){globalObj.reLaunch({url:reLaunchPage});}),updateManager}

export { getGlobal, getPlatform, updateApp };
//# sourceMappingURL=miniapp-utils.esm.js.map

function getGlobal(){return "undefined"!=typeof wx&&wx?wx:"undefined"!=typeof my&&my?my:"undefined"!=typeof swan&&swan?swan:"undefined"!=typeof tt&&tt?tt:global}

var globalObj=getGlobal();function updateApp(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{reLaunch:"/pages/index/index"},reLaunchPage=_ref.reLaunchPage,updateManager=globalObj.getUpdateManager();return updateManager.onCheckForUpdate(function(res){console.log(res.hasUpdate);}),updateManager.onUpdateReady(function(){globalObj.showModal({title:"\u66F4\u65B0\u63D0\u793A",content:"\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u91CD\u542F\u5E94\u7528\uFF1F",showCancel:!1,confirmText:"\u4F7F\u7528\u65B0\u7248\u672C",success:function success(){updateManager.applyUpdate();}});}),updateManager.onUpdateFailed(function(){globalObj.reLaunch({url:reLaunchPage});}),updateManager}

export { getGlobal, updateApp };
//# sourceMappingURL=miniapp-utils.esm.js.map

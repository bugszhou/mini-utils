(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, (function () {
    var current = global['miniapp-utils'];
    var exports = global['miniapp-utils'] = {};
    factory(exports);
    exports.noConflict = function () { global['miniapp-utils'] = current; return exports; };
  }()));
}(this, function (exports) { 'use strict';

  function getGlobal(){return "undefined"!=typeof wx&&wx?wx:"undefined"!=typeof my&&my?my:"undefined"!=typeof swan&&swan?swan:"undefined"!=typeof tt&&tt?tt:global}

  var globalObj=getGlobal();function updateApp(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{reLaunch:"/pages/index/index"},reLaunchPage=_ref.reLaunchPage,updateManager=globalObj.getUpdateManager();return updateManager.onCheckForUpdate(function(res){console.log(res.hasUpdate);}),updateManager.onUpdateReady(function(){globalObj.showModal({title:"\u66F4\u65B0\u63D0\u793A",content:"\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u91CD\u542F\u5E94\u7528\uFF1F",showCancel:!1,confirmText:"\u4F7F\u7528\u65B0\u7248\u672C",success:function success(){updateManager.applyUpdate();}});}),updateManager.onUpdateFailed(function(){globalObj.reLaunch({url:reLaunchPage});}),updateManager}

  function getPlatform(){if("undefined"!=typeof wx&&wx)return "weapp";if("undefined"!=typeof my&&my)return "aliapp";if("undefined"!=typeof swan&&swan)return "swan";if("undefined"!=typeof tt&&tt)return "tt";throw new Error("Not Support In This Platform!")}

  exports.getGlobal = getGlobal;
  exports.getPlatform = getPlatform;
  exports.updateApp = updateApp;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=miniapp-utils.js.map

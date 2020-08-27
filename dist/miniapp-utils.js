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

  function getPlatform(){if("undefined"!=typeof wx&&wx)return "weapp";if("undefined"!=typeof my&&my)return "aliapp";if("undefined"!=typeof swan&&swan)return "swan";if("undefined"!=typeof tt&&tt)return "tt";throw new Error("Not Support In This Platform!")}

  function showModal(){var opts=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},platform=getPlatform();return "aliapp"===platform?getGlobal().confirm(opts):getGlobal().showModal(opts)}

  var globalObj=getGlobal(),defaultTitle="\u66F4\u65B0\u63D0\u793A",defaultContent="\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u91CD\u542F\u5E94\u7528\uFF1F",defaultCconfirmText="\u4F7F\u7528\u65B0\u7248";function updateApp(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{reLaunch:"/pages/index/index",showCancel:!1},reLaunchPage=_ref.reLaunchPage,title=_ref.title,content=_ref.content,confirmText=_ref.confirmText,showCancel=_ref.showCancel,updateManager=globalObj.getUpdateManager();try{updateManager.onCheckForUpdate(function(res){console.log(res.hasUpdate);}),updateManager.onUpdateReady(function(){showModal({title:title||defaultTitle,content:content||defaultContent,showCancel:showCancel,confirmText:confirmText||defaultCconfirmText,success:function success(_ref2){var confirm=_ref2.confirm;confirm&&updateManager.applyUpdate();}});}),updateManager.onUpdateFailed(function(){globalObj.reLaunch({url:reLaunchPage});});}catch(e){console.error(e);}return updateManager}

  exports.getGlobal = getGlobal;
  exports.getPlatform = getPlatform;
  exports.updateApp = updateApp;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=miniapp-utils.js.map

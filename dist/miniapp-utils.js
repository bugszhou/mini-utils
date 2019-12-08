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

  function showModal(){var platform=getPlatform();return "aliapp"===platform?getGlobal().alert:getGlobal().showModal}

  var globalObj=getGlobal();function updateApp(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{reLaunch:"/pages/index/index"},reLaunchPage=_ref.reLaunchPage,updateManager=globalObj.getUpdateManager();return updateManager.onCheckForUpdate(function(res){console.log(res.hasUpdate);}),updateManager.onUpdateReady(function(){showModal();}),updateManager.onUpdateFailed(function(){globalObj.reLaunch({url:reLaunchPage});}),updateManager}

  exports.getGlobal = getGlobal;
  exports.getPlatform = getPlatform;
  exports.updateApp = updateApp;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=miniapp-utils.js.map

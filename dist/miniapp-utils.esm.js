function getGlobal () {
  return wx || my || swan || tt || global;
}

var globalObj = getGlobal();
function updateApp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    reLaunch: '/pages/index/index'
  },
      reLaunchPage = _ref.reLaunchPage;

  var updateManager = globalObj.getUpdateManager();
  updateManager.onCheckForUpdate(function (res) {
    console.log(res.hasUpdate);
  });
  updateManager.onUpdateReady(function () {
    globalObj.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      showCancel: false,
      confirmText: '使用新版本',
      success: function success() {
        updateManager.applyUpdate();
      }
    });
  });
  updateManager.onUpdateFailed(function () {
    globalObj.reLaunch({
      url: reLaunchPage
    });
  });
  return updateManager;
}

export { getGlobal, updateApp };
//# sourceMappingURL=miniapp-utils.esm.js.map

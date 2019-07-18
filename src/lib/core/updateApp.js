import getGlobal from './getGlobal';

const globalObj = getGlobal();

export default function updateApp({ reLaunchPage } = { reLaunch: '/pages/index/index' }) {
  const updateManager = globalObj.getUpdateManager();

  updateManager.onCheckForUpdate((res) => {
    // 是否有更新
    console.log(res.hasUpdate);
  });

  updateManager.onUpdateReady(() => {
    globalObj.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      showCancel: false,
      confirmText: '使用新版本',
      success() {
        updateManager.applyUpdate();
      },
    });
  });

  updateManager.onUpdateFailed(() => {
    // 新版本下载失败
    globalObj.reLaunch({ url: reLaunchPage });
  });

  return updateManager;
}
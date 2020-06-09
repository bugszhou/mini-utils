import getGlobal from "./getGlobal";
import showModal from "../utils/showModal";

const globalObj = getGlobal();

const defaultTitle = "更新提示";
const defaultContent = "新版本已经准备好，是否重启应用？";
const defaultCconfirmText = "使用新版";

export default function updateApp(
  // eslint-disable-next-line object-curly-newline
  { reLaunchPage, title, content, confirmText, showCancel } = {
    reLaunch: "/pages/index/index",
    showCancel: false,
  },
) {
  const updateManager = globalObj.getUpdateManager();

  updateManager.onCheckForUpdate((res) => {
    // 是否有更新
    console.log(res.hasUpdate);
  });

  updateManager.onUpdateReady(() => {
    showModal({
      title: title || defaultTitle,
      content: content || defaultContent,
      showCancel,
      confirmText: confirmText || defaultCconfirmText,
      success({ confirm }) {
        if (confirm) {
          updateManager.applyUpdate();
        }
      },
    });
  });

  updateManager.onUpdateFailed(() => {
    // 新版本下载失败
    globalObj.reLaunch({ url: reLaunchPage });
  });

  return updateManager;
}

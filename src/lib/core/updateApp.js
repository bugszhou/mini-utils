import getGlobal from "./getGlobal";
import showModal from "../utils/showModal";

const globalObj = getGlobal();

const defaultTitle = "更新提示";
const defaultContent = "新版本已经准备好，是否重启应用？";
const defaultConfirmText = "使用新版";

export default function updateApp(
  // eslint-disable-next-line object-curly-newline
  { title, content, confirmText, showCancel } = {
    showCancel: false,
  },
) {
  const updateManager = globalObj.getUpdateManager();

  try {
    updateManager.onCheckForUpdate((res) => {
      // 是否有更新
      console.log(res.hasUpdate);
    });

    updateManager.onUpdateReady(() => {
      showModal({
        title: title || defaultTitle,
        content: content || defaultContent,
        showCancel,
        confirmText: confirmText || defaultConfirmText,
        success({ confirm }) {
          if (confirm) {
            updateManager.applyUpdate();
          }
        },
      });
    });

    updateManager.onUpdateFailed((updateErr) => {
      // 新版本下载失败
      console.error("版本更新失败：", updateErr);
    });
  } catch (e) {
    console.error(e);
  }

  return updateManager;
}

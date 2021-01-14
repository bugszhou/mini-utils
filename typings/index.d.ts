declare namespace IMiUitl {
  interface IUpdataApp {
    /**
     * 默认重定向到：/pages/index/index
     */
    reLaunchPage?: string;
    /**
     * 提示框标题
     * 默认：更新提示
     */
    title?: string;
    /**
     * 提示框详情内容
     * 默认值是：新版本已经准备好，是否重启应用？
     */
    content?: string;
    /**
     * 提示框确认按钮文字
     * 默认：使用新版
     */
    confirmText?: string;
    /**
     * 是否显示取消按钮
     * 默认：false
     */
    showCancel?: boolean;
  }

  interface OnCheckForUpdateCallbackResult {
    /** 是否有新版本 */
    hasUpdate: boolean;
  }

  type OnCheckForUpdateCallback = (
    result: OnCheckForUpdateCallbackResult,
  ) => void;

  interface GeneralCallbackResult {
    errMsg: string;
  }

  /** 小程序更新失败事件的回调函数 */
  type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void;

  /** 小程序有版本更新事件的回调函数 */
  type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void;

  interface UpdateManager {
    /** [UpdateManager.applyUpdate()](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html)
     *
     * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。 */
    applyUpdate(): void;
    /** [UpdateManager.onCheckForUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html)
     *
     * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。 */
    onCheckForUpdate(
      /** 向微信后台请求检查更新结果事件的回调函数 */
      callback: OnCheckForUpdateCallback,
    ): void;
    /** [UpdateManager.onUpdateFailed(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html)
     *
     * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
    onUpdateFailed(
      /** 小程序更新失败事件的回调函数 */
      callback: OnUpdateFailedCallback,
    ): void;
    /** [UpdateManager.onUpdateReady(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html)
     *
     * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
    onUpdateReady(
      /** 小程序有版本更新事件的回调函数 */
      callback: OnUpdateReadyCallback,
    ): void;
  }
}

declare module "miniapp-utils" {
  export const MODULE_NAME: string;
  export const updateApp: (
    opts?: IMiUitl.IUpdataApp,
  ) => IMiUitl.UpdateManager;
}

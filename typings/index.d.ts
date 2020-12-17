import "weapp-api-typings";

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
}

declare module "miniapp-utils" {
  export const MODULE_NAME: string;
  export const updateApp: (
    opts?: IMiUitl.IUpdataApp,
  ) => WechatMiniprogram.UpdateManager;
}

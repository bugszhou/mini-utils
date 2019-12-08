import getPlatform from '../core/platform';
import getGlobal from '../core/getGlobal';

export default function showModal() {
  const platform = getPlatform();
  if (platform === "aliapp") {
    return getGlobal().alert;
  }
  return getGlobal().showModal;
}

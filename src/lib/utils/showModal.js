import getPlatform from '../core/platform';
import getGlobal from '../core/getGlobal';

export default function showModal(opts = {}) {
  const platform = getPlatform();
  if (platform === "aliapp") {
    return getGlobal().alert(opts);
  }
  return getGlobal().showModal(opts);
}

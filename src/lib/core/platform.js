
export default function getPlatform() {
  if (typeof wx !== 'undefined' && wx) {
    return "weapp";
  }
  if (typeof my !== 'undefined' && my) {
    return "aliapp";
  }
  if (typeof swan !== 'undefined' && swan) {
    return "swan";
  }
  if (typeof tt !== 'undefined' && tt) {
    return "tt";
  }
  throw new Error(`Not Support In This Platform!`);
}
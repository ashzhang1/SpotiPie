// This code was taken from https://github.com/huangdarren1106/huangdarren1106.github.io/tree/f4cb51dd013d257573bfe320d40c1ea2405a34ef
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default hash;
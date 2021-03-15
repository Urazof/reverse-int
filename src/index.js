module.exports = function reverse (n) {
  if (!n) return 0;
  return parseInt(n.toString().split('').reverse().join(''));
}

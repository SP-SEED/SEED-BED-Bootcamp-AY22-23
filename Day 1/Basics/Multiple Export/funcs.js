// File exporting

let plusFunc = (x, y) => x + y;
let multiFunc = (x, y) => x * y;

module.exports.plusFunc = plusFunc;
module.exports.multiFunc = multiFunc;
// or
let funcs = {
  plusFunc: plusFunc,
  multiFunc: multiFunc,
};

module.exports = funcs;

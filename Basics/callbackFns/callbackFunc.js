var formula = require("./funcs2");
// if input value is Infinity, err msg is thrown
formula.mulFn(2, 2, (err, result) => {
  if (err) console.log(err.message);
  else console.log(result);
});
console.log("Waiting for result...");

// Output: Waiting for result...
//         12

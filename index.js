const maths = require("./math_module/math");

const a = maths.add(1, 1);
const b = maths.add(-123, 123123);
const c = maths.mult(8, 0);
const d = maths.mult(1239123, 12313);
const e = maths.div(123, -12);
const f = maths.div(313123, 0);

console.log("Showing the result:");
console.log("For A: ", a);
console.log("For B: ", b);
console.log("For C: ", c);
console.log("For D: ", d);
console.log("For C: ", e);
console.log("For D: ", f);
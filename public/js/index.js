import strictEquals from "./strictEquals.js";

console.log("NaN is equal to NaN = " + strictEquals(NaN, NaN));
console.log("0 is equal to -0 = " + strictEquals(0, -0));
console.log("-0 is equal to 0 = " + strictEquals(-0, 0));
console.log("'1' is equal to 1 = " + strictEquals("1", 1));
console.log("true is equal to false = " + strictEquals(true, false));
console.log("false is equal to false = " + strictEquals(false, false));
console.log("'water' is equal to 'oil' = " + strictEquals("Water", "oil"));
console.log("5 is equal to 5 = " + strictEquals(5, 5));
console.log("6 is equal to 5 = " + strictEquals(6, 5));

let name = "Jinane";
alert(name);
let age = 25;
const lastName = "Izrafil";
var DOB = "12/05/1998";

//changing values
age = 33;
DOB = "12/5/1990";

// Log all three variables
console.log(age);
console.log(lastName);
console.log(DOB);

//step4
console.log(typeof "This is a text");
console.log(typeof true);
console.log(typeof false);
console.log(typeof 1215);
console.log(typeof "999");
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);

let num = 42;
let str = "Hello";
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];
let n = null;
let u = undefined;

console.log(typeof num, num);
console.log(typeof str, str);
console.log(typeof bool, bool);
console.log(typeof obj, obj);
console.log(typeof arr, arr);
console.log(typeof n, n);
console.log(typeof u, u);

//step5

let myText = "step5";

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
  "This is my text using single quotations " + counter + " times";
const doubleQuote =
  "This is my text using double quotations " + counter + " times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log(myText);
console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);

console.log(
  "Backtick allows interpolation, while single and double quotes do not."
);

//step6
let str1 = "step";
let str2 = "6";
let result = str1 + str2;

console.log(result);

//step7

console.log(1 === "1");
console.log(1 !== "1");
console.log(1 == "1");
console.log(1 != "1");

console.log(5 > 3);
console.log(5 >= 5);
console.log(3 < 5);
console.log(3 <= 3);

//step8
let result0 = 5 + 3 * 2;
let result1 = 10 / 2 + 3;
let result2 = 10 / (2 + 3);

console.log("Result 0:", result0);
console.log("Result 1:", result1);
console.log("Result 2:", result2);

console.log(result1 > result2);

console.log(
  "Result 1 is the sum of 10/2 and 3, while Result 2 is 10 divided by (2+3)."
);

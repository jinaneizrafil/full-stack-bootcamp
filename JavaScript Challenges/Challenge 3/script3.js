function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 3)); // 8

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return "Both are equal";
  }
}

function compute(num1, num2, operation) {
  function add() {
    return num1 + num2;
  }

  function subtract() {
    return num1 - num2;
  }

  function multiply() {
    return num1 * num2;
  }

  function divide() {
    return num1 / num2;
  }

  switch (operation) {
    case "add":
      return add();
    case "subtract":
      return subtract();
    case "multiply":
      return multiply();
    case "divide":
      return divide();
    default:
      return "Invalid operation";
  }
}

//step2

let globalVar = "global variable";
const squareNumber = (number) => {
  console.log(globalVar);
  let localVar = " local variable ";
  return number * number;
};

console.log(localVar);

//step3

//for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//while loop
let countDown = 10;
while (countDown >= 1) {
  console.log(countDown);
  countDown--;
}

// Do-While Loop

let number = 1;
do {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
} while (number <= 10);

// Advanced Loop Challenge

const favoriteFruits = ["apple", "banana", "strawberry", "kiwi", "watermelon"];
for (let fruit of favoriteFruits) {
  if (fruit.length > 5) {
    console.log(fruit);
  }
}

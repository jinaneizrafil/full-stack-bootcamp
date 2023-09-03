// Step 1
const age = 25;

if (age >= 20) {
  console.log("You can enter this room.");
} else {
  console.log("You can't enter this room.");
}

const expression1 = 5 > 3;
const expression2 = 10 === "10";
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);

// Step 2

const age = 25;
const hasDriverLicense = true;
const hasCar = false;
let canDrive = false;
let canRentCar = false;
let needDriver = false;

if (age >= 18 && hasDriverLicense) {
  canDrive = true;
}

if (age >= 22 && hasDriverLicense && !hasCar) {
  canRentCar = true;
}

if (age < 18 && !hasDriverLicense && !hasCar) {
  needDriver = true;
}

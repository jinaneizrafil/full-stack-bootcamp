// Step 1
const fiveNumbers = [1, 2, 3, 4, 5];

const personalInfo = {
  name: "Jack",
  age: 30,
  height: 180,
  location: "beirut",
  nationality: "lebanese",
};

// Step 2
const nextThreeNumbers = [6, 7, 8];
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

const additionalInfo = {
  occupation: "Software Developer",
  hobby: "Chess",
  education: "Bachelor's Degree",
};
const fullInfo = { ...personalInfo, ...additionalInfo };

// Step 3
const [firstNum, secondNum, thirdNum] = fiveNumbers;

const { name, location, nationality } = personalInfo;

// Step 4

const {
  contactInfo: { email, phone },
} = personalInfo;

const [num1, num2, ...restOfNumbers] = fiveNumbers;

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };

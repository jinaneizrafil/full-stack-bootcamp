//challenge 5.1 step1
// JavaScript File: challenge.js

// Step 1
const button = document.getElementById("myButton");
button.style.cssText = `
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    cursor: pointer;
`;

button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.textContent = `Clicked ${randomNumber}!`;
});

// Step 2: Event listeners for H1
const h1 = document.getElementById("myHeading");
h1.style.border = "10px dotted green";

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "A":
      h1.style.backgroundColor = "red";
      break;
    case "S":
      h1.style.marginLeft = (parseInt(h1.style.marginLeft) || 0) + 10 + "px";
      break;
    case "D":
      const paragraph = document.createElement("p");
      paragraph.textContent = "Key D was pressed!";
      document.body.appendChild(paragraph);
      break;
    case "W":
      h1.style.display = h1.style.display === "none" ? "block" : "none";
      break;
    case " ":
      h1.style.fontSize = (parseInt(h1.style.fontSize) || 16) + 2 + "px";
      break;
  }
});

// Step 3: Form validation

const form = document.createElement("form");

const fullNameInput = document.createElement("input");
fullNameInput.type = "text";
fullNameInput.placeholder = "Full Name";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email Address";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";

const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.type = "password";
confirmPasswordInput.placeholder = "Confirm Password";

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";

form.appendChild(fullNameInput);
form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(confirmPasswordInput);
form.appendChild(submitButton);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(emailInput.value);

  if (!isValidEmail) {
    alert("Please enter a valid email address.");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
  } else {
    alert("Form submitted successfully!");
  }
});

const inputFields = [
  fullNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
];

inputFields.forEach((inputField) => {
  inputField.addEventListener("focus", () => {
    inputField.style.backgroundColor = "lightyellow";
  });

  inputField.addEventListener("blur", () => {
    inputField.style.backgroundColor = "";
  });
});

document.body.appendChild(form);

//step1
// DOM Tree Navigation
const menuDiv = document.querySelector(".menu");
const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

console.log(menuDiv);
console.log(headerElement);
console.log(footerElement);

// DOM Element Creation
const containerDiv = document.createElement("div");
containerDiv.className = "container";
const paragraph = document.createElement("p");
paragraph.textContent = "Hello, World!";
containerDiv.appendChild(paragraph);

// Element Styling
containerDiv.style.backgroundColor = "blue";
paragraph.style.color = "white";
paragraph.style.fontSize = "24px";
paragraph.style.fontFamily = "Helvetica";
paragraph.style.border = "1px solid black";

document.body.appendChild(containerDiv);

//step2
// Multiple Event Listeners
const colorChangeButton = document.createElement("button");
colorChangeButton.textContent = "Hover Me";
colorChangeButton.addEventListener("mouseover", () => {
  colorChangeButton.style.backgroundColor = "red";
});
colorChangeButton.addEventListener("mouseout", () => {
  colorChangeButton.style.backgroundColor = "blue";
});

// Event Delegation
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Clicked Button Text:", event.target.textContent);
  }
});

// Form Data Extraction
const form = document.createElement("form");
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Name:", nameInput.value);
  console.log("Email:", emailInput.value);
});

document.body.appendChild(form);

//step3
// DOM Cloning
const originalDiv = document.getElementById("original");
const cloneButton = document.getElementById("clone-btn");
const clonedDiv = originalDiv.cloneNode(true);
clonedDiv.querySelector("p").textContent = "Cloned";
cloneButton.addEventListener("click", () => {
  if (clonedDiv.style.display === "none" || clonedDiv.style.display === "") {
    clonedDiv.style.display = "block";
  } else {
    clonedDiv.style.display = "none";
  }
});
document.body.appendChild(clonedDiv);

// Element Removal
const removeHeaderButton = document.createElement("button");
removeHeaderButton.addEventListener("click", () => {
  const headerToRemove = document.querySelector("header");
  if (headerToRemove) {
    headerToRemove.remove();
  }
});
document.body.appendChild(removeHeaderButton);

// Inserting Elements before the footer
function insertElementBeforeFooter(elementToInsert) {
  const footer = document.querySelector("footer");
  footer.parentNode.insertBefore(elementToInsert, footer);
}

const newElement = document.createElement("div");
newElement.textContent = "Inserted before Footer";
insertElementBeforeFooter(newElement);

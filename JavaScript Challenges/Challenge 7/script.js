// Step 1: Create the Sign-Up Form

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.querySelector('input[type="password"]');
  const confirmPasswordInput = document.querySelector(
    'input[type="cPassword"]'
  );
  const submitButton = document.getElementById("submit-btn");
  const errorDiv = document.createElement("div");

  // Function to check if passwords match
  function checkPasswords() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      errorDiv.textContent = "Passwords do not match.";
      errorDiv.classList.add("error-message");
      confirmPasswordInput.parentElement.appendChild(errorDiv);
    } else {
      // Redirect to quote.html if passwords match
      window.location.href = "quote.html";
    }
  }

  // Event listener for submit button click
  submitButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    // Remove any previous error message
    const previousError =
      confirmPasswordInput.parentElement.querySelector(".error-message");
    if (previousError) {
      previousError.remove();
    }
    checkPasswords();
  });
});

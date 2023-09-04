//step1
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

// Usage example:
delay(2000) // Delays for 2 seconds
  .then(() => {
    console.log("Delayed for 2 seconds");
  });

//step2
fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Random Fact:", data.text);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//step3
async function fetchRandomFact() {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Random Fact:", data.text);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchRandomFact();

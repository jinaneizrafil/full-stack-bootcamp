//step1
setTimeout(() => {
  console.log("Hello after 5 seconds!");
}, 5000);

function updateDigitalClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateDigitalClock, 1000);

const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

delayedPromise.then((message) => {
  console.log(message);
});

const initialPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

initialPromise
  .then((message) => {
    alert(message);
    return "Chained message!";
  })
  .then((chainedMessage) => {
    console.log(chainedMessage);
  });

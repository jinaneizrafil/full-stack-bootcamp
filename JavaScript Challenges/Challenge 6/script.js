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

//step2
function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network Error!");
      }
    }, 3000);
  });
}

simulateNetworkRequest()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

async function fetchPostData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchPostData();

//step3
async function fetchMultiplePosts() {
  const postIds = [1, 2, 3];
  const promises = postIds.map((postId) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(`Error fetching post ${postId}`);
        }
        return response.json();
      }
    )
  );

  try {
    const posts = await Promise.all(promises);
    console.log("Fetched Posts:", posts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchMultiplePosts();

async function fetchPostsSequentially() {
  const postIds = [4, 5, 6, 7, 8];
  const promises = postIds.map((postId) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(`Error fetching post ${postId}`);
        }
        return response.json();
      }
    )
  );

  for await (const post of promises) {
    console.log("Fetched Post:", post);
  }
}

fetchPostsSequentially();

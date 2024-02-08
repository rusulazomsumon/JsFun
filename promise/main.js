const messageElement = document.getElementById('message');

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success! Got some data.");
      } else {
        reject("Oops! Something went wrong.");
      }
    }, 2000); // Simulate a delay
  });
}

const button = document.getElementById('clickMe');
button.addEventListener('click', () => {
  fetchData()
    .then((data) => {
      messageElement.textContent = data;
    })
    .catch((error) => {
      messageElement.textContent = error;
    });
});

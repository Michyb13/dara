document.getElementById("startButton").addEventListener("click", function () {
  let letters = document.querySelectorAll(".letter");
  let index = 0;
  let loopCount = 0;

  function displayLetter() {
    if (index < letters.length) {
      letters[index].style.opacity = 1;
      setTimeout(() => {
        letters[index].style.opacity = 0;
        index++;
        displayLetter();
      }, 500); // Duration for letter to be visible
    } else if (loopCount < 1) {
      // Reset and loop once more
      loopCount++;
      index = 0;
      setTimeout(() => {
        displayLetter();
      }, 1000); // Wait 1 second before restarting
    } else {
      setTimeout(() => {
        window.location.href = "flower.html";
      }, 300);
    }
  }

  // Ensure all letters are hidden before starting the animation
  letters.forEach((letter) => (letter.style.opacity = 0));
  displayLetter();
});

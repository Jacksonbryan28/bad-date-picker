const locks = document.querySelectorAll(".lock-icon");
let isPressed = false;
let isHovered = false;
locks.forEach((lock) => {
  lock.addEventListener("click", () => {
    if (isPressed === false) {
      lock.style.backgroundImage = "url(images/lock-icon-selected.svg)";
      isPressed = true;
    } else if (isPressed === true) {
      lock.style.backgroundImage = "url(images/lock-icon.svg)";
      isPressed = false;
    }
    console.log("lock clicked");
  });
});

// const rollBtn = document.querySelector("button");

// let randomNum = 0;

// rollBtn.addEventListener("click", () => {
//   randomNum = Math.random();
//   console.log(randomNum);
//   return;
// });

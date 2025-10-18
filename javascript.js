const locks = document.querySelectorAll(".lock-icon");

// let isHovered = false;
locks.forEach((lock) => {
  let isPressed = false;
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
  lock.addEventListener("mouseenter", () => {
    // if (isPressed === false) {
    //   lock.style.backgroundImage = "url(images/lock-icon-hover.svg)";
    // }
    lock.style.backgroundImage = "url(images/lock-icon-hover.svg)";
  });
  lock.addEventListener("mouseleave", () => {
    if (isPressed === false) {
      lock.style.backgroundImage = "url(images/lock-icon.svg)";
    } else if (isPressed === true) {
      lock.style.backgroundImage = "url(images/lock-icon-selected.svg)";
    }
  });
});

// const rollBtn = document.querySelector("button");

// let randomNum = 0;

// rollBtn.addEventListener("click", () => {
//   randomNum = Math.random();
//   console.log(randomNum);
//   return;
// });

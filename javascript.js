const locks = document.querySelectorAll(".lock-icon");
const rollBtn = document.querySelector("button");
const num1 = document.querySelector("#num1");
const nums = document.querySelectorAll(".nums");

let randomNum = 0;

const allData = {
  allLocks: locks,
  allDisplayNums: nums,
  allRandomNums: 0,
};

locks.forEach((lock) => {
  let isPressed = false;
  mouseInteractions(lock, isPressed);
});

rollBtn.addEventListener("click", () => {
  allData.allDisplayNums.forEach((num) => {
    num.textContent = Math.floor(Math.random() * 10);
    console.log(num + " num = " + num.textContent);
  });
});

function mouseInteractions(lock, isPressed) {
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
    lock.style.backgroundImage = "url(images/lock-icon-hover.svg)";
  });
  lock.addEventListener("mouseleave", () => {
    if (isPressed === false) {
      lock.style.backgroundImage = "url(images/lock-icon.svg)";
    } else if (isPressed === true) {
      lock.style.backgroundImage = "url(images/lock-icon-selected.svg)";
    }
  });
}

//Single # random number
// rollBtn.addEventListener("click", () => {
//   randomNum = Math.floor(Math.random() * 10);
//   console.log(randomNum);
//   num1.textContent = randomNum;
//   return;
// });

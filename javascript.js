const locks = document.querySelectorAll(".lock-icon");
const rollBtn = document.querySelector("button");
const nums = document.querySelectorAll(".nums");
let locksStatusAry = [false, false, false, false, false, false, false, false];

let randomNum = 0;

const allData = {
  allLocks: locks,
  allDisplayNums: nums,
  allRandomNums: 0,
};

locks.forEach((lock, index) => {
  let isPressed = false;
  mouseInteractions(lock, isPressed, index);
});

rollBtn.addEventListener("click", () => {
  allData.allDisplayNums.forEach((num, index) => {
    //if index of num and  lockstatusarray = false, roll
    //else if lockstatusarray is true = no roll
    if (locksStatusAry[index] === false) {
      num.textContent = Math.floor(Math.random() * 10);
      console.log(num + " num = " + num.textContent);
    }
  });
});

function mouseInteractions(lock, isPressed, index) {
  lock.addEventListener("click", () => {
    if (isPressed === false) {
      lock.style.backgroundImage = "url(images/lock-icon-selected.svg)";
      isPressed = true;
      locksStatusAry[index] = true;
      console.log(
        "lockStatusAry index " + index + " =  " + locksStatusAry[index]
      );
    } else if (isPressed === true) {
      lock.style.backgroundImage = "url(images/lock-icon.svg)";
      isPressed = false;
      locksStatusAry[index] = false;
      console.log(
        "lockStatusAry index " + index + " =  " + locksStatusAry[index]
      );
    }
    console.log("lock clicked");
    console.log("Lock index = " + index);
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

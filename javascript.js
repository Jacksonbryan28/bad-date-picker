const locks = document.querySelectorAll(".lock-icon");
const rollBtn = document.querySelector("#rollbtn");
const nums = document.querySelectorAll(".nums");
const submitBtn = document.querySelector("#submit");
let locksStatusAry = [false, false, false, false, false, false, false, false];
const KEY = ["9", "C", "F", "J", "K", "Q", "V", "W", "X", "8"];

let randomNum = 0;

locks.forEach((lock, index) => {
  let isPressed = false;
  mouseInteractions(lock, isPressed, index);
});

rollBtn.addEventListener("click", () => {
  nums.forEach((num, index) => {
    //if index of num and  lockstatusarray = false, roll
    if (locksStatusAry[index] === false) {
      randomNum = Math.floor(Math.random() * 10);
      num.textContent = KEY[randomNum];

      // num.textContent = Math.floor(Math.random() * 10);
      // console.log(index + " RandomNum = " + randomNum);
      // console.log(index + " num = " + num.textContent);
    }
  });
});

submitBtn.addEventListener("click", () => {
  //alert saying the date - first have to translate using the key
  // console.log("Submit button pressed");
  alert(
    "Your Birthday is: " +
      KEY.indexOf(nums[0].textContent) +
      KEY.indexOf(nums[1].textContent) +
      "/" +
      KEY.indexOf(nums[2].textContent) +
      KEY.indexOf(nums[3].textContent) +
      "/" +
      KEY.indexOf(nums[4].textContent) +
      KEY.indexOf(nums[5].textContent) +
      KEY.indexOf(nums[6].textContent) +
      KEY.indexOf(nums[7].textContent)
  );
});

function mouseInteractions(lock, isPressed, index) {
  lock.addEventListener("click", () => {
    if (isPressed === false) {
      lock.style.backgroundImage = "url(images/lock-icon-selected.svg)";
      isPressed = true;
      locksStatusAry[index] = true;
      // console.log(
      //   "lockStatusAry index " + index + " =  " + locksStatusAry[index]
      // );
    } else if (isPressed === true) {
      lock.style.backgroundImage = "url(images/lock-icon.svg)";
      isPressed = false;
      locksStatusAry[index] = false;
      // console.log(
      //   "lockStatusAry index " + index + " =  " + locksStatusAry[index]
      // );
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

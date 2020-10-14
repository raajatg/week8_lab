// Example 1: Click the button will change
//            the inner HTML content of a paragraph element
let btnEx1 = document.getElementById("btn-ex1");
btnEx1.onclick = function (e) {
  e.preventDefault();
  console.log(e);
  let paragraphText = document.getElementById("p-ex1");
  paragraphText.innerHTML = "Javascript is fun!";
};

// Example 2: Click the button and the bulb will be turned on
let btnTurnOn = document.getElementById("btn-turn-on");
btnTurnOn.onclick = function (e) {
  e.preventDefault();
  let imageBulb = document.getElementById("img-bulb");
  imageBulb.setAttribute("src", "images/pic_bulbon.gif");
};

let btnTurnOff = document.getElementById("btn-turn-off");
btnTurnOff.onclick = function (e) {
  e.preventDefault();
  let imageBulb = document.getElementById("img-bulb");
  imageBulb.setAttribute("src", "images/pic_bulboff.gif");
};

// Example 3: Click the button and the styling of the paragraph will change
let btnEx3 = document.getElementById("btn-ex3");
btnEx3.onclick = function (e) {
  e.preventDefault();
  let pEx3 = document.getElementById("p-ex3");
  pEx3.style.fontSize = "35px";
};

// Example 4: Clicking the button will hide the corresponding paragraph element
let btnHide = document.getElementById("btn-hide");
let btnShow = document.getElementById("btn-show");
btnHide.onclick = function (e) {
  e.preventDefault();
  let pEx4 = document.getElementById("p-ex4");
  pEx4.style.display = "none";
};

btnShow.onclick = function (e) {
  e.preventDefault();
  let pEx4 = document.getElementById("p-ex4");
  pEx4.style.display = "block";
};

// Return to the following example after explaining for-loops in the lecture slides
let btnQueryDom = document.getElementById("btn-query-dom");
btnQueryDom.onclick = function (e) {
  e.preventDefault();
  const items = document.querySelectorAll("div");
  items.forEach((item, i) => {
    console.log("my item", item, i);
    item.style.fontSize = (i + 10) ** 2 + "px";
    item.style.background = "blue";
  });
};

let cssGrad = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let right = document.querySelector("#direct1");
let left = document.querySelector("#direct2");
let up = document.querySelector("#direct3");
let down = document.querySelector("#direct4");
let upLeft = document.querySelector("#direct5");
let upRight = document.querySelector("#direct6");
let downRight = document.querySelector("#direct7");
let downLeft = document.querySelector("#direct8");
let color2 = document.querySelector("#color2");
let body = document.querySelector(".gradient");
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientRight() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientLeft() {
    body.style.background = "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientUp() {
    body.style.background = "linear-gradient(0deg, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientDown() {
    body.style.background = "linear-gradient(180deg, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientUpLeft() {
    body.style.background = "linear-gradient(270deg, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientUpRight() {
    body.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientDownRight() {
    body.style.background = "linear-gradient(135deg, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
function setGradientDownLeft() {
    body.style.background = "linear-gradient(225deg, " + color1.value + ", " + color2.value + ")";
    cssGrad.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
right.addEventListener("input", setGradientRight);
left.addEventListener("input", setGradientLeft);
up.addEventListener("input", setGradientUp);
down.addEventListener("input", setGradientDown);
upLeft.addEventListener("input", setGradientUpLeft);
upRight.addEventListener("input", setGradientUpRight);
downRight.addEventListener("input", setGradientDownRight);
downLeft.addEventListener("input", setGradientDownLeft);


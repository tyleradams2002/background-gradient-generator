let cssGrad = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let right = document.querySelector("#direct1");
let left = document.querySelector("#direct2");
let up = document.querySelector("#direct3");
let down = document.querySelector("#direct4");
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
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
right.addEventListener("input", setGradientRight);
left.addEventListener("input", setGradientLeft);
up.addEventListener("input", setGradientUp);
down.addEventListener("input", setGradientDown);


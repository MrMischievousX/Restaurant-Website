const starter = document.getElementById("starter");
const maindish = document.getElementById("maindish");
const desert = document.getElementById("desert");
const drinks = document.getElementById("drinks");
const container = document.querySelectorAll(".menu-container2");
const menu = document.querySelectorAll(".menuName");
const card = document.querySelectorAll(".cards");
const ham = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

ham.addEventListener("click", function () {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
window.onbeforeunload = function (event) {
  event.location.reload(true);
};
window.addEventListener("resize", function () {
  window.location.href = "index.html";
});

console.log(card);
starter.addEventListener("click", function () {
  console.log("starter");
  container[0].classList.add("active");
  container[0].classList.remove("noactive");
  container[1].classList.add("noactive");
  container[1].classList.remove("active");
  container[2].classList.add("noactive");
  container[2].classList.remove("active");
  container[3].classList.add("noactive");
  container[3].classList.remove("active");
});
maindish.addEventListener("click", function () {
  console.log("starter");
  container[1].classList.add("active");
  container[1].classList.remove("noactive");
  container[0].classList.add("noactive");
  container[0].classList.remove("active");
  container[2].classList.add("noactive");
  container[2].classList.remove("active");
  container[3].classList.add("noactive");
  container[3].classList.remove("active");
});
desert.addEventListener("click", function () {
  console.log("starter");
  container[2].classList.add("active");
  container[2].classList.remove("noactive");
  container[1].classList.add("noactive");
  container[1].classList.remove("active");
  container[0].classList.add("noactive");
  container[0].classList.remove("active");
  container[3].classList.add("noactive");
  container[3].classList.remove("active");
});
drinks.addEventListener("click", function () {
  console.log("starter");
  container[3].classList.add("active");
  container[3].classList.remove("noactive");
  container[1].classList.add("noactive");
  container[1].classList.remove("active");
  container[2].classList.add("noactive");
  container[2].classList.remove("active");
  container[0].classList.add("noactive");
  container[0].classList.remove("active");
});

let i = 0;
let time = Date.now();
function animate() {
  let timenow = Date.now();
  if (timenow - time > 1500) {
    container[i % 4].classList.add("active");
    container[i % 4].classList.remove("noactive");
    menu[i % 4].style.borderBottom = "5px solid #e75b1e";
    container[(i + 1) % 4].classList.add("noactive");
    container[(i + 1) % 4].classList.remove("active");
    menu[(i + 1) % 4].style.borderBottom = "5px solid #f5f5f5";
    container[(i + 2) % 4].classList.add("noactive");
    container[(i + 2) % 4].classList.remove("active");
    menu[(i + 2) % 4].style.borderBottom = "5px solid #f5f5f5";
    container[(i + 3) % 4].classList.add("noactive");
    container[(i + 3) % 4].classList.remove("active");
    menu[(i + 3) % 4].style.borderBottom = "5px solid #f5f5f5";
    i++;
    time = Date.now();
  }

  requestAnimationFrame(animate);
}
let i2 = 0;
let time2 = Date.now();
function animate2() {
  let timenow2 = Date.now();
  if (timenow2 - time2 > 500) {
    card[i2 % 3].classList.toggle("visibility");
    i2++;
    time2 = Date.now();
  }

  requestAnimationFrame(animate2);
}

animate();
animate2();

let menuToggle = false;
const getNavigation = document.querySelector("nav ul");
const getHead = document.querySelector("header");
const getTapHere = document.querySelector("#tapHere");
const getCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("nav ul li a");
const getFooter = document.querySelector("footer");
const getBody = document.querySelector("body");

const toggleHeader = function () {
  if (menuToggle === false) {
    getNavigation.classList.add("showUl");
    getTapHere.style.display = "none";
    getHead.classList.add("sir");

    menuToggle = true;
  } else if (menuToggle === true) {
    getNavigation.classList.remove("showUl");
    getHead.classList.remove("sir");

    menuToggle = false;
  }
};

window.addEventListener("mousemove", cursor);

function cursor(e) {
  getCursor.style.top = e.pageY + "px";
  getCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    getCursor.classList.add("curzOnLink");
  });
  link.addEventListener("mouseleave", () => {
    getCursor.classList.remove("curzOnLink");
  });
});

(function () {
  getHead.addEventListener("mouseover", () => {
    getCursor.classList.add("curzOnHeader");
  });
  getHead.addEventListener("mouseleave", () => {
    getCursor.classList.remove("curzOnHeader");
  });
})();

(function () {
  getFooter.addEventListener("mouseover", () => {
    getCursor.classList.add("curzOnFoot");
    getBody.classList.add("removeCurz");
  });
  getFooter.addEventListener("mouseleave", () => {
    getCursor.classList.remove("curzOnFoot");
    getBody.classList.remove("removeCurz");
  });
})();

//Rellax
var rellax = new Rellax(".parallax");

let menuToggle = false;
const getHead = document.querySelector("header");
const getCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("nav ul li a");
const getFooter = document.querySelector("footer");
const getBody = document.querySelector("body");
const originalText = document.querySelector(".stroke-headings h2");
const getOutline = document.querySelector(".stroke-headings h3");

const toggleHeader = function () {
  const getTapHere = document.querySelector("#tapHere");
  const getNavigation = document.querySelector("nav ul");

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

//Outline
getOutline.addEventListener("mousemove", match);

originalText.addEventListener("mousemove", match);

function match(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  getOutline.style.clipPath =
    "circle(6vw at " + x + "px" + " " + y + "px" + ")";
}

getOutline.addEventListener("mouseover", () => {
  getCursor.classList.add("curz-on-out");
  getOutline.style.opacity = "1";
});

getOutline.addEventListener("mouseleave", () => {
  getCursor.classList.remove("curz-on-out");
  getOutline.style.opacity = "0";
});

//Rellax
var rellax = new Rellax(".parallax");

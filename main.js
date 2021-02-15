gsap.registerPlugin(ScrollTrigger);

let menuToggle = false;
const getHead = document.querySelector("header");
const getCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("nav ul li a");
const getFooter = document.querySelector("footer");
const getBody = document.querySelector("body");
const originalText = document.querySelector(".stroke-headings h2");
const getOutline = document.querySelector(".stroke-headings h3");
const slideOriginalText = document.querySelector(".chay-main");
const slideOutline = document.querySelector(".chay-me");

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
    getCursor.style.borderColor = "#269e97";
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

//Outline-About
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

//Outline-Slide
slideOutline.addEventListener("mousemove", imp);

slideOriginalText.addEventListener("mousemove", imp);

function imp(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  slideOutline.style.clipPath =
    "circle(6vw at " + x + "px" + " " + y + "px" + ")";
}

slideOutline.addEventListener("mouseover", () => {
  getCursor.classList.add("curz-on-out");
  slideOutline.style.opacity = "1";
});

slideOutline.addEventListener("mouseleave", () => {
  getCursor.classList.remove("curz-on-out");
  slideOutline.style.opacity = "0";
});

//Rellax
var rellax = new Rellax(".parallax");

// Slides
gsap.to(".ek h2", {
  scrollTrigger: {
    trigger: ".ek",
    scrub: true,
  },
  x: "-270vh",
});

gsap.fromTo(
  ".scroll-wrapper",
  {
    background: "var(--paletteLight)",
  },
  {
    scrollTrigger: {
      trigger: ".saath",
      scrub: true,
    },
    background: "var(--paletteDark)",
  }
);

gsap.fromTo(
  ".scroll-wrapper",
  {
    background: "var(--paletteDark)",
  },
  {
    scrollTrigger: {
      trigger: ".chay",
      scrub: true,
    },
    background: "var(--paletteLight)",
  }
);

gsap.fromTo(
  ".cursor",
  {
    borderColor: "var(--paletteDark)",
  },
  {
    scrollTrigger: {
      trigger: ".saath",
      scrub: true,
    },
    borderColor: "var(--paletteLight)",
  }
);

gsap.fromTo(
  ".cursor",
  {
    borderColor: "var(--paletteLight)",
  },
  {
    scrollTrigger: {
      trigger: ".chay",
      scrub: true,
    },
    borderColor: "var(--paletteDark)",
  }
);

gsap.fromTo(
  ".scroll-wrapper",
  {
    background: "var(--brandColor)",
  },
  {
    scrollTrigger: {
      trigger: ".do",
      scrub: true,
    },
    background: "var(--paletteDark)",
  }
);

gsap.fromTo(
  ".do-me .write",
  {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  {
    scrollTrigger: {
      trigger: ".do-me",
      scrub: true,
      start: "-350% center",
      end: "1000% center",
    },
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }
);

gsap.to(".chay h2", {
  scrollTrigger: {
    trigger: ".chay",
    scrub: true,
  },
  letterSpacing: "4vw",
});

gsap.fromTo(
  ".teen-me .manip",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  {
    scrollTrigger: {
      trigger: ".teen-me",
      scrub: true,
      start: "-350% center",
      end: "1000% center",
    },
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }
);

gsap.fromTo(
  ".chaar-me .edit",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  {
    scrollTrigger: {
      trigger: ".chaar-me",
      scrub: true,
      start: "-350% center",
      end: "1000% center",
    },
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }
);

gsap.fromTo(
  ".paach .every",
  {
    color: gsap.getProperty("html", "--paletteLight"),
  },
  {
    scrollTrigger: {
      trigger: ".paach h3",
      scrub: true,
      start: "-150% center",
      end: "200% center",
    },
    color: gsap.getProperty("html", "--brandColor"),
  }
);

gsap.fromTo(
  ".saath .perfection",
  {
    color: gsap.getProperty("html", "--paletteLight"),
  },
  {
    scrollTrigger: {
      trigger: ".saath",
      scrub: true,
      start: "top center",
      end: "bottom center",
    },
    color: gsap.getProperty("html", "--brandColor"),
  }
);

gsap.fromTo(
  ".aath h3",
  {
    letterSpacing: "4vw",
  },
  {
    scrollTrigger: {
      trigger: ".aath",
      scrub: true,
    },
    letterSpacing: "0",
  }
);

ScrollLottie({
  target: "#scroll-intro",
  path: "res/script/data.json",
  duration: 4,
  speed: "slow",
});

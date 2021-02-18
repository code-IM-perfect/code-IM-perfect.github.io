gsap.registerPlugin(ScrollTrigger);

gsap.set(".cursor", { borderColor: "--paletteLight" });

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
const slideHeadings = document.querySelectorAll(".scroll-wrapper h3");

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

slideHeadings.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    getCursor.classList.add("curzOnHeading");
  });
  heading.addEventListener("mouseleave", () => {
    getCursor.classList.remove("curzOnHeading");
  });
});

(function () {
  getHead.addEventListener("mouseover", () => {
    getCursor.classList.add("curzOnHeader");
    getCursor.style.borderColor = "#269e97";
  });
  getHead.addEventListener("mouseleave", () => {
    getCursor.classList.remove("curzOnHeader");
    getCursor.style.borderColor = "var(--paletteLight)";
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
gsap.to(".ek .main-waale", {
  scrollTrigger: {
    trigger: ".ek",
    scrub: true,
  },
  x: "-270vh",
});

gsap.set(".ek .doosre-waale", { y: "15vh" });

gsap.set(".ek .baad-waale", { y: "-15vh" });

gsap.from(".ek .doosre-waale, .ek .baad-waale", {
  scrollTrigger: {
    trigger: ".ek",
    scrub: true,
  },
  x: "-290vh",
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
      scrub: 0.5,
      start: "-350% center",
      end: "1000% center",
    },
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }
);

gsap.to(".chay h2", {
  scrollTrigger: {
    trigger: ".chay",
    scrub: 0.5,
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
      scrub: 0.5,
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
      scrub: 0.5,
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
      scrub: 0.5,
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
      scrub: 0.5,
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
      scrub: 0.5,
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

//Tiles Inertia
gsap.set(".card", {
  transformOrigin: "center",
  force3D: true,
});

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".card", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / 300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

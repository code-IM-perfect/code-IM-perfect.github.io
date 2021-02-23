gsap.registerPlugin(ScrollTrigger);

let menuToggle = false;
const getHead = document.querySelector("header");
let navLinks = document.querySelectorAll("nav ul li a");

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
  path: "/res/script/data.json",
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

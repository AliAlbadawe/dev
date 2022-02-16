//Nav Menu Hide and Display
let menuBtn = document.querySelector(".material-icons-outlined.menu-icon");
let menu = document.querySelector(".main-nav ul");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//Section ViewCheck To make Effects

let home = document.querySelector(".main-container");
let skills = document.querySelector(".skills");
let resume = document.querySelector(".resume");
let contact = document.querySelector(".contact-container");
let projects = document.querySelector(".projects-container");
let gridImage = document.querySelector(".grid-image");
let sections = [skills, resume, projects, contact, gridImage];

home.setAttribute("data-callback", "activeHome");
skills.setAttribute("data-callback", "activeSkills");
resume.setAttribute("data-callback", "activeResume");
projects.setAttribute("data-callback", "activeProjects");
contact.setAttribute("data-callback", "activeContact");
gridImage.setAttribute("data-callback", "toTop");
let observeOptions = {
  // rootMargin: "-100px 0px 0px 0px",
  threshold: 0.45,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      window[entry.target.dataset.callback]();
      observer.unobserve(entry.target);
    }
  });
}, observeOptions);

//Observing
sections.forEach(function (section) {
  observer.observe(section);
});

observer.observe(gridImage);

function activeHome(e) {}

function activeSkills(target) {}

function activeResume(target) {}

function activeProjects(e) {}

function activeContact(e) {}

toTop = (e) => {
  toTopBtn.classList.add("active");
};

//To Top Btn
let toTopBtn = document.querySelector(".fa-solid.fa-angles-up");

toTopBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//---------Theme Change-------

let switches = document.getElementsByClassName("switch");

for (let i of switches) {
  i.addEventListener("click", function () {
    let theme = this.dataset.theme;
    setTheme(theme);
    localStorage.setItem("style", theme);
  });
}

function setTheme(theme) {
  switch (theme) {
    case "light":
      document.getElementById("switcher-id").href = "./themes/light.css";
      break;
    case "blue":
      document.getElementById("switcher-id").href = "./themes/blue.css";
      break;
    case "dark":
      document.getElementById("switcher-id").href = "./themes/dark.css";
      break;
  }
}

let style = localStorage.getItem("style");

if (style == null) {
  setTheme("blue");
} else {
  setTheme(style);
}

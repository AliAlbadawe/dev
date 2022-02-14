//Nav Menu Hide and Display
let menuBtn = document.querySelector(".material-icons-outlined.menu-icon");
let menu = document.querySelector(".main-nav ul");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// To Top Button
// let toTopBtn = document.querySelector(".fa-solid.fa-angles-up");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 350) {
//     toTopBtn.classList.add("active");
//   } else {
//     toTopBtn.classList.remove("active");
//   }
// });
// toTopBtn.addEventListener("click", () => {
//   scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
//Section ViewCheck To Highlight navBar item
let home = document.querySelector(".main-container");
let skills = document.querySelector(".skills");
let resume = document.querySelector(".resume");
let contact = document.querySelector(".contact-container");
let projects = document.querySelector(".projects-container");
let menu1 = Array.from(menu.children);

home.setAttribute("data-callback", "activeHome");
skills.setAttribute("data-callback", "activeSkills");
resume.setAttribute("data-callback", "activeResume");
projects.setAttribute("data-callback", "activeProjects");
contact.setAttribute("data-callback", "activeContact");

let observeOptions = {
  rootMargin: "50px",
  threshold: 0.75,
};
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    window[entries[0].target.dataset.callback]();
  } else {
    menu1.forEach((e) => {
      e.classList.remove("active");
    });
  }
}, observeOptions);

// observer.observe(resume);
observer.observe(skills);
observer.observe(resume);
observer.observe(home);
observer.observe(projects);
observer.observe(contact);

function activeHome(e) {
  menu1[0].classList.add("active");
}

function activeSkills(target) {
  menu1[1].classList.add("active");
}

function activeResume(target) {
  menu1[2].classList.add("active");
}

function activeProjects(e) {
  menu1[3].classList.add("active");
}

function activeContact(e) {
  menu1[4].classList.add("active");
}

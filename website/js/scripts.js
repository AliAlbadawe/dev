let menuBtn = document.querySelector(".material-icons-outlined.menu-icon");
let menu = document.querySelector(".main-nav ul");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

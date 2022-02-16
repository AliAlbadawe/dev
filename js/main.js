//Nav Menu Hide and Display
let menuBtn = document.querySelector(".material-icons-outlined.menu-icon");
let menu = document.querySelector(".main-nav ul");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

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

let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, options);

let sections = document.querySelectorAll(".pictures-container div");

sections.forEach(function (ele) {
  observer.observe(ele);
});

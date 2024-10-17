// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const hamburger = document.querySelector(".hamburger-icon");
//   const close = document.querySelector(".close-icon");
//   menu.classList.toggle("open");
//   if (menu.classList.contains("open")) {
//     hamburger.style.display = "none";
//     close.style.display = "inline";
//   } else {
//     hamburger.style.display = "inline";
//     close.style.display = "none";
//   }
// }
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const burger = document.querySelector(".burger-4");

  menu.classList.toggle("open");
  burger.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const projectOverlay = document.querySelector(".project-overlay");

  if (projectOverlay) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectOverlay.classList.add("animate");
          } else {
            projectOverlay.classList.remove("animate");
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    observer.observe(projectOverlay);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.querySelector(".animated-text");

  if (animatedText) {
    const spans = animatedText.querySelectorAll("span");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            spans.forEach((span, index) => {
              span.style.opacity = 0;
              setTimeout(() => {
                span.style.opacity = 1;
              }, index * 500);
            });
          } else {
            spans.forEach((span) => {
              span.style.opacity = 0;
            });
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    observer.observe(animatedText);
  }
});



const nav = document.querySelector("nav");
const header = document.querySelector("header");
const sentinel = document.querySelector("#sentinel");

const observer = new IntersectionObserver(([e]) => {
  nav.classList.toggle("is-stuck", e.intersectionRatio < 0.1);
  header.classList.toggle("is-stuck", e.intersectionRatio < 0.1)
});

observer.observe(sentinel);



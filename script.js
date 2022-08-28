const nav = document.querySelector(".nav");
const body = document.querySelector(".body");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
  }
  else {
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});

function toggleMenu() {
  if (document.getElementById("menu").style.width === "0%")
  {
    document.getElementById("menu").style.width = "100%";
    body.classList.add("fixed-position");
  }
  else
  {
    document.getElementById("menu").style.width = "0%";
    body.classList.remove("fixed-position");
  }
}

function changeImage(target) {
  target.src = target.src.replace("f.jpg", "b.jpg");
}

function revertImage(target)
{
  target.src = target.src.replace("b.jpg", "f.jpg");
}

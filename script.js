const nav = document.querySelector(".nav");
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
  }
  else
  {
    document.getElementById("menu").style.width = "0%";
  }
}

function changeImage(target) {
  target.src = target.src.replace("f.jpg", "b.jpg");
}

function revertImage(target)
{
  target.src = target.src.replace("b.jpg", "f.jpg");
}

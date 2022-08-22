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

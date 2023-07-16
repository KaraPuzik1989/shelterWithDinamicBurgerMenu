const mobMenu = document.querySelector(".mob-menu");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const navImg = document.querySelector(".to .qwe");
const img = document.querySelector(".mob-menu img");

mobMenu.addEventListener("click", () => {
  if (mobMenu.classList.contains("open")) {
    h1.style.display = "block";
    p.style.display = "block";
    img.style.display = "block";
    mobMenu.classList.remove("open");
    navImg.style.transform = "rotate(0deg)";
  } else {
    h1.style.display = "none";
    p.style.display = "none";
    img.style.display = "none";
    mobMenu.classList.add("open");
    navImg.style.transform = "rotate(90deg)";
  }
});

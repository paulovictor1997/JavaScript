const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", ()=> {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", ()=> {
  mobileMenu.classList.remove("flex");
});
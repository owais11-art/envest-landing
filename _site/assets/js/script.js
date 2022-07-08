const toggler = document.querySelector(".nav__container__toggler");

const cancel = document.querySelector(".side-nav__container__cancel");

const sideBar = document.querySelector(".side-nav");

const button = document.querySelectorAll("button");
console.log("button");

toggler.addEventListener("click", () => {
  sideBar.classList.add("active");
});

cancel.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});

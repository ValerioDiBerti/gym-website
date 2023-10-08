// ------------ Nav menu ------------ //
const navMenu = document.querySelector(".nav__menu");
const navOpen = document.querySelector(".nav__open");
const navClose = document.querySelector(".nav__close");
const navItems = document.querySelectorAll(".nav__item");
const navLink = document.querySelector(".nav__link");
navOpen.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
});
navLink.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// ------------ Calculate BMI ------------ //

const calculateForm = document.querySelector(".calculate__form");
const calculateHeight = document.querySelector("#calculate-cm");
const calculateWeight = document.querySelector("#calculate-kg");
const calculateResult = document.querySelector(".calculate__result");

function calculateBmi(e) {
  e.preventDefault();

  if (calculateHeight.value === "" || calculateWeight.value === "") {
    calculateResult.classList.remove("color-green");
    calculateResult.classList.add("color-red");
    calculateResult.textContent = "Fill in the height and weight";
  } else {
    const h = +calculateHeight.value / 100;
    const m = +calculateWeight.value;

    const bmi = Math.round(m / (h * h));

    if (bmi < 18.5) {
      calculateResult.classList.remove("color-green");
      calculateResult.classList.remove("color-red");
      calculateResult.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
    } else if (bmi < 25) {
      calculateResult.classList.remove("color-red");
      calculateResult.classList.add("color-green");
      calculateResult.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
    } else {
      calculateResult.classList.remove("color-green");
      calculateResult.classList.remove("color-red");
      calculateResult.textContent = `Your BMI is ${bmi} and you are overweight 😔`;
    }
  }

  calculateHeight.value = "";
  calculateWeight.value = "";

  setTimeout(() => {
    calculateResult.textContent = "";
  }, 4000);
}

calculateForm.addEventListener("submit", calculateBmi);

// ------------ Scroll Up ------------ //

window.addEventListener("scroll", () => {
  const scrollUp = document.querySelector(".scroll-up");
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
});

// ------------ Header Background ------------ //
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  this.scrollY >= 50 ? header.classList.add("header--show-background") : header.classList.remove("header--show-background");
});
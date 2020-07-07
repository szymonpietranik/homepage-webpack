import "../scss/main.scss";

alert("hello");
const name = "Szymon";
const age = 24;
console.log(name);
console.log(age);
console.log(`Siema, nazywam się ${name} i mam ${age} lata `);

const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = `Witaj Drogi Odwiedzający`;

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

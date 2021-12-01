//Selecteurs
//document.querySelector("H4").style.background = "yellow";
//const monSelection = document.querySelector("H4");
//console.log(monSelection);
//questionContainer.addEventListener('evenement', function);

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const bonne = document.querySelector("p");

//-----------------------------------Click Event

questionContainer.addEventListener("click", () => {
  //questionContainer.style.background = "green";
  /* s'il ya plusieur style on va injecter une classe
  questionContainer.classList.add("mon-click");
  en enleve la classe
  questionContainer.classList.remove("mon-click")*/
  questionContainer.classList.toggle("mon-click");
});

btn1.addEventListener("click", () => {
  bonne.classList.add("show-bonne");
  bonne.style.visibility = "visible";
  bonne.style.background = "green";
});
btn2.addEventListener("click", () => {
  bonne.classList.add("show-bonne");
  bonne.style.visibility = "visible";
  bonne.style.background = "red";
});

//--------------------------------Mouse Events (mousemove, mousedown, mouseup, mouseenter, mouseout, .... )

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  console.log(e);
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

//---------------------------------KeyPress event -------------------------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
console.log(key);

//---------------------------------KeyPress event song-------------------------------
const ring = (mozika) => {
  const audio = new Audio();
  audio.src = mozika + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    keypressContainer.style.background = "pink";
    ring("Enter");
  } else if (e.key === "p") {
    keypressContainer.style.background = "white";
  } else {
    keypressContainer.style.background = "red";
    ring("Black");
  }
});

//----------------------------------------Scroll Event---------------

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------Formulaire js -------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document;
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  console.log(e);
});

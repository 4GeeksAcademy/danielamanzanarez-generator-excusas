/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
console.log("hola");
window.onload = function() {
  //write your code here // escribe tu codigo aqui
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let whoExAleatoria = Math.floor(Math.random() * who.length);
  let actionExAleatoria = Math.floor(Math.random() * action.length);
  let whatExAleatoria = Math.floor(Math.random() * what.length);
  let whenExAleatoria = Math.floor(Math.random() * when.length);
  document.querySelector("#excusas").innerHTML =
    who[whoExAleatoria] +
    action[actionExAleatoria] +
    what[whatExAleatoria] +
    when[whenExAleatoria];
};

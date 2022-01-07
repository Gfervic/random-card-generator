/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const suits = ["heart", "diamond", "club", "spade"];

const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let randSuits = Math.floor(Math.random() * 4);
let randCards = Math.floor(Math.random() * 13);

window.onload = function() {
  //write your code here
  let cardNumber = cards[randCards];
  let suit = suits[randSuits];
  let card = document.getElementById("card");
  card.innerHTML = cardNumber;
  card.classList.add(suit);
};

function myFunction() {
  let cardNumber = cards[randCards];
  let suit = suits[randSuits];
  let card = document.getElementById("card");
  card.innerHTML = cardNumber;
  card.classList.add(suit);
}

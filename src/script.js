const quotes = [
  "Система — это иллюзия. Код — реальность.",
  "Будущее принадлежит тем, кто понимает алгоритмы.",
  "Ты не пользователь. Ты узел сети.",
  "Хакер — это не преступник. Это исследователь.",
  "Данные — новая нефть, а ты — буровая.",
  "Виртуальность — это просто другой уровень контроля.",
  "Код не врёт. Люди — да.",
  "Ты либо пишешь систему, либо живешь внутри неё.",
  "Свобода начинается с root-доступа.",
  "Цифровая тень знает о тебе больше, чем ты сам."
];

const quoteEl = document.getElementById("quote");
const button = document.getElementById("new-quote");
const card = document.querySelector(".card");

button.addEventListener("click", () => {
  // смена цитаты
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];

  // эффект тряски
  card.classList.add("shake");

  setTimeout(() => {
    card.classList.remove("shake");
  }, 500);
});
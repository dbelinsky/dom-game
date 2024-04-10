import goblinWidjet from "./goblin.js";

document.addEventListener("DOMContentLoaded", () => {
  const widjet = new goblinWidjet(document.querySelector(".widjet-container"));
  let randomNumber = Math.floor(Math.random() * (widjet.childrens.length - 1));
  widjet.putGoblin(randomNumber);
  setInterval(() => {
    widjet.deleteGoblin();
    let anotherRandomNumber = Math.floor(
      Math.random() * widjet.childrens.length
    );
    while (anotherRandomNumber === randomNumber) {
      anotherRandomNumber = Math.floor(
        Math.random() * (widjet.childrens.length - 1)
      );
    }
    widjet.putGoblin(anotherRandomNumber);
    randomNumber = anotherRandomNumber;
  }, 2000);
});

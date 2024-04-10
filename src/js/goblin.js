import image from "@images/character.png";
export default class goblinWidjet {
  constructor(element) {
    this._element = element;
    this.goblinImage = document.createElement("img");
    this.goblinImage.style.width = "100%";
    this.goblinImage.src = image;
    this.goblinImage.classList.add("goblin");
    this.goblinImage.margin = "auto";
    this.childrens = this._element.querySelectorAll(".hole");
  }

  putGoblin(randomNumber) {
    const element = this.childrens[randomNumber];
    element.insertBefore(this.goblinImage, element.firstChild);
  }

  deleteGoblin() {
    const goblin = this._element.querySelector(".goblin");
    goblin.remove();
  }
}
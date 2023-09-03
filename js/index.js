import { Modal } from "./Modal.js";

class Main {
  constructor() {
    this.init();
  }

  init() {
    const loginB = document.querySelector(".header__login");

    loginB.addEventListener("click", () => {
      new Modal().openModal();
    });
  }
  clickLogin() {
    loginB.onClick = function () {
      new Modal().openModal();
    };
  }
}

new Main();

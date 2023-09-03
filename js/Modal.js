export class Modal {
  constructor() {
    this.login = "qwe";
    this.password = "123";
  }

  init() {
    const closeB = document.querySelector(".modal__close");
    const submitB = document.querySelector(".modal__submit");

    closeB.addEventListener("click", () => {
      this.closeModal();
    });
    submitB.addEventListener("click", () => {
      this.checkCred();
    });
  }

  openModal() {
    if (this.getModal() !== null) {
      return;
    }

    const modal = document.createElement("div");
    modal.classList = "modal";
    modal.innerHTML = `
    <div class="modal__close">
        <img src="img/close.svg" alt="" />
      </div>
      <div class="modal__login">
        <div class="modal__column">
          <div class="modal__mail input">
            <input id="modal__mail-input" type="text" placeholder="mail" />
          </div>
          <div class="modal__password input">
            <input id="modal__password-input" type="text" placeholder="password" />
          </div>
          <button class="modal__submit">submit</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentElement("afterbegin", modal);

    this.init();
  }

  closeModal() {
    const modal = this.getModal();
    modal.remove();
  }

  getModal() {
    return document.querySelector(".modal");
  }

  checkCred() {
    const login = document.getElementById("modal__mail-input").value;
    const password = document.getElementById("modal__password-input").value;

    if (this.login === login && this.password === password) {
      this.closeModal();
      return true;
    }
  }
}

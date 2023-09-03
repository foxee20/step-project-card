export class Modal {
  constructor() {}

  init() {
    const closeB = document.querySelector(".modal__close");

    closeB.addEventListener("click", () => {
      this.closeModal();
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
            <input type="text" placeholder="mail" />
          </div>
          <div class="modal__password input">
            <input type="text" placeholder="password" />
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
}

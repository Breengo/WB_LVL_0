import { adressList } from "../db";
import deleteImg from "../assets/Delete.svg";

const configAddressModal = () => {
  const modalAdress = document.createElement("div");
  modalAdress.classList.add("modal_background");
  modalAdress.innerHTML = `
  <div class="modal_container">
  <button class="modal_container__close_button">
    <span></span>
    <span></span>
  </button>
  <div>
    <h4>Способ доставки</h4>
    <div class="modal_container__delivery_methods">
    <button class="modal_delivery__active_method">В пункт выдачи</button>
    <button>Курьером</button>
    </div>
    <h5>Мои адреса</h5>
    <div class="modal_container__address_list">
        <div class="modal_continaer__delivery_adress">
            <div>
                <button class="payment_method_active"></button>
                <p>Бишкек, улица Табышалиева, 57</p>
            </div>
            <img src='${deleteImg}'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button></button>
                <p>Бишкек, улица Жукеева-Пудовкина, 77/1</p>
            </div>
            <img src='${deleteImg}'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button></button>
                <p>Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1</p>
            </div>
            <img src='${deleteImg}'/>
        </div>
    </div>
    </div>
  <button class="modal_container__accept_button">Выбрать</button>
  </div>
  `;

  const openAdresesBtns = window.document.querySelectorAll(
    ".adresses_open_payment"
  );

  modalAdress.querySelector(".modal_container").style.width = "500px";

  let choicedAddress = 0;

  openAdresesBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.document.body.appendChild(modalAdress);
      window.document
        .querySelector(".modal_container__close_button")
        .addEventListener("click", () => {
          document.body.removeChild(modalAdress);
        });

      window.document
        .querySelector(".modal_container__accept_button")
        .addEventListener("click", () => {
          document.body.removeChild(modalAdress);
        });

      const methodButtons = window.document
        .querySelector(".modal_container__delivery_methods")
        .querySelectorAll("button");
      methodButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          methodButtons.forEach((item) => {
            item.style.border = "2px solid #cb11ac2d";
          });
          button.style.border = "2px solid #cb11ac";
        });
      });

      const adressVariants = window.document
        .querySelector(".modal_container__address_list")
        .querySelectorAll("button");
      adressVariants.forEach((variant, index) => {
        variant.addEventListener("click", () => {
          choicedAddress = index;
          adressVariants.forEach((adress) =>
            adress.classList.remove("payment_method_active")
          );
          variant.classList.add("payment_method_active");
          window.document
            .querySelector(".content__delivery__address")
            .querySelector("p").innerHTML = adressList[choicedAddress];

          window.document.querySelector(".bill__container__address").innerHTML =
            adressList[choicedAddress];
        });
      });
    });
  });
};

export default configAddressModal;

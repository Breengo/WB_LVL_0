import visaImg from "../assets/Visa.svg";
import mastercardImg from "../assets/Mastercard.svg";
import maestroImg from "../assets/Maestro.svg";
import mirImg from "../assets/Mir.svg";
import { paymentMethods } from "../db";

let choosen = 0;

const configPaymentModal = () => {
  const modalPayment = document.createElement("div");
  modalPayment.classList.add("modal_background");
  modalPayment.innerHTML = `
<div class="modal_container">
<button class="modal_container__close_button">
  <span></span>
  <span></span>
</button>
<div>
  <h4>Способ оплаты</h4>
  <div class="modal_container__payment_list">
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${mirImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${visaImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${mastercardImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${maestroImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
  </div>
  
</div>
<button class="modal_container__accept_button">Выбрать</button>
</div>
`;

  const openPaymentMethodsBtns = window.document.querySelectorAll(
    ".modal_open_payment"
  );

  openPaymentMethodsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.document.body.appendChild(modalPayment);
      window.document
        .querySelector(".modal_container__close_button")
        .addEventListener("click", () => {
          document.body.removeChild(modalPayment);
        });

      window.document
        .querySelector(".modal_container__accept_button")
        .addEventListener("click", () => {
          document.body.removeChild(modalPayment);
        });

      const methodListButtons = window.document
        .querySelector(".modal_container__payment_list")
        .querySelectorAll("button");

      methodListButtons.forEach((btn, index) => {
        if (index === choosen) btn.classList.add("payment_method_active");
        btn.addEventListener("click", () => {
          choosen = index;
          renderPaymentMethod();
          methodListButtons.forEach((button) => {
            button.classList.remove("payment_method_active");
          });
          btn.classList.add("payment_method_active");
        });
      });
    });
  });

  const renderPaymentMethod = () => {
    window.document
      .querySelector(".bill__container__card")
      .querySelector("img").src = `${paymentMethods[choosen]}`;

    window.document
      .querySelector(".content__payment__card")
      .querySelector("img").src = `${paymentMethods[choosen]}`;
  };
};

export default configPaymentModal;

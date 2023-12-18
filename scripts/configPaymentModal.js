import visaImg from "../assets/Visa.svg";
import mastercardImg from "../assets/Mastercard.svg";
import maestroImg from "../assets/Maestro.svg";
import mirImg from "../assets/Mir.svg";
import { paymentMethods } from "../db";
import state from "../state";

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
    <button class="modal_container__radio"></button>
    <img src="${mirImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${visaImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${mastercardImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${maestroImg}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
  </div>
  
</div>
<button class="modal_container__accept_button">Выбрать</button>
</div>
`;

  const openPaymentMethodsBtns = document.querySelectorAll(
    ".modal_open_payment"
  );

  openPaymentMethodsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.appendChild(modalPayment);
      choosen = state.getPaymentMethod();
      document
        .querySelector(".modal_container__close_button")
        .addEventListener("click", () => {
          modalPayment.remove();
        });

      document
        .querySelector(".modal_container__accept_button")
        .addEventListener("click", () => {
          state.setPaymentMethod(choosen);
          renderPaymentMethod();
          modalPayment.remove();
        });

      const methodListButtons = document.querySelectorAll(
        ".modal_container__payment_method"
      );

      methodListButtons.forEach((btn, index) => {
        btn.querySelector("button").classList.remove("payment_method_active");
        if (index === choosen)
          btn.querySelector("button").classList.add("payment_method_active");

        btn.addEventListener("click", () => {
          choosen = index;
          methodListButtons.forEach((button) => {
            button
              .querySelector("button")
              .classList.remove("payment_method_active");
          });
          btn.querySelector("button").classList.add("payment_method_active");
        });
      });
    });
  });

  const renderPaymentMethod = () => {
    document
      .querySelector(".bill__container__card")
      .querySelector("img").src = `${paymentMethods[choosen]}`;

    document
      .querySelector(".content__payment__card")
      .querySelector("img").src = `${paymentMethods[choosen]}`;
  };
};

export default configPaymentModal;

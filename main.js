import "./style.scss";
import cartData from "./db";
import renderCart from "./scripts/renderCart";
import renderBill from "./scripts/renderBill";
import renderAbsence from "./scripts/renderAbsence";
import configCheckbox from "./scripts/configCheckbox";
import configInputs from "./scripts/configInputs";
import configBeansAndLikes from "./scripts/configBeansandLikes";
import configPaymentModal from "./scripts/configPaymentModal";
import configAddressModal from "./scripts/configAddressModal";

renderCart();
renderAbsence();
renderBill();
configInputs();

/* 
      CART TOGGLE 
*/

let isCartOpened = true;
const cartToggle = window.document
  .querySelector(".content__cart_header")
  .querySelector("span");

cartToggle.addEventListener("click", () => {
  const cart = window.document.querySelector(".content__cart");
  const cartHeaderButton = window.document
    .querySelector(".content__cart_header")
    .querySelector(".checkbox");

  const cartHeaderText = window.document
    .querySelector(".content__cart_header")
    .querySelector("p");

  if (isCartOpened) {
    cartToggle.style.rotate = "45deg";
    cart.innerHTML = null;
    cartHeaderButton.style.display = "none";
    cartHeaderText.innerHTML = `${cartData.reduce(
      (acc, val) => acc + val.quantity,
      0
    )} товаров · ${cartData.reduce(
      (acc, val) => acc + val.price * val.quantity,
      0
    )} сом`;
    cartHeaderText.style.fontWeight = "600";
    isCartOpened = false;
  } else {
    cartToggle.style.rotate = "-135deg";
    cartHeaderButton.style.display = "flex";
    cartHeaderText.innerHTML = "Выбрать все";
    cartHeaderText.style.fontWeight = "400";
    renderCart();
    isCartOpened = true;
  }
});

/* 
      ABSENCE TOGGLE 
*/

const absenceToggle = window.document
  .querySelector(".content__absence_header")
  .querySelector("span");

let isAbsenceOpened = true;

absenceToggle.addEventListener("click", () => {
  const list = window.document.querySelector(".content__absence__list");
  if (isAbsenceOpened) {
    absenceToggle.style.rotate = "45deg";
    isAbsenceOpened = false;
    list.innerHTML = null;
  } else {
    absenceToggle.style.rotate = "-135deg";
    isAbsenceOpened = true;
    renderAbsence();
  }
});

/* 
      CHECKBOXES
*/

const billCheckbox = window.document.querySelector("#bill_checkbox");
configCheckbox(billCheckbox);
let swiftPayment = false;
billCheckbox.addEventListener("click", () => {
  swiftPayment = !swiftPayment;
  const button = window.document.querySelector(".bill__container__order");
  console.log("asdfa");
  if (swiftPayment) {
    button.innerHTML = `Оплатить ${
      document.querySelector("#bill_sum").innerHTML
    }`;
  } else {
    button.innerHTML = "Заказать";
  }
});

const cartCheckbox = window.document.querySelector("#cart_checkbox");
configCheckbox(
  cartCheckbox,
  cartData.filter((item) => item.choiced).length === 3
);

let state = cartData.filter((item) => item.choiced).length === 3;
cartCheckbox.addEventListener("click", () => {
  if (!state) {
    cartData.map((data) => {
      data.choiced = true;
      return data;
    });
    renderCart();
    renderBill();
    state = true;
  } else {
    state = false;
  }
});

configBeansAndLikes();

const deliveryNoteP = window.document
  .querySelector(".content__delivery__note")
  .querySelector("p");

const note = document.createElement("div");
note.classList.add("modal_free_return");
const noteNode = document.createTextNode(
  "Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно"
);
note.appendChild(noteNode);

deliveryNoteP.addEventListener("mouseover", () => {
  deliveryNoteP.appendChild(note);
});

deliveryNoteP.addEventListener("mouseout", () => {
  deliveryNoteP.removeChild(note);
});

const billNoteP = window.document
  .querySelector(".bill__container__note")
  .querySelector("p");

billNoteP.addEventListener("mouseover", () => {
  billNoteP.appendChild(note);
});

billNoteP.addEventListener("mouseout", () => {
  billNoteP.removeChild(note);
});

configPaymentModal();
configAddressModal();

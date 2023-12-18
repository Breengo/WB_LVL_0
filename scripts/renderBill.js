import cartData from "../db";
import state from "../state";
import { wordCase } from "./helpers";

const renderBillButton = () => {
  const immediatePay = state.getImmediatePay();
  const button = document.querySelector(".bill__container__order");
  if (immediatePay) {
    button.innerHTML = `Оплатить ${
      document.querySelector("#bill_sum").innerHTML
    }`;
  } else {
    button.innerHTML = "Заказать";
  }
};

const renderBill = () => {
  let sumQuantity = cartData
    .filter((item) => item.choiced)
    .reduce((acc, val) => acc + val.quantity, 0);
  let fakeSum = cartData
    .filter((item) => item.choiced)
    .reduce((acc, val) => acc + val.quantity * val.fakePrice, 0);
  let sum = cartData
    .filter((item) => item.choiced)
    .reduce((acc, val) => acc + val.quantity * val.price, 0);

  const billSum = Math.round(sum).toLocaleString("ru");

  document.querySelector("#bill_sum").innerHTML = `${billSum} сом`;
  document.querySelector("#bill_fake_sum").innerHTML = `${Math.round(
    fakeSum
  ).toLocaleString("ru")} сом`;
  document.querySelector(
    "#bill_quantity"
  ).innerHTML = `${sumQuantity.toLocaleString("ru")} ${wordCase(sumQuantity, [
    "товар",
    "товаров",
    "товара",
  ])}`;
  document.querySelector("#bill_sale").innerHTML = `-${Math.round(
    fakeSum - sum
  ).toLocaleString("ru")} сом`;
  renderBillButton();
};

export default renderBill;

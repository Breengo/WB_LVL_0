import cartData from "../db";

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

  window.document.querySelector("#bill_sum").innerHTML = `${Math.round(
    sum
  )} сом`;
  window.document.querySelector("#bill_fake_sum").innerHTML = `${Math.round(
    fakeSum
  )} сом`;
  window.document.querySelector(
    "#bill_quantity"
  ).innerHTML = `${sumQuantity} товаров`;
  window.document.querySelector("#bill_sale").innerHTML = `-${Math.round(
    fakeSum - sum
  )} сом`;
};

export default renderBill;

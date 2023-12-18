import cartData from "../db";

const renderPrices = () => {
  document.querySelectorAll(".content__cart__card").forEach((item, index) => {
    const quantity = item.querySelector(
      ".content__cart__functions__quantity"
    ).innerHTML;
    item
      .querySelectorAll(".content__cart__price__main")
      .forEach(
        (item) =>
          (item.innerHTML = `${Math.round(
            quantity * cartData[index].price
          )} <span>сом</span>`)
      );

    item
      .querySelectorAll(".content__cart__price__main__small")
      .forEach(
        (item) =>
          (item.innerHTML = `${Math.round(
            quantity * cartData[index].price
          )} <span>сом</span>`)
      );

    item
      .querySelectorAll(".content__cart__price__fake")
      .forEach(
        (item) =>
          (item.innerHTML = `${Math.round(
            quantity * cartData[index].fakePrice
          )} <span>сом</span>`)
      );
  });
};

export default renderPrices;

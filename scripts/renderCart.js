import cartData from "../db";
import renderBill from "./renderBill";
import renderPrices from "./renderPrices";
import configCheckbox from "./configCheckbox";
import configBeansAndLikes from "./configBeansandLikes";

const renderCart = () => {
  const cart = window.document.querySelector(".content__cart");
  cart.innerHTML = null;
  cartData.map((data) => {
    cart.innerHTML =
      cart.innerHTML +
      `<div class="content__cart__card">
        <div class="content__cart__card__left">
        <div class="height_centralize">
          <button class="checkbox"><div></div></button>
          <img
            class="content__cart__card__img"
            src=${data.img}
            alt="error"
          />
          </div>
          <div class="content__cart__item">
          <div class="content__cart__price">
          <p class="content__cart__price__main">${
            data.price * data.quantity
          }<span>сом</span></p>
          <p class="content__cart__price__fake">${
            data.fakePrice * data.quantity
          }<span>сом</span></p>
        </div>
            <p class="content__cart__item__title">
              ${data.title}
            </p>
            <p class="content__cart__item__type">
              ${
                data.types
                  ? data.types.map((type) => `<span>${type}</span>`).join("")
                  : ""
              }
            </p>
            <p class="content__cart__item__company">${data.place}</p>
            <p class="mobile_hidden content__cart__item__company company_modal">
              ${data.company} <span>i</span>
            </p>
          </div>
        </div>
    
        <div class="content__cart__card__right">
          <div class="content__cart__functions">
            <div class="content__cart__functions__summarizer">
              <button class='content__cart__functions__minus'>−</button>
              <p class="content__cart__functions__quantity">${data.quantity}</p>
              <button class='content__cart__functions__plus'>+</button>
            </div>
            ${
              data.reamins
                ? `<p class="content__cart__functions__remains">Осталось 2шт.</p>`
                : ""
            }
            <div class="content__cart__functions__manage">
              <img class="like_hover" src="./assets/Like.svg" alt="error" />
              <img class="delete_hover" src="./assets/Delete.svg" alt="error" />
            </div>
          </div>
          <div class="content__cart__price">
            <p class="content__cart__price__main">${
              data.price * data.quantity
            } <span>сом</span></p>
            <p class="content__cart__price__fake">${
              data.fakePrice * data.quantity
            } <span>сом</span></p>
          </div>
        </div>`;
  });

  const cartCheckbox = window.document.querySelector("#cart_checkbox");

  cart.querySelectorAll(".checkbox").forEach((checkbox, index) => {
    configCheckbox(checkbox, cartData[index].choiced);
    checkbox.addEventListener("click", () => {
      cartData[index].choiced = !cartData[index].choiced;
      renderBill();
    });
  });

  configCheckbox(
    cartCheckbox,
    cartData.filter((item) => item.choiced).length === 3
  );
  const itemsQuantity = window.document.querySelectorAll(
    ".content__cart__functions__summarizer"
  );

  itemsQuantity.forEach((item, index) => {
    let quantity = Number(item.querySelector("p").innerHTML);
    const minus = item.querySelector(".content__cart__functions__minus");
    if (quantity === 1) {
      minus.style.color = "rgba(0,0,0,0.2)";
    }
    minus.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        cartData[index].quantity--;
        if (quantity === 1) {
          minus.style.color = "rgba(0,0,0,0.2)";
        }
        item.querySelector("p").innerHTML = quantity;
        renderPrices();
        renderBill();
      }
    });

    item
      .querySelector(".content__cart__functions__plus")
      .addEventListener("click", () => {
        quantity++;
        cartData[index].quantity++;
        minus.style.color = "rgba(0,0,0,1)";
        item.querySelector("p").innerHTML = quantity;
        renderPrices();
        renderBill();
      });
  });

  const companies = window.document.querySelectorAll(".company_modal");

  const companyInfo = document.createElement("div");
  companyInfo.classList.add("modal_company_info");

  companies.forEach((company) => {
    company.addEventListener("mouseover", () => {
      companyInfo.innerHTML = `<p class="company_info_header">${company.textContent.replace(
        "i",
        ""
      )}</p>
    <p class="company_info_ogrn">ОГРН: 5167746237148</p>
    <p class="company_info_address">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</p>
    `;
      company.appendChild(companyInfo);
    });

    company.addEventListener("mouseout", () => {
      company.removeChild(companyInfo);
    });
  });

  const saleInfo = document.createElement("div");
  saleInfo.classList.add("modal_sale_info");

  window.document.querySelectorAll(".content__cart__price").forEach((price) => {
    price
      .querySelector(".content__cart__price__fake")
      .addEventListener("mouseover", () => {
        const mainPrice = Number(
          price
            .querySelector(".content__cart__price__main")
            .textContent.replace("сом", "")
        );
        const fakePrice = Number(
          price
            .querySelector(".content__cart__price__fake")
            .textContent.replace("сом", "")
        );
        const diff = fakePrice - mainPrice;
        const percent = Math.round(diff / (fakePrice / 100));
        saleInfo.innerHTML = `<p class="sale_info_percent">Скидка ${percent}%</p> <p>-${diff} сом</p>`;
        price.appendChild(saleInfo);
      });

    price
      .querySelector(".content__cart__price__fake")
      .addEventListener("mouseout", () => {
        price.removeChild(saleInfo);
      });
  });

  configBeansAndLikes();
};

export default renderCart;

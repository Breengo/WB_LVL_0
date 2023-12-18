import cartData from "../db";
import renderBill from "./renderBill";
import renderPrices from "./renderPrices";
import configCheckbox from "./configCheckbox";
import configBeansAndLikes from "./configBeansAndLikes";
import deleteImg from "../assets/Delete.svg";
import likeImg from "../assets/Like.svg";
import likeHoverImg from "../assets/LikeHover.svg";
import renderDelivery from "./renderDelivery";

const renderCartCounter = () => {
  document.querySelectorAll(".js__cart_counter").forEach((elem) => {
    const counter = cartData.filter((item) => item.choiced).length;
    if (counter === 0) return (elem.style.display = "none");
    elem.style.display = "flex";
    elem.innerHTML = counter;
  });
};

function chooseAll() {
  for (let i = 0; i < cartData.length; i++) {
    cartData[i].choiced = true;
  }
  renderCart();
  renderBill();
}

const renderCart = () => {
  const cart = document.querySelector(".content__cart");
  cart.innerHTML = null;
  cartData.map((data, index) => {
    const price = data.price * data.quantity;
    let priceElem;
    if (price < 1000000) {
      priceElem = ` <p class="content__cart__price__main"> ${(
        data.price * data.quantity
      ).toLocaleString("ru")}<span>сом</span></p>`;
    } else {
      priceElem = ` <p class="content__cart__price__main__small"> ${(
        data.price * data.quantity
      ).toLocaleString("ru")}<span>сом</span></p>`;
    }

    const div = document.createElement("div");
    div.className = "content__cart__card";
    div.innerHTML = ` <div class="content__cart__card__left">
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
      <p class="content__cart__price__main">${(
        data.price * data.quantity
      ).toLocaleString("ru")}<span>сом</span></p>
      <p class="content__cart__price__fake">${(
        data.fakePrice * data.quantity
      ).toLocaleString("ru")}<span>сом</span></p>
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
          <img class="like_hover" src="${
            data.favorite ? likeHoverImg : likeImg
          }" alt="error" />
          <img class="delete_hover" src="${deleteImg}" alt="error" />
        </div>
      </div>
      <div class="content__cart__price">
       ${priceElem}
        <p class="content__cart__price__fake">${(
          data.fakePrice * data.quantity
        ).toLocaleString("ru")} <span>сом</span></p>
      </div>`;

    cart.appendChild(div);

    div.querySelectorAll(".content__cart__price").forEach((price) => {
      price
        .querySelector(".content__cart__price__fake")
        .addEventListener("mouseover", () => {
          const diff = data.fakePrice - data.price;

          const percent = Math.round(diff / (data.fakePrice / 100));

          saleInfo.innerHTML = `<p class="sale_info_percent">Скидка ${percent}%</p> <p>-${diff.toLocaleString(
            "ru"
          )} сом</p>`;
          price.appendChild(saleInfo);
        });

      price
        .querySelector(".content__cart__price__fake")
        .addEventListener("mouseout", () => {
          price.removeChild(saleInfo);
        });
    });

    div.querySelector(".delete_hover").addEventListener("click", () => {
      cartData.splice(index, 1);
      renderBill();
      renderCart();
    });

    const item = div.querySelector(".content__cart__functions__summarizer");

    let quantity = data.quantity;

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
        renderDelivery();
      }
    });

    item
      .querySelector(".content__cart__functions__plus")
      .addEventListener("click", () => {
        if (quantity) {
          if (quantity < data.storage) {
            quantity++;
            cartData[index].quantity++;
            minus.style.color = "rgba(0,0,0,1)";
            item.querySelector("p").innerHTML = quantity;
            renderPrices();
            renderBill();
            renderDelivery();
          }
        }
      });
  });

  let cartCheckbox = document.querySelector("#cart_checkbox");

  const clonedNode = cartCheckbox.cloneNode(true);
  cartCheckbox.replaceWith(clonedNode);
  cartCheckbox = clonedNode;

  configCheckbox(
    cartCheckbox,
    cartData.filter((item) => item.choiced).length === cartData.length,
    chooseAll
  );

  cart.querySelectorAll(".checkbox").forEach((checkbox, index) => {
    configCheckbox(checkbox, cartData[index].choiced);
    checkbox.addEventListener("click", () => {
      cartData[index].choiced = !cartData[index].choiced;
      renderBill();
      renderCart();
    });
  });

  const companies = document.querySelectorAll(".company_modal");

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

  configBeansAndLikes();
  renderCartCounter();
  renderDelivery();
};

export default renderCart;

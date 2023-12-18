import cartData from "../db.js";

const renderDeliveryDate = (arr, elem) => {
  arr.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("content__delivery__items__img_wraper");
    let innHTML = `<img src="${item.img}" alt="error" />`;
    if (item.quantity > 1) innHTML += `<span>${item.quantity}</span>`;
    div.innerHTML = innHTML;
    elem.querySelector(".content__delivery__items").appendChild(div);
  });
};

const renderDelivery = () => {
  const container = document
    .querySelector(".content__delivery__info")
    .querySelector("tbody");
  const needToRender = cartData.filter((item) => item.choiced);

  container.querySelectorAll(".js__delivery_remove").forEach((elem) => {
    elem.remove();
  });

  if (needToRender.length === 0) return;

  const deliveryDate = [[], []];

  needToRender.forEach((item) => {
    if (item.quantity > 184) {
      deliveryDate[1].push({ ...item, quantity: item.quantity - 184 });
      return deliveryDate[0].push({ ...item, quantity: 184 });
    }
    deliveryDate[0].push(item);
  });

  const tr = document.createElement("tr");
  const tr2 = document.createElement("tr");

  tr.classList.add("js__delivery_remove");
  tr2.classList.add("js__delivery_remove");

  tr.innerHTML = `
    <td>5—6 февраля</td>
    <td class="content__delivery__items">

    </td>`;

  tr2.innerHTML = `
    <td>7—8 февраля</td>
    <td class="content__delivery__items">
  
    </td>`;

  renderDeliveryDate(deliveryDate[0], tr);
  container.appendChild(tr);

  if (!deliveryDate[1][0]) return;

  renderDeliveryDate(deliveryDate[1], tr2);
  container.appendChild(tr2);
};

export default renderDelivery;

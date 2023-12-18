import cartData from "../db";
import configBeansAndLikes from "./configBeansandLikes";
import deleteImg from "../assets/Delete.svg";
import likeImg from "../assets/Like.svg";

const renderAbsence = () => {
  const absence = document.querySelector(".content__absence__list");
  absence.innerHTML = null;

  cartData.map((data) => {
    const div = document.createElement("div");
    div.classList.add("content__absence__card");
    div.innerHTML = ` <img class="content__absence__card__img" src=${
      data.img
    } alt="error" />
    <div class="content__absence__card__description">
      <p>${data.title}</p>
      <p>${
        data.types
          ? data.types.map((type) => `<span>${type}</span>`).join("")
          : ""
      }</p>
    </div>
    <div class="content__absence__card__manage">
      <img class="like_hover" src="${likeImg}" alt="error" />
      <img class="delete_hover" src="${deleteImg}" alt="error" />
    </div>`;

    div
      .querySelector(".delete_hover")
      .addEventListener("click", () => div.remove());

    absence.appendChild(div);
  });

  configBeansAndLikes();
};

export default renderAbsence;

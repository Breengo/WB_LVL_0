import cartData from "../db";
import configBeansAndLikes from "./configBeansandLikes";
import deleteImg from "../assets/Delete.svg";
import likeImg from "../assets/Like.svg";

const renderAbsence = () => {
  const absence = window.document.querySelector(".content__absence__list");
  absence.innerHTML = null;
  cartData.map((data) => {
    absence.innerHTML =
      absence.innerHTML +
      `
        <div class="content__absence__card">
                  <img class="content__absence__card__img" src=${
                    data.img
                  } alt="error" />
                  <div class="content__absence__card__description">
                    <p>${data.title}</p>
                    <p>${
                      data.types
                        ? data.types
                            .map((type) => `<span>${type}</span>`)
                            .join("")
                        : ""
                    }</p>
                  </div>
                  <div class="content__absence__card__manage">
                    <img class="like_hover" src="${likeImg}" alt="error" />
                    <img class="delete_hover" src="${deleteImg}" alt="error" />
                  </div>
                </div>
        `;
  });

  configBeansAndLikes();
};

export default renderAbsence;

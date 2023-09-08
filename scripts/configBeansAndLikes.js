import deleteImg from "../assets/Delete.svg";
import likeImg from "../assets/Like.svg";
import hoverDeleteImg from "../assets/DeleteHover.svg";
import hoverLikeImg from "../assets/LikeHover.svg";

const configBeansAndLikes = () => {
  const likes = window.document.querySelectorAll(".like_hover");

  likes.forEach((like) => {
    like.addEventListener("mouseover", () => {
      like.src = hoverLikeImg;
    });
    like.addEventListener("mouseout", () => {
      like.src = likeImg;
    });
  });

  const beans = window.document.querySelectorAll(".delete_hover");

  beans.forEach((bean) => {
    bean.addEventListener("mouseover", () => {
      bean.src = hoverDeleteImg;
    });
    bean.addEventListener("mouseout", () => {
      bean.src = deleteImg;
    });
  });
};

export default configBeansAndLikes;

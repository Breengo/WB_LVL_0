import deleteImg from "../assets/Delete.svg";
import likeImg from "../assets/Like.svg";
import hoverDeleteImg from "../assets/DeleteHover.svg";
import hoverLikeImg from "../assets/LikeHover.svg";

const configBeansAndLikes = () => {
  const likes = document.querySelectorAll(".like_hover");

  likes.forEach((like) => {
    let isFavorite = false;
    like.addEventListener("mouseover", () => {
      like.src = hoverLikeImg;
    });
    like.addEventListener("mouseout", () => {
      if (!isFavorite) like.src = likeImg;
    });

    like.addEventListener("click", () => {
      if (isFavorite) {
        isFavorite = false;
        like.src = likeImg;
      } else {
        isFavorite = true;
        like.src = hoverLikeImg;
      }
    });
  });

  const beans = document.querySelectorAll(".delete_hover");

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

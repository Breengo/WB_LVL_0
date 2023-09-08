const configBeansAndLikes = () => {
  const likes = window.document.querySelectorAll(".like_hover");

  likes.forEach((like) => {
    like.addEventListener("mouseover", () => {
      like.src = "./assets/LikeHover.svg";
    });
    like.addEventListener("mouseout", () => {
      like.src = "./assets/Like.svg";
    });
  });

  const beans = window.document.querySelectorAll(".delete_hover");

  beans.forEach((bean) => {
    bean.addEventListener("mouseover", () => {
      bean.src = "./assets/DeleteHover.svg";
    });
    bean.addEventListener("mouseout", () => {
      bean.src = "./assets/Delete.svg";
    });
  });
};

export default configBeansAndLikes;

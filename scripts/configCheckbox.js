const configCheckbox = (checkbox, state = false) => {
  if (state) {
    checkbox.classList.remove("checkbox__inactive");
    checkbox.classList.add("checkbox__active");
  } else {
    checkbox.classList.remove("checkbox__active");
    checkbox.classList.add("checkbox__inactive");
  }
  checkbox.addEventListener("click", () => {
    if (!state) {
      state = !state;
      checkbox.classList.remove("checkbox__inactive");
      checkbox.classList.add("checkbox__active");
    } else {
      state = !state;
      checkbox.classList.remove("checkbox__active");
      checkbox.classList.add("checkbox__inactive");
    }
  });
};

export default configCheckbox;

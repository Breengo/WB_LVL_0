import telnumMask from "./telnumMask";

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const configInputs = () => {
  const inputs = window.document.querySelectorAll(".formInput");
  const orderButton = window.document.querySelector(".bill__container__order");

  inputs.forEach((input, index) => {
    const highliteError = () => {
      errorMessage.style.color = "#F55123";
      input.style.borderColor = "#F55123";
      pElement.style.color = "#F55123";
      inputElement.style.color = "#F55123";
    };

    const hideError = () => {
      errorMessage.style.color = "transparent";
      input.style.borderColor = "rgba(0,0,0,0.2)";
      pElement.style.color = "#9797AF";
      inputElement.style.color = "rgba(0,0,0)";
    };

    const errorMessage = input.querySelector("div");
    const inputElement = input.querySelector("input");
    const pElement = input.querySelector("p");
    inputElement.addEventListener("focus", () => {
      pElement.style.top = "-22px";
      pElement.style.fontSize = "13px";
    });
    inputElement.addEventListener("blur", () => {
      if (!inputElement.value) {
        pElement.style.top = "0px";
        pElement.style.fontSize = "16px";
      }
    });

    if (index !== 4) {
      input.querySelector("div").style.color = "transparent";
    } else {
      inputElement.addEventListener("change", (event) => {
        if (event.target.value.length !== 14 && event.target.value !== "") {
          highliteError();
          errorMessage.innerHTML = "Проверьте ИНН";
        } else {
          errorMessage.innerHTML = "Для таможенного оформления";
          hideError();
          errorMessage.style.color = "black";
        }
      });
    }

    if (index === 2) {
      inputElement.addEventListener("change", (event) => {
        if (!validateEmail(event.target.value) && event.target.value !== "") {
          highliteError();
          errorMessage.innerHTML = "Проверьте адрес электронной почты";
        } else {
          hideError();
        }
      });
    }

    if (index === 3) {
      inputElement.addEventListener("input", (event) => {
        telnumMask(event);
      });
      inputElement.addEventListener("change", (event) => {
        if (event.target.value.length !== 16 && event.target.value !== "") {
          highliteError();
          errorMessage.innerHTML = "Формат: +9 999 999 99 99";
        } else {
          hideError();
        }
      });
    }
  });

  orderButton.addEventListener("click", () => {
    inputs.forEach((input, index) => {
      const inputElement = input.querySelector("input");
      const errorMessage = input.querySelector("div");
      const pElement = input.querySelector("p");
      if (inputElement.value === "") {
        errorMessage.style.color = "#F55123";
        input.style.borderColor = "#F55123";
        pElement.style.color = "#F55123";
        input.scrollIntoView();
        switch (index) {
          case 0:
            errorMessage.innerHTML = "Укажите имя";
            break;
          case 1:
            errorMessage.innerHTML = "Укажите фамилию";

            break;
          case 2:
            errorMessage.innerHTML = "Укажите почту";

            break;
          case 3:
            errorMessage.innerHTML = "Укажите номер телефона";

            break;
          case 4:
            errorMessage.innerHTML = "Укажите ИНН";

            break;
        }
      }
    });
  });
};

export default configInputs;

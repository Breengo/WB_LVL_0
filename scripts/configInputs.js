import telnumMask from "./telnumMask";

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const highliteError = (input) => {
  const errorMessage = input.querySelector("div");
  const inputElement = input.querySelector("input");
  const pElement = input.querySelector("p");

  errorMessage.style.color = "#F55123";
  input.style.borderColor = "#F55123";
  pElement.style.color = "#F55123";
  inputElement.style.color = "#F55123";
};

const hideError = (input) => {
  const errorMessage = input.querySelector("div");
  const inputElement = input.querySelector("input");
  const pElement = input.querySelector("p");

  errorMessage.style.color = "transparent";
  input.style.borderColor = "rgba(0,0,0,0.2)";
  pElement.style.color = "#9797AF";
  inputElement.style.color = "rgba(0,0,0)";
};

const configInputs = () => {
  const inputs = document.querySelectorAll(".formInput");
  const orderButton = document.querySelector(".bill__container__order");

  inputs.forEach((input) => {
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
    input.querySelector("div").style.color = "transparent";
  });

  const INNInput = document.querySelector("#INNInput");
  const INNerrorMessage = INNInput.querySelector("div");

  INNInput.addEventListener("input", (e) => {
    const inpVal = e.target.value;
    e.target.value = inpVal.replace(/[^\d]/g, "");
    e.target.value = inpVal.slice(0, 14);
  });

  INNInput.querySelector("div").style.color = "black";
  INNInput.addEventListener("change", (event) => {
    const inputVal = event.target.value;

    if (inputVal.length !== 14 && inputVal !== "") {
      highliteError(INNInput);
      INNerrorMessage.innerHTML = "Проверьте ИНН";
    } else {
      INNerrorMessage.innerHTML = "Для таможенного оформления";
      hideError(INNInput);
      INNerrorMessage.style.color = "black";
    }
  });

  const emailInput = document.querySelector("#emailInput");
  const emailInputElement = emailInput.querySelector("input");
  const emailErrorMessage = emailInput.querySelector("div");

  emailInputElement.addEventListener("change", (event) => {
    if (!validateEmail(event.target.value) && event.target.value !== "") {
      highliteError(emailInput);
      emailErrorMessage.innerHTML = "Проверьте адрес электронной почты";
    } else {
      hideError(emailInput);
    }
  });

  const phoneInput = document.querySelector("#phoneInput");
  const phoneInputElement = phoneInput.querySelector("input");
  const phoneErrorMessage = phoneInput.querySelector("div");

  phoneInputElement.addEventListener("input", (event) => {
    telnumMask(event);
  });
  phoneInputElement.addEventListener("change", (event) => {
    if (event.target.value.length !== 16 && event.target.value !== "") {
      highliteError(phoneInput);
      phoneErrorMessage.innerHTML = "Формат: +9 999 999 99 99";
    } else {
      hideError(phoneInput);
    }
  });

  orderButton.addEventListener("click", () => {
    inputs.forEach((input) => {
      const inputElement = input.querySelector("input");
      const errorMessage = input.querySelector("div");
      hideError(input);
      if (inputElement.value === "") {
        highliteError(input);
        input.scrollIntoView();
        switch (input.getAttribute("id")) {
          case "nameInput":
            errorMessage.innerHTML = "Укажите имя";
            break;
          case "sernameInput":
            errorMessage.innerHTML = "Укажите фамилию";

            break;
          case "emailInput":
            errorMessage.innerHTML = "Укажите почту";

            break;
          case "phoneInput":
            errorMessage.innerHTML = "Укажите номер телефона";

            break;
          case "INNInput":
            errorMessage.innerHTML = "Укажите ИНН";
            break;
        }
      }
    });
  });
};

export default configInputs;

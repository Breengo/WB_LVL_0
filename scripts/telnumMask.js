var isAlpha = function (ch) {
  return /^[a-zа-яё]$/i.test(ch);
};

const telnumMask = (event) => {
  let value = event.target.value;
  if (event.data === null) return;
  if (isAlpha(value[value.length - 1]) || value.length === 17)
    event.target.value = value.slice(0, value.length - 1);
  else {
    if (value.length === 1 && value !== "+") {
      event.target.value = `+${value} `;
    }
    if (value.length === 2) {
      event.target.value = `${value} `;
    }
    if (value.length === 6) {
      event.target.value = `${value} `;
    }
    if (value.length === 10) {
      event.target.value = `${value} `;
    }
    if (value.length === 13) {
      event.target.value = `${value} `;
    }
  }
};

export default telnumMask;

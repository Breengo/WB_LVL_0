import img1 from "./assets/CartTemplate.png";
import img2 from "./assets/CartTemplate2.png";
import img3 from "./assets/CartTemplate3.png";

const cartData = [
  {
    id: 1,
    img: img1,
    title: "Футболка UZcotton мужская",
    types: ["Цвет: белый", "Размер:56"],
    place: "Коледино WB",
    company: "ООО Вайлдберриз",
    price: 522,
    fakePrice: 1051,
    quantity: 1,
    reamins: true,
    choiced: true,
  },
  {
    id: 2,
    img: img2,
    title:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    types: ["Цвет: прозрачный"],
    place: "Коледино WB",
    company: "ООО Мегапрофстиль",
    price: 10500,
    fakePrice: 14510,
    quantity: 200,
    reamins: false,
    choiced: true,
  },
  {
    id: 3,
    img: img3,
    title:
      'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
    place: "Коледино WB",
    company: "ООО Вайлдберриз",
    price: 247,
    fakePrice: 526,
    quantity: 2,
    reamins: true,
    choiced: true,
  },
];

const paymentMethods = ["Mir", "Visa", "Mastercard", "Maestro"];
const adressList = [
  "Бишкек, улица Табышалиева, 57",
  "Бишкек, улица Жукеева-Пудовкина, 77/1",
  "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
];

export default cartData;
export { paymentMethods, adressList };

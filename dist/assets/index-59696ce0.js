(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const d=[{id:1,img:"./assets/CartTemplate.png",title:"Футболка UZcotton мужская",types:["Цвет: белый","Размер:56"],place:"Коледино WB",company:"ООО Вайлдберриз",price:522,fakePrice:1051,quantity:1,reamins:!0,choiced:!0},{id:2,img:"./assets/CartTemplate2.png",title:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",types:["Цвет: прозрачный"],place:"Коледино WB",company:"ООО Мегапрофстиль",price:10500,fakePrice:14510,quantity:200,reamins:!1,choiced:!0},{id:3,img:"./assets/CartTemplate3.png",title:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',place:"Коледино WB",company:"ООО Вайлдберриз",price:247,fakePrice:526,quantity:2,reamins:!0,choiced:!0}],E=["Mir","Visa","Mastercard","Maestro"],M=["Бишкек, улица Табышалиева, 57","Бишкек, улица Жукеева-Пудовкина, 77/1","Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"],u=()=>{let e=d.filter(r=>r.choiced).reduce((r,o)=>r+o.quantity,0),n=d.filter(r=>r.choiced).reduce((r,o)=>r+o.quantity*o.fakePrice,0),c=d.filter(r=>r.choiced).reduce((r,o)=>r+o.quantity*o.price,0);window.document.querySelector("#bill_sum").innerHTML=`${Math.round(c)} сом`,window.document.querySelector("#bill_fake_sum").innerHTML=`${Math.round(n)} сом`,window.document.querySelector("#bill_quantity").innerHTML=`${e} товаров`,window.document.querySelector("#bill_sale").innerHTML=`-${Math.round(n-c)} сом`},k=()=>{window.document.querySelectorAll(".content__cart__card").forEach((e,n)=>{const c=e.querySelector(".content__cart__functions__quantity").innerHTML;e.querySelectorAll(".content__cart__price__main").forEach(r=>r.innerHTML=`${Math.round(c*d[n].price)} <span>сом</span>`),e.querySelectorAll(".content__cart__price__fake").forEach(r=>r.innerHTML=`${Math.round(c*d[n].fakePrice)} <span>сом</span>`)})},p=(e,n=!1)=>{n?(e.classList.remove("checkbox__inactive"),e.classList.add("checkbox__active")):(e.classList.remove("checkbox__active"),e.classList.add("checkbox__inactive")),e.addEventListener("click",()=>{n?(n=!n,e.classList.remove("checkbox__active"),e.classList.add("checkbox__inactive")):(n=!n,e.classList.remove("checkbox__inactive"),e.classList.add("checkbox__active"))})},w=()=>{window.document.querySelectorAll(".like_hover").forEach(c=>{c.addEventListener("mouseover",()=>{c.src="./assets/LikeHover.svg"}),c.addEventListener("mouseout",()=>{c.src="./assets/Like.svg"})}),window.document.querySelectorAll(".delete_hover").forEach(c=>{c.addEventListener("mouseover",()=>{c.src="./assets/DeleteHover.svg"}),c.addEventListener("mouseout",()=>{c.src="./assets/Delete.svg"})})},S=()=>{const e=window.document.querySelector(".content__cart");e.innerHTML=null,d.map(t=>{e.innerHTML=e.innerHTML+`<div class="content__cart__card">
        <div class="content__cart__card__left">
        <div class="height_centralize">
          <button class="checkbox"><div></div></button>
          <img
            class="content__cart__card__img"
            src=${t.img}
            alt="error"
          />
          </div>
          <div class="content__cart__item">
          <div class="content__cart__price">
          <p class="content__cart__price__main">${t.price*t.quantity}<span>сом</span></p>
          <p class="content__cart__price__fake">${t.fakePrice*t.quantity}<span>сом</span></p>
        </div>
            <p class="content__cart__item__title">
              ${t.title}
            </p>
            <p class="content__cart__item__type">
              ${t.types?t.types.map(a=>`<span>${a}</span>`).join(""):""}
            </p>
            <p class="content__cart__item__company">${t.place}</p>
            <p class="mobile_hidden content__cart__item__company company_modal">
              ${t.company} <span>i</span>
            </p>
          </div>
        </div>
    
        <div class="content__cart__card__right">
          <div class="content__cart__functions">
            <div class="content__cart__functions__summarizer">
              <button class='content__cart__functions__minus'>−</button>
              <p class="content__cart__functions__quantity">${t.quantity}</p>
              <button class='content__cart__functions__plus'>+</button>
            </div>
            ${t.reamins?'<p class="content__cart__functions__remains">Осталось 2шт.</p>':""}
            <div class="content__cart__functions__manage">
              <img class="like_hover" src="./assets/Like.svg" alt="error" />
              <img class="delete_hover" src="./assets/Delete.svg" alt="error" />
            </div>
          </div>
          <div class="content__cart__price">
            <p class="content__cart__price__main">${t.price*t.quantity} <span>сом</span></p>
            <p class="content__cart__price__fake">${t.fakePrice*t.quantity} <span>сом</span></p>
          </div>
        </div>`});const n=window.document.querySelector("#cart_checkbox");e.querySelectorAll(".checkbox").forEach((t,a)=>{p(t,d[a].choiced),t.addEventListener("click",()=>{d[a].choiced=!d[a].choiced,u()})}),p(n,d.filter(t=>t.choiced).length===3),window.document.querySelectorAll(".content__cart__functions__summarizer").forEach((t,a)=>{let i=Number(t.querySelector("p").innerHTML);const l=t.querySelector(".content__cart__functions__minus");i===1&&(l.style.color="rgba(0,0,0,0.2)"),l.addEventListener("click",()=>{i>1&&(i--,d[a].quantity--,i===1&&(l.style.color="rgba(0,0,0,0.2)"),t.querySelector("p").innerHTML=i,k(),u())}),t.querySelector(".content__cart__functions__plus").addEventListener("click",()=>{i++,d[a].quantity++,l.style.color="rgba(0,0,0,1)",t.querySelector("p").innerHTML=i,k(),u()})});const r=window.document.querySelectorAll(".company_modal"),o=document.createElement("div");o.classList.add("modal_company_info"),r.forEach(t=>{t.addEventListener("mouseover",()=>{o.innerHTML=`<p class="company_info_header">${t.textContent.replace("i","")}</p>
    <p class="company_info_ogrn">ОГРН: 5167746237148</p>
    <p class="company_info_address">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</p>
    `,t.appendChild(o)}),t.addEventListener("mouseout",()=>{t.removeChild(o)})});const s=document.createElement("div");s.classList.add("modal_sale_info"),window.document.querySelectorAll(".content__cart__price").forEach(t=>{t.querySelector(".content__cart__price__fake").addEventListener("mouseover",()=>{const a=Number(t.querySelector(".content__cart__price__main").textContent.replace("сом","")),i=Number(t.querySelector(".content__cart__price__fake").textContent.replace("сом","")),l=i-a,C=Math.round(l/(i/100));s.innerHTML=`<p class="sale_info_percent">Скидка ${C}%</p> <p>-${l} сом</p>`,t.appendChild(s)}),t.querySelector(".content__cart__price__fake").addEventListener("mouseout",()=>{t.removeChild(s)})}),w()},T=()=>{const e=window.document.querySelector(".content__absence__list");e.innerHTML=null,d.map(n=>{e.innerHTML=e.innerHTML+`
        <div class="content__absence__card">
                  <img class="content__absence__card__img" src=${n.img} alt="error" />
                  <div class="content__absence__card__description">
                    <p>${n.title}</p>
                    <p>${n.types?n.types.map(c=>`<span>${c}</span>`).join(""):""}</p>
                  </div>
                  <div class="content__absence__card__manage">
                    <img class="like_hover" src="./assets/Like.svg" alt="error" />
                    <img class="delete_hover" src="./assets/Delete.svg" alt="error" />
                  </div>
                </div>
        `}),w()};var A=function(e){return/^[a-zа-яё]$/i.test(e)};const P=e=>{let n=e.target.value;e.data!==null&&(A(n[n.length-1])||n.length===17?e.target.value=n.slice(0,n.length-1):(n.length===1&&n!=="+"&&(e.target.value=`+${n} `),n.length===2&&(e.target.value=`${n} `),n.length===6&&(e.target.value=`${n} `),n.length===10&&(e.target.value=`${n} `),n.length===13&&(e.target.value=`${n} `)))},x=e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),B=()=>{const e=window.document.querySelectorAll(".formInput"),n=window.document.querySelector(".bill__container__order");e.forEach((c,r)=>{const o=()=>{t.style.color="#F55123",c.style.borderColor="#F55123",i.style.color="#F55123",a.style.color="#F55123"},s=()=>{t.style.color="transparent",c.style.borderColor="rgba(0,0,0,0.2)",i.style.color="#9797AF",a.style.color="rgba(0,0,0)"},t=c.querySelector("div"),a=c.querySelector("input"),i=c.querySelector("p");a.addEventListener("focus",()=>{i.style.top="-22px",i.style.fontSize="13px"}),a.addEventListener("blur",()=>{a.value||(i.style.top="0px",i.style.fontSize="16px")}),r!==4?c.querySelector("div").style.color="transparent":a.addEventListener("change",l=>{l.target.value.length!==14&&l.target.value!==""?(o(),t.innerHTML="Проверьте ИНН"):(t.innerHTML="Для таможенного оформления",s(),t.style.color="black")}),r===2&&a.addEventListener("change",l=>{!x(l.target.value)&&l.target.value!==""?(o(),t.innerHTML="Проверьте адрес электронной почты"):s()}),r===3&&(a.addEventListener("input",l=>{P(l)}),a.addEventListener("change",l=>{l.target.value.length!==16&&l.target.value!==""?(o(),t.innerHTML="Формат: +9 999 999 99 99"):s()}))}),n.addEventListener("click",()=>{e.forEach((c,r)=>{const o=c.querySelector("input"),s=c.querySelector("div"),t=c.querySelector("p");if(o.value==="")switch(s.style.color="#F55123",c.style.borderColor="#F55123",t.style.color="#F55123",c.scrollIntoView(),r){case 0:s.innerHTML="Укажите имя";break;case 1:s.innerHTML="Укажите фамилию";break;case 2:s.innerHTML="Укажите почту";break;case 3:s.innerHTML="Укажите номер телефона";break;case 4:s.innerHTML="Укажите ИНН";break}})})};let m=0;const F=()=>{const e=document.createElement("div");e.classList.add("modal_background"),e.innerHTML=`
<div class="modal_container">
<button class="modal_container__close_button">
  <span></span>
  <span></span>
</button>
<div>
  <h4>Способ оплаты</h4>
  <div class="modal_container__payment_list">
    <div class="modal_container__payment_method">
    <button></button>
    <img src="./assets/Mir.svg" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="./assets/Visa.svg" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="./assets/Mastercard.svg" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="./assets/Maestro.svg" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
  </div>
  
</div>
<button class="modal_container__accept_button">Выбрать</button>
</div>
`,window.document.querySelectorAll(".modal_open_payment").forEach(r=>{r.addEventListener("click",()=>{window.document.body.appendChild(e),window.document.querySelector(".modal_container__close_button").addEventListener("click",()=>{document.body.removeChild(e)}),window.document.querySelector(".modal_container__accept_button").addEventListener("click",()=>{document.body.removeChild(e)});const o=window.document.querySelector(".modal_container__payment_list").querySelectorAll("button");o.forEach((s,t)=>{t===m&&s.classList.add("payment_method_active"),s.addEventListener("click",()=>{m=t,c(),o.forEach(a=>{a.classList.remove("payment_method_active")}),s.classList.add("payment_method_active")})})})});const c=()=>{window.document.querySelector(".bill__container__card").querySelector("img").src=`./assets/${E[m]}.svg`,window.document.querySelector(".content__payment__card").querySelector("img").src=`./assets/${E[m]}.svg`}},N=()=>{const e=document.createElement("div");e.classList.add("modal_background"),e.innerHTML=`
  <div class="modal_container">
  <button class="modal_container__close_button">
    <span></span>
    <span></span>
  </button>
  <div>
    <h4>Способ доставки</h4>
    <div class="modal_container__delivery_methods">
    <button class="modal_delivery__active_method">В пункт выдачи</button>
    <button>Курьером</button>
    </div>
    <h5>Мои адреса</h5>
    <div class="modal_container__address_list">
        <div class="modal_continaer__delivery_adress">
            <div>
                <button class="payment_method_active"></button>
                <p>Бишкек, улица Табышалиева, 57</p>
            </div>
            <img src='../assets/Delete.svg'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button></button>
                <p>Бишкек, улица Жукеева-Пудовкина, 77/1</p>
            </div>
            <img src='../assets/Delete.svg'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button></button>
                <p>Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1</p>
            </div>
            <img src='../assets/Delete.svg'/>
        </div>
    </div>
    </div>
  <button class="modal_container__accept_button">Выбрать</button>
  </div>
  `;const n=window.document.querySelectorAll(".adresses_open_payment");e.querySelector(".modal_container").style.width="500px";let c=0;n.forEach(r=>{r.addEventListener("click",()=>{window.document.body.appendChild(e),window.document.querySelector(".modal_container__close_button").addEventListener("click",()=>{document.body.removeChild(e)}),window.document.querySelector(".modal_container__accept_button").addEventListener("click",()=>{document.body.removeChild(e)});const o=window.document.querySelector(".modal_container__delivery_methods").querySelectorAll("button");o.forEach((t,a)=>{t.addEventListener("click",()=>{o.forEach(i=>{i.style.border="2px solid #cb11ac2d"}),t.style.border="2px solid #cb11ac"})});const s=window.document.querySelector(".modal_container__address_list").querySelectorAll("button");s.forEach((t,a)=>{t.addEventListener("click",()=>{c=a,s.forEach(i=>i.classList.remove("payment_method_active")),t.classList.add("payment_method_active"),window.document.querySelector(".content__delivery__address").querySelector("p").innerHTML=M[c],window.document.querySelector(".bill__container__address").innerHTML=M[c]})})})})};S();T();u();B();let h=!0;const f=window.document.querySelector(".content__cart_header").querySelector("span");f.addEventListener("click",()=>{const e=window.document.querySelector(".content__cart"),n=window.document.querySelector(".content__cart_header").querySelector(".checkbox"),c=window.document.querySelector(".content__cart_header").querySelector("p");h?(f.style.rotate="45deg",e.innerHTML=null,n.style.display="none",c.innerHTML=`${d.reduce((r,o)=>r+o.quantity,0)} товаров · ${d.reduce((r,o)=>r+o.price*o.quantity,0)} сом`,c.style.fontWeight="600",h=!1):(f.style.rotate="-135deg",n.style.display="flex",c.innerHTML="Выбрать все",c.style.fontWeight="400",S(),h=!0)});const b=window.document.querySelector(".content__absence_header").querySelector("span");let g=!0;b.addEventListener("click",()=>{const e=window.document.querySelector(".content__absence__list");g?(b.style.rotate="45deg",g=!1,e.innerHTML=null):(b.style.rotate="-135deg",g=!0,T())});const H=window.document.querySelector("#bill_checkbox");p(H);let L=!1;H.addEventListener("click",()=>{L=!L;const e=window.document.querySelector(".bill__container__order");console.log("asdfa"),L?e.innerHTML=`Оплатить ${document.querySelector("#bill_sum").innerHTML}`:e.innerHTML="Заказать"});const $=window.document.querySelector("#cart_checkbox");p($,d.filter(e=>e.choiced).length===3);let q=d.filter(e=>e.choiced).length===3;$.addEventListener("click",()=>{q?q=!1:(d.map(e=>(e.choiced=!0,e)),S(),u(),q=!0)});w();const y=window.document.querySelector(".content__delivery__note").querySelector("p"),_=document.createElement("div");_.classList.add("modal_free_return");const z=document.createTextNode("Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно");_.appendChild(z);y.addEventListener("mouseover",()=>{y.appendChild(_)});y.addEventListener("mouseout",()=>{y.removeChild(_)});const v=window.document.querySelector(".bill__container__note").querySelector("p");v.addEventListener("mouseover",()=>{v.appendChild(_)});v.addEventListener("mouseout",()=>{v.removeChild(_)});F();N();

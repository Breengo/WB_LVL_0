(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function o(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerPolicy&&(s.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?s.credentials="include":c.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(c){if(c.ep)return;c.ep=!0;const s=o(c);fetch(c.href,s)}})();const P="/WB_LVL_0/assets/CartTemplate-326f0d4d.png",x="/WB_LVL_0/assets/CartTemplate2-291877c8.png",W="/WB_LVL_0/assets/CartTemplate3-3f020ca1.png",d=[{id:1,img:P,title:"Футболка UZcotton мужская",types:["Цвет: белый","Размер:56"],place:"Коледино WB",company:"ООО Вайлдберриз",price:522,fakePrice:1051,quantity:1,reamins:!0,choiced:!0},{id:2,img:x,title:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",types:["Цвет: прозрачный"],place:"Коледино WB",company:"ООО Мегапрофстиль",price:10500,fakePrice:14510,quantity:200,reamins:!1,choiced:!0},{id:3,img:W,title:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',place:"Коледино WB",company:"ООО Вайлдберриз",price:247,fakePrice:526,quantity:2,reamins:!0,choiced:!0}],k=["Mir","Visa","Mastercard","Maestro"],$=["Бишкек, улица Табышалиева, 57","Бишкек, улица Жукеева-Пудовкина, 77/1","Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"],m=()=>{let e=d.filter(r=>r.choiced).reduce((r,c)=>r+c.quantity,0),n=d.filter(r=>r.choiced).reduce((r,c)=>r+c.quantity*c.fakePrice,0),o=d.filter(r=>r.choiced).reduce((r,c)=>r+c.quantity*c.price,0);window.document.querySelector("#bill_sum").innerHTML=`${Math.round(o)} сом`,window.document.querySelector("#bill_fake_sum").innerHTML=`${Math.round(n)} сом`,window.document.querySelector("#bill_quantity").innerHTML=`${e} товаров`,window.document.querySelector("#bill_sale").innerHTML=`-${Math.round(n-o)} сом`},T=()=>{window.document.querySelectorAll(".content__cart__card").forEach((e,n)=>{const o=e.querySelector(".content__cart__functions__quantity").innerHTML;e.querySelectorAll(".content__cart__price__main").forEach(r=>r.innerHTML=`${Math.round(o*d[n].price)} <span>сом</span>`),e.querySelectorAll(".content__cart__price__fake").forEach(r=>r.innerHTML=`${Math.round(o*d[n].fakePrice)} <span>сом</span>`)})},y=(e,n=!1)=>{n?(e.classList.remove("checkbox__inactive"),e.classList.add("checkbox__active")):(e.classList.remove("checkbox__active"),e.classList.add("checkbox__inactive")),e.addEventListener("click",()=>{n?(n=!n,e.classList.remove("checkbox__active"),e.classList.add("checkbox__inactive")):(n=!n,e.classList.remove("checkbox__inactive"),e.classList.add("checkbox__active"))})},_="/WB_LVL_0/assets/Delete-559680d4.svg",S="/WB_LVL_0/assets/Like-0a484050.svg",V="/WB_LVL_0/assets/DeleteHover-e6058b1f.svg",I="/WB_LVL_0/assets/LikeHover-466618c9.svg",E=()=>{window.document.querySelectorAll(".like_hover").forEach(o=>{o.addEventListener("mouseover",()=>{o.src=I}),o.addEventListener("mouseout",()=>{o.src=S})}),window.document.querySelectorAll(".delete_hover").forEach(o=>{o.addEventListener("mouseover",()=>{o.src=V}),o.addEventListener("mouseout",()=>{o.src=_})})},M=()=>{const e=window.document.querySelector(".content__cart");e.innerHTML=null,d.map(t=>{e.innerHTML=e.innerHTML+`<div class="content__cart__card">
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
              <img class="like_hover" src="${S}" alt="error" />
              <img class="delete_hover" src="./assets/${_}" alt="error" />
            </div>
          </div>
          <div class="content__cart__price">
            <p class="content__cart__price__main">${t.price*t.quantity} <span>сом</span></p>
            <p class="content__cart__price__fake">${t.fakePrice*t.quantity} <span>сом</span></p>
          </div>
        </div>`});const n=window.document.querySelector("#cart_checkbox");e.querySelectorAll(".checkbox").forEach((t,a)=>{y(t,d[a].choiced),t.addEventListener("click",()=>{d[a].choiced=!d[a].choiced,m()})}),y(n,d.filter(t=>t.choiced).length===3),window.document.querySelectorAll(".content__cart__functions__summarizer").forEach((t,a)=>{let i=Number(t.querySelector("p").innerHTML);const l=t.querySelector(".content__cart__functions__minus");i===1&&(l.style.color="rgba(0,0,0,0.2)"),l.addEventListener("click",()=>{i>1&&(i--,d[a].quantity--,i===1&&(l.style.color="rgba(0,0,0,0.2)"),t.querySelector("p").innerHTML=i,T(),m())}),t.querySelector(".content__cart__functions__plus").addEventListener("click",()=>{i++,d[a].quantity++,l.style.color="rgba(0,0,0,1)",t.querySelector("p").innerHTML=i,T(),m()})});const r=window.document.querySelectorAll(".company_modal"),c=document.createElement("div");c.classList.add("modal_company_info"),r.forEach(t=>{t.addEventListener("mouseover",()=>{c.innerHTML=`<p class="company_info_header">${t.textContent.replace("i","")}</p>
    <p class="company_info_ogrn">ОГРН: 5167746237148</p>
    <p class="company_info_address">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</p>
    `,t.appendChild(c)}),t.addEventListener("mouseout",()=>{t.removeChild(c)})});const s=document.createElement("div");s.classList.add("modal_sale_info"),window.document.querySelectorAll(".content__cart__price").forEach(t=>{t.querySelector(".content__cart__price__fake").addEventListener("mouseover",()=>{const a=Number(t.querySelector(".content__cart__price__main").textContent.replace("сом","")),i=Number(t.querySelector(".content__cart__price__fake").textContent.replace("сом","")),l=i-a,B=Math.round(l/(i/100));s.innerHTML=`<p class="sale_info_percent">Скидка ${B}%</p> <p>-${l} сом</p>`,t.appendChild(s)}),t.querySelector(".content__cart__price__fake").addEventListener("mouseout",()=>{t.removeChild(s)})}),E()},H=()=>{const e=window.document.querySelector(".content__absence__list");e.innerHTML=null,d.map(n=>{e.innerHTML=e.innerHTML+`
        <div class="content__absence__card">
                  <img class="content__absence__card__img" src=${n.img} alt="error" />
                  <div class="content__absence__card__description">
                    <p>${n.title}</p>
                    <p>${n.types?n.types.map(o=>`<span>${o}</span>`).join(""):""}</p>
                  </div>
                  <div class="content__absence__card__manage">
                    <img class="like_hover" src="${S}" alt="error" />
                    <img class="delete_hover" src="${_}" alt="error" />
                  </div>
                </div>
        `}),E()};var F=function(e){return/^[a-zа-яё]$/i.test(e)};const N=e=>{let n=e.target.value;e.data!==null&&(F(n[n.length-1])||n.length===17?e.target.value=n.slice(0,n.length-1):(n.length===1&&n!=="+"&&(e.target.value=`+${n} `),n.length===2&&(e.target.value=`${n} `),n.length===6&&(e.target.value=`${n} `),n.length===10&&(e.target.value=`${n} `),n.length===13&&(e.target.value=`${n} `)))},z=e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),O=()=>{const e=window.document.querySelectorAll(".formInput"),n=window.document.querySelector(".bill__container__order");e.forEach((o,r)=>{const c=()=>{t.style.color="#F55123",o.style.borderColor="#F55123",i.style.color="#F55123",a.style.color="#F55123"},s=()=>{t.style.color="transparent",o.style.borderColor="rgba(0,0,0,0.2)",i.style.color="#9797AF",a.style.color="rgba(0,0,0)"},t=o.querySelector("div"),a=o.querySelector("input"),i=o.querySelector("p");a.addEventListener("focus",()=>{i.style.top="-22px",i.style.fontSize="13px"}),a.addEventListener("blur",()=>{a.value||(i.style.top="0px",i.style.fontSize="16px")}),r!==4?o.querySelector("div").style.color="transparent":a.addEventListener("change",l=>{l.target.value.length!==14&&l.target.value!==""?(c(),t.innerHTML="Проверьте ИНН"):(t.innerHTML="Для таможенного оформления",s(),t.style.color="black")}),r===2&&a.addEventListener("change",l=>{!z(l.target.value)&&l.target.value!==""?(c(),t.innerHTML="Проверьте адрес электронной почты"):s()}),r===3&&(a.addEventListener("input",l=>{N(l)}),a.addEventListener("change",l=>{l.target.value.length!==16&&l.target.value!==""?(c(),t.innerHTML="Формат: +9 999 999 99 99"):s()}))}),n.addEventListener("click",()=>{e.forEach((o,r)=>{const c=o.querySelector("input"),s=o.querySelector("div"),t=o.querySelector("p");if(c.value==="")switch(s.style.color="#F55123",o.style.borderColor="#F55123",t.style.color="#F55123",o.scrollIntoView(),r){case 0:s.innerHTML="Укажите имя";break;case 1:s.innerHTML="Укажите фамилию";break;case 2:s.innerHTML="Укажите почту";break;case 3:s.innerHTML="Укажите номер телефона";break;case 4:s.innerHTML="Укажите ИНН";break}})})},D="/WB_LVL_0/assets/Visa-00b2206c.svg",Q="/WB_LVL_0/assets/Mastercard-485ca106.svg",Z="/WB_LVL_0/assets/Maestro-938ee372.svg",j="/WB_LVL_0/assets/Mir-536cd2da.svg";let p=0;const K=()=>{const e=document.createElement("div");e.classList.add("modal_background"),e.innerHTML=`
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
    <img src="${j}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${D}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${Q}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button></button>
    <img src="${Z}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
  </div>
  
</div>
<button class="modal_container__accept_button">Выбрать</button>
</div>
`,window.document.querySelectorAll(".modal_open_payment").forEach(r=>{r.addEventListener("click",()=>{window.document.body.appendChild(e),window.document.querySelector(".modal_container__close_button").addEventListener("click",()=>{document.body.removeChild(e)}),window.document.querySelector(".modal_container__accept_button").addEventListener("click",()=>{document.body.removeChild(e)});const c=window.document.querySelector(".modal_container__payment_list").querySelectorAll("button");c.forEach((s,t)=>{t===p&&s.classList.add("payment_method_active"),s.addEventListener("click",()=>{p=t,o(),c.forEach(a=>{a.classList.remove("payment_method_active")}),s.classList.add("payment_method_active")})})})});const o=()=>{window.document.querySelector(".bill__container__card").querySelector("img").src=`./assets/${k[p]}.svg`,window.document.querySelector(".content__payment__card").querySelector("img").src=`./assets/${k[p]}.svg`}},R=()=>{const e=document.createElement("div");e.classList.add("modal_background"),e.innerHTML=`
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
            <img src='${_}'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button></button>
                <p>Бишкек, улица Жукеева-Пудовкина, 77/1</p>
            </div>
            <img src='${_}'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button></button>
                <p>Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1</p>
            </div>
            <img src='${_}'/>
        </div>
    </div>
    </div>
  <button class="modal_container__accept_button">Выбрать</button>
  </div>
  `;const n=window.document.querySelectorAll(".adresses_open_payment");e.querySelector(".modal_container").style.width="500px";let o=0;n.forEach(r=>{r.addEventListener("click",()=>{window.document.body.appendChild(e),window.document.querySelector(".modal_container__close_button").addEventListener("click",()=>{document.body.removeChild(e)}),window.document.querySelector(".modal_container__accept_button").addEventListener("click",()=>{document.body.removeChild(e)});const c=window.document.querySelector(".modal_container__delivery_methods").querySelectorAll("button");c.forEach((t,a)=>{t.addEventListener("click",()=>{c.forEach(i=>{i.style.border="2px solid #cb11ac2d"}),t.style.border="2px solid #cb11ac"})});const s=window.document.querySelector(".modal_container__address_list").querySelectorAll("button");s.forEach((t,a)=>{t.addEventListener("click",()=>{o=a,s.forEach(i=>i.classList.remove("payment_method_active")),t.classList.add("payment_method_active"),window.document.querySelector(".content__delivery__address").querySelector("p").innerHTML=$[o],window.document.querySelector(".bill__container__address").innerHTML=$[o]})})})})};M();H();m();O();let h=!0;const L=window.document.querySelector(".content__cart_header").querySelector("span");L.addEventListener("click",()=>{const e=window.document.querySelector(".content__cart"),n=window.document.querySelector(".content__cart_header").querySelector(".checkbox"),o=window.document.querySelector(".content__cart_header").querySelector("p");h?(L.style.rotate="45deg",e.innerHTML=null,n.style.display="none",o.innerHTML=`${d.reduce((r,c)=>r+c.quantity,0)} товаров · ${d.reduce((r,c)=>r+c.price*c.quantity,0)} сом`,o.style.fontWeight="600",h=!1):(L.style.rotate="-135deg",n.style.display="flex",o.innerHTML="Выбрать все",o.style.fontWeight="400",M(),h=!0)});const g=window.document.querySelector(".content__absence_header").querySelector("span");let b=!0;g.addEventListener("click",()=>{const e=window.document.querySelector(".content__absence__list");b?(g.style.rotate="45deg",b=!1,e.innerHTML=null):(g.style.rotate="-135deg",b=!0,H())});const C=window.document.querySelector("#bill_checkbox");y(C);let q=!1;C.addEventListener("click",()=>{q=!q;const e=window.document.querySelector(".bill__container__order");console.log("asdfa"),q?e.innerHTML=`Оплатить ${document.querySelector("#bill_sum").innerHTML}`:e.innerHTML="Заказать"});const A=window.document.querySelector("#cart_checkbox");y(A,d.filter(e=>e.choiced).length===3);let w=d.filter(e=>e.choiced).length===3;A.addEventListener("click",()=>{w?w=!1:(d.map(e=>(e.choiced=!0,e)),M(),m(),w=!0)});E();const v=window.document.querySelector(".content__delivery__note").querySelector("p"),u=document.createElement("div");u.classList.add("modal_free_return");const U=document.createTextNode("Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно");u.appendChild(U);v.addEventListener("mouseover",()=>{v.appendChild(u)});v.addEventListener("mouseout",()=>{v.removeChild(u)});const f=window.document.querySelector(".bill__container__note").querySelector("p");f.addEventListener("mouseover",()=>{f.appendChild(u)});f.addEventListener("mouseout",()=>{f.removeChild(u)});K();R();

var Q=Object.defineProperty;var U=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var k=(e,t,n)=>(U(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const X="/WB_LVL_0/assets/CartTemplate-9ac968b0.png",G="/WB_LVL_0/assets/CartTemplate2-b7b6c6ca.png",J="/WB_LVL_0/assets/CartTemplate3-7eab844b.png",z="/WB_LVL_0/assets/Visa-00b2206c.svg",O="/WB_LVL_0/assets/Mastercard-485ca106.svg",w="/WB_LVL_0/assets/Maestro-938ee372.svg",j="/WB_LVL_0/assets/Mir-536cd2da.svg",i=[{id:1,img:X,title:"Футболка UZcotton мужская",types:["Цвет: белый","Размер:56"],place:"Коледино WB",company:"ООО Вайлдберриз",price:522,fakePrice:1051,quantity:1,reamins:!0,choiced:!0,storage:2},{id:2,img:G,title:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",types:["Цвет: прозрачный"],place:"Коледино WB",company:"ООО Мегапрофстиль",price:10500,fakePrice:14510,quantity:200,reamins:!1,choiced:!0,storage:2008},{id:3,img:J,title:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',place:"Коледино WB",company:"ООО Вайлдберриз",price:247,fakePrice:526,quantity:2,reamins:!0,choiced:!0,storage:2}],V=[j,z,O,w],x=["Бишкек, улица Табышалиева, 57","Бишкек, улица Жукеева-Пудовкина, 77/1","Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"];class Y{constructor(){k(this,"immediatePay",!1);k(this,"choicenPaymentMethod",0)}toggleImmediatePay(){this.immediatePay=!this.immediatePay}getImmediatePay(){return this.immediatePay}setPaymentMethod(t){this.choicenPaymentMethod=t}getPaymentMethod(){return this.choicenPaymentMethod}}const S=new Y,ee=(e,t)=>{if(t.length<3)return-1;e=e%100;const n=e%10;return e>10&&e<20?t[1]:n>1&&n<5?t[2]:n===1?t[0]:t[1]},te=()=>{const e=S.getImmediatePay(),t=document.querySelector(".bill__container__order");e?t.innerHTML=`Оплатить ${document.querySelector("#bill_sum").innerHTML}`:t.innerHTML="Заказать"},y=()=>{let e=i.filter(r=>r.choiced).reduce((r,s)=>r+s.quantity,0),t=i.filter(r=>r.choiced).reduce((r,s)=>r+s.quantity*s.fakePrice,0),n=i.filter(r=>r.choiced).reduce((r,s)=>r+s.quantity*s.price,0);const o=Math.round(n).toLocaleString("ru");document.querySelector("#bill_sum").innerHTML=`${o} сом`,document.querySelector("#bill_fake_sum").innerHTML=`${Math.round(t).toLocaleString("ru")} сом`,document.querySelector("#bill_quantity").innerHTML=`${e.toLocaleString("ru")} ${ee(e,["товар","товаров","товара"])}`,document.querySelector("#bill_sale").innerHTML=`-${Math.round(t-n).toLocaleString("ru")} сом`,te()},D=()=>{document.querySelectorAll(".content__cart__card").forEach((e,t)=>{const n=e.querySelector(".content__cart__functions__quantity").innerHTML;e.querySelectorAll(".content__cart__price__main").forEach(o=>o.innerHTML=`${Math.round(n*i[t].price)} <span>сом</span>`),e.querySelectorAll(".content__cart__price__main__small").forEach(o=>o.innerHTML=`${Math.round(n*i[t].price)} <span>сом</span>`),e.querySelectorAll(".content__cart__price__fake").forEach(o=>o.innerHTML=`${Math.round(n*i[t].fakePrice)} <span>сом</span>`)})},A=(e,t=!1,n)=>{t?(e.classList.remove("checkbox__inactive"),e.classList.add("checkbox__active")):(e.classList.remove("checkbox__active"),e.classList.add("checkbox__inactive")),e.addEventListener("click",()=>{t?(t=!t,e.classList.remove("checkbox__active"),e.classList.add("checkbox__inactive")):(t=!t,e.classList.remove("checkbox__inactive"),e.classList.add("checkbox__active"),n&&n())})},v="/WB_LVL_0/assets/Delete-559680d4.svg",E="/WB_LVL_0/assets/Like-0a484050.svg",ne="/WB_LVL_0/assets/DeleteHover-e6058b1f.svg",B="/WB_LVL_0/assets/LikeHover-466618c9.svg",N=()=>{document.querySelectorAll(".like_hover").forEach(n=>{let o=!1;n.addEventListener("mouseover",()=>{n.src=B}),n.addEventListener("mouseout",()=>{o||(n.src=E)}),n.addEventListener("click",()=>{o?(o=!1,n.src=E):(o=!0,n.src=B)})}),document.querySelectorAll(".delete_hover").forEach(n=>{n.addEventListener("mouseover",()=>{n.src=ne}),n.addEventListener("mouseout",()=>{n.src=v})})},F=(e,t)=>{e.forEach(n=>{const o=document.createElement("div");o.classList.add("content__delivery__items__img_wraper");let r=`<img src="${n.img}" alt="error" />`;n.quantity>1&&(r+=`<span>${n.quantity}</span>`),o.innerHTML=r,t.querySelector(".content__delivery__items").appendChild(o)})},T=()=>{const e=document.querySelector(".content__delivery__info").querySelector("tbody"),t=i.filter(s=>s.choiced);if(e.querySelectorAll(".js__delivery_remove").forEach(s=>{s.remove()}),t.length===0)return;const n=[[],[]];t.forEach(s=>{if(s.quantity>184)return n[1].push({...s,quantity:s.quantity-184}),n[0].push({...s,quantity:184});n[0].push(s)});const o=document.createElement("tr"),r=document.createElement("tr");o.classList.add("js__delivery_remove"),r.classList.add("js__delivery_remove"),o.innerHTML=`
    <td>5—6 февраля</td>
    <td class="content__delivery__items">

    </td>`,r.innerHTML=`
    <td>7—8 февраля</td>
    <td class="content__delivery__items">
  
    </td>`,F(n[0],o),e.appendChild(o),n[1][0]&&(F(n[1],r),e.appendChild(r))},re=()=>{document.querySelectorAll(".js__cart_counter").forEach(e=>{const t=i.filter(n=>n.choiced).length;if(t===0)return e.style.display="none";e.style.display="flex",e.innerHTML=t})};function ce(){for(let e=0;e<i.length;e++)i[e].choiced=!0;g(),y()}const g=()=>{const e=document.querySelector(".content__cart");e.innerHTML=null,i.map((c,d)=>{const u=c.price*c.quantity;let f;u<1e6?f=` <p class="content__cart__price__main"> ${(c.price*c.quantity).toLocaleString("ru")}<span>сом</span></p>`:f=` <p class="content__cart__price__main__small"> ${(c.price*c.quantity).toLocaleString("ru")}<span>сом</span></p>`;const a=document.createElement("div");a.className="content__cart__card",a.innerHTML=` <div class="content__cart__card__left">
    <div class="height_centralize">
      <button class="checkbox"><div></div></button>
      <img
        class="content__cart__card__img"
        src=${c.img}
        alt="error"
      />
      </div>
      <div class="content__cart__item">
      <div class="content__cart__price">
      <p class="content__cart__price__main">${(c.price*c.quantity).toLocaleString("ru")}<span>сом</span></p>
      <p class="content__cart__price__fake">${(c.fakePrice*c.quantity).toLocaleString("ru")}<span>сом</span></p>
    </div>
        <p class="content__cart__item__title">
          ${c.title}
        </p>
        <p class="content__cart__item__type">
          ${c.types?c.types.map(m=>`<span>${m}</span>`).join(""):""}
        </p>
        <p class="content__cart__item__company">${c.place}</p>
        <p class="mobile_hidden content__cart__item__company company_modal">
          ${c.company} <span>i</span>
        </p>
      </div>
    </div>

    <div class="content__cart__card__right">
      <div class="content__cart__functions">
        <div class="content__cart__functions__summarizer">
          <button class='content__cart__functions__minus'>−</button>
          <p class="content__cart__functions__quantity">${c.quantity}</p>
          <button class='content__cart__functions__plus'>+</button>
        </div>
        ${c.reamins?'<p class="content__cart__functions__remains">Осталось 2шт.</p>':""}
        <div class="content__cart__functions__manage">
          <img class="like_hover" src="${c.favorite?B:E}" alt="error" />
          <img class="delete_hover" src="${v}" alt="error" />
        </div>
      </div>
      <div class="content__cart__price">
       ${f}
        <p class="content__cart__price__fake">${(c.fakePrice*c.quantity).toLocaleString("ru")} <span>сом</span></p>
      </div>`,e.appendChild(a),a.querySelectorAll(".content__cart__price").forEach(m=>{m.querySelector(".content__cart__price__fake").addEventListener("mouseover",()=>{const W=c.fakePrice-c.price,K=Math.round(W/(c.fakePrice/100));s.innerHTML=`<p class="sale_info_percent">Скидка ${K}%</p> <p>-${W.toLocaleString("ru")} сом</p>`,m.appendChild(s)}),m.querySelector(".content__cart__price__fake").addEventListener("mouseout",()=>{m.removeChild(s)})}),a.querySelector(".delete_hover").addEventListener("click",()=>{i.splice(d,1),g()});const _=a.querySelector(".content__cart__functions__summarizer");let l=c.quantity;const L=_.querySelector(".content__cart__functions__minus");l===1&&(L.style.color="rgba(0,0,0,0.2)"),L.addEventListener("click",()=>{l>1&&(l--,i[d].quantity--,l===1&&(L.style.color="rgba(0,0,0,0.2)"),_.querySelector("p").innerHTML=l,D(),y(),T())}),_.querySelector(".content__cart__functions__plus").addEventListener("click",()=>{l&&l<c.storage&&(l++,i[d].quantity++,L.style.color="rgba(0,0,0,1)",_.querySelector("p").innerHTML=l,D(),y(),T())})});let t=document.querySelector("#cart_checkbox");const n=t.cloneNode(!0);t.replaceWith(n),t=n,A(t,i.filter(c=>c.choiced).length===i.length,ce),e.querySelectorAll(".checkbox").forEach((c,d)=>{A(c,i[d].choiced),c.addEventListener("click",()=>{i[d].choiced=!i[d].choiced,y(),g()})});const o=document.querySelectorAll(".company_modal"),r=document.createElement("div");r.classList.add("modal_company_info"),o.forEach(c=>{c.addEventListener("mouseover",()=>{r.innerHTML=`<p class="company_info_header">${c.textContent.replace("i","")}</p>
    <p class="company_info_ogrn">ОГРН: 5167746237148</p>
    <p class="company_info_address">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</p>
    `,c.appendChild(r)}),c.addEventListener("mouseout",()=>{c.removeChild(r)})});const s=document.createElement("div");s.classList.add("modal_sale_info"),N(),re(),T()},Z=()=>{const e=document.querySelector(".content__absence__list");e.innerHTML=null,i.map(t=>{const n=document.createElement("div");n.classList.add("content__absence__card"),n.innerHTML=` <img class="content__absence__card__img" src=${t.img} alt="error" />
    <div class="content__absence__card__description">
      <p>${t.title}</p>
      <p>${t.types?t.types.map(o=>`<span>${o}</span>`).join(""):""}</p>
    </div>
    <div class="content__absence__card__manage">
      <img class="like_hover" src="${E}" alt="error" />
      <img class="delete_hover" src="${v}" alt="error" />
    </div>`,n.querySelector(".delete_hover").addEventListener("click",()=>n.remove()),e.appendChild(n)}),N()};var oe=function(e){return/^[a-zа-яё]$/i.test(e)};const se=e=>{let t=e.target.value;e.data!==null&&(oe(t[t.length-1])||t.length===17?e.target.value=t.slice(0,t.length-1):(t.length===1&&t!=="+"&&(e.target.value=`+${t} `),t.length===2&&(e.target.value=`${t} `),t.length===6&&(e.target.value=`${t} `),t.length===10&&(e.target.value=`${t} `),t.length===13&&(e.target.value=`${t} `)))},ae=e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),q=e=>{const t=e.querySelector("div"),n=e.querySelector("input"),o=e.querySelector("p");t.style.color="#F55123",e.style.borderColor="#F55123",o.style.color="#F55123",n.style.color="#F55123"},b=e=>{const t=e.querySelector("div"),n=e.querySelector("input"),o=e.querySelector("p");t.style.color="transparent",e.style.borderColor="rgba(0,0,0,0.2)",o.style.color="#9797AF",n.style.color="rgba(0,0,0)"},ie=()=>{const e=document.querySelectorAll(".formInput"),t=document.querySelector(".bill__container__order");e.forEach(a=>{const _=a.querySelector("input"),l=a.querySelector("p");_.addEventListener("focus",()=>{l.style.top="-22px",l.style.fontSize="13px"}),_.addEventListener("blur",()=>{_.value||(l.style.top="0px",l.style.fontSize="16px")}),a.querySelector("div").style.color="transparent"});const n=document.querySelector("#INNInput"),o=n.querySelector("div");n.addEventListener("input",a=>{const _=a.target.value;a.target.value=_.replace(/[^\d]/g,""),a.target.value=_.slice(0,14)}),n.querySelector("div").style.color="black",n.addEventListener("change",a=>{const _=a.target.value;_.length!==14&&_!==""?(q(n),o.innerHTML="Проверьте ИНН"):(o.innerHTML="Для таможенного оформления",b(n),o.style.color="black")});const r=document.querySelector("#emailInput"),s=r.querySelector("input"),c=r.querySelector("div");s.addEventListener("change",a=>{!ae(a.target.value)&&a.target.value!==""?(q(r),c.innerHTML="Проверьте адрес электронной почты"):b(r)});const d=document.querySelector("#phoneInput"),u=d.querySelector("input"),f=d.querySelector("div");u.addEventListener("input",a=>{se(a)}),u.addEventListener("change",a=>{a.target.value.length!==16&&a.target.value!==""?(q(d),f.innerHTML="Формат: +9 999 999 99 99"):b(d)}),t.addEventListener("click",()=>{e.forEach(a=>{const _=a.querySelector("input"),l=a.querySelector("div");if(b(a),_.value==="")switch(q(a),a.scrollIntoView(),a.getAttribute("id")){case"nameInput":l.innerHTML="Укажите имя";break;case"sernameInput":l.innerHTML="Укажите фамилию";break;case"emailInput":l.innerHTML="Укажите почту";break;case"phoneInput":l.innerHTML="Укажите номер телефона";break;case"INNInput":l.innerHTML="Укажите ИНН";break}})})};let p=0;const le=()=>{const e=document.createElement("div");e.classList.add("modal_background"),e.innerHTML=`
<div class="modal_container">
<button class="modal_container__close_button">
  <span></span>
  <span></span>
</button>
<div>
  <h4>Способ оплаты</h4>
  <div class="modal_container__payment_list">
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${j}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${z}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${O}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
    <div class="modal_container__payment_method">
    <button class="modal_container__radio"></button>
    <img src="${w}" alt="error"/>
    <p>1234 56•• •••• 1234</p>
    </div>
  </div>
  
</div>
<button class="modal_container__accept_button">Выбрать</button>
</div>
`,document.querySelectorAll(".modal_open_payment").forEach(o=>{o.addEventListener("click",()=>{document.body.appendChild(e),p=S.getPaymentMethod(),document.querySelector(".modal_container__close_button").addEventListener("click",()=>{e.remove()}),document.querySelector(".modal_container__accept_button").addEventListener("click",()=>{S.setPaymentMethod(p),n(),e.remove()});const r=document.querySelectorAll(".modal_container__payment_method");r.forEach((s,c)=>{s.querySelector("button").classList.remove("payment_method_active"),c===p&&s.querySelector("button").classList.add("payment_method_active"),s.addEventListener("click",()=>{p=c,r.forEach(d=>{d.querySelector("button").classList.remove("payment_method_active")}),s.querySelector("button").classList.add("payment_method_active")})})})});const n=()=>{document.querySelector(".bill__container__card").querySelector("img").src=`${V[p]}`,document.querySelector(".content__payment__card").querySelector("img").src=`${V[p]}`}},de=()=>{const e=document.createElement("div");e.classList.add("modal_background"),e.innerHTML=`
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
                <button class="modal_container__radio payment_method_active"></button>
                <p>Бишкек, улица Табышалиева, 57</p>
            </div>
            <img src='${v}'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button class="modal_container__radio"></button>
                <p>Бишкек, улица Жукеева-Пудовкина, 77/1</p>
            </div>
            <img src='${v}'/>
        </div>
        <div class="modal_continaer__delivery_adress">
            <div>
                <button class="modal_container__radio"></button>
                <p>Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1</p>
            </div>
            <img src='${v}'/>
        </div>
    </div>
    </div>
  <button class="modal_container__accept_button">Выбрать</button>
  </div>
  `;const t=document.querySelectorAll(".adresses_open_payment");e.querySelector(".modal_container").style.width="500px";let n=0;t.forEach(o=>{o.addEventListener("click",()=>{document.body.appendChild(e),document.querySelector(".modal_container__close_button").addEventListener("click",()=>{document.body.removeChild(e)}),document.querySelector(".modal_container__accept_button").addEventListener("click",()=>{document.body.removeChild(e),document.querySelector(".content__delivery__address").querySelector("p").innerHTML=x[n],document.querySelector(".bill__container__address").innerHTML=x[n]});const r=document.querySelector(".modal_container__delivery_methods").querySelectorAll("button");r.forEach(c=>{c.addEventListener("click",()=>{r.forEach(d=>{d.style.border="2px solid #cb11ac2d"}),c.style.border="2px solid #cb11ac"})});const s=document.querySelectorAll(".modal_continaer__delivery_adress");s.forEach((c,d)=>{c.addEventListener("click",()=>{n=d,s.forEach(u=>u.querySelector("button").classList.remove("payment_method_active")),c.querySelector("button").classList.add("payment_method_active")}),c.querySelector("img").addEventListener("click",()=>{c.remove()})})})})};g();Z();y();ie();let H=!0;const P=document.querySelector(".content__cart_header").querySelector("span");P.addEventListener("click",()=>{const e=document.querySelector(".content__cart"),t=document.querySelector(".content__cart_header").querySelector(".checkbox"),n=document.querySelector(".content__cart_header").querySelector("p");H?(P.style.rotate="45deg",e.innerHTML=null,t.style.display="none",n.innerHTML=`${i.reduce((o,r)=>o+r.quantity,0)} товаров · ${i.reduce((o,r)=>o+r.price*r.quantity,0)} сом`,n.style.fontWeight="600",H=!1):(P.style.rotate="-135deg",t.style.display="flex",n.innerHTML="Выбрать все",n.style.fontWeight="400",g(),H=!0)});const I=document.querySelector(".content__absence_header").querySelector("span");let C=!0;I.addEventListener("click",()=>{const e=document.querySelector(".content__absence__list");C?(I.style.rotate="45deg",C=!1,e.innerHTML=null):(I.style.rotate="-135deg",C=!0,Z())});const R=document.querySelector("#bill_checkbox");A(R);R.addEventListener("click",()=>{S.toggleImmediatePay(),y()});N();const M=document.querySelector(".content__delivery__note").querySelector("p"),h=document.createElement("div");h.classList.add("modal_free_return");const _e=document.createTextNode("Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно");h.appendChild(_e);M.addEventListener("mouseover",()=>{M.appendChild(h)});M.addEventListener("mouseout",()=>{M.removeChild(h)});const $=document.querySelector(".bill__container__note").querySelector("p");$.addEventListener("mouseover",()=>{$.appendChild(h)});$.addEventListener("mouseout",()=>{$.removeChild(h)});le();de();

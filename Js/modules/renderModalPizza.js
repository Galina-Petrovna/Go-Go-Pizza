import { changeFirstUpperCase } from "./helpers.js";

export const renderModalPizza = ({ id, images, name, price, toppings }) => {
 const modalPizzaMain = document.querySelector('.modal-pizza__main');
 modalPizzaMain.textContent = '';

 let size = Object.keys(price)[0]
//  console.log('size: ', size);

 const picture = document.createElement('picture');
 const source = document.createElement('source');
 source.srcset = images[1];
 source.type = 'image/webp';

 const img = document.createElement('img');
 img.classList.add('modal-pizza__img');
 img.src = images [0];
 img.alt = name.ru;
 picture.append(source, img);

const title = document.createElement('h2');
title.classList.add('modal-pizza__title');
title.textContent = changeFirstUpperCase(name.ru);

const toppingsElement = document.createElement('p');
toppingsElement.classList.add('modal-pizza__toppings');
toppingsElement.textContent = changeFirstUpperCase(toppings.ru);

const priceSizeInfo = document.createElement('p');
priceSizeInfo.classList.add('modal-pizza__info');

const priceElement = document.createElement('span');
priceElement.classList.add('modal-pizza__price');
const slashElement = document.createElement('span');
slashElement.textContent = '/'

const sizeElement = document.createElement('span');
sizeElement.classList.add('modal-pizza__size');

priceSizeInfo.append(priceElement, slashElement, sizeElement);

  const  form = document.createElement('div');
  form.classList.add('modal-pizza__form');

  const groupFieldset = document.createElement('div');
  groupFieldset.classList.add('.modal-pizza__group-fieldset');

const fieldCrust = document.createElement('fieldset');
fieldCrust.classList.add('.modal-pizza__fieldset');


const fieldSize = document.createElement('fieldset');
fieldSize.classList.add('.modal-pizza__fieldset');

groupFieldset.append(fieldCrust, fieldSize)

const addToCartBtn = document.createElement('button');

form.append(groupFieldset, addToCartBtn)

 modalPizzaMain.append(picture, title, toppingsElement,priceSizeInfo, form)
}



{/* 


<form class="modal-pizza__form" >
    <div class="modal-pizza__group-fieldset">
        <fieldset class="modal-pizza__fieldset">
            <input class="modal-pizza__radio"  id="thick" type="radio" name="crust" value="thick"> 
            <Label class="modal-pizza__label" for="thick">Пышное тесто</Label>

            <input class="modal-pizza__radio"  id="thin" type="radio" name="crust" value="thin" checked> 
            <Label class="modal-pizza__label" for="thin">Тонкое тесто</Label>

        </fieldset>

        <fieldset class="modal-pizza__fieldset">
            <input class="modal-pizza__radio"  id="25cm" type="radio" name="size" value="25cm" checked> 
            <Label class="modal-pizza__label" for="25cm">25 см</Label>

            <input class="modal-pizza__radio"  id="20cm" type="radio" name="size" value="20cm"> 
            <Label class="modal-pizza__label" for="20cm">30 см</Label>

            <input class="modal-pizza__radio"  id="35cm" type="radio" name="size" value="35cm"> 
            <Label class="modal-pizza__label" for="35cm">35 см</Label>

        </fieldset>
    </div>
    

    <button class="modal-pizza__add-cart">В корзину</button>
</form>

<button class="modal__close">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10.8333" width="0.851136" height="15.3204" transform="rotate(45 10.8333 0)" fill="#C1AB91"/>
        <rect y="0.601837" width="0.851136" height="15.3204" transform="rotate(-45 0 0.601837)" fill="#C1AB91"/>
    </svg>
</button> */}
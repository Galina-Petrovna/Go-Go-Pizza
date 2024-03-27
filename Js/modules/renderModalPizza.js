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

 modalPizzaMain.append(picture)
}



{/* <img class="modal-pizza__img" src="Img/pizza-capricciosa-view-from-above-without-backgrou.png" alt="Капричоза">
<h2 class="modal-pizza__title">Капричоза</h2>

<p class="modal-pizza__toppings">Грибы, сыр</p>

<p class="modal-pizza__info">
    <span class="modal-pizza__price">350</span>
    <span>/</span>
    <span class="modal-pizza__size"> 25 см</span>
</p>

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
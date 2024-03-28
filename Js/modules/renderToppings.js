import { getData } from "./getData.js";
import { renderPizzas } from "./renderPizzas.js";
import { changeFirstUpperCase } from "./helpers.js";

export const renderToppings = async () => {
    const { en: enToppings, ru: ruToppings} = await getData(
        'https://go-go-pizza-api-5rt4.onrender.com/api/toppings');
    const toppingsList = document.querySelector('.toppings__list');
    toppingsList.textContent = '';

    const items = enToppings.map((enName, i) => {
        const item = document.createElement('li');
        item.classList.add('toppings__item');
        item.innerHTML = `
            <input class="toppings__checkbox" id="${enName}" type="checkbox" name="topping" value="${enName}"> 
            <Label class="toppings__label" for="${enName}">${changeFirstUpperCase(ruToppings[i])}</Label>
        `

        return item;
    });

    toppingsList.append(...items);

    const itemReset = document.createElement('li');
    itemReset.classList.add('toppings__item');
    const btnReset = document.createElement('button');
    btnReset.classList.add('toppings__reset');

    btnReset.textContent = 'Сбросить'
    btnReset.type = 'reset';
    itemReset.append(btnReset);

    

    const toppingForm = document.querySelector('.toppings__form');

    toppingForm.addEventListener('change', (event) => {
        const formData = new FormData(toppingForm);
        const checkedToppings = [];

        for (const [, value] of formData.entries()) {
            checkedToppings.push(value)
        }

        renderPizzas(checkedToppings);

        if (checkedToppings.length) {
            toppingsList.append(itemReset);
         } else {
            itemReset.remove();
         }
    });

    btnReset.addEventListener('click', () => {
        itemReset.remove();
        toppingForm.reset();
        renderPizzas();
    });


}


const toppingsToogle = () => {
    const toppingsButton = document.querySelector('.toppings__button');
    const toppingsList = document.querySelector('.toppings__list');

    toppingsButton.addEventListener('click', () => {
        if (!toppingsList.classList.contains('toppings__list_show')) {
            toppingsList.classList.add('toppings__list_show');
            toppingsButton.classList.add('toppings__button_active');

            toppingsList.style.maxHeight = toppingsList.scrollHeight + "px";
        } else {
            toppingsButton.classList.remove ('toppings__button_active');
            toppingsList.style.maxHeight = null;
        

        setTimeout(() => {
            toppingsList.classList.remove('toppings__list_show');
        }, 300) 
    } 
    
    });
}

const getPizzas = async () => {
    try {
        const response = await fetch('https://elderly-scrawny-radius.glitch.me/Api/products');
        if (!response.ok) {
            throw new Error ('Failled')
        }

        return await response.json()
    } catch (error) {
        console.error(`Error fetchig pizzza products: ${error}`)
    }
};
const createCard = (data) => {
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `
    <picture>
    <source srcset="${data.images[1]}" type="image/webp">
        <img class="card__image" src="${data.images[1]}" alt="${data.name.ru}">

    </picture>
                           
    <div class="card__content">
        <h3 class="card__title">${data.name.ru}</h3>
        <p class="card__info">
            <span class="card__price">480 ₽</span>
            <span>/</span>
            <span card__weight>25 см</span>
        </p>
    
        <button class="card__button">Выбрать</button>
    </div>
    `;
    return card;
};

const renderPizzas = async () => {
    const pizzas = await getPizzas();
    const pizzaList = document.querySelector('.pizza__list');
    pizzaList.textContent = '';

    const items = pizzas.map((data) => {
        const item = document.createElement('li');
        item.classList.add('pizza__item');

        const card = createCard(data);
        item.append(card);

        return item;
    })

    pizzaList.append(...items);
}

const init = () => {
    toppingsToogle();

    renderPizzas();
}

init();

    
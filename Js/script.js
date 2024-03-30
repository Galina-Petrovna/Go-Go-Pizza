import { modalController } from "./modules/modalController.js";
import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingsToogle } from "./modules/toppingToggle.js";
import { renderCart } from "./modules/renderCart.js";

const init = () => {
    toppingsToogle();
    renderToppings();
    renderPizzas();
    modalController({
        modal: '.modal-cart',
        btnOpen: '.header__cart',
        btnClose: '.modal__close',
        cbOpen() {
            renderCart();
        }
    })
}

init();

    
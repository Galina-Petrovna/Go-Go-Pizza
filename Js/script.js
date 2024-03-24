import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingsToogle } from "./modules/toppingToggle.js";






const init = () => {
    toppingsToogle();
    renderToppings();

    renderPizzas();
}

init();

    
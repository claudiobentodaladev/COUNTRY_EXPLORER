import { elements } from "./elementsHtml.mjs";

export function countryCardHandler(data) {
    elements.coutryCards.container.addEventListener("click", (event) => {
        const item = event.target.closest(".coutry-cards");

        if (!item || !elements.coutryCards.container.contains(item)) return;

        console.log(item);
    });
}
import { detailHTML } from "../detail.mjs";
import { elements } from "./elementsHtml.mjs";

export function countryCardHandler(data) {
    elements.coutryCards.container.addEventListener("click", async (event) => {
        const item = event.target.closest(".coutry-cards");

        if (!item || !elements.coutryCards.container.contains(item)) return;

        elements.main.innerHTML = detailHTML(data);
    });
}

import { detailHTML } from "../detail.mjs";
import { elements } from "./elementsHtml.mjs";

export function countryCardHandler(data) {
    elements.coutryCards.container.addEventListener("click", async (event) => {
        const item = event.target.closest(".coutry-cards");

        if (!item) return;

        const countryName = item.querySelector("h1").textContent;

        const country = data.find(
            country => country.name.official === countryName
        );

        if (!country) return;

        elements.main.innerHTML = await detailHTML(country);
    });
}

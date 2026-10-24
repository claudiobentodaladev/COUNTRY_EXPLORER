import { elements } from "./elementsHtml.mjs";
import { getFormattedNames } from "./getFormattedNames.mjs";

export function countryCardHandler(data) {
    elements.coutryCards.container.addEventListener("click", (event) => {
        const item = event.target.closest(".coutry-cards");

        if (!item || !elements.coutryCards.container.contains(item)) return;

       // const { formattedCurrencies, formattedLanguages } = getFormattedNames(data)

        console.log(item);
    });
}
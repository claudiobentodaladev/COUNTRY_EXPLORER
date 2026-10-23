import { elements } from "./elementsHtml.mjs";
import { filterData } from "./filterData.mjs";
import { renderCountriesArray, renderCountriesNumber } from "./renderCountries.mjs";

export function formHandler(type, value) {
    elements.coutryCardsContainer.innerHTML = "";

    if (value == "" || value == "none" || value == 0) {
        renderCountriesNumber();
    }
    renderCountriesArray(filterData(type, value));
}
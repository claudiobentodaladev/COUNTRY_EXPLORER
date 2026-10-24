import { renderCountriesNumber, renderCountriesArray } from "./scripts/renderCountries.mjs";
import { filterData } from "./scripts/filterData.mjs";
import { elements } from "./scripts/elementsHtml.mjs";
import { countryCardHandler } from "./scripts/countryCardHandler.mjs";
import { data } from "./data.js";
import { backButtonHandler } from "./scripts/backButtonHandler.mjs";

const { mostPopulateCountry, allRegions } = renderCountriesNumber();

allRegions.map((region) => {
    elements.form.iRegion.innerHTML += `<option value="${region}">${region}</option>`;
});

countryCardHandler(data);
backButtonHandler();

elements.showMore.addEventListener("click", () => {
    const Countrychild = {
        count: elements.coutryCards.container.childElementCount,
        html: elements.coutryCards.container.getHTML()
    }

    elements.coutryCards.container.innerHTML = "";

    renderCountriesNumber(Countrychild.count + 10);
})

elements.form.iCountryName.addEventListener("input", () => {
    const value = elements.form.iCountryName.value

    elements.coutryCards.container.innerHTML = "";
    elements.form.iRegion.value = "none";
    elements.form.iPopulation.value = "0";

    if (value == "") renderCountriesNumber();
    elements.showMore.style.display = "none";
    renderCountriesArray(filterData("name", value));
});
elements.form.iRegion.addEventListener("change", () => {
    const value = elements.form.iRegion.value;

    elements.coutryCards.container.innerHTML = "";
    elements.form.iCountryName.value = "";
    elements.form.iPopulation.value = "";

    elements.showMore.style.display = "none";

    if (value === "none") {
        renderCountriesNumber();
        elements.showMore.style.display = "block";
        return;
    }

    renderCountriesArray(filterData("region", value));
});
elements.form.iPopulation.addEventListener("input", () => {
    const value = elements.form.iPopulation.value;

    elements.coutryCards.container.innerHTML = "";
    elements.form.iCountryName.value = "";
    elements.form.iRegion.value = "none";

    if (value == "0") renderCountriesNumber();
    elements.showMore.style.display = "none";
    renderCountriesArray(filterData("population", Number(value)));
});

elements.maxPopulation.innerText += ` ${mostPopulateCountry}`;
elements.form.iPopulation.max = mostPopulateCountry + 1;

import { renderCountriesNumber, renderCountriesArray } from "./scripts/renderCountries.mjs";
import { filterData } from "./scripts/filterData.mjs";
import { elements } from "./scripts/elementsHtml.mjs";

const { mostPopulateCountry, allRegions } = renderCountriesNumber();

allRegions.map((region) => {
    elements.form.iRegion.innerHTML += `<option value="${region}">${region}</option>`;
});

elements.showMore.addEventListener("click", () => {
    const Countrychild = {
        count: elements.coutryCardsContainer.childElementCount,
        html: elements.coutryCardsContainer.getHTML()
    }

    elements.coutryCardsContainer.innerHTML = "";

    renderCountriesNumber(Countrychild.count + 10);
})

elements.form.iCountryName.addEventListener("input", () => {
    const value = elements.form.iCountryName.value;

    elements.coutryCardsContainer.innerHTML = "";
    elements.form.iRegion.value = "none";
    elements.form.iPopulation.value = "0";

    if (value == "") renderCountriesNumber();
    elements.showMore.style.display = "none";
    renderCountriesArray(filterData("name", value));
});
elements.form.iRegion.addEventListener("input", () => {
    const value = elements.form.iRegion.value;

    elements.coutryCardsContainer.innerHTML = "";
    elements.form.iCountryName.value = "";
    elements.form.iPopulation.value = "0";

    if (value == "none") renderCountriesNumber();
    elements.showMore.style.display = "none";
    renderCountriesArray(filterData("region", value));
});
elements.form.iPopulation.addEventListener("input", () => {
    const value = elements.form.iPopulation.value;

    elements.coutryCardsContainer.innerHTML = "";
    elements.form.iCountryName.value = "";
    elements.form.iRegion.value = "0";

    if (value == "0") renderCountriesNumber();
    elements.showMore.style.display = "none";
    renderCountriesArray(filterData("population", Number(value)));
});

elements.maxPopulation.innerText += ` ${mostPopulateCountry}`;
elements.form.iPopulation.max = mostPopulateCountry;

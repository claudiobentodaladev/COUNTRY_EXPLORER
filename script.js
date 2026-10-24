import { renderCountriesArray } from "./scripts/renderCountries.mjs";
import { filterData, validateName, validatePopulation, maxPopulation } from "./scripts/filterData.mjs";
import { elements } from "./scripts/elementsHtml.mjs";
import { countryCardHandler } from "./scripts/countryCardHandler.mjs";
import { backButtonHandler } from "./scripts/backButtonHandler.mjs";
import { detailHTML } from "./detail.mjs";
import { data } from "./data.js";

const INITIAL_COUNT = 12;
const SHOW_MORE_COUNT = 10;

const state = { name: "", region: "none", population: null, visible: INITIAL_COUNT };

/* ---------- Main page ---------- */

function render() {
    const filtered = filterData(state);

    renderCountriesArray(filtered.slice(0, state.visible));

    elements.noResults.hidden = filtered.length > 0;
    elements.showMore.hidden = state.visible >= filtered.length;
}

function setError(element, input, message) {
    element.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
}

[...new Set(data.map((country) => country.region))].forEach((region) => {
    elements.form.iRegion.insertAdjacentHTML("beforeend", `<option value="${region}">${region}</option>`);
});

elements.maxPopulation.textContent = `Max: ${maxPopulation}`;
elements.form.iPopulation.max = maxPopulation;
elements.form.element.addEventListener("submit", (event) => event.preventDefault());

elements.form.iCountryName.addEventListener("input", () => {
    const value = elements.form.iCountryName.value;
    const error = validateName(value);

    setError(elements.errors.name, elements.form.iCountryName, error);
    if (error) return;

    state.name = value;
    state.visible = INITIAL_COUNT;
    render();
});

elements.form.iRegion.addEventListener("change", () => {
    state.region = elements.form.iRegion.value;
    state.visible = INITIAL_COUNT;
    render();
});

elements.form.iPopulation.addEventListener("input", () => {
    const input = elements.form.iPopulation;
    const error = validatePopulation(input);

    setError(elements.errors.population, input, error);
    if (error) return;

    state.population = input.value === "" ? null : Number(input.value);
    state.visible = INITIAL_COUNT;
    render();
});

elements.showMore.addEventListener("click", () => {
    state.visible += SHOW_MORE_COUNT;
    render();
});

/* ---------- Routing: Main page <-> Details page ---------- */

function route() {
    const match = location.hash.match(/^#\/country\/(.+)$/);
    let country;

    if (match) {
        let official = match[1];
        try { official = decodeURIComponent(official); } catch { /* keep raw value */ }
        country = data.find((item) => item.name.official === official);
    }

    elements.mainViews.forEach((view) => (view.hidden = !!country));
    elements.detailViews.forEach((view) => (view.hidden = !country));

    if (country) {
        elements.noResults.hidden = true;
        elements.detail.innerHTML = detailHTML(country);
        window.scrollTo(0, 0);
    } else {
        render();
    }
}

countryCardHandler();
backButtonHandler();
window.addEventListener("hashchange", route);

render();
route();

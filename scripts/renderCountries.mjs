import { elements } from "./elementsHtml.mjs";
import { data } from "../data.js";

export function renderCountries(add = 12) {
    let mostPopulation = 0;

    data.map((country, index) => {
        if (index < add) {
            elements.coutryCardsContainer.innerHTML += `
            <article class="coutry-cards">
                <img src="${country.flags.png}" alt="${country.name.common} flag">
                <h1>${country.name.official}</h1>
                <div class="country-info">
                    <span>Population: ${country.population}</span>
                    <span>Capital: ${country.capital}</span>
                    <span>Region: ${country.region}</span>
                </div>
            </article>
            `;
        }

        elements.form.iRegion.innerHTML += `<option value="${country.name.common}">${country.name.common}</option>`;

        if (country.population > mostPopulation) {
            mostPopulation = country.population
        }
    });

    return { mostPopulation }
}
import { elements } from "./elementsHtml.mjs";
import { data } from "../data.js";

export function renderCountriesNumber(add = 12) {
    let allRegions = [];
    let mostPopulateCountry = 0;

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

        if (!allRegions.includes(country.region)) {
            allRegions.push(country.region)
        }

        if (country.population > mostPopulateCountry) {
            mostPopulateCountry = country.population
        }
    });

    return { mostPopulateCountry, allRegions }
}

export function renderCountriesArray(data = []) {
    data.map((country) => {
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
    });
}
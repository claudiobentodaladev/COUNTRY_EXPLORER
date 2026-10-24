import { elements } from "./elementsHtml.mjs";
import { escapeHtml } from "./escapeHtml.mjs";

export function renderCountriesArray(countries = []) {
    elements.coutryCards.container.innerHTML = countries
        .map((country) => `
            <article class="coutry-cards" tabindex="0" data-official="${escapeHtml(country.name.official)}">
                <img src="${escapeHtml(country.flags.png)}" alt="${escapeHtml(country.name.common)} flag">
                <h1>${escapeHtml(country.name.official)}</h1>
                <div class="country-info">
                    <span>Population: ${country.population}</span>
                    <span>Capital: ${escapeHtml(country.capital)}</span>
                    <span>Region: ${escapeHtml(country.region)}</span>
                </div>
            </article>
        `)
        .join("");
}

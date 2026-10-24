import { getFormattedNames } from "./scripts/getFormattedNames.mjs";
import { escapeHtml } from "./scripts/escapeHtml.mjs";

export function detailHTML(data) {
    const { formattedCurrencies, formattedLanguages } = getFormattedNames(data);

    return `
        <h1>${escapeHtml(data.name.official)}</h1>
        <img src="${escapeHtml(data.flags.png)}" alt="${escapeHtml(data.name.common)} flag" />
        <div class="country-info">
            <span>Population: ${data.population}</span>
            <span>Region: ${escapeHtml(data.region)}</span>
            <span>Sub region: ${escapeHtml(data.subregion)}</span>
            <span>Capital: ${escapeHtml(data.capital)}</span>
            <span>Currencies: ${escapeHtml(formattedCurrencies)}</span>
            <span>Languages: ${escapeHtml(formattedLanguages)}</span>
        </div>
    `;
}

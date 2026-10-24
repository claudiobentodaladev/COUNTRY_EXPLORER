import { getFormattedNames } from "./scripts/getFormattedNames.mjs";

export async function detailHTML(data) {
    const { formattedCurrencies, formattedLanguages } = getFormattedNames(data);

    return `
        <section>
            <button type="button">back</button>
        </section>
        <section id="detail">
            <h1>${data.name.official}</h1>
            <img src="${data.flags.png}" alt="${data.name.common} flag" />
            <div class="country-info">
                <span>Population: ${data.population}</span>
                <span>Region: ${data.region}</span>
                <span>Sub region: ${data.subregion}</span>
                <span>Capital: ${data.capital}</span>
                <span>Currencies: ${formattedCurrencies}</span>
                <span>Languages: ${formattedLanguages}</span>
            </div>
        </section>
    `;
}

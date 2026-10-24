import { data } from "../data";

function formattedNames(data) {
    let formatted = "";

    data.map((value, index) => {
        formatted += `${value.name}, `

        if (data.length - 1 === index) {
            formatted += value.name
        }
    })
}

export function getFormattedNames(country) {
    let formattedLanguages, formattedCurrencies = "";

    formattedLanguages = formattedNames(country.languages);
    formattedCurrencies = formattedNames(country.currencies);

    return { formattedLanguages, formattedCurrencies };
}

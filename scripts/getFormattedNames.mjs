function formattedNames(items = []) {
    return items.map((item) => item.name).join(", ");
}

export function getFormattedNames(country) {
    return {
        formattedLanguages: formattedNames(country.languages),
        formattedCurrencies: formattedNames(country.currencies)
    };
}

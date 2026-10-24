import { data } from "../data.js";

// Letters (incl. accents such as Å), spaces, hyphens, apostrophes, dots, commas and parentheses.
const NAME_PATTERN = /^[\p{L}\p{M} '’().,-]*$/u;

export const maxPopulation = Math.max(...data.map((country) => country.population));

// Each validator returns an error message, or "" when the input is valid.
export function validateName(value) {
    return NAME_PATTERN.test(value)
        ? ""
        : "Invalid country name. Use only letters, spaces, hyphens or apostrophes.";
}

export function validatePopulation(input) {
    if (input.validity.badInput) return "Invalid population. Enter a whole number.";
    if (input.value === "") return "";

    const number = Number(input.value);

    if (!Number.isInteger(number) || number < 0) {
        return "Invalid population. Enter a whole number of 0 or more.";
    }
    if (number > maxPopulation) {
        return `Invalid population. The value cannot exceed ${maxPopulation}.`;
    }
    return "";
}

// All active filters are combined (AND).
export function filterData({ name = "", region = "none", population = null }) {
    const term = name.trim().toLowerCase();

    return data.filter((country) => {
        const matchesName =
            term === "" ||
            country.name.common.toLowerCase().includes(term) ||
            country.name.official.toLowerCase().includes(term);
        const matchesRegion = region === "none" || country.region === region;
        const matchesPopulation = population === null || country.population >= population;

        return matchesName && matchesRegion && matchesPopulation;
    });
}

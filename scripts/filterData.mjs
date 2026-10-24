import { data } from "../data.js";

const NAME_PATTERN = /^[\p{L}\p{M} '’().,-]*$/u;

export const maxPopulation = Math.max(...data.map((country) => country.population));

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

import { data } from "../data.js";

export function filterData(type, inputValue) {
    let filteredData = [];

    switch (type) {
        case "name":
            const regex = new RegExp(/^[a-zA-Z -]*$/);
            if (!regex.test(inputValue)) filteredData = [];

            filteredData = data.filter((country) => country.name.common.toLowerCase().startsWith(inputValue.toLowerCase()));
            break;

        case "region":
            filteredData = data.filter((country) => country.region === inputValue);
            break;

        case "population":
            filteredData = data.filter((country) => inputValue < country.population);
            break;
    }

    return filteredData;

}

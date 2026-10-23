import { data } from "./data.js";

var elements = {
    coutryCardsContainer: document.querySelector("#coutry-cards-container"),
    maxPopulation: document.querySelector("#iMaxPopulation"),
    iPopulation: document.querySelector("#iPopulation")
}

let mostPopulation = 0;

data.map((country, index) => {
    if (index < 12) {
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

    if (country.population > mostPopulation) {
        mostPopulation = country.population
    }
});

elements.maxPopulation.innerText += ` ${mostPopulation}`;
elements.iPopulation.max = mostPopulation;

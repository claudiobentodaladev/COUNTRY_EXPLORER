import { renderCountries } from "./scripts/renderCountries.mjs";
import { elements } from "./scripts/elementsHtml.mjs";

const { mostPopulation } = renderCountries();

elements.showMore.addEventListener("click", () => {
    const Countrychild = {
        count: elements.coutryCardsContainer.childElementCount,
        html: elements.coutryCardsContainer.getHTML()
    }

    elements.coutryCardsContainer.innerHTML = "";

    renderCountries(Countrychild.count + 10);
})

elements.maxPopulation.innerText += ` ${mostPopulation}`;
elements.form.iPopulation.max = mostPopulation;

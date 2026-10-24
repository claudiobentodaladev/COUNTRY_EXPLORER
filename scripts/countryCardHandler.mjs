import { elements } from "./elementsHtml.mjs";

function openCard(event) {
    const card = event.target.closest(".coutry-cards");
    if (!card) return;

    location.hash = `#/country/${encodeURIComponent(card.dataset.official)}`;
}

export function countryCardHandler() {
    const container = elements.coutryCards.container;

    container.addEventListener("click", openCard);
    container.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCard(event);
        }
    });
}

export const elements = {
    mainViews: document.querySelectorAll("main > .main-view"),
    detailViews: document.querySelectorAll("main > .detail-view"),
    detail: document.querySelector("#detail"),
    coutryCards: {
        container: document.querySelector("#coutry-cards-container")
    },
    noResults: document.querySelector("#iNoResults"),
    maxPopulation: document.querySelector("#iMaxPopulation"),
    showMore: document.querySelector("#iShowMore"),
    form: {
        element: document.querySelector("form"),
        iCountryName: document.querySelector("#iCountryName"),
        iPopulation: document.querySelector("#iPopulation"),
        iRegion: document.querySelector("#iRegion")
    },
    errors: {
        name: document.querySelector("#iNameError"),
        population: document.querySelector("#iPopulationError")
    }
};

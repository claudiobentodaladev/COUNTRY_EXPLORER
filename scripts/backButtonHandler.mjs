export function backButtonHandler() {
    document.addEventListener("click", (event) => {
        if (!event.target.closest("#backButton")) return;

        location.hash = "";
    });
}

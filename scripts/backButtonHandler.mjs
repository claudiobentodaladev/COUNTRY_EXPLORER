export function backButtonHandler() {
    document.addEventListener("click", (event) => {
        if (!event.target.closest("#backButton")) return;

        // Back to the Main page (filters and cards are kept as they were).
        location.hash = "";
    });
}

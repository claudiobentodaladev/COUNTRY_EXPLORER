export function backButtonHandler() {
    document.addEventListener("click", (event) => {
        const button = event.target.closest("#backButton");

        if (!button) return;

        window.location.reload();
    });
}
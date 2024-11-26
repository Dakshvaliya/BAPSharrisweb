document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Simulate loading
    setTimeout(() => {
        loader.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 3000); // Adjust to match your animation duration

    // Feather Icons
    feather.replace();
});

// Wait for the DOM and resources to load
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Fade out loader
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1000); // Wait for 1 second before starting the fade-out

    // Display the main content after loader fades out
    setTimeout(() => {
        mainContent.classList.add("show");
    }, 2000); // Wait for 2 seconds total (1s fade + 1s buffer)
});

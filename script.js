document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Disable scrolling initially
    document.body.style.overflow = "hidden";

    // Wait for the window to fully load resources
    window.addEventListener("load", () => {
        // Allow scrolling after 85% of the animation is complete
        setTimeout(() => {
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }, 1275); // 85% of 1.5 seconds (fade-out duration)

        // Fade out the loader
        setTimeout(() => {
            loader.style.opacity = "0"; // Smooth fade-out
            loader.style.visibility = "hidden"; // Hide after fading out
        }, 1500); // Matches CSS transition duration (1.5s)

        // Show the main content after loader fades out
        setTimeout(() => {
            mainContent.classList.add("show"); // Removes blur and fades in content
        }, 2000); // Total delay accounts for fade-out + slight buffer
    });

    // Replace Feather icons after DOM is ready
    feather.replace();
});

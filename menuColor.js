    // Function to check if background image is visible
    function isBackgroundImageVisible() {
        const backgroundImg = document.querySelector(".background-image");
        if (!backgroundImg) return false;

        const rect = backgroundImg.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Function to update menu text color based on background image visibility
    function updateMenuTextColor() {
        const menuText = document.querySelector(".menu-button");
        if (!menuText) return;

        if (isBackgroundImageVisible()) {
            menuText.classList.add("background-image-visible");
        } else {
            menuText.classList.remove("background-image-visible");
        }
    }

    // Add scroll event listener to update menu text color
    window.addEventListener("scroll", updateMenuTextColor);
    // Update menu text color on page load
    window.addEventListener("load", updateMenuTextColor);




document.addEventListener('DOMContentLoaded', function () {
    const img1 = document.querySelector('.img1H');
    const img2 = document.querySelector('.img2H');

    img1.addEventListener('mouseenter', function () {
        img2.style.opacity = 1; // Setting opacity to 1 to make img2 appear
    });

    img1.addEventListener('mouseleave', function () {
        img2.style.opacity = 0; // Setting opacity to 0 to make img2 disappear
    });
});
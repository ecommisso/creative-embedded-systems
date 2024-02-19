document.addEventListener("DOMContentLoaded", function () {
    const rainContainer = document.getElementById("rainContainer");

    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animation = `fall linear infinite ${Math.random() * 2 + 1}s`;
        rainContainer.appendChild(raindrop);
    }

    function initRain() {
        for (let i = 0; i < 100; i++) {
            createRaindrop();
        }
    }

    initRain();
});

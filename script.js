const carousel = (() => {
    const container = document.querySelector(".carousel-container");
    const nextBtn = container.querySelector(".next");
    const prevBtn = container.querySelector(".previous");
    const slides = container.querySelectorAll(".slider li");
    let currentIndex = 0;

    function resetAll() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }

    function slideRight() {
        resetAll();
        slides[currentIndex + 1].classList.add("active"); // Add the active state to current slide.
        currentIndex++;
    }

    function slideLeft() {
        resetAll();
        slides[currentIndex - 1].classList.add("active");
        currentIndex--;
    }

    function startSlide() {
        slides[currentIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", (event) => {
        if(currentIndex === slides.length -1) {
            currentIndex = -1;
        }
        slideRight();
    });

    prevBtn.addEventListener("click", (event) => {
        if(currentIndex === 0) {
            currentIndex = slides.length;
        }
        slideLeft();
    });

    startSlide();
})();
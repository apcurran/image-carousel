const carousel = (() => {
    const container = document.querySelector(".carousel-container");
    const nextBtn = container.querySelector(".next");
    const prevBtn = container.querySelector(".previous");
    const slides = container.querySelectorAll(".slider li");
    let currentIndex = 0;

    function slideRight() {
        slides[currentIndex].classList.remove("active"); // Remove previous slide's active state.
        slides[currentIndex + 1].classList.add("active"); // Add the active state to current slide.
        currentIndex++;
    }

    function slideLeft() {
        slides[currentIndex].classList.remove("active");
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
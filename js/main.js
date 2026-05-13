/* //navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//project section - modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
        });
    });
});


//site dark mode
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrenIcon());

});

const getCurrenTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrenIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//nav menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


//responsive nan menu tooggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
 */

let portfolioScriptsInitialized = false;

function initPortfolioScripts() {
    if (portfolioScriptsInitialized) return;
    portfolioScriptsInitialized = true;

    // navigation bar effects on scroll
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", function () {
            header.classList.toggle("sticky", window.scrollY > 0);
        });
    }

    // project section - modal
    // project section - modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card:not(.project-link)");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

    const portfolioModal = function (modalClick) {
        if (portfolioModals[modalClick]) {
            portfolioModals[modalClick].classList.add("active");
        }
    };

    if (imgCards.length > 0 && portfolioModals.length > 0) {
        imgCards.forEach((imgCard, i) => {
            imgCard.addEventListener("click", () => {
                portfolioModal(i);
            });
        });
    }

    if (portfolioCloseBtns.length > 0) {
        portfolioCloseBtns.forEach((portfolioCloseBtn) => {
            portfolioCloseBtn.addEventListener("click", () => {
                portfolioModals.forEach((portfoliomodalView) => {
                    portfoliomodalView.classList.remove("active");
                });
            });
        });
    }

    // site dark mode
    const themeBtn = document.querySelector(".theme-btn");

    const getCurrentTheme = () =>
        document.body.classList.contains("dark-theme") ? "dark" : "light";

    const getCurrentIcon = () =>
        themeBtn && themeBtn.classList.contains("sun") ? "sun" : "moon";

    const savedTheme = localStorage.getItem("saved-theme");
    const savedIcon = localStorage.getItem("saved-icon");

    if (savedTheme) {
        document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    }

    if (themeBtn && savedIcon) {
        themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            themeBtn.classList.toggle("sun");

            localStorage.setItem("saved-theme", getCurrentTheme());
            localStorage.setItem("saved-icon", getCurrentIcon());
        });
    }

    // scroll to top button
    const scrollTopBtn = document.querySelector(".scrollToTop-btn");

    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            scrollTopBtn.classList.toggle("active", window.scrollY > 500);
        });

        scrollTopBtn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }

    // nav menu items active on page scroll
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const id = current.getAttribute("id");

            if (!id) return;

            const navLink = document.querySelector(`.nav-items a[href*="${id}"]`);

            if (!navLink) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    });

    // responsive nav menu toggle
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a");

    if (menuBtn && navigation) {
        menuBtn.addEventListener("click", () => {
            navigation.classList.add("active");
        });
    }

    if (closeBtn && navigation) {
        closeBtn.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    }

    if (navItems.length > 0 && navigation) {
        navItems.forEach((navItem) => {
            navItem.addEventListener("click", () => {
                navigation.classList.remove("active");
            });
        });
    }
}

document.addEventListener("partialsLoaded", initPortfolioScripts);

if (window.partialsAreLoaded) {
    initPortfolioScripts();
}

// Portfolio carousel for project pages
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".portfolio-carousel");

    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".gallery-slide"));
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    // Create dots automatically
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel-dots");

    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        dot.type = "button";

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });

        dotsContainer.appendChild(dot);
    });

    carousel.insertAdjacentElement("afterend", dotsContainer);

    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        if (dots[currentIndex]) {
            dots[currentIndex].classList.add("active");
        }
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        updateCarousel();
    });

    updateCarousel();
});
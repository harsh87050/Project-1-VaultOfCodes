// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

});

// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ===============================
// Portfolio Filtering
// ===============================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".video-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {

            if (filter === "all") {

                card.classList.remove("hide");

            }

            else if (card.classList.contains(filter)) {

                card.classList.remove("hide");

            }

            else {

                card.classList.add("hide");

            }

        });

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const reveals = document.querySelectorAll(

".hero, .stats, .about, .services, .portfolio, .testimonials, .cta, .contact, footer"

);

reveals.forEach(section => {

    section.classList.add("reveal");

});

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();

});

// ===============================
// Video Preview on Hover
// ===============================

const previewVideos = document.querySelectorAll(".video-card video");

previewVideos.forEach(video => {

    video.muted = true;

    video.playsInline = true;

    video.preload = "metadata";

    const card = video.closest(".video-card");

    card.addEventListener("mouseenter", () => {

        // Pause all other videos
        previewVideos.forEach(v => {

            if (v !== video) {

                v.pause();
                v.currentTime = 0;

            }

        });

        video.play().catch(() => {});

    });

    card.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});


// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".stat h2");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const original = counter.innerText;

            const target = parseInt(original.replace(/\D/g, ""));

            const suffix = original.replace(/[0-9]/g, "");

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + suffix;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + suffix;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounters);

// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Navbar Shadow Animation
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.transition = ".3s";

    }

});

// ===============================
// Console Message
// ===============================

console.log("Editkaro Portfolio Loaded Successfully 🚀");
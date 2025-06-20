// 1. Smooth Scrolling for my Navigation Links
document.querySelectorAll('a[href^="#"], a[href^="https"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href').startsWith('#')) {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.open(this.href, '_blank'); // Open external links in a new tab
        }
    });
});

// 2. Sticky Navigation on Scroll
const nav = document.querySelector(".top-nav");
const stickyNav = nav.offsetTop;

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= stickyNav) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// 3. Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "Back to Top";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// 4. Image Hover Effect (Hover to Zoom)
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// 5. Fade In Content on Scroll
const fadeInElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeInElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("visible");
        }
    });
});

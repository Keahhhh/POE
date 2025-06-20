// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Lightbox Gallery for Images
document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll(".image-style");
    const modal = document.createElement("div");
    modal.classList.add("lightbox-modal");
    const modalImage = document.createElement("img");
    modal.appendChild(modalImage);

    // Add modal to body
    document.body.appendChild(modal);

    imageElements.forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src; // Set image source to clicked image
            modal.style.display = "flex"; // Show the modal
        });
    });

    // Close modal when clicked
    modal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
    });
});

// 3. Sticky Navigation on Scroll
const nav = document.querySelector("nav");
const stickyNav = nav.offsetTop;

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= stickyNav) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// 4. Back-to-Top Button
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

// 5. Form Validation (for future forms)
function validateForm(event) {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (!name || !email || !message) {
        alert("All fields must be filled out!");
        event.preventDefault(); // Prevent form submission
    }
}

// Attach form validation to a form (if any)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", validateForm);
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;
    /* ================================
   Typing Animation
================================ */

const typingText = document.getElementById("typing-text");

const roles = [
    "Java Full Stack Developer",
    "Software Developer",
    "React Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must contain at least 3 characters.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }

    // Successful submission
    if (isValid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();
    }
});
/* ================================
   Exact Section Navigation
================================ */

document.querySelectorAll('.nav-link').forEach(link => {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (!targetId || !targetId.startsWith('#')) {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        const navbarHeight =
            document.querySelector('.navbar').offsetHeight;

        const targetPosition =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

    });

});
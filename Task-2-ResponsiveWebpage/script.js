/* =================================
   Add To Cart
================================= */

const cartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cartCount");

let cartItems = 0;

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartItems++;

        cartCount.textContent = cartItems;

        const productName = button.dataset.product;

        button.textContent = "Added ✓";

        button.disabled = true;

        setTimeout(function () {

            button.textContent = "Add to Cart";

            button.disabled = false;

        }, 1500);

        console.log(productName + " added to cart.");

    });

});


/* =================================
   Newsletter Validation
================================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterEmail =
    document.getElementById("newsletterEmail");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        newsletterEmail.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        newsletterMessage.textContent =
            "Please enter your email address.";

        newsletterMessage.style.color = "#dc2626";

        return;
    }


    if (!emailPattern.test(email)) {

        newsletterMessage.textContent =
            "Please enter a valid email address.";

        newsletterMessage.style.color = "#dc2626";

        return;
    }


    newsletterMessage.textContent =
        "Thank you for subscribing!";

    newsletterMessage.style.color = "#16a34a";

    newsletterForm.reset();

});
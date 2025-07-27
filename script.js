// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Animate hamburger icon
            hamburger.classList.toggle('is-active');
        });
    }


    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // --- Smooth Scrolling for Anchor Links ---
    // Select all links with hashes
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if animation is supported
            if (this.getAttribute("href") !== "#") {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                     // Close mobile menu if open
                    if (navLinks && navLinks.classList.contains('active')) {
                         navLinks.classList.remove('active');
                         if (hamburger) hamburger.classList.remove('is-active');
                    }

                    // Scroll smoothly
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Align to the top of the element
                    });
                }
            }
        });
    });


    // --- Basic Form Submission Handling (Placeholder) ---
    // This part is for demonstration; actual submission depends on your backend or service like Netlify Forms.
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // e.preventDefault(); // Uncomment if you want to handle submission entirely with JS
            // Example: Show a confirmation message or send data via fetch()
            // alert('Thank you for your message! Form submission logic would go here.');
            // In a real scenario with Netlify Forms, you wouldn't preventDefault unless doing custom JS submission.
             console.log("Form submitted. If using Netlify Forms, data will be sent.");
        });
    }

}); // End DOMContentLoaded
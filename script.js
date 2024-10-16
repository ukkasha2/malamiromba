// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Arrow Functionality
const scrollArrow = document.getElementById('scrollArrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollArrow.classList.add('show'); // Show arrow when scrolled down
    } else {
        scrollArrow.classList.remove('show'); // Hide arrow when at the top
    }
});

// Scroll to Top
scrollArrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Popup Modal for Join Us Form
const joinUsBtn = document.getElementById('joinUsBtn');
const modal = document.getElementById('myModal');

joinUsBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close Modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Popup Modal for Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Your message has been sent successfully!'); // Simple alert to confirm submission
        contactForm.reset(); // Reset the form fields
    });
}

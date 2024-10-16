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

// Popup Modal for Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Your message has been sent successfully!'); // Simple alert to confirm submission
    contactForm.reset(); // Reset the form after submission
});

// Scroll Animation Trigger
const sections = document.querySelectorAll('.section-pop');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Get modal element
const modal = document.getElementById("joinUsModal");
const joinUsBtn = document.getElementById("joinUsBtn");
const closeModal = document.getElementsByClassName("close")[0];

// Open modal on button click
joinUsBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal when user clicks on <span> (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle button clicks (Optional: add functionality here)
document.getElementById("memberBtn").onclick = function() {
    // Implement member registration logic
    alert("Member registration form goes here.");
    modal.style.display = "none"; // Close modal after action
}

document.getElementById("userBtn").onclick = function() {
    // Implement user registration logic
    alert("User registration form goes here.");
    modal.style.display = "none"; // Close modal after action
}

// Form Validation
document.getElementById('therapy-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const location = document.getElementById('location').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const contact = document.getElementById('contact').value.trim();

    if (!name || !location || !email || !date || !time || !contact) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission if validation fails
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

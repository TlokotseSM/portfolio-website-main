// Dark/Light Mode Toggle
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark'));
});

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
}

// Typed.js Animation
const typed = new Typed('.typed-text', {
    strings: ['Full-Stack Developer', 'Data Analyst', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Mobile Menu Toggle
function myMenuFunction() {
    const navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('responsive');
}

// Scroll Reveal Animation
ScrollReveal().reveal('.featured-text, .featured-image, .project-box, .skills, .about-info, .contact-info', {
    delay: 200,
    distance: '30px',
    origin: 'bottom',
    interval: 200,
    reset: true
});

// CV Download Tracking
document.querySelectorAll('[download]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('CV downloaded!');
        // Add analytics tracking here if needed
    });
});

// Active link highlighting
// Update the active link highlighting to include new sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// Form submission
const contactForm = document.querySelector(".form-control");
const formInputs = document.querySelectorAll(".input-field, .input-subject, textarea");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log("Form submitted:", data);
        
        // Show success message
        alert("Thank you for your message! I'll get back to you soon.");
        
        // Reset form
        formInputs.forEach(input => {
            input.value = "";
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        
        // Close mobile menu if open
        const menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.className.includes("responsive")) {
            menuBtn.className = "nav-menu";
        }
    });
});

// Hire me button
const hireBtn = document.querySelector(".hire-btn");
if (hireBtn) {
    hireBtn.addEventListener("click", function() {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

//
// Update the navigation menu to include new sections
const navMenuList = document.querySelector('.nav-menu-list');
if (navMenuList) {
    const experienceLink = document.createElement('li');
    experienceLink.className = 'nav-list';
    experienceLink.innerHTML = `
        <a href="#experience" class="nav-link">EXPERIENCE</a>
        <div class="circle"></div>
    `;
    
    const educationLink = document.createElement('li');
    educationLink.className = 'nav-list';
    educationLink.innerHTML = `
        <a href="#education" class="nav-link">EDUCATION</a>
        <div class="circle"></div>
    `;
    
    // Insert after the about link
    const aboutLink = document.querySelector('a[href="#about"]').parentNode;
    aboutLink.parentNode.insertBefore(experienceLink, aboutLink.nextSibling);
    experienceLink.parentNode.insertBefore(educationLink, experienceLink.nextSibling);
}


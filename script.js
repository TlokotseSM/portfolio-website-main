/* Menu button appear and disappear */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* Dark mode */
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Save theme preference to localStorage
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

/* Typing effect */
var typingEffect = new Typed(".typed-text", {
    strings: ["Software Developer", "Full-Stack Engineer", "Data Analyst", "Java Developer", "Python Programmer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

/* Scroll effect */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-title", { delay: 200 });
sr.reveal(".text-info", { delay: 300 });
sr.reveal(".text-button", { delay: 400 });
sr.reveal(".social_icons", { delay: 500 });
sr.reveal(".featured-image", { delay: 600 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-headder", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skills", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* Active link */
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        } 
    });
}

window.addEventListener("scroll", scrollActive);

/* Form submission */
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

/* Smooth scrolling for anchor links */
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

/* Hire me button */
const hireBtn = document.querySelector(".hire-btn");
if (hireBtn) {
    hireBtn.addEventListener("click", function() {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}
// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownToggles = document.querySelectorAll('.nav-dropdown .dropdown-toggle');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        document.body.style.overflow = 'hidden'; // Prevent body scroll when menu open
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        document.body.style.overflow = ''; // Restore body scroll
        // Close all dropdowns when menu closes
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Mobile dropdown toggle
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Only handle dropdown toggle on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parentDropdown = toggle.closest('.nav-dropdown');
            const isActive = parentDropdown.classList.contains('active');
            
            // Close all other dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                if (dropdown !== parentDropdown) {
                    dropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            parentDropdown.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking on a non-dropdown link
navLinks.forEach(link => {
    if (!link.classList.contains('dropdown-toggle')) {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }
});

// Close dropdown items when clicked (mobile)
document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
});

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
const animateElements = document.querySelectorAll('.practice-card, .about-card, .grow-card, .practice-detailed-card, .gallery-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Booking Form Handling
// ===========================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (in a real application, this would send to a server)
        showMessage('Thank you for your booking request! We will contact you soon to confirm your farm tour.', 'success');
        
        // Reset form
        bookingForm.reset();
        
        // Log data (for demonstration purposes)
        console.log('Booking Data:', data);
    });
}

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showMessage('Thank you for your message! We will get back to you as soon as possible.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Log data (for demonstration purposes)
        console.log('Contact Data:', data);
    });
}

// ===========================
// Message Display Function
// ===========================
function showMessage(message, type = 'success') {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4a7c3c' : '#e74c3c'};
        color: white;
        padding: 1.5rem 2.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 90%;
        text-align: center;
        font-weight: 500;
        animation: slideDown 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Append to body
    document.body.appendChild(messageDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
            document.head.removeChild(style);
        }, 300);
    }, 5000);
}

// ===========================
// Set Minimum Date for Booking
// ===========================
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// ===========================
// Active Navigation Link
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Gallery Modal (Optional Enhancement)
// ===========================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const placeholder = item.querySelector('.gallery-placeholder p');
        if (placeholder) {
            showMessage(`This is where you'd see more photos of: ${placeholder.textContent}`, 'success');
        }
    });
});

// ===========================
// Scroll Reveal Effect
// ===========================
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-header, .integrated-farming, .tour-highlights');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal effect
document.querySelectorAll('.section-header, .integrated-farming, .tour-highlights').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Initial call
revealOnScroll();

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%c🌼 Welcome to Yellow Flowers Organic Farm', 'color: #4a7c3c; font-size: 20px; font-weight: bold;');
console.log('%cGrowing Organically. Farming Sustainably. Living Naturally.', 'color: #7fb069; font-size: 14px;');


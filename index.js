const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        }
    });
});

document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    observer.observe(document.querySelector('#footer-section'));
});

document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const blurBackground = document.querySelector('.blur-background');
    const headerBottom = header.getBoundingClientRect().bottom;
    
    if (headerBottom < 0) {
        blurBackground.style.opacity = '1';
    } else {
        blurBackground.style.opacity = '0';
    }
});

function startCountdown(endDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector(".countdown-timer").innerHTML = "REGISTRATION CLOSED!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
}

const countdownEndDate = new Date("2025-02-11T23:59:59").getTime();
startCountdown(countdownEndDate);

// Add smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced animation for theme cards
const themes = document.querySelectorAll('.theme');
themes.forEach(theme => {
    theme.addEventListener('mousemove', (e) => {
        const rect = theme.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        theme.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${-(x - rect.width/2)/20}deg)`;
    });
    
    theme.addEventListener('mouseleave', () => {
        theme.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Enhanced countdown animation
function updateCountdown() {
    // ... existing countdown code ...
    
    // Add pulse animation when seconds change
    const secondsElement = document.getElementById("seconds");
    secondsElement.style.animation = 'none';
    secondsElement.offsetHeight; // Trigger reflow
    secondsElement.style.animation = 'pulse 1s';
}

// Add particle effect to the header
function createParticles() {
    const header = document.querySelector('.header');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        header.appendChild(particle);
        
        const animation = particle.animate([
            {
                transform: `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`,
                opacity: 0
            },
            {
                transform: `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`,
                opacity: 0.5
            },
            {
                transform: `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`,
                opacity: 0
            }
        ], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity
        });
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    // ... existing initialization code ...
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

// Add smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener
window.addEventListener('scroll', function() {
    const blurBackground = document.querySelector('.blur-background');
    
    // Add blur effect after scrolling 100px
    if (window.scrollY > 80) {
        blurBackground.style.opacity = '1';
    } else {
        blurBackground.style.opacity = '0';
    }
});
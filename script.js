// script.js
// Webflow-compatible JavaScript with RTL support

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            } else {
                // If it's a link to another page
                window.location.href = targetId;
            }
        });
    });

    // Gemstone Filtering
    const gemstoneTypeFilter = document.getElementById('gemstone-type-filter');
    const sortFilter = document.getElementById('sort-filter');
    const gemstoneGrid = document.getElementById('gemstone-grid');
    
    if (gemstoneTypeFilter && gemstoneGrid) {
        gemstoneTypeFilter.addEventListener('change', filterGemstones);
    }
    
    if (sortFilter && gemstoneGrid) {
        sortFilter.addEventListener('change', sortGemstones);
    }

    function filterGemstones() {
        const selectedType = gemstoneTypeFilter.value;
        const gemstoneCards = gemstoneGrid.querySelectorAll('.gemstone-card');
        
        gemstoneCards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            if (selectedType === '' || cardType === selectedType) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('fade-in-up');
                }, 100);
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in-up');
            }
        });
    }

    function sortGemstones() {
        const sortBy = sortFilter.value;
        const gemstoneCards = Array.from(gemstoneGrid.querySelectorAll('.gemstone-card'));
        
        gemstoneCards.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    const nameA = a.querySelector('h3').textContent;
                    const nameB = b.querySelector('h3').textContent;
                    return nameA.localeCompare(nameB);
                case 'price-low':
                    const priceA = parseFloat(a.getAttribute('data-price')) || 0;
                    const priceB = parseFloat(b.getAttribute('data-price')) || 0;
                    return priceA - priceB;
                case 'price-high':
                    const priceHighA = parseFloat(a.getAttribute('data-price')) || 0;
                    const priceHighB = parseFloat(b.getAttribute('data-price')) || 0;
                    return priceHighB - priceHighA;
                case 'newest':
                    return 0; // Assuming all are new for now
                default:
                    return 0;
            }
        });
        
        // Clear and re-append sorted cards
        gemstoneGrid.innerHTML = '';
        gemstoneCards.forEach(card => {
            gemstoneGrid.appendChild(card);
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !phone || !message) {
                showFormMessage('لطفاً تمام فیلدهای ضروری را پر کنید.', 'error');
                return;
            }
            
            // Phone validation (simple Iranian phone number format)
            const phoneRegex = /^(\+98|0)?9\d{9}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                showFormMessage('لطفاً یک شماره تماس معتبر وارد کنید.', 'error');
                return;
            }
            
            // Email validation if provided
            if (email && !isValidEmail(email)) {
                showFormMessage('لطفاً یک ایمیل معتبر وارد کنید.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual submission logic)
            showFormMessage('در حال ارسال پیام...', 'info');
            
            setTimeout(() => {
                // Here you would normally send the data to your server
                // For demo purposes, we'll just show a success message
                showFormMessage('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }

    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds for success messages
            if (type === 'success') {
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email || !isValidEmail(email)) {
                alert('لطفاً یک ایمیل معتبر وارد کنید.');
                return;
            }
            
            // Simulate newsletter subscription
            alert('با موفقیت در خبرنامه ثبت شدید!');
            emailInput.value = '';
        });
    }

    // Contact Button Functionality
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('data-phone');
            if (phoneNumber) {
                // Open phone dialer
                window.open(`tel:${phoneNumber}`, '_self');
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.gemstone-card, .expertise-card, .value-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'var(--bg-white)';
                navbar.style.backdropFilter = 'none';
            }
        }
    });

    // Initialize tooltips if needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add to cart animation (for future use)
    function addToCartAnimation(button) {
        button.classList.add('pulse');
        setTimeout(() => {
            button.classList.remove('pulse');
        }, 1000);
    }

    // Initialize any Webflow-specific interactions
    initializeWebflowInteractions();
});

// Webflow-specific interactions initialization
function initializeWebflowInteractions() {
    // This function can be expanded to include Webflow-specific interactions
    // For now, it's a placeholder for any Webflow-compatible code
    
    // Example: Webflow CMS dynamic content handling
    if (window.Webflow && window.Webflow.push) {
        window.Webflow.push(function() {
            // Webflow-specific code here
            console.log('Webflow interactions initialized');
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Persian number formatting
function formatPersianNumber(number) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/[0-9]/g, d => persianDigits[d]);
}

// Currency formatting for Iranian Rial
function formatCurrency(amount) {
    const formatted = formatPersianNumber(amount.toLocaleString('fa-IR'));
    return `${formatted} ریال`;
}

// Date formatting for Persian calendar
function formatPersianDate(date) {
    // This would require a Persian calendar library
    // For now, return a simple formatted date
    return new Intl.DateTimeFormat('fa-IR').format(date);
}

// Export functions for global use
window.gemstoneStore = {
    formatPersianNumber,
    formatCurrency,
    formatPersianDate,
    debounce,
    throttle
};

// Auto-load product data from products.txt and populate cards
fetch('products.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.trim().split('\n');
        const gemstoneGrid = document.getElementById('gemstone-grid');

        lines.forEach(line => {
            const [id, description, price, weight, type] = line.split(':').map(s => s.trim());

            const card = document.createElement('div');
            card.classList.add('gemstone-card');
            card.setAttribute('data-type', type.toLowerCase());
            card.setAttribute('data-price', parseFloat(price));

            card.innerHTML = `
                <div class="gemstone-image">
                    <img src="compressed_images/${id}.webp" alt="سنگ ${id}" loading="lazy">
                    <div class="gemstone-overlay">
                        <button class="contact-btn" data-phone="+989123456789">
                            <i class="fas fa-phone"></i> تماس
                        </button>
                    </div>
                </div>
                <div class="gemstone-info">
                    <h3>سنگ ${id}</h3>
                    <p>${description}</p>
                    <div class="gemstone-price">قیمت: ${formatCurrency(parseInt(price))}</div>
                    <div class="gemstone-weight">وزن: ${formatPersianNumber(weight)}</div>
                    <div class="gemstone-type">
                        <span class="type-tag">${type}</span>
                    </div>
                </div>
            `;

            gemstoneGrid.appendChild(card);
        });

        // Re-initialize observers and buttons
        reinitializeDynamicFeatures();
    })
    .catch(error => {
        console.error('خطا در بارگذاری products.txt:', error);
    });

// Re-init observer and contact buttons for new cards
function reinitializeDynamicFeatures() {
    // Contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('data-phone');
            if (phoneNumber) {
                window.open(`tel:${phoneNumber}`, '_self');
            }
        });
    });

    // Observer for animation
    const animatedElements = document.querySelectorAll('.gemstone-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

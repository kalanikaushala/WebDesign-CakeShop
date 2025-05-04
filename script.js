// Shopping Cart Functionality
let cartItems = [];

document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.cake-card');
        const item = {
            name: card.querySelector('h3').textContent,
            price: card.querySelector('.price').textContent
        };
        
        cartItems.push(item);
        showNotification('Item added to cart!');
    });
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Mobile Menu Toggle
const menuOpen = document.querySelector('#menu-open-button');
const menuClose = document.querySelector('#menu-close-button');
const navMenu = document.querySelector('.nav-menu');

menuOpen.addEventListener('click', () => {
    navMenu.style.left = '0';
});

menuClose.addEventListener('click', () => {
    navMenu.style.left = '-100%';
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (validateForm(name, email, message)) {
                showAlert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});

function validateForm(name, email, message) {
    if (name.length < 2) {
        showAlert('Please enter a valid name');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address');
        return false;
    }
    
    if (message.length < 10) {
        showAlert('Message must be at least 10 characters long');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message) {
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.textContent = message;
    
    // Style the alert
    alert.style.position = 'fixed';
    alert.style.top = '20px';
    alert.style.left = '50%';
    alert.style.transform = 'translateX(-50%)';
    alert.style.padding = '15px 30px';
    alert.style.backgroundColor = 'var(--primary-color)';
    alert.style.color = 'white';
    alert.style.borderRadius = '5px';
    alert.style.zIndex = '1000';
    
    document.body.appendChild(alert);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

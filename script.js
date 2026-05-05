// ===== ACTIVE NAVIGATION & SMOOTH SCROLL =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function updateActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Smooth scroll for navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== DOWNLOAD CV BUTTON =====
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        alert('📄 Downloading Monica Taylor\'s CV (Demo)');
    });
}


// ===== CONTACT FORM =====
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            formMessage.textContent = '❌ Please fill in all fields';
            formMessage.style.color = '#e74c3c';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            formMessage.textContent = '❌ Please enter a valid email address';
            formMessage.style.color = '#e74c3c';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
            return;
        }
        
        // Success message
        formMessage.textContent = '✅ Message sent successfully! Monica will get back to you soon.';
        formMessage.style.color = '#27ae60';
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 4000);
    });
}

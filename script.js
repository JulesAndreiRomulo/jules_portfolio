const phrases = ['Web Developer', 'UI/UX Designer', 'Front-End Developer'];
let phraseIndex = 0;

function fadeTextEffect() {
    const fadeText = document.querySelector('.fade-text');
    if (!fadeText) return;
    
    fadeText.style.animation = 'none';
    setTimeout(() => {
        fadeText.textContent = phrases[phraseIndex];
        fadeText.style.animation = 'fadeInOut 4s ease-in-out';
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }, 50);
}

setInterval(fadeTextEffect, 4000);

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress');
    
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 100) {
            const progress = bar.getAttribute('data-progress');
            if (!bar.classList.contains('animated')) {
                setTimeout(() => {
                    bar.style.width = progress + '%';
                    bar.classList.add('animated');
                }, 200);
            }
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

const modal = document.getElementById('modal');
const mainImage = document.getElementById('mainImage');
const thumbnailsContainer = document.getElementById('thumbnails');

const projectImages = {
    papos: [
        'assets/images/papos-1.png',
        'assets/images/papos-2.png',
        'assets/images/papos-3.png',
        'assets/images/papos-4.png'
    ],
    population: [
        'assets/images/population-1.png',
        'assets/images/population-2.png',
        'assets/images/population-3.png',
        'assets/images/population-4.png'
    ]
};

const projectInfo = {
    papos: {
        title: "Papo's Kitchenette Ordering System",
        description: "A comprehensive web-based ordering system designed to streamline restaurant operations and enhance customer experience.",
        features: [
            "Real-time order tracking and management",
            "Intuitive menu browsing with categories",
            "Secure payment processing integration",
            "Admin dashboard with sales analytics",
            "Customer order history and favorites",
            "Responsive design for mobile ordering",
            "Email notifications for order updates",
            "Inventory management system"
        ],
        technologies: "HTML5, CSS3, JavaScript, PHP, MySQL",
        duration: "3 months",
        role: "Full-Stack Developer & UI/UX Designer"
    },
    population: {
        title: "Luisiana Population Tracker System",
        description: "A robust web-based system for managing and monitoring resident demographic records with advanced security features.",
        features: [
            "Secure user authentication and authorization",
            "Advanced search and filtering capabilities",
            "Data export to Excel and PDF formats",
            "Role-based access control (Admin, Staff, Viewer)",
            "Comprehensive demographic reporting",
            "Audit trail for data modifications",
            "Backup and restore functionality",
            "Mobile-responsive interface"
        ],
        technologies: "HTML5, CSS3, JavaScript, PHP, MySQL",
        duration: "4 months",
        role: "Full-Stack Developer"
    }
};

let currentProject = '';
let currentImageIndex = 0;

function openModal(projectName) {
    currentProject = projectName;
    currentImageIndex = 0;
    const images = projectImages[projectName];
    
    mainImage.src = images[0];
    
    thumbnailsContainer.innerHTML = '';
    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${projectName} image ${index + 1}`;
        img.onclick = () => selectImage(index);
        if (index === 0) img.classList.add('active');
        thumbnailsContainer.appendChild(img);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function selectImage(index) {
    currentImageIndex = index;
    const images = projectImages[currentProject];
    mainImage.src = images[index];
    
    const thumbnails = thumbnailsContainer.querySelectorAll('img');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function prevImage() {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    selectImage(currentImageIndex);
}

function nextImage() {
    const images = projectImages[currentProject];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    selectImage(currentImageIndex);
}

const infoModal = document.getElementById('infoModal');
const infoContent = document.getElementById('infoContent');

function showProjectInfo(projectName) {
    const info = projectInfo[projectName];
    
    let featuresHTML = info.features.map(feature => `<li>${feature}</li>`).join('');
    
    infoContent.innerHTML = `
        <h2>${info.title}</h2>
        <p>${info.description}</p>
        
        <h3>Key Features</h3>
        <ul>${featuresHTML}</ul>
        
        <h3>Technologies Used</h3>
        <p>${info.technologies}</p>
        
        <h3>Project Duration</h3>
        <p>${info.duration}</p>
        
        <h3>My Role</h3>
        <p>${info.role}</p>
    `;
    
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
    infoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    }
    
    if (infoModal.classList.contains('active') && e.key === 'Escape') {
        closeInfoModal();
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.15);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c👋 Welcome!', 'font-size: 20px; font-weight: bold; color: #4facfe;');
console.log('%cJules Andrei Romulo - Portfolio', 'font-size: 14px; color: #667eea;');
console.log('%cLet\'s build something amazing together!', 'font-size: 12px; color: #718096;');

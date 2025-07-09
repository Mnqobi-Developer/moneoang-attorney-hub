
// Global variables
let currentSlide = 0;
let currentFilter = 'all';
let isMenuOpen = false;

// Services data
const services = [
    {
        id: 1,
        title: 'Civil Litigation',
        description: 'Comprehensive representation in civil disputes, contract breaches, and commercial litigation.',
        category: 'litigation',
        features: ['Contract disputes', 'Commercial litigation', 'Debt recovery', 'Property disputes']
    },
    {
        id: 2,
        title: 'Criminal Litigation',
        description: 'Expert criminal defense representation for all types of criminal charges.',
        category: 'litigation',
        features: ['Criminal defense', 'Bail applications', 'Court representation', 'Legal advice']
    },
    {
        id: 3,
        title: 'Family Law',
        description: 'Sensitive and professional handling of family-related legal matters.',
        category: 'family',
        features: ['Divorce proceedings', 'Child custody', 'Maintenance', 'Domestic violence']
    },
    {
        id: 4,
        title: 'Immigration Law',
        description: 'Complete immigration services for individuals and families.',
        category: 'immigration',
        features: ['Visa applications', 'Permanent residence', 'Citizenship', 'Work permits']
    },
    {
        id: 5,
        title: 'Unlawful Arrest',
        description: 'Protection of your constitutional rights in cases of unlawful detention.',
        category: 'litigation',
        features: ['Rights protection', 'Compensation claims', 'Police misconduct', 'Urgent relief']
    },
    {
        id: 6,
        title: 'Debt Collection',
        description: 'Efficient debt recovery services for businesses and individuals.',
        category: 'business',
        features: ['Debt recovery', 'Payment plans', 'Legal notices', 'Court proceedings']
    },
    {
        id: 7,
        title: 'RAF Claims',
        description: 'Road Accident Fund claims for motor vehicle accident victims.',
        category: 'litigation',
        features: ['Accident claims', 'Medical assessments', 'Compensation', 'Court representation']
    },
    {
        id: 8,
        title: 'Tribal Authority\'s Law',
        description: 'Specialized knowledge in traditional and customary law matters.',
        category: 'family',
        features: ['Customary law', 'Traditional marriages', 'Tribal disputes', 'Cultural rights']
    },
    {
        id: 9,
        title: 'Administration of Deceased Estates',
        description: 'Professional estate administration and winding up services.',
        category: 'estate',
        features: ['Estate planning', 'Will execution', 'Probate', 'Asset distribution']
    },
    {
        id: 10,
        title: 'Labour Law & Arbitration',
        description: 'Employment law matters and dispute resolution.',
        category: 'business',
        features: ['Employment disputes', 'CCMA representation', 'Labour advice', 'Arbitration']
    },
    {
        id: 11,
        title: 'Drafting of Wills & Contracts',
        description: 'Professional legal document preparation and review.',
        category: 'estate',
        features: ['Will drafting', 'Contract preparation', 'Legal review', 'Document notarization']
    }
];

// Team data
const teamMembers = [
    {
        id: 1,
        name: 'S.M. Moneoang',
        title: 'Principal Attorney',
        specialties: ['Civil Litigation', 'Criminal Law', 'Constitutional Law'],
        experience: '15+ years',
        education: 'LLB (University of the Witwatersrand), Admitted Attorney of the High Court',
        languages: ['English', 'Afrikaans', 'Sepedi', 'Tsonga'],
        description: 'Principal attorney with extensive experience in litigation and a passion for justice. Specializes in complex civil and criminal matters.',
        achievements: ['High Court Advocate', 'Legal Aid Board Panel Attorney', 'Community Legal Clinic Volunteer']
    },
    {
        id: 2,
        name: 'T.R. Maluleke',
        title: 'Senior Associate',
        specialties: ['Family Law', 'Immigration Law', 'Estate Planning'],
        experience: '10+ years',
        education: 'LLB (University of Limpopo), Postgraduate Diploma in Immigration Law',
        languages: ['English', 'Afrikaans', 'Tsonga', 'Venda'],
        description: 'Dedicated family law specialist with a compassionate approach to sensitive legal matters. Expert in immigration procedures.',
        achievements: ['Family Mediation Certificate', 'Immigration Specialist Certification', 'Women\'s Rights Advocate']
    },
    {
        id: 3,
        name: 'P.K. Mathebula',
        title: 'Associate Attorney',
        specialties: ['Labour Law', 'Debt Collection', 'Commercial Law'],
        experience: '8+ years',
        education: 'LLB (University of Pretoria), Labour Law Certificate (UNISA)',
        languages: ['English', 'Afrikaans', 'Sepedi', 'Tsonga'],
        description: 'Labour law expert with extensive experience in employment disputes and commercial transactions.',
        achievements: ['CCMA Arbitrator', 'Commercial Litigation Specialist', 'Small Business Legal Advisor']
    },
    {
        id: 4,
        name: 'N.A. Chauke',
        title: 'Junior Attorney',
        specialties: ['RAF Claims', 'Personal Injury', 'Administrative Law'],
        experience: '5+ years',
        education: 'LLB (University of Venda), Certificate in Personal Injury Law',
        languages: ['English', 'Tsonga', 'Sepedi', 'Venda'],
        description: 'Rising star specializing in Road Accident Fund claims and personal injury litigation. Known for thorough case preparation.',
        achievements: ['RAF Claims Specialist', 'Personal Injury Advocate', 'Pro Bono Service Award']
    }
];

// Category mappings
const categoryNames = {
    'all': 'All Services',
    'litigation': 'Litigation',
    'family': 'Family Law',
    'immigration': 'Immigration',
    'estate': 'Estate Planning',
    'business': 'Business Law'
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeHero();
    initializeServices();
    initializeTeam();
    initializeContactForm();
    initializeCurrentYear();
    initializeSmoothScrolling();
});

// Hero Section Functions
function initializeHero() {
    // Auto-advance slides
    setInterval(nextSlide, 5000);
}

function nextSlide() {
    const images = document.querySelectorAll('.hero-image');
    const indicators = document.querySelectorAll('.indicator');
    
    images[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % images.length;
    
    images[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function previousSlide() {
    const images = document.querySelectorAll('.hero-image');
    const indicators = document.querySelectorAll('.indicator');
    
    images[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    
    images[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const images = document.querySelectorAll('.hero-image');
    const indicators = document.querySelectorAll('.indicator');
    
    images[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    images[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Navigation Functions
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileNav.classList.add('active');
    } else {
        mobileNav.classList.remove('active');
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    isMenuOpen = false;
    mobileNav.classList.remove('active');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function initializeSmoothScrolling() {
    // Add click event listeners to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Services Section Functions
function initializeServices() {
    renderServices();
}

function filterServices(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderServices();
}

function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    const filteredServices = currentFilter === 'all' 
        ? services 
        : services.filter(service => service.category === currentFilter);
    
    servicesGrid.innerHTML = filteredServices.map(service => `
        <div class="service-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                <h3>${service.title}</h3>
                <span class="service-category">${categoryNames[service.category]}</span>
            </div>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn-primary btn-full">Learn More</button>
        </div>
    `).join('');
}

// Team Section Functions
function initializeTeam() {
    renderTeam();
}

function renderTeam() {
    const teamGrid = document.querySelector('.team-grid');
    
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-header">
                <div class="team-avatar">
                    ${member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 class="team-name">${member.name}</h3>
                <p class="team-title">${member.title}</p>
                <span class="team-experience">${member.experience} Experience</span>
            </div>
            
            <div class="team-section">
                <h4>Specializations</h4>
                <div class="specialties">
                    ${member.specialties.map(specialty => `<span class="specialty-badge">${specialty}</span>`).join('')}
                </div>
            </div>
            
            <div class="team-section">
                <p class="team-description">${member.description}</p>
            </div>
            
            <div class="team-section">
                <h4>Education & Qualifications</h4>
                <p style="font-size: 0.875rem; color: var(--gray-600);">${member.education}</p>
            </div>
            
            <div class="team-section">
                <h4>Languages</h4>
                <div class="languages">
                    ${member.languages.map(language => `<span class="language-tag">${language}</span>`).join('')}
                </div>
            </div>
            
            <div class="team-section">
                <h4>Notable Achievements</h4>
                <ul class="achievements">
                    ${member.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            
            <button class="btn btn-primary btn-full">
                Consult with ${member.name.split(' ')[0]}
            </button>
        </div>
    `).join('');
}

// Contact Form Functions
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    showToast('Message Received! Thank you for contacting us. We\'ll get back to you within 24 hours.');
    
    // Reset form
    e.target.reset();
}

// Toast Functions
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
}

// Utility Functions
function initializeCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (isMenuOpen && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.service-card, .team-card, .value-card, .stat');
    elementsToAnimate.forEach(el => observer.observe(el));
});

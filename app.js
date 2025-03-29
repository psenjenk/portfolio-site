// DOM Elements
const elements = {
	hamburger: document.querySelector('.header .nav-bar .nav-list .hamburger'),
	mobileMenu: document.querySelector('.header .nav-bar .nav-list ul'),
	menuItems: document.querySelectorAll('.header .nav-bar .nav-list ul li a'),
	header: document.querySelector('.header.container'),
	sections: document.querySelectorAll('section')
};

// Constants
const SCROLL_THRESHOLD = 250;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// Event Handlers
const toggleMobileMenu = () => {
	elements.hamburger.classList.toggle('active');
	elements.mobileMenu.classList.toggle('active');
};

const handleScroll = () => {
	const scrollPosition = window.scrollY;
	elements.header.style.backgroundColor = scrollPosition > SCROLL_THRESHOLD ? '#29323c' : 'transparent';
};

const handleMenuItemClick = () => {
	toggleMobileMenu();
};

// Intersection Observer for animations
const observerOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

// Observe all sections
elements.sections.forEach(section => {
	section.style.opacity = '0';
	section.style.transform = 'translateY(20px)';
	section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
	observer.observe(section);
});

// Event Listeners
elements.hamburger.addEventListener('click', toggleMobileMenu);
document.addEventListener('scroll', handleScroll);
elements.menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));

// ===== Hero Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Show specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Previous button
if (prev) {
  prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}

// Next button
if (next) {
  next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ===== Mobile Menu Toggle =====
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu && navList) {
  mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== Close Dropdown on Outside Click (optional enhancement) =====
document.addEventListener('click', function (e) {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = 'none';
    }
  }
});

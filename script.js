// Scroll to Top
document.querySelector('.scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Social Media Icon Pulse Animation
const socialIcons = document.querySelectorAll(".social-icons a img");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.classList.add("pulse");
  });
  icon.addEventListener("mouseout", () => {
    icon.classList.remove("pulse");
  });
});
// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});
// Hero Slider Script
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const prev = document.querySelector('.slider-controls .prev');
const next = document.querySelector('.slider-controls .next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto play every 5 seconds
setInterval(nextSlide, 5000);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

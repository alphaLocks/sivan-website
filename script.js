// Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("open");
    navToggle.setAttribute(
      "aria-expanded",
      navToggle.classList.contains("open")
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll Progress & Back to Top
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const progressCircle = backToTop?.querySelector(".progress-ring circle");
const circumference = 2 * Math.PI * 22; // radius = 22

if (progressCircle) {
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update progress bar
  if (scrollProgress) {
    scrollProgress.style.width = scrollPercent + "%";
  }

  // Update back-to-top button visibility
  if (backToTop) {
    if (scrollTop > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  // Update circular progress
  if (progressCircle) {
    const offset = circumference - (scrollPercent / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
  }
}

window.addEventListener("scroll", updateScrollProgress);
updateScrollProgress();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Theme Switcher
const themeSwitcher = document.getElementById("themeSwitcher");
const themeToggle = themeSwitcher?.querySelector(".theme-switcher-toggle");
const themeButtons = themeSwitcher?.querySelectorAll(".theme-btn");

// Load saved theme
const savedTheme = localStorage.getItem("sivan-theme") || "luxury-dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeButtons?.forEach((btn) => {
  btn.classList.toggle("active", btn.dataset.theme === savedTheme);
});

// Toggle theme panel
themeToggle?.addEventListener("click", () => {
  themeSwitcher.classList.toggle("collapsed");
});

// Theme selection
themeButtons?.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sivan-theme", theme);

    themeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Start collapsed on mobile
if (window.innerWidth <= 768 && themeSwitcher) {
  themeSwitcher.classList.add("collapsed");
}

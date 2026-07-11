"use strict";

// Global Helpers
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Loader
window.addEventListener("load", () => {
    const loader = $("#loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 800);
    }
});

// Sidebar Logic
const menuToggle = $("#menuToggle");
const sidebar = $("#sidebarV9");
const sidebarClose = $("#sidebarClose");
const sidebarOverlay = $("#sidebarOverlay");
const navLinks = $$(".sidebar-menu a");

function openSidebar() {
    sidebar?.classList.add("active");
    sidebarOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar?.classList.remove("active");
    sidebarOverlay?.classList.remove("active");
    document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", openSidebar);
sidebarClose?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);
navLinks.forEach(link => link.addEventListener("click", closeSidebar));

// Theme Toggle
const themeToggle = $("#themeToggle");
const body = document.body;

function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark-mode");
        if (themeToggle) themeToggle.textContent = "☀️";
    } else {
        body.classList.remove("dark-mode");
        if (themeToggle) themeToggle.textContent = "🌙";
    }
    localStorage.setItem("portfolio-theme", theme);
}

themeToggle?.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");
    applyTheme(isDark ? "light" : "dark");
});

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme") || "light";
applyTheme(savedTheme);

// Live Clock & Date
function updateDateTime() {
    const now = new Date();
    
    // Header Time (BD)
    const timeEl = $("#headerBdTime");
    if (timeEl) {
        timeEl.textContent = now.toLocaleTimeString("en-US", {
            timeZone: "Asia/Dhaka",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
    }

    // Header Date
    const dateEl = $("#headerEnglishDate");
    if (dateEl) {
        dateEl.textContent = now.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    // Footer Dates
    const gregEl = $("#gregorianDate");
    if (gregEl) gregEl.textContent = "Gregorian: " + now.toLocaleDateString("en-GB");

    const bnEl = $("#bengaliDate");
    if (bnEl) {
        bnEl.textContent = "Bengali: " + new Intl.DateTimeFormat("bn-BD-u-ca-beng", {
            day: "numeric", month: "long", year: "numeric"
        }).format(now);
    }

    const hijriEl = $("#hijriDate");
    if (hijriEl) {
        hijriEl.textContent = "Hijri: " + new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
            day: "numeric", month: "long", year: "numeric"
        }).format(now);
    }

    // Greeting
    const greetEl = $("#footerGreeting");
    if (greetEl) {
        const hour = now.getHours();
        let greet = "Good Night";
        if (hour >= 5 && hour < 12) greet = "Good Morning";
        else if (hour >= 12 && hour < 17) greet = "Good Afternoon";
        else if (hour >= 17 && hour < 20) greet = "Good Evening";
        greetEl.textContent = "✨ " + greet;
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Scroll Progress & Top Button
const progressBar = $("#progressBar");
const scrollTopBtn = $("#scrollTopBtn");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scroll / height) * 100;
    
    if (progressBar) progressBar.style.width = progress + "%";
    
    if (scroll > 300) scrollTopBtn?.classList.add("show");
    else scrollTopBtn?.classList.remove("show");
});

scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Counter Animation
const counters = $$("[data-counter]");
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute("data-counter");
            let count = 0;
            const inc = target / 50;
            const update = () => {
                count += inc;
                if (count < target) {
                    entry.target.textContent = Math.ceil(count);
                    setTimeout(update, 20);
                } else {
                    entry.target.textContent = target + "+";
                }
            };
            update();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 1 });

counters.forEach(c => counterObserver.observe(c));

// Footer Year
const footerYear = $("#footerYear");
if (footerYear) footerYear.textContent = new Date().getFullYear();

console.log("Portfolio System Initialized Successfully!");

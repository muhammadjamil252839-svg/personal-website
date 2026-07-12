/* ==========================================
   MUHAMMAD JAMIL UDDIN
   OFFICIAL PORTFOLIO WEBSITE
   VERSION 8.0 - NEW HEADER DESIGN
   JAVASCRIPT MODULE
========================================== */

"use strict";

/* ==========================================
   HEADER V8 - MENU TOGGLE
========================================== */

const menuToggle = document.getElementById("menuToggle");
const sidebarV8 = document.getElementById("sidebarV8");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (menuToggle && sidebarV8) {

    menuToggle.addEventListener("click", () => {

        sidebarV8.classList.add("active");
        sidebarOverlay.classList.add("active");

    });

}

if (sidebarClose && sidebarV8) {

    sidebarClose.addEventListener("click", () => {

        sidebarV8.classList.remove("active");
        sidebarOverlay.classList.remove("active");

    });

}

if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", () => {

        sidebarV8.classList.remove("active");
        sidebarOverlay.classList.remove("active");

    });

}

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        sidebarV8.classList.remove("active");
        sidebarOverlay.classList.remove("active");

    }

});

console.log("✅ Version 8.0 | Header Menu Toggle Loaded");

/* ==========================================
   NESTED MENU TOGGLE FUNCTION
========================================== */

function toggleNestedMenu(button) {

    const nestedMenu = button.nextElementSibling;

    if (nestedMenu && nestedMenu.classList.contains("nested-menu")) {

        nestedMenu.classList.toggle("active");
        button.classList.toggle("active");

    } else if (nestedMenu && nestedMenu.classList.contains("nested-menu-level2")) {

        nestedMenu.classList.toggle("active");
        button.classList.toggle("active");

    }

}

window.toggleNestedMenu = toggleNestedMenu;

console.log("✅ Version 8.0 | Nested Menu System Loaded");

/* ==========================================
   HEADER TIME & DATE UPDATE
========================================== */

const headerBdTime = document.getElementById("headerBdTime");
const headerEnglishDate = document.getElementById("headerEnglishDate");

function updateHeaderTime() {

    const now = new Date();

    if (headerBdTime) {

        headerBdTime.textContent = now.toLocaleTimeString("en-US", {

            timeZone: "Asia/Dhaka",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true

        });

    }

    if (headerEnglishDate) {

        headerEnglishDate.textContent = now.toLocaleDateString("en-US", {

            weekday: "short",
            month: "short",
            day: "numeric"

        });

    }

}

updateHeaderTime();
setInterval(updateHeaderTime, 1000);

console.log("✅ Version 8.0 | Header Time & Date Loaded");

/* ==========================================
   THEME SYSTEM
========================================== */

function setTheme(theme) {

    if (theme === 'light') {

        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');

    } else if (theme === 'dark') {

        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');

    } else if (theme === 'system') {

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (prefersDark) {

            document.body.classList.add('dark-mode');

        } else {

            document.body.classList.remove('dark-mode');

        }

        localStorage.setItem('theme', 'system');

    }

}

window.setTheme = setTheme;

function loadTheme() {

    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);

}

loadTheme();

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isDarkMode = document.body.classList.contains('dark-mode');

        setTheme(isDarkMode ? 'light' : 'dark');

        themeToggle.innerHTML = isDarkMode ? "🌙" : "☀️";

    });

}

console.log("✅ Version 8.0 | Theme System Loaded");

/* ==========================================
   LANGUAGE SYSTEM
========================================== */

function setLanguage(lang) {

    localStorage.setItem('language', lang);

    console.log(`Language changed to: ${lang}`);

}

window.setLanguage = setLanguage;

console.log("✅ Version 8.0 | Language System Loaded");

/* ==========================================
   FOOTER - THREE DATES IN ENGLISH
========================================== */

const gregorianDate = document.getElementById("gregorianDate");
const bengaliDate = document.getElementById("bengaliDate");
const hijriDate = document.getElementById("hijriDate");

const bengaliMonths = [
    "Baishakh", "Jyoishtho", "Asad", "Shraban", "Bhadro", "Ashwin",
    "Kartik", "Agrahayan", "Poush", "Magh", "Phalgun", "Chaitra"
];

const hijriMonths = [
    "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani",
    "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
];

function getGregorianDateInEnglish(date) {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

function getGregorianToBengaliDate(date) {
    const bengaliYear = date.getFullYear() - 593;
    const bengaliNewYear = new Date(date.getFullYear(), 3, 14);
    
    let bengaliMonth, bengaliDay;
    
    if (date < bengaliNewYear) {
        bengaliMonth = date.getMonth();
        bengaliDay = date.getDate() - (new Date(date.getFullYear() - 1, 3, 14).getDate() - 1);
    } else {
        bengaliMonth = date.getMonth() - 3;
        if (bengaliMonth < 0) bengaliMonth += 12;
        bengaliDay = date.getDate();
    }
    
    if (bengaliDay <= 0) {
        bengaliMonth--;
        if (bengaliMonth < 0) bengaliMonth = 11;
        bengaliDay += 30;
    }
    
    const monthName = bengaliMonths[bengaliMonth] || "Unknown";
    return `${bengaliDay} ${monthName} ${bengaliYear}`;
}

function getGregorianToHijriDate(date) {
    const hijriText = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
    
    return hijriText;
}

function updateFooterDates() {

    const today = new Date();

    if (gregorianDate) {
        gregorianDate.textContent = getGregorianDateInEnglish(today);
    }

    if (bengaliDate) {
        bengaliDate.textContent = getGregorianToBengaliDate(today);
    }

    if (hijriDate) {
        hijriDate.textContent = getGregorianToHijriDate(today);
    }

}

updateFooterDates();
setInterval(updateFooterDates, 60000);

console.log("✅ Version 8.0 | Footer Three Dates Loaded");

/* ==========================================
   FOOTER - OTHER INFO
========================================== */

const footerGreeting = document.getElementById("footerGreeting");
const footerNetworkStatus = document.getElementById("footerNetworkStatus");
const footerVisitorCount = document.getElementById("footerVisitorCount");

function updateFooterGreeting() {

    if (!footerGreeting) return;

    const hour = Number(

        new Date().toLocaleString("en-US", {

            timeZone: "Asia/Dhaka",
            hour: "numeric",
            hour12: false

        })

    );

    if (hour >= 5 && hour < 12) {

        footerGreeting.innerHTML = "🌄 Good Morning";

    } else if (hour >= 12 && hour < 17) {

        footerGreeting.innerHTML = "☀️ Good Afternoon";

    } else if (hour >= 17 && hour < 20) {

        footerGreeting.innerHTML = "🌇 Good Evening";

    } else {

        footerGreeting.innerHTML = "🌙 Good Night";

    }

}

function updateNetworkStatus() {

    if (!footerNetworkStatus) return;

    footerNetworkStatus.innerHTML = navigator.onLine ? "🟢 Online" : "🔴 Offline";

}

function updateVisitorCount() {

    if (!footerVisitorCount) return;

    let visits = Number(localStorage.getItem("portfolioVisitor") || 0);

    visits++;

    localStorage.setItem("portfolioVisitor", visits);

    footerVisitorCount.textContent = visits.toLocaleString();

}

updateFooterGreeting();
updateNetworkStatus();
updateVisitorCount();

setInterval(updateFooterGreeting, 60000);

window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

console.log("✅ Version 8.0 | Footer Other Info Loaded");

/* ==========================================
   SCROLL EFFECTS
========================================== */

const scrollTopBtn = document.getElementById("scrollTopBtn");
const progressBar = document.getElementById("progressBar");

function updateScrollEffects() {

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (progressBar) {

        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + "%";

    }

    if (scrollTopBtn) {

        if (scrollTop > 300) {

            scrollTopBtn.style.display = "block";

        } else {

            scrollTopBtn.style.display = "none";

        }

    }

}

window.addEventListener("scroll", updateScrollEffects);

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    });

}

console.log("✅ Version 8.0 | Scroll Effects Loaded");

/* ==========================================
   IMAGE SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
let autoSlide = null;

if (slides.length > 0) {

    function showSlide(index) {

        if (index >= slides.length) {

            currentSlide = 0;

        } else if (index < 0) {

            currentSlide = slides.length - 1;

        } else {

            currentSlide = index;

        }

        slides.forEach((slide, i) => {

            slide.classList.toggle("active", i === currentSlide);

        });

        dots.forEach((dot, i) => {

            dot.classList.toggle("active", i === currentSlide);

        });

    }

    function nextSlide() {

        showSlide(currentSlide + 1);

    }

    function previousSlide() {

        showSlide(currentSlide - 1);

    }

    function startSlider() {

        if (autoSlide) clearInterval(autoSlide);

        autoSlide = setInterval(nextSlide, 4000);

    }

    function stopSlider() {

        if (autoSlide) clearInterval(autoSlide);

    }

    if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startSlider(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { previousSlide(); startSlider(); });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => { showSlide(index); startSlider(); });

    });

    slides.forEach((slide) => {

        slide.addEventListener("mouseenter", stopSlider);
        slide.addEventListener("mouseleave", startSlider);

    });

    showSlide(0);
    startSlider();

}

console.log("✅ Version 8.0 | Image Slider Loaded");

/* ==========================================
   FADE IN ANIMATION
========================================== */

const fadeItems = document.querySelectorAll(".skill-card, .certificate-card, .experience-card, .contact-card");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            fadeObserver.unobserve(entry.target);

        }

    });

}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

fadeItems.forEach((item) => {

    item.classList.add("fade-in");
    fadeObserver.observe(item);

});

console.log("✅ Version 8.0 | Fade In Animation Loaded");

/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");
        const originalButtonText = submitButton ? submitButton.innerHTML : "";

        if (submitButton) {

            submitButton.disabled = true;
            submitButton.innerHTML = "Sending...";

        }

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",
                body: new FormData(contactForm),
                headers: { "Accept": "application/json" }

            });

            if (response.ok) {

                alert("✅ Your message has been sent successfully.");
                contactForm.reset();

            } else {

                alert("❌ Failed to send the message.");

            }

        } catch (error) {

            alert("❌ Network Error. Please try again.");

        }

        if (submitButton) {

            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;

        }

    });

}

console.log("✅ Version 8.0 | Contact Form Loaded");

/* ==========================================
   WEATHER API
========================================== */

const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

function getWeatherText(code) {

    const weatherCodes = {

        0: "☀️ Clear Sky",
        1: "🌤 Mainly Clear",
        2: "⛅ Partly Cloudy",
        3: "☁️ Cloudy",
        45: "🌫 Fog",
        48: "🌫 Dense Fog",
        51: "🌦 Light Drizzle",
        53: "🌦 Moderate Drizzle",
        55: "🌧 Heavy Drizzle",
        61: "🌦 Light Rain",
        63: "🌧 Moderate Rain",
        65: "🌧 Heavy Rain",
        71: "❄️ Light Snow",
        73: "❄️ Snow",
        75: "❄️ Heavy Snow",
        80: "🌦 Rain Shower",
        81: "🌧 Heavy Shower",
        95: "⛈ Thunderstorm"

    };

    return weatherCodes[code] || "🌍 Weather Information";

}

async function loadWeather(latitude, longitude) {

    try {

        const response = await fetch(

            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`

        );

        const data = await response.json();

        if (weatherTemp) weatherTemp.textContent = data.current.temperature_2m + "°C";
        if (weatherDesc) weatherDesc.textContent = getWeatherText(data.current.weather_code);

    } catch (error) {

        if (weatherTemp) weatherTemp.textContent = "--°C";
        if (weatherDesc) weatherDesc.textContent = "Unable to load weather.";

    }

}

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            if (weatherCity) weatherCity.textContent = "📍 Your Current Location";

            loadWeather(lat, lon);

        },

        function () {

            if (weatherCity) weatherCity.textContent = "📍 Dhaka, Bangladesh";

            loadWeather(23.8103, 90.4125);

        }

    );

} else {

    if (weatherCity) weatherCity.textContent = "📍 Dhaka, Bangladesh";

    loadWeather(23.8103, 90.4125);

}

console.log("✅ Version 8.0 | Weather API Loaded");

/* ==========================================
   DAILY QUOTE
========================================== */

const dailyQuote = document.getElementById("dailyQuote");

const quotes = [

    "Indeed, Allah is with the patient. (Qur'an 2:153)",
    "So remember Me; I will remember you. (Qur'an 2:152)",
    "Allah does not burden a soul beyond that it can bear. (Qur'an 2:286)",
    "Verily, with hardship comes ease. (Qur'an 94:6)",
    "And whoever relies upon Allah, He is sufficient for him. (Qur'an 65:3)",
    "The best among you are those who learn the Qur'an and teach it. (Sahih al-Bukhari)",
    "Prayer is the key to success.",
    "Knowledge is light.",
    "Success belongs to those who trust Allah.",
    "Never stop learning.",
    "Every new day is another opportunity to worship Allah.",
    "Good character is the best wealth.",
    "Be truthful, even if it is difficult.",
    "Seek knowledge throughout your life.",
    "Patience opens every door.",
    "The Qur'an is the light of the heart.",
    "Always trust Allah's plan.",
    "Make today better than yesterday.",
    "The strongest believer never loses hope.",
    "Gratitude increases blessings."

];

function updateQuote() {

    if (!dailyQuote) return;

    const today = new Date();
    const quoteIndex = today.getDate() % quotes.length;

    dailyQuote.style.opacity = "0";
    dailyQuote.style.transform = "translateY(10px)";

    setTimeout(() => {

        dailyQuote.textContent = quotes[quoteIndex];
        dailyQuote.style.opacity = "1";
        dailyQuote.style.transform = "translateY(0px)";

    }, 400);

}

updateQuote();

console.log("✅ Version 8.0 | Daily Quote Loaded");

/* ==========================================
   TYPING ANIMATION
========================================== */

const typingText = document.getElementById("typingText");

if (typingText) {

    const typingWords = [

        "Assalamu Alaikum",
        "Welcome To My Official Portfolio",
        "Muhammad Jamil Uddin",
        "Hafiz of the Holy Qur'an",
        "Qur'anic Sciences Student",
        "International Islamic University Chittagong",
        "Islamic Researcher",
        "Future International Scholar",
        "Web Developer",
        "Graphic Designer",
        "Public Speaker",
        "Volunteer",
        "Content Creator"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typingEffect() {

        const word = typingWords[wordIndex];

        if (!deleting) {

            typingText.textContent = word.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex > word.length) {

                deleting = true;
                setTimeout(typingEffect, 1800);
                return;

            }

        } else {

            typingText.textContent = word.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {

                deleting = false;
                wordIndex++;

                if (wordIndex >= typingWords.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typingEffect, deleting ? 45 : 90);

    }

    typingEffect();

}

console.log("✅ Version 8.0 | Typing Animation Loaded");

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1500);

        setTimeout(() => {

            loader.style.display = "none";

        }, 2100);

    }

});

console.log("✅ Version 8.0 | Loader System Loaded");

/* ==========================================
   FOOTER YEAR
========================================== */

const footerYear = document.getElementById("footerYear");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

/* ==========================================
   MUSIC BUTTON
========================================== */

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

if (music && musicBtn) {

    music.volume = 0.40;
    musicBtn.innerHTML = "🎵";
    musicBtn.title = "Play Music";

    musicBtn.addEventListener("click", async () => {

        try {

            if (!isPlaying) {

                await music.play();
                isPlaying = true;
                musicBtn.innerHTML = "⏸️";
                musicBtn.title = "Pause Music";

            } else {

                music.pause();
                isPlaying = false;
                musicBtn.innerHTML = "🎵";
                musicBtn.title = "Play Music";

            }

        } catch (error) {

            console.log("Music playback blocked by browser.");

        }

    });

    music.addEventListener("ended", () => {

        isPlaying = false;
        musicBtn.innerHTML = "🎵";
        musicBtn.title = "Play Music";

    });

}

console.log("✅ Version 8.0 | Music Button Loaded");

/* ==========================================
   FINAL INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Website Initialized Successfully.");

});

document.querySelectorAll("img").forEach((image) => {

    image.setAttribute("draggable", "false");
    image.addEventListener("dragstart", (event) => event.preventDefault());

});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({ behavior: "smooth", block: "start" });

    });

});

document.querySelectorAll("a").forEach((link) => {

    if (link.hostname && link.hostname !== location.hostname) {

        link.target = "_blank";
        link.rel = "noopener noreferrer";

    }

});

window.addEventListener("online", () => {

    console.log("🟢 Internet Connected");

});

window.addEventListener("offline", () => {

    console.log("🔴 Internet Disconnected");

});

/* ==========================================
   FINAL CONSOLE MESSAGE
========================================== */

console.log("%c==============================================", "color:#2563eb;font-size:14px;font-weight:bold;");
console.log("%cMuhammad Jamil Uddin", "color:#2563eb;font-size:22px;font-weight:bold;");
console.log("%cOfficial Portfolio Website", "color:#0ea5e9;font-size:16px;");
console.log("%cVersion 8.0 Ultimate Edition - New Header Design", "color:#16a34a;font-size:18px;font-weight:bold;");
console.log("%cAll Features Loaded Successfully", "color:#f59e0b;font-size:14px;");
console.log("%c==============================================", "color:#2563eb;font-size:14px;font-weight:bold;");

/* ==========================================
   MUHAMMAD JAMIL UDDIN
   OFFICIAL PORTFOLIO WEBSITE
   VERSION 6.0
   PART 3.1
========================================== */

"use strict";

/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

const menuItems = document.querySelectorAll("#nav-links a");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ==========================
   ACTIVE MENU ON SCROLL
(Next Part)
========================== */
/* ==========================================
   VERSION 6.0
   PART 3.2
   AUTO IMAGE SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
let autoSlide;

/* ===== Show Slide ===== */

function showSlide(index){

    if(!slides.length) return;

    if(index >= slides.length){

        currentSlide = 0;

    }else if(index < 0){

        currentSlide = slides.length - 1;

    }else{

        currentSlide = index;

    }

    slides.forEach(slide =>{

        slide.classList.remove("active");

    });

    dots.forEach(dot =>{

        dot.classList.remove("active");

    });

    slides[currentSlide].classList.add("active");

    if(dots[currentSlide]){

        dots[currentSlide].classList.add("active");

    }

}

/* ===== Next ===== */

function nextSlide(){

    showSlide(currentSlide + 1);

}

/* ===== Previous ===== */

function previousSlide(){

    showSlide(currentSlide - 1);

}

/* ===== Auto Slide ===== */

function startSlider(){

    autoSlide = setInterval(nextSlide,3000);

}

function stopSlider(){

    clearInterval(autoSlide);

}

/* ===== Button ===== */

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        stopSlider();

        nextSlide();

        startSlider();

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        stopSlider();

        previousSlide();

        startSlider();

    });

}

/* ===== Dot Click ===== */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        stopSlider();

        showSlide(index);

        startSlider();

    });

});

/* ===== Initialize ===== */

if(slides.length){

    showSlide(0);

    startSlider();

}
/* ==========================================
   VERSION 6.0
   PART 3.3
   SCROLL EFFECTS
========================================== */

/* ===== Scroll To Top Button ===== */

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===== Progress Bar ===== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {

        progressBar.style.width = progress + "%";

    }

});

/* ===== Fade In Animation ===== */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(element => {

    observer.observe(element);

});
/* ==========================================
   VERSION 6.0
   PART 3.4
   DARK MODE & MUSIC
========================================== */

/* ===== Dark Mode ===== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";

        }

    });

}

/* ===== Background Music ===== */

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (isPlaying) {

            music.pause();
            musicBtn.textContent = "🎵";

        } else {

            music.play().catch(() => {
                console.log("Music playback requires user interaction.");
            });

            musicBtn.textContent = "⏸️";

        }

        isPlaying = !isPlaying;

    });

}

/* ===== Restore Music Icon ===== */

music.addEventListener("ended", () => {

    isPlaying = false;
    musicBtn.textContent = "🎵";

});
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.5.1
   SECTION : ADVANCED LIVE CLOCK

   FEATURES
   ----------------------------------------
   ✅ Bangladesh Time (Asia/Dhaka)
   ✅ 12-Hour Format (AM / PM)
   ✅ Live Seconds
   ✅ Auto Refresh Every Second
   ✅ International Time Ready
   ✅ Footer Clock System
   ✅ Performance Optimized

   AUTHOR  : Muhammad Jamil Uddin
   UPDATED : Version 7.0
========================================================== */
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.5.2
   SECTION : ADVANCED LIVE CLOCK
========================================================== */

/* ===== Clock Elements ===== */

const bdClock = document.getElementById("bdClock");
const utcClock = document.getElementById("utcClock");
const currentYear = document.getElementById("currentYear");
const networkStatus = document.getElementById("networkStatus");
const visitorCount = document.getElementById("visitorCount");

/* ===== Live Clock ===== */

function updateClock() {

    const now = new Date();

    /* Bangladesh Time */

    if (bdClock) {

        bdClock.textContent =
            now.toLocaleTimeString("en-US", {

                timeZone: "Asia/Dhaka",

                hour: "numeric",

                minute: "2-digit",

                second: "2-digit",

                hour12: true

            });

    }

    /* International UTC Time */

    if (utcClock) {

        utcClock.textContent =
            now.toLocaleTimeString("en-GB", {

                timeZone: "UTC",

                hour: "2-digit",

                minute: "2-digit",

                second: "2-digit",

                hour12: false

            }) + " UTC";

    }

}

updateClock();

setInterval(updateClock, 1000);

/* ===== Current Year ===== */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

/* ===== Network Status ===== */

function updateNetworkStatus() {

    if (!networkStatus) return;

    networkStatus.innerHTML =
        navigator.onLine
            ? "🟢 Online"
            : "🔴 Offline";

}

updateNetworkStatus();

window.addEventListener("online", updateNetworkStatus);

window.addEventListener("offline", updateNetworkStatus);

/* ===== Visitor Counter ===== */

let visits = Number(localStorage.getItem("portfolioVisitor") || 0);

visits++;

localStorage.setItem("portfolioVisitor", visits);

if (visitorCount) {

    visitorCount.textContent = visits.toLocaleString();

}
/* ==========================================================
   VERSION : 7.0
   PART    : 3.5.3
   SECTION : GREETING & MULTILINGUAL TIME
========================================================== */

/* ===== Greeting ===== */

const greeting = document.getElementById("greeting");

function updateGreeting() {

    if (!greeting) return;

    const hour = Number(
        new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            hour12: false
        })
    );

    let message = "";

    if (hour >= 5 && hour < 12) {

        message = "🌅 Good Morning";

    } else if (hour >= 12 && hour < 17) {

        message = "☀️ Good Afternoon";

    } else if (hour >= 17 && hour < 20) {

        message = "🌇 Good Evening";

    } else {

        message = "🌙 Good Night";

    }

    greeting.textContent = message;

}

updateGreeting();

setInterval(updateGreeting, 60000);
/* ===== Visitor Counter ===== */

const visitorCount =
document.getElementById("visitorCount");

let visits =
localStorage.getItem("portfolioVisitor");

if (!visits) {

    visits = 1;

} else {

    visits = Number(visits) + 1;

}

localStorage.setItem(
"portfolioVisitor",
visits
);

if (visitorCount) {

    visitorCount.textContent =
    visits.toLocaleString();

}
/* =========================================
   VERSION 7.0
   PART 3.6.1
   SMART DATE & HIJRI DATE
========================================= */

const hijriDate = document.getElementById("hijriDate");

/* ===== English Date ===== */
const englishDate = document.getElementById("englishDate");

/* ===== Bangla Date ===== */
const banglaDate = document.getElementById("banglaDate");

/* ===== Arabic Date ===== */
const arabicDate = document.getElementById("arabicDate");

function updateDates() {

    const today = new Date();

    /* English Date */

    if (englishDate) {

        englishDate.textContent =
            today.toLocaleDateString("en-GB", {

                weekday: "long",

                day: "2-digit",

                month: "long",

                year: "numeric"

            });

    }

    /* Bangla Date */

    if (banglaDate) {

        banglaDate.textContent =
            today.toLocaleDateString("bn-BD", {

                weekday: "long",

                day: "numeric",

                month: "long",

                year: "numeric"

            });

    }

    /* Arabic Date */

    if (arabicDate) {

        arabicDate.textContent =
            today.toLocaleDateString("ar-SA", {

                weekday: "long",

                day: "numeric",

                month: "long",

                year: "numeric"

            });

    }

    /* Hijri Date */

    if (hijriDate) {

        hijriDate.textContent =
            new Intl.DateTimeFormat("en-TN-u-ca-islamic", {

                day: "numeric",

                month: "long",

                year: "numeric"

            }).format(today);

    }

}

updateDates();

/* প্রতি ১ মিনিট পর Date Refresh হবে */

setInterval(updateDates, 60000);
/* =========================================
   VERSION 7.0
   PART 3.6.2
   PROFESSIONAL DAILY QUOTES
========================================= */

const quotes = [

"Indeed, Allah is with the patient. (Qur'an 2:153)",

"So remember Me; I will remember you. (Qur'an 2:152)",

"And whoever relies upon Allah - then He is sufficient for him. (Qur'an 65:3)",

"The best among you are those who learn the Qur'an and teach it. (Sahih al-Bukhari)",

"Allah does not burden a soul beyond that it can bear. (Qur'an 2:286)",

"Verily, with hardship comes ease. (Qur'an 94:6)",

"The most beloved deeds to Allah are the consistent ones, even if they are small. (Bukhari & Muslim)",

"Seek knowledge from the cradle to the grave.",

"Success belongs to those who trust Allah.",

"Every new day is another chance to worship Allah sincerely.",

"Your character is your greatest beauty.",

"Prayer is the key to success."

];

const dailyQuote = document.getElementById("dailyQuote");

function updateDailyQuote(){

    if(!dailyQuote) return;

    const today = new Date();

    const index = today.getDate() % quotes.length;

    dailyQuote.style.opacity = "0";

    setTimeout(()=>{

        dailyQuote.textContent = quotes[index];

        dailyQuote.style.opacity = "1";

    },300);

}

updateDailyQuote();
/* =========================================
   VERSION 7.0
   PART 3.6.3
   PROFESSIONAL TYPING ANIMATION
========================================= */

const typingText = document.getElementById("typingText");

const words = [

    "Hafiz of the Holy Qur'an",

    "Qur'anic Sciences Student",

    "International Islamic University Chittagong",

    "Islamic Researcher",

    "Future International Scholar",

    "Web Developer",

    "Graphic Designer",

    "Public Speaker",

    "Volunteer",

    "Content Creator",

    "Lifelong Learner"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typingEffect, 1800);

            return;

        }

    } else {

        typingText.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(

        typingEffect,

        isDeleting ? 45 : 90

    );

}

typingEffect();

/* ===== Cursor Blink ===== */

setInterval(() => {

    if (!typingText) return;

    typingText.style.borderRight =
        typingText.style.borderRight ===
        "3px solid #0d6efd"

        ? "3px solid transparent"

        : "3px solid #0d6efd";

}, 500);
/* ==========================================
   VERSION 6.0
   PART 3.7
   WEATHER & USER LOCATION
========================================== */

/* ===== Weather ===== */

const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

function showWeather(city){

    if(!weatherCity || !weatherTemp || !weatherDesc) return;

    weatherCity.textContent = city;
    weatherTemp.textContent = "Temperature: --°C";
    weatherDesc.textContent = "Weather information is unavailable (API not connected).";

}

/* ===== User Location ===== */

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(

        function(position){

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            weatherCity.textContent =
                "Your Location";

            weatherTemp.textContent =
                latitude.toFixed(4) + "°, " +
                longitude.toFixed(4) + "°";

            weatherDesc.textContent =
                "Location detected successfully.";

        },

        function(){

            showWeather("Location Permission Denied");

        }

    );

}else{

    showWeather("Geolocation Not Supported");

}

/* ===== Welcome Message ===== */

window.addEventListener("load",()=>{

    console.log("Welcome to Muhammad Jamil Uddin's Portfolio Website.");

});
/* ==========================================
   VERSION 6.0
   PART 3.8
   LOADER & PERFORMANCE
========================================== */

/* ===== Loader ===== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ===== Fade In Animation ===== */

const animatedItems = document.querySelectorAll(
    ".skill-card, .certificate-card, .experience-card, .education-card, .contact-card"
);

const animationObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

animatedItems.forEach(item => {

    item.classList.add("fade-in");

    animationObserver.observe(item);

});

/* ===== Lazy Loading Images ===== */

const allImages = document.querySelectorAll("img");

allImages.forEach(image => {

    image.setAttribute("loading", "lazy");

});


/* =========================================
   VERSION : 7.0
   PART    : 1.1
   AUTO HIDE LOADER
========================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");

            setTimeout(function () {

                loader.remove();

            }, 600);

        }, 1500);

    }

});
/* ===== Keyboard Shortcut ===== */

document.addEventListener("keydown", (event) => {

    // Press Home key to go top

    if (event.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ===== Console Message ===== */

console.log("%cWelcome to Muhammad Jamil Uddin's Portfolio",
"color:#0f766e;font-size:18px;font-weight:bold;");

console.log("Website Version 6.0 Loaded Successfully.");
/* ==========================================
   VERSION 6.0
   PART 3.9
   CONTACT FORM & COPY FEATURES
========================================== */

/* ===== AJAX Contact Form ===== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: formData,

                headers: {
                    "Accept": "application/json"
                }

            });

            if (response.ok) {

                alert("✅ Your message has been sent successfully.");

                contactForm.reset();

            } else {

                alert("❌ Failed to send message. Please try again.");

            }

        } catch (error) {

            alert("❌ Network error. Please try again.");

        }

    });

}

/* ===== Copy Email ===== */

function copyEmail() {

    navigator.clipboard.writeText("muhammadjamil252839@gmail.com");

    alert("✅ Email copied successfully.");

}

/* ===== Copy Mobile ===== */

function copyPhone() {

    navigator.clipboard.writeText("+8801826067398");

    alert("✅ Mobile number copied successfully.");

}

/* ===== Double Click to Copy ===== */

document.querySelectorAll(".contact-card").forEach(card => {

    card.addEventListener("dblclick", () => {

        const text = card.innerText;

        navigator.clipboard.writeText(text);

        alert("✅ Information copied.");

    });

});

/* ===== Email Shortcut ===== */

document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key.toLowerCase() === "e") {

        window.location.href =
            "mailto:muhammadjamil252839@gmail.com";

    }

});

/* ===== Phone Shortcut ===== */

document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key.toLowerCase() === "p") {

        window.location.href =
            "tel:+8801826067398";

    }

});
/* ==========================================
   VERSION 6.0
   PART 3.10 (FINAL)
   WEBSITE INITIALIZATION
========================================== */

/* ===== WEBSITE READY ===== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Website initialized successfully.");

});

/* ===== Disable Right Click (Optional) ===== */

document.addEventListener("contextmenu", (event) => {

    event.preventDefault();

});

/* ===== Disable Image Drag ===== */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("dragstart", (event) => {

        event.preventDefault();

    });

});

/* ===== Keyboard Shortcuts ===== */

document.addEventListener("keydown", (event) => {

    // Ctrl + U

    if (event.ctrlKey && event.key.toLowerCase() === "u") {

        event.preventDefault();

    }

    // F12

    if (event.key === "F12") {

        event.preventDefault();

    }

});

/* ===== Error Handling ===== */

window.addEventListener("error", (event) => {

    console.error("Website Error:", event.message);

});

/* ===== Welcome Message ===== */

console.log("%c=================================",
"color:#0f766e");

console.log("%cMuhammad Jamil Uddin",
"color:#0f766e;font-size:20px;font-weight:bold;");

console.log("%cOfficial Portfolio Website",
"color:#14b8a6;font-size:16px;");

console.log("%cVersion 6.0",
"color:#0f766e");

console.log("%c=================================",
"color:#0f766e");

/* ===== Finish ===== */

console.log("All JavaScript modules loaded successfully.");

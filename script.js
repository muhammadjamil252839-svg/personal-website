/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 8.0 ULTIMATE EDITION
   SECTION : COMPLETE JAVASCRIPT MODULE
========================================================== */

"use strict";

/* ===== Elements ===== */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");

/* ===== Toggle Mobile Menu ===== */

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

/* ===== Close Menu After Clicking Link ===== */

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    });

});

/* ===== Close Menu When Clicking Outside ===== */

document.addEventListener("click", (event) => {

    if (!menuBtn || !navLinks) return;

    if (

        !menuBtn.contains(event.target) &&

        !navLinks.contains(event.target)

    ) {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    }

});

/* ===== ESC Key Closes Menu ===== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    }

});

console.log("✅ Version 8.0 | Mobile Menu System Loaded");

/* ==========================================================
   VERSION 8.0
   SIDEBAR MENU SYSTEM
========================================================== */

if (sidebarToggle && sidebar) {

    sidebarToggle.addEventListener("click", () => {

        sidebar.classList.add("active");

    });

}

if (sidebarClose && sidebar) {

    sidebarClose.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

}

document.addEventListener("click", (event) => {

    if (sidebar && sidebarToggle) {

        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {

            sidebar.classList.remove("active");

        }

    }

});

console.log("✅ Version 8.0 | Sidebar Menu Loaded");

/* ==========================================================
   VERSION 8.0
   ACCORDION SYSTEM
========================================================== */

function toggleAccordion(id) {

    const element = document.getElementById(id);

    if (element) {

        element.classList.toggle("active");

    }

}

window.toggleAccordion = toggleAccordion;

console.log("✅ Version 8.0 | Accordion System Loaded");

/* ==========================================================
   VERSION 8.0
   THEME SYSTEM
========================================================== */

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

/* ==========================================================
   VERSION 8.0
   LANGUAGE SYSTEM
========================================================== */

function setLanguage(lang) {

    localStorage.setItem('language', lang);

    console.log(`Language changed to: ${lang}`);

}

window.setLanguage = setLanguage;

function getLanguage() {

    return localStorage.getItem('language') || 'en';

}

console.log("✅ Version 8.0 | Language System Loaded");

/* ==========================================================
   PROFESSIONAL IMAGE SLIDER
========================================================== */

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

            slide.classList.toggle(

                "active",
                i === currentSlide
            );

        });

        dots.forEach((dot, i) => {

            dot.classList.toggle(

                "active",
                i === currentSlide
            );

        });

    }

    function nextSlide() {

        showSlide(currentSlide + 1);

    }

    function previousSlide() {

        showSlide(currentSlide - 1);

    }

    function startSlider() {

        stopSlider();

        autoSlide = setInterval(nextSlide, 4000);

    }

    function stopSlider() {

        if (autoSlide) {

            clearInterval(autoSlide);

        }

    }

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();

            startSlider();

        });

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            previousSlide();

            startSlider();

        });

    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            startSlider();

        });

    });

    slides.forEach((slide) => {

        slide.addEventListener("mouseenter", stopSlider);

        slide.addEventListener("mouseleave", startSlider);

    });

    let startX = 0;

    document.addEventListener("touchstart", (e) => {

        startX = e.touches[0].clientX;

    });

    document.addEventListener("touchend", (e) => {

        const endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {

            nextSlide();

        }

        if (endX - startX > 50) {

            previousSlide();

        }

    });

    showSlide(0);

    startSlider();

}

console.log("✅ Version 8.0 | Image Slider Loaded");

/* ==========================================================
   PROFESSIONAL SCROLL EFFECTS
========================================================== */

const scrollTopBtn = document.getElementById("scrollTopBtn");
const progressBar = document.getElementById("progressBar");

function updateScrollEffects() {

    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (progressBar) {

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width =
            progress + "%";

    }

    if (scrollTopBtn) {

        if (scrollTop > 300) {

            scrollTopBtn.classList.add("show");
            scrollTopBtn.style.display = "block";

        } else {

            scrollTopBtn.classList.remove("show");
            scrollTopBtn.style.display = "none";

        }

    }

}

window.addEventListener(
    "scroll",
    updateScrollEffects
);

updateScrollEffects();

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

const fadeItems = document.querySelectorAll(

".fade-in, .skill-card, .education-card, .certificate-card, .experience-card, .contact-card"

);

const fadeObserver = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            fadeObserver.unobserve(entry.target);

        }

    });

},

{

    threshold: 0.15,

    rootMargin: "0px 0px -50px 0px"

}

);

fadeItems.forEach((item) => {

    item.classList.add("fade-in");

    fadeObserver.observe(item);

});

const sections =
document.querySelectorAll("section[id]");

const navItems =
document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

console.log("✅ Version 8.0 | Scroll Effects Loaded");

/* ==========================================================
   PROFESSIONAL LIVE CLOCK SYSTEM
========================================================== */

const bdClock = document.getElementById("bdClock");
const utcClock = document.getElementById("utcClock");
const greeting = document.getElementById("greeting");
const networkStatus = document.getElementById("networkStatus");
const visitorCount = document.getElementById("visitorCount");

function updateClock() {

    const now = new Date();

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

function updateGreeting(){

    if(!greeting) return;

    const hour = Number(

        new Date().toLocaleString("en-US",{

            timeZone:"Asia/Dhaka",

            hour:"numeric",

            hour12:false

        })

    );

    if(hour>=5 && hour<12){

        greeting.innerHTML="🌄 Good Morning";

    }

    else if(hour>=12 && hour<17){

        greeting.innerHTML="☀️ Good Afternoon";

    }

    else if(hour>=17 && hour<20){

        greeting.innerHTML="🌇 Good Evening";

    }

    else{

        greeting.innerHTML="🌙 Good Night";

    }

}

updateGreeting();

setInterval(updateGreeting, 60000);

function updateNetwork(){

    if(!networkStatus) return;

    networkStatus.innerHTML=

    navigator.onLine

    ? "🟢 Online"

    : "🔴 Offline";

}

updateNetwork();

window.addEventListener("online", updateNetwork);

window.addEventListener("offline", updateNetwork);

if(visitorCount){

    let visits=Number(

        localStorage.getItem("portfolioVisitor")||0

    );

    visits++;

    localStorage.setItem(

        "portfolioVisitor",

        visits

    );

    visitorCount.textContent=

    visits.toLocaleString();

}

console.log("✅ Version 8.0 | Live Clock System Loaded");

/* ==========================================================
   PROFESSIONAL LIVE DATE SYSTEM
========================================================== */

const englishDate =
document.getElementById("englishDate");

const banglaDate =
document.getElementById("banglaDate");

const arabicDate =
document.getElementById("arabicDate");

const hijriDate =
document.getElementById("hijriDate");

const banglaCalendar =
document.getElementById("banglaCalendar");

function updateDates(){

    const today = new Date();

    if(englishDate){

        englishDate.textContent =
        today.toLocaleDateString(

            "en-GB",

            {

                weekday : "long",

                day : "2-digit",

                month : "long",

                year : "numeric"

            }

        );

    }

    if(banglaDate){

        banglaDate.textContent =
        today.toLocaleDateString(

            "bn-BD",

            {

                weekday : "long",

                day : "numeric",

                month : "long",

                year : "numeric"

            }

        );

    }

    if(banglaCalendar){

        banglaCalendar.textContent =
        today.toLocaleDateString(

            "bn-BD-u-ca-beng",

            {

                weekday : "long",

                day : "numeric",

                month : "long",

                year : "numeric"

            }

        );

    }

    if(arabicDate){

        arabicDate.textContent =
        today.toLocaleDateString(

            "ar-SA",

            {

                weekday : "long",

                day : "numeric",

                month : "long",

                year : "numeric"

            }

        );

    }

    if(hijriDate){

        hijriDate.textContent =

        new Intl.DateTimeFormat(

            "en-TN-u-ca-islamic",

            {

                weekday : "long",

                day : "numeric",

                month : "long",

                year : "numeric"

            }

        ).format(today);

    }

}

updateDates();

setInterval(updateDates, 60000);

console.log("✅ Version 8.0 | Live Date System Loaded");

/* ==========================================================
   PROFESSIONAL DAILY QUOTES
========================================================== */

const dailyQuote =
document.getElementById("dailyQuote");

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

function updateQuote(){

    if(!dailyQuote) return;

    const today = new Date();

    const quoteIndex =

    today.getDate() % quotes.length;

    dailyQuote.style.opacity = "0";

    dailyQuote.style.transform =

    "translateY(10px)";

    setTimeout(()=>{

        dailyQuote.textContent =

        quotes[quoteIndex];

        dailyQuote.style.opacity = "1";

        dailyQuote.style.transform =

        "translateY(0px)";

    },400);

}

updateQuote();

console.log("✅ Version 8.0 | Daily Quotes Loaded");

/* ==========================================================
   SAFE TYPING ANIMATION
========================================================== */

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

            typingText.textContent =
            word.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex > word.length) {

                deleting = true;

                setTimeout(typingEffect, 1800);

                return;

            }

        } else {

            typingText.textContent =
            word.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= typingWords.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(

            typingEffect,

            deleting ? 45 : 90

        );

    }

    typingEffect();

    setInterval(() => {

        typingText.style.borderRight =

        typingText.style.borderRight ===
        "3px solid #0d6efd"

        ?

        "3px solid transparent"

        :

        "3px solid #0d6efd";

    }, 500);

}

console.log("✅ Version 8.0 | Typing Animation Loaded");

/* ==========================================================
   REAL WEATHER API
========================================================== */

const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

function getWeatherText(code){

    const weatherCodes={

        0:"☀️ Clear Sky",

        1:"🌤 Mainly Clear",

        2:"⛅ Partly Cloudy",

        3:"☁️ Cloudy",

        45:"🌫 Fog",

        48:"🌫 Dense Fog",

        51:"🌦 Light Drizzle",

        53:"🌦 Moderate Drizzle",

        55:"🌧 Heavy Drizzle",

        61:"🌦 Light Rain",

        63:"🌧 Moderate Rain",

        65:"🌧 Heavy Rain",

        71:"❄️ Light Snow",

        73:"❄️ Snow",

        75:"❄️ Heavy Snow",

        80:"🌦 Rain Shower",

        81:"🌧 Heavy Shower",

        95:"⛈ Thunderstorm"

    };

    return weatherCodes[code] || "🌍 Weather Information";

}

async function loadWeather(latitude, longitude){

    try{

        const response=await fetch(

`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`

        );

        const data=await response.json();

        if(weatherTemp){

            weatherTemp.textContent=

            data.current.temperature_2m+"°C";

        }

        if(weatherDesc){

            weatherDesc.textContent=

            getWeatherText(

                data.current.weather_code

            );

        }

    }

    catch(error){

        if(weatherTemp){

            weatherTemp.textContent="--°C";

        }

        if(weatherDesc){

            weatherDesc.textContent=

            "Unable to load weather.";

        }

    }

}

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(

        function(position){

            const lat=

            position.coords.latitude;

            const lon=

            position.coords.longitude;

            if(weatherCity){

                weatherCity.textContent=

                "📍 Your Current Location";

            }

            loadWeather(lat, lon);

        },

        function(){

            if(weatherCity){

                weatherCity.textContent=

                "📍 Dhaka, Bangladesh";

            }

            loadWeather(23.8103, 90.4125);

        }

    );

}else{

    if(weatherCity){

        weatherCity.textContent=

        "📍 Dhaka, Bangladesh";

    }

    loadWeather(23.8103, 90.4125);

}

console.log("✅ Version 8.0 | Weather API Loaded");

/* ==========================================================
   LOADER & PERFORMANCE
========================================================== */

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

/* ==========================================================
   PROFESSIONAL CONTACT FORM
========================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton =
        contactForm.querySelector("button[type='submit']");

        const originalButtonText =
        submitButton ? submitButton.innerHTML : "";

        if (submitButton) {

            submitButton.disabled = true;

            submitButton.innerHTML = "Sending...";

        }

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",

                body: new FormData(contactForm),

                headers: {

                    "Accept": "application/json"

                }

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

/* ==========================================================
   COPY EMAIL & PHONE
========================================================== */

function copyEmail() {

    navigator.clipboard.writeText(

        "muhammadjamil252839@gmail.com"

    ).then(() => {

        alert("✅ Email copied successfully.");

    });

}

function copyPhone() {

    navigator.clipboard.writeText(

        "+8801826067398"

    ).then(() => {

        alert("✅ Mobile number copied successfully.");

    });

}

window.copyEmail = copyEmail;
window.copyPhone = copyPhone;

document.querySelectorAll(".contact-card").forEach(card => {

    card.addEventListener("dblclick", () => {

        navigator.clipboard.writeText(

            card.innerText

        );

        alert("✅ Information copied.");

    });

});

console.log("✅ Version 8.0 | Copy Functions Loaded");

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown", (event) => {

    if (event.ctrlKey && event.key.toLowerCase() === "d") {

        event.preventDefault();

        if (themeToggle) {

            themeToggle.click();

        }

    }

    if (event.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

console.log("✅ Version 8.0 | Keyboard Shortcuts Loaded");

/* ==========================================================
   FINAL INITIALIZATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Website Initialized Successfully.");

});

document.querySelectorAll("img").forEach((image) => {

    image.setAttribute("draggable", "false");

    image.addEventListener("dragstart", (event) => {

        event.preventDefault();

    });

});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

document.querySelectorAll("a").forEach((link) => {

    if (

        link.hostname &&

        link.hostname !== location.hostname

    ) {

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

window.addEventListener("error", (event) => {

    console.error(

        "Website Error :",

        event.message

    );

});

const footerYear = document.getElementById("footerYear");

if (footerYear) {

    footerYear.textContent =

    new Date().getFullYear();

}

/* ==========================================================
   FINAL CONSOLE MESSAGE
========================================================== */

console.log("%c==============================================",
"color:#2563eb;font-size:14px;font-weight:bold;");

console.log("%cMuhammad Jamil Uddin",
"color:#2563eb;font-size:22px;font-weight:bold;");

console.log("%cOfficial Portfolio Website",
"color:#0ea5e9;font-size:16px;");

console.log("%cVersion 8.0 Ultimate Edition",
"color:#16a34a;font-size:18px;font-weight:bold;");

console.log("%cAll Features Loaded Successfully",
"color:#f59e0b;font-size:14px;");

console.log("%c==============================================",
"color:#2563eb;font-size:14px;font-weight:bold;");

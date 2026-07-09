/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.1
   SECTION : MOBILE MENU SYSTEM
========================================================== */

"use strict";

/* ===== Elements ===== */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

/* ===== Toggle Mobile Menu ===== */

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

        if (menuIcon) {

            if (navLinks.classList.contains("active")) {

                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");

            } else {

                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");

            }

        }

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

        if (menuIcon) {

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

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

        if (menuIcon) {

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        }

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

        if (menuIcon) {

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        }

    }

});

console.log("✅ Version 7.0 | Part 3.1 Loaded Successfully");
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.2
   SECTION : PROFESSIONAL IMAGE SLIDER
========================================================== */

/* ===== Elements ===== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
let autoSlide = null;

if (slides.length > 0) {

    /* ===== Show Slide ===== */

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

    /* ===== Next ===== */

    function nextSlide() {

        showSlide(currentSlide + 1);

    }

    /* ===== Previous ===== */

    function previousSlide() {

        showSlide(currentSlide - 1);

    }

    /* ===== Auto Play ===== */

    function startSlider() {

        stopSlider();

        autoSlide = setInterval(nextSlide, 4000);

    }

    /* ===== Stop ===== */

    function stopSlider() {

        if (autoSlide) {

            clearInterval(autoSlide);

        }

    }

    /* ===== Next Button ===== */

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();

            startSlider();

        });

    }

    /* ===== Previous Button ===== */

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            previousSlide();

            startSlider();

        });

    }

    /* ===== Dot Navigation ===== */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            startSlider();

        });

    });

    /* ===== Pause On Hover ===== */

    slides.forEach((slide) => {

        slide.addEventListener("mouseenter", stopSlider);

        slide.addEventListener("mouseleave", startSlider);

    });

    /* ===== Swipe Support (Mobile) ===== */

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

    /* ===== Start ===== */

    showSlide(0);

    startSlider();

}

console.log("✅ Version 7.0 | Part 3.2 Loaded Successfully");
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.3
   SECTION : PROFESSIONAL SCROLL EFFECTS
========================================================== */

/* ===== Elements ===== */

const scrollTopBtn = document.getElementById("scrollTopBtn");
const progressBar = document.getElementById("progressBar");

/* ===== Scroll Function ===== */

function updateScrollEffects() {

    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    /* Progress Bar */

    if (progressBar) {

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width =
            progress + "%";

    }

    /* Scroll Button */

    if (scrollTopBtn) {

        if (scrollTop > 300) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    }

}

window.addEventListener(
    "scroll",
    updateScrollEffects
);

updateScrollEffects();

/* ===== Scroll To Top ===== */

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===== Fade Animation ===== */

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

/* ===== Active Navigation ===== */

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

/* ===== Console ===== */

console.log(
"✅ Version 7.0 | Part 3.3 Loaded Successfully"
);
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.4
   SECTION : PROFESSIONAL DARK MODE & MUSIC
========================================================== */

/* ===== Elements ===== */

const themeToggle = document.getElementById("themeToggle");
const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

/* ==========================================================
   DARK MODE
========================================================== */

function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeToggle) {

            themeToggle.innerHTML = "☀️";

            themeToggle.title = "Light Mode";

        }

    } else {

        document.body.classList.remove("dark-mode");

        if (themeToggle) {

            themeToggle.innerHTML = "🌙";

            themeToggle.title = "Dark Mode";

        }

    }

}

loadTheme();

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML = "☀️";

            themeToggle.title = "Light Mode";

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML = "🌙";

            themeToggle.title = "Dark Mode";

        }

    });

}

/* ==========================================================
   BACKGROUND MUSIC
========================================================== */

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

/* ==========================================================
   SHORTCUT KEYS
========================================================== */

document.addEventListener("keydown", (event) => {

    /* Ctrl + D = Dark Mode */

    if (event.ctrlKey && event.key.toLowerCase() === "d") {

        event.preventDefault();

        if (themeToggle) {

            themeToggle.click();

        }

    }

    /* Ctrl + M = Music */

    if (event.ctrlKey && event.key.toLowerCase() === "m") {

        event.preventDefault();

        if (musicBtn) {

            musicBtn.click();

        }

    }

});

console.log("✅ Version 7.0 | Part 3.4 Loaded Successfully");
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.5
   SECTION : PROFESSIONAL LIVE CLOCK SYSTEM
========================================================== */

/* ===== Elements ===== */

const bdClock = document.getElementById("bdClock");
const utcClock = document.getElementById("utcClock");
const greeting = document.getElementById("greeting");
const currentYear = document.getElementById("currentYear");
const networkStatus = document.getElementById("networkStatus");
const visitorCount = document.getElementById("visitorCount");

/* ==========================================================
   LIVE CLOCK
========================================================== */

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

    /* International (UTC) */

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

setInterval(updateClock,1000);

/* ==========================================================
   GREETING
========================================================== */

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

        greeting.innerHTML="🌅 Good Morning";

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

setInterval(updateGreeting,60000);

/* ==========================================================
   CURRENT YEAR
========================================================== */

if(currentYear){

    currentYear.textContent=new Date().getFullYear();

}

/* ==========================================================
   NETWORK STATUS
========================================================== */

function updateNetwork(){

    if(!networkStatus) return;

    networkStatus.innerHTML=

    navigator.onLine

    ? "🟢 Online"

    : "🔴 Offline";

}

updateNetwork();

window.addEventListener("online",updateNetwork);

window.addEventListener("offline",updateNetwork);

/* ==========================================================
   VISITOR COUNTER
========================================================== */

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

/* ==========================================================
   DIGITAL STATUS
========================================================== */

console.log(

"✅ Version 7.0 | Part 3.5 Loaded Successfully"

);
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.6
   SECTION : SMART DATE + DAILY QUOTE + TYPING
========================================================== */

/* ===== Elements ===== */

const englishDate = document.getElementById("englishDate");
const banglaDate = document.getElementById("banglaDate");
const arabicDate = document.getElementById("arabicDate");
const hijriDate = document.getElementById("hijriDate");

const dailyQuote = document.getElementById("dailyQuote");

const typingText = document.getElementById("typingText");

/* ==========================================================
   LIVE DATE
========================================================== */

function updateDates(){

    const today = new Date();

    if(englishDate){

        englishDate.textContent =
        today.toLocaleDateString("en-GB",{

            weekday:"long",
            day:"2-digit",
            month:"long",
            year:"numeric"

        });

    }

    if(banglaDate){

        banglaDate.textContent =
        today.toLocaleDateString("bn-BD",{

            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"

        });

    }

    if(arabicDate){

        arabicDate.textContent =
        today.toLocaleDateString("ar-SA",{

            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"

        });

    }

    if(hijriDate){

        hijriDate.textContent =
        new Intl.DateTimeFormat(

            "en-TN-u-ca-islamic",

            {

                day:"numeric",
                month:"long",
                year:"numeric"

            }

        ).format(today);

    }

}

updateDates();

setInterval(updateDates,60000);

/* ==========================================================
   DAILY QUOTES
========================================================== */

const quotes=[

"Indeed, Allah is with the patient. (Qur'an 2:153)",

"So remember Me; I will remember you. (Qur'an 2:152)",

"Allah does not burden a soul beyond that it can bear. (Qur'an 2:286)",

"Verily, with hardship comes ease. (Qur'an 94:6)",

"The best among you are those who learn the Qur'an and teach it.",

"And whoever relies upon Allah, He is sufficient for him.",

"Prayer is the key to success.",

"Success belongs to those who trust Allah.",

"Knowledge is light.",

"Never stop learning."

];

function updateQuote(){

    if(!dailyQuote) return;

    const index=

    new Date().getDate()%quotes.length;

    dailyQuote.style.opacity="0";

    setTimeout(()=>{

        dailyQuote.textContent=quotes[index];

        dailyQuote.style.opacity="1";

    },300);

}

updateQuote();

/* ==========================================================
   PROFESSIONAL TYPING
========================================================== */

const typingWords=[

"Hafiz of the Holy Qur'an",

"Qur'anic Sciences Student",

"International Islamic University Chittagong",

"Future International Scholar",

"Islamic Researcher",

"Web Developer",

"Graphic Designer",

"Public Speaker",

"Volunteer",

"Content Creator",

"Lifelong Learner"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typingEffect(){

    if(!typingText) return;

    const word=typingWords[wordIndex];

    if(!deleting){

        typingText.textContent=

        word.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===word.length){

            deleting=true;

            setTimeout(typingEffect,1800);

            return;

        }

    }else{

        typingText.textContent=

        word.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=typingWords.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(

        typingEffect,

        deleting?45:90

    );

}

typingEffect();

/* ===== Cursor ===== */

setInterval(()=>{

    if(!typingText) return;

    typingText.style.borderRight=

    typingText.style.borderRight===

    "3px solid #0d6efd"

    ?

    "3px solid transparent"

    :

    "3px solid #0d6efd";

},500);

console.log("✅ Version 7.0 | Part 3.6 Loaded Successfully");
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.7
   SECTION : REAL WEATHER API
========================================================== */

const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

/* ===== Weather Code ===== */

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

/* ===== Get Weather ===== */

async function loadWeather(latitude,longitude){

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

/* ===== User Location ===== */

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

            loadWeather(lat,lon);

        },

        function(){

            if(weatherCity){

                weatherCity.textContent=

                "📍 Dhaka, Bangladesh";

            }

            loadWeather(

                23.8103,

                90.4125

            );

        }

    );

}else{

    if(weatherCity){

        weatherCity.textContent=

        "📍 Dhaka, Bangladesh";

    }

    loadWeather(

        23.8103,

        90.4125

    );

}

console.log(

"✅ Version 7.0 | Part 3.7 Loaded Successfully"

);
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.8
   SECTION : LOADER & PERFORMANCE
========================================================== */

/* ==========================================================
   WEBSITE LOADED
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

/* ==========================================================
   FADE IN ANIMATION
========================================================== */

const animatedItems = document.querySelectorAll(

".skill-card, .certificate-card, .experience-card, .education-card, .contact-card, .project-card, .service-card"

);

if (animatedItems.length) {

    const animationObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15,

            rootMargin: "0px 0px -50px 0px"

        }

    );

    animatedItems.forEach(item => {

        item.classList.add("fade-in");

        animationObserver.observe(item);

    });

}

/* ==========================================================
   LAZY LOADING
========================================================== */

document.querySelectorAll("img").forEach(image => {

    image.loading = "lazy";

});

/* ==========================================================
   KEYBOARD SHORTCUT
========================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log("%c==========================================",

"color:#2563eb;font-size:14px;font-weight:bold;");

console.log("%cMuhammad Jamil Uddin",

"color:#2563eb;font-size:22px;font-weight:bold;");

console.log("%cOfficial Portfolio Website",

"color:#0ea5e9;font-size:16px;");

console.log("%cVersion 7.0",

"color:#16a34a;font-size:16px;font-weight:bold;");

console.log("%cLoader & Performance Ready",

"color:#f59e0b;font-size:14px;");

console.log("%c==========================================",

"color:#2563eb;font-size:14px;font-weight:bold;");

console.log("✅ Version 7.0 | Part 3.8 Loaded Successfully");
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.9
   SECTION : PROFESSIONAL CONTACT FORM
========================================================== */

/* ===== Contact Form ===== */

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

/* ==========================================================
   COPY EMAIL
========================================================== */

function copyEmail() {

    navigator.clipboard.writeText(

        "muhammadjamil252839@gmail.com"

    ).then(() => {

        alert("✅ Email copied successfully.");

    });

}

/* ==========================================================
   COPY PHONE
========================================================== */

function copyPhone() {

    navigator.clipboard.writeText(

        "+8801826067398"

    ).then(() => {

        alert("✅ Mobile number copied successfully.");

    });

}

/* ==========================================================
   DOUBLE CLICK COPY
========================================================== */

document.querySelectorAll(".contact-card").forEach(card => {

    card.addEventListener("dblclick", () => {

        navigator.clipboard.writeText(

            card.innerText

        );

        alert("✅ Information copied.");

    });

});

/* ==========================================================
   SHORTCUT KEYS
========================================================== */

document.addEventListener("keydown", (event) => {

    if (

        event.ctrlKey &&

        event.key.toLowerCase() === "e"

    ) {

        event.preventDefault();

        window.location.href =

        "mailto:muhammadjamil252839@gmail.com";

    }

    if (

        event.ctrlKey &&

        event.key.toLowerCase() === "p"

    ) {

        event.preventDefault();

        window.location.href =

        "tel:+8801826067398";

    }

});

/* ==========================================================
   CONSOLE
========================================================== */

console.log(

"✅ Version 7.0 | Part 3.9 Loaded Successfully"

);
/* ==========================================================
   PROJECT : Personal Portfolio Website
   VERSION : 7.0
   PART    : 3.10
   SECTION : FINAL INITIALIZATION
========================================================== */

/* ==========================================================
   WEBSITE READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Website Initialized Successfully.");

});


/* ==========================================================
   DISABLE IMAGE DRAG
========================================================== */

document.querySelectorAll("img").forEach((image) => {

    image.setAttribute("draggable", "false");

    image.addEventListener("dragstart", (event) => {

        event.preventDefault();

    });

});


/* ==========================================================
   SMOOTH PAGE ANCHOR SCROLL
========================================================== */

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


/* ==========================================================
   AUTO EXTERNAL LINK
========================================================== */

document.querySelectorAll("a").forEach((link) => {

    if (

        link.hostname &&

        link.hostname !== location.hostname

    ) {

        link.target = "_blank";

        link.rel = "noopener noreferrer";

    }

});


/* ==========================================================
   ONLINE / OFFLINE MESSAGE
========================================================== */

window.addEventListener("online", () => {

    console.log("🟢 Internet Connected");

});

window.addEventListener("offline", () => {

    console.log("🔴 Internet Disconnected");

});


/* ==========================================================
   ERROR HANDLER
========================================================== */

window.addEventListener("error", (event) => {

    console.error(

        "Website Error :",

        event.message

    );

});


/* ==========================================================
   COPYRIGHT YEAR
========================================================== */

const footerYear = document.getElementById("footerYear");

if (footerYear) {

    footerYear.textContent =

    new Date().getFullYear();

}


/* ==========================================================
   FINAL CONSOLE
========================================================== */

console.log(
"%c==============================================",
"color:#2563eb;font-size:14px;font-weight:bold;"
);

console.log(
"%cMuhammad Jamil Uddin",
"color:#2563eb;font-size:22px;font-weight:bold;"
);

console.log(
"%cOfficial Portfolio Website",
"color:#0ea5e9;font-size:16px;"
);

console.log(
"%cVersion 7.0 Final",
"color:#16a34a;font-size:18px;font-weight:bold;"
);

console.log(
"%cGitHub Pages Ready",
"color:#f59e0b;font-size:14px;"
);

console.log(
"%cAll JavaScript Modules Loaded Successfully",
"color:#9333ea;font-size:14px;"
);

console.log(
"%c==============================================",
"color:#2563eb;font-size:14px;font-weight:bold;"
);

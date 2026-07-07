/* ==========================================
   VERSION 5.0
   PART 3.1
   LOADER + MENU
========================================== */

// ================================
// Loader
// ================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

// ================================
// Mobile Menu
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (overlay) {

            overlay.classList.toggle("active");

        }

    });

}

// ================================
// Overlay Close
// ================================

if (overlay) {

    overlay.addEventListener("click", () => {

        navMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

}

// ================================
// Menu Close After Click
// ================================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        if (overlay) {

            overlay.classList.remove("active");

        }

    });

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/* ==========================================
   VERSION 5.0
   PART 3.2
   AUTO IMAGE SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
let autoSlide;

// Show Slide

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    dots.forEach((dot)=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

// Next Slide

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// Previous Slide

function previousSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

// Auto Slider

function startSlider(){

    autoSlide = setInterval(nextSlide,3000);

}

// Stop Slider

function stopSlider(){

    clearInterval(autoSlide);

}

// Buttons

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        stopSlider();

        startSlider();

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        previousSlide();

        stopSlider();

        startSlider();

    });

}

// Dots

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

        stopSlider();

        startSlider();

    });

});

// Start

if(slides.length>0){

    showSlide(currentSlide);

    startSlider();

}
/* ==========================================
   VERSION 5.0
   PART 3.3
   SLIDER TOUCH + PAUSE + KEYBOARD
========================================== */

// ================================
// Pause on Hover
// ================================

const sliderContainer = document.querySelector(".slider-container");

if (sliderContainer) {

    sliderContainer.addEventListener("mouseenter", () => {

        stopSlider();

    });

    sliderContainer.addEventListener("mouseleave", () => {

        startSlider();

    });

}

// ================================
// Mobile Swipe Support
// ================================

let touchStartX = 0;
let touchEndX = 0;

if (sliderContainer) {

    sliderContainer.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

        stopSlider();

    });

    sliderContainer.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        handleSwipe();

        startSlider();

    });

}

function handleSwipe() {

    if (touchStartX - touchEndX > 50) {

        nextSlide();

    }

    if (touchEndX - touchStartX > 50) {

        previousSlide();

    }

}

// ================================
// Keyboard Support
// ================================

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        nextSlide();

    }

    if (e.key === "ArrowLeft") {

        previousSlide();

    }

});

// ================================
// Visibility API
// ================================

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        stopSlider();

    } else {

        startSlider();

    }

});

// ================================
// Image Click Animation
// ================================

slides.forEach((slide) => {

    slide.addEventListener("click", () => {

        slide.style.transform = "scale(1.03)";

        setTimeout(() => {

            slide.style.transform = "scale(1)";

        }, 300);

    });

});
/* ==========================================
   VERSION 5.0
   PART 3.4
   LIVE TIME + DATE
========================================== */

// ================================
// Live Bangladesh Time
// ================================

const timeElement = document.getElementById("liveTime");
const dateElement = document.getElementById("liveDate");
const dayElement = document.getElementById("liveDay");

function updateClock(){

    const now = new Date();

    const options = {

        timeZone: "Asia/Dhaka"

    };

    const time = now.toLocaleTimeString("en-GB",{

        ...options,

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit"

    });

    const date = now.toLocaleDateString("en-GB",{

        ...options,

        day:"2-digit",

        month:"long",

        year:"numeric"

    });

    const day = now.toLocaleDateString("en-GB",{

        ...options,

        weekday:"long"

    });

    if(timeElement){

        timeElement.textContent = "🕒 " + time;

    }

    if(dateElement){

        dateElement.textContent = "📅 " + date;

    }

    if(dayElement){

        dayElement.textContent = "📆 " + day;

    }

}

updateClock();

setInterval(updateClock,1000);

// ================================
// Greeting Message
// ================================

const greeting = document.getElementById("greeting");

function updateGreeting(){

    const hour = new Date().getHours();

    let message = "";

    if(hour < 12){

        message = "🌅 Good Morning";

    }

    else if(hour < 17){

        message = "☀️ Good Afternoon";

    }

    else if(hour < 20){

        message = "🌇 Good Evening";

    }

    else{

        message = "🌙 Good Night";

    }

    if(greeting){

        greeting.textContent = message;

    }

}

updateGreeting();
/* ==========================================
   VERSION 5.0
   PART 3.5
   DARK MODE
========================================== */

// ================================
// Theme Toggle
// ================================

const themeButton = document.getElementById("themeToggle");

// Load Saved Theme

const savedTheme = localStorage.getItem("website-theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark-mode");

    if(themeButton){

        themeButton.textContent="☀️";

    }

}

// Toggle Theme

if(themeButton){

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("website-theme","dark");

            themeButton.textContent="☀️";

        }

        else{

            localStorage.setItem("website-theme","light");

            themeButton.textContent="🌙";

        }

    });

}

// ================================
// Auto Theme (Optional)
// ================================

const currentHour = new Date().getHours();

if(!savedTheme){

    if(currentHour>=18 || currentHour<=6){

        document.body.classList.add("dark-mode");

        if(themeButton){

            themeButton.textContent="☀️";

        }

    }

}

// ================================
// Theme Animation
// ================================

if(themeButton){

    themeButton.addEventListener("click",()=>{

        themeButton.style.transform="rotate(360deg)";

        setTimeout(()=>{

            themeButton.style.transform="rotate(0deg)";

        },500);

    });

}
/* ==========================================
   VERSION 5.0
   PART 3.6
   SCROLL EFFECTS
========================================== */

// ================================
// Scroll To Top Button
// ================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

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

// ================================
// Scroll Progress Bar
// ================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight -

                         document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {

        progressBar.style.width = progress + "%";

    }

});

// ================================
// Fade In Animation
// ================================

const fadeElements = document.querySelectorAll(".fade-in");

function revealElements() {

    fadeElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

// ================================
// Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";

    } else {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.10)";

    }

});

// ================================
// Active Menu
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   VERSION 5.0
   PART 3.7
   HIJRI DATE + VISITOR COUNTER
========================================== */

// ================================
// Hijri Date
// ================================

const hijriElement = document.getElementById("hijriDate");

function updateHijriDate() {

    const today = new Date();

    const hijri = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {

        day: "numeric",
        month: "long",
        year: "numeric"

    }).format(today);

    if (hijriElement) {

        hijriElement.textContent = "🌙 " + hijri;

    }

}

updateHijriDate();

// ================================
// Visitor Counter
// ================================

const visitorElement = document.getElementById("visitorCount");

let visitors = localStorage.getItem("visitorCount");

if (visitors === null) {

    visitors = 1;

} else {

    visitors = Number(visitors) + 1;

}

localStorage.setItem("visitorCount", visitors);

if (visitorElement) {

    visitorElement.textContent = visitors;

}

// ================================
// Current Year
// ================================

const yearElement = document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

// ================================
// Online / Offline Status
// ================================

const statusElement = document.getElementById("networkStatus");

function updateNetworkStatus() {

    if (!statusElement) return;

    if (navigator.onLine) {

        statusElement.textContent = "🟢 Online";

    } else {

        statusElement.textContent = "🔴 Offline";

    }

}

window.addEventListener("online", updateNetworkStatus);

window.addEventListener("offline", updateNetworkStatus);

updateNetworkStatus();
/* ==========================================
   VERSION 5.0
   PART 3.8
   MUSIC + DAILY QUOTE
========================================== */

// ================================
// Background Music
// ================================

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (isPlaying) {

            music.pause();

            musicBtn.textContent = "🎵";

            isPlaying = false;

        } else {

            music.play();

            musicBtn.textContent = "⏸️";

            isPlaying = true;

        }

    });

}

// ================================
// Save Music Status
// ================================

if (music) {

    music.addEventListener("play", () => {

        localStorage.setItem("musicStatus", "playing");

    });

    music.addEventListener("pause", () => {

        localStorage.setItem("musicStatus", "paused");

    });

}

window.addEventListener("load", () => {

    if (

        localStorage.getItem("musicStatus") === "playing"

        && music

    ) {

        music.play().catch(() => {});

        if (musicBtn) {

            musicBtn.textContent = "⏸️";

        }

        isPlaying = true;

    }

});

// ================================
// Daily Quotes
// ================================

const quotes = [

"Indeed, Allah is with the patient. (Qur'an 2:153)",

"And whoever relies upon Allah - then He is sufficient for him. (Qur'an 65:3)",

"The best among you are those who learn the Qur'an and teach it.",

"Seek knowledge from the cradle to the grave.",

"Success comes through patience, effort and trust in Allah.",

"Never lose hope in the mercy of Allah."

];

const quoteElement = document.getElementById("dailyQuote");

if (quoteElement) {

    const today = new Date().getDate();

    quoteElement.textContent = quotes[today % quotes.length];

}

// ================================
// Welcome Message
// ================================

window.addEventListener("load", () => {

    console.log(

        "Welcome to Muhammad Jamil Uddin's Portfolio Website"

    );

});
/* ==========================================
   VERSION 5.0
   PART 3.9
   WEATHER + DIGITAL CLOCK
========================================== */

// ================================
// Weather Information
// ================================

const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

// Open-Meteo API
// https://open-meteo.com/

async function loadWeather() {

    try {

        const response = await fetch(

        "https://api.open-meteo.com/v1/forecast?latitude=22.33&longitude=91.83&current=temperature_2m,relative_humidity_2m,wind_speed_10m"

        );

        const data = await response.json();

        if(weatherCity){

            weatherCity.textContent="📍 Chattogram, Bangladesh";

        }

        if(weatherTemp){

            weatherTemp.textContent=

            "🌡️ "+data.current.temperature_2m+"°C";

        }

        if(weatherDesc){

            weatherDesc.textContent=

            "💨 Wind : "+data.current.wind_speed_10m+" km/h";

        }

    }

    catch(error){

        console.log("Weather Error :",error);

    }

}

loadWeather();

setInterval(loadWeather,600000);

// ================================
// Digital Clock
// ================================

const digitalClock=document.getElementById("digitalClock");

function updateDigitalClock(){

    const now=new Date();

    digitalClock.innerHTML=

    now.toLocaleTimeString("en-GB",{

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit"

    });

}

if(digitalClock){

    updateDigitalClock();

    setInterval(updateDigitalClock,1000);

}

// ================================
// Typing Effect
// ================================

const typingText=document.getElementById("typingText");

const words=[

"Web Developer",

"IIUC Student",

"Qur'anic Sciences Student",

"Bangladeshi",

"Dreamer",

"Learner"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typingEffect(){

    if(!typingText) return;

    const currentWord=words[wordIndex];

    if(!deleting){

        typingText.textContent=

        currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typingEffect,1200);

            return;

        }

    }

    else{

        typingText.textContent=

        currentWord.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(typingEffect,120);

}

typingEffect();
/* ==========================================
   VERSION 5.0
   PART 3.10
   FINAL FUNCTIONS
========================================== */

// ================================
// Statistics Counter Animation
// ================================

const counters = document.querySelectorAll(".stat-card h3");

function animateCounters() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let count = 0;

        const speed = Math.max(10, Math.floor(target / 100));

        const update = () => {

            count += speed;

            if (count >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = count;

                requestAnimationFrame(update);

            }

        };

        update();

    });

}

window.addEventListener("load", animateCounters);

// ================================
// Auto Footer Year
// ================================

const footerYear = document.getElementById("currentYear");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

// ================================
// Welcome Message (One Time)
// ================================

if (!localStorage.getItem("welcomeMessage")) {

    setTimeout(() => {

        alert(
            "Welcome to Muhammad Jamil Uddin's Official Portfolio Website."
        );

        localStorage.setItem("welcomeMessage", "true");

    }, 1500);

}

// ================================
// Disable Right Click (Optional)
// ================================

document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});

// ================================
// Disable Some Shortcut Keys
// ================================

document.addEventListener("keydown", function(e){

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {

        e.preventDefault();

    }

});

// ================================
// Console Message
// ================================

console.clear();

console.log("%c Muhammad Jamil Uddin",
"font-size:24px;font-weight:bold;color:#0f766e;");

console.log("%c Official Portfolio Website",
"font-size:16px;color:#14b8a6;");

console.log("%c IIUC | Qur'anic Sciences & Islamic Studies",
"font-size:14px;color:#475569;");

// ================================
// Finished
// ================================

console.log("Website Loaded Successfully.");

/* ==========================================================
   MUHAMMAD JAMIL UDDIN
   OFFICIAL PORTFOLIO WEBSITE
   VERSION 9.0
   PART 3.1
   INITIALIZATION + LOADER + DATE + TIME
========================================================== */

"use strict";

/* ==========================
   DOM READY
========================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});

/* ==========================
   INITIALIZE WEBSITE
========================== */

function initializeWebsite(){

    startLoader();

    startBangladeshClock();

    updateFooterYear();

    detectNetwork();

}

/* ==========================
   WELCOME LOADER
========================== */

function startLoader(){

    const loader = document.getElementById("loader");

    if(!loader) return;

    setTimeout(()=>{

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.style.display="none";

        },800);

    },2500);

}

/* ==========================
   FOOTER YEAR
========================== */

function updateFooterYear(){

    const year=document.getElementById("footerYear");

    if(year){

        year.textContent=new Date().getFullYear();

    }

}

/* ==========================
   BANGLADESH LIVE CLOCK
========================== */

function startBangladeshClock(){

    updateClock();

    setInterval(updateClock,1000);

}

function updateClock(){

    const now=new Date();

    const optionsTime={

        timeZone:"Asia/Dhaka",

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit",

        hour12:true

    };

    const optionsDate={

        timeZone:"Asia/Dhaka",

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    };

    const time=document.getElementById("headerBdTime");

    const date=document.getElementById("headerEnglishDate");

    const footer=document.getElementById("gregorianDate");

    const timeString=now.toLocaleTimeString("en-US",optionsTime);

    const dateString=now.toLocaleDateString("en-US",optionsDate);

    if(time){

        time.textContent=timeString;

    }

    if(date){

        date.textContent=dateString;

    }

    if(footer){

        footer.textContent=dateString;

    }

}

/* ==========================
   NETWORK STATUS
========================== */

function detectNetwork(){

    const status=document.getElementById("footerNetworkStatus");

    if(!status) return;

    function update(){

        if(navigator.onLine){

            status.textContent="Online 🟢";

        }else{

            status.textContent="Offline 🔴";

        }

    }

    update();

    window.addEventListener("online",update);

    window.addEventListener("offline",update);

}

/* ==========================================================
   END OF PART 3.1
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.2
   SIDEBAR MENU + NESTED MENU
========================================================== */

/* ==========================
   SIDEBAR
========================== */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebarV8");
const sidebarClose = document.getElementById("sidebarClose");
const overlay = document.getElementById("sidebarOverlay");

/* ---------- Open Sidebar ---------- */

function openSidebar() {

    if (!sidebar) return;

    sidebar.classList.add("active");

    if (overlay) {
        overlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";

}

/* ---------- Close Sidebar ---------- */

function closeSidebar() {

    if (!sidebar) return;

    sidebar.classList.remove("active");

    if (overlay) {
        overlay.classList.remove("active");
    }

    document.body.style.overflow = "";

}

/* ---------- Button Events ---------- */

if (menuToggle) {
    menuToggle.addEventListener("click", openSidebar);
}

if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
}

if (overlay) {
    overlay.addEventListener("click", closeSidebar);
}

/* ---------- ESC Key ---------- */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeSidebar();

    }

});

/* ==========================
   NESTED MENU
========================== */

function toggleNestedMenu(button) {

    const menu = button.nextElementSibling;

    if (!menu) return;

    const opened = menu.classList.contains("active");

    const parent = menu.parentElement.parentElement;

    parent.querySelectorAll(".nested-menu").forEach(item => {

        if (item !== menu) {

            item.classList.remove("active");

        }

    });

    parent.querySelectorAll(".nested-menu-level2").forEach(item => {

        item.classList.remove("active");

    });

    parent.querySelectorAll(".menu-btn").forEach(btn => {

        if (btn !== button) {

            btn.classList.remove("active");

        }

    });

    parent.querySelectorAll(".nested-btn").forEach(btn => {

        if (btn !== button) {

            btn.classList.remove("active");

        }

    });

    if (opened) {

        menu.classList.remove("active");

        button.classList.remove("active");

    } else {

        menu.classList.add("active");

        button.classList.add("active");

    }

}

/* ==========================
   AUTO CLOSE WHEN LINK CLICKED
========================== */

document.querySelectorAll(".sidebar-v8 a").forEach(link => {

    link.addEventListener("click", () => {

        closeSidebar();

    });

});

/* ==========================
   MOBILE SWIPE SUPPORT
========================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", e => {

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend", e => {

    touchEndX = e.changedTouches[0].screenX;

    /* Swipe Right = Open */

    if (touchEndX - touchStartX > 120) {

        openSidebar();

    }

    /* Swipe Left = Close */

    if (touchStartX - touchEndX > 120) {

        closeSidebar();

    }

});

/* ==========================================================
   END OF PART 3.2
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.3
   GALLERY SLIDER
========================================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
let sliderInterval = null;

/* ==========================
   SHOW SLIDE
========================== */

function showSlide(index){

    if(slides.length===0) return;

    if(index>=slides.length){
        currentSlide=0;
    }else if(index<0){
        currentSlide=slides.length-1;
    }else{
        currentSlide=index;
    }

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    if(dots[currentSlide]){
        dots[currentSlide].classList.add("active");
    }

}

/* ==========================
   NEXT / PREVIOUS
========================== */

function nextSlide(){

    showSlide(currentSlide+1);

}

function previousSlide(){

    showSlide(currentSlide-1);

}

/* ==========================
   AUTO PLAY
========================== */

function startSlider(){

    stopSlider();

    sliderInterval=setInterval(()=>{

        nextSlide();

    },4000);

}

function stopSlider(){

    if(sliderInterval){

        clearInterval(sliderInterval);

    }

}

/* ==========================
   BUTTON EVENTS
========================== */

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        startSlider();

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        previousSlide();

        startSlider();

    });

}

/* ==========================
   DOT EVENTS
========================== */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

        startSlider();

    });

});

/* ==========================
   PAUSE ON HOVER
========================== */

const slider=document.querySelector(".slider-container");

if(slider){

    slider.addEventListener("mouseenter",stopSlider);

    slider.addEventListener("mouseleave",startSlider);

}

/* ==========================
   TOUCH SWIPE
========================== */

let startX=0;
let endX=0;

if(slider){

slider.addEventListener("touchstart",(e)=>{

startX=e.changedTouches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

endX=e.changedTouches[0].clientX;

if(startX-endX>50){

nextSlide();

}

if(endX-startX>50){

previousSlide();

}

startSlider();

});

}

/* ==========================
   START
========================== */

if(slides.length){

    showSlide(0);

    startSlider();

}

/* ==========================================================
   END OF PART 3.3
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.4
   THEME SYSTEM (LIGHT / DARK / SYSTEM)
========================================================== */

const themeToggle = document.getElementById("themeToggle");

/* ==========================
   APPLY THEME
========================== */

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.textContent = "☀️";

    } else {

        document.body.classList.remove("dark-mode");
        if (themeToggle) themeToggle.textContent = "🌙";

    }

}

/* ==========================
   SET THEME
========================== */

function setTheme(mode) {

    if (mode === "system") {

        localStorage.setItem("theme", "system");

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        applyTheme(prefersDark ? "dark" : "light");

        return;

    }

    localStorage.setItem("theme", mode);

    applyTheme(mode);

}

/* ==========================
   LOAD SAVED THEME
========================== */

function loadTheme() {

    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {

        savedTheme = "system";

    }

    if (savedTheme === "system") {

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        applyTheme(prefersDark ? "dark" : "light");

    } else {

        applyTheme(savedTheme);

    }

}

/* ==========================
   TOGGLE BUTTON
========================== */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        if (document.body.classList.contains("dark-mode")) {

            setTheme("light");

        } else {

            setTheme("dark");

        }

    });

}

/* ==========================
   SYSTEM THEME CHANGE
========================== */

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", () => {

    if (localStorage.getItem("theme") === "system") {

        loadTheme();

    }

});

/* ==========================
   INITIALIZE
========================== */

loadTheme();

/* ==========================================================
   END OF PART 3.4
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.5
   SCROLL FEATURES
   (Progress Bar + Scroll Top + Smooth Animation)
========================================================== */

const progressBar = document.getElementById("progressBar");
const scrollTopBtn = document.getElementById("scrollTopBtn");

/* ==========================
   UPDATE SCROLL
========================== */

function updateScrollProgress() {

    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {

        progressBar.style.width = progress + "%";

    }

    if (scrollTopBtn) {

        if (scrollTop > 300) {

            scrollTopBtn.style.display = "flex";

        } else {

            scrollTopBtn.style.display = "none";

        }

    }

}

window.addEventListener("scroll", updateScrollProgress);

/* ==========================
   SCROLL TO TOP
========================== */

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================
   SMOOTH MENU SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/* ==========================
   FADE IN ANIMATION
========================== */

const revealItems = document.querySelectorAll(

    "section,.skill-card,.certificate-card,.experience-card,.contact-card,.info-box"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.88;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

/* Initial Style */

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ==========================================================
   END OF PART 3.5
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.6
   ENGLISH + BANGLA + HIJRI DATE
========================================================== */

/* ==========================
   DATE SYSTEM
========================== */

function updateAllDates() {

    const now = new Date();

    /* ---------- English Date ---------- */

    const englishDate = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const gregorian = document.getElementById("gregorianDate");

    if (gregorian) {

        gregorian.textContent = englishDate;

    }

    /* ---------- Bangla Date ---------- */

    const banglaDate = new Intl.DateTimeFormat("bn-BD-u-ca-beng", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    }).format(now);

    const bengali = document.getElementById("bengaliDate");

    if (bengali) {

        bengali.textContent = banglaDate;

    }

    /* ---------- Hijri Date ---------- */

    const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    }).format(now);

    const hijri = document.getElementById("hijriDate");

    if (hijri) {

        hijri.textContent = hijriDate;

    }

}

/* ==========================
   UPDATE ON LOAD
========================== */

updateAllDates();

/* ==========================
   UPDATE EVERY 1 MINUTE
========================== */

setInterval(updateAllDates, 60000);

/* ==========================================================
   END OF PART 3.6
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.7
   GREETING + VISITOR COUNTER + DAILY QUOTE
========================================================== */

/* ==========================
   GREETING
========================== */

function updateGreeting() {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour >= 5 && hour < 12) {

        greeting = "🌅 Good Morning";

    } else if (hour >= 12 && hour < 17) {

        greeting = "☀️ Good Afternoon";

    } else if (hour >= 17 && hour < 20) {

        greeting = "🌇 Good Evening";

    } else {

        greeting = "🌙 Good Night";

    }

    const greetingElement = document.getElementById("footerGreeting");

    if (greetingElement) {

        greetingElement.textContent = greeting;

    }

}

updateGreeting();

setInterval(updateGreeting,60000);

/* ==========================
   VISITOR COUNTER
========================== */

function updateVisitorCounter() {

    let count = localStorage.getItem("visitorCount");

    if (!count) {

        count = 1;

    } else {

        count = parseInt(count) + 1;

    }

    localStorage.setItem("visitorCount", count);

    const visitor = document.getElementById("footerVisitorCount");

    if (visitor) {

        visitor.textContent = count;

    }

}

updateVisitorCounter();

/* ==========================
   DAILY QUOTES
========================== */

const quotes = [

"Knowledge is power.",

"Seek knowledge from cradle to grave.",

"The best among you are those who learn the Qur'an and teach it.",

"Hard work always brings success.",

"Believe in Allah and trust His plan.",

"Never stop learning.",

"Small progress every day leads to big success.",

"Patience is the key to victory.",

"Education is the light of life.",

"Always speak the truth."

];

function showDailyQuote() {

    const quoteElement = document.getElementById("dailyQuote");

    if (!quoteElement) return;

    const day = new Date().getDate();

    quoteElement.textContent = quotes[day % quotes.length];

}

showDailyQuote();

/* ==========================
   ONLINE / OFFLINE STATUS
========================== */

function updateNetworkStatus() {

    const network = document.getElementById("footerNetworkStatus");

    if (!network) return;

    network.textContent = navigator.onLine
        ? "🟢 Online"
        : "🔴 Offline";

}

updateNetworkStatus();

window.addEventListener("online", updateNetworkStatus);

window.addEventListener("offline", updateNetworkStatus);

/* ==========================================================
   END OF PART 3.7
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.8
   LIVE WEATHER SYSTEM
========================================================== */

/* ==========================
   WEATHER CODE TO TEXT
========================== */

function weatherDescription(code) {

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

        71: "❄ Light Snow",
        73: "❄ Snow",
        75: "🌨 Heavy Snow",

        80: "🌦 Rain Shower",
        81: "🌧 Heavy Shower",
        82: "⛈ Violent Shower",

        95: "⛈ Thunderstorm",
        96: "⛈ Thunderstorm + Hail",
        99: "⛈ Severe Storm"

    };

    return weatherCodes[code] || "Weather Unknown";

}

/* ==========================
   SHOW WEATHER
========================== */

async function loadWeather(lat, lon, city) {

    try {

        const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("weatherCity").textContent = city;

        document.getElementById("weatherTemp").textContent =
        "🌡 " + data.current.temperature_2m + " °C";

        document.getElementById("weatherDesc").textContent =
        weatherDescription(data.current.weather_code);

    }

    catch (error) {

        document.getElementById("weatherCity").textContent =
        "Weather Unavailable";

        document.getElementById("weatherTemp").textContent = "";

        document.getElementById("weatherDesc").textContent = "";

    }

}

/* ==========================
   GET USER LOCATION
========================== */

function detectWeatherLocation() {

    if (!navigator.geolocation) {

        loadWeather(23.6850,90.3563,"Bangladesh");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        function(position){

            loadWeather(

                position.coords.latitude,

                position.coords.longitude,

                "Your Location"

            );

        },

        function(){

            loadWeather(23.6850,90.3563,"Bangladesh");

        }

    );

}

/* ==========================
   START WEATHER
========================== */

detectWeatherLocation();

/* Auto Refresh Every 30 Minutes */

setInterval(detectWeatherLocation,1800000);

/* ==========================================================
   END OF PART 3.8
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.9
   BACKGROUND MUSIC SYSTEM
========================================================== */

const backgroundMusic = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

/* ==========================
   LOAD SAVED STATE
========================== */

function loadMusicState() {

    if (!backgroundMusic || !musicBtn) return;

    const savedState = localStorage.getItem("musicState");

    backgroundMusic.volume = 0.35;

    if (savedState === "playing") {

        backgroundMusic.play()
            .then(() => {

                musicBtn.textContent = "⏸";

            })
            .catch(() => {

                musicBtn.textContent = "🎵";

            });

    } else {

        backgroundMusic.pause();

        musicBtn.textContent = "🎵";

    }

}

/* ==========================
   PLAY / PAUSE
========================== */

function toggleMusic() {

    if (!backgroundMusic || !musicBtn) return;

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicBtn.textContent = "⏸";

        localStorage.setItem("musicState", "playing");

    } else {

        backgroundMusic.pause();

        musicBtn.textContent = "🎵";

        localStorage.setItem("musicState", "paused");

    }

}

if (musicBtn) {

    musicBtn.addEventListener("click", toggleMusic);

}

/* ==========================
   AUTO PLAY AFTER FIRST CLICK
========================== */

document.addEventListener("click", function autoPlayMusic() {

    if (!backgroundMusic) return;

    if (localStorage.getItem("musicState") === "playing") {

        backgroundMusic.play().catch(() => {});

    }

    document.removeEventListener("click", autoPlayMusic);

}, { once: true });

/* ==========================
   SAVE WHEN MUSIC ENDS
========================== */

if (backgroundMusic) {

    backgroundMusic.addEventListener("play", () => {

        localStorage.setItem("musicState", "playing");

    });

    backgroundMusic.addEventListener("pause", () => {

        localStorage.setItem("musicState", "paused");

    });

}

/* ==========================
   INITIALIZE
========================== */

loadMusicState();

/* ==========================================================
   END OF PART 3.9
========================================================== */
/* ==========================================================
   VERSION 9
   PART 3.10
   FINAL INITIALIZATION
   LOADER + TYPING + LIVE CLOCK + LANGUAGE
========================================================== */

/* ==========================
   PREMIUM LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 3000);

});

/* ==========================
   LIVE HEADER TIME
========================== */

function updateHeaderClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("en-GB", {

        hour: "2-digit",

        minute: "2-digit",

        second: "2-digit"

    });

    const date = now.toLocaleDateString("en-GB", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    });

    const timeBox = document.getElementById("headerBdTime");
    const dateBox = document.getElementById("headerEnglishDate");

    if (timeBox) timeBox.textContent = time;

    if (dateBox) dateBox.textContent = date;

}

updateHeaderClock();

setInterval(updateHeaderClock,1000);

/* ==========================
   TYPING EFFECT
========================== */

const typingWords = [

"Hafiz of the Holy Qur'an",

"IIUC Student",

"Web Developer",

"Islamic Researcher",

"Programmer",

"Technology Enthusiast",

"Future Islamic Scholar"

];

let typingIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    const text = document.getElementById("typingText");

    if (!text) return;

    const current = typingWords[typingIndex];

    if (!deleting) {

        text.textContent = current.substring(0, letterIndex++);

        if (letterIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;

        }

    } else {

        text.textContent = current.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            typingIndex++;

            if (typingIndex >= typingWords.length) {

                typingIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 45 : 110);

}

typingEffect();

/* ==========================
   LANGUAGE SYSTEM
========================== */

function setLanguage(lang){

    localStorage.setItem("language",lang);

    alert("Language changed to : " + lang +
    "\n(Full multilingual support will be available in Version 10)");

}

const savedLanguage = localStorage.getItem("language");

if(savedLanguage){

    setLanguage(savedLanguage);

}

/* ==========================
   COPYRIGHT YEAR
========================== */

const footerYear = document.getElementById("footerYear");

if(footerYear){

    footerYear.textContent = new Date().getFullYear();

}

/* ==========================
   VERSION INFORMATION
========================== */

console.log("====================================");

console.log("Muhammad Jamil Uddin Portfolio");

console.log("Version 9.0 Ultimate Edition");

console.log("All Systems Loaded Successfully.");

console.log("====================================");

/* ==========================================================
   VERSION 9 COMPLETED
========================================================== */

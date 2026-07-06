/* ==========================================
   Muhammad Jamil Uddin
   Official Personal Website
   SCRIPT.JS
   Part 2.1
========================================== */

"use strict";

/* ==========================================
   DOM Elements
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

/* ==========================================
   Mobile Menu Toggle
========================================== */

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            menuBtn.innerHTML = "✕";

        } else {

            menuBtn.innerHTML = "☰";

        }

    });

}

/* ==========================================
   Close Menu After Clicking a Link
========================================== */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu.classList.contains("active")) {

            navMenu.classList.remove("active");

            menuBtn.innerHTML = "☰";

        }

    });

});

/* ==========================================
   Website Started Successfully
========================================== */

console.log("Script Part 2.1 Loaded Successfully");
/* ==========================================
   SCRIPT.JS
   PART 2.2
   Live Clock & Date
========================================== */

function updateDateTime() {

    const now = new Date();

    /* ---------- Time ---------- */

    const timeOptions = {

        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true

    };

    const liveClock = document.getElementById("liveClock");

    if (liveClock) {

        liveClock.textContent = now.toLocaleTimeString("en-US", timeOptions);

    }

    /* ---------- Date ---------- */

    const dateOptions = {

        timeZone: "Asia/Dhaka",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    const liveDate = document.getElementById("liveDate");

    if (liveDate) {

        liveDate.textContent = now.toLocaleDateString("en-US", dateOptions);

    }

}

/* Start Clock */

updateDateTime();

setInterval(updateDateTime, 1000);


/* ==========================================
   Console
========================================== */

console.log("Live Clock & Date Started");
/* ==========================================
   SCRIPT.JS
   PART 2.3
   Live Hijri Date
========================================== */

function updateHijriDate() {

    const hijriElement = document.getElementById("hijriDate");

    if (!hijriElement) return;

    const today = new Date();

    const options = {

        calendar: "islamic",

        day: "numeric",

        month: "long",

        year: "numeric"

    };

    try {

        const hijriDate = new Intl.DateTimeFormat(

            "en-TN-u-ca-islamic",

            options

        ).format(today);

        hijriElement.textContent = hijriDate;

    } catch (error) {

        hijriElement.textContent = "Hijri Date Unavailable";

        console.warn("Hijri calendar is not supported on this browser.");

    }

}

/* Start Hijri Date */

updateHijriDate();


/* ==========================================
   Console
========================================== */

console.log("Live Hijri Date Started");
/* ==========================================
   SCRIPT.JS
   PART 2.4
   Language Switch (বাংলা / English)
========================================== */

const languageBtn = document.querySelector(".language-btn");

let currentLanguage = "en";

if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        if (currentLanguage === "en") {

            currentLanguage = "bn";

            languageBtn.innerHTML = "🇬🇧 English";

            document.documentElement.lang = "bn";

        } else {

            currentLanguage = "en";

            languageBtn.innerHTML = "🇧🇩 বাংলা";

            document.documentElement.lang = "en";

        }

        console.log("Current Language:", currentLanguage);

    });

}

/* ==========================================
   Save Language Preference
========================================== */

window.addEventListener("beforeunload", () => {

    localStorage.setItem("websiteLanguage", currentLanguage);

});

window.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("websiteLanguage");

    if (savedLanguage) {

        currentLanguage = savedLanguage;

    }

    if (languageBtn) {

        languageBtn.innerHTML = currentLanguage === "bn"
            ? "🇬🇧 English"
            : "🇧🇩 বাংলা";

    }

});


/* ==========================================
   Console
========================================== */

console.log("Language Switch Ready");
/* ==========================================
   SCRIPT.JS
   PART 2.5
   Website Loading Screen
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

    }, 1200);

});


/* ==========================================
   Welcome Message
========================================== */

window.addEventListener("load", () => {

    console.log("===================================");

    console.log(" Muhammad Jamil Uddin ");

    console.log(" Official Personal Website ");

    console.log(" Website Loaded Successfully ");

    console.log("===================================");

});


/* ==========================================
   Page Title Animation
========================================== */

const titles = [

    "Muhammad Jamil Uddin",

    "Official Website",

    "Welcome",

    "IIUC | Qur'anic Sciences"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 3000);


/* ==========================================
   Online / Offline Status
========================================== */

window.addEventListener("online", () => {

    console.log("Internet Connected");

});

window.addEventListener("offline", () => {

    console.log("Internet Disconnected");

});


/* ==========================================
   Console
========================================== */

console.log("Script Part 2.5 Loaded Successfully");
/* ==========================================
   SCRIPT.JS
   PART 2.6
   Scroll To Top & Active Menu
========================================== */

/* ===== Scroll To Top Button ===== */

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

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


/* ===== Active Navigation ===== */

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   Console
========================================== */

console.log("Script Part 2.6 Loaded Successfully");
/* ==========================================
   SCRIPT.JS
   PART 2.7
   Fade Animation on Scroll
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.20

    }

);

fadeElements.forEach((element) => {

    fadeObserver.observe(element);

});


/* ==========================================
   Button Click Effect
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {

            button.style.transform = "";

        }, 180);

    });

});


/* ==========================================
   Welcome Message
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Muhammad Jamil Uddin Official Website");

});


/* ==========================================
   Console
========================================== */

console.log("Script Part 2.7 Loaded Successfully");
/* ==========================================
   SCRIPT.JS
   PART 2.8
   Dark / Light Mode
========================================== */

const themeButton = document.getElementById("themeBtn");

/* ===== Load Saved Theme ===== */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

}

/* ===== Theme Toggle ===== */

if(themeButton){

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");

            themeButton.innerHTML="☀️";

        }else{

            localStorage.setItem("theme","light");

            themeButton.innerHTML="🌙";

        }

    });

}

/* ===== Set Correct Icon ===== */

window.addEventListener("DOMContentLoaded",()=>{

    if(!themeButton) return;

    if(document.body.classList.contains("dark-mode")){

        themeButton.innerHTML="☀️";

    }else{

        themeButton.innerHTML="🌙";

    }

});


/* ==========================================
   Page Visibility
========================================== */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        console.log("User Left the Website");

    }else{

        console.log("User Returned to the Website");

    }

});


/* ==========================================
   Console
========================================== */

console.log("Script Part 2.8 Loaded Successfully");
/* ==========================================
   SCRIPT.JS
   PART 2.9
   Typing Effect & Scroll Progress
========================================== */

/* ===== Typing Effect ===== */

const typingElement = document.getElementById("typingText");

const typingTexts = [

    "Welcome to My Official Website",

    "Student of IIUC",

    "Qur'anic Sciences & Islamic Studies",

    "Web Developer",

    "Thank You For Visiting"

];

let textIndex = 0;
let charIndex = 0;

function typingAnimation(){

    if(!typingElement) return;

    if(charIndex < typingTexts[textIndex].length){

        typingElement.textContent += typingTexts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typingAnimation,80);

    }else{

        setTimeout(deleteAnimation,1800);

    }

}

function deleteAnimation(){

    if(!typingElement) return;

    if(charIndex > 0){

        typingElement.textContent = typingTexts[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteAnimation,40);

    }else{

        textIndex++;

        if(textIndex >= typingTexts.length){

            textIndex = 0;

        }

        setTimeout(typingAnimation,400);

    }

}

typingAnimation();


/* ==========================================
   Scroll Progress
========================================== */

window.addEventListener("scroll",()=>{

    const progressBar = document.getElementById("progressBar");

    if(!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================================
   Performance Log
========================================== */

window.addEventListener("load",()=>{

    console.log("All Website Resources Loaded Successfully");

});


/* ==========================================
   Console
========================================== */

console.log("Script Part 2.9 Loaded Successfully");
/* ==========================================
   SCRIPT.JS
   PART 2.10
   Final Optimization
========================================== */

/* ===== Current Year ===== */

const yearElement = document.getElementById("year");

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}

/* ===== Disable Right Click ===== */

document.addEventListener("contextmenu",(event)=>{

    event.preventDefault();

});

/* ===== Disable Image Drag ===== */

document.querySelectorAll("img").forEach((image)=>{

    image.setAttribute("draggable","false");

});

/* ===== Lazy Loading ===== */

document.querySelectorAll("img").forEach((image)=>{

    image.setAttribute("loading","lazy");

});

/* ===== Smooth Anchor Scroll ===== */

document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{

    anchor.addEventListener("click",function(event){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            event.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/* ===== Website Information ===== */

console.log("======================================");
console.log(" Muhammad Jamil Uddin ");
console.log(" Official Personal Website ");
console.log(" Version : 2.10 ");
console.log(" Status : Running Successfully ");
console.log("======================================");

/* ===== Finished ===== */

console.log("SCRIPT.JS COMPLETED SUCCESSFULLY");

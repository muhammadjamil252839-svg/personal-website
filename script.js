/* ==========================================================
   MUHAMMAD JAMIL UDDIN
   OFFICIAL PORTFOLIO WEBSITE
   VERSION 9.1 ULTIMATE
   PART 3.1
   CORE INITIALIZATION
========================================================== */

"use strict";

/* ==========================================================
   VERSION INFORMATION
========================================================== */

const WEBSITE = {

    name: "Muhammad Jamil Uddin",

    version: "9.0 Ultimate",

    developer: "Muhammad Jamil Uddin",

    environment: "Production"

};

/* ==========================================================
   GLOBAL SELECTORS
========================================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

/* ==========================================================
   GLOBAL ELEMENTS
========================================================== */

const body = document.body;

const html = document.documentElement;

/* ==========================================================
   DEVICE DETECTION
========================================================== */

const DEVICE = {

    touch: window.matchMedia("(pointer:coarse)").matches,

    mobile: window.innerWidth <= 768,

    tablet: window.innerWidth > 768 && window.innerWidth <= 1024,

    desktop: window.innerWidth > 1024

};

/* ==========================================================
   WEBSITE STATUS
========================================================== */

const WEBSITE_STATUS = {

    online: navigator.onLine,

    loaded: false,

    darkMode: false

};

/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    WEBSITE_STATUS.loaded = true;

    body.classList.add("loaded");

    const loader = $("#loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

        setTimeout(() => {

            loader.remove();

        }, 1500);

    }

});

/* ==========================================================
   NETWORK STATUS
========================================================== */

window.addEventListener("online", () => {

    WEBSITE_STATUS.online = true;

    console.log("🟢 Internet Connected");

});

window.addEventListener("offline", () => {

    WEBSITE_STATUS.online = false;

    console.log("🔴 Internet Disconnected");

});

/* ==========================================================
   DISABLE IMAGE DRAG
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    $$("img").forEach((img) => {

        img.draggable = false;

        img.addEventListener("dragstart", (event) => {

            event.preventDefault();

        });

    });

});

/* ==========================================================
   SMOOTH INTERNAL LINK
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    $$('a[href^="#"]').forEach((anchor) => {

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

});

/* ==========================================================
   EXTERNAL LINK SECURITY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    $$("a").forEach((link) => {

        if (

            link.hostname &&

            link.hostname !== location.hostname

        ) {

            link.target = "_blank";

            link.rel = "noopener noreferrer";

        }

    });

});

/* ==========================================================
   RESPONSIVE CHECK
========================================================== */

window.addEventListener("resize", () => {

    body.classList.toggle(

        "mobile-view",

        window.innerWidth <= 768

    );

});

/* ==========================================================
   START MESSAGE
========================================================== */

console.log("%c=======================================",

"color:#2563eb;font-size:14px;font-weight:bold;");

console.log("%cMuhammad Jamil Uddin",

"color:#2563eb;font-size:22px;font-weight:bold;");

console.log("%cOfficial Portfolio Website",

"color:#0ea5e9;font-size:16px;");

console.log("%cVersion 9.0 Ultimate",

"color:#16a34a;font-size:18px;font-weight:bold;");

console.log("%cPart 3.1 Loaded Successfully",

"color:#f59e0b;font-size:15px;");

console.log("%c=======================================",

"color:#2563eb;font-size:14px;font-weight:bold;");
/* ==========================================================
   VERSION 9.0
   PART 3.2
   SMART SIDEBAR & NAVIGATION
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebarV9") ||
                document.getElementById("sidebarV8");

const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const navLinks = document.querySelectorAll(".sidebar-menu a");

/* ==========================================================
   OPEN SIDEBAR
========================================================== */

function openSidebar(){

    if(!sidebar) return;

    sidebar.classList.add("active");

    sidebarOverlay?.classList.add("active");

    document.body.style.overflow="hidden";

}

/* ==========================================================
   CLOSE SIDEBAR
========================================================== */

function closeSidebar(){

    if(!sidebar) return;

    sidebar.classList.remove("active");

    sidebarOverlay?.classList.remove("active");

    document.body.style.overflow="";

}

/* ==========================================================
   EVENTS
========================================================== */

menuToggle?.addEventListener("click",openSidebar);

sidebarClose?.addEventListener("click",closeSidebar);

sidebarOverlay?.addEventListener("click",closeSidebar);

/* ==========================================================
   ESC KEY
========================================================== */

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        closeSidebar();

    }

});

/* ==========================================================
   AUTO CLOSE AFTER CLICK
========================================================== */

navLinks.forEach((link)=>{

    link.addEventListener("click",()=>{

        closeSidebar();

    });

});

/* ==========================================================
   ACTIVE MENU SYSTEM
========================================================== */

const sections=document.querySelectorAll("section[id]");

function updateActiveMenu(){

    const scrollY=window.scrollY+120;

    sections.forEach((section)=>{

        const top=section.offsetTop;

        const height=section.offsetHeight;

        const id=section.getAttribute("id");

        if(scrollY>=top && scrollY<top+height){

            navLinks.forEach((link)=>{

                link.classList.remove("active");

                if(link.getAttribute("href")==="#"+id){

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll",updateActiveMenu);

/* ==========================================================
   HEADER SHADOW
========================================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY>30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ==========================================================
   NESTED MENU
========================================================== */

function toggleNestedMenu(button){

    const menu=button.nextElementSibling;

    if(!menu) return;

    menu.classList.toggle("active");

    button.classList.toggle("active");

}

window.toggleNestedMenu=toggleNestedMenu;

/* ==========================================================
   START
========================================================== */

updateActiveMenu();

console.log("✅ Version 9 | Part 3.2 Smart Navigation Loaded");
/* ==========================================================
   VERSION 9.0
   PART 3.3
   THEME & LANGUAGE MANAGER
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const themeToggle = document.getElementById("themeToggle");

const languageSelect = document.getElementById("languageSelect");

/* ==========================================================
   STORAGE KEY
========================================================== */

const STORAGE = {

    theme: "portfolio-theme",

    language: "portfolio-language"

};

/* ==========================================================
   APPLY THEME
========================================================== */

function applyTheme(theme){

    document.body.classList.remove("dark-mode");

    if(theme==="dark"){

        document.body.classList.add("dark-mode");

    }

    if(theme==="system"){

        const dark = window.matchMedia(

            "(prefers-color-scheme: dark)"

        ).matches;

        if(dark){

            document.body.classList.add("dark-mode");

        }

    }

    localStorage.setItem(

        STORAGE.theme,

        theme

    );

    updateThemeButton(theme);

}

/* ==========================================================
   THEME BUTTON
========================================================== */

function updateThemeButton(theme){

    if(!themeToggle) return;

    const dark =

        document.body.classList.contains("dark-mode");

    if(theme==="system"){

        themeToggle.innerHTML="💻";

        return;

    }

    themeToggle.innerHTML=

        dark ? "☀️" : "🌙";

}

/* ==========================================================
   TOGGLE
========================================================== */

function toggleTheme(){

    const dark=

        document.body.classList.contains("dark-mode");

    applyTheme(

        dark ? "light" : "dark"

    );

}

themeToggle?.addEventListener(

    "click",

    toggleTheme

);

/* ==========================================================
   LOAD SAVED THEME
========================================================== */

const savedTheme=

localStorage.getItem(STORAGE.theme)

||"light";

applyTheme(savedTheme);

/* ==========================================================
   SYSTEM THEME CHANGE
========================================================== */

window.matchMedia(

"(prefers-color-scheme: dark)"

).addEventListener(

"change",

()=>{

    const current=

    localStorage.getItem(

        STORAGE.theme

    );

    if(current==="system"){

        applyTheme("system");

    }

}

);

/* ==========================================================
   LANGUAGE
========================================================== */

function applyLanguage(lang){

    document.documentElement.lang=lang;

    localStorage.setItem(

        STORAGE.language,

        lang

    );

    console.log(

        "Language:",

        lang

    );

}

/* ==========================================================
   LANGUAGE CHANGE
========================================================== */

languageSelect?.addEventListener(

"change",

(event)=>{

    applyLanguage(

        event.target.value

    );

}

/* ==========================================================
   LOAD LANGUAGE
========================================================== */

const savedLanguage=

localStorage.getItem(

STORAGE.language

)||"en";

applyLanguage(savedLanguage);

if(languageSelect){

    languageSelect.value=savedLanguage;

}

/* ==========================================================
   RESET SETTINGS
========================================================== */

function resetWebsiteSettings(){

    localStorage.removeItem(

        STORAGE.theme

    );

    localStorage.removeItem(

        STORAGE.language

    );

    applyTheme("light");

    applyLanguage("en");

    if(languageSelect){

        languageSelect.value="en";

    }

    console.log(

        "Settings Reset"

    );

}

window.resetWebsiteSettings=

resetWebsiteSettings;

/* ==========================================================
   STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.3 Theme & Language Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.4
   SMART DATE • TIME • GREETING SYSTEM
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const bdClock = document.getElementById("headerBdTime");
const englishDate = document.getElementById("headerEnglishDate");

const footerGregorian = document.getElementById("gregorianDate");
const footerBangla = document.getElementById("bengaliDate");
const footerHijri = document.getElementById("hijriDate");
const footerGreeting = document.getElementById("footerGreeting");

/* ==========================================================
   LIVE BANGLADESH TIME
========================================================== */

function updateClock(){

    const now = new Date();

    if(bdClock){

        bdClock.textContent = now.toLocaleTimeString("en-US",{

            timeZone:"Asia/Dhaka",

            hour:"2-digit",

            minute:"2-digit",

            second:"2-digit",

            hour12:true

        });

    }

}

/* ==========================================================
   ENGLISH DATE
========================================================== */

function updateEnglishDate(){

    if(!englishDate) return;

    const now = new Date();

    englishDate.textContent = now.toLocaleDateString(

        "en-US",

        {

            weekday:"long",

            day:"numeric",

            month:"long",

            year:"numeric"

        }

    );

}

/* ==========================================================
   FOOTER DATES
========================================================== */

function updateFooterDates(){

    const today = new Date();

    if(footerGregorian){

        footerGregorian.textContent =

        today.toLocaleDateString(

            "en-GB",

            {

                day:"numeric",

                month:"long",

                year:"numeric"

            }

        );

    }

    if(footerBangla){

        footerBangla.textContent =

        new Intl.DateTimeFormat(

            "bn-BD-u-ca-beng",

            {

                day:"numeric",

                month:"long",

                year:"numeric"

            }

        ).format(today);

    }

    if(footerHijri){

        footerHijri.textContent =

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

/* ==========================================================
   GREETING
========================================================== */

function updateGreeting(){

    if(!footerGreeting) return;

    const hour = Number(

        new Date().toLocaleString(

            "en-US",

            {

                timeZone:"Asia/Dhaka",

                hour:"numeric",

                hour12:false

            }

        )

    );

    let greeting="";

    if(hour>=5 && hour<12){

        greeting="🌅 Good Morning";

    }

    else if(hour>=12 && hour<17){

        greeting="☀️ Good Afternoon";

    }

    else if(hour>=17 && hour<20){

        greeting="🌇 Good Evening";

    }

    else{

        greeting="🌙 Good Night";

    }

    footerGreeting.textContent = greeting;

}

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeDateTime(){

    updateClock();

    updateEnglishDate();

    updateFooterDates();

    updateGreeting();

}

initializeDateTime();

/* ==========================================================
   AUTO UPDATE
========================================================== */

setInterval(updateClock,1000);

setInterval(updateGreeting,60000);

setInterval(updateFooterDates,60000);

setInterval(updateEnglishDate,60000);

/* ==========================================================
   FOOTER YEAR
========================================================== */

const footerYear=document.getElementById("footerYear");

if(footerYear){

    footerYear.textContent=

    new Date().getFullYear();

}

/* ==========================================================
   STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.4 Smart Date & Time Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.5
   SMART SCROLL ENGINE
   PROGRESS • REVEAL • COUNTER
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const progressBar = document.getElementById("progressBar");

const scrollTopBtn = document.getElementById("scrollTopBtn");

/* ==========================================================
   READING PROGRESS
========================================================== */

function updateReadingProgress(){

    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    if(progressBar){

        progressBar.style.width =
            progress + "%";

    }

}

window.addEventListener(

    "scroll",

    updateReadingProgress,

    {passive:true}

);

/* ==========================================================
   SCROLL TO TOP
========================================================== */

function toggleScrollButton(){

    if(!scrollTopBtn) return;

    if(window.scrollY > 350){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

}

window.addEventListener(

    "scroll",

    toggleScrollButton,

    {passive:true}

);

scrollTopBtn?.addEventListener(

    "click",

    ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

);

/* ==========================================================
   REVEAL ANIMATION
========================================================== */

const revealItems = document.querySelectorAll(

    ".fade-in,.reveal,.card,.glass-card,.section"

);

const revealObserver =

new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add(

                "visible"

            );

            revealObserver.unobserve(

                entry.target

            );

        }

    });

},

{

    threshold:0.15,

    rootMargin:"0px 0px -60px 0px"

}

);

revealItems.forEach((item)=>{

    revealObserver.observe(item);

});

/* ==========================================================
   NUMBER COUNTER
========================================================== */

const counters =

document.querySelectorAll(

"[data-counter]"

);

function animateCounter(counter){

    const target =

    Number(

        counter.dataset.counter

    );

    const speed = 30;

    let current = 0;

    const increase =

        target / 100;

    const timer = setInterval(()=>{

        current += increase;

        if(current >= target){

            counter.textContent =

            target.toLocaleString();

            clearInterval(timer);

        }else{

            counter.textContent =

            Math.floor(current)

            .toLocaleString();

        }

    },speed);

}

const counterObserver =

new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            animateCounter(

                entry.target

            );

            counterObserver.unobserve(

                entry.target

            );

        }

    });

},

{

    threshold:0.6

}

);

counters.forEach((counter)=>{

    counterObserver.observe(counter);

});

/* ==========================================================
   PARALLAX EFFECT
========================================================== */

const hero =

document.querySelector(".hero");

window.addEventListener(

"scroll",

()=>{

    if(hero){

        hero.style.backgroundPositionY =

        window.scrollY * 0.35 + "px";

    }

},

{passive:true}

);

/* ==========================================================
   SCROLL DIRECTION
========================================================== */

let lastScroll = 0;

window.addEventListener(

"scroll",

()=>{

    const current =

    window.pageYOffset;

    if(current > lastScroll){

        document.body.classList.add(

            "scroll-down"

        );

        document.body.classList.remove(

            "scroll-up"

        );

    }else{

        document.body.classList.add(

            "scroll-up"

        );

        document.body.classList.remove(

            "scroll-down"

        );

    }

    lastScroll = current;

},

{passive:true}

);

/* ==========================================================
   INITIALIZE
========================================================== */

updateReadingProgress();

toggleScrollButton();

/* ==========================================================
   STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.5 Smart Scroll Engine Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.6
   ULTRA IMAGE SLIDER & GALLERY
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
let autoSlider = null;

/* ==========================================================
   SHOW SLIDE
========================================================== */

function showSlide(index){

    if(slides.length===0) return;

    if(index >= slides.length){

        currentSlide = 0;

    }else if(index < 0){

        currentSlide = slides.length-1;

    }else{

        currentSlide = index;

    }

    slides.forEach((slide,i)=>{

        slide.classList.toggle(

            "active",

            i===currentSlide

        );

    });

    dots.forEach((dot,i)=>{

        dot.classList.toggle(

            "active",

            i===currentSlide

        );

    });

}

/* ==========================================================
   NEXT & PREVIOUS
========================================================== */

function nextSlide(){

    showSlide(currentSlide+1);

}

function previousSlide(){

    showSlide(currentSlide-1);

}

/* ==========================================================
   AUTO PLAY
========================================================== */

function startSlider(){

    stopSlider();

    autoSlider=setInterval(

        nextSlide,

        4500

    );

}

function stopSlider(){

    clearInterval(autoSlider);

}

/* ==========================================================
   BUTTON EVENTS
========================================================== */

nextBtn?.addEventListener(

"click",

()=>{

    nextSlide();

    startSlider();

}

);

prevBtn?.addEventListener(

"click",

()=>{

    previousSlide();

    startSlider();

}

);

/* ==========================================================
   DOT EVENTS
========================================================== */

dots.forEach((dot,index)=>{

    dot.addEventListener(

        "click",

        ()=>{

            showSlide(index);

            startSlider();

        }

    );

});

/* ==========================================================
   KEYBOARD SUPPORT
========================================================== */

document.addEventListener(

"keydown",

(event)=>{

    if(event.key==="ArrowRight"){

        nextSlide();

    }

    if(event.key==="ArrowLeft"){

        previousSlide();

    }

}

);

/* ==========================================================
   TOUCH SWIPE
========================================================== */

let startX = 0;

const slider =

document.querySelector(".slider");

slider?.addEventListener(

"touchstart",

(event)=>{

    startX =

    event.touches[0].clientX;

},

{passive:true}

);

slider?.addEventListener(

"touchend",

(event)=>{

    const endX =

    event.changedTouches[0].clientX;

    const distance =

    startX-endX;

    if(distance>50){

        nextSlide();

    }

    if(distance<-50){

        previousSlide();

    }

}

);

/* ==========================================================
   PAUSE ON HOVER
========================================================== */

slider?.addEventListener(

"mouseenter",

stopSlider

);

slider?.addEventListener(

"mouseleave",

startSlider

);

/* ==========================================================
   LAZY IMAGE
========================================================== */

const lazyImages =

document.querySelectorAll(

"img[data-src]"

);

const lazyObserver=

new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const img=

entry.target;

img.src=

img.dataset.src;

img.removeAttribute(

"data-src"

);

lazyObserver.unobserve(

img

);

}

});

},

{

threshold:0.1

}

);

lazyImages.forEach((img)=>{

lazyObserver.observe(img);

});

/* ==========================================================
   LIGHTBOX
========================================================== */

const galleryImages =

document.querySelectorAll(

".gallery img"

);

galleryImages.forEach((image)=>{

image.addEventListener(

"click",

()=>{

const overlay=

document.createElement("div");

overlay.className=

"lightbox";

overlay.innerHTML=`

<img src="${image.src}" alt="Gallery">

`;

document.body.appendChild(

overlay

);

overlay.addEventListener(

"click",

()=>{

overlay.remove();

}

);

}

);

});

/* ==========================================================
   INITIALIZE
========================================================== */

showSlide(0);

startSlider();

/* ==========================================================
   STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.6 Ultra Slider Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.7
   SMART CONTACT • WEATHER • NETWORK
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const contactForm = document.getElementById("contactForm");

const networkStatus = document.getElementById("footerNetworkStatus");

const visitorCounter = document.getElementById("footerVisitorCount");

const weatherCity = document.getElementById("weatherCity");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

/* ==========================================================
   CONTACT FORM
========================================================== */

if(contactForm){

contactForm.addEventListener("submit",async(event)=>{

event.preventDefault();

const button=contactForm.querySelector("button");

const original=button.innerHTML;

button.disabled=true;

button.innerHTML="Sending...";

try{

const response=await fetch(contactForm.action,{

method:"POST",

body:new FormData(contactForm),

headers:{

Accept:"application/json"

}

});

if(response.ok){

button.innerHTML="✅ Sent";

contactForm.reset();

setTimeout(()=>{

button.innerHTML=original;

button.disabled=false;

},2500);

}else{

throw new Error();

}

}catch(error){

button.innerHTML="❌ Failed";

setTimeout(()=>{

button.innerHTML=original;

button.disabled=false;

},2500);

}

});

}

/* ==========================================================
   NETWORK STATUS
========================================================== */

function updateNetworkStatus(){

if(!networkStatus) return;

if(navigator.onLine){

networkStatus.innerHTML="🟢 Online";

}else{

networkStatus.innerHTML="🔴 Offline";

}

}

window.addEventListener("online",updateNetworkStatus);

window.addEventListener("offline",updateNetworkStatus);

updateNetworkStatus();

/* ==========================================================
   VISITOR COUNTER
========================================================== */

function updateVisitorCounter(){

if(!visitorCounter) return;

let visits=

Number(

localStorage.getItem("visitorCount")

||0

);

visits++;

localStorage.setItem(

"visitorCount",

visits

);

visitorCounter.textContent=

visits.toLocaleString();

}

updateVisitorCounter();

/* ==========================================================
   WEATHER ICON
========================================================== */

function weatherText(code){

const codes={

0:"☀️ Clear",

1:"🌤 Mostly Clear",

2:"⛅ Partly Cloudy",

3:"☁️ Cloudy",

45:"🌫 Fog",

61:"🌦 Rain",

63:"🌧 Moderate Rain",

65:"🌧 Heavy Rain",

71:"❄️ Snow",

80:"🌦 Shower",

95:"⛈ Thunderstorm"

};

return codes[code]||

"Weather";

}

/* ==========================================================
   LOAD WEATHER
========================================================== */

async function loadWeather(lat,lon){

try{

const response=await fetch(

`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`

);

const data=await response.json();

weatherTemp.textContent=

data.current.temperature_2m+"°C";

weatherDesc.textContent=

weatherText(

data.current.weather_code

);

}catch{

weatherTemp.textContent="--°";

weatherDesc.textContent="Unavailable";

}

}

/* ==========================================================
   LOCATION
========================================================== */

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

weatherCity.textContent=

"📍 Current Location";

loadWeather(

position.coords.latitude,

position.coords.longitude

);

},

()=>{

weatherCity.textContent=

"📍 Dhaka";

loadWeather(

23.8103,

90.4125

);

}

);

}else{

weatherCity.textContent=

"📍 Dhaka";

loadWeather(

23.8103,

90.4125

);

}

/* ==========================================================
   CONNECTION SPEED
========================================================== */

const connection=

navigator.connection||

navigator.mozConnection||

navigator.webkitConnection;

if(connection){

console.log(

"Network:",

connection.effectiveType

);

}

/* ==========================================================
   PAGE VISIBILITY
========================================================== */

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Page Hidden");

}else{

console.log("Page Visible");

}

}

/* ==========================================================
   STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.7 Contact & Weather Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.8
   PERFORMANCE • SECURITY • ACCESSIBILITY
========================================================== */

"use strict";

/* ==========================================================
   IMAGE PROTECTION
========================================================== */

document.querySelectorAll("img").forEach((img)=>{

    img.setAttribute("draggable","false");

    img.addEventListener("dragstart",(e)=>{

        e.preventDefault();

    });

});

/* ==========================================================
   DISABLE RIGHT CLICK ON IMAGES
========================================================== */

document.addEventListener("contextmenu",(event)=>{

    if(event.target.tagName==="IMG"){

        event.preventDefault();

    }

});

/* ==========================================================
   EXTERNAL LINK
========================================================== */

document.querySelectorAll("a").forEach((link)=>{

    if(

        link.hostname &&

        link.hostname!==location.hostname

    ){

        link.target="_blank";

        link.rel="noopener noreferrer";

    }

});

/* ==========================================================
   SMOOTH ANCHOR SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{

    anchor.addEventListener("click",function(event){

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});

/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

document.querySelectorAll(

".btn,.button"

).forEach((button)=>{

button.addEventListener("click",(event)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=button.getBoundingClientRect();

ripple.style.left=

(event.clientX-rect.left)+"px";

ripple.style.top=

(event.clientY-rect.top)+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================================
   AUTO FOCUS INPUT
========================================================== */

const firstInput=

document.querySelector(

"input,textarea"

);

window.addEventListener("load",()=>{

    firstInput?.blur();

});

/* ==========================================================
   REDUCE MOTION
========================================================== */

const reduceMotion=

window.matchMedia(

"(prefers-reduced-motion: reduce)"

);

if(reduceMotion.matches){

document.documentElement.classList.add(

"reduce-motion"

);

}

/* ==========================================================
   COPY EMAIL
========================================================== */

document.querySelectorAll(

"[data-copy]"

).forEach((item)=>{

item.addEventListener("click",()=>{

const text=item.dataset.copy;

navigator.clipboard.writeText(text)

.then(()=>{

console.log("Copied:",text);

});

});

});

/* ==========================================================
   PAGE LOAD TIME
========================================================== */

window.addEventListener("load",()=>{

const timing=

performance.now().toFixed(0);

console.log(

`⚡ Loaded in ${timing} ms`

);

});

/* ==========================================================
   MEMORY CLEANUP
========================================================== */

window.addEventListener(

"beforeunload",

()=>{

console.log(

"Cleaning Resources..."

);

});

/* ==========================================================
   FINAL STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.8 Performance & Security Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.9
   LOADER • TYPING • QUOTE • MUSIC
========================================================== */

"use strict";

/* ==========================================================
   SMART LOADER
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.classList.add("fade-out");

    setTimeout(() => {

        loader.remove();

    }, 1200);

});

/* ==========================================================
   DAILY ISLAMIC QUOTE
========================================================== */

const dailyQuote = document.getElementById("dailyQuote");

const quotes = [

"Indeed, Allah is with the patient. (2:153)",

"Verily, with hardship comes ease. (94:6)",

"So remember Me; I will remember you. (2:152)",

"Allah does not burden a soul beyond its capacity. (2:286)",

"And whoever relies upon Allah, He is sufficient. (65:3)",

"The best among you learn the Qur'an and teach it.",

"Prayer is the key to success.",

"Knowledge is light.",

"Trust Allah in every situation.",

"Always be thankful to Allah.",

"Patience opens every door.",

"Good character is true wealth."

];

function updateDailyQuote(){

    if(!dailyQuote) return;

    const index =

    new Date().getDate() %

    quotes.length;

    dailyQuote.style.opacity="0";

    setTimeout(()=>{

        dailyQuote.textContent=

        quotes[index];

        dailyQuote.style.opacity="1";

    },300);

}

updateDailyQuote();

/* ==========================================================
   SMART TYPING EFFECT
========================================================== */

const typingText =

document.getElementById("typingText");

if(typingText){

const words=[

"Assalamu Alaikum",

"Welcome To My Portfolio",

"Muhammad Jamil Uddin",

"Hafiz of the Holy Qur'an",

"Qur'anic Sciences Student",

"Future International Scholar",

"Web Developer",

"Graphic Designer",

"Content Creator",

"Public Speaker"

];

let word=0;

let char=0;

let deleting=false;

function typing(){

const current=words[word];

if(!deleting){

typingText.textContent=

current.substring(

0,

char++

);

if(char>

current.length){

deleting=true;

setTimeout(

typing,

1500

);

return;

}

}else{

typingText.textContent=

current.substring(

0,

char--

);

if(char===0){

deleting=false;

word++;

if(word>=words.length){

word=0;

}

}

}

setTimeout(

typing,

deleting?45:90

);

}

typing();

}

/* ==========================================================
   MUSIC BUTTON
========================================================== */

const music =

document.getElementById(

"backgroundMusic"

);

const musicBtn=

document.getElementById(

"musicBtn"

);

let playing=false;

if(music && musicBtn){

music.volume=0.4;

musicBtn.addEventListener(

"click",

async()=>{

try{

if(!playing){

await music.play();

playing=true;

musicBtn.innerHTML="⏸";

}else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵";

}

}catch(e){

console.log(

"Autoplay blocked."

);

}

}

);

music.addEventListener(

"ended",

()=>{

playing=false;

musicBtn.innerHTML="🎵";

}

);

}

/* ==========================================================
   PAGE TITLE BLINK
========================================================== */

const originalTitle=document.title;

let titleTimer=null;

window.addEventListener(

"blur",

()=>{

titleTimer=setInterval(()=>{

document.title=

document.title===originalTitle

?

"👋 Come Back!"

:

originalTitle;

},2000);

}

);

window.addEventListener(

"focus",

()=>{

clearInterval(titleTimer);

document.title=

originalTitle;

}

);

/* ==========================================================
   FINAL INITIALIZATION
========================================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

console.clear();

console.log(

"%cMuhammad Jamil Uddin",

"color:#2563eb;font-size:22px;font-weight:bold;"

);

console.log(

"%cOfficial Portfolio Website",

"color:#0ea5e9;font-size:16px;"

);

console.log(

"%cVersion 9.0 Successfully Loaded",

"color:#22c55e;font-size:18px;font-weight:bold;"

);

console.log(

"%cAll Systems Running Perfectly",

"color:#f59e0b;font-size:15px;"

);

});

/* ==========================================================
   STATUS
========================================================== */

console.log(

"✅ Version 9 | Part 3.9 Loader & Typing Loaded"

);
/* ==========================================================
   VERSION 9.0
   PART 3.10
   FINAL CORE ENGINE
========================================================== */

"use strict";

/* ==========================================================
   GLOBAL ERROR HANDLER
========================================================== */

window.addEventListener("error", (event) => {

    console.error(
        "JavaScript Error:",
        event.message,
        "@",
        event.filename,
        "Line:",
        event.lineno
    );

});

window.addEventListener("unhandledrejection", (event) => {

    console.error(
        "Unhandled Promise:",
        event.reason
    );

});

/* ==========================================================
   PERFORMANCE MONITOR
========================================================== */

window.addEventListener("load", () => {

    const loadTime = performance.now();

    console.log(
        `⚡ Website Loaded in ${loadTime.toFixed(0)} ms`
    );

});

/* ==========================================================
   FPS MONITOR
========================================================== */

let frame = 0;
let lastTime = performance.now();

function monitorFPS(now){

    frame++;

    if(now - lastTime >= 1000){

        console.log(`🎮 FPS : ${frame}`);

        frame = 0;

        lastTime = now;

    }

    requestAnimationFrame(monitorFPS);

}

requestAnimationFrame(monitorFPS);

/* ==========================================================
   AUTO PAGE REFRESH AFTER LONG IDLE
========================================================== */

let idleTimer;

function resetIdle(){

    clearTimeout(idleTimer);

    idleTimer = setTimeout(()=>{

        console.log("♻ Refresh Recommended");

    },30*60*1000);

}

["mousemove","keydown","scroll","touchstart","click"]

.forEach(eventName=>{

window.addEventListener(

eventName,

resetIdle,

{passive:true}

);

});

resetIdle();

/* ==========================================================
   SHORTCUT KEYS
========================================================== */

document.addEventListener("keydown",(event)=>{

    if(event.ctrlKey && event.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

/* ==========================================================
   CACHE VERSION
========================================================== */

const currentVersion="9.0";

const previousVersion=

localStorage.getItem("portfolioVersion");

if(previousVersion!==currentVersion){

localStorage.setItem(

"portfolioVersion",

currentVersion

);

console.log(

"✨ Version Updated:",

currentVersion

);

}

/* ==========================================================
   OFFLINE / ONLINE NOTIFICATION
========================================================== */

function networkNotice(){

    if(navigator.onLine){

        console.log("🟢 Internet Connected");

    }else{

        console.log("🔴 Internet Disconnected");

    }

}

window.addEventListener(

"online",

networkNotice

);

window.addEventListener(

"offline",

networkNotice

);

networkNotice();

/* ==========================================================
   DEVICE INFORMATION
========================================================== */

console.table({

Browser:navigator.userAgent,

Language:navigator.language,

Platform:navigator.platform,

Online:navigator.onLine,

Cookies:navigator.cookieEnabled

});

/* ==========================================================
   MEMORY INFORMATION
========================================================== */

if(performance.memory){

console.table({

Used:

Math.round(

performance.memory.usedJSHeapSize/

1048576

)+" MB",

Limit:

Math.round(

performance.memory.jsHeapSizeLimit/

1048576

)+" MB"

});

}

/* ==========================================================
   FINAL STARTUP
========================================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

document.documentElement.classList.add(

"app-ready"

);

console.log(

"🚀 Portfolio Ready"

);

});

/* ==========================================================
   FINAL CONSOLE BANNER
========================================================== */

console.log("%c===================================================",
"color:#2563eb;font-size:14px;font-weight:bold");

console.log("%c MUHAMMAD JAMIL UDDIN",
"color:#0ea5e9;font-size:22px;font-weight:bold");

console.log("%c Official Portfolio Website",
"color:#22c55e;font-size:16px");

console.log("%c VERSION 9.0 FINAL",
"color:#f59e0b;font-size:18px;font-weight:bold");

console.log("%c HTML • CSS • JavaScript • Responsive",
"color:#8b5cf6;font-size:15px");

console.log("%c Mobile ✔ Tablet ✔ Desktop ✔",
"color:#10b981;font-size:15px");

console.log("%c===================================================",
"color:#2563eb;font-size:14px;font-weight:bold");

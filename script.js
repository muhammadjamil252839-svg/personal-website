/* ==========================================================
   MUHAMMAD JAMIL UDDIN
   OFFICIAL PORTFOLIO WEBSITE
   VERSION 9.0
   SCRIPT.JS
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

function initializeWebsite() {

    startLoader();
    startBangladeshClock();
    updateFooterYear();
    detectNetwork();
    setupSidebar();
    setupScrollEffects();
    setupTheme();
    updateAllDates();

}

/* ==========================
   WELCOME LOADER WITH GREETING
========================== */

function getGreeting() {

    const now = new Date();

    const hour = now.toLocaleString("en-US", {

        timeZone: "Asia/Dhaka",
        hour: "numeric",
        hour12: false

    });

    const hourNum = parseInt(hour);

    if (hourNum >= 5 && hourNum < 12) {

        return "Good Morning ☀️";

    } else if (hourNum >= 12 && hourNum < 17) {

        return "Good Afternoon 🌤";

    } else if (hourNum >= 17 && hourNum < 20) {

        return "Good Evening 🌇";

    } else {

        return "Good Night 🌙";

    }

}

function startLoader() {

    const loader = document.getElementById("loader");

    const greetingElement = document.getElementById("loaderGreeting");

    if (greetingElement) {

        greetingElement.textContent = getGreeting();

    }

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2500);

}

/* ==========================
   FOOTER YEAR
========================== */

function updateFooterYear() {

    const year = document.getElementById("footerYear");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}

/* ==========================
   BANGLADESH LIVE CLOCK
========================== */

function startBangladeshClock() {

    updateClock();

    setInterval(updateClock, 1000);

}

function updateClock() {

    const now = new Date();

    const optionsTime = {

        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true

    };

    const optionsDate = {

        timeZone: "Asia/Dhaka",
        weekday: "short",
        month: "short",
        day: "numeric"

    };

    const time = document.getElementById("headerBdTime");

    const date = document.getElementById("headerEnglishDate");

    const timeString = now.toLocaleTimeString("en-US", optionsTime);

    const dateString = now.toLocaleDateString("en-US", optionsDate);

    if (time) {

        time.textContent = timeString;

    }

    if (date) {

        date.textContent = dateString;

    }

}

/* ==========================
   THREE DATES IN ENGLISH
========================== */

const bengaliMonths = [

    "Baishakh", "Jyoishtho", "Asad", "Shraban", "Bhadro", "Ashwin",
    "Kartik", "Agrahayan", "Poush", "Magh", "Phalgun", "Chaitra"

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

function updateAllDates() {

    const today = new Date();

    const gregorianDate = document.getElementById("gregorianDate");

    const bengaliDate = document.getElementById("bengaliDate");

    const hijriDate = document.getElementById("hijriDate");

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

setInterval(updateAllDates, 60000);

/* ==========================
   FOOTER GREETING
========================== */

function updateFooterGreeting() {

    const greeting = document.getElementById("footerGreeting");

    if (greeting) {

        greeting.textContent = getGreeting();

    }

}

updateFooterGreeting();

setInterval(updateFooterGreeting, 60000);

/* ==========================
   NETWORK STATUS
========================== */

function detectNetwork() {

    const status = document.getElementById("footerNetworkStatus");

    if (!status) return;

    function update() {

        if (navigator.onLine) {

            status.textContent = "Online 🟢";

        } else {

            status.textContent = "Offline 🔴";

        }

    }

    update();

    window.addEventListener("online", update);

    window.addEventListener("offline", update);

}

/* ==========================
   VISITOR COUNTER
========================== */

function updateVisitorCount() {

    const counter = document.getElementById("footerVisitorCount");

    if (!counter) return;

    let visits = Number(localStorage.getItem("portfolioVisitor") || 0);

    visits++;

    localStorage.setItem("portfolioVisitor", visits);

    counter.textContent = visits.toLocaleString();

}

updateVisitorCount();

/* ==========================
   SIDEBAR MENU
========================== */

function setupSidebar() {

    const menuToggle = document.getElementById("menuToggle");

    const sidebar = document.getElementById("sidebarV9");

    const sidebarClose = document.getElementById("sidebarClose");

    const overlay = document.getElementById("sidebarOverlay");

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("active");

        if (overlay) {

            overlay.classList.add("active");

        }

        document.body.style.overflow = "hidden";

    }

    function closeSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove("active");

        if (overlay) {

            overlay.classList.remove("active");

        }

        document.body.style.overflow = "";

    }

    if (menuToggle) {

        menuToggle.addEventListener("click", openSidebar);

    }

    if (sidebarClose) {

        sidebarClose.addEventListener("click", closeSidebar);

    }

    if (overlay) {

        overlay.addEventListener("click", closeSidebar);

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeSidebar();

        }

    });

    document.querySelectorAll(".sidebar-v9 a").forEach((link) => {

        link.addEventListener("click", () => {

            closeSidebar();

        });

    });

    // Mobile swipe support

    let touchStartX = 0;

    let touchEndX = 0;

    document.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

    });

    document.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        if (touchEndX - touchStartX > 120) {

            openSidebar();

        }

        if (touchStartX - touchEndX > 120) {

            closeSidebar();

        }

    });

}

/* ==========================
   SCROLL EFFECTS
========================== */

function setupScrollEffects() {

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    const progressBar = document.getElementById("progressBar");

    window.addEventListener("scroll", () => {

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

    });

    if (scrollTopBtn) {

        scrollTopBtn.addEventListener("click", () => {

            window.scrollTo({ top: 0, behavior: "smooth" });

        });

    }

}

/* ==========================
   THEME SYSTEM
========================== */

function setupTheme() {

    const themeToggle = document.getElementById("themeToggle");

    const themeToggleBtn = document.getElementById("themeToggleBtn");

    function setTheme(theme) {

        if (theme === 'dark') {

            document.body.classList.add('dark-mode');

            localStorage.setItem('theme', 'dark');

            if (themeToggle) themeToggle.textContent = "☀️";

            if (themeToggleBtn) themeToggleBtn.textContent = "☀️";

        } else {

            document.body.classList.remove('dark-mode');

            localStorage.setItem('theme', 'light');

            if (themeToggle) themeToggle.textContent = "🌙";

            if (themeToggleBtn) themeToggleBtn.textContent = "🌙";

        }

    }

    function loadTheme() {

        const savedTheme = localStorage.getItem("theme") || "light";

        setTheme(savedTheme);

    }

    loadTheme();

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const isDarkMode = document.body.classList.contains('dark-mode');

            setTheme(isDarkMode ? 'light' : 'dark');

        });

    }

    if (themeToggleBtn) {

        themeToggleBtn.addEventListener("click", () => {

            const isDarkMode = document.body.classList.contains('dark-mode');

            setTheme(isDarkMode ? 'light' : 'dark');

        });

    }

}

/* ==========================
   SMOOTH SCROLL LINKS
========================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({ behavior: "smooth", block: "start" });

    });

});

/* ==========================
   EXTERNAL LINKS
========================== */

document.querySelectorAll("a").forEach((link) => {

    if (link.hostname && link.hostname !== location.hostname) {

        link.target = "_blank";

        link.rel = "noopener noreferrer";

    }

});

/* ==========================
   PREVENT IMAGE DRAG
========================== */

document.querySelectorAll("img").forEach((image) => {

    image.setAttribute("draggable", "false");

    image.addEventListener("dragstart", (e) => e.preventDefault());

});

/* ==========================
   NETWORK DETECTION
========================== */

window.addEventListener("online", () => {

    console.log("🟢 Internet Connected");

});

window.addEventListener("offline", () => {

    console.log("🔴 Internet Disconnected");

});

/* ==========================
   FINAL INITIALIZATION
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("%c==============================================", "color:#2563eb;font-size:14px;font-weight:bold;");
console.log("%cMuhammad Jamil Uddin", "color:#2563eb;font-size:22px;font-weight:bold;");
console.log("%cOfficial Portfolio Website", "color:#0ea5e9;font-size:16px;");
console.log("%cVersion 9.0 Ultimate Edition", "color:#16a34a;font-size:18px;font-weight:bold;");
console.log("%cAll Features Loaded Successfully", "color:#f59e0b;font-size:14px;");
console.log("%c==============================================", "color:#2563eb;font-size:14px;font-weight:bold;");

/* ==========================================================
   END OF SCRIPT.JS - VERSION 9 ULTIMATE
========================================================== */

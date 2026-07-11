/* ==========================================
   MUHAMMAD JAMIL UDDIN - PORTFOLIO
   UPDATED JAVASCRIPT MODULE
   - Greeting System in Hero
   - Corrected Hijri Date
   - Header Time & Date Display
========================================== */

"use strict";

// ==========================================
// SIDEBAR TOGGLE
// ==========================================

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
        sidebarV8?.classList.remove("active");
        sidebarOverlay?.classList.remove("active");
    }
});

console.log("✅ Sidebar Toggle Loaded");

// ==========================================
// NESTED MENU TOGGLE
// ==========================================

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

console.log("✅ Nested Menu System Loaded");

// ==========================================
// HEADER TIME & DATE UPDATE
// ==========================================

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

console.log("✅ Header Time & Date Loaded");

// ==========================================
// GREETING SYSTEM (HERO & FOOTER)
// ==========================================

function getGreeting() {
    const hour = Number(
        new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            hour12: false
        })
    );
    
    if (hour >= 5 && hour < 12) {
        return "🌅 Good Morning";
    } else if (hour >= 12 && hour < 17) {
        return "☀️ Good Afternoon";
    } else if (hour >= 17 && hour < 20) {
        return "🌇 Good Evening";
    } else {
        return "🌙 Good Night";
    }
}

function updateGreetings() {
    const greeting = getGreeting();
    
    // Hero Section Greeting
    const heroGreeting = document.getElementById("heroGreeting");
    if (heroGreeting) {
        heroGreeting.textContent = greeting;
    }
    
    // Footer Greeting
    const footerGreeting = document.getElementById("footerGreeting");
    if (footerGreeting) {
        footerGreeting.textContent = greeting;
    }
}

updateGreetings();
setInterval(updateGreetings, 60000); // Update every minute

console.log("✅ Greeting System Loaded");

// ==========================================
// FOOTER DATES - THREE CALENDARS
// ==========================================

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

/**
 * Get Hijri Date with Correct Month Names
 * Uses Intl API to get Islamic calendar date
 */
function getGregorianToHijriDate(date) {
    try {
        // Get Hijri date using Intl API
        const hijriFormatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
        
        const hijriParts = hijriFormatter.formatToParts(date);
        let hijriDay = '', hijriMonth = '', hijriYear = '';
        
        hijriParts.forEach(part => {
            if (part.type === 'day') hijriDay = part.value;
            if (part.type === 'month') hijriMonth = part.value;
            if (part.type === 'year') hijriYear = part.value;
        });
        
        // Convert month number to month name
        const monthIndex = parseInt(hijriMonth) - 1;
        const monthName = hijriMonths[monthIndex] || "Unknown";
        
        return `${hijriDay} ${monthName} ${hijriYear} AH`;
    } catch (error) {
        console.error('Error getting Hijri date:', error);
        return 'Hijri Date';
    }
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
setInterval(updateFooterDates, 60000); // Update every minute

console.log("✅ Footer Three Dates Loaded");

// ==========================================
// NETWORK STATUS
// ==========================================

const footerNetworkStatus = document.getElementById("footerNetworkStatus");

function updateNetworkStatus() {
    if (!footerNetworkStatus) return;
    footerNetworkStatus.innerHTML = navigator.onLine ? "🟢 Online" : "🔴 Offline";
}

updateNetworkStatus();
window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

console.log("✅ Network Status Loaded");

// ==========================================
// VISITOR COUNT
// ==========================================

const footerVisitorCount = document.getElementById("footerVisitorCount");

function updateVisitorCount() {
    if (!footerVisitorCount) return;
    
    let visits = Number(localStorage.getItem("portfolioVisitor") || 0);
    visits++;
    localStorage.setItem("portfolioVisitor", visits);
    
    footerVisitorCount.textContent = `Visitors: ${visits.toLocaleString()}`;
}

updateVisitorCount();

console.log("✅ Visitor Count Loaded");

// ==========================================
// SCROLL EFFECTS
// ==========================================

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

console.log("✅ Scroll Effects Loaded");

// ==========================================
// THEME SYSTEM
// ==========================================

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

console.log("✅ Theme System Loaded");

// ==========================================
// LANGUAGE SYSTEM
// ==========================================

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    console.log(`Language changed to: ${lang}`);
}

window.setLanguage = setLanguage;

console.log("✅ Language System Loaded");

// ==========================================
// FOOTER YEAR
// ==========================================

const footerYear = document.getElementById("footerYear");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

console.log("✅ Footer Year Loaded");

// ==========================================
// INITIALIZATION COMPLETE
// ==========================================

console.log("✅ Portfolio System Initialized Successfully!");

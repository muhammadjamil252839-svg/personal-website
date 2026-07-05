/* ==========================================
   Muhammad Jamil Uddin
   Official Website Script
   Part 6.1
========================================== */

// Website Loaded
window.addEventListener("load", () => {
    console.log("Website Loaded Successfully");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Current Year
const year = new Date().getFullYear();

console.log("Current Year :", year);
/* ==========================================
   DARK MODE (Ready for Future Button)
========================================== */

const darkBtn = document.getElementById("darkBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}

/* ==========================================
   SCROLL HEADER
========================================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>80){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.12)";

}

});

/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#198754";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex = "9999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================================
   SIMPLE FADE ANIMATION
========================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".8s";

observer.observe(section);

});

console.log("All JavaScript Loaded Successfully.");

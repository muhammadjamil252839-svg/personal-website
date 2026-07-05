// =====================================
// Muhammad Jamil Uddin
// Official Website Script
// =====================================

console.log("Welcome to Muhammad Jamil Uddin Official Website");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Current Year
const year=new Date().getFullYear();

console.log("Website Running : "+year);

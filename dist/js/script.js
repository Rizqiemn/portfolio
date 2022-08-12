 // Ketik otomatis
 const typedTextSpan = document.querySelector(".typed-text");
 const cursorSpan = document.querySelector(".cursor");

 const textArray = [
   "Programmer",
   "Web Developer",
   "Web Designer",
   "Data Analyst",
   "Youtuber",
 ];
 const typingDelay = 200;
 const erasingDelay = 100;
 const newTextDelay = 2000; // Delay between current and next text
 let textArrayIndex = 0;
 let charIndex = 0;

 function type() {
   if (charIndex < textArray[textArrayIndex].length) {
     if (!cursorSpan.classList.contains("typing"))
       cursorSpan.classList.add("typing");
     typedTextSpan.textContent +=
       textArray[textArrayIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type, typingDelay);
   } else {
     cursorSpan.classList.remove("typing");
     setTimeout(erase, newTextDelay);
   }
 }

 function erase() {
   if (charIndex > 0) {
     if (!cursorSpan.classList.contains("typing"))
       cursorSpan.classList.add("typing");
     typedTextSpan.textContent = textArray[textArrayIndex].substring(
       0,
       charIndex - 1
     );
     charIndex--;
     setTimeout(erase, erasingDelay);
   } else {
     cursorSpan.classList.remove("typing");
     textArrayIndex++;
     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
     setTimeout(type, typingDelay + 1100);
   }
 }

 document.addEventListener("DOMContentLoaded", function () {
   // On DOM Load initiate the effect
   if (textArray.length) setTimeout(type, newTextDelay + 250);
 });

// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset>fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    navMenu.classList.toggle('hidden'); 
});

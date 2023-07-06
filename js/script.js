var typedTextSpan = document.querySelector(".typed-text");
var cursorSpan = document.querySelector(".cursor");

var skills = ["JavaScript", "Python", "PHP", "Node.js", "SQL", "HTML & CSS"];
var typingDelay = 100;
var erasingDelay = 50;
var newTextDelay = 2000; // Delay between texts
var textArrayIndex = 0;
var charIndex = 0;

function type() {
  if (charIndex < skills[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += skills[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = skills[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= skills.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typedTextSpan) {
    setTimeout(type, newTextDelay + 250);
  }
});


const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navContainer.classList.add("scrolled");
  } else {
    navContainer.classList.remove("scrolled");
  }
});



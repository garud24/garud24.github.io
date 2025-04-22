// Toggle Icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 550;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
      sec.classList.add("show-animate");
    }
  });

  // Sticky Header
  document
    .querySelector("header")
    .classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Resume Download
["downloadCv", "downloadCv2"].forEach((id) => {
  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("Would you like to download my Resume?")) {
      window.location.href = "Resume/HimanshuKiranGarud.pdf";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");

    if (!textElement) {
      console.error("Element #dynamic-text not found");
      return;
    }

    const phrases = [
      "student.",
      "developer.",
      "problem solver.",
      "coder.",
      "creative thinker.",
      "geek.",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let typing = true;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (typing) {
        if (charIndex < currentPhrase.length) {
          textElement.textContent += currentPhrase.charAt(charIndex);
          charIndex++;
          setTimeout(typeEffect, 100);
        } else {
          typing = false;
          setTimeout(typeEffect, 2000); // Pause after typing
        }
      } else {
        if (charIndex > 0) {
          textElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(typeEffect, 50);
        } else {
          typing = true;
          phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
          setTimeout(typeEffect, 500); // Pause before starting the next phrase
        }
      }
    }

    // Start the typing effect
    typeEffect();
  });
  document.addEventListener("DOMContentLoaded", function () {
    let themeToggle = document.getElementById("theme-toggle");
    let sunIcon = document.getElementById("sun-icon");
    let moonIcon = document.getElementById("moon-icon");

    // Function to apply the selected theme
    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);

      if (theme === "dark") {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      }

      console.log("Theme Applied:", theme); // Debugging log
    }

    // Get stored theme from localStorage or default to light
    let savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Event listener for the toggle button
    themeToggle.addEventListener("click", function () {
      let currentTheme = document.documentElement.getAttribute("data-theme");
      let newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  });
});

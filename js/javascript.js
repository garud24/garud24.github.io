//togle icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 550;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      sec.classList.add("show-animate");
    }
  });

  //sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icn
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

//Email Settings

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

document
  .getElementById("downloadCv")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("Would you like to download my Resume?")) {
      window.location.href = "HimanshuResume.pdf";
    }
  });

document
  .getElementById("downloadCv2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("Would you like to download my Resume?")) {
      window.location.href = "HimanshuResume.pdf";
    }
  });

// Theme Toggle Logic
let themeToggle = document.getElementById("theme-toggle");
let sunIcon = document.getElementById("sun-icon");
let moonIcon = document.getElementById("moon-icon");
let body = document.body;

// Initial theme based on user preference (Optional)
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  body.classList.add("dark-mode");
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  body.classList.add("light-mode");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
}

themeToggle.onclick = () => {
  // Toggle body classes and data-theme attribute
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
};

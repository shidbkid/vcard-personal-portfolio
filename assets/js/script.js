'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
  console.log(`Toggled active class on element:`, elem);
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  console.log("Sidebar toggled.");
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    console.log(`Input changed in field: ${input.name}, value: ${input.value}`);
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
      console.log("Form is valid. Submit button enabled.");
    } else {
      formBtn.setAttribute("disabled", "");
      console.log("Form is invalid. Submit button disabled.");
    }
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.textContent.toLowerCase().trim();

    console.log(`Clicked link: ${this.textContent.trim()}`); // Log the clicked link
    console.log(`Target page: ${targetPage}`); // Log the target page

    // Update active page
    pages.forEach((page) => {
      console.log(`Checking page: ${page.dataset.page}`); // Log the data-page of each article
      if (page.dataset.page === targetPage) {
        console.log(`Activating page: ${page.dataset.page}`); // Log the active page
        page.classList.add("active");

        // Debugging visibility and display
        console.log("Computed styles for the activated page:");
        console.log(`Display: ${window.getComputedStyle(page).display}`);
        console.log(`Visibility: ${window.getComputedStyle(page).visibility}`);
      } else {
        console.log(`Deactivating page: ${page.dataset.page}`); // Log the inactive page
        page.classList.remove("active");
      }
    });

    // Update active navigation link
    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    console.log(`Active link set to: ${this.textContent.trim()}`); // Confirm active link
  });
});

const text = "Jason Spinrad"; // Text to display
const typingElement = document.getElementById("typing-effect");

let index = 0; // Current character index
const typingSpeed = 100; // Typing speed in milliseconds

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index); // Add the next character
    index++;
    setTimeout(typeEffect, typingSpeed); // Schedule the next character
  }
}

// Start the typing effect when the page loads
window.addEventListener("load", typeEffect);

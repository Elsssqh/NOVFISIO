// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Simple Tab Switcher for Products or Reviews
  function switchTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach((tab) => {
      tab.style.display = "none"; // Hide all tabs
    });
    document.getElementById(tabName).style.display = "block"; // Show the selected tab
  }
  
  // Initial Tab Setup
  document.addEventListener("DOMContentLoaded", () => {
    // Show the first tab by default
    const firstTab = document.querySelector(".tab-content");
    if (firstTab) firstTab.style.display = "block";
  });
  
  // Contact Form Submission (Basic Alert for Feedback)
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form submission
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
  
      if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
        contactForm.reset(); // Clear the form
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
  
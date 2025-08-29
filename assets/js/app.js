/**
 * Basha Manager - Rental Management System
 * Main JavaScript File
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // User Dropdown Toggle
  const userDropdownToggle = document.getElementById("userDropdownToggle");
  const userDropdownMenu = document.getElementById("userDropdownMenu");

  if (userDropdownToggle && userDropdownMenu) {
    userDropdownToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      userDropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        userDropdownMenu.classList.contains("show") &&
        !userDropdownMenu.contains(e.target)
      ) {
        userDropdownMenu.classList.remove("show");
      }
    });
  }

  // Get Started Button - Hero Section
  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
      // Show the login/register modal
      const loginModal = new bootstrap.Modal(
        document.getElementById("loginModal")
      );
      loginModal.show();
    });
  }

  // Learn More Button - Hero Section
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
      // Scroll to Features Section
      const featuresSection = document.querySelector(".features-section");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // View All Properties Button
  const viewAllPropertiesBtn = document.getElementById("viewAllPropertiesBtn");
  if (viewAllPropertiesBtn) {
    viewAllPropertiesBtn.addEventListener("click", function () {
      // Redirect to properties page or handle as needed
      window.location.href = "#"; // Update with actual URL
    });
  }

  // Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Basic validation
      if (!email || !password) {
        Swal.fire({
          title: "Error!",
          text: "Please fill in all fields",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Here you would typically send an AJAX request to your server
      // For demo purposes, we'll use SweetAlert to show success
  //     Swal.fire({
  //       title: "Success!",
  //       text: "You have successfully logged in",
  //       icon: "success",
  //       confirmButtonText: "Go to Dashboard",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         window.location.href = "dashboard.html";
  //       }
  //     });
  //   });
  // }

  // Register Form Submission
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const termsCheck = document.getElementById("termsCheck").checked;

      // Basic validation
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        Swal.fire({
          title: "Error!",
          text: "Please fill in all fields",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      if (password !== confirmPassword) {
        Swal.fire({
          title: "Error!",
          text: "Passwords do not match",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      if (!termsCheck) {
        Swal.fire({
          title: "Error!",
          text: "You must agree to the Terms of Service and Privacy Policy",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Here you would typically send an AJAX request to your server
      // For demo purposes, we'll use SweetAlert to show success
      Swal.fire({
        title: "Registration Successful!",
        text: "Your account has been created",
        icon: "success",
        confirmButtonText: "Go to Dashboard",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "dashboard.html";
        }
      });
    });
  }

  // Logout Button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      Swal.fire({
        title: "Logout",
        text: "Are you sure you want to logout?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3498db",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout",
      }).then((result) => {
        if (result.isConfirmed) {
          // Here you would typically handle the logout process
          // For demo purposes, we'll just show a success message
          Swal.fire(
            "Logged Out!",
            "You have been successfully logged out.",
            "success"
          ).then(() => {
            window.location.href = "index.html";
          });
        }
      });
    });
  }

  // Property Card Detail Buttons
  // const propertyDetailBtns = document.querySelectorAll(".property-card .btn");
  // if (propertyDetailBtns.length > 0) {
  //   propertyDetailBtns.forEach((btn) => {
  //     btn.addEventListener("click", function () {
  //       // For demo purposes, we'll use SweetAlert to show a message
  //       // In a real application, you'd redirect to a property details page
  //       const propertyTitle =
  //         this.closest(".property-card").querySelector(
  //           ".property-title"
  //         ).textContent;

  //       Swal.fire({
  //         title: propertyTitle,
  //         text: "You would be redirected to the property details page.",
  //         icon: "info",
  //         confirmButtonText: "OK",
  //       });
  //     });
  //   });
  // }

  // Enhance the carousel functionality with autoplay pause on hover
  const heroCarousel = document.getElementById("heroCarousel");
  if (heroCarousel) {
    heroCarousel.addEventListener("mouseenter", function () {
      const carousel = bootstrap.Carousel.getInstance(heroCarousel);
      if (carousel) {
        carousel.pause();
      }
    });

    heroCarousel.addEventListener("mouseleave", function () {
      const carousel = bootstrap.Carousel.getInstance(heroCarousel);
      if (carousel) {
        carousel.cycle();
      }
    });
  }

  // Add animation effects when scrolling
  function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll(
      ".feature-card, .property-card, .testimonial-card"
    );

    elementsToAnimate.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Initial styling for elements to be animated
  const elementsToAnimate = document.querySelectorAll(
    ".feature-card, .property-card, .testimonial-card"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Run animation check on load and scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);
});

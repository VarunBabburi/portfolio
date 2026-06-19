document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Light/Dark Theme Controller ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const toggleIcon = themeToggleBtn.querySelector("i");

  // Local storage nundi memory fetch chesthundi setup check cheyadaniki
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      toggleIcon.className = "bi bi-sun-fill";
      themeToggleBtn.style.color = "#fca61f";
    } else {
      toggleIcon.className = "bi bi-moon-stars-fill";
      themeToggleBtn.style.color = "#6f34fe";
    }
  }

  // --- 2. Dynamic Project Filter Layout ---
  const filterButtons = document.querySelectorAll(".btn-filter");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active states
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedFilter = button.getAttribute("data-filter");

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (selectedFilter === "all" || itemCategory === selectedFilter) {
          item.style.display = "block";
          setTimeout(() => item.style.opacity = "1", 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => item.style.display = "none", 300);
        }
      });
    });
  });

  // --- 3. Scroll To Top Logic Control ---
  const backToTopBtn = document.getElementById("btn-back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
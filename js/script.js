
const darkModeToggle = document.getElementById("darkModeToggle");

// Load saved dark mode
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");

  if (darkModeToggle) {
    darkModeToggle.checked = true;
  }
}

// Change dark mode
if (darkModeToggle) {
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
}
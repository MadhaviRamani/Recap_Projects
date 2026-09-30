const bodyElement = document.querySelector('[data-js="body-mode"]');
const darkModeToggle = document.querySelector('[data-js="toggle-button"]');


darkModeToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
});












































/* 
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
} */
// --- Display current date in footer ---
const footer = document.querySelector("footer");
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
footer.innerHTML += `<p>Last updated on: ${formattedDate}</p>`;

// --- Smooth scrolling for internal links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --- Add a Dark/Light Mode toggle button ---
const button = document.createElement("button");
button.id = "toggle-theme";
button.textContent = "Toggle Theme";
document.body.appendChild(button);

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference in browser
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Apply saved theme on load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};

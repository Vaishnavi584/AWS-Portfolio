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

// --- Dark/Light Mode toggle ---
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

// --- Accordion functionality for portfolio sections ---
const accordions = document.querySelectorAll(".accordion-btn");
accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      // Hide all other sections
      document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
      content.style.display = "block";
    }
  });
});

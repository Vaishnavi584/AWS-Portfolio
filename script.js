// --- Display current date in footer ---
const footer = document.querySelector("footer");
const currentDate = new Date();
footer.innerHTML = `Last updated on: ${currentDate.toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}`;

// --- Accordion functionality ---
const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    // Toggle open/close
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Close all other accordions
      document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// --- Dark/Light Mode toggle ---
const button = document.createElement("button");
button.id = "toggle-theme";
button.textContent = "Toggle Theme";
document.body.appendChild(button);

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply saved theme on load
window.onload = () => {
  if(localStorage.getItem("theme") === "dark") document.body.classList.add("dark-mode");
};

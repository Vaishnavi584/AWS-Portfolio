// Display current date in footer
const footer = document.querySelector("footer");
const currentDate = new Date();
footer.innerHTML = `Last updated on: ${currentDate.toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}`;

// Accordion functionality
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});

// Dark/light mode toggle
const button = document.createElement("button");
button.id = "toggle-theme";
button.textContent = "Toggle Theme";
document.body.appendChild(button);

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

window.onload = () => {
  if(localStorage.getItem("theme") === "dark") document.body.classList.add("dark-mode");
};

// --- Display current date in footer ---
const footer = document.querySelector("footer");
const currentDate = new Date();
footer.innerHTML = `Last updated on: ${currentDate.toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}`;

// --- Smooth scrolling for internal links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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

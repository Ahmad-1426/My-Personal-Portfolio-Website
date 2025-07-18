// إظهار العناصر عند التمرير
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
});

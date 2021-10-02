const shareIcon = document.querySelector(".share-icon");
const tooltip = document.querySelector(".tooltip");

// Click events
shareIcon.addEventListener("click", () => {
  tooltip.classList.toggle("active");
});

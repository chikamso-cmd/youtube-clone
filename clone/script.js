const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (!menuToggle || !sidebar) {
  console.error("menuToggle or sidebar not found", { menuToggle, sidebar });
} else {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click handler
    sidebar.classList.toggle("open");
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });

  // close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") sidebar.classList.remove("open");
  });
}

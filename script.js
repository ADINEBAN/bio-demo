const followBtn = document.getElementById("followBtn");

followBtn.addEventListener("click", () => {
  const isActive = followBtn.classList.toggle("active");
  followBtn.textContent = isActive ? "Đã theo dõi ✓" : "Theo dõi";
});

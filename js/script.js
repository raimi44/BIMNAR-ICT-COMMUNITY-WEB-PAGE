window.onload = function() {
  document.getElementById("popup").style.display = "flex";
}

document.getElementById("close-popup").onclick = function() {
  document.getElementById("popup").style.display = "none";
}

// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


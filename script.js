// Menu mobile toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Tutup menu saat link diklik (khusus mobile)
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

// Form kontak sederhana
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  form.reset();
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();
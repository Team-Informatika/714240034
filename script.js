import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Render halaman
renderHTML("root", "home.html");

// Ambil data dari JSON
getJSON("https://t.if.co.id/json/iyan.json", null, null, responseFunction);

function responseFunction(response) {
    const data = response.data.card;

    // Render avatar dengan event untuk modal
    const avatarHTML = `<img src="${data.avatar.src}" alt="${data.avatar.alt}" onclick="openModal('${data.avatar.src}')">`;
    document.getElementById("avatar").innerHTML = avatarHTML;

    // Render nama
    document.getElementById("nama").textContent = data.details.name;

    // Render occupation
    document.getElementById("occupation").textContent = data.details.occupation;

    // Render quote
    const quote = data.details.skills.description || "No quote available";
    document.getElementById("quote").textContent = `"${quote}"`;

    // Render about
    const aboutHTML = data.details.about
        .map((item) => `<p>${item.value}</p>`)
        .join("");
    document.getElementById("about").innerHTML = aboutHTML;

    // Render skills
    const skillsHTML = data.details.skills.list
        .map((skill) => `<li>${skill}</li>`)
        .join("");
    document.getElementById("skills").innerHTML = skillsHTML;

    // Render hourly rate
    document.getElementById("harga").textContent = data.details.rate_day.price;
    document.getElementById("rate").textContent = data.details.rate_day.rate;

    // Render social links
    const socialLinksHTML = data.details.social_links
        .map(
            (link) =>
                `<a href="${link.url}" target="_blank">${link.platform}</a>`
        )
        .join(" | ");
    document.getElementById("social-links").innerHTML = socialLinksHTML;
}

// Fungsi untuk membuka modal
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = src;
  modal.classList.add("active");

  // Tutup modal saat pengguna mengklik di luar gambar
  modal.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImage.src = ""; // Kosongkan src untuk menghindari cache
  });
}
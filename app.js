// --- Inject header & footer dynamically ---
async function loadPartials() {
  const header = await fetch("header.html").then(r => r.text());
  const footer = await fetch("footer.html").then(r => r.text());
  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;

  // année auto
  document.getElementById("year").textContent = new Date().getFullYear();

  // burger menu
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav");
  burger.addEventListener("click", () => nav.classList.toggle("show"));
}
loadPartials();

// --- Produits ---
const products = [
  { name:"Sweat KLYNE", price:"29,99 €", img:"https://via.placeholder.com/400x250.png?text=Sweat+KLYNE", url:"https://www.amazon.fr/", category:"vetements" },
  { name:"Casquette KLYNE", price:"17,90 €", img:"https://via.placeholder.com/400x250.png?text=Casquette+KLYNE", url:"https://www.amazon.fr/", category:"accessoires" },
  { name:"Sticker Pack KLYNE", price:"4,50 €", img:"https://via.placeholder.com/400x250.png?text=Stickers+KLYNE", url:"https://www.amazon.fr/", category:"stickers" }
];

// --- Affichage dynamique selon la page ---
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const page = window.location.pathname.split("/").pop();
  let filtered = products;

  if (page.includes("vetements")) filtered = products.filter(p => p.category==="vetements");
  else if (page.includes("accessoires")) filtered = products.filter(p => p.category==="accessoires");
  else if (page.includes("stickers")) filtered = products.filter(p => p.category==="stickers");

function renderProducts(filterText="") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const page = window.location.pathname.split("/").pop();
  let filtered = products;

  // Filtrage par page
  if (page.includes("vetements")) filtered = filtered.filter(p => p.category==="vetements");
  else if (page.includes("accessoires")) filtered = filtered.filter(p => p.category==="accessoires");
  else if (page.includes("stickers")) filtered = filtered.filter(p => p.category==="stickers");

  // Filtrage par recherche
  if (filterText) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));
  }

  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = "<p>Aucun produit trouvé.</p>";
    return;
  }

  filtered.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="price">${p.price}</p>
          <a href="${p.url}" target="_blank" class="btn">Acheter sur Amazon</a>
        </div>
      </div>
    `;
  });
}

// --- Recherche ---
document.addEventListener("input", e => {
  if (e.target.id === "searchInput") {
    renderProducts(e.target.value);
  }
});

document.addEventListener("click", e => {
  if (e.target.id === "clearBtn") {
    document.getElementById("searchInput").value = "";
    renderProducts();
  }
});

  grid.innerHTML = "";
  filtered.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="price">${p.price}</p>
          <a href="${p.url}" target="_blank" class="btn">Acheter sur Amazon</a>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);

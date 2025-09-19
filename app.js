// Produits exemple
const products = [
  {
    name: "T-shirt KLYNE",
    price: "19,99€",
    image: "https://via.placeholder.com/300x200.png?text=T-shirt+KLYNE",
    url: "https://www.amazon.fr/"
  },
  {
    name: "Casquette KLYNE",
    price: "14,99€",
    image: "https://via.placeholder.com/300x200.png?text=Casquette+KLYNE",
    url: "https://www.amazon.fr/"
  },
  {
    name: "Sticker KLYNE",
    price: "4,99€",
    image: "https://via.placeholder.com/300x200.png?text=Sticker+KLYNE",
    url: "https://www.amazon.fr/"
  }
];

// Sélection des éléments
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const yearSpan = document.getElementById("year");

// Afficher l'année
yearSpan.textContent = new Date().getFullYear();

// Fonction pour afficher les produits
function displayProducts(items) {
  productGrid.innerHTML = "";
  items.forEach(p => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");
    productEl.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a href="${p.url}" target="_blank" class="btn">Acheter sur Amazon</a>
      </div>
    `;
    productGrid.appendChild(productEl);
  });
}

// Initialiser avec tous les produits
displayProducts(products);

// Recherche
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  displayProducts(filtered);
});

// Bouton effacer
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  displayProducts(products);
});

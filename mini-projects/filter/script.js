const filterOptions = {
  Gender: ["Men", "Women", "Kids"],
  Category: ["T-Shirts", "Jeans", "Dresses"],
  Size: ["S", "M", "L", "XL"],
  Price: { min: 0, max: 2000 } // price range
};

const products = [
  { id: 1, name: "Men's T-Shirt", gender: "Men", category: "T-Shirts", size: "M", price: 599 },
  { id: 2, name: "Women's Dress", gender: "Women", category: "Dresses", size: "L", price: 1299 },
  { id: 3, name: "Kids Jeans", gender: "Kids", category: "Jeans", size: "S", price: 799 },
  { id: 4, name: "Men's Jeans", gender: "Men", category: "Jeans", size: "XL", price: 1499 },
  { id: 5, name: "Women's T-Shirt", gender: "Women", category: "T-Shirts", size: "M", price: 699 },
];


const productContainer = document.querySelector(".products");
const genderFilters = document.querySelectorAll(".gender-filter");
const categoryFilters = document.querySelectorAll(".category-filter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  if (filteredProducts.length === 0) {
    productContainer.innerHTML = "<p>No products found</p>";
    return;
  }
  filteredProducts.forEach(p => {
    productContainer.innerHTML += `
      <div class="product-card">
        <h4>${p.name}</h4>
        <p>${p.category} | ${p.gender}</p>
        <p>Size: ${p.size}</p>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

// Initial display
displayProducts(products);

// Function to filter
function filterProducts() {
  let selectedGenders = [...genderFilters].filter(cb => cb.checked).map(cb => cb.value);
  let selectedCategories = [...categoryFilters].filter(cb => cb.checked).map(cb => cb.value);
  let selectedPrice = parseInt(priceRange.value);

  let filtered = products.filter(p => {
    return (
      (selectedGenders.length === 0 || selectedGenders.includes(p.gender)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(p.category)) &&
      p.price <= selectedPrice
    );
  });

  displayProducts(filtered);
}

// Event listeners
genderFilters.forEach(cb => cb.addEventListener("change", filterProducts));
categoryFilters.forEach(cb => cb.addEventListener("change", filterProducts));
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  filterProducts();
});
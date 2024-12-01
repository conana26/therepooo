// Get references to the dropdown and all product grids
const sortDropdown = document.getElementById("sort-options");
const productGrids = document.querySelectorAll(".product-grid"); // Select all product grids

// Helper function to sort products within a product grid
function sortProducts(option, grid) {
    const products = Array.from(grid.children); // Convert NodeList to Array
    let sortedProducts;

    if (option === "price") {
        // Sort by price (convert text to number for comparison)
        sortedProducts = products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
            const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));
            return priceA - priceB;
        });
    } else if (option === "alphabetical") {
        // Sort by name (case insensitive)
        sortedProducts = products.sort((a, b) => {
            const nameA = a.querySelector(".name").textContent.toLowerCase();
            const nameB = b.querySelector(".name").textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }

    // Clear the product grid and re-append sorted products
    grid.innerHTML = "";
    sortedProducts.forEach((product) => grid.appendChild(product));
}

// Event listener for dropdown change
sortDropdown.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    // Sort products in each product grid
    productGrids.forEach((grid) => {
        sortProducts(selectedOption, grid);
    });
});


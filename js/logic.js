// Edit Product --Seller
function editProduct(id, property, replaceValue, modifiedProducts) {
    modifiedProducts.map((element) => {
        if (element["id"] == id) {
            element[property] = replaceValue;
        }
    });
    return modifiedProducts;
}

function deleteProduct(id, products) {
    products.filter((element, index) => {
        if (element["id"] == id) {
            products.splice(index, 1); // Get item index and Delete 1 item
        }
    });
    return products;
}

function searchProduct(product, products) {
    return products.filter((item) =>
        item.productName.toLowerCase().includes(product.toLowerCase())
    );
}

function filterProduct(category = "", price = "", products) {
    const newProducts = [...products];
    if (price === "low") newProducts.sort((a, b) => (a.price > b.price ? 1 : -1)); // sort price to low
    if (price === "high")
        newProducts.sort((a, b) => (a.price > b.price ? -1 : 1)); // sort price to High
    return newProducts.filter((item) => item["category"] === category); // Sort category
}

module.exports = {
    searchProduct,
    filterProduct,
    editProduct,
    deleteProduct
};
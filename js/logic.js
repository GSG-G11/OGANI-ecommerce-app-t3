// Search a product
function searchProduct(product, products) {
	return products.filter((item) =>
		item.productName.toLowerCase().includes(product.toLowerCase())
	);
}

module.exports = {
	searchProduct,
};

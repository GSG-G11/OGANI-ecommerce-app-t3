// Edit Product --Seller
const editProduct = (id, property, replaceValue, modifiedProducts) => {
	return modifiedProducts.map((ele) => {
		if (Number(ele.id) === Number(id)) {
			ele[property] = replaceValue;
		}
		return ele;
	});
};

const deleteProduct = (id, products) => {
	return products.filter((ele) => id != ele.id);
};

const searchProduct = (product, products) => {
	return products.filter((item) =>
		item.productName.toLowerCase().includes(product.toLowerCase())
	);
};

const filterProduct = (category = "", price = "", products) => {
	const newProducts = [...products];
	if (price === "low") newProducts.sort((a, b) => (a.price > b.price ? 1 : -1)); // sort price to low
	if (price === "high")
		newProducts.sort((a, b) => (a.price > b.price ? -1 : 1)); // sort price to High
	return newProducts.filter((item) => item["category"] === category); // Sort category
};

module.exports = {
	searchProduct,
	filterProduct,
	editProduct,
	deleteProduct,
};

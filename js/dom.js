import {
	addProductsToLocalStorage,
	getProductsFromLocalStorage,
} from "./logic.js";

// Toggle navbar
const hamburgerMenu = document.querySelector(".bar");
const menu = document.querySelector("header nav ul");

hamburgerMenu.onclick = () => menu.classList.toggle("active");

// Toggle products view (grid | list)
const gridViewBtn = document.querySelector(".grid-view");
const listViewBtn = document.querySelector(".list-view");
const productsWrapper = document.querySelector(".products-items");

gridViewBtn.onclick = () => {
	productsWrapper.classList.remove("list");
	productsWrapper.classList.add("grid");
};

listViewBtn.onclick = () => {
	productsWrapper.classList.remove("grid");
	productsWrapper.classList.add("list");
};

// Render available products
const renderProducts = (productsToRender) => {
	productsToRender.forEach((product) => {
		const item = document.createElement("div");
		item.className = "prod";
		item.setAttribute("data-id", product.id);
		item.setAttribute("data-category", product.category);
		item.setAttribute("data-price", product.price);

		const productImg = document.createElement("img");
		productImg.src = product.image;
		productImg.alt = product.productName;

		const productDetails = document.createElement("div");
		productDetails.className = "details";

		const info = document.createElement("div");
		info.className = "info";

		const proName = document.createElement("h5");
		proName.textContent = product.productName;
		const proPrice = document.createElement("p");
		proPrice.className = "price";
		proPrice.textContent = `$${product.price}`;

		const addToCartBtn = document.createElement("button");
		addToCartBtn.classList = "add-to-cart";
		const icon = document.createElement("i");
		icon.className = "fas fa-plus-circle";

		info.append(proName, proPrice);
		addToCartBtn.append(icon);

		productDetails.append(info, addToCartBtn);

		item.append(productImg, productDetails);

		productsWrapper.append(item);
	});
};

addProductsToLocalStorage();
renderProducts(getProductsFromLocalStorage());

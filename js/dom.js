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

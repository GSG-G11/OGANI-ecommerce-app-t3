const availableProducts = [
	{
		id: 0,
		category: "electronics",
		price: 30.0,
		productName: "HP Laptop",
		image: "../assets/images/laptop.jpg",
	},
	{
		id: 1,
		category: "food",
		price: 100.0,
		productName: "Hamburger",
		image: "../assets/images/hamburger.jpeg",
	},
	{
		id: 2,
		category: "sports",
		price: 10.0,
		productName: "Ball",
		image: "../assets/images/ball.jpeg",
	},
	{
		id: 3,
		category: "drink",
		price: 5.99,
		productName: "Orange Juice",
		image: "../assets/images/orange.jpeg",
	},
	{
		id: 4,
		category: "electronics",
		price: 300.0,
		productName: "Mobile",
		image: "../assets/images/mobile.jpeg",
	},
	{
		id: 5,
		category: "food",
		price: 130.0,
		productName: "Steak",
		image: "../assets/images/steak.jpeg",
	},
	{
		id: 6,
		category: "sports",
		price: 35.0,
		productName: "Basket Ball",
		image: "../assets/images/basketball.jpeg",
	},
	{
		id: 7,
		category: "fruit",
		price: 20.0,
		productName: "Pineapple",
		image: "../assets/images/pineapple.jpeg",
	},
];

function addProductsToLocalStorage() {
	localStorage.setItem("Products", JSON.stringify(availableProducts));
}

function getProductsFromLocalStorage() {
	return JSON.parse(localStorage.getItem("Products"));
}

export { addProductsToLocalStorage, getProductsFromLocalStorage };

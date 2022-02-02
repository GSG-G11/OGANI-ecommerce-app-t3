const { searchProduct } = require("./js/logic");

describe("Test buyer page", () => {
	test("Should return items when searching for it", () => {
		const actual = searchProduct("ball", [
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
		]);
		const expected = [
			{
				id: 2,
				category: "sports",
				price: 10.0,
				productName: "Ball",
				image: "../assets/images/ball.jpeg",
			},
		];
		expect(actual).toEqual(expected);
	});
});

const deleteBtns = document.querySelectorAll(".delete-cart-item");

if (deleteBtns) {
	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.target.parentElement.parentElement.parentElement.parentElement.remove();
		});
	});
}

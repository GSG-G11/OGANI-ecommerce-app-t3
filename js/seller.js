const buttons = document.querySelector(".add-product-seller");
const forms = document.querySelector(".add-form-container");
buttons.addEventListener("click", () => {
	forms.style.display = "block";
});

const close = document.querySelector(".fas.fa-times");
close.onclick = () => {
	forms.style.display = "none";
};

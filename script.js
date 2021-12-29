let imgs = document.querySelectorAll(".thumbnails img");
let mainimg = document.querySelector("#mainimg");
let minus = document.querySelector(".minusbtn");
let plus = document.querySelector(".plusbtn");
let quantity = document.querySelector(".quantitynum");
let addtocart = document.querySelector("#addtocart");
let cartcontent = document.querySelector(".cartcontent");
let cart = document.querySelector(".basket");
let cartquantity = document.querySelector(".cartquantity");
let cartbtn = document.querySelector(".cartbtn");
let menuburger = document.querySelector(".menuicon");
let navlinks = document.querySelector("nav .navlinks");
let closemenu = document.querySelector(".closemenu");
quantity.innerHTML = 0;
document.querySelector(`.mask-1`).classList.add("mask");

menuburger.addEventListener("click", () => (navlinks.style.display = "block"));
closemenu.addEventListener("click", () => (navlinks.style.display = "none"));
cartbtn.addEventListener("click", () => {
	cart.style.display = cart.style.display == "block" ? "none" : "block";
});

imgs.forEach((img) => {
	img.addEventListener("click", (e) => {
		let imgnum = e.target.src.split("images/")[1].split("-")[2];
		// console.log(e.target.x);
		toggleSelect(imgnum);
		mainimg.src = `./images/image-product-${imgnum}.jpg`;
	});
});

const toggleSelect = (num) => {
	let selected = document.querySelector(".mask");
	selected.classList.remove("mask");
	document.querySelector(`.mask-${num}`).classList.add("mask");
};

plus.addEventListener(
	"click",
	(e) => (quantity.innerHTML = Number(quantity.innerHTML) + 1)
);

minus.addEventListener("click", (e) => {
	Number(quantity.innerHTML) > 0 &&
		(quantity.innerHTML = Number(quantity.innerHTML) - 1);
});

const removeCartItem = () => {
	cartcontent.innerHTML = "";
	let emptymsg = document.createElement("p");
	emptymsg.innerHTML = "Your cart is empty.";
	emptymsg.className = "emptycart";
	cartcontent.appendChild(emptymsg);
	cartquantity.innerHTML = "";
	// <p class="emptycart">Your cart is empty.</p>;
};

const createCartItem = () => {
	if (Number(quantity.innerHTML) < 1) {
		removeCartItem();
		return;
	}
	let details = document.createElement("div");
	let img = document.createElement("img");
	img.src = "./images/image-product-1-thumbnail.jpg";
	img.alt = "item";
	details.appendChild(img);
	let nameandprice = document.createElement("div");
	let name = document.createElement("p");
	name.innerHTML = "Fall Limited Edition Sneakers";
	nameandprice.appendChild(name);
	let price = document.createElement("p");
	price.innerHTML = `$125.00 x ${Number(quantity.innerHTML)}  <b>$ ${
		125 * Number(quantity.innerHTML)
	}</b>`;
	nameandprice.appendChild(price);
	details.appendChild(nameandprice);
	let deleteicon = document.createElement("img");
	deleteicon.className = "delete-icon";
	deleteicon.addEventListener("click", removeCartItem);
	deleteicon.src = "./images/icon-delete.svg";
	details.appendChild(deleteicon);
	let checkoutbtn = document.createElement("button");
	checkoutbtn.innerHTML = "Checkout";
	checkoutbtn.className = "addtocart";
	cartcontent.innerHTML = "";
	cartcontent.appendChild(details);
	cartcontent.appendChild(checkoutbtn);
	cartquantity.innerHTML = Number(quantity.innerHTML);
	// basket.appendChild;
};

addtocart.addEventListener("click", createCartItem);

{
	/* <div class="cartcontent">
	<div>
		<img src="./images/image-product-1-thumbnail.jpg" alt="item" />
		<div>
			<p>Fall Limited Edition Sneakers</p>
			<p class="price_quantity"></p>
		</div>
	</div>
	<button class="addtocart">Checkout</button>
</div>; */
}

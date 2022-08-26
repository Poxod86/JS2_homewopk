const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';	
	
class GoodsItem {
	constructor(product, img = 'https://imgholder.ru/250*250/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson') {
		this.title = product.product_name;
		this.price = product.price;
		this.img = img;
		this.id = product.id_product;
	}
	render() {
		return `<div class="goods-item"><img src="${this.img}" alt="${this.title}"><h3>${this.title}</h3><p>${this.price}</p><button class="cart-button_add" type="button">Добавить</button></div> `;
	}
};

class GoogsList {
	constructor() {
		this.goods = [];
		this.allProducts = [];
		this._getProducts()
			.then(data => {
				this.goods = [...data];
				this.render()
			});
	};

	_getProducts() {
		return fetch (`${API}/catalogData.json`)
			.then(result => result.json())
			.catch(error => {
				console.log(error);
		});
	};
	
	render() {
		let listHtml = '';
		this.goods.forEach (product => {
			const goodIthem = new GoodsItem(product);
			listHtml +=goodIthem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
			
	};

	calcSum() {
		const cardSumm = this.allProducts.reduce((accum, item) => accum += item.price, 0)
			return cardSumm
		};
};



class CardList {
	constructor () {
		this.goods = [];
		this._clickCard();
		this._getCardItem()
		.then(data => { //data - объект js
			this.goods = [...data.contents];
			this.render()
		});
	}

	_getCardItem() {
		return fetch(`${API}/getBasket.json`)
			.then(result => result.json())
			.catch(error => {
				console.log(error);
			});
		};

	_clickCard() {
		document.querySelector(".cart-button").addEventListener('click', () => {
			document.querySelector(".cart-block").classList.toggle('invisible');
		});
	};

	render() {
		const block = document.querySelector(".cart-block");
		for (let product of this.goods) {
			const productObj = new CardIthem();		
			block.insertAdjacentHTML('beforeend', productObj.render(product));
		}
	};
};
	
class CardIthem {
	render(product, img = 'https://imgholder.ru/50*50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson') {
		return `<div class="cart-item" data-id="${product.id_product}">
							<div class="product-bio">
							<img src="${img}" alt="Some image">
							<div class="product-desc">
							<p class="product-title">${product.product_name}</p>
							<p class="product-quantity">Quantity: ${product.quantity}</p>
					<p class="product-single-price">$${product.price} each</p>
					</div>
					</div>
					<div class="right-block">
							<p class="product-price">$${product.quantity * product.price}</p>
							<button class="del-btn" data-id="${product.id_product}">&times;</button>
					</div>
					</div>`
		}
};
const list = new GoogsList();
	list.render();
	list.calcSum();
	
const bask = new CardList();
	bask.render();
	class GoodsItem {
		constructor(title, price, img, id) {
		this.title = title;
		this.price = price;
		this.img =  img;
		this.id = id;
		}
		render() {
		return `<div class="goods-item"><img src="img/${this.img}" alt="${this.title}"><h3>${this.title}</h3><p>${this.price}</p><button class="cart-button_add" type="button">Добавить</button></div> `;
		}
	}

	class GoogsList {
		constructor() {
			this.goods = [];
			this.allProducts = [];
			this._fetchGoods();
		}
		_fetchGoods() {
			this.goods = [
			{id:1, title: 'Shirt', price: 150, img:'shirt.jpg' },
    	{id:2, title: 'Socks', price: 50, img:'socks.jpg' },
    	{id:3, title: 'Jacket', price: 350, img:'jacket.jpg' },
    	{id:4, title: 'Shoes', price: 250, img:'shoes.jpg' },
			];
		}
		render() {
			
			let listHtml = '';
			this.goods.forEach (good => {
				const goodIthem = new GoodsItem(good.title, good.price, good.img);
				listHtml +=goodIthem.render();
			});
			document.querySelector('.goods-list').innerHTML = listHtml;
			
		}
		basketAmount() {
			let cardSumm = 0;
			this.goods.forEach(ithem =>{
				cardSumm += ithem.price;
			});
			alert (cardSumm);
		}
	}

	const list = new GoogsList();
	list._fetchGoods();
	list.render();
	list.basketAmount();

	class CardList {
		constructor () {
			this.title = title;
			this.quantity = quantity;
			this.price = price;
			this.GoogsList
		}
		addGood(){}
		removeGood(){}
		render(){}

	}
	
	class CardIthem {
		constructor() {
			this.price = price;
		}
		render(){}
	}
	

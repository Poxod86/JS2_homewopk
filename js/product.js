

  const goods = [
    { title: 'Shirt', price: 150, img:'shirt.jpg' },
    { title: 'Socks', price: 50, img:'socks.jpg' },
    { title: 'Jacket', price: 350, img:'jacket.jpg' },
    { title: 'Shoes', price: 250, img:'shoes.jpg' },
  ];
  const renderGoodsItem = (title, price, img) => {
   return `<div class="goods-item"><img src="img/${img}" alt="${title}"><h3>${title}</h3><p>${price}</p><button class="cart-button_add" type="button">Добавить</button></div> `;
  };
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  renderGoodsList(goods);
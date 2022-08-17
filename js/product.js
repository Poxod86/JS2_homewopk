

  const goods = [
    { title: 'Shirt', price: 150, img:'shirt.jpg' },
    { title: 'Socks', price: 50, img:'socks.jpg' },
    { title: 'Jacket', price: 350, img:'jacket.jpg' },
    { title: 'Shoes', price: 250, img:'shoes.jpg' },
  ];
  const renderGoodsItem = (product) => {
   return `<div class="goods-item"><img src="img/${product.img}" alt="${product.title}"><h3>${product.title}</h3><p>${product.price}</p><button class="cart-button_add" type="button">Добавить</button></div> `;
  };
  const renderGoodsList = (list) => {
    document.querySelector('.goods-list').innerHTML = (list.map(product => renderGoodsItem(product))).join('');
  }
  renderGoodsList(goods);
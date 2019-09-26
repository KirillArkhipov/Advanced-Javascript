const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { titl: 'Shoes', pric: 250 },//для проверки работы значений по умолчанию
];

const renderGoodsItem = (title = 'Товара нет в наличии', price = 'цена отсутствует') => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><a href="#" class="add-button">Добавить</a></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);
//Запятая ставилась, т.к. при выводе массива по умолчанию значения разделяются запятой. Разделяющий символ можно поменять
//с помощью метода .join
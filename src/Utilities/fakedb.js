// use local storage to manage cart data
const addToDb = id => {

    // let shoppinCart = {};
    let shoppingCart;
    // localStorage.setItem('Shoping-cart', JSON.stringify(shoppinCart))

    //get the shopping cart
    const storedCart = localStorage.getItem('Shoping-cart');
    if (storedCart) {
        // console.log(typeof storedCart);
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // const quantity = localStorage.getItem(id);

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log("alrady axist");

        // const newQuantity = parseInt(quantity) + 1;
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        // console.log('new item added');
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Shoping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = id => {
    console.log('inside fake db', id);
    const storedCart = localStorage.getItem('Shoping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            // console.log('exist in the cart');
            delete shoppingCart[id];
            localStorage.setItem('Shoping-cart', JSON.stringify(shoppingCart));
        }
    }
}


const deleteShopingCart = () => {
    localStorage.removeItem('Shoping-cart');
}

// const numbers = [23, 234, 53, 523, 643];
// let sum = 0;
// const sumReducer = (previus, current) => previus + current;
// const total = numbers.reduce(sumReducer, 0);

// const items = [
//     { id: 1, name: 'alta', price: 100 },
//     { id: 2, name: 'alta', price: 100 },
//     { id: 3, name: 'alta', price: 100 },
//     { id: 4, name: 'alta', price: 100 },
//     { id: 5, name: 'alta', price: 100 },
//     { id: 6, name: 'alta', price: 100 }
// ]
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);


const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    addToDb,
    removeFromDb,
    deleteShopingCart,
    getTotalPrice as totalPrice
};

let item1 = {
    id: 101,
    img: "../../../Images/mobile.jpeg",
    product: 'Iphone 13 pro',
    price: 90000,
    qty: 1
};
let item2 = {
    id: 102,
    img: "../../../Images/laptop.jpeg",
    product: 'laptop',
    price: 70000,
    qty: 1
};

let item3 = {
    id: 103,
    img: "../../../Images/toys.jpeg",
    product: 'Toys',
    price: 2000,
    qty: 1
};

let item4 = {
    id: 104,
    img: "../../../Images/bike.jpeg",
    product: 'Bike',
    price: 285000,
    qty: 1
};

let products = [item1, item2, item3, item4];

function displayitem(items) {
    const display = document.getElementById("products-section");
    display.innerHTML = ""; // clear old list

    if (items.length === 0) {
        display.innerHTML = "";
        return;
    }

    for (let item of items) {
        display.innerHTML += `
<div class="products-container">
            <img src="${item.img}" alt="Image not found">
            <div class="product-content">
            <div id="product-name">${item.product}</div>
            <div id="product-price">${item.price}</div>
            <button class="icon" onclick="decQty(${item.id})">➖</button>
            <span id="qty-ele">${item.qty}</span>
            <button class="icon" onclick="incQty(${item.id})">➕</button>
            <h5>Grand-Total: <span id="grand-total">${item.price * item.qty}</span></h5>
        </div>
        </div>
        `;
    }
};
displayitem(products);

let copyProd = [...products];
function incQty(id){
    let incArr=[];
    for(let item of copyProd){
        if(item.id==id){
            let obj = {...item,qty:++item.qty};
            incArr.push(obj);
        }else{
            incArr.push(item);
        }
    }
    displayitem(incArr);
}

console.log(products);
console.log(copyProd);

function decQty(id){
    let decArr = copyProd.map((item)=>{
        if(item.id==id)
            return {...item,qty:(item.qty>1)?--item.qty:1};
        else    return item;
    });
    
    displayitem(decArr);
}

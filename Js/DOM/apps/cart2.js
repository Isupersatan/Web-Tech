//make it dynamic
let item = {
    id: 101,
    img: "../../../Images/mobile.jpeg",
    product: 'Iphone 13 pro',
    price:  90000,
    qty: 1
};

let htmlSnippet =  `
<div class="products-container">
            <img src="${item.img}" alt="Image not found">
        </div>
        <div class="product-content">
            <div id="product-name">${item.product}</div>
            <div id="product-price">${item.price}</div>
            <button class="icon" onclick="decQty()">➖</button>
            <span id="qty-ele">${item.qty}</span>
            <button class="icon" onclick="incQty()">➕</button>
        </div>
        <h5>Grand-Total: <span id="grand-total">${item.price*item.qty}</span></h5>
        `;

        let sectionPoduct = document.getElementById("products-section");
        sectionPoduct.innerHTML = htmlSnippet;

        let qtyEle = document.getElementById("qty-ele");
        let totalEle = document.getElementById("grand-total");
        let poductName = document.getElementById("product-name");
        let poductPrice = document.getElementById("product-price");   
        
        function incQty(){
            item.qty++;
            qtyEle.textContent = item.qty;
            total();
        }

        function decQty(){
            if(item.qty>1){
                item.qty--;
                qtyEle.textContent = item.qty;
                total();
            }
        }

        function total(){
            totalEle.textContent=item.price*item.qty;
        }
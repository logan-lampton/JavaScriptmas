import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

const body = document.querySelector("body");

function getSaleItems(data){
    //only sweets
    let shoppingCart = data.filter(({item, price, type}) => {
        return type === "sweet";
    }).map(({item, price, type}) => {
        return {item, price};
    })
    //render to DOM
    shoppingCart.forEach(({item, price}) => {
        body.innerHTML +=
            `
            <div class="candy">
                <p>${item}</p>
                <p>$${price}</p>
            </div>
            `
    })
};

getSaleItems(products);

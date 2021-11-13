let cart =[
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:30, unitPrice:40},
    {id:3, productName:"Tabak", quantity:50, unitPrice:10},
    {id:4, productName:"Tencere", quantity:5, unitPrice:200},
    {id:5, productName:"Kitap", quantity:10, unitPrice:26},
]

console.log("<ul>")
cart.map(product =>  {

    console.log("<li>"+product.productName +"</li>")

})
console.log("</ul>")

let quantityOver2 = cart.filter(product => product.quantity > 2)

console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:6, productName:"Defter", quantity:100, unitPrice:10})
}


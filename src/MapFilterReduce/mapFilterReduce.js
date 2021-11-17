let cart=[
    {id:1,productName:"Laptop",quantity:1,unitPrice:10500},
    {id:3,productName:"Telefon",quantity:5,unitPrice:5500},
    {id:4,productName:"Saat",quantity:4,unitPrice:650},
    {id:5,productName:"Mouse",quantity:8,unitPrice:140}
]

function  addToCart(sepet) {
    sepet.push({id:3,productName:"Kulaklık",quantity:3,unitPrice:350})
}
addToCart(cart)
console.log(cart)

//map() etiketinin kullanımı liste üstünde tek tek gezme ve istenen şartı getir
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+" : "
    + product.quantity*product.unitPrice+"</li>")
})
console.log("</ul>") 

//Şimdi de 'filter' etiketi ile koşula göre ürünleri getir


let quantityOver=cart.filter(product=>product.quantity >3)//3 ten büyük quantity dön
console.log("Filter ile gelen ürünler")
console.log(quantityOver)

//reduce komutunu kullanma
console.log("Reduce ile ürün fiyatların toplamı")
let total=cart.reduce((acc,product)=>acc + product.unitPrice,0)
console.log("Toplam Fiyat   : "+total+" ₺")







//Şimdi değer tipli bir örnek yapalım

let sayi=10

function sayiArttır(number) {
    number=number+1;
}
sayiArttır(sayi)
console.log("Sayınız    :",sayi)//Çıktı    Sayınız  :10 döner çünkü değer type değerini atar geçer






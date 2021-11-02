

function addToCart(productName) {
    console.log("Ürün sepete eklendi: ",productName)
}
addToCart("Monster Notebook");


function Topla(p1,p2) {
    return p1+p2;
}
console.log("Sayıların Toplamı: ",Topla(12,45))


//Fonksiyonu değişken gibi tanımlama 

let Carpım=(p1,p2)=>{
    return p1*p2;
}
console.log("Sayıların çarpım sonucu: ",Carpım(20,10))


//Product adına bir ürün sınıfı(class'ı)

let product1={productName:"Monster",ekranKartı:"4GB",memory:"8GB"};

function Product(product) {
    console.log("\n","Ürün:",product1.productName,"\n",
    "Ekran Kartı:",product1.ekranKartı,"\n","Ürün Hafızası:",
    product1.memory,product1)
}
Product(product1)


let customer1={
    firstName:"Furkan",
    lastName:"Kavak",
    age:21,
    customerId:16598665231
}

function Customer(customer) {
    console.log("\n","Müşteri adı:",customer1.firstName,
        "\n","Müşteri soyadı:",customer1.lastName,
        "\n","Müşteri yaşı:",customer1.age,
        "\n","Müşteri kimlik numarası:",customer1.customerId
    )
}
Customer(customer1);
 

//Birden fazla ürün göndermeyi düşünelim


function addToCart2(a) {
    console.log(products);
}

//Array içinde obje tutma
let products=[
    {productName:"Redmi Note9 Pro",unitPrice:25000,quantity:1},
    {productName:"Iphone 13 Pro Max ",unitPrice:36000,quantity:4},
    {productName:"Galaxy S30",unitPrice:12000,quantity:10},
    {productName:"LG X Screen",unitPrice:5500,quantity:12}
]

addToCart2(products)

//Kötü kod ile sayılar toplama
function add(ap1,app2) {
    //console.log(ap1*app2);
    return ap1*app2;
}
//add(45,3); yorum satırına aldıpım statmente göre çalışır.
console.log(add(45,3));

function add2(number1,number2,number3) {
    return number1+number2+number3;
}
console.log(add2(10,15,20))


function add3(number1,number2,number3,number4) {
    return number1+number2+number3+number4;
}
console.log(add3(25,30,35,40))

//şimdi bu kötü kodu kullanışlı hale getirelim

function addJs(...numbers) {//rest operasyonu
    let total=0,i;
    for(i=0;i<numbers.length;i++){
        //total=total+numbers[i]//altta kısa kullanımı
        total+=numbers[i]
    }
    console.log(total)
}
    
    addJs(5,45,63,47)//çıktı:  160      // az kod ile çok iş yaptık




    //spread   ayırma işlemi

    let numbers=[10,25,450,4125,1,-85,42];

    console.log(...numbers)//çıktı dizi kapsülü dışında ayırır hepsini  10 25 450 4125 -85 42 diye
    //ama
    console.log(numbers)//dersek dizi kapsülünde döner  [10,25,450,4125,-85,42] şeklinde
    console.log(Math.max(...numbers))//çıktı 4125
    console.log(Math.max(numbers))//çıktı NaN nedeni bende anlamadım




    let [
        merkur,
        venus,
        dunya,
        mars,
        jupiter,
        saturn,
        uranus,
        neptun
]   = [
    {name:"Merkür",distance:"58 Milyon Kilometre"},
    {name:"Venüs",distance:"108 Milyon Kilometre"},
    {name:"Dünya",distance:"150 Milyon Kilometre"},
    {name:"Mars",distance:"227 Milyone Kilometre"},
    {name:"Jupiter",distance:"778 Milyon Kilometre"},
    {name:"Satürn",distance:"1.4349 Milyon Kilometre"},
    {name:"Uranüs",distance:"2.871E9 Milyon Kilometre"},
    {name:"Neptün",distance:"4.495E9 Milyon Kilometre"}
]
console.log("Merkür:    ",merkur)
console.log("Venüs:",venus)
console.log("Dünya:",dunya)
console.log("Mars:",mars)
console.log("Jupiter:",jupiter)
console.log("Satürn:",saturn)
console.log("Uranüs:",uranus)
console.log("Neptün:",neptun)


console.log("--------------Array Destcruting--------------------")
let [icAnadolu,karadeniz,marmara,[icAnadoluSehirleri,karadenizSehirleri,marmaraSehirleri]]=[
    {name:"İç Anadolu",populations:"20 Milyon"},
    {name:"Karadeniz",populations:"10 Miyon"},
    {name:"Marmara",populations:"30 Milyon"},
    [
        ["Anakra","Konya"],//İç Anadolu şehirleri
        ["Sinop","Trabzon"],
        ["İstanbul","Bursa"]
    ]

]
console.log("İç Anadolu Bölgesi Şehirleri:  "+icAnadoluSehirleri)
console.log("Karadeniz Bölgesi Şehirleri:   "+karadenizSehirleri)
console.log("Marmara Bölgesi Şehirleri: "+marmaraSehirleri)
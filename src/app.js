console.log("Merhaba Kodlama.io")

let dolarDun=9.20,dolarBugun=9.14;
if(dolarDun<dolarBugun){
    console.log("Dolar Yükseldi.",dolarDun );
}
else{
    console.log("Dolar düştü.",dolarBugun);
} 




const euroDun=10.40
//euroDun=11// not: const ile tanımlanan değişkenin değeri değiştirilemez
console.log(euroDun)


//Array(Diziler) Ornekleri

let konutKredileri=["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi",25,85,7458,"Özel Sektör Kredisi","Öğrenci Kredisi",""];
for(let i=0;i<konutKredileri.length;i++){
    console.log(konutKredileri[i]);
}


var ap="Hello js"

function greet(){
    console.log(ap)
}
greet();//çıktısı: Hello js

let ap2="Hello Js"
// let te aynı çıktı döndü 
function greet2(){
    console.log(ap2)
}
greet2()//çıktısı Hello Js

var album;
console.log(album)//çıktısı undefined

console.log("---------------")

var album;
album="Furkan Kavak Js kampında eğitim almakta"
console.log(album)


//Function Scope

function getAlbumDate(){
    var albumDate=new Date();
    return albumDate;

}
getAlbumDate();
//console.log(albumDate);// hata döner sadece fonksiyonun içinde çağırabiliriz


console.log("---------------------")

function getAlbumDate(){
    var albumDate=new Date();

    function showAlbumDate(){
        return albumDate.toDateString();
    }
    return showAlbumDate();
}
getAlbumDate();
//console.log(albumDate)// ReferanceError: albumDate is not difined(tanımlı değil hatası döner)

console.log("-------Yemek Fiyatları Artan bir Liste--------")


function foodPrice(prices,addValue){
    var newPriceList=[];

    for(var i=0;i<prices.length;i++){
        var finalPrice=prices[i]+addValue;
        newPriceList.push(finalPrice);
    }
    return newPriceList;
}
const result=foodPrice([22,35,36],10.45);
console.log("Zamlı yemek fiyat listesi: "+result)

console.log("------------------------------")


let sayi;
let student={id:1,last:"Kavak",name:"Furkan"};
console.log(student);


//var keywordlü değişkenler function scope özelliklidir.
function LessonList(ogrenci="Furkan",Point=95){
    console.log("İsim:"+ogrenci,"\n","Puanı: ",Point);
}
LessonList();


function save(point=10,student="Furkan"){
    console.log(student.name+":"+point)
}
save(undefined,student);


//Array
let suits=["Galatasaray","Beşiktaş","Trabzonspor","Fenerbahçe","Bursaspor"];
console.log(suits);


let students=[student,{id:10,name:"Furkan"},{addres:"Şehit Albay",apt:"Kyk Yurdu"}];
console.log(students);

//rest:geriye kalanlar

let showProducts=function (id,...products){
    console.log(id)
    console.log(products)
}
showProducts (204,["Elma","Karpuz","Şeftali","Muz","Kiraz"])//çıktı : function

let numbers1

console.log(Math.max([102,25]));//NaN döner çünkü bir dizi dönmesini istiyorsun
//spread
//spread: elinizde array değerlerli var ve siz bunları diğer değerler gibi dağıtmak isteyebilirsiniz
console.log("Değerleri ayrıştır:",..."ABC","D",..."EFGH");

let numbers=[41,45625,7415,5692,132674];
console.log(...numbers);
console.log(Math.max(...numbers))//çıktı 132674 döner buna spread denir 

//Destructuring:Elinizdeki array değerlerini değişkenlere atama yapması demektir

//10000'i bir değişkene 20000'i başka bir değikene 30000'i de başka bir değişkene atayacaz
let populations=[10000,20000,30000];
let [small,medium,high]=populations
console.log("Small değeri:",small,"\n"+"Medium değeri:",medium,"\n","High Değeri:",high)//ilk değişkenim small ve değeri 10000 döndü


//Destructuring içinde Destructuring yapma

let computers=["Mackbook Pro","Monster","Asus",["Lenovo","Acer"]]
let[marka1,marka2,marka3,[marka4,marka5]]=computers
console.log("Marka1 :   "+marka1)
console.log("Marka2 :   "+marka2)
console.log("Marka3 :   "+marka3)
console.log("Marka4 :   "+marka4)
console.log("Marka5 :   "+marka5)


//Bir örnek daha nesne üzerinden 

let category={id:1,name:"Coca Cola"}


let {id,name}=category
console.log("İçecek Numarası:   "+id)
console.log("İçecek Adı:    "+name)
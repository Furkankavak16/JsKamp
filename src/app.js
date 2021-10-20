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


// var keywordu global özelliği var fonksiyonun içinde de erişilebilir
var ap="Hello js"

function greet(){
    console.log(ap)
}
greet();

let ap2="Hello Js"

function greet2(){
    console.log(ap2)
}
greet2()
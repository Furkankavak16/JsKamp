 class Customer{
    constructor(id,cusotmerName,colorEye,customerNumber){
        this.id=id;
        this.customerNumber=customerNumber
        this.cusotmerName=cusotmerName;
        this.colorEye=colorEye;

    }
}

let customer=new Customer(10,"Furkan","Ela");
  
console.log("Müşteri Numarası:"+customer.id+"\n"
+"Müşteri Adı:"+customer.cusotmerName+"\n"
+"Müşteri Gözrengi:"+customer.colorEye)


//console.log(customer)//çıktı        :   Customer{}

customer.name="Furkan Kavak"
console.log(customer.name)//çıktı       : Furkan Kavak
console.log(customer.cusotmerName)// çıktı      : undefined 

console.log("------------------------------------------------")

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)//super demek Customer'e bu değerleri gönder
        this.firstName=firstName;//ekstradan firstnami var bu adamın
    }
}

let individual=new IndividualCustomer("Ali",2,20471042)
console.log("Bireysel Müşteri Adı:  "+individual.firstName+"\n"+
"Biresyel Müşteri İd'si:    "+individual.id+"\n"+
"Bireysel Müşteri Numarası:     "+individual.customerNumber)

class CorporateCustomer extends Customer{
    constructor(campanyName,id,customerNumber){
        super(id,customerNumber)//super ile Customere bu  prototipleri gönder
        this.campanyName=campanyName;//ekstradan bu classın campanyName'i var
    }
}
console.log("------------------------------------------------")

let corporate=new CorporateCustomer("Ramazan Kampanyası",3,20502)
console.log("Kurumsal Müşteri Kampanyası:   "+corporate.campanyName+"\n"+
"Kurumsal Müşteri İd'si:    "+corporate.id+"\n"+
"Kurumsal Müşteri Numarası:     "+corporate.customerNumber)
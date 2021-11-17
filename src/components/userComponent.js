import { baseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/loger.js";
import User from "../Models/user.js";
import UserService from "../Services/userService.js"

console.log("User component yüklendi")

//yaptığımız class'ı burada new leyerek kullanırız
let logger1=new MongoLogger()
let userSercice = new UserService(logger1)

let user1= new User(1,"Furkan","Kavak",21,"Batman")
let user2=new User(2,"Osman","Kavak",24,"Manisa")


userSercice.add(user1);
userSercice.add(user2);

console.log(userSercice.list(user1))
console.log("\n")
console.log("İd si iki olan adamı getir")
console.log(userSercice.getById(2))


userSercice.list();
userSercice.getById();


let customer={id:1,firstName:"Furkan",age:21}

customer.lastName="Kavak";

//prototyping  : Yani js te sonradan bir nesneye bir özellik ekleyebiliyoruz.

console.log(customer.lastName)

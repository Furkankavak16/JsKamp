export default class UserService{
    //özelleştirelim biraz
    constructor(loggerService){

        this.users=[]
        this.loggerService=loggerService

    }
    add(user){

        this.users.push(user)
        this.loggerService.log(user)

        // console.log(user + " Kullanıcısı eklendi!");
    }

    list(){

        return this.users

        // console.log("Kullanıcı listelendi!");
    }

    getById(id){

        return this.users.find( u => u.id === id)

        // console.log('Girilen Id numarasına göre getirildi');
    }
}
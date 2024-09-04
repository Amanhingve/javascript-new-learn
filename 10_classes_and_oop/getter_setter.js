class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}aman`
    }

    set password(value){
        this._password = value
    }
}

const aman = new User("a@aman.ai", "abc")
console.log(aman.email);

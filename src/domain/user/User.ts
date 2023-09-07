


export default class User {
    static id: Number;
    name: String;
    email: String;
    password: String;
    urlPhoto: String;

    constructor(name: String, email: String, password: String) {
            this.name = name;
            this.email= email;
            this.password= password;
    }
}
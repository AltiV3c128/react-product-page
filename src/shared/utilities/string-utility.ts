export class Validation {

    static checkEmail (email : string): boolean {
        let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) && email.length > 8; 
    }

}
import GeneralError from "../GeneralError.js";

class RegisterUserError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The User register wasn't succesful"
    }    
}

export default RegisterUserError
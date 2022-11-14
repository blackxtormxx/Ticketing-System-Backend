import GeneralError from "../GeneralError.js";

class RegisterUserError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The Register function didn't execute Because password incorrect"
    }    
}

export default RegisterUserError
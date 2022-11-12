import GeneralError from "../GeneralError.js";

class RegisterError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The Register function didn't execute successfully"
    }    
}

export default RegisterError


import GeneralError from "../GeneralError.js";

class AddingBusTypeError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The Bus Type creation wasn't succesful"
    }    
}

export default AddingBusTypeError
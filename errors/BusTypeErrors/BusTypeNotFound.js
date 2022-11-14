import GeneralError from "../GeneralError.js";

class BusTypeNotFound extends GeneralError{
    constructor(params) {
        super()
        this.message = "The given bus type couldn't be found"
    }    
}

export default BusTypeNotFound
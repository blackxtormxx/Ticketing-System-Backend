import GeneralError from "../GeneralError.js"

class BusTypeError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The Bus Type function didn't execute successfully"
    }    
}

export default BusTypeError


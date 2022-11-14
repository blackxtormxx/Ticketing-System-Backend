import GeneralError from "../GeneralError.js"

class AddPaymentError extends GeneralError{
    constructor(params) {
        super()
        this.message = "Payment adding failed!"
    }    
}

export default AddPaymentError
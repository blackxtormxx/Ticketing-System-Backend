import GeneralError from "../GeneralError.js";

class BusTypeDeletionError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The bus type deletion failed"
    }    
}

export default BusTypeDeletionError
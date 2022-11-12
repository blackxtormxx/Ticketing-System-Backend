import GeneralError from "./GeneralError.js";

class RouteDeletionError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The bus route deletion failed"
    }    
}

export default RouteDeletionError
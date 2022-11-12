import GeneralError from "./GeneralError.js";

class AddingRouteError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The Bus Route creation wasn't succesful"
    }    
}

export default AddingRouteError
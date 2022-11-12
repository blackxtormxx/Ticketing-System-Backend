import GeneralError from "../GeneralError.js";

class BusRouteError extends GeneralError{
    constructor(params) {
        super()
        this.message = "The Bus Route function didn't execute successfully"
    }    
}

export default BusRouteError


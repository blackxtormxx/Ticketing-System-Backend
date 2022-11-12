import GeneralError from "./GeneralError.js";

class RouteNotFound extends GeneralError{
    constructor(params) {
        super()
        this.message = "The given bus route couldn't be found"
    }    
}

export default RouteNotFound
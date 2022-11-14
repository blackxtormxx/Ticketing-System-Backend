import GeneralError from "../GeneralError.js";

class Usealreadyexist extends GeneralError{

    constructor(params) {
        super()
        this.message = "User with given username address already exist!!"
    }    
}

export default Usealreadyexist


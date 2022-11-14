import RegisterError from "./RegisterError.js"
import RegisterUserError from "./RegisterUserError.js"
import Usealreadyexist from "./Useralreadyexist.js"


class RegisterErrorFactory {

    createError(data) {
    //  if(data.type == 'delete') return new RouteDeletionError(data)
     if(data.type == 'create') return new RegisterError(data)
    //  if(data.type == 'get') return new RouteNotFound(data)
     if(data.type == 'general') return new RegisterUserError(data)

     if(data.type == 'secondary') return new Usealreadyexist(data)

    }
}

export default RegisterErrorFactory
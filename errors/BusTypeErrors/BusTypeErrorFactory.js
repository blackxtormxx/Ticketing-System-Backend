import AddingBusTypeError from "./AddingBusTypeError.js"
import BusTypeError from "./BusTypeError.js"
import BusTypeDeletionError from "./BusTypeDeletionError.js"
import BusTypeNotFound from "./BusTypeNotFound.js"

class BusTypeErrorFactory {

    createError(data) {
     if(data.type == 'delete') return new BusTypeDeletionError(data)
     if(data.type == 'create') return new AddingBusTypeError(data)
     if(data.type == 'get') return new BusTypeNotFound(data)
     if(data.type == 'general') return new BusTypeError(data)
    }
}

export default BusTypeErrorFactory
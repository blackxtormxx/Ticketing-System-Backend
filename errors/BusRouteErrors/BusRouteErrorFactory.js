import AddingRouteError from "./AddingRouteError.js"
import BusRouteError from "./BusRouteError.js"
import RouteDeletionError from "./RouteDeletionError.js"
import RouteNotFound from "./RouteNotFound.js"

class BusRouteErrorFactory {

    createError(data) {
     if(data.type == 'delete') return new RouteDeletionError(data)
     if(data.type == 'create') return new AddingRouteError(data)
     if(data.type == 'get') return new RouteNotFound(data)
     if(data.type == 'general') return new BusRouteError(data)
    }
}

export default BusRouteErrorFactory
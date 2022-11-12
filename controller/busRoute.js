import BusRouteErrorFactory from "../errors/BusRouteErrors/BusRouteErrorFactory.js";
import busRoute from "../model/busRoute.js";

let factory = new BusRouteErrorFactory();

/** This method returns all the bus routes */
export const getAllBusRoutes = async (req, res) => {
    try {
        const newBusRoute = await busRoute.find();
        res.status(200).json(newBusRoute);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'get'})});
    }
}

/** This method returns a specific bus routes */
export const getBusRoute = async (req, res) => {
    try {
        const {id} = req.params; 
        const newBusRoute = await busRoute.findById(id);
        res.status(200).json(newBusRoute);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'get'})});
    }
}

/** This method adds a bus routes */
export const addBusRoute = async (req, res) => {
    try {
        const {name, stopList, ticketPrice} = req.body;
        const request = new busRoute({name, stopList, ticketPrice});
        const busRouteSaved = await request.save();
        res.status(201).json(busRouteSaved);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'create'})});
    }
}

/** This method delete a select bus routes */
export const deleteBusRoute = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBusRoute = await busRoute.findByIdAndDelete(id);
        res.status(200).json(deletedBusRoute);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'delete'})});
    }
}

/** This method returns all the bus routes */
export const adddBusRoute = (req, res) => {
    const route = req.body;
    const {id} = req.params;
    const request = new busRoute({route});
    if (route) {
      res.sendStatus(201)
      res.send({})
      return
    }
    res.send({});
}
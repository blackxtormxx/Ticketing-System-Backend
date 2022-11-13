import BusTypeErrorFactory from "../errors/BusTypeErrors/BusTypeErrorFactory.js"
import busType from "../model/busType.js";

let factory = new BusTypeErrorFactory();

/** This method returns all the bus types */

export const getAllBusTypes = async (req, res) => {
    try {
        const newBusType = await busType.find();
        res.status(200).json(newBusType);
    } catch (error) { 
        res.status(404).json({message: factory.createError({type: 'get'})});
    }
}

/** This method returns a bus types */

export const getBusType = async (req, res) => {
    try {
        const newBusType = await busType.find();
        res.status(200).json(newBusType);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'get'})});
    }
}

/** This method adds a bus types */

export const addBusType = async (req, res) => {
    try {
        const routeObj = JSON.parse(req.body.route)
        const {name, capacity, numberPlate, day} = req.body;
        const request = new busType({name, capacity, numberPlate, day, route:routeObj.route, routeName: routeObj.name });
        const busTypeSaved = await request.save();
        res.status(201).json(busTypeSaved);
        console.log(request);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'create'})});
    }
}

/** This method deletes a bus types */

export const deleteBusType = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBusType = await busType.findByIdAndDelete(id);
        res.status(200).json(deletedBusType);
    } catch (error) {
        res.status(404).json({message: factory.createError({type: 'delete'})});
    }
}

/** This method returns all the bus types */

export const adddBusType = (req, res) => {
    const route = req.body;
    const {id} = req.params;
    const request = new busType({route});
    if (!route) {
      res.sendStatus(201)
      res.send({})
      return
    }
    res.send({});
}
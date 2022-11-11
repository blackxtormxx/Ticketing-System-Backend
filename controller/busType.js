import busType from "../model/busType.js";


export const getAllBusTypes = async (req, res) => {
    try {
        const newBusType = await busType.find();
        res.status(200).json(newBusType);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getBusType = async (req, res) => {
    try {
        const newBusType = await busType.find();
        res.status(200).json(newBusType);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addBusType = async (req, res) => {
    try {
        const routeObj = JSON.parse(req.body.route)
        const {name, capacity, numberPlate, day} = req.body;
        const request = new busType({name, capacity, numberPlate, day, route:routeObj.route, routeName: routeObj.name });
        const busTypeSaved = await request.save();
        res.status(201).json(busTypeSaved);
        console.log(request);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteBusType = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBusType = await busType.findByIdAndDelete(id);
        res.status(200).json(deletedBusType);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
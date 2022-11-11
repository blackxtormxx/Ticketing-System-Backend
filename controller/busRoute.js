import busRoute from "../model/busRoute.js";


export const getAllBusRoutes = async (req, res) => {
    try {
        const newBusRoute = await busRoute.find();
        res.status(200).json(newBusRoute);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getBusRoute = async (req, res) => {
    try {
        const {id} = req.params; 
        const newBusRoute = await busRoute.findById(id);
        res.status(200).json(newBusRoute);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addBusRoute = async (req, res) => {
    try {
        const {name, stopList, ticketPrice} = req.body;
        const request = new busRoute({name, stopList, ticketPrice});
        const busRouteSaved = await request.save();
        res.status(201).json(busRouteSaved);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteBusRoute = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBusRoute = await busRoute.findByIdAndDelete(id);
        res.status(200).json(deletedBusRoute);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
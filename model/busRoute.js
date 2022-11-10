import mongoose from "mongoose";

const busRouteSchema = mongoose.Schema({
    name: String,
    stopList: [String],
    ticketPrice: String
});

const busRoute = mongoose.model('busRoute', busRouteSchema);

export default busRoute;
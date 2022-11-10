import mongoose from "mongoose";

const busTypeSchema = mongoose.Schema({
    name: String,
    numberPlate: String,
    day: String,
    capacity: Number,
    route: String
});

const busType = mongoose.model('busRoute', busTypeSchema);

export default busType;


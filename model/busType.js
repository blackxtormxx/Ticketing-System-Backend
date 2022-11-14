import mongoose from "mongoose";

const busTypeSchema = mongoose.Schema({
    name: String,
    numberPlate: String,
    day: String,
    capacity: Number,
    route: String,
    routeName: String
});

const busType = mongoose.model('busType', busTypeSchema);

export default busType;


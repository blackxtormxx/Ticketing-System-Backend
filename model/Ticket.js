import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    userId: String,
    route: String,
    startStop: String,
    endStop: String,
    ticketPrice: Number,
    date: new Date()
});

const ticket = mongoose.model('ticket', ticketSchema);

export default ticket;
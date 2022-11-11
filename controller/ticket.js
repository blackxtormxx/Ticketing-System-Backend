import ticket1 from "../model/Ticket.js";
import User from "../model/User.js";

export const getAllTicket = async (req, res) => {
    try {
        const tickets = await ticket1.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getTicket = async (req, res) => {
    try {
        const {id} = req.params; 
        const newTicket = await ticket1.findById(id);
        res.status(200).json(newTicket);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addTicket = async (req, res) => {
    try {
        const {ticket, price, route, userId} = req.body;
        const request = new ticket1({userId, startStop: ticket.startStop, endStop: ticket.endStop, route: ticket.routeName, ticketPrice: price});
        // console.log(req.body);
        // console.log(request);
        const savedTicket = await request.save();
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const buyTicket = async (req, res) => {
    try {
        const {userId, startStop, endStop, route, ticketPrice} = req.body;
        const refUser = await User.findById(userId);
        if(!refUser || refUser.balance < ticketPrice) {
            res.status(500).json({message: "Insufficient balance in user's account"});
        }
        const amtRemaining = refUser.balance - ticketPrice;
        const request = new busRoute({userId, startStop, endStop, route, ticketPrice});
        const savedTicket = await request.save();
        const newUser = await User.findByIdAndUpdate(userId, {balance: amtRemaining});
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getUserTickets = async (req, res) => {
    try {
        const {id} = req.params; 
        const tickets = await busRoute.find({userId: id});
        res.status(200).json(tickets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

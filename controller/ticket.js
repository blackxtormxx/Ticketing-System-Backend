import ticket1 from "../model/Ticket.js";
import User from "../model/User.js";

/** This method returns all the bus tickets */

export const getAllTicket = async (req, res) => {
    try {
        const tickets = await ticket1.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


/** This method returns a specific ticket */

export const getTicket = async (req, res) => {
    try {
        const {id} = req.params; 
        const newTicket = await ticket1.findById(id);
        res.status(200).json(newTicket);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


/** This method add a ticket */

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

/** This method buys a  bus ticket */

export const buyTicket = async (req, res) => {
    try {
        const {userId, startStop, endStop, route, ticket, price} = req.body;
        const refUser = await User.findById(userId);
        if(!refUser || refUser.balance < price) {
            res.status(500).json({message: "Insufficient balance in user's account"});
        } else {
            const amtRemaining = refUser.balance - price;
            const request = new ticket1({userId, startStop: ticket.startStop, endStop: ticket.endStop, route: ticket.routeName, ticketPrice: price});
            const savedTicket = await request.save();
            const newUser = await User.findByIdAndUpdate(userId, {balance: amtRemaining});
            res.status(201).json(savedTicket);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

/** This method returns all the user's bus routes */

export const getUserTickets = async (req, res) => {
    try {
        const {id} = req.params; 
        const tickets = await busRoute.find({userId: id});
        res.status(200).json(tickets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

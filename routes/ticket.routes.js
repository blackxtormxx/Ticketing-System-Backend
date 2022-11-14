import Express  from "express";
import { addTicket, buyTicket, getAllTicket, getUserTickets } from "../controller/ticket.js";



const router = Express.Router();

router.get('/', getAllTicket);
router.post('/', buyTicket);
router.get('/:id', getUserTickets);

export default router;
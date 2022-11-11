import Express  from "express";
import { addTicket, getAllTicket, getUserTickets } from "../controller/ticket.js";



const router = Express.Router();

router.get('/', getAllTicket);
router.post('/', addTicket);
router.get('/:id', getUserTickets);

export default router;
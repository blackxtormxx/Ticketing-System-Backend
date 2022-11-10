import Express  from "express";
import { addBusType, deleteBusType, getAllBusTypes, getBusType } from "../controller/busType.js";


const router = Express.Router();

router.get('/', getAllBusTypes);
router.post('/', addBusType);
router.get('/:id', getBusType);
router.delete('/:id', deleteBusType);

export default router;
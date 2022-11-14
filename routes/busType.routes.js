import Express  from "express";
import { addBusType, adddBusType, deleteBusType, getAllBusTypes, getBusType } from "../controller/busType.js";


const router = Express.Router();

// get all bus types route
router.get('/', getAllBusTypes);
// add bus types route
router.post('/', addBusType);
// get specific bus types route
router.get('/:id', getBusType);
// delete specific bus types route
router.delete('/:id', deleteBusType);
// add types route
router.post('/addBusType', adddBusType);

export default router;
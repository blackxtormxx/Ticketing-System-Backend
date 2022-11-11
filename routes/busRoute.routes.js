import Express  from "express";
import { addBusRoute, deleteBusRoute, getAllBusRoutes, getBusRoute } from "../controller/busRoute.js";


const router = Express.Router();

router.get('/', getAllBusRoutes);
router.get('/:id', getBusRoute);
router.post('/', addBusRoute);
router.delete('/:id', deleteBusRoute);

export default router;
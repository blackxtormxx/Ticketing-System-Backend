import Express  from "express";
import { addBusRoute, adddBusRoute, deleteBusRoute, getAllBusRoutes, getBusRoute } from "../controller/busRoute.js";


const router = Express.Router();

router.get('/', getAllBusRoutes);
router.get('/:id', getBusRoute);
router.post('/', addBusRoute);
router.delete('/:id', deleteBusRoute);
router.post('/addRoute', adddBusRoute);


export default router;
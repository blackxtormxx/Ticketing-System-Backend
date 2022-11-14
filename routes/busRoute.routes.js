import Express  from "express";
import { addBusRoute, adddBusRoute, deleteBusRoute, getAllBusRoutes, getBusRoute } from "../controller/busRoute.js";


const router = Express.Router();

/**Route for getting all bus routes */
router.get('/', getAllBusRoutes);

/**Route for getting a single bus routes */
router.get('/:id', getBusRoute);

/**Route for adding a bus routes */
router.post('/', addBusRoute);

/**Route for deleting a bus routes */
router.delete('/:id', deleteBusRoute);

/**Route for adding a set of bus routes */
router.post('/addRoute', adddBusRoute);


export default router;
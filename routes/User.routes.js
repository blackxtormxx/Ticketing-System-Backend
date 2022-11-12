import Express  from "express";
import { authUser, getUserDetails, rechargeAcc, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.get('/payment/:id', getUserDetails);
router.post('/payment/:id', rechargeAcc);


export default router;
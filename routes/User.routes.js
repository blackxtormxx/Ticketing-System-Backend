import Express  from "express";
import { authUser, rechargeAcc, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.post('/payment/:id', rechargeAcc);


export default router;
import Express  from "express";
import { authUser, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.get('/payment', registerUser);


export default router;
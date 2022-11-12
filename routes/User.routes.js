import Express  from "express";
import { authUser, getUserDetails, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.get('/payment/:id', getUserDetails);


export default router;
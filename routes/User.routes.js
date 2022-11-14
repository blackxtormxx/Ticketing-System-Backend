import Express  from "express";
import { addnewUser, authUser, getUserDetails, newUser, rechargeAcc, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.post('/payment/:id', );
router.get('/payment/:id', getUserDetails);
router.post('/payment/:id', rechargeAcc);
router.post('/addnewuser', addnewUser);
router.post('/addNewUser', newUser);



export default router;
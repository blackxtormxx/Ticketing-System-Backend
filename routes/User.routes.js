import Express  from "express";
import { addnewUser, authUser, registerUser } from "../controller/User.js";

const router = Express.Router();

router.post('/', authUser);
router.post('/register', registerUser);
router.post('/addnewuser', addnewUser);



export default router;
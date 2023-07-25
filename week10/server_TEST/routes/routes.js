import express from "express"
import {login, CreateNewUser} from "../controllers/usersControllers.js"

const router = express.Router()

router.post('/register', CreateNewUser);
router.post('/login',login);

export default router
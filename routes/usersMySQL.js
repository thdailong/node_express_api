import express from "express";
import { getUsers } from "../controllers/userMySQL.js";

const router = express.Router();

router.get("/users", getUsers);

export default router;
import express from "express";
import { getUserDetail, getUsers, InsertIntoUser } from "../controllers/userMySQL.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserDetail);
router.post("/users/add", InsertIntoUser);

export default router;
import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
    getUser,
    getUsers,
    deleteUser,
    createUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

// all routes in here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

export default router;

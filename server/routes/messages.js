import express from "express";
import { getMessages, sendMessage } from "../controllers/messages.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:userId/messages", verifyToken ,getMessages);
// router.post("/:senderId", verifyToken, sendMessage);

export default router;
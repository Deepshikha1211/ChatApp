import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import upload from "../middleware/upload.js"; // <-- new import

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

// Use upload.single("file") for image or video upload
router.post("/send/:id", protectRoute, upload.single("file"), sendMessage);

export default router;

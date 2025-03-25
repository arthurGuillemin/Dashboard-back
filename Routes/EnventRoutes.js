import express from 'express';
const router = express.Router();
import eventController from '../Controllers/EventController.js';
router.get("/", eventController.getAllEvents);
router.post("/", eventController.createEvent);
router.delete("/:id", eventController.deleteEvent);

export default router;
import express from 'express';
const router = express.Router();
import courseController from '../Controllers/CoursesController.js';


router.get ('/', courseController.getAllCourses);
router.post ('/', courseController.addItems);
router.delete ('/:id', courseController.deleteItems);

export default router;
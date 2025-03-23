import CoursesModel from "../Models/CoursesModel.js";

const coursesController = {
  async getAllCourses(req, res) {
    try {
      const courses = await CoursesModel.getAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async addItems(req, res) {
    try {
      const course = req.body;
      const newCourse = await CoursesModel.addItems(course);
      res.json(newCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 
  async deleteItems(req, res) {
    try {
      const { id } = req.params;
      const deletedCourse = await CoursesModel.deleteItems(id);
      res.json(deletedCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default coursesController;
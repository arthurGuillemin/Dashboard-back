import supabase from "../Config/supabase.js";

const CoursesModel = {
  async getAllCourses() {
    const { data, error } = await supabase
    .from("courses")
    .select("*");
    if (error) throw error;
    return data;
  }, 
  async addItems(course) {
    const { data, error } = await supabase
    .from("courses")
    .insert([course]);
    if (error) throw error;
    return data;
  }, 
  async deleteItems(id) {
    const { data, error } = await supabase
    .from("courses")
    .delete()
    .match({ id: id });
    if (error) throw error;
    return data;
  },
}

export default CoursesModel;
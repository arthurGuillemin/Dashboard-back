import supabase from "../Config/supabase.js";

const BookModel = {
  async getAllBooks() {
    const { data, error } = await supabase
    .from("books")
    .select("*");
    if (error) throw error;
    return data;
  }, 
  async getBookById(id) {
    const { data, error } = await supabase
    .from("books")
    .select("*")
    .eq("id", id);
    if (error) throw error;
    return data;
  }, 
  async addBook(book) {
    const { data, error } = await supabase
    .from("books")
    .insert(book);
    if (error) throw error;
    return data;
  }, 
}

export default BookModel;
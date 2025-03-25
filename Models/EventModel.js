import supabase from "../Config/supabase.js";

const EventModel = {
  async getAllEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) throw error;
    return data;
  },

  async createEvent({ title, description, date, time }) {
    const { data, error } = await supabase
      .from("events")
      .insert([{ title, description, date, time }]);
    if (error) throw error;
    return data[0];
  },

  async deleteEvent(id) {
    const { data, error } = await supabase.from("events").delete().eq("id", id);
    if (error) throw error;
    return { message: "Event deleted" };
  },
};

export default EventModel;

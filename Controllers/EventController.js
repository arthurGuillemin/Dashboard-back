import EventModel from '../Models/EventModel.js';

const eventController = {
  async getAllEvents(req, res) {
    try {
      const events = await EventModel.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createEvent(req, res) {
    try {
      const { title, description, date, time } = req.body;
      const event = await EventModel.createEvent({ title, description, date, time });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      await EventModel.deleteEvent(id);
      res.json({ message: "Événement supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      await EventModel.updateEvent(id, updates);
      res.json({ message: "Événement mis à jour" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default eventController;

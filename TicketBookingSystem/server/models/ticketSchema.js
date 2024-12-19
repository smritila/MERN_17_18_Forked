const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({
  userName: { type: String, required: true },
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  seats: { type: Number, required: true },
  //createdAt: { type: Date, default: Date.now },
});
const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;

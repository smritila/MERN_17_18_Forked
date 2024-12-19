const Ticket = require("../models/ticketSchema");

const bookTicket = async (req, res) => {
  console.log(req.body);
  const { userName, departure, destination, seats } = req.body;

  if (!userName || !departure || !seats || !destination) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const ticket = new Ticket({
      userName,
      departure,
      destination,
      seats,
    });

    await ticket.save();
    res.status(201).json({ message: "Ticket booked successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: "Error booking ticket", error });
  }
};

module.exports = { bookTicket };

use("TicketBooking");

// perform an aggregation function on Tickets to
// get the details of the ticket with ticketNo A1B2

// db.Tickets.find({ TicketNo: "A1B2" });

db.Tickets.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "useId",
      foreignField: "_id",
      as: "userObj",
    },
  },
  {
    $unwind: "$userObj",
  },
  {
    $project: {
      TicketNo: 1,
      userName: "$userObj.userName",
      userEmail: "$userObj.email",
      userContact: "$userObj.contact",
      destination: 1,
      departure: 1,
      date: 1,
      time: 1,
    },
  },
]);

// group:{
// $count:{
// }
// }
// write an aggregation function to display the number of tickets
// booked by each user in the database

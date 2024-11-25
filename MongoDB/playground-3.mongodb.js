use("TicketBooking");

// peform an aggregation fucntion on Tickets to
// get the details of all the tickets along with the user details
// related to the ticket
1; //match the data
// Look up from the secondary collect
// from Look up  In primary - local field-userid
//Insecondaryc- _id(foreign field)
//Project (display) the details
// get the details of the ticket with ticketNo A1B2

//db.Tickets.find({TicketNo:"A1B2"});

db.Tickets.aggregate([
  {
    $match: {
      TicketNo: "A3B4",
    },
  },
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

//group:{
// $count:{
//}
//}

// write an aggregation function to display the number of tickets booked by each user in the database.
// event loop in js need to present 2nd December.

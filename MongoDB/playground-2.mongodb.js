use("TicketBooking");

db.createCollection("Tickets");

// db.Tickets.insertOne({
//   TicketNo: "A1B2",
//   useId: ObjectId("673f09fb3134aa939cbe32df"),
//   destination: "Moscow",
//   departure: "Bangalore",
//   date: "2020-01-01",
//   time: "10:00",
//   price: 5000.0,
// });

// db.Tickets.insertOne({
//   TicketNo: "A2B3",
//   useId: ObjectId("673f09fb3134aa939cbe32df"),
//   destination: "Delhi",
//   departure: "Bangalore",
//   date: "2024-11-24",
//   time: "23:00",
//   price: 5000.0,
// });

// db.Tickets.insertOne({
//   TicketNo: "A3B4",
//   useId: ObjectId("673f0ced70358f9755e20f04"),
//   destination: "Hyderabad",
//   departure: "Nanital",
//   date: "202-11-25",
//   time: "10:00",
//   price: 2000.0,
// });

db.createCollection("Bookings");
db.Bookings.insertOne({
  BookingId: "B1",
  useId: ObjectId("673f09fb3134aa939cbe32df"),
  TicketId: ObjectId("674054cd7b953bd939fad5e6"),
});

db.Bookings.insertOne({
  BookingId: "B2",
  useId: ObjectId("673f09fb3134aa939cbe32df"),
  TicketId: ObjectId("674055a35be1c5663a366048"),
});

db.Bookings.insertOne({
  BookingId: "B3",
  useId: ObjectId("673f0ced70358f9755e20f04"),
  TicketId: ObjectId("674055a35be1c5663a366049"),
});

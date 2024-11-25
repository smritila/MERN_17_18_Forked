use("TicketBooking");
db.createCollection("Tickets");
// db.Tickets.insertOne({
//   TicketNo: "1A2B",
//   useId: ObjectId("673f09fe2edd41143bce8bea"),
//   destination: "Moscow",
//   departure: "Bangalore",
//   date: "2020-01-01",
//   time: "10:00",
//   price: 5000.0,
// });

// db.Tickets.insertOne({
//   TicketNo: "A2b3",
//   useId: ObjectId("673f0c6b6ad5896bc906ee85"),
//   destination: "Delhi",
//   departure: "Bangalore",
//   date: "20-01-24",
//   time: "23:00",
//   price: 4000.0,
// });

// db.Tickets.insertOne({
//   TicketNo: "A3B4",
//   useId: ObjectId("673f0c6b6ad5896bc906ee86"),
//   destination: "Hyderabad",
//   departure: "Bangalore",
//   date: "20-01-25",
//   time: "10:00",
//   price: 2000.0,
// });

db.createCollection("Bookings");
db.Bookings.insertOne({
  BookingId: "B1",
  useId: ObjectId("673f0c6b6ad5896bc906ee85"),
  TicketId: ObjectId("674054cc83eba468ab1a523b"),
});

db.Bookings.insertOne({
  BookingId: "B2",
  useId: ObjectId("673f0c6b6ad5896bc906ee86"),
  TicketId: ObjectId("67405711e86808592fd0d9a9"),
});

db.Bookings.insertOne({
  BookingId: "B3",
  useId: ObjectId("673f0c6b6ad5896bc906ee87"),
  TicketId: ObjectId("67405711e86808592fd0d9aa"),
});

// to create a database
use("TicketBooking");

// to create a collection
db.createCollection("users");

// insert one document into the collection users
// db.users.insertOne({
//   userName: "John Doe",
//   email: "john.doe@example.com",
//   contact: 123456689,
//   address: "123 Main St",
//   gender: "male",
// });

// to insert multiple documents into the collection users
// db.users.insertMany([
//   {
//     userName: "Richie",
//     email: "richie@example.com",
//     contact: 9876987654,
//     address: "456 Elm st",
//     gender: "male",
//   },

//   {
//     userName: "smriti",
//     email: "smriti@example.com",
//     contact: 9876987789,
//     address: "456 Elm st",
//     gender: "Female",
//   },

//   {
//     userName: "Minka",
//     email: "minka@example.com",
//     contact: 9876987876,
//     address: "456 Elm st",
//     gender: "male",
//   },

//   {
//     userName: "Supriti",
//     email: "supriti@example.com",
//     contact: 7896987654,
//     address: "456 Elm st",
//     gender: "female",
//   },
// ]);

// write a function to fetch all the data in user:
// db.users.find();
// write a function to fetch all the males in users
// db.users.find({ gender: "male" });

// write a function to fetch all the details of the user with the name Richie

// write a function to update email of the user richie

// db.users.updateOne(
//   { userName: "Richie" },
//   { $set: { email: "arnold@gmail.com" } }
// );

// db.users.find({ userName: "Richie" });

// delete the user with name Richie
// db.users.deleteOne({ userName: "Richie" });


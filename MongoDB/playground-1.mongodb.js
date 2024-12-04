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
//     contact: 987654321,
//     address: "456 Elm St",
//     gender: "male",
//   },
//   {
//     userName: "Jane Doe",
//     email: "jane.doe@example.com",
//     contact: 123456789,
//     address: "789 Oak St",
//     gender: "female",
//   },
//   {
//     userName: "Don Joe",
//     email: "don.joe@example.com",
//     contact: 987654321,
//     address: "321 Pine St",
//     gender: "male",
//   },
//   {
//     userName: "Nandini",
//     email: "nandini@example.com",
//     contact: 123456789,
//     address: "456 Maple St",
//     gender: "female",
//   },
//   {
//     userName: "Rahul",
//     email: "rahul@example.com",
//     contact: 987654321,
//     address: "789 Cedar St",
//     gender: "male",
//   },
// ]);

// write a function to fetch all the data in users
// db.users.find();

// write a function to fetch all the males in users
// db.users.find({ gender: "male" });

// write a function to fetch all the details of the user
// with the name "Richie"

// write a function to update email of the user richie
// db.users.updateOne(
//   { userName: "Richie" },
//   { $set: { email: "arnold@gmail.com" } }
// );

db.users.find({ userName: "Richie" });

// delete the user with name Richie
db.users.deleteOne({ userName: "Richie" });

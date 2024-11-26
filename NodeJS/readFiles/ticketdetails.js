const PDFDocument = require("pdfkit");
const fs = require("fs");

// Sample JSON Data
const data = {
  userDetails: {
    userId: 12345,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1-123-456-7890",
    address: {
      street: "123 Maple Street",
      city: "Springfield",
      state: "Illinois",
      zipCode: "62704",
      country: "USA",
    },
  },
  journeyDetails: {
    ticketId: "TKT987654",
    bookingDate: "2024-11-26T10:30:00Z",
    travelDate: "2024-12-01T08:00:00Z",
    source: {
      city: "Chicago",
      state: "Illinois",
      country: "USA",
      stationCode: "CHI",
    },
    destination: {
      city: "New York",
      state: "New York",
      country: "USA",
      stationCode: "NYC",
    },
    travelMode: "Train",
    seatDetails: {
      seatNumber: "A12",
      class: "First Class",
    },
    fareDetails: {
      baseFare: 150.0,
      taxes: 20.0,
      totalFare: 170.0,
      currency: "USD",
    },
    status: "Confirmed",
  },
};

// Create a PDF Document
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("TicketDetails.pdf"));

// Add Title
doc
  .fontSize(20)
  .text("Ticket Booking Details", { align: "center" })
  .moveDown(2);

// Add User Details
doc
  .fontSize(14)
  .text("User Details:")
  .moveDown(0.5)
  .text(`User ID: ${data.userDetails.userId}`)
  .text(`Name: ${data.userDetails.name}`)
  .text(`Email: ${data.userDetails.email}`)
  .text(`Phone: ${data.userDetails.phoneNumber}`)
  .text(
    `Address: ${data.userDetails.address.street}, ${data.userDetails.address.city}, ${data.userDetails.address.state} - ${data.userDetails.address.zipCode}, ${data.userDetails.address.country}`
  )
  .moveDown(1);

// Add Journey Details
doc.text("Journey Details:").moveDown(0.5);
doc.text(`Ticket ID: ${data.journeyDetails.ticketId}`);
doc.text(`Booking Date: ${data.journeyDetails.bookingDate}`);
doc.text(`Travel Date: ${data.journeyDetails.travelDate}`);
doc.text(
  `Source: ${data.journeyDetails.source.city} (${data.journeyDetails.source.stationCode}), ${data.journeyDetails.source.state}, ${data.journeyDetails.source.country}`
);
doc.text(
  `Destination: ${data.journeyDetails.destination.city} (${data.journeyDetails.destination.stationCode}), ${data.journeyDetails.destination.state}, ${data.journeyDetails.destination.country}`
);
doc.text(`Travel Mode: ${data.journeyDetails.travelMode}`);
doc.text(
  `Seat: ${data.journeyDetails.seatDetails.seatNumber} (${data.journeyDetails.seatDetails.class})`
);
doc.text(
  `Fare: ${data.journeyDetails.fareDetails.totalFare} ${data.journeyDetails.fareDetails.currency}`
);
doc.text(`Status: ${data.journeyDetails.status}`).moveDown(1);

// Finalize and Close PDF
doc.end();

console.log("PDF generated: TicketDetails.pdf");

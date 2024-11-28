const PDFDocument = require("pdfkit");
const fs = require("fs");

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

// Create a new PDF document
const doc = new PDFDocument();

// Pipe the PDF to a file
doc.pipe(fs.createWriteStream("students.pdf"));

// Add a title
doc.fontSize(20).text("Students List", { align: "center" });
doc.moveDown();

// Define table headers
doc.fontSize(12);
doc.text("ID", 100, doc.y, { continued: true });
doc.text("Name", 200, doc.y);

// Draw a line below headers
doc
  .moveTo(100, doc.y + 5)
  .lineTo(400, doc.y + 5)
  .stroke();
doc.moveDown(1);

// Add student data in table rows
students.forEach((student) => {
  doc.text(student.id.toString(), 100, doc.y, { continued: true });
  doc.text(student.name, 200, doc.y);
});

// Finalize the PDF and end the stream
doc.end();

console.log("PDF generated successfully!");

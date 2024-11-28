const fs = require("fs");
const mammoth = require("mammoth");
const { PDFDocument } = require("pdf-lib");
let text = "";
fs.readFile("MyDocument1.docx", (err, data) => {
  if (err) {
    return console.error(err);
  }
  mammoth
    .extractRawText({ buffer: data })
    .then((result) => {
      console.log(result.value); // Extracted text
      text = result.value;
      createPDF(text);
    })
    .catch((err) => console.error(err));
});

async function createPDF(text) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();
  const fontSize = 12;

  // Add text to the page
  page.drawText(text, {
    x: 50,
    y: height - 50,
    size: fontSize,
    maxWidth: width - 100,
    lineHeight: 14,
  });

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("output.pdf", pdfBytes);
  console.log("PDF created successfully!");
}

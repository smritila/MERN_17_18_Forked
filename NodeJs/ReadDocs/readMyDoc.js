// import  libraries: mammoth and pdf-lib
const mammoth = require("mammoth");
// const pdfLib = require("pdf-lib");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

// read doc file

fs.readFile("./MyDocument.docx", (err, data) => {
  if (err) {
    console.log(err);
  }
  mammoth
    .extractRawText({ buffer: data })
    .then((res) => {
      console.log(res.value);
    })
    .catch((err) => {
      console.log(err);
    });
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
  // save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("output.pdf", pdfBytes);
  console.log("PDF created successfully");
}

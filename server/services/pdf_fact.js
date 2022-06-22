PDFDocument = require('pdfkit');

function crearPDF(dataCallback, endCallback, nombreC, precioP) {
  const nombre = nombreC;
  const concepto = 'Servicio grúa portacoches - retirada del coche';
  const precio = precioP;

  const doc = new PDFDocument({ size: 'A4' });
  doc.on('data', dataCallback);
  doc.on('end', endCallback);
  doc.image('./public/img/logo2.png', 430, 15, {
    fit: [100, 100],
    align: 'center',
    valign: 'center',
  });
  doc.moveDown();
  doc.moveDown();
  doc.fontSize(18).fillColor('blue').text(`${nombre}`, {
    align: 'center',
  });
  doc.moveDown();
  doc.fontSize(12).fillColor('black').text(`Concepto: ${concepto}`, {
    align: 'left',
  });
  doc.moveDown();
  doc.fontSize(14).fillColor('red').text(`Precio: ${precio}€ `, {
    align: 'center',
  });
  doc.moveDown();

  doc.end();
}

module.exports = { crearPDF };

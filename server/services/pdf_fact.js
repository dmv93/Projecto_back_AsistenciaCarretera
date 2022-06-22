PDFDocument = require('pdfkit');

function crearPDF(dataCallback, endCallback) {
  const nombre = 'Davinia de la Rosa';
  const concepto = 'Servicio de grúa desde punto A hasta punto B';
  const precio = '350';
  const iva = '70';

  const doc = new PDFDocument({ size: 'A4' });
  doc.on('data', dataCallback);
  doc.on('end', endCallback);
  doc.image('./public/img/logo.png', 430, 15, {
    fit: [100, 100],
    align: 'center',
    valign: 'center',
  });

  doc.fontSize(20).fillColor('blue').text(`${nombre}`, {
    align: 'center',
  });
  doc.moveDown();
  doc.fontSize(12).fillColor('black').text(`Concepto: ${concepto}`, {
    align: 'left',
  });
  doc.moveDown();
  doc.fontSize(14).fillColor('red').text(`Precio: ${precio}€ - IVA: ${iva}€`, {
    align: 'center',
  });
  doc.moveDown();

  doc.end();
}

module.exports = { crearPDF };

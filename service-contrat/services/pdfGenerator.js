import PDFGenerator from "pdfkit";
import fs from "fs";

export default class InvoiceGenerator {
  constructor(invoice) {
    this.invoice = invoice;
  }

  generateHeaders(doc) {
    // const billingAddress = this.invoice.addresses.billing;

    doc
      .fontSize(20)
      .text("Contrat de location", { align: "center" })
      .fontSize(15)
      .text("LOCAUX MEUBLES A USAGE D'HABITATION", { align: "center" });

    const beginningOfPage = 50;
    const endOfPage = 550;

    doc.moveTo(beginningOfPage, 200).lineTo(endOfPage, 200).stroke();
    doc.moveDown(5);
  }

  generateClauses(doc) {
    doc
      .fontSize(15)
      .text("I. Désignation des parties", { align: "left", bold: true })
      .moveDown()
      .fontSize(12)
      .text("Le présent contrat est conclu entre les soussignés :")
      .text("d'une part:")
      .text(this.invoice.ownername)
      .text("d'autre part:")
      .text(this.invoice.username)
      .moveDown()
      .fontSize(15)
      .text("II. Objet du contrat", { bold: true })
      .moveDown()
      .fontSize(12)
      .text(
        "Le présent contrat a pour objet la location d’un logement ainsi déterminé :"
      )
      .text("Adresse du logement :  " + this.invoice.location)
      .moveDown()
      .fontSize(15)
      .text("III. Date de prise d’effet et durée du contrat", { bold: true })
      .moveDown()
      .fontSize(12)
      .text(
        "La durée du contrat et sa date de prise d’effet sont ainsi définies :"
      )
      .text("A. Date de prise d’effet du contrat :  " + this.invoice.startDate)
      .text("B. Date de fin du contrat :   " + this.invoice.endDate)
      .moveDown()
      .fontSize(15)
      .text("IV. Conditions financières", { bold: true })
      .moveDown()
      .fontSize(12)
      .text(
        "Montant du loyer par nuit et par chambre :  " +
          this.invoice.roomPrice +
          "£"
      )
      .text("Montant du loyer totale :  " + this.invoice.totalPrice + "£");
  }

  /*  generateTable(doc) {
    const tableTop = 270;
    const itemCodeX = 50;
    const descriptionX = 100;
    const quantityX = 250;
    const priceX = 300;
    const amountX = 350;

    doc
      .fontSize(15)
      .text("Item Code", itemCodeX, tableTop, { bold: true })
      .text("Description", descriptionX, tableTop)
      .text("Quantity", quantityX, tableTop)
      .text("Price", priceX, tableTop)
      .text("Amount", amountX, tableTop);

    const items = this.invoice.items;
    let i = 0;

    for (i = 0; i < items.length; i++) {
      const item = items[i];
      const y = tableTop + 25 + i * 25;

      doc
        .fontSize(15)
        .text(item.itemCode, itemCodeX, y)
        .text(item.description, descriptionX, y)
        .text(item.quantity, quantityX, y)
        .text(`$ ${item.price}`, priceX, y)
        .text(`$ ${item.amount}`, amountX, y);
    }
  }

  generateFooter(doc) {
    doc.fontSize(15).text(`Payment due upon receipt. `, 50, 700, {
      align: "center",
    });
  } */

  generate() {
    let theOutput = new PDFGenerator();

    console.log(this.invoice);

    const fileName = `Contrat ${this.invoice.ref}.pdf`;

    // pipe to a writable stream which would save the result into the same directory
    theOutput.pipe(fs.createWriteStream(fileName));

    this.generateHeaders(theOutput);
    theOutput.moveDown();
    this.generateClauses(theOutput);

    /* this.generateTable(theOutput);

    this.generateFooter(theOutput); */

    // write out file
    theOutput.end();
  }
}

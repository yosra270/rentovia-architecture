import express from "express";
import InvoiceGenerator from "./services/pdfGenerator.js";
import facture from "./data.js";

const app = express();
const Port = 3000;
app.use(express.json());

app.post("/contrat", async (req, res, next) => {
  const data = req.body;
  let contract = new InvoiceGenerator(data);
  contract.generate();

  return res.status(200).send();
});

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
});

import express, { Application } from "express";
import { createProducts, deleteProductsById, findProducts, findProductsById, updateProductsById } from "./logic";

const app: Application = express();
app.use(express.json());

app.post("/products", createProducts);
app.get("/products", findProducts);
app.get("/products/:id", findProductsById);
app.patch("/products/:id", updateProductsById);
app.delete("/products/:id", deleteProductsById);

const PORT: number = 3000;
const runningMsg: string = `Server running on hhtp://localhost:${PORT}`;
app.listen(PORT, () => console.log(runningMsg));

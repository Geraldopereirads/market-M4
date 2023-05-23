import express, { Application } from "express";
import { createProducts, deleteProductsById, findProducts, findProductsById, updateProductsById } from "./logic";
import { ensureProductMiddlewaresById, ensureProductNamesMiddlewares, ensureProductNamesPatchMiddlewares } from "./middleware";

const app: Application = express();
app.use(express.json());

app.post("/products", ensureProductNamesMiddlewares, createProducts);
app.get("/products", findProducts);
app.get("/products/:id",ensureProductMiddlewaresById, findProductsById);
app.patch("/products/:id",ensureProductMiddlewaresById,ensureProductNamesPatchMiddlewares, updateProductsById);
app.delete("/products/:id",ensureProductMiddlewaresById, deleteProductsById);

const PORT: number = 3000;
const runningMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log(runningMsg));

import { Request, Response } from "express";
import { market } from "./database";

export const createProducts = (req: Request, res: Response): Response => {
  let nextId = market.length + 1;

  return res.status(201).json();
};

export const findProducts = (req: Request, res: Response): Response => {
  return res.status(201).json("Achei");
};

export const findProductsById = (req: Request, res: Response): Response => {
  return res.status(201).json("achei o id");
};

export const updateProductsById = (req: Request, res: Response): Response => {
  return res.status(201).json("achei o id");
};

export const deleteProductsById = (req: Request, res: Response): Response => {
  return res.status(201).json("achei o id");
};

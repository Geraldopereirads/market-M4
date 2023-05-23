import { NextFunction, Request, Response } from "express";
import { market } from "./database";
import { ICleaningProduct, IFoodProduct } from "./interfaces";

export const ensureProductMiddlewaresById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: Number = Number(req.params.id);

  const findIndex: Number = market.findIndex((product) => product.id === id);

  if (findIndex === -1) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  res.locals.market = {
    productId: id,
    productIndex: findIndex,
  };

  return next();
};

export const ensureProductNamesMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productsData: Array<ICleaningProduct | IFoodProduct> = req.body;

  productsData.forEach((product) => {
    market.forEach((productName) => {
      if (product.name === productName.name) {
        return res.status(409).json({
          error: "Product already registered",
        });
      }
    });
  });

  return next();
};

export const ensureProductNamesPatchMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productsData: Array<ICleaningProduct | IFoodProduct> = req.body;

  const patchDuplicated = market.some(
    (product) =>
      product.name ===
      (productsData as Array<ICleaningProduct | IFoodProduct> | any).name
  );

  if (patchDuplicated) {
    return res.status(409).json({
      error: "Product already registered",
    });
  }

  return next();
};

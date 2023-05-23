import { Request, Response } from "express";
import { market } from "./database";
import { ICleaningProduct, IFoodProduct, IProduct } from "./interfaces";

export const createProducts = (req: Request, res: Response): Response => {
  let nextId = market.length + 1;
  const dataCriacao: Date = new Date();
  const prazoValidadeDias: number = 365;
  const productsData: Array<ICleaningProduct | IFoodProduct> = req.body;
  const total: number = productsData.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const newProducts: IProduct[] = [];

  productsData.map((product) => {
    const newProduct: IProduct = {
      id: nextId++,
      ...product,
      expirationDate: new Date(
        dataCriacao.getTime() + prazoValidadeDias * 24 * 60 * 60 * 1000
      ),
    };
    market.push(newProduct);
    newProducts.push(newProduct);
  });

  return res.status(201).json({
    total: total,
    marketProducts: newProducts,
  });
};

export const findProducts = (req: Request, res: Response): Response => {
  const section: any | string = req.query.section;

  const total: number = market.reduce((acc, product) => acc + product.price, 0);
  if (!section) {
    return res.status(200).json({
      total: total,
      marketProducts: market,
    });
  }

  const productFilter: IProduct[] = market.filter(
    (product) => product.section === section
  );

  return res.json(productFilter);
};

export const findProductsById = (req: Request, res: Response): Response => {
  const index = res.locals.market.productIndex;

  return res.json(market[index]);
};

export const updateProductsById = (req: Request, res: Response): Response => {
  const index: string | any = res.locals.market.productIndex;
  const updateData: string | any = req.body;

  market[index] = {
    ...market[index],
    ...updateData,
  };

  return res.json(market[index]);
};

export const deleteProductsById = (req: Request, res: Response): Response => {
  const index = res.locals.market.productIndex;

  market.splice(index, 1);

  return res.status(204).send();
};

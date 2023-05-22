export interface IProduct {
  id: number;
  name: string;
  price: number;
  weight: number;
  section: "food" | "cleaning";
  expirationDate: Date;
}

export interface IProductData {
  name: string;
  price: number;
  weight: number;
  section: "food" | "cleaning";
  expirationDate: Date;
}

export type ICleaningProduct = Omit<IProduct, "id" | "expirationDate">;

export interface IFoodProduct extends IProduct {
  calories: number;
}

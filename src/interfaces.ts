export type  TProduct = {
    id: number;
    name: string;
    price: number;
    weight: number;
    section: "food" | "cleaning";
    expirationDate: Date;
  }
  
  export type TProductData = {
    name: string;
    price: number;
    weight: number;
    section: "food" | "cleaning";
    expirationDate: Date;
  }
  
  export type TCleaningProduct = Omit<TProduct, "id" | "expirationDate">;
  
  
  export interface TFoodProduct extends TProduct {
    calories: number;
  }
  
import { IProduct } from "../lib/types/products";

export function getTimeStamp(date: string) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1: IProduct,
  product2: IProduct
): number => {
  if (product2?.createdAt && product1?.createdAt) {
    return parseInt(product2?.createdAt) - parseInt(product1?.createdAt);
  }
  return 0;
};

/* export const newestProductsFn = (products: IProduct[]) => {
  const productsWithTimeStamp = products.map((product) => {
    return {
      ...product,
      createdAt: getTimeStamp(product.createdAt!),
    };
  });
  return productsWithTimeStamp.sort(sortByTimeStamp);
}; */

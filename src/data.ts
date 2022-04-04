export type Product = {
  id: number
}

export function generateProducts(): Product[] {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push({ id: i+1 });
  }
  return products;
}
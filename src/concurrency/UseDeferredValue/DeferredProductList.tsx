import { useDeferredValue } from 'react';
import { Product } from './data';

interface ProductListProps {
  products: Product[];
}

export const DeferredProductList = ({ products }: ProductListProps): JSX.Element => {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product: Product) => (
        <li>Product {product.id}</li>
      ))}
    </ul>
  );
}

export const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <ul>
      {products.map((product: Product) => (
        <li>Product {product.id}</li>
      ))}
    </ul>
  );
}

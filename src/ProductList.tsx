import { useDeferredValue } from 'react';
import { Product } from './data';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps): JSX.Element {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product: Product) => (
        <li>Product {product.id}</li>
      ))}
    </ul>
  );
}

export default ProductList;
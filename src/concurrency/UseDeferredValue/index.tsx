import React, {ChangeEvent, useId, useState} from 'react';
import {DeferredProductList, ProductList} from "./DeferredProductList";
import {generateProducts} from "./data";


const dummyProducts = generateProducts();

const filterProducts = (filterTerm: string) => {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.id.toString().includes(filterTerm));
}

const UseDeferredValue = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const inputId = useId();

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: ChangeEvent<HTMLInputElement>) {
    setFilterTerm(event.target.value);
  }

  return (
    <article>
      <header>
        <h1>useDeferredValue</h1>
        <label htmlFor={inputId}>Filter</label>
        <input id={inputId} type="text" onChange={updateFilterHandler} />
      </header>
      <section>
        <h2>Without useDeferredValue</h2>
        <DeferredProductList products={filteredProducts} />
      </section>

      <section>
        <h2>With useDeferredValue</h2>
        <ProductList products={filteredProducts} />
      </section>
    </article>
  );
};

export default UseDeferredValue;
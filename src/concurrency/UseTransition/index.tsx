import React, {ChangeEventHandler, useState, useTransition} from 'react';
import {filterProducts} from "../UseDeferredValue";
import {ProductList} from "../UseDeferredValue/DeferredProductList";


const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (event ) => {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <article>
      <h1>UseTransition</h1>
      <p>Allows managing changes in a state. Exemple put a loading message on searching, or a loader.</p>

      <h2>Here we will display something after few seconds, and carry loading thanks to useTransition</h2>
      <p>You can reduce processor performance !</p>

      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p>Hey ! I'm in transition ! I'm Updating List...</p>}

      <ProductList products={filteredProducts} />
    </article>
  );
};

export default UseTransition;
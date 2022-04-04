import { useState, useId, ChangeEvent } from 'react';

import favicon from './favicon.svg'
import logo from './logo.svg'

import './App.css'

import { generateProducts } from './data';
import ProductList from './ProductList';

const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.id.toString().includes(filterTerm));
}

function App() {
  const [filterTerm, setFilterTerm] = useState('');
  const inputId = useId();

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: ChangeEvent<HTMLInputElement>) {
    setFilterTerm(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello <img src={favicon} className="logo" alt="logo" /> + <img src={logo} className="logo" alt="logo" /></p>
        <label htmlFor={inputId}>Filter</label>
        <input id={inputId} type="text" onChange={updateFilterHandler} />
        <ProductList products={filteredProducts} />
      </header>
    </div>
  )
}

export default App


import React, { ChangeEvent, useId, useState } from 'react';
import { DeferredProductList, ProductList } from './DeferredProductList';
import { generateProducts } from './data';

const dummyProducts = generateProducts();

export const filterProducts = (filterTerm: string) => {
	if (!filterTerm) {
		return dummyProducts;
	}
	return dummyProducts.filter((product) => product.id.toString().includes(filterTerm));
};

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
				<p>
          Interesting for user experience, if you type in an input with a lot of elements (loading
          when search), using this hook give to user opportunity to continue typing even if there is
          an action at the same time, allows concurrency.
				</p>
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

import React, { useId } from 'react';

const UseId = () => {
	const inputId = useId();

	return (
		<article>
			<h1>UseId</h1>
			<p>
        Create an id which could be use in input if, label htmlFor... Seems to just increment it.
			</p>
			<h2>We have generate ID "{inputId}" for this input</h2>
			<label htmlFor={inputId}>Filter</label>
			<input id={inputId} type="text" />
		</article>
	);
};

export default UseId;

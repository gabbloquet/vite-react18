import {useLayoutEffect, useState} from "react";

const AutomaticBatching = () => {

	const [count, setCount] = useState(0);
	const [resetCount, setResetCount] = useState(0);
	const [randomStateNumber1, setRandomStateNumber1] = useState(Math.floor(Math.random() * 100) + 1);
	const [randomStateNumber2, setRandomStateNumber2] = useState(Math.floor(Math.random() * 100) + 1);
	const [randomStateNumber3, setRandomStateNumber3] = useState(Math.floor(Math.random() * 100) + 1);
	const [randomStateNumber4, setRandomStateNumber4] = useState(Math.floor(Math.random() * 100) + 1);
	const [randomStateNumber5, setRandomStateNumber5] = useState(Math.floor(Math.random() * 100) + 1);

	const resetCounter = () => {
		setCount(0);
		setResetCount(resetCount+1);
		setRandomStateNumber1(0);
		setRandomStateNumber2(0);
		setRandomStateNumber3(0);
		setRandomStateNumber4(0);
		setRandomStateNumber5(0);
	}

	const handleClick = () => {
		fetchSomething().then(() => {
			setCount(count+1);
			setRandomStateNumber1(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber2(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber3(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber4(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber5(Math.floor(Math.random() * 100) + 1);
		});
	}

	return (
		<section>
			<article>
			<button onClick={() => handleClick()}>
				Count
			</button>

			<button onClick={() => resetCounter()}>
				Reset
			</button>
		</article>

			<article>
				<h2>
					Count : {count}
				</h2>

				<h2>
					Reset times : {resetCount}
				</h2>
			</article>

			<article>
				<p>
					Here is some random datas to be re-rendered :
				</p>
				<p>
					{randomStateNumber1} & {randomStateNumber2} & {randomStateNumber3} & {randomStateNumber4} & {randomStateNumber5}
				</p>
			</article>
			<LogEvents />
		</section>
	)
}

function fetchSomething() {
	return new Promise((resolve) => setTimeout(resolve, 250));
}

function LogEvents() {
	useLayoutEffect(() => {
		console.log("DOM Change rendered");
	});
	console.log("Changes occured");
	return null;
}

export default AutomaticBatching;

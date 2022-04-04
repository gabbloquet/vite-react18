import {useEffect, useState} from "react";

export const AutomaticBatchingComponent = () => {

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
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setCount(count+1);
			setRandomStateNumber1(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber2(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber3(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber4(Math.floor(Math.random() * 100) + 1);
			setRandomStateNumber5(Math.floor(Math.random() * 100) + 1);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);


	return (
		<section>
			<article>
			<button onClick={() => setCount(count+1)}>
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
		</section>
	)
}

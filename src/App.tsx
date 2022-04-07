import {Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import UseId from './concurrency/UseId';
import UseDeferredValue from './concurrency/UseDeferredValue';
import UseTransition from './concurrency/UseTransition';
import AutomaticBatching from './AutomaticBatching';
import './index.css';

export const App = () => (
	<>
		<Switch>
			<Route path="/useId" >
				<UseId />
			</Route>
			<Route path="/useDeferredValue">
				<UseDeferredValue />
			</Route>
			<Route path="/useTransition">
				<UseTransition />
			</Route>
			<Route path="/auto-batching">
				<AutomaticBatching />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
		<nav>
			<h1>Discovering new features : </h1>
			<div className="line">
				<Link to={'/useId'}>useID</Link>
				<Link to={'/useDeferredValue'}>useDeferredValue</Link>
				<Link to={'/useTransition'}>useTransition</Link>
				<Link to={'/auto-batching'}>Automatic Batching</Link>
			</div>
			<div className="line">
				<Link to={'/'}>Back home</Link>
			</div>
		</nav>
	</>
);
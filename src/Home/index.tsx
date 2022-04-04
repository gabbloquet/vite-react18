import {Link} from "react-router-dom";
import favicon from './favicon.svg'
import logo from './logo.svg'

import './home.css'

const Home = () => (
  <div className="home">
    <header>
      <div className='line'>
        <img src={logo} className="rotative-logo" alt="react-logo" />
        <img src={favicon} className="rotative-logo" alt="vite-logo" />
      </div>
      <p>Welcome in our incredible app to test
        <img src={favicon} className="logo" alt="vite-logo" />
        &
        <img src={logo} className="logo" alt="react-logo" />
        18
      </p>
    </header>
    <main>
      <h1>Discovering new hooks : </h1>
      <div className='line'>
        <Link to={'/useId'}>useID</Link>
        <Link to={'/useDeferredValue'}>useDeferredValue</Link>
      </div>
    </main>
  </div>
);

export default Home;


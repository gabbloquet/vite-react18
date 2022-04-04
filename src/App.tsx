import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import UseId from "./concurrency/UseId";
import UseDeferredValue from "./concurrency/UseDeferredValue";
import AutomaticBatching from "./AutomaticBatching";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useId" element={<UseId />}  />
      <Route path="/useDeferredValue" element={<UseDeferredValue />}  />
      <Route path="/auto-batching" element={<AutomaticBatching />}  />
    </Routes>
  </BrowserRouter>
);

export default App;

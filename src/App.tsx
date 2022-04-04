import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import UseId from "./concurrency/UseId";
import UseDeferredValue from "./concurrency/UseDeferredValue";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useId" element={<UseId />}  />
      <Route path="/useDeferredValue" element={<UseDeferredValue />}  />
    </Routes>
  </BrowserRouter>
);

export default App;


import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./home";
import {AutomaticBatchingComponent} from "./automaticBatchingFeature";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-batching" element={<AutomaticBatchingComponent />}  />
      </Routes>
    </BrowserRouter>


  )
}

export default App

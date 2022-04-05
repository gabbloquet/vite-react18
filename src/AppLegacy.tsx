import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import './App.css'
import AutomaticBatching from "./AutomaticBatching";

function AppLegacy() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-batching-legacy" element={<AutomaticBatching />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppLegacy

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./Home";
import {AutomaticBatchingComponent} from "./automaticBatchingFeature";
import './App.css'

function AppLegacy() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-batching-legacy" element={<AutomaticBatchingComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppLegacy

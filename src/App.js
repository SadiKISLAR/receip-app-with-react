import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Detail"

import { BroowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return
  <BroowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      
    </Routes>

  </BroowserRouter>
}

export default App;

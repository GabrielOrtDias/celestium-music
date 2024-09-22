import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/footer-menu/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path=""></Route>
      </Routes>
    </Router>
  );
}

export default App;

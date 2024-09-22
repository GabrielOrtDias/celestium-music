import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/footer-menu/Home";
import { Login } from "./pages/Login";
import Search from "./pages/footer-menu/Search";
import Playlist from "./pages/footer-menu/Playlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Search />} />
        <Route path="" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;

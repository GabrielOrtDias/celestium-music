import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/footer-menu/Home";
import { Login } from "./pages/Login";
import Search from "./pages/footer-menu/Search";
import Playlist from "./pages/footer-menu/Playlist";

function App() {
  return (
    <div className="bg-background h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

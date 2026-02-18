import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import {BookProvider} from "./contexts/BookContext";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BookProvider>
    <div>
      <NavBar />    
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
    </BookProvider>
  );
}

export default App;

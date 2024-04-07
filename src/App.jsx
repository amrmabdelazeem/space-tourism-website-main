import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/destination";
import "./app.scss";
import Navbar from "./components/navbar/NavBar";
import Technology from "./pages/technology/Technology";
import Crew from "./pages/crew/Crew";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
            <Route path="/tech" element={<Technology/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

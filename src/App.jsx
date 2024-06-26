import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/destination";
import "./app.scss";
import Navbar from "./components/navbar/NavBar";
import Technology from "./pages/technology/Technology";
import Crew from "./pages/crew/Crew";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <HashRouter>
        <div className="app">
          <Navbar onOpen={handleMenu} show={toggle} />
          <Sidebar onClose={handleMenu} hide={toggle} />
          <Routes>
            <Route path={"/"} element={<Navigate to="/home" />}></Route>
            <Route index path={"/home"} element={<Home />}></Route>
            <Route path="destination" element={<Destination />}></Route>
            <Route path="crew" element={<Crew />}></Route>
            <Route path="technology" element={<Technology />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;

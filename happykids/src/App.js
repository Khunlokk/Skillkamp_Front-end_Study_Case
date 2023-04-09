import "./App.css";
import LogoHeader from "./LogoHeader/LogoHeader";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCollection from "./Pages/ShopCollection";
import OurStory from "./Pages/OurStory";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import CardProductSlider from "./CardProductOnNewArrivals/CardProductSlider";

function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter className="nav-header">
      <LogoHeader />
      <nav className="nav-header">
        <NavLink
          end
          to="/"
          exact
          className="nav-style"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          end
          to="/ShopCollection"
          className="nav-style"
          activeClassName="active"
        >
          Shop Collection
        </NavLink>
        <NavLink
          end
          to="/OurStory"
          className="nav-style"
          activeClassName="active"
        >
          Our Story
        </NavLink>
        <NavLink
          end
          to="/Contact"
          className="nav-style"
          activeClassName="active"
        >
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopCollection" element={<ShopCollection />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import LogoHeader from "./LogoHeader/LogoHeader";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCollection from "./Pages/ShopCollection";
import OurStory from "./Pages/OurStory";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import ProductDetail from "./CardProductOnNewArrivals/ProductDetail";
import ProductContex from "./CardProductOnNewArrivals/ProductContex";
import Announcement from "./Components/Announcement";
import BadgeCart from "./DataDisplay/BadgeCart";
import Product from "./product";
import NewSletter from "./Footer/NewSletter/NewSletter";
import Footer from "./Footer/Footer";

function App() {
  // let activeClassName = "nav-active";
  return (
    <BrowserRouter className="nav-header">
      <div>
        <Announcement />
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
          <BadgeCart />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShopCollection" element={<ProductDetail />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Contact" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
      <NewSletter />
    </BrowserRouter>
  );
}

export default App;

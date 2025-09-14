import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      // window.scrollY > 450 ? console.log("Should turn") : "";
      window.scrollY > 450 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMObileMenu] = useState(false);
  const toggleMenu = () => {
    setMObileMenu((mobileMenu) => !mobileMenu);
  };

  return (
    <nav className={`container ${sticky && "dark-nav"} `}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={`${mobileMenu && "hide-mobile-menu"}`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>

        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>

      <img className="menu-icon" src={menu_icon} alt="" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

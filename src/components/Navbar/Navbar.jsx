import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      window.scrollY > 900 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#campus">Campus</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {" "}
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

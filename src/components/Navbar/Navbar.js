import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navContainer}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes.navLinks}>
          <ul className={classes.navMenu}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className={classes.user}>
            <a href="">Login</a>
            <button className={classes.button}>Sign Up</button>
          </div>
        </div>
        <div className={classes.toggle}>
          <ion-icon className={classes.hamburger} name="menu"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const toggleHandler = () => {
    console.log("toggled");
    var element = document.querySelector("#mobileBackdrop");
    if (element.classList.contains(classes["mobileBackdrop-open"])) {
      element.classList.remove(classes["mobileBackdrop-open"]);
    } else {
      element.classList.add(classes["mobileBackdrop-open"]);
    }
  };
  return (
    <nav>
      <div className={classes.navContainer}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div
          className={classes.mobileBackdrop}
          id="mobileBackdrop"
          onClick={toggleHandler}
        >
          <div className={classes.mobileNav}>
            <ul className={classes.mobileMenu}>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <div className={classes.mobileUser}>
              <a href="">Login</a>
              <button className={classes.button}>Sign Up</button>
            </div>
          </div>
        </div>
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
        <div className={classes.toggle} onClick={toggleHandler}>
          <ion-icon className={classes.hamburger} name="menu"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = props => {
  return (
    <header className="cd-main-header">
      <nav className="cd-main-nav js-main-nav">
        <ul className="cd-main-nav__list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#contact">Explore</a>
          </li>
          <li>
           
          <i class="angle double down icon"></i>

            </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;


import React from "react";

const Navbar = props => {
  return (
    <header class="cd-main-header">
<nav class="cd-main-nav js-main-nav">
    <ul class="cd-main-nav__list">
        <li>
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#portfolio">Portfolio</a>
        </li>

        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
</nav>
</header>
  );
};
export default Navbar;
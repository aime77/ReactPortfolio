import React from "react";

const Navbar2 = props => {

let menucontainer = document.querySelector(".menu-container");
let overlay = document.querySelector(".overlay");
let navigation = document.querySelector("nav");

let barisactive = 0;

menucontainer.addEventListener("click", function() {
	if (barisactive === 0) {
		overlay.classList.add("active");
		overlay.classList.remove("non-active");
		navigation.style.display = "block";
		barisactive = 1;
		menucontainer.classList.add("bar-active");
	} else if (barisactive === 1) {
		overlay.classList.add("non-active");
		overlay.classList.remove("active");
		navigation.style.display = "none";
		barisactive = 0;
		menucontainer.classList.remove("bar-active");
	}
});
  return (
      <div>
<div className="menu-container">
    <div className="bar"></div>
  </div>
  
	<div className="overlay">
		<nav>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</div>
    </div>
);
};
export default Navbar2;
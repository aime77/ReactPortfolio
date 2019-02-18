import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";

class Navbar extends Component {
  state = { showNavBarOptions: false };
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  showOptions = () => {
    this.setState({ showNavBarOptions: true });
  };

  render() {
    const { activeItem } = this.state;

    return (
   <div className="ui top fixed right menu">
        <Menu pointing secondary info className="right menu">
          <Menu.Menu >
            <div style={{ opacity: this.state.showNavBarOptions ? 1 : 0 }}>
            <Menu pointing secondary>
              <Menu.Item
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
                className="navBarFont"
              />
              <Menu.Item
                name="Projects"
                active={activeItem === "Projects"}
                onClick={this.handleItemClick}
                href="#portfolio"
                className="navBarFont"
              />
              <Menu.Item
                name="Contact"
                active={activeItem === "Contact"}
                onClick={this.handleItemClick}
                className="navBarFont"
              />
              </Menu>
            </div>
            <Menu.Item name="Explore" onMouseEnter={this.showOptions}  className="navBarFont">
            <Icon disabled name="arrow alternate circle left outline" /> Explore
            </Menu.Item>
          </Menu.Menu>
          </Menu>
          </div>
    
    );
  }
}
export default Navbar;

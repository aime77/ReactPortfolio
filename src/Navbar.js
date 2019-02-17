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
   
        <Menu>
          <Menu.Menu position="right">
            <div style={{ opacity: this.state.showNavBarOptions ? 1 : 0 }}>
            <Menu pointing secondary>
              <Menu.Item
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Projects"
                active={activeItem === "Projects"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Contact"
                active={activeItem === "Contact"}
                onClick={this.handleItemClick}
              />
              </Menu>
            </div>
            <Menu.Item name="Explore" onMouseEnter={this.showOptions}>
            <Icon disabled name="arrow alternate circle left outline" /> Explore
            </Menu.Item>
          </Menu.Menu>
          </Menu>
    
    );
  }
}
export default Navbar;

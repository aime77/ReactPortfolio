import React, { Component } from "react";
import { Menu, Icon, Container } from "semantic-ui-react";

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
      <Container>
  
        <Menu pointing secondary>
          <Menu.Menu position="right">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              href="#home"
              className="navBarFont"
              style={{ opacity: this.state.showNavBarOptions ? 1 : 0 }}
            />

            <Menu.Item
              name="projects"
              active={activeItem === "projects"}
              onClick={this.handleItemClick}
              href="#portfolio"
              className="navBarFont"
              style={{ opacity: this.state.showNavBarOptions ? 1 : 0 }}
            />

            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
              href="#contactMe"
              className="navBarFont"
              style={{ opacity: this.state.showNavBarOptions ? 1 : 0 }}
            />

            <Menu.Item
              name="Explore"
              onMouseEnter={this.showOptions}
              className="navBarFont"
            >
              <Icon disabled name="arrow alternate circle left outline" />{" "}
              Explore
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
export default Navbar;

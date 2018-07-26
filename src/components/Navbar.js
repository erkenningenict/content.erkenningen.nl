import React from "react";
import Link from "gatsby-link";
import logo from "../img/BE-logo.svg";
// import classNames from "classnames";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";

// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import CSSTransition from "react-transition-group/CSSTransition";
// import menuIcon from "../img/hamburger.svg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
    // this.toggleNavbar = this.toggleNavbar.bind(this);
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <nav className="container navbar-be">
        <div className="row">
          <div className="col-md-3 pr-5">
            <Link to="/" className="navbar-brand">
              <img
                src={logo}
                alt="Bureau Erkenningen"
                style={{ width: "100%" }}
              />
            </Link>
          </div>
          <div className="col-md-9 pl-0 pt-5 pb-2 d-flex justify-content-end">
            {/*<button*/}
            {/*className="navbar-toggler"*/}
            {/*type="button"*/}
            {/*data-toggle="collapse"*/}
            {/*data-target="#navbarSupportedContent"*/}
            {/*aria-controls="navbarSupportedContent"*/}
            {/*aria-expanded="false"*/}
            {/*aria-label="Toggle navigation"*/}
            {/*onClick={this.toggleNavbar}*/}
            {/*>*/}
            {/*<span className="navbar-toggler-icon"/>*/}
            {/*</button>*/}

            <Menu mode={"horizontal"} className="mr-4">
              <MenuItem>
                <Link activeClassName="active" exact to="/">
                  Home
                </Link>
              </MenuItem>
              <SubMenu
                title={
                  <Link activeClassName="active" to="/wat-wij-doen">
                    Wat wij doen
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/wat-wij-doen/licentiehouders">
                    Licentiehouders
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/kennisaanbieders">
                    Kennisaanbieders
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/exameninstellingen">
                    Exameninstellingen
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/KBA-GB-gecertificeerde-bedrijven">
                    KBA-GB gecertificeerde bedrijven
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/formulieren">Formulieren</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/brochures">Brochures</Link>
                </MenuItem>
              </SubMenu>
              <SubMenu
                title={
                  <Link activeClassName="active" to="/licenties">
                    Licenties
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/licenties/licentiehouders">
                    Welke licenties zijn er?
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/kennisaanbieders">
                    Veiligheidsinstructies
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/exameninstellingen">
                    Welke licentie heb ik nodig?
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/KBA-GB-gecertificeerde-bedrijven">
                    Licentie aanvragen
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/KBA-GB-gecertificeerde-bedrijven">
                    Licentie verlengen
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/KBA-GB-gecertificeerde-bedrijven">
                    KBA-GB bijschrijven
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/KBA-GB-gecertificeerde-bedrijven">
                    Wetten en regels
                  </Link>
                </MenuItem>
              </SubMenu>
              <SubMenu
                title={
                  <Link activeClassName="active" to="/bijeenkomsten">
                    Bijeenkomsten
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/bijeenkomsten/licentiehouders">
                    Bijeenkomsten zoeken
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/bijeenkomsten/kennisaanbieders">
                    Bijeenkomsten organiseren
                  </Link>
                </MenuItem>
              </SubMenu>
              <SubMenu
                title={
                  <Link activeClassName="active" to="/mijn-bureau-erkenningen">
                    Mijn Bureau Erkenningen
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/mijn-bureau-erkenningen/inloggen">
                    Inloggen
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/mijn-bureau-erkenningen/inloggegevens-kwijt">
                    Inloggegevens kwijt
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>
            <form className="form-inline">
              <input
                className="form-control search-input"
                type="search"
                placeholder="Zoek op trefwoord"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

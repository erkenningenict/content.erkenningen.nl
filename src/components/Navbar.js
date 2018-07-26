import React from "react";
import Link from "gatsby-link";
import logo from "../img/BE-logo.svg";
// import classNames from "classnames";
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';

// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import CSSTransition from "react-transition-group/CSSTransition";
// import menuIcon from "../img/hamburger.svg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
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
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-be">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  alt="Bureau Erkenningen"
                  style={{ width: "233px" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.toggleNavbar}
              >
                <span className="navbar-toggler-icon" />
              </button>

              <Menu mode={'horizontal'} className="navbar-nav mr-auto">
                <MenuItem><Link activeClassName="active" exact to="/">Home</Link></MenuItem>
                <SubMenu title={<Link activeClassName="active" to="/bureau-erkenningen">Bureau Erkenningen</Link>}>
                  <MenuItem><Link to="/bureau-erkenningen/licentiehouders">Licentiehouders</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/kennisaanbieders">Kennisaanbieders</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/exameninstellingen">Exameninstellingen</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/KBA-GB-gecertificeerde-bedrijven">KBA-GB gecertificeerde bedrijven</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/formulieren">Formulieren</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/brochures">Brochures</Link></MenuItem>
                </SubMenu>
                <SubMenu title={<Link activeClassName="active" to="/licenties">Licenties</Link>}>
                  <MenuItem><Link to="/bureau-erkenningen/licentiehouders">Welke licenties zijn er?</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/kennisaanbieders">Veiligheidsinstructies</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/exameninstellingen">Welke licentie heb ik nodig?</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/KBA-GB-gecertificeerde-bedrijven">Licentie aanvragen</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/KBA-GB-gecertificeerde-bedrijven">Licentie verlengen</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/KBA-GB-gecertificeerde-bedrijven">KBA-GB bijschrijven</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/KBA-GB-gecertificeerde-bedrijven">Wetten en regels</Link></MenuItem>
                </SubMenu>
                <SubMenu title={<Link activeClassName="active" to="/bijeenkomsten">Bijeenkomsten</Link>}>
                  <MenuItem><Link to="/bureau-erkenningen/licentiehouders">Bijeenkomsten zoeken</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/kennisaanbieders">Bijeenkomsten organiseren</Link></MenuItem>
                </SubMenu>
                <SubMenu title={<Link activeClassName="active" to="/bijeenkomsten">Mijn Bureau Erkenningen</Link>}>
                  <MenuItem><Link to="/bureau-erkenningen/licentiehouders">Licentiehouders</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/kennisaanbieders">Kennisaanbieders</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/exameninstellingen">Exameninstellingen</Link></MenuItem>
                  <MenuItem><Link to="/bureau-erkenningen/KBA-GB-gecertificeerde-bedrijven">KBA-GB gecertificeerde bedrijven</Link></MenuItem>
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
            </nav>
          </div>
        </div>
      </div>
    );
  }
}


import React from "react";
import Link from "gatsby-link";
import logo from "../img/BE-logo.svg";
import classNames from "classnames";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";
import menuIcon from "../img/hamburger.svg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      showMenu: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleHover = event => {
    this.setState({ showMenu: true });
  };

  handleLeave = event => {
    this.setState({ showMenu: false });
  };

  // showMenu(event) {
  //   event.preventDefault();

  //   this.setState({ showMenu: true }, () => {
  //     document.addEventListener("click", this.closeMenu);
  //   });
  // }

  // closeMenu() {
  //   this.setState({ showMenu: false }, () => {
  //     document.removeEventListener("click", this.closeMenu);
  //   });
  // }

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

              <div
                className={classNames("collapse navbar-collapse", {
                  show: this.state.collapsed
                })}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClassName="active"
                      exact
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li
                    className="nav-item dropdown"
                    onMouseLeave={this.handleLeave}
                  >
                    <Link
                      className="nav-link"
                      to="/wat-wij-doen"
                      activeClassName="active"
                      exact
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onMouseEnter={this.handleHover}
                      // onMouseEnter={this.handleMouseHover}
                      // onMouseLeave={this.handleMouseHover}
                      onClick={this.showMenu}
                    >
                      Wat wij doen
                    </Link>
                    <div
                      className={classNames("dropdown-menu", {
                        show: this.state.showMenu
                      })}
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        className="dropdown-item"
                        activeClassName="active"
                        exact
                        to="/wat-wij-doen/over-bureau-erkenningen"
                      >
                        Over Bureau Erkenningen
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Naar home
                      </Link>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Licenties
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Bijeenkomsten
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Mijn Bureau Erkenningen
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline">
                  <input
                    className="form-control search-input"
                    type="search"
                    placeholder="Zoek op trefwoord"
                    aria-label="Search"
                  />
                </form>
              </div>
            </nav>
            <div className="navbar navbar-expand-lg navbar-be__breadcrumbs-container">
              <div className="navbar-be__breadcrumbs-spacer">
                {" ".replace(/ /g, "\u00a0")}
              </div>
              <div className="navbar-be__breadcrumbs">Breadcrumb</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <CSSTransition
//   in={this.state.showMenu}
//   classNames="fade"
//   timeout={500}
// >
//   <div>Test</div>
// </CSSTransition>

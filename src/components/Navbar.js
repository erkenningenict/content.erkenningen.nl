import React from "react";
import Link from "gatsby-link";
import logo from "../img/BE-logo.svg";
import menuIcon from "../img/hamburger.svg";

let collapseElements = document.querySelectorAll('[data-toggle="collapse"]');
const CLASS_SHOW = "show";
const CLASS_COLLAPSE = "collapse";
const CLASS_COLLAPSING = "collapsing";
const CLASS_COLLAPSED = "collapsed";
const ANIMATION_TIME = 350; // 0.35s

function handleCollapseElementClick(e) {
  // debugger;
  let el = e.currentTarget;
  let collapseTargetId = el.dataset.target || el.href || null;
  if (collapseTargetId) {
    let targetEl = document.querySelector(collapseTargetId);
    let isShown =
      targetEl.classList.contains(CLASS_SHOW) ||
      targetEl.classList.contains(CLASS_COLLAPSING);
    if (!isShown) {
      targetEl.classList.remove(CLASS_COLLAPSE);
      targetEl.classList.add(CLASS_COLLAPSING);
      targetEl.style.height = 0;
      targetEl.classList.remove(CLASS_COLLAPSED);
      // setTimeout(() => {
      //   targetEl.classList.remove(CLASS_COLLAPSING);
      //   targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
      //   targetEl.style.height = "";
      // }, ANIMATION_TIME);
      targetEl.style.height = targetEl.scrollHeight + "px";
    } else {
      targetEl.style.height = `${targetEl.getBoundingClientRect().height}px`;
      targetEl.offsetHeight; // force reflow
      targetEl.classList.add(CLASS_COLLAPSING);
      targetEl.classList.remove(CLASS_COLLAPSE, CLASS_SHOW);
      targetEl.style.height = "";
      // setTimeout(() => {
      //   targetEl.classList.remove(CLASS_COLLAPSING);
      //   targetEl.classList.add(CLASS_COLLAPSE);
      // }, ANIMATION_TIME);
    }
  }
}

collapseElements.forEach(el => {
  el.addEventListener("click", handleCollapseElementClick);
});

// constructor(props) {
//   super(props);

//   this.toggleNavbar = this.toggleNavbar.bind(this);
//   this.state = {
//     collapsed: true
//   };
// }

// toggleNavbar() {
//   this.setState({
//     collapsed: !this.state.collapsed
//   });
// }

const Navbar = () => (
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
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="/wat-wij-doen"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Wat wij doen
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                  Licenties
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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

export default Navbar;

import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/BE-logo.svg';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import './Navbar.css';
import './hamburger.css';
import Separator from './separator';

// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import CSSTransition from "react-transition-group/CSSTransition";
// import menuIcon from "../img/hamburger.svg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
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
          <div className="col-md-3 col-5 col-sm-3 pr-lg-5 pt-lg-4 minWidth">
            {!this.state.collapsed && (
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Bureau Erkenningen" style={{ width: '100%', maxWidth: '230px' }} />
              </Link>
            )}
          </div>
          <div className="col-md-9 col-7 col-sm-9 pl-sm-3 pl-lg-0 pt-lg-5 pb-2 d-flex justify-content-start flex-list">
            <Menu
              mode={this.state.collapsed ? 'inline' : 'horizontal'}
              openAnimation="slide-up"
              className={!this.state.collapsed ? 'd-none d-lg-block' : 'mr-4'}
            >
              <SubMenu
                title={
                  <Link activeClassName="active" to="/">
                    Home
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/licenties/welke-licenties-zijn-er/bestrijding-mollen-en-woelratten">Bestrijding Mollen en Woelratten</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/welke-licenties-zijn-er/gewasbescherming">Gewasbescherming</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/welke-licenties-zijn-er/knaagdierbeheersing">Knaagdierbeheersing</Link>
                </MenuItem>
              </SubMenu>
              <Separator />
              <SubMenu
                title={
                  <Link activeClassName="active" to="/wat-wij-doen">
                    Wat wij doen
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/wat-wij-doen/bureau-erkenningen">Bureau Erkenningen</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/licentiehouders">Licentiehouders</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/kennisaanbieders">Kennisaanbieders</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/exameninstellingen">Exameninstellingen</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/KBA-GB-gecertificeerde-bedrijven">KBA-GB gecertificeerde bedrijven</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/formulieren">Zelf doen - Formulieren</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/wat-wij-doen/brochures">Brochures</Link>
                </MenuItem>
              </SubMenu>
              <Separator />
              <SubMenu
                title={
                  <Link activeClassName="active" to="/licenties">
                    Licenties
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/licenties/welke-licenties-zijn-er">Welke licenties zijn er?</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/welke-licentie-heb-ik-nodig">Welke licentie heb ik nodig?</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/licentie-aanvragen">Licentie aanvragen</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/licentie-verlengen">Licentie verlengen</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/kba-gb-bijschrijven">KBA-GB bijschrijven</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/licenties/wetten-en-regels">Wetten en regels</Link>
                </MenuItem>
              </SubMenu>
              <Separator />
              <SubMenu
                title={
                  <Link activeClassName="active" to="/bijeenkomsten">
                    Bijeenkomsten
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/bijeenkomsten/bijeenkomsten-zoeken">Bijeenkomsten zoeken</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/bijeenkomsten/gevolgde-bijeenkomsten">Gevolgde bijeenkomsten</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/bijeenkomsten/bijeenkomsten-organiseren">Bijeenkomsten organiseren</Link>
                </MenuItem>
              </SubMenu>
              <Separator />
              <SubMenu
                title={
                  <Link activeClassName="active" to="/mijn-bureau-erkenningen">
                    Mijn Bureau Erkenningen
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/mijn-bureau-erkenningen/inloggen">Inloggen</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/mijn-bureau-erkenningen/inloggegevens-kwijt">Inloggegevens kwijt</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/mijn-bureau-erkenningen/duplicaat-pas-aanvragen">Duplicaat pas aanvragen</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/mijn-bureau-erkenningen/be-app">Gebruik onze app</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
            <form className="form-inline searchForm">
              <input className="form-control search-input" type="search" placeholder="Zoek op trefwoord" aria-label="Search" />
            </form>
            <button
              className={`d-lg-none hamburger hamburger--slider ${this.state.collapsed ? 'is-active' : ''}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleNavbar}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

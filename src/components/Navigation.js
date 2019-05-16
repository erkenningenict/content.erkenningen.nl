import React from 'react';
import { Link, navigate } from 'gatsby';
import logo from '../img/BE-logo.svg';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import './hamburger.css';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.menuItems = [
      {
        name: 'Home',
        link: '/',
        items: [
          {
            name: 'Bestrijding Mollen en Woelratten',
            link: '/licenties/welke-licenties-zijn-er/bestrijding-mollen-en-woelratten',
          },
          {
            name: 'Gewasbescherming',
            link: '/licenties/welke-licenties-zijn-er/gewasbescherming',
          },
          {
            name: 'Knaagdierbeheersing',
            link: '/licenties/welke-licenties-zijn-er/knaagdierbeheersing',
          },
        ],
      },
      {
        name: 'Wat wij doen',
        link: '/wat-wij-doen',
        items: [
          {
            name: 'Bureau Erkenningen',
            link: '/wat-wij-doen/bureau-erkenningen',
          },
          {
            name: 'Licentiehouders',
            link: '/wat-wij-doen/licentiehouders',
          },
          {
            name: 'Kennisaanbieders',
            link: '/wat-wij-doen/kennisaanbieders',
          },
          {
            name: 'Exameninstellingen',
            link: '/wat-wij-doen/exameninstellingen',
          },
          {
            name: 'KBA-GB gecertificeerde bedrijven',
            link: '/wat-wij-doen/KBA-GB-gecertificeerde-bedrijven',
          },
          {
            name: 'Zelf doen - Formulieren',
            link: '/wat-wij-doen/formulieren',
          },
          {
            name: 'Brochures',
            link: '/wat-wij-doen/brochures',
          },
        ],
      },
      {
        name: 'Licenties',
        link: '/licenties',
        items: [
          {
            name: 'Welke licenties zijn er?',
            link: '/licenties/welke-licenties-zijn-er',
          },
          {
            name: 'Welke licentie heb ik nodig?',
            link: '/licenties/welke-licentie-heb-ik-nodig',
          },
          {
            name: 'Licentie aanvragen',
            link: '/licenties/licentie-aanvragen',
          },
          {
            name: 'Licentie verlengen',
            link: '/licenties/licentie-verlengen',
          },
          {
            name: 'KBA-GB bijschrijven',
            link: '/licenties/kba-gb-bijschrijven',
          },
          {
            name: 'Wetten en regels',
            link: '/licenties/wetten-en-regels',
          },
        ],
      },
      {
        name: 'Bijeenkomsten',
        link: '/bijeenkomsten',
        items: [
          {
            name: 'Bijeenkomsten zoeken',
            link: '/bijeenkomsten/bijeenkomsten-zoeken',
          },
          {
            name: 'Gevolgde bijeenkomsten',
            link: '/bijeenkomsten/gevolgde-bijeenkomsten',
          },
          {
            name: 'Bijeenkomsten organiseren',
            link: '/bijeenkomsten/bijeenkomsten-organiseren',
          },
        ],
      },
      {
        name: 'Mijn Bureau Erkenningen',
        link: '/mijn-bureau-erkenningen',
        items: [
          {
            name: 'Inloggen',
            link: '/mijn-bureau-erkenningen/inloggen',
          },
          {
            name: 'Inloggegevens kwijt',
            link: '/mijn-bureau-erkenningen/inloggegevens-kwijt',
          },
          {
            name: 'Duplicaat pas aanvragen',
            link: '/mijn-bureau-erkenningen/duplicaat-pas-aanvragen',
          },
          {
            name: 'Gebruik onze app',
            link: '/mijn-bureau-erkenningen/be-app',
          },
        ],
      },
    ];
  }

  render() {
    return (
      <div>
        <nav className="container navbar-be">
          <Navbar expand="lg" collapseOnSelect className="col-12 d-flex d-lg-none pl-0 pr-0 pt-3">
            <Link to="/" className="col-8 pl-0">
              <img
                src={logo}
                alt="Bureau Erkenningen"
                className="mb-0"
                style={{ width: '100%', maxWidth: '150px' }}
              />
            </Link>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="d-lg-none hamburger hamburger--slider"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {this.menuItems.map(item => {
                  if (item.items.length) {
                    return (
                      <NavDropdown key={item.name} title={item.name}>
                        <Nav.Link href={item.link}>{item.name}</Nav.Link>
                        {item.items.map(subItem => {
                          return (
                            <Nav.Link key={subItem.name} href={subItem.link}>
                              {subItem.name}
                            </Nav.Link>
                          );
                        })}
                      </NavDropdown>
                    );
                  } else {
                    <Nav.Link href={item.link}>{item.name}</Nav.Link>;
                  }
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="row d-none d-lg-flex">
            <div className="col-md-5 col-5 col-sm-5 col-lg-3 pr-lg-5 pt-lg-4 minWidth">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  alt="Bureau Erkenningen"
                  style={{ width: '100%', maxWidth: '230px' }}
                />
              </Link>
            </div>
            <div className="col-4 col-lg-9 col-md-4 col-sm-4 col-xs-4 pl-sm-3 pl-lg-0 pt-lg-5 pb-2 d-flex justify-content-start flex-list">
              <Menu mode="horizontal" openAnimation="slide-up" className="d-none d-lg-block">
                {this.menuItems.map(item => {
                  if (item.items.length) {
                    return (
                      <SubMenu
                        key={item.name}
                        title={
                          <Link activeClassName="active" to={item.link}>
                            {item.name}
                          </Link>
                        }
                      >
                        {item.items.map(subItem => {
                          return (
                            <MenuItem key={subItem.name}>
                              <Link to={subItem.link}>{subItem.name}</Link>
                            </MenuItem>
                          );
                        })}
                      </SubMenu>
                    );
                  } else {
                    <MenuItem>
                      <Link to={item.link}>{item.name}</Link>
                    </MenuItem>;
                  }
                })}
              </Menu>
              <form
                className="form-inline searchForm"
                onSubmit={e => {
                  e.preventDefault();
                  navigate('/zoeken', {
                    state: { search: this.state.search },
                  });
                  this.setState({ search: '' });
                }}
              >
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Zoek op trefwoord"
                  aria-label="Search"
                  onChange={e => this.setState({ search: e.target.value })}
                  value={this.state.search}
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

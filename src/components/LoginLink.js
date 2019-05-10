import React from 'react';
import Link from 'gatsby-link';

export default class MyComponent extends React.Component {
  render() {
    // TODO Add check if user is logged in and then show name with link to profile
    const isLoggedIn = false;
    return (
      <div>
        {isLoggedIn ? (
          <Link to="/link/to/profile">A.B. Achternaam</Link>
        ) : (
          <Link to="/mijn-bureau-erkenningen/inloggen">Inloggen</Link>
        )}
      </div>
    );
  }
}

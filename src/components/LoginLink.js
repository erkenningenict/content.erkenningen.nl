import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby'
import Axios from 'axios';

import { ERKENNINGEN_GRAPHQL_API_URL, ERKENNINGEN_ADMIN_URL } from '@erkenningen/config';

// Create a login context to provide global login state
const LoginContext = React.createContext({ isLoggedIn: false, name: '', ready: false });

export const LoginProvider = (props) => {
  const [state, setState] = useState({ isLoggedIn: false, name: '', ready: false });

  useEffect(() => {
    if (state.ready) {
      return;
    }
    Axios.post(
      ERKENNINGEN_GRAPHQL_API_URL,
      {
        operationName: null,
        variables: {},
        query: '{ my { Persoon { PersoonID Voorletters Tussenvoegsel Achternaam } } } ',
      },
      {
        withCredentials: true,
      },
    )
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          response.data.data.my &&
          response.data.data.my.Persoon
        ) {
          const person = response.data.data.my.Persoon;
          setState({
            isLoggedIn: true,
            ready: true,
            name: person.Voorletters + ' ' + (person.Tussenvoegsel || '') + person.Achternaam,
          });
        } else {
          setState({ isLoggedIn: false, ready: true });
        }
      })
      .catch(() => {
        setState({ isLoggedIn: false, ready: true });
      });
  }, []);

  return <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>;
};

const LoginLink = () => {
  const state = useContext(LoginContext);

  if (!state || !state.ready) {
    return null;
  }

  return (
    <div>
      {state.isLoggedIn ? (
        <a href={ERKENNINGEN_ADMIN_URL + '/Default.aspx?tabid=143'}>{state.name}</a>
      ) : (
        <Link to="/mijn-bureau-erkenningen/inloggen">Inloggen</Link>
      )}
    </div>
  );
};

export default LoginLink;

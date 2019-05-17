import React from 'react';
import Link from 'gatsby-link';
import Axios from 'axios';

export default class LoginLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, name: '', loading: true };
  }

  componentDidMount() {
    Axios.post(process.env.GATSBY_API_URL, {
      operationName: null,
      variables: {},
      query: '{ my { Persoon { PersoonID Voorletters Tussenvoegsel Achternaam } } } ',
    })
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          response.data.data.my &&
          response.data.data.my.Persoon
        ) {
          const person = response.data.data.my.Persoon;
          this.setState({
            isLoggedIn: true,
            loading: false,
            name: person.Voorletters + ' ' + (person.Tussenvoegsel || '') + person.Achternaam,
          });
        } else {
          this.setState({ isLoggedIn: false, loading: false });
        }
      })
      .catch((error) => {});
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <div>
        {this.state.isLoggedIn ? (
          <a href={process.env.GATSBY_DNN_URL + '/Default.aspx?tabid=143'}>{this.state.name}</a>
        ) : (
          <Link to="/mijn-bureau-erkenningen/inloggen">Inloggen</Link>
        )}
      </div>
    );
  }
}

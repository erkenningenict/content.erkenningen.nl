import React from 'react';

import { ERKENNINGEN_ADMIN_URL } from '@erkenningen/config';

export default class Redirect extends React.Component {
  render() {
    // Wrap the require in check for window
    if (typeof window === 'undefined') {
      return null;
    }

    let href = this.props.children.length && this.props.children[0];

    if (!href) {
      href = '/';
    }

    if (this.props.admin === 'true') {
      href = ERKENNINGEN_ADMIN_URL + href;
    }

    window.location.href = href;

    return <p>Bezig met doorverwijzen...</p>;
  }
}

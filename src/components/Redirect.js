import React from 'react';

export default class Redirect extends React.Component {
  render() {
    // Wrap the require in check for window
    if (typeof window === 'undefined') {
      return null;
    }

    window.location.href =
      this.props.children.length &&
      this.props.children[0].props &&
      this.props.children[0].props.href;
    return <p>Bezig met doorverwijzen...</p>;
  }
}

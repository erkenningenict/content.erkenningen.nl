import React from 'react';

export default class Redirect extends React.Component {
  render() {
    window.location.href =
      this.props.children.length &&
      this.props.children[0].props &&
      this.props.children[0].props.href;
    return <p>Bezig met doorverwijzen...</p>;
  }
}

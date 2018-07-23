import React from "react";

export default class LinkContainer extends React.Component {
  render() {
    return <div className="link-container">{this.props.children}</div>;
  }
}

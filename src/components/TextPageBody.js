import React from 'react';
import rehypeReact from 'rehype-react';
import { DecisionTree, LinkButton, LinkButtonContainer } from '@erkenningen/ui';

import Redirect from './Redirect';

const hasWindow = typeof window !== 'undefined';

class Placeholder extends React.Component {
  render() {
    return <div />;
  }
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'link-container': hasWindow ? LinkButtonContainer : Placeholder,
    'link-button': hasWindow ? LinkButton : Placeholder,
    'decision-tree': hasWindow ? DecisionTree : Placeholder,
    redirect: Redirect,
  },
}).Compiler;

class TextPageBody extends React.Component {
  render() {
    return <div className={this.props.className}>{renderAst(this.props.htmlAst)}</div>;
  }
}

export default TextPageBody;

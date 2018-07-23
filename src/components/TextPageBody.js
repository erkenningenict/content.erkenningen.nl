import React from "react";
import styled from "styled-components";
import rehypeReact from "rehype-react";

import LinkContainer from "./LinkContainer";
import LinkButton from "./LinkButton";
// import ZoomImage from './ZoomImage';
// import Hidden from './Hidden';
// import CountUp from './CountUp';
// import RainbowKnot from './RainbowKnot';
// import MarkdownRenderer from './MarkdownRenderer';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "link-container": LinkContainer,
    "link-button": LinkButton
    // hidden: Hidden
    // countup: CountUp,
    // rainbowknot: RainbowKnot,
    // markdownrenderer: MarkdownRenderer
  }
}).Compiler;

class TextPageBody extends React.Component {
  render() {
    return <div>{renderAst(this.props.htmlAst)}</div>;
  }
}

export default TextPageBody;

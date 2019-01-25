import React from "react";
import rehypeReact from "rehype-react";

import LinkContainer from "./LinkContainer";
import LinkButton from "./LinkButton";

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
    return (
      <div className={this.props.className}>
        {renderAst(this.props.htmlAst)}
      </div>
    );
  }
}

export default TextPageBody;

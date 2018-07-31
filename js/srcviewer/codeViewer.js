/**
 * Component that visualize source code
 *
 */

import React from 'react';
import {List, ListItem, NestedList} from 'material-ui/List';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

const styles = {
  codestyle : {
    textAlign: 'left'
  }
}


class CodeViewer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("Updating " + this.props.srcText)
    if (this.props.srcText == null) {
      return <span>No Code</span>
    } else {
      return <div style={styles.codestyle}>

  <SyntaxHighlighter
    language='Java'
    showLineNumbers={true}
    wrapLines={false}
    startingLineNumber={1}
    style={github}
    lineProps={ (lineNumber) => {
      if (this.props.added.indexOf(lineNumber) > -1) {
        return {style : {display: 'block',
                         cursor: "pointer",
                         backgroundColor : '#dbffdb'}};
      } else if (this.props.removed.indexOf(lineNumber) > -1) {
        return {style : {display: 'block',
                         cursor: "pointer",
                         backgroundColor : '#ffecec'}};
      } else if (this.props.matched.indexOf(lineNumber) > -1) {
        return {style : {display: 'block',
                         cursor: "pointer",
                         backgroundColor : '#f4ce42'}};
      } else {
        return {}
      }
    }}
  >{this.props.srcText}</SyntaxHighlighter>
</div>
    }
  }
}

export default CodeViewer;

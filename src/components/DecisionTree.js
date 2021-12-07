import axios from 'axios';
import React, { Component } from 'react';
import parse from 'html-react-parser';

// export interface IDecisionTreeProps {
//   nodes: IDecisionNode[];
//   file?: string;
//   backLabel?: string;
//   resetLabel?: string;
//   answersLabel?: string;
// }

// export interface IDecisionNode {
//   id: number;
//   text: string;
//   actions?: IDecisionAction[];
//   answer?: string;
// }

// export interface IDecisionAction {
//   text: string;
//   nodeId: number;
// }

// export interface IDecisionTreeState {
//   currentNode: IDecisionNode;
//   nodeHistory: IDecisionNode[];
//   nodes: IDecisionNode[];
// }

// class DecisionTree extends Component<IDecisionTreeProps, IDecisionTreeState> {
class DecisionTree extends Component {
  // public static defaultProps: IDecisionTreeProps = {
  static defaultProps = {
    nodes: [],
  };

  // constructor(props: any) {
  constructor(props) {
    super(props);

    this.state = {
      currentNode: props.nodes[0],
      nodeHistory: [],
      nodes: props.nodes,
    };

    // Load external json file if set
    if (this.props.file) {
      axios
        .get(this.props.file)
        // .then((response: AxiosResponse) => {
        .then((response) => {
          if (response.status !== 200) {
            return;
          }
          this.setState({ nodes: response.data, currentNode: response.data[0] });
        })
        .catch(() => null);
    }
  }
  render() {
    if (!this.state.currentNode) {
      return null;
    }
    // Render current node with actions
    return (
      <div className="decision-tree">
        <div
          className={
            'node' +
            (this.state.currentNode.actions && this.state.currentNode.actions.length > 0
              ? ''
              : ' final')
          }>
          <div className="text">{parse(this.state.currentNode.text)}</div>
          {this.state.currentNode.actions && this.state.currentNode.actions.length > 0 ? (
            <div className="actions" key={this.state.currentNode.id}>
              {/* {this.state.currentNode.actions.map((action: IDecisionAction) => { */}
              {this.state.currentNode.actions.map((action) => {
                return (
                  <div className="action" key={action.nodeId} onClick={() => this.doAction(action)}>
                    {parse(action.text)}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {this.state.nodeHistory.length > 0 ? (
          <div>
            <div className="nav mt-3">
              <button className="decisionButton" type="button" onClick={() => this.goToPrevNode()}>
                {this.props.backLabel || 'Terug'}
              </button>
              <button className="decisionButton" type="button" onClick={() => this.reset()}>
                {this.props.resetLabel || 'Start opnieuw'}
              </button>
            </div>
            <div className="answers">
              <h4>{this.props.answersLabel || 'Antwoorden:'}</h4>
              {/* {this.state.nodeHistory.map((node: IDecisionNode) => { */}
              {this.state.nodeHistory.map((node) => {
                return (
                  <div className="answer" key={node.id}>
                    {parse(node.text)}: <b>{parse(node.answer || '')}</b>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  // private getNodeById(id: number): IDecisionNode | undefined {
  getNodeById(id) {
    return this.state.nodes.find((node) => node.id === id);
  }

  // private doAction(action: IDecisionAction): any {
  doAction(action) {
    const node = this.getNodeById(action.nodeId);
    if (!node) {
      return;
    }
    this.setState((prevState) => ({
      currentNode: node,
      nodeHistory: [...prevState.nodeHistory, { ...prevState.currentNode, answer: action.text }],
    }));
  }

  // private goToPrevNode(): any {
  goToPrevNode() {
    if (this.state.nodeHistory.length === 0) {
      return;
    }
    this.setState({
      currentNode: this.state.nodeHistory[this.state.nodeHistory.length - 1],
      nodeHistory: this.state.nodeHistory.slice(0, this.state.nodeHistory.length - 1),
    });
  }

  // private reset(): any {
  reset() {
    this.setState({ currentNode: this.state.nodes[0], nodeHistory: [] });
  }
}

export default DecisionTree;

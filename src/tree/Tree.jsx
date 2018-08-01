import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import DefaultTreeLeaf from './TreeLeaf';

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.toggleNode = this.toggleNode.bind(this);
  }

  toggleNode(node) {
    let treeData = [...this.state.data];
    const toggledNode = this._findNodeById(treeData, node.id);
    if (toggledNode) {
      toggledNode.toggled = !toggledNode.toggled;
      this.setState({ data: treeData });
    }
  }

  _findNodeById(nodes, id) {
    for (let n of nodes) {
      if (n.id === id) {
        return n;
      } else if (n.children) {
        return this._findNodeById(n.children, id);
      }
    }
  }

  render() {
    const { data } = this.state;
    const { renderLeaf } = this.props;

    return (
      <ul>
        {data.map((node, index) => (
          <TreeNode
            key={node.id || index}
            node={{ ...node }}
            renderLeaf={renderLeaf}
            toggle={this.toggleNode}
          />
        ))}
      </ul>
    );
  }
}

Tree.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object.isRequired),
      name: PropTypes.string
    })
  ).isRequired,
  renderLeaf: PropTypes.func,
  toggle: PropTypes.func.isRequired
};

Tree.defaultProps = {
  renderLeaf: node => <DefaultTreeLeaf node={node} />
};

export default Tree;

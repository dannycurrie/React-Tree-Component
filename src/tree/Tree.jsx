import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import DefaultTreeLeaf from './TreeLeaf';

const Tree = ({ data, renderLeaf }) => (
  <ul>
    {data.map((node, index) => (
      <TreeNode
        key={node.id || index}
        node={{ ...node, toggled: true }}
        renderLeaf={renderLeaf}
      />
    ))}
  </ul>
);

Tree.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object.isRequired),
      name: PropTypes.string
    })
  ).isRequired,
  renderLeaf: PropTypes.func
};

Tree.defaultProps = {
  renderLeaf: node => <DefaultTreeLeaf node={node} />
};

export default Tree;

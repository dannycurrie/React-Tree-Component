import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTreeNode = styled.li`
  padding-top: 9px;
  list-style-type: none;
`;

const TreeNode = ({ node, renderLeaf }) => {
  const renderChildren = () => (
    <ul>
      {node.children.map((child, index) => (
        <TreeNode
          key={child.id || index}
          node={{ ...child, toggled: true }}
          renderLeaf={renderLeaf}
        />
      ))}
    </ul>
  );

  const renderDrawer = () => (
    <div>{node.children && node.toggled ? renderChildren() : null}</div>
  );

  return (
    <StyledTreeNode>
      {renderLeaf(node)}
      {renderDrawer()}
    </StyledTreeNode>
  );
};

TreeNode.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object.isRequired),
    name: PropTypes.string
  }).isRequired,
  renderLeaf: PropTypes.func.isRequired
};

export default TreeNode;

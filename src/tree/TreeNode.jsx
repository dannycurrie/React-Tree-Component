import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTreeNode = styled.li`
  padding-top: 9px;
  list-style-type: none;
`;

const TreeNode = ({ node, renderLeaf, toggle }) => {
  const onClick = e => {
    e.stopPropagation();
    toggle(node);
  };

  const renderChildren = () => (
    <ul>
      {node.children.map((child, index) => (
        <TreeNode
          key={child.id || index}
          node={{ ...child }}
          renderLeaf={renderLeaf}
          toggle={toggle}
        />
      ))}
    </ul>
  );

  const renderDrawer = () => (
    <div>{node.children && node.toggled ? renderChildren() : null}</div>
  );

  return (
    <StyledTreeNode onClick={onClick}>
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
  renderLeaf: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

export default TreeNode;

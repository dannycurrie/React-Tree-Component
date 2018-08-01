import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tree from './Tree';

const StyledTree = styled.div`
  padding: 16px 16px;
  text-align: left;
`;

const StyledTreeLeaf = styled.span``;

const renderLeaf = node => <StyledTreeLeaf>{node.name}</StyledTreeLeaf>;

const AddToCollectionTree = ({ collections }) => (
  <StyledTree>
    <Tree data={collections} renderLeaf={renderLeaf} />
  </StyledTree>
);

AddToCollectionTree.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object.isRequired),
      name: PropTypes.string
    })
  ).isRequired
};

export default AddToCollectionTree;

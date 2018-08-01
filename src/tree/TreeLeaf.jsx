import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTreeLabel = styled.span``;

const TreeLeaf = ({ node }) => <StyledTreeLabel>{node.name}</StyledTreeLabel>;

TreeLeaf.propTypes = {
  node: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
};

export default TreeLeaf;

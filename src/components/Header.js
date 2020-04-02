import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  width: 300px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: 12rem;
  background: linear-gradient(138deg, #dfa456, #793817, #ae0e60, #dfa456);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 0.6;
  padding-bottom: 1rem;
`;

const H3 = styled.h3`
  background: #ae0e60bf;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  padding: 3px;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  display: inline-block;
`;

const Header = ({ tagline }) => (
  <StyledHeader>
    <H1>The Classic Lunchbox</H1>
    <H3 className="tagline">
      <span>{tagline}</span>
    </H3>
  </StyledHeader>
);

Header.propType = {
  tagline: PropTypes.string.isRequired
};

export default Header;

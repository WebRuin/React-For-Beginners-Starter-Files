import React from 'react';
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
  background: #ae0e60;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  padding: 3px;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  display: inline-block;

  /* & span {
    background: #fff;
    position: relative;
    z-index: 2;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  &:before,
  &:after {
    display: block;
    z-index: 1;
    background: #793817;
    position: absolute;
    width: 130%;
    height: 2px;
    content: '';
    top: 8px;
    margin-left: -15%;
  }
  &:after {
    top: auto;
    bottom: 8px;
  } */
`;

const Header = ({ tagline }) => (
  <StyledHeader>
    <H1>The Classic Lunchbox</H1>
    <H3 className="tagline">
      <span>{tagline}</span>
    </H3>
  </StyledHeader>
);

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonWrapper = styled.span`
  button {
    text-transform: uppercase;
    color: #fff;
    padding-top: 5px;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Quicksand', 'Raleway', sans-serif;
    transition: all 0.2s;
    position: relative;
    z-index: 2;

    &[disabled] {
      opacity: 0.5;
    }
    &[disabled]:hover {
      cursor: not-allowed;
    }
    &:hover,
    &:focus {
      outline: 0;
    }
    &:hover:after,
    &:focus:after {
      height: 100%;
    }
    &.github,
    &.facebook,
    &.twitter {
      border: 0;
      display: block;
      margin-bottom: 2rem;
      width: 100%;
      color: #fff;
      padding: 1rem;
    }
    &.github {
      background: #82d465;
    }
    &.github:after {
      background: #5cc437;
    }
    &.facebook {
      background: #3864a3;
    }
    &.facebook:break-after {
      background: #2d5082;
    }
    &.twitter {
      background: #5ea9dd;
    }
    &.twitter:after {
      background: #2c8dd0;
    }
  }
`;

const Button = props => (
  <StyledButtonWrapper>
    <button
      className={props.buttonClass}
      disabled={props.isDisabled}
      onClick={() => props.authenticate(`${props.service}`)}
    >
      {props.children}
    </button>
  </StyledButtonWrapper>
);

Button.propType = {
  authenticate: PropTypes.func.isRequired,
  buttonClass: PropTypes.string,
  children: PropTypes.element.isRequired,
  isDisabled: PropTypes.bool,
  service: PropTypes.string
};

Button.defaultProp = {
  isDisabled: false
};

export default Button;

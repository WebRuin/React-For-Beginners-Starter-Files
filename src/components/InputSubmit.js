import React from 'react';
import styled from 'styled-components';

const StyledInputSubmit = styled.button`
  text-transform: uppercase;
  background: none;
  border: 1px solid #000;
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Open Sans';
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  z-index: 2;

  &[type='submit'][disabled] {
    color: #d12028;
    background: #fff;
    border-color: #d12028;
    -webkit-transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
    transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
  }
  &[type='submit'][disabled]:hover {
    color: #d12028;
    cursor: not-allowed;
  }
  &[type='submit'][disabled]:after {
    display: none;
  }
  &[type='submit']:after {
    content: '';
    z-index: -1;
    display: block;
    background: #000;
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  &[type='submit']:hover,
  &[type='submit']:focus {
    color: #fff;
    outline: 0;
  }
  &[type='submit']:hover:after,
  &[type='submit']:focus:after {
    height: 100%;
  }
  &[type='submit'].warning:after {
    background: #d12028;
  }
  &[type='submit'].success:after {
    background: #2dc22d;
  }
  &[type='submit'].github,
  &[type='submit'].facebook,
  &[type='submit'].twitter {
    border: 0;
    display: block;
    margin-bottom: 2rem;
    width: 100%;
    color: #fff;
    padding: 2rem;
  }
  &[type='submit'].github {
    background: #82d465;
  }
  &[type='submit'].github:after {
    background: #5cc437;
  }
  &[type='submit'].facebook {
    background: #3864a3;
  }
  &[type='submit'].facebook:after {
    background: #2d5082;
  }
  &[type='submit'].twitter {
    background: #5ea9dd;
  }
  &input[type='submit'].twitter:after {
    background: #2c8dd0;
  }
`;

const InputSubmit = props => (
  <StyledInputSubmit>{props.children}</StyledInputSubmit>
);

export default InputSubmit;

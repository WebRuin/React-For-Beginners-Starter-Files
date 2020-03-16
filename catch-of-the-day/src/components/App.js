import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Pbj from './Pbj';

const LunchBox = styled.div`
  display: -webkit-box;
  display: flex;
  height: 90vh;
  max-width: 95vw;
  margin: 0 auto;
  margin-top: 5vh;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  & > * {
    -webkit-box-flex: 1;
    flex: 1 4 auto;
    padding: 2rem;
    box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
      0 0 0 16px #dfa456;
    position: relative;
    background: #fff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    overflow: scroll;
  }
  & > *:first-child {
    flex-shrink: 1;
    flex-basis: 50%;
    -webkit-transform: translateX(50%) rotateY(6deg) translateX(-50%);
    transform: translateX(50%) rotateY(6deg) translateX(-50%);
  }
  & > *:nth-child(2) {
    -webkit-transform: translateX(-50%) rotateY(-14deg) translateX(50%);
    transform: translateX(-50%) rotateY(-14deg) translateX(50%);
    border-left: 0;
    border-right: 0;
    min-width: 300px;
  }
  & > *:last-child {
    flex-shrink: 1;
    flex-basis: 50%;
    -webkit-transform: translateX(-50%) rotateY(10deg) translateX(50%)
      scale(1.08) translateX(24px);
    transform: translateX(-50%) rotateY(10deg) translateX(50%) scale(1.08)
      translateX(24px);
  }
  & {
    display: -webkit-box;
    display: flex;
    height: 90vh;
    max-width: 95vw;
    margin: 0 auto;
    margin-top: 5vh;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  & > * {
    -webkit-box-flex: 1;
    flex: 1 4 auto;
    padding: 2rem;
    box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
      0 0 0 16px #dfa456;
    position: relative;
    background: #fff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    /* box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); */
    overflow: scroll;
  }
  & > *:first-child {
    flex-shrink: 1;
    flex-basis: 50%;
    -webkit-transform: translateX(50%) rotateY(6deg) translateX(-50%);
    transform: translateX(50%) rotateY(6deg) translateX(-50%);
  }
  & > *:nth-child(2) {
    -webkit-transform: translateX(-50%) rotateY(-14deg) translateX(50%);
    transform: translateX(-50%) rotateY(-14deg) translateX(50%);
    border-left: 0;
    border-right: 0;
    min-width: 300px;
  }
  & > *:last-child {
    flex-shrink: 1;
    flex-basis: 50%;
    -webkit-transform: translateX(-50%) rotateY(10deg) translateX(50%)
      scale(1.08) translateX(24px);
    transform: translateX(-50%) rotateY(10deg) translateX(50%) scale(1.08)
      translateX(24px);
  }
`;

const App = () => {
  return (
    <LunchBox>
      <div className="menu">
        <Header tagline="A new take on the quintessential sandwich!" />
        <Pbj />
        <Pbj />
        <Pbj />
        <Pbj />
      </div>
      <Order />
      <Inventory />
    </LunchBox>
  );
};

export default App;

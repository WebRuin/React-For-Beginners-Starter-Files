import React from 'react';
import styled from 'styled-components';

import { formatPrice } from '../helpers';

const StyledPbj = styled.li`
  border-top: 1px solid #dfa456;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-bottom: 5px;
  clear: both;
  overflow: hidden;
  position: relative;

  & h3 {
    font-size: 2rem;
  }

  & p {
    margin: 0;
    font-size: 1.6rem;
  }
  & .name {
    margin: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }
  & .price {
    font-size: 1.4rem;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  & img {
    float: left;
    width: 150px;
    margin-right: 1rem;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    background: #793817;
    border: 1px solid #793817;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Quicksand', 'Raleway', sans-serif;
    transition: all 0.2s;
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;

    &[disabled] {
      color: #d12028;
      background: #fff;
      border-color: #d12028;
      transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
      right: 50%;
    }
    &[disabled]:hover {
      color: #d12028;
      cursor: not-allowed;
    }
    &:hover,
    &:focus {
      outline: 0;
      color: #793817;
      background: #fff;
      border: 1px solid #793817;
    }
    &:hover:after,
    &:focus:after {
      height: 100%;
    }
    &.warning:after {
      background: #d12028;
    }
    &.success:after,
    input[type='submit'].success:after {
      background: #2dc22d;
    }
    &.github,
    &.facebook,
    &.twitter {
      border: 0;
      display: block;
      margin-bottom: 2rem;
      width: 100%;
      color: #fff;
      padding: 2rem;
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

const Pbj = props => {
  const { desc, image, name, price, status } = props.sandwich;
  const isAvailable = status === 'available';

  return (
    <StyledPbj>
      <img src={image} alt={name} className="img" />
      <h3 className="name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        onClick={() => props.addToOrder(props.index)}
        disabled={!isAvailable}
      >
        {isAvailable ? 'Add To Order' : 'Sold Out!'}
      </button>
    </StyledPbj>
  );
};

export default Pbj;

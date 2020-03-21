import React from 'react';
import styled from 'styled-components';

import { formatPrice } from '../helpers';

const StyledOrder = styled.div`
  border: 2px solid #793817;

  ul li {
    border-bottom: 1px solid #dfa456;
    padding: 2rem 5px;
    display: -webkit-box;
    display: flex;
    font-size: 1.4rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
  }
  ul li:hover button {
    display: inline;
  }
  ul li button {
    border: 0;
    display: none;
    line-height: 1;
    padding: 0;
  }
  ul li.unavailable {
    text-decoration: line-through;
    background: #f8d0d2;
  }
  ul li .price {
    font-size: 1.2rem;
  }
  ul li span.count {
    position: relative;
    overflow: hidden;
    float: left;
  }
  ul li span.count span {
    display: inline-block;
  }
  .total {
    color: #fff;
    padding: 2rem 0;
    font-size: 1.4rem;
    background: #ae0e60bf;
    padding-right: 5px;
  }
  .total strong {
    float: right;
  }
  .order-title {
    text-align: center;
  }
`;

class Order extends React.Component {
  renderOrder = key => {
    console.log(key);
    const sandwich = this.props.sandwiches[key];
    const count = this.props.order[key];
    const isAvailable = sandwich && sandwich.status === 'available';
    if (!sandwich) return null;
    if (isAvailable) {
      return (
        <li key={key}>
          ({count}){sandwich.name}:{' '}
          <strong>{formatPrice(count * sandwich.price)}</strong>
        </li>
      );
    }
    return (
      <li key={key}>
        Sorry, {sandwich ? sandwich.name : 'sandwich'} is not currently
        available. 😞
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const sandwich = this.props.sandwiches[key];
      const count = this.props.order[key];
      const isAvailable = sandwich && sandwich.status === 'available';
      if (isAvailable) {
        return prevTotal + count * sandwich.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <StyledOrder>
          <ul className="order">{orderIds.map(this.renderOrder)}</ul>
          <div className="total">
            <strong>Total:{` ${formatPrice(total)}`}</strong>
          </div>
        </StyledOrder>
      </div>
    );
  }
}

export default Order;

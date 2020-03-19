import React from 'react';
import styled from 'styled-components';

import { formatPrice } from '../helpers';

const StyledOrder = styled.div`
  ul.order li {
    border-bottom: 1px solid #000;
    padding: 2rem 0;
    display: -webkit-box;
    display: flex;
    font-size: 1.4rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }
  ul.order li:hover button {
    display: inline;
  }
  ul.order li button {
    border: 0;
    display: none;
    line-height: 1;
    padding: 0;
  }
  ul.order li.unavailable {
    text-decoration: line-through;
    background: #f8d0d2;
  }
  ul.order li .price {
    font-size: 1.2rem;
  }
  ul.order li span.count {
    position: relative;
    overflow: hidden;
    float: left;
  }
  ul.order li span.count span {
    display: inline-block;
  }
  .total {
    padding: 2rem 0;
    font-size: 1.4rem;
    border-bottom: 3px solid #000;
    border-top: 3px double #000;
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
    return (
      <li key={key}>{`${count} ${sandwich.name}: ${formatPrice(
        count * sandwich.price
      )}`}</li>
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
        <StyledOrder>
          <h2>Your Order</h2>
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

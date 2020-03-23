import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

  .order-enter {
    transform: translateX(-120%);
    transition: 0.5s;
    max-height: 0;
    padding: 0 !important;

    &.order-enter-active {
      max-height: 60px;
      transform: translateX(0);
      padding: 2rem 0 !important;
    }
  }

  .order-exit {
    transition: 0.5s;
    transform: translateX(0);

    &.order-exit-active {
      transform: translateX(120%);
      padding: 0;
    }
  }

  .count-enter {
    background: red;
    transition: 0.25s;
    transform: translateY(100%);

    &.count-enter-active {
      background: yellow transform translateY(0);
    }
  }

  .count-exit {
    transform: translateY(0);
    transition: 0.25s;
    position: absolute;
    left: 0;
    bottom: 0;

    &.count-exit-active {
      transform: translateY(-100%) scale(1.5);
    }
  }

  .delete {
    position: absolute;
    right: 30px;
    color: #ae0e60;
  }
`;

class Order extends React.Component {
  renderOrder = key => {
    console.log(key);
    const sandwich = this.props.sandwiches[key];
    const count = this.props.order[key];
    const isAvailable = sandwich && sandwich.status === 'available';
    const transitionsOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 }
    };

    if (!sandwich) return null;
    if (isAvailable) {
      return (
        <CSSTransition {...transitionsOptions}>
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={count}
                  timeout={{ enter: 250, exit: 250 }}
                >
                  <span>{count}</span>
                </CSSTransition>
              </TransitionGroup>
              {` ${sandwich.name}  `}
              <strong>{formatPrice(count * sandwich.price)}</strong>
              <button
                className="delete"
                onClick={() => this.props.deleteFromOrder(key)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionsOptions}>
        <li key={key}>
          Sorry, {sandwich ? sandwich.name : 'sandwich'} is not currently
          available. 😞
        </li>
      </CSSTransition>
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
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)}
          </TransitionGroup>
          <div className="total">
            <strong>Total:{` ${formatPrice(total)}`}</strong>
          </div>
        </StyledOrder>
      </div>
    );
  }
}

export default Order;

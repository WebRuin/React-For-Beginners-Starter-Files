import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import {
  StyledOrder,
  StyledOrderTotal,
  StyledEmptyOrder
} from './styles/OrderStyles';
import { formatPrice, isEmpty } from '../helpers';

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
            <span className="sandwich">
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
              <strong className="total">
                {formatPrice(count * sandwich.price)}
              </strong>
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
          {isEmpty(this.props.order) ? (
            <StyledEmptyOrder>
              You have not yet added any yummy sandwiches in your order.
            </StyledEmptyOrder>
          ) : (
            <TransitionGroup component="ul" className="order">
              {orderIds.map(this.renderOrder)}
            </TransitionGroup>
          )}

          <StyledOrderTotal>
            <strong>Total: {` ${formatPrice(total)}`}</strong>
          </StyledOrderTotal>
        </StyledOrder>
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
  sandwiches: PropTypes.object.isRequired,
  deleteFromOrder: PropTypes.func.isRequired
};

export default Order;

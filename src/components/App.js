import React from 'react';
import styled from 'styled-components';

import base from '../base';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Pbj from './Pbj';

import testData from '../sample-fishes';

const DEFAULT_STATE = {
  sandwiches: {},
  order: {},
  storeId: '',
};

export const StateContext = React.createContext(DEFAULT_STATE);

const pattern =
  'https://res.cloudinary.com/tihos/image/upload/q_auto/v1585937290/pattern3_btd9kp.png';

const LunchBox = styled.div`
  display: -webkit-box;
  display: flex;
  margin: 16px;
  height: calc(100vh - 32px);
  max-width: calc(100vw - 32px);

  & {
    display: -webkit-box;
    display: flex;
    margin: 16px;
    height: calc(100vh - 32px);
    max-width: calc(100vw - 32px);
  }
  & > * {
    -webkit-box-flex: 1;
    flex: 1 4 auto;
    padding: 2rem;
    box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
      0 0 0 16px #dfa456;
    position: relative;
    background-image: url(${pattern});
    overflow: scroll;
  }
  & > *:first-child {
    flex-shrink: 1;
    flex-basis: 50%;
  }
  & > *:nth-child(2) {
    min-width: 300px;
  }
  & > *:last-child {
    flex-shrink: 1;
    flex-basis: 50%;
  }
`;

const StyledList = styled.ul`
  padding-top: 5px;
  margin-top: 2rem;
`;

class App extends React.Component {
  state = DEFAULT_STATE;

  UNSAFE_componentWillMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/sandwiches`, {
      context: this,
      state: 'sandwiches',
    });
    this.setState({ storeId: this.props.match.params.storeId });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    const order = JSON.stringify(this.state.order);
    localStorage.setItem(params.storeId, order);
  }

  addSandwich = (sandwich) => {
    const sandwiches = { ...this.state.sandwiches };
    sandwiches[`sandwich-${Date.now()}`] = sandwich;
    this.setState({ sandwiches });
  };

  addTestData = () => {
    this.setState({ sandwiches: testData });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  editSandwich = (key, editedSandwich) => {
    const sandwiches = { ...this.state.sandwiches };
    sandwiches[key] = editedSandwich;
    this.setState({ sandwiches });
  };

  deleteSandwich = (key) => {
    const sandwiches = { ...this.state.sandwiches };
    sandwiches[key] = null;
    this.setState({ sandwiches });
  };

  deleteFromOrder = (key) => {
    const { params } = this.props.match;
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
    localStorage.removeItem(params.storeId, order);
  };

  render() {
    const { sandwiches } = this.state;
    return (
      <LunchBox>
        <div className="menu">
          <Header tagline="A new take on the quintessential nut butter and jelly sandwich!" />
          <StyledList>
            {Object.keys(sandwiches).map((key) => (
              <Pbj
                key={key}
                index={key}
                sandwich={sandwiches[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </StyledList>
        </div>
        <Order
          order={this.state.order}
          sandwiches={this.state.sandwiches}
          deleteFromOrder={this.deleteFromOrder}
        />
        <Inventory
          addSandwich={this.addSandwich}
          addTestData={this.addTestData}
          deleteSandwich={this.deleteSandwich}
          editSandwich={this.editSandwich}
          sandwiches={this.state.sandwiches}
          storeId={this.props.match.params.storeId}
        />
      </LunchBox>
    );
  }
}

export default App;

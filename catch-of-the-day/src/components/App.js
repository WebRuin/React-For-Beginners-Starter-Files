import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Pbj from './Pbj';

import testData from '../sample-fishes';

const LunchBox = styled.div`
  display: -webkit-box;
  display: flex;
  margin: 16px;
  height: calc(100vh - 32px);
  max-width: calc(100vw - 32px);

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
    background: #fff;
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
  state = {
    sandwiches: {},
    order: {}
  };

  addSandwich = sandwich => {
    const sandwiches = { ...this.state.sandwiches };
    sandwiches[`sanswich-${Date.now()}`] = sandwich;
    this.setState({ sandwiches });
  };

  addTestData = () => {
    this.setState({ sandwiches: testData });
  };

  UNSAFE_componentWillMount() {
    this.addTestData();
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    const { sandwiches } = this.state;
    return (
      <LunchBox>
        <div className="menu">
          <Header tagline="A new take on the quintessential nut butter and jelly sandwich!" />
          <StyledList>
            {Object.keys(sandwiches).map(key => (
              <Pbj
                key={key}
                index={key}
                sandwich={sandwiches[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </StyledList>
        </div>
        <Order order={this.state.order} sandwiches={this.state.sandwiches} />
        <Inventory
          addSandwich={this.addSandwich}
          addTestData={this.addTestData}
        />
      </LunchBox>
    );
  }
}

export default App;

import React from 'react';

import Button from './Button';
//import styled from 'styled-components';

import AddSandwichForm from './AddSandwichForm';

const Inventory = props => {
  const addSandwich = props.addSandwich;
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <AddSandwichForm addSandwich={addSandwich} />

      <button onClick={props.addTestData}>Add</button>
    </div>
  );
};

export default Inventory;

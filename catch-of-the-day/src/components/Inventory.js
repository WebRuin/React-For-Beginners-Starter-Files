import React from 'react';
// import styled from 'styled-components';

import AddSandwichForm from './AddSandwichForm';

const Inventory = props => {
  const addSandwich = props.addSandwich;
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <AddSandwichForm addSandwich={addSandwich} />
    </div>
  );
};

export default Inventory;

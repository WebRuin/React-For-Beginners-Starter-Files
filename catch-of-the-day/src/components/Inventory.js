import React from 'react';

import EditSandwichForm from './EditSandwichForm';
//import styled from 'styled-components';

import AddSandwichForm from './AddSandwichForm';

const Inventory = props => {
  const addSandwich = props.addSandwich;
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      {Object.keys(props.sandwiches).map(key => (
        <EditSandwichForm
          key={key}
          index={key}
          editSandwich={props.editSandwich}
          deleteSandwich={props.deleteSandwich}
          sandwich={props.sandwiches[key]}
        />
      ))}
      <AddSandwichForm addSandwich={addSandwich} />

      <button onClick={props.addTestData}>Add</button>
    </div>
  );
};

export default Inventory;

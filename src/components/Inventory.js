import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import AddSandwichForm from './AddSandwichForm';
import EditSandwichForm from './EditSandwichForm';
import Login from './Login';
import base, { firebaseApp } from '../base';
import { render } from 'react-dom';

class Inventory extends React.Component {
  state = {
    uuid: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }
  authHandler = async authData => {
    const store = await base.fetch(this.props.storeId, { context: this });
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    this.setState({
      uuid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uuid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Logout</button>;
    const addSandwich = this.props.addSandwich;

    if (!this.state.uuid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uuid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner of this story.</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.sandwiches).map(key => (
          <EditSandwichForm
            key={key}
            index={key}
            editSandwich={this.props.editSandwich}
            deleteSandwich={this.props.deleteSandwich}
            sandwich={this.props.sandwiches[key]}
          />
        ))}
        <AddSandwichForm addSandwich={addSandwich} />
        <button onClick={this.props.addTestData}>Add</button>
      </div>
    );
  }
}

EditSandwichForm.propType = {
  addSandwich: PropTypes.func.isRequired,
  addTestData: PropTypes.func.isRequired,
  deleteSandwich: PropTypes.func.isRequired,
  editSandwich: PropTypes.func.isRequired,
  sandwich: PropTypes.array.isRequired
};

export default Inventory;

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledEdit = styled.div`
  margin-bottom: 20px;
  border: 2px solid #793817;
  overflow: hidden;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;

  & input,
  & textarea,
  & select {
    width: 33.33%;
    padding: 10px;
    line-height: 1;
    font-size: 1.2rem;
    border: 0;
    border-bottom: 1px solid #dfa456;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.5);
  }
  & input:focus,
  & textarea:focus,
  & select:focus {
    outline: 0;
    background: #fef2de;
  }
  & textarea {
    width: 100%;
  }
  & input:last-of-type {
    width: 100%;
  }
  & button {
    width: 100%;
    border: 0;
    background: rgba(255, 255, 255, 0.6);
  }
  & button:hover {
    width: 100%;
    border: 0;
    color: #fff;
    background: #ae0e60bf;
  }
`;
class EditSandwichForm extends React.Component {
  handleChange = e => {
    const target = e.currentTarget;
    const editedSandwich = {
      ...this.props.sandwich,
      [target.name]: target.value
    };

    this.props.editSandwich(this.props.index, editedSandwich);
  };

  render() {
    const { name, price, status, desc, image } = this.props.sandwich;

    return (
      <StyledEdit>
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          value={name}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="price"
          value={price}
        />
        <select
          type="text"
          onChange={this.handleChange}
          name="status"
          value={status}
        >
          <option value="available">Available</option>
          <option value="unavailable">All Out!</option>
        </select>
        <textarea
          type="text"
          onChange={this.handleChange}
          name="desc"
          value={desc}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="image"
          value={image}
        />
        <button onClick={() => this.props.deleteSandwich(this.props.index)}>
          Remove Sandwich
        </button>
      </StyledEdit>
    );
  }
}

EditSandwichForm.propType = {
  sandwich: PropTypes.exact({
    name: PropTypes.string,
    price: PropTypes.string,
    status: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string
  })
};

export default EditSandwichForm;

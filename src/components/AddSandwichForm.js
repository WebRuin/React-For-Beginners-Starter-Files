import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
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

class AddSandwichForm extends React.Component {
  formRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createSandwich = e => {
    e.preventDefault();
    const sandwich = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addSandwich(sandwich);
    this.formRef.current.reset();
  };
  render() {
    return (
      <StyledForm onSubmit={this.createSandwich} ref={this.formRef}>
        <input name="name" type="text" ref={this.nameRef} placeholder="Name" />
        <input
          name="price"
          type="text"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">All Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input
          name="image"
          type="text"
          ref={this.imageRef}
          placeholder="Image"
        />
        <button type="submit">+ Add Sandwich</button>
      </StyledForm>
    );
  }
}

AddSandwichForm.propType = {
  addSandwich: PropTypes.func.isRequired
};

export default AddSandwichForm;

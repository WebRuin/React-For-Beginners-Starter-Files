import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import { getFunName } from '../helpers';

const StyledStorePicker = styled.form`
  background: #fff;
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
    0 0 0 16px #dfa456;
  border-radius: 10px;

  & input {
    text-align: center;
  }

  & ::-webkit-input-placeholder {
    color: #666;
  }

  & input,
  & button {
    width: 100%;
  }

  & input[type='text'],
  & button[type='text'] {
    text-align: center;
    font-size: 3rem;
  }
`;

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = e => {
    e.preventDefault();
    const store = this.myInput.current.value;
    this.props.history.push(`/store/${store}`);
  };

  render() {
    return (
      <StyledStorePicker onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <Button type="submit">Visit Store</Button>
      </StyledStorePicker>
    );
  }
}

export default StorePicker;

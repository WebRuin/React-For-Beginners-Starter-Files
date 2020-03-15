import React from 'react';
import styled from 'styled-components';

const StyledStorePicker = styled.form`
  background: #fff;
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
    0 0 0 16px #dfa456;
  border-radius: 10px;

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

const StorePicker = () => {
  return (
    <StyledStorePicker>
      <h2>Please Enter A Store</h2>
      <input type="" required placeholder="Store Name" />
      <button type="submit">Visit Store</button>
    </StyledStorePicker>
  );
};

export default StorePicker;

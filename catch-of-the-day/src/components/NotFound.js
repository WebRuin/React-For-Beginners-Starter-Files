import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  width: 75%;
  margin: 0 auto;
  text-align: center;

  img {
    margin: 0 auto;
  }
`;

const NotFound = props => {
  return (
    <StyledNotFound>
      <p>Opps... There is no page here</p>
      <img src="/public/Nom-Nom1.gif" alt="Nom Nom" />
    </StyledNotFound>
  );
};

export default NotFound;

import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledNotFound = styled.div`
  background: #fff;
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
    0 0 0 16px #dfa456;
  border-radius: 10px;
  text-align: center;

  img {
  }
`;

const CroppedImg = styled.figure`
  height: 225px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

class NotFound extends React.Component {
  goHome = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <StyledNotFound>
        <p>Opps... There is no page here</p>
        <CroppedImg>
          <img
            src="https://res.cloudinary.com/tihos/image/upload/q_auto/v1586238052/The%20Classic%20Lunchbox/Nom-Nom1.gif"
            alt="Nom Nom"
          />
        </CroppedImg>
        <Button onClick={this.goHome}>
          Let's get you home{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Button>
      </StyledNotFound>
    );
  }
}

export default NotFound;

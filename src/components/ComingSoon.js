import React from 'react';
import styled from 'styled-components';

const pattern = '/images/pattern3.png';

const H1 = styled.h1`
  font-size: 8rem;
  font-family: 'blanchcaps_inline', 'Raleway', sans-serif;
  background: linear-gradient(138deg, #dfa456, #793817, #ae0e60, #dfa456);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* line-height: 0.6; */
  font-weight: 100;
`;
const P = styled.p`
  text-align: center;
  color: #793817;
  font-size: 2rem;
`;
const ComingSoonBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${pattern});
`;
const Wrapper = styled.div`
  width: 60vw;
  padding: 2rem;
  margin-top: 8rem;
  height: fit-content;
  box-shadow: 0 0 0 4px #dfa456, 0 0 0 8px #793817, 0 0 0 12px #ae0e60,
    0 0 0 16px #dfa456;
  background: rgba(255, 255, 255, 0.25);
`;

const ComingSoon = props => (
  <ComingSoonBody>
    <Wrapper>
      <H1>Coming Soon</H1>
      <h2>to a farmer's market near you!</h2>
      <P>
        We will be reinventing the quintessential nut butter and jelly sandwich!
      </P>
    </Wrapper>
  </ComingSoonBody>
);

export default ComingSoon;

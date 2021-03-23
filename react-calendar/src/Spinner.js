import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
function Spinner() {
  return (
    <Outter>
      <CircularProgress />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Title>Loading...</Title>
    </Outter>
  );
}
const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(133, 193, 233, 0.5);
`;
const Title = styled.div`
  color: #34495e;
  font-size: 20px;
`;

export default Spinner;

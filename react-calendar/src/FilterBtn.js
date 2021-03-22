import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Fab } from '@material-ui/core';
import styled from 'styled-components';

function FilterBtn() {
  return (
    <PositionBtn>
      <Fab color='secondary' aria-label='filter' variant='extended'>
        <SearchIcon />
        <p style={{ fontSize: '1rem' }}>완료된 일정 보기</p>
      </Fab>
    </PositionBtn>
  );
}
const PositionBtn = styled.div`
  position: fixed;
  top: 80%;
  right: 10px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    right: 50px;
    & p {
      display: none;
    }
  }
`;

export default FilterBtn;

import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import Calendar from './Calendar';
import Upload from './Upload';
import Detail from './Detail';
import NotFound from './NotFound';
import Spinner from './Spinner';

function App(props) {
  return (
    <>
      <Switch>
        <Route path='/spinner' component={Spinner} />
        <Route path='/' exact>
          <Calendar history={props.history} />
          <PositionBtn>
            <Fab
              color='primary'
              aria-label='add'
              onClick={() => {
                props.history.push('/upload');
              }}
            >
              <AddIcon />
            </Fab>
          </PositionBtn>
        </Route>
        <Route path='/upload' component={Upload} exact />
        <Route path='/detail/:defid' component={Detail} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

const PositionBtn = styled.div`
  position: fixed;
  top: 90%;
  right: 50px;
  z-index: 10;
`;

export default withRouter(App);

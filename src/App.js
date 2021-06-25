import React from 'react';
import routes from './routes';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

import './App.css'
import 'normalize.css'

const MainComponent = styled.div`
  width: 88%;
  height: 100%;
  margin-left: 12%;
  background: grey;
`;

function App(props) {
  console.log(props)

  return (
    <div className="App">
      {props.history.location.pathname === '/' ? 
      <>
        {routes}
      </>
      :
      <>
        <NavBar />
        <MainComponent>
          {routes}
        </MainComponent> 
      </>
    }
    </div>
  );
}

export default withRouter(App);

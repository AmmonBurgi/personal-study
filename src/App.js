import React from 'react';
import routes from './routes';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

import './App.css'
import 'normalize.css'

const MainComponent = styled.div`
  width: 92%;
  height: 100%;
  margin-left: 8%;
  background: rgb(71,72,102);
`;

function App(props) {

  const navigateToAuth = () => {
    props.history.push('/')
  }

  return (
    <div className="App">
      {props.history.location.pathname === '/' ? 
      <>
        {routes}
      </>
      :
      <>
        <NavBar navigateToAuth={navigateToAuth} />
        <MainComponent>
          {routes}
        </MainComponent> 
      </>
    }
    </div>
  );
}

export default withRouter(App);

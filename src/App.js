import React from 'react';
import routes from './routes';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Theme from './Components/StyledComponents/Theme'
import { ThemeProvider } from 'styled-components';

import './App.css'
import 'normalize.css'

const MainComponent = styled.div`
  width: 92%;
  height: 100%;
  margin-left: 8%;
  background: ${props => props.theme.primaryBackground};
  position: relative;
`;

function App(props) {

  const navigateToAuth = () => {
    props.history.push('/')
  }

  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
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
    </ThemeProvider>
  );
}

export default withRouter(App);

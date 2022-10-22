import React from 'react';

import Home from './pages/Home';

import GlobalStyles from './style/global';

import styled from 'styled-components';

//Styles
const Main = styled.main``;

function App() {
  return (
    <Main>
      <Home></Home>
      <GlobalStyles />
    </Main>
  );
}

export default App;

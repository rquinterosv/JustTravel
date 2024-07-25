import React from 'react';
import AppRouter from './AppRouter';
import styled from '@emotion/styled';

const Root = styled.div`
  min-height: 100vh;
  background-color: #F2BBBB; /* Color negro en RGB */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <Root>
      <AppRouter />
    </Root>
  );
}

export default App;

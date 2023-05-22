import React from 'react';
import GlobalStyle from '../GlobalStyle';
import styled from 'styled-components';
import MainPage from '../Pages/MainPage';

function Main() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <MainPage />
      </Wrap>
    </>
  );
}

export default Main;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

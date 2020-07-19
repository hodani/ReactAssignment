import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Content from './components/Content';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f7f7f7;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }
`;

const Header = styled.header`
    background-color: #20232a;
    color: white;
    padding: 10px;
    text-align: center;
`;

const Body = styled.div`
    background-color: #ffffff;
    width: calc(100% - 40px);
    max-width: 800px;
    border: 1px solid #ececec;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 20px auto;
    padding: 20px;
`;

export default () => (
    <React.Fragment>
        <GlobalStyle />
        <Header>
            <h1>Listing random users</h1>
            <p>with prime numbers in their zip code</p>
        </Header>
        <Body>
            <Content/>
        </Body>
    </React.Fragment>
)

import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  outline: none;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  background: #eeeeee;
  color: #333333;
  padding: 8px 16px;
  &:hover {
    border: 1px solid #81c784;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Universal application!</p>
        <Button>Get started</Button>
      </div>
    );
  }
}

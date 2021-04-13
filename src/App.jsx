import React, { Component } from 'react'
import StarWarsList from "./components/StarWarsList"
import { Container, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
        <Container>
        <Header size="huge" id="header">Character List</Header>
        <StarWarsList />
      </Container>
    )
  }
}

export default App
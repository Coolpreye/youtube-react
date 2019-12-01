import React, { Component } from 'react';
import './App.css';
import { Container, Form, Button } from 'semantic-ui-react';

class App extends Component {

  handleChange = e => {
    console.log(e);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div className="App" onSubmit={this.handleSubmit}>
        <Container textAlign="center">
          <Form size="small">
            <Form.Group>
              <Form.Input placeholder="name of video" width={6} onChange={this.handleChange} />
              <Form.Button content="search for video" />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;

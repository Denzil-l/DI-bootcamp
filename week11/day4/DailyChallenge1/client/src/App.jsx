import { Component } from 'react';
import React from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      input: '',
      response: ''
    }
  }
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      console.log('I am here');
      this.setState({ data: data });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ data: 'Error fetching data' });
    }
  }
  handleInput = (event) => {
    this.setState({ input: event.target.value })
  }
  handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: this.state.input }),
    });
    const data = await response.text()
    console.log(data)
    this.setState({ response: data })
  }

  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleInput} />
          <button type="submit">Send Data</button>
        </form>
        <h2>{this.state.response}</h2>
      </div>
    )
  }
}
export default App;

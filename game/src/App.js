import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.staticState = {
      data: 
        {
          "variables": {
            "temperature": 22.50,
            "humidity": 72.80,
            "contaminacion": 253.00
          },
          "id": "1",
          "name": "sensor_wemos",
          "hardware": "esp8266",
          "connected": true
        }
    }

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/sensor.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <h1>This is the header</h1>
      </header>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="main-content">
        <Sensor data={this.props.data} variables={this.props.data.variables} />
      </div>
    );
  }
}

class Sensor extends Component {
  render() {
    console.log(this.props.variables);
    
    return (
      <section className="sensor">
        <div className="status">
          <p>
            <b>Id: </b>{this.props.data.id}
          </p>
          <br />

          <p>
            <b>Name: </b>{this.props.data.name}
          </p>
          <br />

          <p>
            <b>Hardware: </b>{this.props.data.hardware}
          </p>
          <br />

          {/* <p>
            <b>Connected: </b>{this.props.data.connected}
          </p>
          <br /> */}

        </div>
        <table>
          <thead>
            <tr>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Pollution</th>
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>This is the footer</h1>
      </footer>
    )
  }
}

export default App;

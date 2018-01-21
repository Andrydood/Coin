import React, { Component } from 'react';
import './styles/stylesheets/App.css';
import particlesParams from './lib/particlesParams.json';
import Particles from 'react-particles-js';
import TopBar from './TopBar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className= "App">
        <TopBar />
        <div className = "particlesContainer">
          <Particles height = {this.state.height + 'px'}
                    width = {this.state.width + 'px'}
                    params = {particlesParams}
                    className = "particles"/>

          <div className = "splash">
            <h1>PENIS-COIN</h1>
          </div>
        </div>
        <div className = "main">
          iajidjidasjijdsaij
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <Projects/>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Users from './Users';
import Info from './Info';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      <h1>Hello world - Default</h1>
      <hr />
      <Users />
      <hr />
      <Info />
      <hr />
      <Demo />
      <hr />
      <FirstClass />
      <SecondClass />
      <ThirdClass />
    </div>
  );
}

class FirstClass extends React.Component {
  render() {
    return (
      <div>
        <h1>This is First Class Component</h1>
      </div>
    );
  }
}

class SecondClass extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Second Class Component</h1>
      </div>
    );
  }
}

class ThirdClass extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Third Class Component</h1>
      </div>
    );
  }
}

export default App;

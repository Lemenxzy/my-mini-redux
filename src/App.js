import React from 'react';
import logo from './logo.svg';
import './App.css';
import {add, remove, addAsync} from './actions';
import { connect } from './myredux/index';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              { this.props.num }
            </p>
            <div
                className="App-link"
            >
              <button onClick={ this.props.add }>加一 (+)</button>
              <button onClick={ this.props.remove }>减一 (－)</button>
              <button onClick={ this.props.addAsync }>异步加一 (+)</button>
            </div>
          </header>
        </div>
    );
  }

}

App = connect(state => ({num: state}), {add, remove, addAsync})(App);

export default App;

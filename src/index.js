/* 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = { counter: 0}

  render () {
    return (
    <div>
      <span>Counter Value: {this.state.counter}</span>
      <button onClick={() => this.setState({ counter: this.state.counter + 1})} >
        Increment Counter
      </button>
      <button onClick={() => this.setState({ counter: this.state.counter - 1})} >
        Decrement Counter
      </button>
    </div>
    )
  }
} */


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Counter() {
  
  const [count, setCount] = useState(0)
return (
    <div>
      <span>Counter Value: {count} </span>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement Counter
      </button>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
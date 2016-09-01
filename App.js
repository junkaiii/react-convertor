import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0,
      multiplier: ""
    }
    this.update=this.update.bind(this)
  }

  update(event){
    let input = event.target.value
    this.setState({
      multiplier: input
    })
  }

  render(){
    return (
      <div>
      <input type="text" onChange={this.update} value={this.state.multiplier}></input>
      <p>{this.state.multiplier}</p>
      </div>
    )
  }
}

export default App;

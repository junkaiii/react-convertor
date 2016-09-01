import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      value: "",
      multiplier: "",
      result: ""
    }
    this.update=this.update.bind(this)
  }

  update(event){
    let input = event.target.value
    this.setState({
      multiplier: ReactDOM.findDOMNode(this.refs.multiplier).value,
      value: ReactDOM.findDOMNode(this.refs.value).value
    })
  }

  render(){
    return (
      <div>
      <input type="text" ref="multiplier" className="multiplier" onChange={this.update} value={this.state.multiplier}></input>
      <p>{this.state.multiplier}</p>
      <input type="text" ref="value" className="value" onChange={this.update} value={this.state.value}></input>
      <p>{this.state.value}</p>
      </div>
    )
  }
}

export default App;

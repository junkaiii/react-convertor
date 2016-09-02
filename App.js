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
    this.setState({
      result: this._mul.value * this._val.value
    })
  }


  render(){
    return (
      <div>
      <input type="text" ref={(abc) => this._mul = abc} className="multiplier" onChange={this.update} />
      <input type="text" ref={(input) => this._val = input} className="value" onChange={this.update} />
      <p>{this.state.result}</p>
      </div>
    )
  }
}

export default App;

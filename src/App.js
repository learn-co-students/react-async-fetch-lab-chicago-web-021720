// create your App component here
import React, { Component } from 'react';
export default class App extends Component {
  constructor(props){
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount(){
    const URL = 'http://api.open-notify.org/astros.json';
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({peopleInSpace: data}));
  }

  renderPeople = () => <div>{this.state.peopleInSpace.map((person,index) => <h1 key={index}>{person.name}</h1>)}</div>

  render(){
    return(
      <div>
        {this.renderPeople()}
      </div>
    )
  }
}

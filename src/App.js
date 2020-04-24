import React, { Component } from 'react'


export class App extends Component {
    
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    people: data.people
                })
            })
    }
    
    render() {
        return (
            <div>
                {this.state.people.length > 0 ? this.state.people.map(person => <p>{person.name}</p>) : 'Loading...'}
            </div>
        )
    }
}

export default App

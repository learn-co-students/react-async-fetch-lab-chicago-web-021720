// create your App component here
import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: ''
        }
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
            peopleInSpace: data.people
            })
        })
    }
    
    render() {
        return (
            this.state.peopleInSpace
        )
    }
}

export default App
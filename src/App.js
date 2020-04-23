import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    people: data.people
                })
            })
    }

    render() {
        return (
            <div>
                <h1>People In Space</h1>
                {this.state.people.map(person => <p>{person.name} in {person.craft}</p>)}
            </div>
        )
    }
}

export default App
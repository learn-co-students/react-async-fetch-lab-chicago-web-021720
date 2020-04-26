// create your App component here
import React from "react";

export default class App extends React.Component {
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(astros => console.log(astros))
    }
    render() {
        return <div></div>

    }
}
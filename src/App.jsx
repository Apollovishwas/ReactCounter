import React, {Component} from "react";
import './app.css';
import Clock from "./clock";
import {Form, FormControl, Button} from 'react-bootstrap'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline : 'March 22 2022', 
            newDeadline : ''
        }

        
    }
    changeDeadline() {
        this.setState({deadline : this.state.newDeadline})
    }
    render() {
        return (
        <div className="App">
            <div className="App-title">The countown App {this.state.deadline}</div>
           <Clock deadline = {this.state.deadline}/>
            <Form className = 'deadline-input'>
                <FormControl placeholder = 'new Date' onChange={event => this.setState({newDeadline : event.target.value})}/>
                <Button onClick={() => this.changeDeadline()}>Submit</Button>
            </Form>
        </div>)
    }
}

export default App
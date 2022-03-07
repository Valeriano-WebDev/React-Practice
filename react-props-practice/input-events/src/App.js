import React, { Component } from 'react'
import BadRobot from './component/BadRobot'
import KanyeRobot from './component/KanyeRobot'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            userInput: ""
        }
    }

    handleChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({userInput: e.target.value})
    }

    render(){
        let {userInput} = this.state
        return(
            <>
                <h1>Robo Active Listening</h1>
                <p>Say Something</p>
                <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                <h3>Good Robot</h3>
                <p>I hear you saying {this.state.userInput}. Is that correct?</p>

                <BadRobot userInput={userInput}/>

                <KanyeRobot userInput={userInput}/>
            </>
        )
    }
}
export default App

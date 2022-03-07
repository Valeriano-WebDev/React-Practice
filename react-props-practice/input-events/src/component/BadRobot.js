import React, { Component } from 'react'

class BadRobot extends Component{
     userStr = (userInput) => {
        let blaArr = ["B","L", "A"]
        let strArr = userInput.split("").map((a, b) => blaArr[b % blaArr.length])
    return strArr.join("")
}

    render(){
        return(
            <>
            <h3>BadRobot</h3>
                <p>I hear you saying {this.userStr(this.props.userInput)}. Is that Correct?</p>
                /** Passing userInput as argument into the userStr method to return converted array **/
            </>
        )
    }
}

export default BadRobot
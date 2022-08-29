import React, {Component} from 'react';


export default class EvenAndOdd extends Component {

    constructor() {
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"></input>
                <button classname="confirmationButton"></button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>
            </div>
        )
    }
}
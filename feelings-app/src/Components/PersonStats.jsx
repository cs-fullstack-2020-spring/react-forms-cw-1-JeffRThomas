import React, { Component } from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Age: "",
            Feeling: "",
            Msg:""
        };
    };

    userPost = (evt) => {
        evt.preventDefault();
        console.log("User Post function called.");
        this.setState({
            Msg:`Hello ${this.state.Name}. You are ${this.state.Age} and feeling ${this.state.Feeling}.`
        })
        console.log(this.state);
    }

    changedName = (evt) => {
        this.setState(
            { Name: evt.target.value }
        )
    }

    changedAge = (evt) => {
        this.setState(
            { Age: evt.target.value }
        )
    }

    changedFeeling = (evt) => {
        this.setState(
            { Feeling: evt.target.value }
        )
    }

    render() {
        return (
            <div>
                {/* Oh gee, the child is here too!!! */}
                <form>
                    <fieldset>
                        <legend>Enter Your Information</legend>

                        <label htmlFor="nameField">Name:</label>
                        <input onChange={this.changedName} type="text" id="nameField" placeholder="What is your name?" value={this.state.Name}></input>

                        <label htmlFor="ageField">Age:</label>
                        <input onChange={this.changedAge} type="text" id="ageField" placeholder="How old are you?" value={this.state.Age}></input>

                        <label htmlFor="feelingField">Feeling:</label>
                        <input onChange={this.changedFeeling} type="text" id="feelingField" placeholder="How are you feeling?" value={this.state.Feeling}></input>

                        <button onClick={this.userPost}>Submit</button>

                    </fieldset>
                </form>
                <div>
                    {this.state.Msg}
                </div>
            </div>
        )
    };
};

export default PersonStats;


import React, { Component } from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Age: "",
            Feeling: ""
        };
    };

    userPost = (post) => {
        post.preventDefault();
        console.log("User Post function called.");
        this.setState({
            Name: post.Name,
            Age: post.Age,
            Feeling: post.Feeling
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                {/* Oh gee, the child is here too!!! */}
                <form>
                    <fieldset>
                        <legend>Enter Your Information</legend>

                        <label htmlfor="nameField">Name:</label>
                        <input type="text" id="nameField" placeholder="What is your name?" value={this.props.name}></input>

                        <label id="ageField">Age:</label>
                        <input type="text" id="ageField" placeholder="How old are you?" value={this.props.Age}></input>

                        <label id="feelingField">Feeling:</label>
                        <input type="text" id="feelingField" placeholder="How are you feeling?" value={this.props.Feeling}></input>

                        <button onClick={this.userPost}>Submit</button>

                    </fieldset>
                </form>
                <div>
                    {`Hello ${this.state.name}. You are ${this.state.Age} and feeling ${this.state.Feeling}.`}
                </div>
            </div>
        )
    };
};

export default PersonStats;


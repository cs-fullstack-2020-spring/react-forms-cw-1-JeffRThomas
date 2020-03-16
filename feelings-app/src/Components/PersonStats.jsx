import React, { Component } from 'react';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                {/* Oh gee, the child is here too!!! */}
                <form>
                    <fieldset>
                        <legend>Enter Your Information</legend>

                        <label for="nameField">Name:</label>
                        <input type="text" id="nameField" placeholder="What is your name?"></input>

                        <label id="ageField">Age:</label>
                        <input type="text" id="ageField" placeholder="How old are you?"></input>

                        <label id="feelingField">Feeling:</label>
                        <input type="text" id="feelingField" placeholder="How are you feeling?"></input>

                    </fieldset>
                </form>
            </div>
        )
    };
};

export default PersonStats;


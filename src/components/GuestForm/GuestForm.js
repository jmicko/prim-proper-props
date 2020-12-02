// imports
import React from 'react';
import { Component } from 'react';

// class
class GuestForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                <label>
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    value={this.props.newGuest.name}
                    onChange={this.props.handleChangeFor('name')}
                />
                <div>
                    Would this guest like a kid's meal?
                    <div onChange={this.props.handleChangeFor('kidsMeal')}>
                    <div>
                        <label>
                        <input
                            type="radio"
                            value="yes"
                            name="kidsMeal"
                        />
                        Yes, this guest would like a Kid's Meal
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                            type="radio"
                            value="no"
                            defaultChecked
                            name="kidsMeal"
                        />
                        No, this guest would not like a Kid's Meal
                        </label>
                    </div>
                    </div>
                </div>
                <button type="submit">Add Guest</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default GuestForm;
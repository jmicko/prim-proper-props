// imports
import React from 'react';
import { Component } from 'react';
// import guestList from '../App'

// class
class GuestList extends Component {
    render() {
        return (
            <div>
                <h2>Guest List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Kid's Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* everything is coppied in from App, but need to change state to props,
                        and guesList to guests because that is what it is called in the App */}
                        {this.props.guests.map(guest => (
                            <tr key={guest.name}>
                                <td>{guest.name}</td>
                                <td>{guest.kidsMeal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default GuestList;
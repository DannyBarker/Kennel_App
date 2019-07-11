import React, {Component} from 'react';
import EmployeeList from "./employee/EmployeeList"

export default class Kennel extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  // This will eventually get pulled from the API
  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  state = {
      employees: this.employeesFromAPI,
      locations: this.locationsFromAPI
  }

  render() {
    return (
      <div>
        {
        this.state.locations.map( location =>
          <div key={location.id}>
            <h3>Student Kennels</h3>
            <h4>{location.name}</h4>
            <h5>{location.address}</h5>
          </div>
        )
        }
        {/* employees={this.state.employees} is the data that is being passed down to the EmployeeList
          employees becomes a key of props and the value is this.state.employees. */}
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}
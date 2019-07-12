import React, {Component} from 'react';
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animals/AnimalList"

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

  animalsFromAPI = [
    { id: 1, name: "Sparky"},
    { id: 2, name: "Walen"},
    { id: 3, name: "Ol' Red"},
    { id: 4, name: "Kora"}
  ]

  state = {
      employees: this.employeesFromAPI,
      locations: this.locationsFromAPI,
      animals: this.animalsFromAPI
  }

  render() {
    return (
      <div>
        <LocationList locations={this.state.locations} />
        {/* employees={this.state.employees} is the data that is being passed down to the EmployeeList
          employees becomes a key of props and the value is this.state.employees. */}
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} />
      </div>
    );
  }
}
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'


export default class ApplicationViews extends Component {
  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: []
  }

  componentDidMount() {
    const newState = {}

    fetch ("http://localhost:5002/animals")
      .then(r => r.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch("http://localhost:5002/employees")
      .then(r => r.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/locations")
      .then(r => r.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/owners")
      .then(r => r.json()))
      .then(owners => newState.owners = owners)
      .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
        method: "DELETE"
      })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
      .then(animals => this.setState({
        animals: animals
      })
    )
}

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}
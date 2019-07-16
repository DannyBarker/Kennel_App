import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import SearchList from './search/SearchList'
import AnimalManager from '../modules/AnimalManager'

export default class ApplicationViews extends Component {
  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: []
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll()
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

  deleteObj = (entity, id, fnctn) => {
    return fetch(`http://localhost:5002/${entity}/${id}`, {
        method: "DELETE"
      })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/${entity}`))
      .then(e => e.json())
      .then(data => {
        fnctn(data)
  })
}
 deleteAnimal = (data) => {
  this.setState({
    animals: data
  })
 }
 deleteEmployee = (data) => {
  this.setState({
    employees: data
  })
 }


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteObj={this.deleteObj} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} deleteObj={this.deleteObj} deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners} />
        }} />
        <Route path="/search" render={(props) => {
          return <SearchList results={this.props.results} />
        }} />
      </React.Fragment>
    )
  }
}
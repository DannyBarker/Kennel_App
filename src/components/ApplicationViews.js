import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import { throwStatement } from '@babel/types';


export default class ApplicationViews extends Component {
  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay", phoneNumber: "(000) 123-4567" },
    { id: 2, name: "Emma Beaton", phoneNumber: "(000) 123-4567" },
    { id: 3, name: "Dani Adkins", phoneNumber: "(000) 123-4567" },
    { id: 4, name: "Adam Oswalt", phoneNumber: "(000) 123-4567" },
    { id: 5, name: "Fletcher Bangs", phoneNumber: "(000) 123-4567" },
    { id: 6, name: "Angela Lee", phoneNumber: "(000) 123-4567" }
  ]

  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Doodles", ownerId: 6},
    { id: 2, name: "Jack", ownerId: 5 },
    { id: 3, name: "Angus", ownerId: 4 },
    { id: 4, name: "Henley", ownerId: 3 },
    { id: 5, name: "Derkins", ownerId: 2 },
    { id: 6, name: "Checkers", ownerId: 1 }
  ]

  state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} />
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
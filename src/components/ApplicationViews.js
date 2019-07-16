import { Route, withRouter } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import SearchList from './search/SearchList'
import AnimalManager from '../modules/AnimalManager'
import AnimalDetail from './animals/AnimalDetail'

 class ApplicationViews extends Component {
  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: []
  }

  componentDidMount() {
    const newState = {}

    AnimalManager.getAll("animals")
      .then(animals => newState.animals = animals)
      .then(() => AnimalManager.getAll("employees"))
      .then(employees => newState.employees = employees)
      .then(() => AnimalManager.getAll("locations"))
      .then(locations => newState.locations = locations)
      .then(() => AnimalManager.getAll("owners"))
      .then(owners => newState.owners = owners)
      .then(() => this.setState(newState))
  }

  deleteObj = (entity, id, fnctn) => {
    AnimalManager.delete(entity, id)
      .then(() => AnimalManager.getAll(entity))
      .then(data => {
        fnctn(data)
  })
}
 deleteAnimal = data => {
  this.props.history.push("/animals")
  this.setState({
    animals: data
  })
 }
 deleteEmployee = data => {
  this.props.history.push("/employees")
  this.setState({
    employees: data
  })
 }
 deleteOwner = data => {
  this.props.history.push("/owners")
  this.setState({
    owners: data
  })
 }


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteObj={this.deleteObj} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Find the animal with the id of the route parameter
          let animal = this.state.animals.find(animal =>
          animal.id === +props.match.params.animalId
          )
          // If the animal wasn't found, create a default one
          if (!animal) {
              animal = {id:404, name:"404", breed: "Dog not found"}
          }
          return <AnimalDetail {...props} animal={ animal } deleteObj={this.deleteObj} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} deleteObj={this.deleteObj} deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners} deleteObj={this.deleteObj} deleteOwner={this.deleteOwner} />
        }} />
        <Route path="/search" render={(props) => {
          return <SearchList results={this.props.results} />
        }} />
      </React.Fragment>
    )
  }
}
export default withRouter(ApplicationViews)
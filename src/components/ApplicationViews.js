import { Route, withRouter } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import SearchList from './search/SearchList'
import AnimalManager from '../modules/AnimalManager'
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owners/OwnerDetail'
import AnimalForm from './animals/AnimalForm'

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

  addObj= (entity, obj, fnctn) => {
    AnimalManager.post(entity, obj)
      .then(() => AnimalManager.getAll(entity))
      .then(data => {
        fnctn(data)
    })
  }

 updateAnimal = data => {
  this.props.history.push("/animals")
  this.setState({
    animals: data
  })
 }
 updateEmployee = data => {
  this.props.history.push("/employees")
  this.setState({
    employees: data
  })
 }
 updateOwner = data => {
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
          return <AnimalList {...props} animals={this.state.animals} owners={this.state.owners} deleteObj={this.deleteObj} updateAnimal={this.updateAnimal} />
        }} />
        <Route exact path="/animals/new" render={(props) => {
          return <AnimalForm addObj={this.addObj} updateAnimal={this.updateAnimal} employees={this.state.employees} owners={this.state.owners} />
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
        // Find the animal with the id of the route parameter
          let animal = this.state.animals.find(animal =>
          animal.id === +props.match.params.animalId
          )
          // If the animal wasn't found, create a default one
          if (!animal) {
            animal = {id:404, name:"404", breed: "Dog not found"}
          }
          return <AnimalDetail {...props} animal={ animal } deleteObj={this.deleteObj} updateAnimal={this.updateAnimal} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} deleteObj={this.deleteObj} updateEmployee={this.updateEmployee} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          let employee = this.state.employees.find(employee => employee.id === +props.match.params.employeeId)
          if (!employee) {
            employee = {id:404, name:"Employee Not Found", phoneNumber:"404"}
          }
          return <EmployeeDetail {...props} employee={employee} deleteObj={this.deleteObj} updateEmployee={this.updateEmployee} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners} deleteObj={this.deleteObj} updateOwner={this.updateOwner} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          let owner = this.state.owners.find(owner => owner.id === +props.match.params.ownerId)
          if (!owner) {
            owner = {id:404, name:"Owner Not Found", phoneNumber: "404"}
          }
          return <OwnerDetail owner={owner} deleteObj={this.deleteObj} updateOwner={this.updateOwner} />
        }} />
        <Route path="/search" render={(props) => {
          return <SearchList results={this.props.results} />
        }} />
      </React.Fragment>
    )
  }
}
export default withRouter(ApplicationViews)
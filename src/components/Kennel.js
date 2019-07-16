import React, {Component} from 'react';
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import {withRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class Kennel extends Component {
  state = {
    animalResults: [],
    employeeResults: [],
    locationResults: [],
    ownerResults: [],
  }
  inputEvent = (event) => {
    const newState = {}
    this.setState({animalResults: [], employeeResults: [], locationResults: [], ownerResults: []})
    if (event.key === "Enter") {
      let input = document.querySelector(".search").value
      fetch (`http://localhost:5002/animals?name_like=${input}`)
      .then(r => r.json())
      .then(animals => newState.animalResults = animals)
      .then(() => fetch(`http://localhost:5002/employees?name_like=${input}`)
      .then(r => r.json()))
      .then(employees => newState.employeeResults = employees)
      .then(() => fetch(`http://localhost:5002/locations?name_like=${input}`)
      .then(r => r.json()))
      .then(locations => newState.locationResults = locations)
      .then(() => fetch(`http://localhost:5002/owners?name_like=${input}`)
      .then(r => r.json()))
      .then(owners => newState.ownerResults = owners)
      .then(() => console.log(newState))
      .then(() => {
        this.props.history.push("/search")
        this.setState(newState)
      })

    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar inputEvent={this.inputEvent} />
        <ApplicationViews results={this.state} />
      </React.Fragment>
    );
  }
}
export default withRouter(Kennel)
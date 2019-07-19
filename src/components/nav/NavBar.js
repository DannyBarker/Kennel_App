import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default class NavBar extends Component {

  render() {
    return (
      <header className="background">
        <nav className="">
          <ul className="nav bottom">
            <li className="active">
              <Link className="nav-link" to="/">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/animals">Animals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees">Employees</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/owners">Owners</Link>
            </li>
            <li className="nav-item">
              <input type="text" placeholder="Search" className="search form-control" onKeyPress={this.props.inputEvent} ></input>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
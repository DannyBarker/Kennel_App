import React, {Component} from 'react';
import {Link} from "react-router-dom"

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        <ul>
          <h3>Employees</h3>
          {
            this.props.employees.map( employee =>
              <li key={employee.id}>
                <h4>{employee.name}</h4>
                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                <button onClick={() => this.props.deleteObj("employees", employee.id, this.props.updateEmployee)} className="card-link">Delete</button>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}

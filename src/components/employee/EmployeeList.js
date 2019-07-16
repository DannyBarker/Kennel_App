import React, {Component} from 'react';

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
                <button onClick={() => this.props.deleteObj("employees", employee.id, this.props.deleteEmployee)} className="card-link">Delete</button>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}

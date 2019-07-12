import React, {Component} from 'react';

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        <ul>
          <h3>Employees</h3>
          {
            this.props.employees.map( animal =>
              <li key={animal.id}>
                <h4>{animal.name}</h4>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}

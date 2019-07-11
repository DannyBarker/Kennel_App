import React, {Component} from 'react';

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
      {
        /* .props.employees contains the data passed down from employees={this.state.employees}
         .map maps through the array of data and creates a div and appends it to DOM */
        this.props.employees.map(employee =>
      /* we give react a key value to help it keep track of what it has looped through.
        it helps us with the shadow DOM and the real DOM */
          <div key={employee.id}>
            {employee.name}
          </div>
        )
      }
      </section>
    )
  }
}

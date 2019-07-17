import React, {Component} from 'react';

export default class EmployeeForm extends Component {
  state = {
    employeeName: "",
    employeeNumber: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange)
  }
  constructNewEmp = evt => {
    evt.preventDefault()
    const employee = {
      name: this.state.employeeName,
      phoneNumber: this.state.employeeNumber
    }

    this.props.addObj("employees", employee, this.props.updateEmployee)
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <fieldset>
            <legend>Employee Name</legend>
            <input type="text" id="employeeName" className="form-control" required onChange={this.handleFieldChange} placeholder="Name" />
          </fieldset>
          <fieldset>
            <legend>Employeed Phone Number</legend>
            <input type="text" id="employeeNumber" className="form-control" required onChange={this.handleFieldChange} placeholder="(123) 456-7890" />
          </fieldset>
          <button type="submit" onClick={this.constructNewEmp}>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
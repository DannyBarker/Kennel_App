import React, {Component} from "react"

export default class Employee extends Component {
  state = {
    saveDisabled: false
  }
  render() {
    return(
      <div key={this.props.employee.id}>
        <h3>{this.props.employee.name}</h3>
        <p>{this.props.employee.phoneNumber}</p>
        <button onClick={() => {
          this.props.deleteObj("employees", this.props.employee.id, this.props.deleteEmployee)
          this.setState({saveDisabled: true})
        }} disabled={this.state.saveDisabled}>Delete</button>
      </div>
    )
  }
}
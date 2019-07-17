import React, {Component} from "react";


export default class Owner extends Component {
  state = {
    saveDisabled: false
  }
  render() {
    return(
      <div key={this.props.owner.id}>
        <h3>{this.props.owner.name}</h3>
        <p>{this.props.owner.phoneNumber}</p>
        <button onClick={() => {
          this.props.deleteObj("owners", this.props.owner.id, this.props.updateOwner)
          this.setState({saveDisabled: true})
        }} disabled={this.state.saveDisabled}>Delete</button>
      </div>
    )
  }
}
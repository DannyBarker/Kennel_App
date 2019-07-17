import React, {Component} from "react";
export default class AnimalForm extends Component {
  state = {
    animalName: "",
    breed: "",
    employeeId: "",
    ownerId: ""
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  constructNewAnimal = evt => {
    evt.preventDefault();
    if (this.state.employeeId === "") {
      window.alert("Please select a caretaker");
    } else {
      const animal = {
        name: this.state.animalName,
        breed: this.state.breed,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        employeeId: +this.state.employeeId,
        ownerId: +this.state.ownerId
      };

      // Create the animal and redirect user to animal list
      this.props.addObj("animals", animal, this.props.updateAnimal)
    }
  };
  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="animalName">Animal name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="animalName"
              placeholder="Animal name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="owner">Assign to Owner</label>
            <select
              defaultValue=""
              name="owner"
              id="ownerId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an Owner</option>
              {this.props.owners.map(o => (
                <option key={o.id} id={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Assign to caretaker</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewAnimal}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
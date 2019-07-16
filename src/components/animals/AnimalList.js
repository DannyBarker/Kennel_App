import React, {Component} from 'react';
import dog from "./DogIcon.svg"
import "./Animal.css"

export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
       {
        this.props.animals.map(animal =>
          <div key={animal.id} className="card">
            <div className="card-body">
              <div className="card-title">
                <img src={dog} className="icon--dog" alt="dog-icon" />
                <h5>{animal.name}</h5>
                <h6>Owner(s):</h6>
                <ul>
                {
                  this.props.owners.map( owner => owner.id === animal.ownerId ? <li key={owner.id}>{owner.name}</li> : "")
                }
                </ul>
                <button onClick={() => this.props.deleteAnimal("animals", animal.id)} className="card-link">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      }
      </section>
    )
  }
}
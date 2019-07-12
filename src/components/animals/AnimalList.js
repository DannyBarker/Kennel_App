import React, {Component} from 'react';

export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
        <h3>Animals</h3>
        <ul>
        {
          this.props.animals.map( animal =>
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
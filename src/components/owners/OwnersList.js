import React, {Component} from 'react';

export default class OwnersList extends Component {
  render() {
    return (
      <section name="owners">
        <h3>Owners</h3>
        <ul>
          {
            this.props.owners.map( owner =>
              <li key={owner.id}>
                <h3>{owner.name}</h3>
                <h5>Contact</h5>
                <h6>Phone: {owner.phoneNumber}</h6>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}
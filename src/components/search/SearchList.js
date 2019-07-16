import React, {Component} from 'react';

export default class SearchList extends Component {

  render() {
    return (
      <React.Fragment>
        <h3>Search Results</h3>
        { this.props.results.animalResults.length > 0 ? <ul><h3>Animals</h3> {this.props.results.animalResults.map(result => <li key={result.id}>{result.name}</li>)}</ul> : ""}
        { this.props.results.employeeResults.length > 0 ? <ul><h3>Employees</h3> {this.props.results.employeeResults.map(result => <li key={result.id}>{result.name}</li>)}</ul> : ""}
        { this.props.results.locationResults.length > 0 ? <ul><h3>Locations</h3> {this.props.results.locationResults.map(result => <li key={result.id}>{result.name}</li>)}</ul> : ""}
        { this.props.results.ownerResults.length > 0 ? <ul><h3>Owners</h3> {this.props.results.ownerResults.map(result => <li key={result.id}>{result.name}</li>)}</ul> : ""}
      </React.Fragment>
    )
  }
}
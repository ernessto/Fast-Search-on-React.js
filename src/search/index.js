import React from 'react';
import people from './people.json';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filtered: people
        };
    }

    mapPerson(person, idx) {
        return (
            <li key={idx}>
                { person.name } <strong>{ idx }</strong>
            </li>
        );
    }

    handleSearch(e) {
        const { value } = e.target;

        const filtered = people.filter( person => person.name.toLowerCase().indexOf(value.toLowerCase()) >= 0 );
        this.setState({ filtered });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.handleSearch.bind(this) }/>
                <ul>
                    { this.state.filtered.map( this.mapPerson.bind(this) ) }
                </ul>
            </div>
        );
    }

}

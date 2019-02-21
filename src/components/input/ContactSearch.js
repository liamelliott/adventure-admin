import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import SearchBox from './SearchBox';
import ContactsDisplay from '../display/ContactsDisplay';

class ContactSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        }
    }

    handleSearch = (input) => new Promise((resolve, reject) => {
        this.setState(Object.assign(this.state, {
            contacts: [
                { name: 'Liam Elliott', avatar: 'http://i.pravatar.cc/200', email: 'lelliott@alpineclubofcanada.ca' },
                { name: 'Jeff Lockyer', avatar: 'https://alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/Jeff%20in%20fur_thumb.jpg', email: 'jlockyer@alpineclubofcanada.ca' },
                { name: 'Chris Petrauskas', avatar: 'https://alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/ChrisPetrauskas_thumb.jpg', email: 'cpetrauskas@alpineclubofcanada.ca' },
                { name: 'Lawrence White', avatar: 'https://alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/LW%20gunslinger%20staff.jpg', email: 'lwhite@alpineclubofcanada.ca' }
            ]
        }));
    });

    render() {
        return (
            <React.Fragment>
                <SearchBox onSearch={this.handleSearch} />
                <ContactsDisplay contacts={this.state.contacts} />
            </React.Fragment>
        );
    }
}

ContactSearch.propTypes = {

};

ContactSearch.defaultProps = {

};

export default ContactSearch;
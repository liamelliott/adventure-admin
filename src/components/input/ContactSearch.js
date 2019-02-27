import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Typography, withStyles } from '@material-ui/core';

import SearchBox from './SearchBox';
import ContactSelect from '../display/ContactSelect';
import AdminDisplay from '../display/AdminDisplay';

const styles = theme => ({
    searchBox: {
    },
    contactsDisplay: {
    },
    adminDisplay: {
    }
});

class ContactSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            administrators: []
        };
    }

    handleAction = (contact) => new Promise((resolve, reject) => {
        this.setState(Object.assign(this.state, { contacts: this.state.contacts.filter((value) => value.id != contact.id), administrators: [...this.state.administrators, contact] }));
        console.log(this.state.contacts);
    });

    handleSearch = (input) => new Promise((resolve, reject) => {
        this.setState(Object.assign(this.state, {
            contacts: [
                { id: 28681, name: 'Liam Elliott', avatar: 'https://avatars1.githubusercontent.com/u/6991749?s=460&v=4', email: 'lelliott@alpineclubofcanada.ca' },
                { id: 55069, name: 'Jeff Lockyer', avatar: 'https://www.alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/Jeff%20in%20fur_thumb.jpg', email: 'jlockyer@alpineclubofcanada.ca' },
                { id: 37865, name: 'Chris Petrauskas', avatar: 'https://www.alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/ChrisPetrauskas_thumb.jpg', email: 'cpetrauskas@alpineclubofcanada.ca' },
                { id: 48246, name: 'Lawrence White', avatar: 'https://www.alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/LW%20gunslinger%20staff.jpg', email: 'lwhite@alpineclubofcanada.ca' }
            ]
        }));
    });

    render() {
        return (
            <React.Fragment>
                <Typography>Step 1: Search for a contact</Typography>
                <SearchBox className={this.props.classes.searchBox} onSearch={this.handleSearch} />
                <Typography>Step 2: Add a contact</Typography>
                <ContactSelect className={this.props.classes.contactsDisplay} contacts={this.state.contacts} action={{ color: 'primary', name: 'Add', callback: this.handleAction }} />
                <Typography>Step 3: Define roles</Typography>
                <AdminDisplay className={this.props.classes.adminDisplay} administrators={this.state.administrators} />
            </React.Fragment>
        );
    }
}

ContactSearch.propTypes = {

};

ContactSearch.defaultProps = {

};

export default withStyles(styles)(ContactSearch);
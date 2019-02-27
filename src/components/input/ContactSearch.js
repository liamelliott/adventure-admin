import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Typography, withStyles } from '@material-ui/core';

import SearchBox from './SearchBox';
import ContactSelect from '../display/ContactSelect';

import shuffle from 'lodash/shuffle';
import differenceBy from 'lodash/differenceBy';

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

        this.classes = props.classes;
    }

    handleAdd = (contact) => new Promise((resolve, reject) => {
        this.setState(Object.assign(this.state, { contacts: this.state.contacts.filter((value) => value.id != contact.id), administrators: [...this.state.administrators, contact] }));
        console.log(this.state.contacts);
    });

    handleRemove = (contact) => new Promise((resolve, reject) => {
        this.setState(Object.assign(this.state, { administrators: this.state.administrators.filter((value) => value.id != contact.id) }));
    });

    handleSearch = (query) => new Promise((resolve, reject) => {
        const searchResult = [
            { id: 28681, name: 'Liam Elliott', avatar: 'https://avatars1.githubusercontent.com/u/6991749?s=460&v=4', email: 'lelliott@alpineclubofcanada.ca' },
            { id: 55069, name: 'Jeff Lockyer', avatar: 'https://www.alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/Jeff%20in%20fur_thumb.jpg', email: 'jlockyer@alpineclubofcanada.ca' },
            { id: 37865, name: 'Chris Petrauskas', avatar: 'https://www.alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/ChrisPetrauskas_thumb.jpg', email: 'cpetrauskas@alpineclubofcanada.ca' },
            { id: 48246, name: 'Lawrence White', avatar: 'https://www.alpineclubofcanada.ca/WEB/images/ACC/About/National%20Office/LW%20gunslinger%20staff.jpg', email: 'lwhite@alpineclubofcanada.ca' }
        ];

        const contactList = differenceBy(searchResult, this.state.administrators, (value) => value.id);

        setTimeout(() => {
            this.setState(Object.assign(this.state, {
                contacts: shuffle(contactList)
            }));
            resolve();
        }, 1000);
    });

    render() {
        return (
            <React.Fragment>
                <Typography component="h2" variant="h5" gutterBottom>Search for a contact</Typography>
                <SearchBox className={this.props.classes.searchBox} placeholder="Contact Name or Email" onSearch={this.handleSearch} />
                <ContactSelect className={this.props.classes.contactsDisplay} contacts={this.state.contacts} action={{ color: 'primary', name: 'Add', callback: this.handleAdd }} emptyMessage="No contacts match your query." />
                <Typography component="h2" variant="h5">Administrators {this.state.administrators.length > 0 && `(${this.state.administrators.length})`}</Typography>
                <ContactSelect className={this.props.classes.adminDisplay} contacts={this.state.administrators} action={{ color: 'secondary', name: 'Remove', callback: this.handleRemove }} emptyMessage="No administrators are signed up for this adventure." />
            </React.Fragment>
        );
    }
}

ContactSearch.propTypes = {

};

ContactSearch.defaultProps = {

};

export default withStyles(styles)(ContactSearch);
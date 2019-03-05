import React from 'react';
import PropTypes, { object } from 'prop-types';
import axios from 'axios';

import { Typography, withStyles } from '@material-ui/core';

import SearchBox from './SearchBox';
import ContactSelect from '../display/ContactSelect';

import shuffle from 'lodash/shuffle';
import intersectionBy from 'lodash/intersectionBy';
import omit from 'lodash/omit';

const styles = theme => ({
    searchBox: {
    },
    contactsDisplay: {
    },
    adminDisplay: {
    }
});

class ManageAdministratorsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            administrators: []
        };
    }

    handleAdd = (contact) => new Promise(() => {
        // TODO replace with api call and update ui in promise
        const hidden = { ...contact, hidden: true };

        this.setState(Object.assign(this.state, { contacts: this.state.contacts.map(value => value.id === contact.id ? hidden : value), administrators: [...this.state.administrators, contact] }));
    });

    handleRemove = (contact) => new Promise((resolve, reject) => {
        // TODO replace with api call and update ui in promise
        const administrators = this.state.administrators.filter(value => value.id != contact.id);

        this.setState(Object.assign(this.state, { contacts: [...this.state.contacts.map(value => value.id === contact.id ? omit(value, 'hidden') : value)], administrators }));
    });

    handleSearch = (query) => new Promise((resolve, reject) => {

        this.props.onSearch(query).then((searchResult) => {
            this.setState(Object.assign(this.state, {
                contacts: searchResult.map(value => this.state.administrators.some(admin => admin.id === value.id) ? { ...value, hidden: true } : value)
            }));
        }).catch();

        resolve();
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

ManageAdministratorsPage.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default withStyles(styles)(ManageAdministratorsPage);
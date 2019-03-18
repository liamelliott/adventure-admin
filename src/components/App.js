import React from 'react';
import { Typography } from '@material-ui/core';
import { uniqBy } from 'lodash';
import axios from 'axios';

import ManageAdministratorsPage from './input/ManageAdministratorsPage';

export function normalizeContacts(...results) {
    const combined = [];
    results.forEach((result) => {
        combined.push(...result["Items"]["$values"])
    });

    return combined.map(value => {
        return {
            id: value["Id"],
            name: value["Name"],
            email: value["Email"]
        }
    });
};

class App extends React.Component {


    handleSearch = (query) => new Promise((resolve, reject) => {
        const nameQuery = axios.get(`/partysummary?name=contains:${query}`);
        const emailQuery = axios.get(`/partysummary?email=contains:${query}`);

        Promise.all([nameQuery, emailQuery]).then((results) => {
            resolve(normalizeContacts(...results));
        }).catch((error) => {
            reject(error);
        });
    });

    handleAdd = (contact) => new Promise((resolve, reject) => {
        axios.post().then((response) => {
            resolve();
        }).catch((error) => {
            reject();
        });
    });

    handleRemove = (contact) => new Promise((resolve, reject) => {
        axios.delete().then((response) => {
            resolve();
        }).catch((error) => {
            reject();
        });
    });

    render() {
        return (
            <div>
                <Typography variant="title" gutterBottom>Adventure Admin</Typography>
                <ManageAdministratorsPage onSearch={this.handleSearch} onAdd={this.handleAdd} onRemove={this.handleRemove} />
            </div>
        )
    }
}

export default App;
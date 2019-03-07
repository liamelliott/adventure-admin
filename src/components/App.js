import React from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

import ManageAdministratorsPage from './input/ManageAdministratorsPage';
import { apiToken, baseURL } from '../../config';
import { CsrfToken, BearerToken } from '../connections/Token';

class App extends React.Component {

    constructor(props) {
        super(props);

        axios.defaults.baseURL = baseURL;
        const token = apiToken ? new BearerToken(apiToken) : new CsrfToken(document.getElementById('__RequestVerificationToken').value);
        token.connect(axios);
    }

    handleSearch = (query) => new Promise((resolve, reject) => {
        console.log(axios.defaults);
        axios.get(`/party?name=contains:${query}`).then((response) => {
            resolve([]);
        }).catch((error) => {
            reject();
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
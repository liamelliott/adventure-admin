import React from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

import ManageAdministratorsPage from './input/ManageAdministratorsPage';
import { apiToken } from '../../config/secrets';
import { CsrfToken, BearerToken } from '../connections/Token';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const token = apiToken ? new BearerToken(apiToken) : new CsrfToken(document.getElementById('__RequestVerificationToken').value);
        token.connect(axios);
    }

    handleSearch = (query) => new Promise((resolve, reject) => {
        resolve([]);
    });

    handleAdd = (contact) => new Promise((resolve, reject) => {
        resolve();
    });

    handleRemove = (contact) => new Promise((resolve, reject) => {
        resolve();
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
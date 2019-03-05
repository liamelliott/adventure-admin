import React from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

import ManageAdministratorsPage from './input/ManageAdministratorsPage';
import { apiToken } from '../../config/secrets';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const token = apiToken || { type: 'csrf', value: document.getElementById('__RequestVerificationToken').value };
        this.setState(Object.assign(this.state, { apiToken: token }));
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
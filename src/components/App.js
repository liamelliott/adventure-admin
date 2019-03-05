import React from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

import ContactSearch from './input/ManageAdministratorsPage';
import ManageAdministratorsPage from './input/ManageAdministratorsPage';

class App extends React.Component {

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
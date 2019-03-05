import React from 'react';
import { Typography } from '@material-ui/core';

import ContactSearch from './input/ManageAdministratorsPage';
import ManageAdministratorsPage from './input/ManageAdministratorsPage';

class App extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="title" gutterBottom>Adventure Admin</Typography>
                <ManageAdministratorsPage />
            </div>
        )
    }
}

export default App;
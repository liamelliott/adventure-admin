import React from 'react';
import { Typography } from '@material-ui/core';

import ContactSearch from './input/ContactSearch';

class App extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="title" gutterBottom>Adventure Admin</Typography>
                <ContactSearch />
            </div>
        )
    }
}

export default App;
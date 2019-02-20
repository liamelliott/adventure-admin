import React from 'react';
import { Typography } from '@material-ui/core';

import SearchableInput from './input/SearchableInput';

class App extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="title" gutterBottom>Adventure Admin</Typography>
                <SearchableInput />
            </div>
        )
    }
}

export default App;
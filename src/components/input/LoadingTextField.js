import React from 'react';
import { Paper, InputBase, CircularProgress, Divider, IconButton } from '@material-ui/core';

class LoadingTextField extends React.Component {
    render() {
        return (
            <Paper>
                <InputBase placeholder={this.props.placeholder} />
                <CircularProgress variant="determinate" />
            </Paper>
        );
    }
}
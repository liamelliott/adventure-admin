import React, { PropTypes } from 'react';
import { Paper, InputBase, CircularProgress, Divider, IconButton } from '@material-ui/core';

class LoadingTextField extends React.Component {

    handleChange = (event) => {
        if (event.target.value.length >= this.props.minLength) {

        }
    }

    render() {
        return (
            <Paper>
                <InputBase type="text" placeholder={this.props.placeholder} onChange={this.handleChange} />
                <CircularProgress variant="determinate" />
            </Paper>
        );
    }
}

LoadingTextField.propTypes = {
    placeholder: PropTypes.string,
    minLength: PropTypes.number
};

LoadingTextField.defaultProps = {
    placeholder: '',
    minLength: 3
};

export default LoadingTextField;
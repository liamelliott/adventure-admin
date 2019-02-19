import React, { PropTypes } from 'react';
import { Paper, InputBase, CircularProgress, Divider, IconButton } from '@material-ui/core';

class LoadingTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isLoading: false };
    }

    handleChange = (event) => {
        if (event.target.value.length >= this.props.minLength) {

        }
    }

    render() {
        return (
            <Paper>
                <InputBase type="text" placeholder={this.props.placeholder} onChange={this.handleChange} />
                {this.state.isLoading && <CircularProgress variant="determinate" />}
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
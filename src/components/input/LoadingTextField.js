import React, { PropTypes } from 'react';
import { Paper, InputBase, CircularProgress, Divider, IconButton } from '@material-ui/core';

class LoadingTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isLoading: false };
    }

    toggleLoading = () => {
        this.setState({ isLoading: !this.state.isLoading })
    };

    handleChange = (event) => {
        const { value } = event.target;

        if (value.length >= this.props.minLength) {
            this.props.onLoad().then((success) => {

            }, (failure) => {

            });
        }
    };

    render() {
        return (
            <Paper>
                <InputBase type="text" placeholder={this.props.placeholder} onChange={this.handleChange} />
                {this.state.isLoading && <CircularProgress variant="indeterminate" />}
            </Paper>
        );
    }
}

LoadingTextField.propTypes = {
    placeholder: PropTypes.string,
    onLoad: PropTypes.func,
    minLength: PropTypes.number
};

LoadingTextField.defaultProps = {
    placeholder: '',
    minLength: 3
};

export default LoadingTextField;
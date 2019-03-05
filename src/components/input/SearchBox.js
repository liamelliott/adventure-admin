import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 40
    },
    input: {
        marginLeft: 10,
        flex: 1
    },
    loader: {
        margin: 5
    }
};

class SearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = { input: '', isLoading: false };

        this.classes = props.classes;
    }

    handleChange = (event) => {
        clearTimeout(this.timer);

        const { value } = event.target;

        this.timer = setTimeout(() => {
            this.setState(Object.assign(this.state, { input: value, isLoading: true }));
            this.props.onSearch(value).then(() => {
                this.setState({ ...this.state, isLoading: false });
            }).catch(() => {
                this.setState({ ...this.state, isLoading: false });
            });
        }, 350);
    };

    render() {
        return (
            <Paper className={this.classes.root}>
                <InputBase className={this.classes.input} placeholder={this.props.placeholder} onChange={this.handleChange} />
                {this.state.isLoading && <CircularProgress className={this.classes.loader} size={30} thickness={6} variant="indeterminate" />}
            </Paper>
        );
    }
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired
};

SearchBox.defaultProps = {
    placeholder: ''
};

export default withStyles(styles)(SearchBox);
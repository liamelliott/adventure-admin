import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
};

class SearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = { input: ''};

        this.classes = props.classes;
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState(Object.assign(this.state, { input: value }));
    };

    handleClick = () => {
        this.props.onSearch(this.state.input).then(); 
    };

    render() {
        return (
            <Paper className={this.classes.root} elevation={4}>
                <InputBase className={this.classes.input} placeholder={this.props.placeholder} onChange={this.handleChange} />
                <IconButton className={this.classes.iconButton} aria-label="Search" onClick={this.handleClick}>
                    <SearchIcon />
                </IconButton>
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
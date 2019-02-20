import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

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
    }

    handleClick = (event) => {
        const { value } = event.target;

        console.log(value);
    };

    render() {
        return (
            <Paper className={this.props.classes.root} elevation={4}>
                <InputBase className={this.props.classes.input} placeholder={this.props.placeholder} />
                <IconButton className={this.props.classes.iconButton} aria-label="Search" onClick={this.handleClick}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    classes: PropTypes.object.isRequired
};

SearchBox.defaultProps = {
    placeholder: ''
};

export default withStyles(styles)(SearchBox);
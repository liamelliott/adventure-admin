import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography, withStyles } from '@material-ui/core';

import ContactSelect from './ContactSelect';

const styles = {
    emptyMessage: {
        textAlign: 'center'
    }
};

const AdminDisplay = (props) => {
    const { classes } = props;

    return (
        <React.Fragment>
            {props.administrators.length > 0 ? <ContactSelect contacts={props.administrators} /> : <Typography component="span" variant="subtitle2" className={classes.emptyMessage}>{props.emptyMessage}</Typography>}
        </React.Fragment>
    );
}

AdminDisplay.propTypes = {
    emptyMessage: PropTypes.string,
    administrators: PropTypes.array
};

AdminDisplay.defaultProps = {
    emptyMessage: 'There are no items here.',
    administrators: []
};

export default withStyles(styles)(AdminDisplay);
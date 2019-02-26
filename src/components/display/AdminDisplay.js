import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography, withStyles } from '@material-ui/core';

import ContactSelect from './ContactSelect';

const styles = {

};

const AdminDisplay = (props) => {
    const { classes } = props;

    return (
        <Paper>
            {props.administrators.length > 0 ? <ContactSelect contacts={props.administrators} /> : <Typography>There are no administrators assigned to this adventure.</Typography>}
        </Paper>
    );
}

AdminDisplay.propTypes = {
    administrators: PropTypes.array
};

AdminDisplay.defaultProps = {
    administrators: []
};

export default withStyles(styles)(AdminDisplay);
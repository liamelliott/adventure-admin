import React from 'react';
import PropTypes from 'prop-types';

import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 460,
        maxHeight: 200,
        overflowY: 'scroll'
    },
    list: {
        padding: theme.spacing.unit
    },
    button: {
        marginRight: theme.spacing.unit
    }
});

const ContactSelect = (props) => {
    const { contacts, classes } = props;
  
    const handleClick = (contact) => {
        props.action.callback(contact).then();
    };

    return (
        <React.Fragment>
            {contacts.length > 0 &&
                <Paper className={classes.root}>
                    <List>
                        {contacts.map((contact, index) => (
                            <ListItem className={classes.listItem} key={index}>
                                <ListItemAvatar>
                                    <Avatar alt={contact.name} src={contact.avatar} />
                                </ListItemAvatar>
                                <ListItemText primary={contact.name} secondary={contact.email} />
                                {props.action &&
                                    <ListItemSecondaryAction>
                                        <Button className={classes.button} variant="contained" color={props.action.color} onClick={() => handleClick(contact)}>{props.action.name}</Button>
                                    </ListItemSecondaryAction>}
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            }
        </React.Fragment>
    );
}

ContactSelect.propTypes = {
    action: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        callback: PropTypes.func.isRequired
    }),
    contacts: PropTypes.array.isRequired
};

export default withStyles(styles)(ContactSelect);
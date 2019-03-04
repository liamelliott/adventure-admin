import React from 'react';
import PropTypes from 'prop-types';

import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
    list: {
        padding: theme.spacing.unit
    },
    button: {
        marginRight: theme.spacing.unit
    },
    emptyMessage: {
        margin: theme.spacing.unit,
        textAlign: 'center'
    }
});

const ContactSelect = (props) => {
    const { contacts, classes } = props;

    const handleClick = (contact) => {
        props.action.callback(contact).then();
    };

    return (
        <React.Fragment>
            {contacts.length > 0 ?
                <List>
                    {contacts.filter((value) => !value.hidden).map((contact, index) => (
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
                </List> : <Typography className={classes.emptyMessage} component="span" variant="subtitle2">{props.emptyMessage}</Typography>
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
    emptyMessage: PropTypes.string,
    contacts: PropTypes.array.isRequired
};

ContactSelect.defaultProps = {
    emptyMessage: 'There are no items to display.'
};

export default withStyles(styles)(ContactSelect);
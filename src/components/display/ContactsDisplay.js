import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const ContactsDisplay = (props) => {
    const { contacts } = props;

    return (
        <List>
            {contacts.map((contact) => (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt={contact.name} src={contact.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} secondary={contact.email} />
                    <ListItemSecondaryAction>
                        <IconButton>
                            <AddCircle size="large" color="secondary" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

ContactsDisplay.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default ContactsDisplay;
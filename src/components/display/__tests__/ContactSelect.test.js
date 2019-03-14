import React from 'react';
import TestRenderer from 'react-test-renderer';

import ContactSelect from '../ContactSelect';
import { ListItemText } from '@material-ui/core';

describe('<ContactSelect />', () => {

    it('should not display hidden contacts', () => {
        const demoContact = { avatar: 'img.jpg' };
        const hiddenContact = { name: 'Jason Bourne', email: 'bourne@secrecy.gov', hidden: true, ...demoContact };

        const allContacts = [hiddenContact, ...Array(2).fill({ name: 'First Last', email: 'anonymous@example.com', ...demoContact })]

        const renderer = TestRenderer.create(<ContactSelect contacts={allContacts} />);
        const instance = renderer.root;

        expect(instance.findAllByType(ListItemText).some(value => value.props.secondary === hiddenContact.email)).toBe(false);
    });

    it('should display correct number of visible contacts', () => {
        const emptyMessage = 'List is empty.';
        const demoContact = { name: 'First Last', email: 'email@example.com', avatar: 'img.jpg' };

        const allContacts = [...Array(5).fill({ ...demoContact }), ...Array(2).fill({ ...demoContact, hidden: true })];

        const renderer = TestRenderer.create(<ContactSelect contacts={allContacts} emptyMessage={emptyMessage} />);
        const instance = renderer.root;

        expect(instance.findByType('ul').children.length).toBe(5);
    });

    it('should display empty message if no contacts are visible', () => {
        const emptyMessage = 'List is empty.';
        const hiddenContacts = Array(5).fill({ name: 'First Last', email: 'email@example.com', avatar: 'img.jpg', hidden: true });

        const renderer = TestRenderer.create(<ContactSelect contacts={hiddenContacts} emptyMessage={emptyMessage} />);
        const instance = renderer.root;

        expect(instance.findByType('span').children).toEqual([emptyMessage]);
    });
});
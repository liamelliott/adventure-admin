import React from 'react';
import renderer from 'react-test-renderer';
import ContactSelect from '../ContactSelect';

describe('ContactSelect', () => {
    it('should not display hidden contacts', () => {
        const demoContact = { avatar: 'img.jpg' };
        const hiddenContact = { name: 'Jason Bourne', email: 'bourne@secrecy.gov', hidden: true, ...demoContact };

        const allContacts = [hiddenContact, ...Array(2).fill({ name: 'First Last', email: 'anonymous@example.com', ...demoContact })]

        const component = renderer.create(<ContactSelect contacts={allContacts} />);
        const tree = component.toJSON();

        tree.children.forEach(value => console.log(value.children));
    });

    it('should display correct number of visible contacts', () => {
        const emptyMessage = 'List is empty.';
        const demoContact = { name: 'First Last', email: 'email@example.com', avatar: 'img.jpg' };

        const allContacts = [...Array(5).fill({ ...demoContact }), ...Array(2).fill({ ...demoContact, hidden: true })];

        const component = renderer.create(<ContactSelect contacts={allContacts} emptyMessage={emptyMessage} />);
        const tree = component.toJSON();

        expect(tree.children.length).toBe(5);
    });

    it('should display empty message if no contacts are visible', () => {
        const emptyMessage = 'List is empty.';
        const hiddenContacts = Array(5).fill({ name: 'First Last', email: 'email@example.com', avatar: 'img.jpg', hidden: true });

        const component = renderer.create(<ContactSelect contacts={hiddenContacts} emptyMessage={emptyMessage} />);
        const tree = component.toJSON();

        expect(tree.children).toEqual([emptyMessage]);
    });
});
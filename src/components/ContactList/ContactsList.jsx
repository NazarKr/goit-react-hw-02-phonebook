import React from 'react';
import { ContactListUl, ContactItemLi, ContactName } from './ContactsList.styled'
import { Button } from '../FormContact/FormicContact.styled'


const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListUl>
            {contacts.map(({ id, name, number }) => (
                <ContactItemLi key={id}>
                    <ContactName>{name}</ContactName>
                    <ContactName>{number}</ContactName>
                    <Button
                        type="submit"
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </Button>
                </ContactItemLi>))}
        </ContactListUl>
    );
};

export default ContactsList;


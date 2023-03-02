import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import FormContact from './FormContact';
import SearchFilter from './SearchFilter';
import ListContact from './ListContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const newContact = values;

    const check = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    newContact.id = nanoid();

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    resetForm({
      name: '',
      number: '',
    });
  };

  handleFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== id),
    });
  };

  makeFiltredContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <FormContact onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <SearchFilter onFilter={this.handleFilter} />
        <ListContact
          contacts={this.makeFiltredContacts()}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

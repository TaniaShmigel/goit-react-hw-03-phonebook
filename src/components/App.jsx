import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import FormContact from './FormContact';
import SearchFilter from './SearchFilter';
import ListContact from './ListContact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parseContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parseContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

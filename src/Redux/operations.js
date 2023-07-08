import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a84fe0dca581464b85a07c.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
});

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      throw new Error('Failed to add contact');
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete contact');
    }
  }
);

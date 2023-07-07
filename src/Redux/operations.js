import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a84fe0dca581464b85a07c.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const response = await axios.post('/contacts', { name, number });
    return response.data;
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);

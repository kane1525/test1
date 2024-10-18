import { createAsyncThunk } from '@reduxjs/toolkit';
import someApi from '../../api';
import axios from 'axios';

export const fetchAvailableCompanies = createAsyncThunk(
  'companies/fetchAvailableCompanies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await someApi.getCompanies();
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || 'Failed to fetch companies'
        );
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

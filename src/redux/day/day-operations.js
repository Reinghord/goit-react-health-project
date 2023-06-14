import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'config';

export const postProduct = createAsyncThunk(
  'day/postProduct',
  async (body, { rejectWithValue }) => {
    try {
      const product = await instance.post('/day', body);
      return product.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'day/deleteProduct',
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const product = await instance.delete('/day', { data: body });
      console.log(product);
      return product.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dayInfo = createAsyncThunk(
  'day/info',
  async (body, { rejectWithValue }) => {
    try {
      const dayInfo = await instance.post('/day/info', body);
      return dayInfo.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

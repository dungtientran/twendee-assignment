import { createSlice } from '@reduxjs/toolkit';

interface searchSliceState {
    search: string
}

const initialState: searchSliceState = {
    search: ''
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    search: (state, action) => {
      state.search = action.payload
    }
  },
})

export const { search } = searchSlice.actions


export default searchSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'; import { IUsers } from '../../services/model';
import { getAllUser } from '../../services/users';
;
// import type { RootState } from '../index';

interface usersState {
  users: IUsers[] | [],
  page?: string,
  results?: string,
  isLoading: boolean
}

const initialState: usersState = {
  users: [],
  page: undefined,
  results: undefined,
  isLoading: false
}
export const getAllUserAction = createAsyncThunk('getAllUserAction', async (page: string, thunkApi) => {
  const res = await getAllUser(page);
  return res.data
})
export const usersSlice = createSlice({
  name: 'usersSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOpenusers: (state, action) => {

    },
  },
  extraReducers(builder) {
    builder.addCase(getAllUserAction.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getAllUserAction.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload?.results
      console.log(action.payload);
    })
    builder.addCase(getAllUserAction.rejected, (state, action) => {
      state.isLoading = false
      state.users = []
    })
  }
});



export const { setOpenusers } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default usersSlice.reducer
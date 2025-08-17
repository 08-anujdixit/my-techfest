import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,          // User is not logged in
  userData: null          // MongoDB user data will be stored here
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Called after successful login from MongoDB backend
    storeUser: (state, action) => {
      state.status = true;
      state.userData = action.payload; // Direct MongoDB user object
    },

    unstoreUser: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
});

export const { storeUser, unstoreUser } = userSlice.actions;

export default userSlice.reducer;
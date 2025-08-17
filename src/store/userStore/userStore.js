import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice.js';

const userStore = configureStore({
  reducer: {
    user: userSlice,
  }
})

export default userStore;



//ACCESS THROUGH auth.userData
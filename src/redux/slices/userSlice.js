import { createSlice } from "@reduxjs/toolkit";
import { withReduxStateSync } from 'redux-state-sync'


const initialState =  {
  user: {},
  isLoggedIn: false,
}


const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = {...state.user, ...action.payload}
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = {}
      state.isLoggedIn = false
    }
  }
})

export const {signIn, signOut} = userSlice.actions
export default withReduxStateSync(userSlice.reducer)
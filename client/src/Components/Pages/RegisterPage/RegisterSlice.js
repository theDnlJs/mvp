import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "createAccount",
  initialState: {
    test: false
  },
  reducers: {
    registerRegister(state) {
      state.test = true;
    }
  }
});

export const { registerRegister } = registerSlice.actions;
export default registerSlice.reducer;

export const register = ({ userForm }) => async dispatch => {
  dispatch(registerRegister());
};

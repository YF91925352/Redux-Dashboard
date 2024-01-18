import { setToken as _setToken, getToken, request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "user",
  //利用localstorage保证页面刷新token值不会恢复初始值！非常妙！
  initialState: { token: getToken() || "" },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      //localstorage储存一份，方式页面刷新时token的值回到初始值“”
      _setToken(action.payload);
    },
  },
});

export const { setToken } = userStore.actions;
export const userReducer = userStore.reducer;
export const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    dispatch(setToken(res.data.token));
  };
};

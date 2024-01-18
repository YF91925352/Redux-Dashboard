//封装token进行存 取 删
const TOKENKEY = "token_key";
export const setToken = (token) => {
  localStorage.setItem(TOKENKEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKENKEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKENKEY);
};

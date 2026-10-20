import { AuthState } from "../types/auth.type";

const initialState: AuthState = {
  registerObj: {
    userName: "",
    email: "",
    password: "",
  },

  loginObj: {
    email: "",
    password: "",
  },

  loading: false,
};

export default initialState;

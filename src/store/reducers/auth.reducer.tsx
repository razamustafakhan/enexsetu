import { AuthAction, AuthState } from "../types/auth.type";

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "HANDLE_RGISTER_CHANGE":
      return {
        ...state,
        registerObj: {
          ...state.registerObj,
          [action.payload.name]: action.payload.value,
        },
      };
    case "HANDLE_LOGIN_CHANGE":
      return {
        ...state,
        loginObj: {
          ...state.loginObj,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default authReducer;

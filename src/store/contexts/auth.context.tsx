"use client";

import { createContext, useContext, useReducer } from "react";

import { AuthContext } from "../types/auth.type";
import authReducer from "../reducers/auth.reducer";
import initialState from "../intitialstate/auth.state";
import { apiPost } from "@/services/api";
import { signIn } from "next-auth/react";

const Auth = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(e.target.value, name);
    dispatch({
      type: "HANDLE_RGISTER_CHANGE",
      payload: { name: name, value: value },
    });
  };
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(e.target.value, name);
    dispatch({
      type: "HANDLE_LOGIN_CHANGE",
      payload: { name: name, value: value },
    });
  };
  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();
    const data = await apiPost("/api/register", {
      ...state.registerObj,
    });
  };

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: state.loginObj.email,
      password: state.loginObj.password,
      // role: state.loginObj.role,
      redirect: false,
    });
  };

  return (
    <Auth.Provider
      value={{
        state,

        handleRegisterChange,
        handleLoginChange,
        handleRegisterSubmit,
        handleLoginSubmit,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

const useAuth = () => {
  const context = useContext(Auth);
  if (!context) {
    throw new Error("Error in auth ocntext");
  }
  return context;
};

export { AuthProvider };

export default useAuth;

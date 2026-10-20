export type registerObj = {
  userName: string;
  email: string;
  password: string;
};
export type loginObj = {
  email: string;
  password: string;
};

export type AuthState = {
  registerObj: registerObj;
  loginObj: loginObj;
  loading: boolean;
};

export type AuthContext = {
  state: AuthState;
  handleRegisterChange: (e: any) => void;
  handleLoginChange: (e: any) => void;
  handleRegisterSubmit: (e: any) => Promise<void>;
  handleLoginSubmit: (e: any) => Promise<void>;
};

export type AuthAction =
  | {
      type: "SET_LOADING";
    }
  | {
      type: "HANDLE_RGISTER_CHANGE";
      payload: { name: any; value: any };
    }
  | {
      type: "HANDLE_LOGIN_CHANGE";
      payload: { name: any; value: any };
    };

import React, { FC, useState } from "react";
import * as auth from "auth-provider";
import { User } from "project-list/searchPanel";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvide = () => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user));
  const register = (form: AuthForm) =>
    auth.register(form).then((user) => setUser(user));
};

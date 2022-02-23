// 在真实环境种，如果使用firebase 这种第三方auth服务的话，就不需要本文件了
import { User } from "project-list/searchPanel";
const localStoragekey = "__auth_provider_token__";
export const getToken = () => window.localStorage.getItem(localStoragekey);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStoragekey, user.token || "");
  return user;
};
export const login = (data: { username: string; password: string }) => {
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    console.log(response);
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};
export const register = (data: { username: string; password: string }) => {
  fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    console.log(response);
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};
export const logout = () => window.localStorage.removeItem(localStoragekey);

import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const tokenLoader = () => {
  const token = getAuthToken();
  return token;
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/unAuth");
  }

  return null;
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user;
};

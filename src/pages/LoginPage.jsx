import axios from "axios";
import Login from "../components/Login";
import { redirect } from "react-router-dom";
import { compose } from "@reduxjs/toolkit";

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

export const action = async ({ request }) => {
  try {
    const data = await request.formData();

    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const response = await axios.post(
      "http://localhost:8000/api/user/login",
      loginData
    );

    const token = response.data.data.token;

    localStorage.setItem("token", token);

    return redirect("/");
  } catch (error) {
    console.log(error);
  }
};

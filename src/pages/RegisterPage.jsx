import axios from "axios";
import { redirect } from "react-router-dom";
import Register from "../components/Register";

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await axios.post(
    "http://localhost:8000/api/user/register",
    userData
  );

  console.log(response.data);

  return redirect("/login");
};

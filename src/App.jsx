import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Order from "./pages/Order";
import BooksQuery from "./pages/BooksQuery";
import OrderCart from "./pages/OrderCart";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import { tokenLoader } from "./util/auth";
import { checkAuthLoader } from "./util/auth";
import Unauth from "./pages/Unauth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <RegisterPage />, action: registerAction },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "books", element: <BooksQuery /> },
      { path: "order/:bookID", element: <Order />, loader: checkAuthLoader },
      { path: "cart", element: <OrderCart />, loader: checkAuthLoader },
      
    ],
  },
  {
    path: "/unAuth",
    element: <Unauth />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

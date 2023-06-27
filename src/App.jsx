import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Order from "./pages/Order";
import BooksQuery from "./pages/BooksQuery";
import OrderCart from "./pages/OrderCart";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <RegisterPage />, action: registerAction },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "books", element: <BooksQuery /> },
      { path: "order/:bookID", element: <Order /> },
      { path: "cart", element: <OrderCart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

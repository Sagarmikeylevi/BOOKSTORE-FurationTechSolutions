import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home, { loader as HomeLoader } from "./pages/Home";
import Order from "./pages/Order";
import BooksQuery from "./pages/BooksQuery";
import OrderCart from "./pages/OrderCart";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: HomeLoader },
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

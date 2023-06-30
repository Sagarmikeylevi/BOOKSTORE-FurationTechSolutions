import { Outlet, useLoaderData } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footersection";
import { useEffect } from "react";

const RootLayout = () => {
  const token = useLoaderData();
  useEffect(() => {
    if(!token) {
      return;
    }

    if (token === "EXPIRED") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      localStorage.removeItem('expiration');
    }

    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      localStorage.removeItem("expiration");
    }, 1 * 60 * 60 * 1000);
  }, [token]);
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footersection";

const RootLayout = () => {
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

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import BreadCrumb from "../components/BreadCrumb";

const Layout = () => {
  return (
    <>
      <Header />
      <BreadCrumb />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

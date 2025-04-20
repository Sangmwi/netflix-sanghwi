import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./AppLayout.style.css";
import FooterComponent from "./components/Footer/FooterComponent";

import Header from "./components/Header/Header";
  function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default AppLayout;

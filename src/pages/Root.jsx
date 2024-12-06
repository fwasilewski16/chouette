import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { PurpleBanner } from "../UI/PurpleBanner";

export default function Root() {
  return (
    <>
      <Navbar />
      <PurpleBanner />
      <Outlet />
      <Footer />
    </>
  );
}
